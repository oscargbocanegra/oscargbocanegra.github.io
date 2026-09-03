# Current state

## Verified repository state

- The project is a Jekyll portfolio published from `docs/`.
- English routes live at the `docs/` root; Spanish counterparts live under `docs/es/`.
- The primary navigation covers Home, Services, Case Studies, About, Resume, and Work With Me.
- Work With Me prepares a `mailto:` draft in the visitor's configured email client; it does not submit to a server or retain form data.
- Legacy English resume URLs remain redirect sources and must be checked after a Jekyll render.
- `AGENTS.md`, `CLAUDE.md`, and `.agent.md` are governed as one synchronized instruction set.
- The shared interface uses the existing color tokens; the latest refinement improves hierarchy, spacing, card interaction, navigation affordances, touch targets, and mobile layout without changing the palette.

## Validation boundaries

The CI build proves Jekyll rendering only. It does not prove visual quality, complete link coverage, external service availability, email-client behavior, or production deployment. Those require targeted manual or bounded checks and must be reported separately.

## Change documentation rule

For each change, document the resulting state in the owning file:

| Change | Documentation |
| --- | --- |
| Architecture or source ownership | `docs/architecture.md` |
| Current behavior or validation boundary | `docs/current-state.md` |
| Durable choice with tradeoffs | `docs/decisions/NNN-<decision>.md` |
| Contributor or agent guidance | `AGENTS.md` (then let the hook mirror it) |
