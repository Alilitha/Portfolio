SELECT neighbourhood,room_type,COUNT(*) AS listings,
 MEDIAN(price) AS median_advertised_zar,AVG(availability_365) AS available_days
FROM read_parquet('analytics/cleaned/cape-town.parquet')
GROUP BY ALL ORDER BY listings DESC;