"""Independent checks against cleaned row-level data; emit UI test scenarios."""
from pathlib import Path
import sys,json
ROOT=Path(__file__).resolve().parent.parent;sys.path.insert(0,str(ROOT/'.analysis-tools'))
import pandas as pd
import numpy as np
(ROOT/'.sites-runtime').mkdir(exist_ok=True)
checks=[]
for slug in ['retail','cape-town','economy','transport','bank-campaign']:
 d=pd.read_parquet(ROOT/'analytics/cleaned'/(slug+'.parquet'));meta=json.loads((ROOT/'public/data'/(slug+'.json')).read_text(encoding='utf-8')); defaults={f['key']:f['default'] for f in meta['filters']}; scenarios=[defaults]
 for f in meta['filters']:
  scenarios.extend([{**defaults,f['key']:v} for v in [f['values'][0],f['values'][-1]]])
 for filters in scenarios:
  x=d.copy()
  for k,v in filters.items():
   if v!='all':x=x[x[k].astype(str)==v]
  if slug=='retail':values=[x.net.sum(),x.gross.sum(),x.returns.sum(),len(x)] if len(x) else [None]*4
  elif slug=='cape-town':values=[len(x),x.price.median(),x.availability_365.mean(),x.number_of_reviews_ltm.fillna(0).sum()] if len(x) else [None]*4
  elif slug=='economy':
   x=x[x.value.notna()].sort_values('year');values=[x.value.iloc[-1] if len(x) else None,x.value.mean() if len(x) else None,len(x)]
  elif slug=='transport':values=[len(x),x.fare_amount.mean(),x.duration.mean(),x.trip_distance.mean()] if len(x) else [None]*4
  else:values=[len(x),x.subscribed.sum(),x.subscribed.mean()] if len(x) else [None]*3
  values=[float(v) if v is not None and pd.notna(v) else None for v in values]
  checks.append(dict(slug=slug,filters=filters,expected=values))
(ROOT/'.sites-runtime/analytics-expected.json').write_text(json.dumps(checks))
print(f'Prepared {len(checks)} independently calculated filter scenarios.')

