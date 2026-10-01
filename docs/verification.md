# Verification

- Production Next.js 16.3.4 static build: passed, including TypeScript and all six software and five analytics detail routes.
- 19 exported HTML files checked; no broken local links, media references, stylesheets, scripts or download paths.
- Five datasets acquired from their named publishers. Raw hashes and documented dates preserved.
- 37 source-to-dashboard filter scenarios compare metrics independently with cleaned Parquet rows. All passed. Additional weighted-median, missing-value and zero-denominator tests passed.
- All five SQL examples executed against the cleaned data successfully.
- Keyboard-operated room-type selector changed Cape Town results from 24,542 to 3,754 private-room listings, with median ZAR 1,016.
- Keyboard map selection of a ward with no matching observations produced the expected empty state; Reset filters restored all results.
- Mobile homepage and dashboard inspected at 390px; no horizontal overflow. The ward map and controls were visually inspected on mobile. Desktop checks used the normal preview and a 1365px test viewport.
- The dashboard WebMCP tool registered, applied a valid Australian retail filter (GBP 137,009.77 net revenue), rejected an invalid country, and updated the visible state.
- Analysis download contains Python, SQL, requirements, source hashes and documentation. Raw records and private notes are excluded from the public build and archive.
- Smart Homes is unpublished pending essential details. Facebook event links are preserved but were not readable through fetch; no unseen-video claims are made.
- Software roles reflect the owner's clarification: developer, while teammates handled project management.

The local preview is not a claim of public availability. Deployment status is reported separately after hosting confirms success.
