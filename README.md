# GitHub Pages deployment

See START-HERE.md for deployment instructions. This edition is configured for the repository named Portfolio.

# Alilitha Manengela — professional portfolio

A separate React/TypeScript portfolio. BizWise is a featured project; its app is not modified.

## Run
Requires Node 22.13+ (Node 24 tested).

```sh
npm install
npm run dev
```

The Next.js preview is at http://127.0.0.1:5173/Portfolio/. For a standard static deployment:

```sh
npx next build
```

Serve the generated `out/` folder with a static host. The Sites manifest points at `out`. No API keys, database or backend are required by this portfolio. Static hosts must serve extensionless routes from their generated `.html` files or enable clean URLs.

## Content
- `content/projects.ts`: six software case studies, evidence labels and media references.
- `content/analyses.ts`: five analytics project summaries.
- `app/about`, `app/experience`, `app/contact`: profile facts supplied by Alilitha.
- `public/videos`: supplied FinSpend demonstrations; simulated transactions, not real integrations.
- `public/images`: supplied portrait optimised to WebP, plus extracted video posters.
- `private/missing-evidence.md`: local-only questions; gitignored and outside the public build.

Smart Homes remains unpublished because its purpose and features are not confirmed. No CV download is displayed because no CV file was supplied. Original iconography uses the installed Lucide library as concept identities; icons are not evidence of implemented features or registered trademarks. No generated raster imagery was needed because a suitable original portrait and real demo videos were supplied.

## Reproduce analytics
Create a Python 3.12+ virtual environment and install `analytics/requirements.txt`. Run from the project root:

```sh
python analytics/acquire.py
python analytics/prepare_map.py
python analytics/process.py
python analytics/verify.py
```

The acquisition script records source URLs and SHA-256 hashes. `sources.json` describes the current snapshot. The initial Cape Town source is pinned to 2026-06-29; World Bank values may be revised by the provider on later downloads. Cached raw files preserve a previous run. Compare hashes whenever reacquiring.

The processing script creates cleaned Parquet files (local only), small public JSON aggregates, SQL examples and Markdown summaries. It validates reconciliation identities and does not publish raw personal listing details or retail customer IDs. `analytics/*.sql` queries can be executed with DuckDB after processing.

## Evidence and scope
Portfolio facts are from the supplied brief and the owner's clarification of their developer role. Public FinSpend source and both supplied recordings confirm a simulated prototype. BizWise stack details were verified in the existing local app source. Unverified source relationships and hosting services are not assigned. Facebook links are external references, not embedded evidence of unseen workflows.

## Validation
Run `node --experimental-strip-types scripts/verify-analytics.mjs` for metric checks, `npx tsc --noEmit` for TypeScript, and `npx next build` for the static production build. The data reports document all exclusions, units and limitations. See `docs/verification.md` for the checks performed on this delivery.

