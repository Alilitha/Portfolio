SELECT contact,campaign_band,COUNT(*) AS records,
 SUM(subscribed) AS subscriptions,100.0*AVG(subscribed) AS conversion_percent
FROM read_parquet('analytics/cleaned/bank-campaign.parquet')
GROUP BY ALL ORDER BY contact,campaign_band;
-- Duration is deliberately excluded; it is unavailable before a call.