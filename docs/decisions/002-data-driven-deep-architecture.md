# 002 — Data-driven Deep Architecture site layer

## Decision

Use bilingual YAML data files and Liquid includes/layouts as the source of truth for repeated portfolio content, while keeping existing published routes intact.

## Rationale

The portfolio has repeated English and Spanish service and proof markup. Centralizing those records reduces drift and makes future additions data-only. The site remains native Jekyll and GitHub Pages compatible, with no client framework or server-side dependency.

## Tradeoffs

- Liquid/YAML keeps deployment simple but provides less schema validation than an application framework.
- `/projects.html` remains the compatibility route and `/case-studies.html` is an additional semantic alias, avoiding a redirect that could lose the existing `#lab-infra` anchor.
- The theme toggle is removed because DESIGN.md specifies one dark visual system; mobile navigation and mailto intake behavior remain lightweight JavaScript.

## Evidence boundary

Metrics and technical proof retain the repository's existing evidence qualifiers. No client, production, certification, logo, or commercial outcome claim is added.