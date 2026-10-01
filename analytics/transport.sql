SELECT hour,weekday,zone,payment,COUNT(*) AS trips,
 AVG(fare_amount) AS mean_fare_usd,AVG(duration) AS mean_minutes
FROM read_parquet('analytics/cleaned/transport.parquet')
GROUP BY ALL ORDER BY trips DESC;