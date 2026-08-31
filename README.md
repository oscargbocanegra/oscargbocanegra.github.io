# oscargbocanegra.github.io

English-first portfolio for Oscar Bocanegra, published by GitHub Pages from the `docs/` directory.

## Quick path

1. Edit the tracked source under `docs/`.
2. Keep the English and Spanish routes aligned where both exist.
3. Build with Jekyll and manually check navigation, links, and key interactions.
4. Push only after reviewing the resulting site and the repository status.

## Current site structure

The shared Jekyll shell is used by the portfolio pages through `_layouts/default.html`, `_includes/head.html`, `_includes/header.html`, and `_includes/footer.html`.

| Public area | English route | Spanish route |
| --- | --- | --- |
| Home | `/` | `/es/` |
| Services | `/services.html` | `/es/services.html` |
| Case Studies | `/projects.html` | `/es/projects.html` |
| About | `/about.html` | `/es/about.html` |
| Resume | `/resume.html` | `/es/resume.html` |
| Work With Me | `/work-with-me.html` | `/es/work-with-me.html` |

These six areas are the primary navigation. `docs/contact.html` is retained as a compatibility direct-contact page; it is not the primary conversion path. The current conversion path is Work With Me, whose form prepares a `mailto:` draft in the visitor's configured email application. JavaScript builds the subject and body; the `<noscript>` fallback explains the direct email and LinkedIn alternatives. The site does not submit form data to a server or retain it.

`docs/resume.html` and `docs/es/resume.html` are the canonical bilingual resume pages. `docs/resume-old.html` and `docs/resume2.html` preserve legacy English URLs and redirect to `/resume.html` after Jekyll renders their Liquid redirect source.

## Repository layout

| Path | Purpose |
| --- | --- |
| `docs/` | GitHub Pages publish root and Jekyll source |
| `docs/_config.yml` | Site metadata, URL, language defaults, and Jekyll plugins |
| `docs/_layouts/` | Shared page layouts |
| `docs/_includes/` | Shared head, header, and footer markup |
| `docs/*.html`, `docs/es/*.html` | English and Spanish content pages |
| `docs/css/style.css` | Shared site and responsive styling |
| `docs/css/resume.css` | Resume-specific styling |
| `docs/js/scripts.js` | Shared navigation, theme, and Work With Me behavior |
| `docs/_data/site_profile.yml` | Shared profile facts used by portfolio content |
| `.github/workflows/build.yml` | CI Jekyll build check |

## Editing rules

- Update shared metadata in `docs/_config.yml` and shared profile facts in `docs/_data/site_profile.yml`.
- Keep page-specific claims in their owning page, and review repeated claims across Home, About, Case Studies, Services, Work With Me, and Resume.
- Treat `docs/resume.html` as the canonical English resume source and `docs/es/resume.html` as its Spanish counterpart. Do not add resume variants or repurpose legacy redirect pages.
- Keep navigation in `docs/_includes/header.html` and footer links in `docs/_includes/footer.html`.
- Do not describe the public Lab Infra case study as client delivery, production deployment, or a measured commercial outcome; the site labels it as independent public technical work.

## Local preview and build

The repository pins its local Jekyll toolchain through `Gemfile` (`github-pages` and `webrick`). With Ruby and Bundler available:

```bash
bundle install
bundle exec jekyll serve --source docs --destination .tmp/jekyll-preview
```

The CI build uses the same source explicitly:

```bash
bundle exec jekyll build --source docs --destination .tmp/jekyll-build
```

Generated output under `.tmp/` or `docs/_site/` is disposable and is not the content source. Opening Liquid redirect files directly without a Jekyll render does not verify their redirect behavior.

## Validation boundaries

- CI currently proves that the Jekyll site builds; it does not prove visual quality, every link, external service availability, or email-client behavior.
- Navigation, bilingual route pairing, external links, project filters, theme/menu behavior, and the Work With Me mailto flow still require manual browser review.
- Confirm that external links opened in a new tab retain `rel="noopener noreferrer"`.
- Confirm that public claims remain consistent with the evidence boundary stated on the site and in the canonical resume.

See [`MAINTENANCE.md`](./MAINTENANCE.md) for the maintainer workflow.
