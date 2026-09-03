# Repository Guidelines

## Project Structure

This repository is an English-first Jekyll portfolio published from `docs/` through GitHub Pages.

- `docs/`: published site source, including English pages at the root and Spanish counterparts under `docs/es/`.
- `docs/_layouts/`, `docs/_includes/`: shared page layouts, metadata, navigation, and footer markup.
- `docs/css/`, `docs/js/`: shared and resume-specific styling plus navigation, theme, filtering, and Work With Me behavior.
- `docs/_data/site_profile.yml`: shared profile facts.
- `.github/workflows/build.yml`: CI build validation.
- `MAINTENANCE.md`: detailed content, route, and pre-publish guidance.

Generated output in `.tmp/` or `docs/_site/` is disposable and must not be edited or treated as source.

## Build, Test, and Development Commands

Install the pinned Ruby dependencies, then preview locally:

```bash
bundle install
bundle exec jekyll serve --source docs --destination .tmp/jekyll-preview
```

Run the same build used by CI:

```bash
bundle exec jekyll build --source docs --destination .tmp/jekyll-build
```

The build proves Jekyll rendering only. Manually inspect affected English and Spanish routes, responsive navigation, links, filters, theme behavior, redirects, and the Work With Me `mailto:` flow.

## Coding Style & Naming

Use two-space indentation for HTML, CSS, YAML, and JavaScript. Keep filenames lowercase and descriptive; preserve the existing `.html`, `.css`, `.js`, and `.yml` conventions. Prefer the smallest owning source: shared changes belong in layouts/includes/data files, while page-specific claims stay on their owning page.

Keep bilingual route pairs aligned, including front matter and `alternate_url`. Preserve `rel="noopener noreferrer"` on links opened in a new tab.

## Testing Guidelines

There is no automated unit-test suite. Every change must pass the Jekyll build and receive targeted browser/manual review. Confirm legacy resume URLs still redirect after rendering.

## Commits and Pull Requests

Recent history uses concise prefixes such as `docs:` and `fix:`; follow that style with imperative, focused messages (for example, `docs: clarify Spanish route guidance`). PRs should explain the user-visible change, list validation performed, identify affected routes, and include screenshots for visual changes. Do not claim client delivery, production deployment, metrics, or outcomes that the repository evidence does not support.

## Documentation governance

The repository documentation follows this structure:

```text
AGENTS.md
CLAUDE.md
.agent.md
docs/
├── architecture.md
├── current-state.md
└── decisions/
    └── NNN-<decision>.md
```

`AGENTS.md` is the canonical contributor guide. `CLAUDE.md` and `.agent.md` must remain byte-for-byte identical to it. The versioned hook in `.githooks/pre-commit` synchronizes the three files before a commit and rejects ambiguous edits; CI also checks synchronization.

Every project change must update the owning documentation when it changes architecture, current behavior, an operational workflow, or a durable decision. Use `docs/architecture.md` for system structure, `docs/current-state.md` for the verified state, and `docs/decisions/` for decisions with meaningful tradeoffs.

Enable the repository hook once per clone:

```bash
git config core.hooksPath .githooks
```

The hook uses `scripts/sync-agent-guides.ps1` and `scripts/check-change-documentation.ps1`.
