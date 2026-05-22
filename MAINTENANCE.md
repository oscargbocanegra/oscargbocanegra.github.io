# Portfolio maintenance guide

This file explains how to update the portfolio without reintroducing the content drift and UX issues already cleaned up.

## Quick path

1. Decide whether the change is **content**, **presentation**, or **behavior**.
2. Edit the smallest source of truth.
3. Check every public page that repeats the same claim.
4. Validate navigation, links, and the direct canonical CV path.

## Source of truth

| Topic                           | Source of truth               |
| ------------------------------- | ----------------------------- |
| Site metadata                   | `docs/_config.yml`            |
| Shared navigation               | `docs/_includes/header.html`  |
| Shared footer/social links      | `docs/_includes/footer.html`  |
| Homepage stats and highlights   | `docs/index.html`             |
| Professional background         | `docs/about.html`             |
| Contact channels                | `docs/contact.html`           |
| Shared site-level profile facts | `docs/_data/site_profile.yml` |
| Canonical CV                    | `docs/resume.html`            |
| Resume-specific styles          | `docs/css/resume.css`         |

## CV policy

- `docs/index.html` remains the main landing page.
- `docs/resume.html` remains the canonical standalone CV kept online, but it stays hidden from public navigation.
- `docs/resume-old.html` and `docs/resume2.html` exist only to preserve old URLs and redirect to the canonical page.
- Do not fork the CV into additional standalone pages.
- Shared landing/about facts should live in `docs/_data/site_profile.yml`.
- If the CV changes, review whether the same claim should also change in:
  - `docs/_data/site_profile.yml`
  - `docs/contact.html` (if contact/value proposition changes)

## Public claim consistency checklist

Review these together whenever you update experience, education, certifications, or positioning:

- `docs/_data/site_profile.yml`
- `docs/resume.html`
- years of experience
- current role/title
- education dates and completion status
- certification names
- highlighted technologies
- project claims and business outcomes

## Contact page policy

The contact page is intentionally honest:

- use direct channels that actually work
- do not add a form unless it really sends messages
- if a form is reintroduced, document the provider and failure mode in `README.md`

## External link rule

Any external link that uses `target="_blank"` must also include:

```html
rel="noopener noreferrer"
```

## Editing workflow

### Content changes

Use for:

- role updates
- dates
- copy fixes
- project descriptions
- CTA wording

Check:

- duplicated claims across pages
- Spanish wording consistency
- canonical CV still aligned

### Presentation changes

Use for:

- styles
- layout tweaks
- spacing
- navigation visibility
- whether CV visibility should stay hidden from public navigation

Check:

- header/footer still consistent
- `docs/css/resume.css` if the change affects the CV page
- mobile layout if affected
- no accidental changes to shared components

### Behavior changes

Use for:

- filters
- theme toggle
- animation tweaks
- any contact interactions

Check:

- `docs/js/scripts.js`
- visible page behavior in affected screens
- no dead selectors left behind

## Pre-publish checklist

- [ ] Main nav works
- [ ] Footer links work
- [ ] `resume.html` is still reachable directly and remains the canonical CV path
- [ ] Contact page still reflects actual supported contact paths
- [ ] Project filters still work
- [ ] No inconsistent claims across public pages
- [ ] No accidental new CV variant was introduced

## Local preview and build

Preferred local preview path:

```bash
bundle install
bundle exec jekyll serve --source docs --destination .tmp/jekyll-preview
```

Minimal CI build check now lives in:

- `.github/workflows/build.yml`

## Recommended next improvements

These are still good candidates after the operational hardening pass:

1. Add non-flaky advisory link checking in CI.
2. Reduce remaining duplicated content between homepage/about/CV where practical.
3. Add a favicon and richer social preview assets if branding becomes a priority.
4. Expand SEO metadata only if discoverability becomes a product goal.
