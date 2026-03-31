# Stray Project Website
[![GitHub Pages deploy](https://github.com/strayproject/strayproject.github.io/actions/workflows/pages.yml/badge.svg?branch=main)](https://github.com/strayproject/strayproject.github.io/actions/workflows/pages.yml)

This site now builds with Astro and deploys to GitHub Pages through GitHub Actions.

## Local Development
- Install [Node.js](https://nodejs.org/).
- Clone the repo and open a terminal in the project root.
- Run `npm install`.
- Run `npm run dev`.
- Open the local URL printed by Astro, usually `http://localhost:4321`.

## Publishing
- Push to `main` to trigger the Pages workflow in [.github/workflows/pages.yml](.github/workflows/pages.yml).
- In GitHub repository settings, Pages should use `GitHub Actions` as the source.
- This repo is published as the root GitHub Pages site at `https://strayproject.github.io`, so Astro does not use a `base` path.

## Project Structure
- `src/pages/` contains the site routes.
- `src/content/posts/` contains blog posts.
- `src/layouts/` contains shared Astro layouts.
- `public/` contains static assets served as-is.

## Adding a New Blog Post
- Create a Markdown file in `src/content/posts/`.
- Include frontmatter like this:

```md
---
title: New Website!
author: brandon pow
pubDate: 2026-03-30
urlSlug: new-website
tags: admin
---
```

- `urlSlug` controls the final URL. Posts currently publish to dated `.html` URLs like `/2026/03/30/new-website.html`.
- Markdown formatting works as usual. Raw HTML inside posts is also supported.

## Useful Commands
- `npm run dev` starts the local development server.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` previews the production build locally.
