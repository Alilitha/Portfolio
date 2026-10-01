from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json,zipfile
root=Path('out');fail=[];pages=[]
class Links(HTMLParser):
 def handle_starttag(self,tag,attrs):
  for k,v in attrs:
   if k in ('href','src','poster') and v and v.startswith('/') and not v.startswith('//'):
    p=unquote(urlsplit(v).path).lstrip('/');candidates=[root/p,root/(p+'.html'),root/p/'index.html']
    if p=='' or any(x.exists() for x in candidates):continue
    fail.append((str(current),v))
for current in root.rglob('*.html'):
 pages.append(str(current)); parser=Links();parser.feed(current.read_text(encoding='utf-8'))
for slug in ['retail','cape-town','economy','transport','bank-campaign']:
 d=json.loads((root/'data'/(slug+'.json')).read_text(encoding='utf-8'))
 assert len(d['rows'])>0
 assert (root/'downloads'/(slug+'-summary.md')).exists()
assert not (root/'private').exists()
with zipfile.ZipFile(root/'downloads/reproducible-analysis.zip') as z:
 assert all('raw/' not in n and 'private/' not in n for n in z.namelist())
 print('Analysis archive files:',len(z.namelist()))
print('HTML files checked:',len(pages));print('Broken local references:',fail)
assert not fail
print('All local routes, asset references, datasets and downloads passed.')
