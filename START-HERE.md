# Publish the actual portfolio on GitHub Pages

The old site displayed README.md because GitHub was publishing source files instead of the compiled Next.js website.

1. Extract this ZIP. Copy the CONTENTS of Alilitha_Portfolio into your existing Portfolio repository, replacing the matching files. package.json and app/ must be at the repository root, not inside another folder. Include the hidden .github folder.
2. Commit and push the updated files to main (or master).
3. On GitHub open Portfolio > Settings > Pages. Under Build and deployment, set Source to GitHub Actions.
4. Open Actions > Deploy portfolio to GitHub Pages > Run workflow. Wait for BOTH build and deploy to succeed.
5. Visit https://alilitha.github.io/Portfolio/ and refresh. Do not select the Jekyll workflow.

If you have another Pages deployment workflow in .github/workflows, disable or remove that obsolete workflow so only deploy-pages.yml publishes the site.

## Run in VS Code
Install Node.js 24. Open this folder in VS Code and run:

```sh
npm install
npm run dev
```

Visit http://127.0.0.1:5173/Portfolio/. On PowerShell use npm.cmd if npm.ps1 is blocked.
To compile manually run npm run build. The deploy workflow uploads only out/.
No secrets, database or Python are required for the website.

This edition targets the exact, case-sensitive /Portfolio/ path. Keep the repository name Portfolio.
