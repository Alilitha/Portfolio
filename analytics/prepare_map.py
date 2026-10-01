"""Create generalised ward outlines from the pinned Inside Airbnb GeoJSON."""
from pathlib import Path
import json,math,hashlib,urllib.request
from datetime import datetime,timezone
root=Path(__file__).resolve().parent.parent;raw=root/'analytics/raw/cape-town-wards.geojson'
url='https://data.insideairbnb.com/south-africa/wc/cape-town/2026-06-29/visualisations/neighbourhoods.geojson'
if not raw.exists():raw.parent.mkdir(parents=True,exist_ok=True);raw.write_bytes(urllib.request.urlopen(url,timeout=90).read())
(root/'public/data').mkdir(parents=True,exist_ok=True)
d=json.loads(raw.read_text())
def simplify(points,tol=.0003):
 if len(points)<=2:return points
 a,b=points[0],points[-1];dx=b[0]-a[0];dy=b[1]-a[1];den=dx*dx+dy*dy
 best=0;idx=0
 for i,p in enumerate(points[1:-1],1):
  t=max(0,min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/den)) if den else 0
  distance=(p[0]-a[0]-t*dx)**2+(p[1]-a[1]-t*dy)**2
  if distance>best:best=distance;idx=i
 if best>tol*tol:return simplify(points[:idx+1],tol)[:-1]+simplify(points[idx:],tol)
 return [a,b]
allpts=[p for f in d['features'] for poly in f['geometry']['coordinates'] for ring in poly for p in ring]
xs=[p[0]*math.cos(math.radians(34)) for p in allpts];ys=[p[1] for p in allpts];xmin,xmax=min(xs),max(xs);ymin,ymax=min(ys),max(ys);scale=min(620/(xmax-xmin),500/(ymax-ymin));paths=[]
for f in d['features']:
 parts=[]
 for poly in f['geometry']['coordinates']:
  for ring in poly:
   points=simplify(ring);coords=[(10+(p[0]*math.cos(math.radians(34))-xmin)*scale,10+(ymax-p[1])*scale) for p in points];parts.append('M'+'L'.join(f'{x:.1f},{y:.1f}' for x,y in coords)+'Z')
 paths.append({'name':f['properties']['neighbourhood'],'d':''.join(parts)})
(root/'public/data/cape-town-map.json').write_text(json.dumps({'paths':paths,'source':url,'viewBox':f'0 0 {(xmax-xmin)*scale+20:.1f} {(ymax-ymin)*scale+20:.1f}'},separators=(',',':')))
sources=json.loads((root/'analytics/sources.json').read_text());sources=[s for s in sources if s['file']!='cape-town-wards.geojson'];sources.append(dict(file='cape-town-wards.geojson',url=url,sha256=hashlib.sha256(raw.read_bytes()).hexdigest(),bytes=raw.stat().st_size,retrieved_at=datetime.now(timezone.utc).isoformat()));(root/'analytics/sources.json').write_text(json.dumps(sources,indent=2))
print('Generalised',len(paths),'ward outlines.')
