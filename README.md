# Amsterdam Mustangs

The official team website — roster, schedule & results, standings, stats,
and media, with a season switcher covering 2017-2018 through 2026-2027.

## Deploy to GitHub Pages

**1. Push this project to your GitHub repo.**

If you're reusing your existing repo, delete its current contents first
(or start a fresh repo) so this project's files are what's at the root.

```bash
cd mustangs-site-repo
git init
git add .
git commit -m "Amsterdam Mustangs site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

**2. Set the base path.**

Open `vite.config.js` and replace `REPLACE_WITH_REPO_NAME` with your repo's
exact name (the part after `github.com/<your-username>/` in its URL,
including capitalization). Commit and push that change.

- If your repo is named `mustangs-site`, the site will live at
  `https://<your-username>.github.io/mustangs-site/`.
- Exception: if your repo is named exactly `<your-username>.github.io`,
  set `base: "/"` instead — that's a special "user site" repo that's
  served from the domain root.

**3. Turn on GitHub Pages.**

In your repo on GitHub: **Settings → Pages → Build and deployment → Source**,
select **GitHub Actions**. That's it — the included workflow
(`.github/workflows/deploy.yml`) builds and deploys the site automatically
on every push to `main`. Check the **Actions** tab for build progress; the
first deploy usually takes a minute or two.

## Local development

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Opens the site locally with hot-reload at `http://localhost:5173`.

## Project structure

```
src/MustangsSite.jsx   — the entire site (all pages, all season data)
src/main.jsx           — React entry point
src/index.css          — Tailwind entry point
vite.config.js         — build config (set your repo name here)
.github/workflows/     — auto-deploy to GitHub Pages on push
```

## Updating content

All roster, schedule, standings, and stats data lives in constants near the
top of `src/MustangsSite.jsx` (`ROSTERS`, `SCHEDULE_DATA`, `STANDINGS_DATA`,
`STATS_DATA`), keyed by season (e.g. `"2025-2026"`). Team logos are stored
inline as base64 image data in `OPPONENT_LOGOS`, matched to teams via
`OPPONENT_LOGO_MAP`. Editing any of these and pushing to `main` will
automatically redeploy the live site.
