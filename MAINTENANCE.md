# Portfolio maintenance guide

Use this guide to keep the English and Spanish portfolio routes, shared shell, resume, and evidence boundaries aligned.

## Quick path

1. Classify the change as content, presentation, or behavior.
2. Edit the smallest owning source.
3. Review the corresponding English and Spanish pages plus repeated claims.
4. Build with Jekyll and manually check the affected routes and interactions.

## Source of truth

| Concern | Source |
| --- | --- |
| Site metadata and URL | `docs/_config.yml` |
| Shared profile facts | `docs/_data/site_profile.yml` |
| Primary navigation and language switcher | `docs/_includes/header.html` |
| Footer navigation and social links | `docs/_includes/footer.html` |
| Shared head, CSS link, and SEO metadata | `docs/_includes/head.html` |
| Shared layout | `docs/_layouts/default.html` |
| Global menu, theme, and intake behavior | `docs/js/scripts.js` |
| Shared styling | `docs/css/style.css` |
| Canonical English resume | `docs/resume.html` |
| Canonical Spanish resume | `docs/es/resume.html` |
| Legacy resume redirects | `docs/resume-old.html`, `docs/resume2.html` |

## Routes and conversion path

Primary navigation is Home, Services, Case Studies (`projects.html`), About, Resume, and Work With Me, with matching `/es/` routes. Keep each route's `alternate_url` and language metadata correct when changing a page.

Work With Me is the current conversion page. Its intake form uses JavaScript to prepare a `mailto:` draft; without JavaScript, the page provides a `<noscript>` explanation and direct email/LinkedIn alternatives. No server-side submission or website data retention is implemented. `contact.html` remains a compatibility direct-contact page with email, LinkedIn, and GitHub links; do not document it as the primary conversion flow.

## Resume policy

- Keep `docs/resume.html` and `docs/es/resume.html` as the maintained bilingual resume pages.
- Keep `docs/resume-old.html` and `docs/resume2.html` as legacy English redirect pages only.
- Do not create additional resume variants or edit legacy redirects into content pages.
- When experience, dates, technologies, or positioning changes, check the resume against Home, About, Services, Case Studies, and Work With Me.
- Preserve the site's evidence boundary: independent public technical work is not automatically client delivery, production deployment, or a measured commercial outcome.

## Change workflow

### Content

Update facts, dates, copy, project descriptions, or calls to action. Check duplicated claims and the matching Spanish route.

### Presentation

Update shared styles or layout only when the change applies broadly. Check desktop and mobile navigation, the language switcher, the theme control, and resume-specific styling when relevant.

### Behavior

For menu, theme, filters, animation, or Work With Me intake changes, inspect `docs/js/scripts.js` and manually test the affected page. Do not describe the mailto flow as a hosted form or promise delivery, storage, pricing, availability, or response times.

## Pre-publish checklist

- [ ] Primary header and footer links work in English and Spanish.
- [ ] `alternate_url` values and bilingual route pairs remain correct.
- [ ] `docs/resume.html` remains the canonical English resume target.
- [ ] Legacy resume URLs still redirect after a Jekyll render.
- [ ] Case Studies filters and theme/menu behavior still work.
- [ ] Work With Me prepares a mailto draft, and its no-JavaScript fallback remains accurate.
- [ ] Contact remains a compatibility direct-contact page.
- [ ] External links opened in a new tab include `rel="noopener noreferrer"`.
- [ ] Public claims remain supported and evidence boundaries remain explicit.

## Local preview and build

```bash
bundle install
bundle exec jekyll serve --source docs --destination .tmp/jekyll-preview
```

CI runs:

```bash
bundle exec jekyll build --source docs --destination .tmp/jekyll-build
```

The build check confirms Jekyll rendering only. Link coverage, visual layout, browser interactions, external destinations, and mail-client behavior require manual review. Generated `.tmp/` and `docs/_site/` output is not source and should not be edited or treated as proof of those checks.

## Current improvement candidates

1. Add non-flaky advisory link checking to CI.
2. Reduce duplicated claims across pages where that can be done without weakening bilingual content.
3. Expand SEO or social-preview metadata only when the product goal and evidence justify it.
