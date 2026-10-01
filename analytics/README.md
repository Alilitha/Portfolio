# Analytics design and reproducibility

All five projects use genuine downloaded data. `sources.json` records URLs, sizes, retrieval times and SHA-256 checksums. Raw inputs and cleaned Parquet stay local; the public site contains aggregated JSON and documentation.

## Questions and methods

1. **Retail:** clean invoice lines, preserve missing customer IDs for revenue, compute gross/negative/net totals and rule-based recency-frequency-monetary segments. Customer IDs are excluded from published outputs. Customer concentration and repeat purchasing use identified positive-order customers. Negative adjustments cannot all be established as physical returns. GBP remains GBP.
2. **Cape Town:** deduplicate listing IDs, exclude invalid prices, retain high positive prices with a p99 sensitivity filter. Weighted medians are calculated over frequency cells, not medians of medians. Ward and room-type aggregates remove names, host IDs and precise coordinates. Available days are not bookings.
3. **Economy:** preserve 360 country-indicator-year observations, including nulls, for six World Bank indicators across South Africa, Botswana, Kenya and Brazil. One indicator/country per chart avoids unit mixing. Latest is the most recent non-null observation in the selection.
4. **Transport:** January 2025 green-taxi Parquet; exclude invalid duration, distance, fare and out-of-month pickup records. Store count and additive sums, allowing weighted mean duration, distance and fares across filters. Completed trips are not unmet demand; fares are not earnings.
5. **Bank:** use only bank-additional-full.csv, historical Portugal 2008–2010. Retain identical attribute rows without a customer ID; preserve unknown categories. Descriptive rates are associations. No predictive model is claimed. Duration is omitted to avoid pre-call leakage.

## Audit

`process.py` includes count and financial reconciliation assertions. `verify.py` calculates 37 filter scenarios independently from cleaned row-level Parquet. `scripts/verify-analytics.mjs` compares the same scenarios using the browser's pure calculation functions and checks median, null and zero-denominator edge cases.

## Downloads

Each project has a Markdown analysis summary. The reproducible-analysis.zip contains acquisition and processing scripts, SQL, requirements, source hashes and this documentation. It omits raw datasets, customer IDs, private notes and all credentials. Run from the extracted project root. `.sites-runtime` is created by verification when needed.

## Attribution

- Chen, D. (2015). Online Retail. UCI Machine Learning Repository. DOI: 10.24432/C5BW33. CC BY 4.0.
- Moro, S., Rita, P., & Cortez, P. (2014). Bank Marketing. UCI Machine Learning Repository. DOI: 10.24432/C5K306. CC BY 4.0. The additional-full dataset covers May 2008–November 2010.
- Inside Airbnb, Cape Town snapshot 2026-06-29, CC BY 4.0. Derived aggregate analysis; no endorsement implied.
- World Bank, World Development Indicators via Indicators API. Definitions and source versions are available from the publisher. Labour-market indicators are modelled ILO estimates.
- NYC Taxi & Limousine Commission, green taxi January 2025 trip records and official zone lookup. Subject to the publisher's data terms and limitations.

Run `python analytics/prepare_map.py` after acquisition and before processing to regenerate the generalised ward map. The map uses Douglas–Peucker simplification at 0.0003 degrees, and a local equirectangular projection; it is a visual aid, not a survey boundary.
