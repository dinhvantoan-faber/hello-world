# Funny Hello World with Astro

A playful static site with rotating punchlines and joke modes, ready for GitHub Pages.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:4321

## Build

```sh
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In GitHub, open Settings > Pages.
3. Set Source to GitHub Actions.
4. Push to main.
5. The workflow in .github/workflows/deploy.yml deploys dist automatically.

## Important setup note

In astro.config.mjs, update the site URL:

```js
site: 'https://YOUR-USERNAME.github.io',
```

The base path is auto-detected from GITHUB_REPOSITORY during GitHub Actions builds, so project repos and user repos both work.

## Main files

- src/pages/index.astro: funny landing page and interactions.
- src/layouts/Layout.astro: shared document layout and page metadata.
- astro.config.mjs: GitHub Pages aware site/base config.
- .github/workflows/deploy.yml: CI workflow for automatic deployment.
