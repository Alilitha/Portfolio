# South Africa in context

Independent, AI-assisted portfolio analysis. Not client work.

Period: 2010–2024 · API source updated 2026-07-13

## Question
How have growth, labour-market conditions and digital access evolved in South Africa alongside selected comparison countries?

## Findings
- South African GDP growth in 2024 is 0.53% in the retrieved series.
- Modelled total unemployment in South Africa is 24.68% in 2010 and 32.28% in 2024.
- 1 of 360 country–indicator–year observations are missing; they remain missing rather than becoming zero.

## Recommendations
- Read growth alongside labour-market indicators when describing the economic context; one headline does not capture all conditions.
- Use indicator definitions and units before comparing series; population levels and percentage rates cannot be added together.
- Refresh and record the source version before using these historical observations in a current briefing.

## Limitations
- Comparators are Botswana, Kenya and Brazil, selected for descriptive context rather than a matched causal comparison.
- Unemployment series are modelled ILO estimates; they are not presented as direct household-survey values.
- World Bank series can be revised. Trends and co-movement do not establish causation.
- Missing observations appear as gaps. The latest metric means the most recent available value within the selected year range, not necessarily 2024.

## Cleaning audit
- Loaded six indicators for four countries over 15 years: 360 rows.
- Preserved 1 missing values as null; did not interpolate or forward-fill.
- Duplicated country–year–indicator keys: 0.
- Retained original indicator units and modelled-estimate labels. Country and indicator selection each choose one series to avoid mixing units.

## Sources
https://api.worldbank.org/v2/country/ZAF;BWA;KEN;BRA/indicator/NY.GDP.MKTP.KD.ZG?format=json&date=2010:2024&per_page=2000
SHA-256: d2b741813dbf61b600054ff0499b56db6d159ced307362ac4641fd2e18dab904
https://api.worldbank.org/v2/country/ZAF;BWA;KEN;BRA/indicator/SL.UEM.TOTL.ZS?format=json&date=2010:2024&per_page=2000
SHA-256: 4d84da812dcc5bd547531f36bd77d575f85016128abaa909f3f7a74b12adefc4
https://api.worldbank.org/v2/country/ZAF;BWA;KEN;BRA/indicator/SL.UEM.1524.ZS?format=json&date=2010:2024&per_page=2000
SHA-256: 95d0185ac93b8de4e55e51f602008b980496ed498b44dbe384b16fb9b4dbd2ab
https://api.worldbank.org/v2/country/ZAF;BWA;KEN;BRA/indicator/FP.CPI.TOTL.ZG?format=json&date=2010:2024&per_page=2000
SHA-256: 6c51526bd7a6af191a615257e3117be555d9bcd86a0cec197e86424b6f815e55
https://api.worldbank.org/v2/country/ZAF;BWA;KEN;BRA/indicator/IT.NET.USER.ZS?format=json&date=2010:2024&per_page=2000
SHA-256: 30bb5db474b4371eeebf86e9bf18ea011225014bcf1369cd9583732f8ae0c24d
https://api.worldbank.org/v2/country/ZAF;BWA;KEN;BRA/indicator/SP.POP.TOTL?format=json&date=2010:2024&per_page=2000
SHA-256: a8e917575075d06613064aa48171a42635d90e9f74e69f7dfb8ce516d6030dfc