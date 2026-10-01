import assert from 'node:assert/strict';
import fs from 'node:fs';
import {calculate,filteredRows} from '../lib/analytics.ts';
const checks=JSON.parse(fs.readFileSync('.sites-runtime/analytics-expected.json','utf8'));
for(const c of checks){const d=JSON.parse(fs.readFileSync('public/data/'+c.slug+'.json','utf8'));const rows=filteredRows(d.rows,c.filters);d.measures.forEach((m,i)=>{const actual=calculate(rows,m),expected=c.expected[i];if(expected===null)assert.equal(actual,null,JSON.stringify(c));else assert.ok(actual!==null&&Math.abs(actual-expected)<=Math.max(0.01,Math.abs(expected)*1e-7),c.slug+' '+m.label+': '+actual+' != '+expected);});}
assert.equal(calculate([{price:10,count:2},{price:20,count:2}],{key:'price',op:'median'}),15);
assert.equal(calculate([{value:null}],{key:'value',op:'mean'}),null);
assert.equal(calculate([{subscribed:0,count:0}],{key:'subscribed',op:'ratio',denominator:'count'}),null);
console.log('Passed '+checks.length+' source-to-dashboard filter scenarios plus median, missing-data and zero-denominator checks.');
