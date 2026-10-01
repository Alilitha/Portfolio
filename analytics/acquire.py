import urllib.request, json, re, hashlib, concurrent.futures
from pathlib import Path
from datetime import datetime,timezone
root=Path(__file__).resolve().parent;raw=root/'raw';raw.mkdir(exist_ok=True)
def get(url):
 req=urllib.request.Request(url,headers={'User-Agent':'AlilithaPortfolioResearch/1.0'})
 with urllib.request.urlopen(req,timeout=120) as r:return r.read()
def download(item):
 name,url=item;p=raw/name
 if not p.exists():p.write_bytes(get(url))
 return {'file':name,'url':url,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'bytes':p.stat().st_size,'retrieved_at':datetime.now(timezone.utc).isoformat()}
html=get('https://insideairbnb.com/get-the-data/').decode()
urls=re.findall(r'https?[^"\s<>]+cape-town[^"\s<>]+/visualisations/listings.csv',html)
if not urls: raise RuntimeError('Cape Town dataset link missing')
cape='https://data.insideairbnb.com/south-africa/wc/cape-town/2026-06-29/visualisations/listings.csv'
jobs=[('retail.zip','https://archive.ics.uci.edu/static/public/352/online+retail.zip'),('bank.zip','https://archive.ics.uci.edu/static/public/222/bank+marketing.zip'),('cape-town.csv',cape),('green-2025-01.parquet','https://d37ci6vzurychx.cloudfront.net/trip-data/green_tripdata_2025-01.parquet'),('taxi-zones.csv','https://d37ci6vzurychx.cloudfront.net/misc/taxi_zone_lookup.csv')]
for indicator in ['NY.GDP.MKTP.KD.ZG','SL.UEM.TOTL.ZS','SL.UEM.1524.ZS','FP.CPI.TOTL.ZG','IT.NET.USER.ZS','SP.POP.TOTL']:
 jobs.append((indicator+'.json',f'https://api.worldbank.org/v2/country/ZAF;BWA;KEN;BRA/indicator/{indicator}?format=json&date=2010:2024&per_page=2000'))
results=[]
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
 for item in pool.map(download,jobs):results.append(item);print(item['file'],item['bytes'],flush=True)
(root/'sources.json').write_text(json.dumps(results,indent=2))
print('All source downloads complete',flush=True)

