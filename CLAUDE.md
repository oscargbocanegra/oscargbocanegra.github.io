# Repository Instructions

This file is the repository-level instruction source for Codex. Keep it concise,
specific to this repository, and actionable. Codex loads instructions from the
project root down to the working directory; a nearer `AGENTS.md` or
`AGENTS.override.md` may add or override these rules.

## Repository context

This is an English-first Jekyll portfolio published from `docs/` through GitHub
Pages.

- English pages live at the `docs/` root; Spanish counterparts live under `docs/es/`.
- Shared layouts and markup live in `docs/_layouts/` and `docs/_includes/`.
- Shared styling and behavior live in `docs/css/` and `docs/js/`.
- Shared profile facts live in `docs/_data/site_profile.yml`.
- CI build validation lives in `.github/workflows/build.yml`.
- Content, route, and pre-publish guidance lives in `MAINTENANCE.md`.
- `.tmp/` and `docs/_site/` are generated output; never edit or commit them.

## Working agreements

- Make the smallest change that satisfies the request; do not redesign unrelated pages.
- Keep English and Spanish route pairs semantically and visually aligned, including front matter and `alternate_url`.
- Do not invent or silently alter factual claims, URLs, metrics, client outcomes, production status, or delivery status.
- Preserve legacy routes and anchors. Preserve `rel="noopener noreferrer"` on links opened in a new tab.
- Use two-space indentation for HTML, CSS, YAML, and JavaScript. Keep filenames lowercase and descriptive.
- Prefer the smallest owning source: shared behavior belongs in layouts, includes, data, or shared assets; page-specific claims stay on their owning page.
- Ask before irreversible publication or external changes unless the user has explicitly authorized them.

## Validation

Install the pinned Ruby dependencies before local Jekyll validation:

```bash
bundle install
bundle exec jekyll build --source docs --destination .tmp/jekyll-build
```

For visual or interaction changes, also inspect the affected English and Spanish
routes at desktop and mobile widths, navigation, links, filters, theme behavior,
redirects, and the Work With Me `mailto:` flow. A successful build proves
rendering only; it does not prove browser, production, provider, or deployment
behavior. Record unavailable checks as unavailable, not as passing.

## Code review rules

- Review the exact changed scope, with special attention to bilingual parity, route compatibility, factual claims, and generated-file contamination.
- Flag broad refactors, new dependencies, changed public behavior without documentation, and claims unsupported by repository evidence.
- Require targeted validation for the affected routes; reserve formatting and lint concerns for the existing CI or hook checks.

## Documentation governance

When a change affects architecture, current behavior, an operational workflow, or
a durable decision, update the owning documentation:

```text
docs/architecture.md
docs/current-state.md
docs/decisions/NNN-<decision>.md
```

`AGENTS.md` is canonical. `CLAUDE.md` and `.agent.md` must remain byte-for-byte
identical. The versioned pre-commit hook synchronizes the three files and rejects
ambiguous edits; CI also checks synchronization. Enable it once per clone:

```bash
git config core.hooksPath .githooks
```

The hook uses `scripts/sync-agent-guides.ps1` and
`scripts/check-change-documentation.ps1`.

## Git and delivery

- Use focused conventional commits such as `docs: clarify Spanish route guidance` or `fix: preserve resume redirect`.
- Never add `Co-Authored-By` or AI attribution to commits.
- Before committing, inspect the diff and status; stage only intended files.
- Pull requests must describe the user-visible change, affected routes, validation performed, and screenshots for visual changes.
