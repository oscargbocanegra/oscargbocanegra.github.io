# Tasks: S3.18 Closure

## Review Workload Forecast

| Field | Value |
|---|---|
| Estimated changed lines | 520–700 authored lines |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 authority/RED/model; PR 2 successor/CI/Pages; PR 3 S3.17/evidence/acceptance |
| Delivery strategy | ask-on-risk |
| Chain strategy | stacked-to-main |

Decision needed before apply: No
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Focused test command | Runtime harness | Rollback boundary |
|---|---|---|---|---|---|
| 1 | Owner gates, RED tests, shared model | PR 1 | `pwsh -File scripts/check-s3-18-closure-red.ps1` | N/A: pre-production static checks only | Revert checker/model and Home-page/CSS changes |
| 2 | Candidate SHA and deployment proof | PR 2 | GitHub Actions Build Check | GitHub Pages deployment for exact SHA | Revert successor commit only |
| 3 | Formal QA and evidence closure | PR 3 | N/A: no local automated runner; inspect evidence checks | Browser/manual QA across 12 routes and required matrices | Revert the three evidence documents |

## Phase 1: Authority and RED Gates

- [x] 1.1 Obtain explicit owner authority for S3.5 and S3.17; backlog-only approval blocks production work and sign-off.
- [x] 1.2 RED-test six IDs/order, EN/ES parity, evidence boundaries, and absence of score/proficiency tokens before production edits.
- [x] 1.3 RED-test wrong/missing repository-root selection with relative, absolute, wrong-root, and missing-root selectors; fail closed on another or absent root.
- [x] 1.4 RED-test staged-only, dirty-worktree, and empty-index commit-state mismatches; fail closed unless the reviewed tree is exact.

## Phase 2: S3.5 Implementation

- [x] 2.1 Create `docs/_data/capabilities.yml` with six ordered groups—AI Engineering; Data Engineering; Data & AI Platforms; Architecture & Governance; Cloud & Integration; Delivery & Technical Leadership—and `id`, `order`, EN/ES titles, summaries, evidence boundaries.
- [x] 2.2 Replace inline groups in `docs/index.html` and `docs/es/index.html` with one ordered Liquid model; preserve semantic articles, no-JS output, parity, and no scoring.
- [x] 2.3 Adjust `docs/css/style.css` only for rendered readability/responsive defects proven by QA. No CSS change: the existing `commercial-grid--three` and `commercial-card` rules provide the required structure, and no rendered defect was proven by the available static checks.

## Phase 3: Candidate and Deployment

- [x] 3.1 Retained PR 1 RED-gate evidence and reran the PR 1 GREEN static contract (exit 0); verified baseline `5727b6188f91fc767416e124d64087fdfa9c82f6`, successor `bb1b68f633be080910a4c2416e144ad54afae5c3`, and `origin/main` at that successor. Review was explicitly declined for candidate `sha256:ffc019...`; publication proceeded under ordinary policy and is not reviewed or approved.
- [x] 3.2 Recorded GitHub Build Check run `33463845954` and Pages deployment run `33463844443` as successful for `bb1b68f`; local Ruby/Bundler/Jekyll remain unavailable and are not recorded as PASS.

## Phase 4: Formal S3.17 QA

- [ ] 4.1 With owner authority, execute formal current-SHA QA across all 12 EN/ES primary routes: viewports, two browsers, themes, navigation/CTA/form/no-JS, keyboard/focus, accessibility, links, metadata, console, overflow, performance, claims, and privacy.
- [ ] 4.2 Record severity, owner, evidence, retest, limitations, and S3.17 sign-off only when authority and current-SHA evidence are complete.

## Phase 5: Evidence Closure

- [ ] 5.1 Reconcile H-03 in `docs/S3.18_REMEDIATION_QA_EVIDENCE.md`, `docs/S3.18_FINAL_CONFORMANCE_REPORT.md`, and `docs/PORTFOLIO_AUDIT.md` with baseline-to-successor lineage; label mixed/historical evidence.
- [ ] 5.2 Only after formal S3.17 sign-off, rerun S3.18; accept only with no unresolved material Critical/High and explicit Medium/Low dispositions, otherwise retain `Rework Required`.

