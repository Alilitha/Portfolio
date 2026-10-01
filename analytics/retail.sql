-- Run from project root using DuckDB after process.py.
SELECT month,country,segment,COUNT(*) AS count,SUM(gross) AS gross,
 SUM(returns) AS returns,SUM(net) AS net
FROM read_parquet('analytics/cleaned/retail.parquet')
GROUP BY ALL ORDER BY month,country,segment;