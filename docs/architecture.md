# Project architecture

This repository is an English-first Jekyll portfolio. The published site is generated from `docs/` and deployed by GitHub Pages.

## System boundaries

| Area | Responsibility | Source of truth |
| --- | --- | --- |
| Site content | English and Spanish pages, front matter, route metadata | `docs/*.html`, `docs/es/*.html` |
| Shared presentation | Layout, head metadata, header, footer, styles | `docs/_layouts/`, `docs/_includes/`, `docs/css/` |
| Client behavior | Navigation, theme, filters, and Work With Me mailto preparation | `docs/js/scripts.js` |
| Profile data | Shared factual profile values | `docs/_data/site_profile.yml` |
| Build and delivery | Dependency pinning and GitHub Pages validation | `Gemfile`, `.github/workflows/build.yml` |
| Repository guidance | Agent instructions and documentation policy | `AGENTS.md`, `CLAUDE.md`, `.agent.md` |

## Content flow

1. A maintainer edits the smallest owning source in `docs/`.
2. Jekyll renders the source into disposable output under `.tmp/` or `docs/_site/`.
3. GitHub Actions runs the pinned Jekyll build.
4. Browser/manual review verifies routes, responsive behavior, links, bilingual alignment, and the mailto flow.

The site has no application server, form-data persistence, or server-side Work With Me submission. The browser prepares a mailto draft; the visitor's email client performs delivery.

## Documentation flow

- `docs/current-state.md` records verified behavior and validation boundaries.
- `docs/decisions/` records durable decisions and tradeoffs.
- `AGENTS.md` is canonical; the pre-commit hook mirrors it to `CLAUDE.md` and `.agent.md`.

## Constraints

- English and Spanish route pairs must remain aligned.
- Public claims must stay within repository evidence.
- Generated output is disposable and never a source of truth.

## Data-driven Deep Architecture layer

- Visual source of truth: `docs/assets/css/design-tokens.css` mirrors the supplied `DESIGN.md` tokens; `docs/assets/css/main.css` owns the responsive component styling.
- Structured portfolio content: `docs/_data/navigation.yml`, `services.yml`, `case_studies.yml`, and `metrics.yml` own bilingual navigation, service descriptions, public technical proof, and validated historical outcomes.
- Reusable rendering: `docs/_includes/service_card.html`, `metric_card.html`, and `cta_banner.html` plus `docs/_layouts/page.html` and `case_study.html` render repeated content through Liquid data loops.
- Compatibility: `/projects.html` remains the existing case-study route and `/case-studies.html` is a semantic alias. Existing `/resume.html`, legacy resume routes, anchors, and the mailto-based Work With Me flow remain available.
