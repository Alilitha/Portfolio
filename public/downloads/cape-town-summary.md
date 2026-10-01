# Cape Town short-term rentals

Independent, AI-assisted portfolio analysis. Not client work.

Period: Snapshot: 2026-06-29

## Question
How do advertised prices, room types and listing concentration vary across Cape Town wards?

## Findings
- 24,542 of 27,381 source listings have a positive, non-missing advertised price after ID deduplication.
- The median advertised price is ZAR 1,735; the mean is ZAR 3,534. Removing prices above the snapshot 99th percentile lowers the mean to ZAR 2,989.
- 63.7% of price-valid listings belong to hosts with more than one listing according to the supplied host-listing count.

## Recommendations
- Compare median prices within the same room type and ward before drawing positioning conclusions.
- Inspect the upper tail rather than assuming every high price is an error; use the price-range filter as a sensitivity check.
- Use review activity and availability as descriptive context, not as substitutes for verified occupancy or income.

## Limitations
- Unavailable calendar days are not confirmed bookings; advertised price is not realised revenue or profit.
- The summary dataset uses ward labels rather than familiar suburb names. No precise listing locations or host identities are published.
- Price-valid listings may differ from excluded listings; the dashboard describes this subset.
- A single snapshot cannot establish market-wide housing impacts or changes over time.

## Cleaning audit
- Read 27,381 listings; removed 0 duplicated IDs; excluded 2,839 missing or non-positive prices.
- Kept high prices in the default view. The snapshot p99 threshold is ZAR 28,557.73; a filter allows a sensitivity comparison.
- Availability outside 0–365: 0; no inference of bookings is made.
- Published only aggregates by ward, room type and price. Names, IDs, host identities and precise coordinates stay out of the website.

## Sources
https://data.insideairbnb.com/south-africa/wc/cape-town/2026-06-29/visualisations/listings.csv
SHA-256: 1dbd35f25a2b6c0f8c66c3865b092a87ded4c00a041da36bcf23cc2df3371c16
https://data.insideairbnb.com/south-africa/wc/cape-town/2026-06-29/visualisations/neighbourhoods.geojson
SHA-256: c7b6afcc96dc324b5c6c99d2c1c0b8c904a5157a4f2c91c59558f44064eb499a