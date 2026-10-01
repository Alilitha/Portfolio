# Transport demand & operations

Independent, AI-assisted portfolio analysis. Not client work.

Period: January 2025 · NYC green taxis

## Question
When and where are recorded green-taxi trips concentrated, and how do distance, duration and fares vary?

## Findings
- 45,249 of 48,326 source trips remain after deduplication and the documented validity rules.
- The busiest pickup hour is 17:00, with 3,930 trips across the month.
- The mean recorded fare is USD 16.51; mean duration is 13.5 minutes and mean distance is 2.69 miles.

## Recommendations
- Use the hourly profile as a starting point for staffing conversations, then validate with more months and operational constraints.
- Compare zones using both activity and trip characteristics rather than treating the highest trip count as the only service priority.
- Investigate flagged records before reusing the source for financial reporting.

## Limitations
- Recorded completed trips are a proxy for activity, not all unmet demand. Green taxis represent one taxi category, not the entire city transport system.
- Fares are not driver earnings or profit and do not include every component of total_amount.
- Weekday totals reflect how many of each weekday occur in January. No forecast is fitted from a single month.
- Validity bounds are analysis choices; legitimate unusual trips may be excluded.

## Cleaning audit
- Read 48,326 trips from Parquet; removed 0 exact duplicate rows.
- Pickup outside January 2025: 43 flagged (rules can overlap).
- Missing or non-positive/over-180-minute duration: 297 flagged (rules can overlap).
- Missing or non-positive/over-100-mile distance: 2,693 flagged (rules can overlap).
- Missing, negative or over-1000-dollar fare: 150 flagged (rules can overlap).
- Combined invalid-rule exclusions: 3,077 rows. Retained 45,249 trips.
- Joined pickup zone names from the official lookup. Preserved unknown payment types as Unknown; did not invent values for missing fields.

## Sources
https://d37ci6vzurychx.cloudfront.net/trip-data/green_tripdata_2025-01.parquet
SHA-256: 84f3a121667157efcbf012c3566a6065df6f8e0312c678cb2f29cd72cc9c0f10
https://d37ci6vzurychx.cloudfront.net/misc/taxi_zone_lookup.csv
SHA-256: 1a99e105092230f8620f301edcca7f80d3080642ff404d28ed957d3fa222c8ed