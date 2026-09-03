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
