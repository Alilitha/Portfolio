# Retail sales & customer behaviour

Independent, AI-assisted portfolio analysis. Not client work.

Period: 2010-12-01 to 2011-12-09

## Question
Where does sales value come from, how do returns change it, and which customers return?

## Findings
- After the stated cleaning rules, net revenue is GBP 9,748,131.07; gross sales of GBP 10,642,110.80 are offset by GBP 893,979.73 in negative lines.
- 65.6% of 4,338 identified purchasing customers placed at least two distinct positive invoices.
- The highest-spending 10% of identified purchasing customers account for 61.5% of identified-customer gross sales.

## Recommendations
- Separate positive sales from negative adjustments when reporting performance; revenue is not profit.
- Review high-value repeat customers as a retention cohort, and inspect return reasons before changing policy.
- Improve customer-ID capture before extending customer-level conclusions to all sales.

## Limitations
- One UK-based retailer; these are not South African sales or the whole retail market.
- December 2011 is incomplete. Monthly comparisons must account for the shorter period.
- Negative lines can include cancellations and adjustments; this analysis cannot establish physical returns for every line.
- RFM segments use the complete observed period and are descriptive, not a historical targeting model. Missing IDs are retained for revenue but excluded from customer counts.

## Cleaning audit
- Input: 541,909 rows. Removed 5,268 exact duplicate rows across all original columns.
- Removed 2,512 rows with missing/zero quantity, non-positive/missing price or missing date; removed 0 positive-quantity cancellation-coded rows.
- Retained 132,565 cleaned lines without customer IDs for financial totals; excluded them from customer-level analysis.
- Retained negative quantities with positive prices as negative adjustments. Gross = positive line values; returns = absolute negative line values; net = gross − returns.
- RFM reference is the day after the last invoice. Priority: recent high-value repeat (recency ≤90 days, ≥3 orders, gross ≥GBP 1,000); lapsed (>180 days); other repeat (≥2 orders); single purchase. Refund-only IDs share the no-positive-order segment.

## Sources
https://archive.ics.uci.edu/static/public/352/online+retail.zip
SHA-256: f5385cbb54bbebf7196389109c6b0621faab0c304e3702548165e71c84aede8b