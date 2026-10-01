# Bank campaign analysis

Independent, AI-assisted portfolio analysis. Not client work.

Period: May 2008–November 2010 · Portugal

## Question
How does term-deposit subscription vary with contact channel, contact frequency and previous campaign outcomes?

## Findings
- 4,640 of 41,188 records show a subscription, a rate of 11.27%.
- Cellular records have the higher descriptive channel rate at 14.74%; this is not a causal channel effect.
- 12 rows have identical values across the original fields. They are retained because no stable customer identifier establishes that they are duplicates.

## Recommendations
- Report subscriptions alongside the number of contacted records so small groups do not look deceptively strong.
- Treat channel and contact-frequency differences as questions for a controlled campaign test rather than proven effects.
- For a future pre-call model, exclude call duration and evaluate precision, recall and PR-AUC against a simple baseline.

## Limitations
- Historical Portuguese banking data, not current South African banking behaviour.
- Contact frequency and channel are not random assignments. Differences may reflect customer selection and campaign timing.
- No stable customer ID supports a unique-customer count, so the dashboard reports records.
- This is descriptive analysis, not a predictive model. Call duration is excluded from published analysis fields to avoid suggesting pre-call availability.

## Cleaning audit
- Chose bank-additional-full.csv: 41,188 original records and 21 fields; did not mix it with bank-full.csv or the 10% sample.
- Excluded 0 invalid-target or non-positive-campaign records. Retained 12 exact attribute matches because they may be different customers.
- Preserved unknown categories. Kept the previous-outcome non-existent category distinct from failure.
- Binned campaign contacts into 1, 2–3, 4–6 and 7+. Omitted duration, raw customer attributes and economic covariates from the public cube.

## Sources
https://archive.ics.uci.edu/static/public/222/bank+marketing.zip
SHA-256: e0bf5f5de5b846e2f18e9d90606637267d46dfa260e0f17bb12e605db5efbeb4