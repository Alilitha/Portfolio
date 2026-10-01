SELECT country,year,indicator,value,unit
FROM read_parquet('analytics/cleaned/economy.parquet')
WHERE country='South Africa' ORDER BY indicator,year;
-- Missing values remain NULL; do not substitute zero.