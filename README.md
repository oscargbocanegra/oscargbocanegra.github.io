# oscargbocanegra.github.io

Portfolio site for Oscar Bocanegra, published with GitHub Pages from `docs/`.

## Quick path

1. Edit content under `docs/`.
2. Keep `docs/resume.html` as the canonical CV page.
3. Validate visible pages and links before publishing.
4. Push changes to the branch that GitHub Pages serves.

## What this repo contains

This repository is a static portfolio site with Jekyll-style layouts/includes and hand-authored content pages.

| Area                          | Purpose                                                     |
| ----------------------------- | ----------------------------------------------------------- |
| `docs/`                       | Publish root for GitHub Pages                               |
| `docs/_config.yml`            | Site metadata used by Liquid templates                      |
| `docs/_layouts/`              | Shared page layouts                                         |
| `docs/_includes/`             | Shared head, header, and footer partials                    |
| `docs/*.html`                 | Main site pages                                             |
| `docs/css/`                   | Shared styles, including resume-specific CSS                |
| `docs/js/scripts.js`          | Site-wide frontend behavior                                 |
| `docs/_data/site_profile.yml` | Shared site-level profile facts used by landing/about pages |
| `openspec/`                   | Project planning/spec artifacts used for change management  |
| `.pi/`                        | Pi runtime/project settings                                 |

## Current architecture

- **Site type:** static portfolio site
- **Template layer:** Jekyll-compatible includes and layouts
- **Publish root:** `docs/`
- **Main landing page:** `docs/index.html`
- **Standalone online CV:** `docs/resume.html` (kept online but not linked from the public navigation)
- **Legacy CV URLs:** `docs/resume-old.html` and `docs/resume2.html` redirect to the canonical page after a Jekyll build

## Main pages

| Page                 | Role                                |
| -------------------- | ----------------------------------- |
| `docs/index.html`    | Landing page                        |
| `docs/about.html`    | Professional profile and background |
| `docs/projects.html` | Project portfolio with filters      |
| `docs/contact.html`  | Direct contact channels             |
| `docs/resume.html`   | Canonical CV                        |

## Editing rules

### Content source of truth

- Update **shared metadata** in `docs/_config.yml` when the author name, email, or social handles change.
- Update **site-level shared facts** for landing/about pages in `docs/_data/site_profile.yml`.
- Update the **standalone online CV** in `docs/resume.html`.
- Do **not** introduce new CV variants unless there is a deliberate product reason.
- Treat `index.html` as the main landing page and `resume.html` as a maintained CV destination reached by direct URL.
- If a claim changes, check whether it belongs in:
  - `docs/_data/site_profile.yml` (shared landing/about facts)
  - `docs/resume.html` (standalone CV content)

### Shared UI

- Navigation lives in `docs/_includes/header.html`
- Footer/social links live in `docs/_includes/footer.html`
- Global JS lives in `docs/js/scripts.js`
- Global site styling lives mainly in `docs/css/style.css`
- Resume-specific styling lives in `docs/css/resume.css`

## Local preview

### Preferred local preview

```bash
bundle install
bundle exec jekyll serve --source docs --destination .tmp/jekyll-preview
```

This repo now pins a minimal local Jekyll toolchain through `Gemfile`.
Preview/build output under `.tmp/` is local-only and should not be treated as source.

### If you do not want to install Ruby/Jekyll locally

Use one of these paths:

- preview through your GitHub Pages workflow/environment
- review generated output after a Pages/Jekyll build
- make content-only edits and validate manually in the published site

Note: redirect pages such as `resume-old.html` and `resume2.html` rely on Jekyll/Liquid rendering. Opening the raw source files directly in a browser will not produce a valid redirect.

## Validation checklist

Before publishing, verify at least:

- [ ] Navigation links work
- [ ] Project filters on `projects.html` still work
- [ ] Contact page does not promise unsupported form behavior
- [ ] `resume.html` is still the canonical CV target for direct access
- [ ] External links using `target="_blank"` also use `rel="noopener noreferrer"`
- [ ] Public claims are consistent across homepage, about page, and CV

## Known current constraints

- No automated tests beyond a minimal Jekyll build check in CI
- Link checking and HTML/content validation are still mostly manual
- Some generated output may appear under `docs/_site/` locally, but it should remain generated output rather than source of truth

## Maintainer guide

See [`MAINTENANCE.md`](./MAINTENANCE.md) for the editing workflow, content ownership, and publishing checklist.
