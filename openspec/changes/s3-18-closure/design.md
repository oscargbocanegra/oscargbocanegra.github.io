# Design: S3.18 Closure

## Technical Approach

Use candidate-first sequencing: verify owner authority for S3.5/S3.17, render six capabilities from one bilingual Jekyll data model, publish one successor commit, prove CI/Pages deployment, execute formal S3.17 on that deployed SHA, then reconcile H-03 and rerun S3.18. The audited `5727b618...` remains the immutable baseline. This implements the three change specs without treating backlog or historical QA as approval.

## Architecture Decisions

| Decision | Choice | Alternatives rejected | Rationale |
|---|---|---|---|
| Capability ownership | New `docs/_data/capabilities.yml` with six ordered records and EN/ES fields; Liquid loops in both Home pages | Duplicate six blocks; JavaScript-rendered content | One source prevents count/order drift and remains compatible with static rendered HTML, SEO, and no-JS behavior. |
| Rendering pattern | Semantic section with six articles/cards, existing shared classes/tokens, no scores or percentages | Reuse five-pill list; new component framework | Existing Jekyll/HTML/CSS patterns are sufficient; avoids redesign and arbitrary proficiency claims. |
| Evidence identity | Baseline SHA plus one successor SHA carried through deployment, QA, and reports | Updating evidence before source changes; mixed historical evidence | A single immutable candidate makes lineage auditable and prevents H-03 recurrence. |
| Acceptance gate | Formal S3.17 sign-off precedes S3.18; unresolved material Critical/High blocks closure | Backlog-only approval or CI-only closure | Matches Master Prompt authority and the explicit binary closure rule. |

## Data Flow

```
Owner authority -> capability data -> EN/ES rendered HTML
        -> successor commit -> CI Build Check + Pages
        -> formal S3.17 evidence -> reconciled reports -> S3.18 matrix
```

Every evidence row carries candidate SHA, URL, date, method, result, defect/owner/retest state, and limitation. Historical observations remain labelled historical.

## File Changes

| File | Action | Description |
|---|---|---|
| `docs/_data/capabilities.yml` | Create | Ordered six-record bilingual model; factual descriptions and evidence boundaries. |
| `docs/index.html` | Modify | Replace five inline spans with Liquid-rendered six-group semantic cards. |
| `docs/es/index.html` | Modify | Render the same records/order with curated Spanish equivalents and same boundaries. |
| `docs/css/style.css` | Modify if needed | Only capability readability/responsive adjustments proven by rendered QA; reuse existing tokens. |
| `docs/S3.18_REMEDIATION_QA_EVIDENCE.md` | Modify | Current successor identity, formal S3.17 results, defects, owners, retests, limitations. |
| `docs/S3.18_FINAL_CONFORMANCE_REPORT.md` | Modify | Baseline-to-successor matrix and final decision after S3.17. |
| `docs/PORTFOLIO_AUDIT.md` | Modify | Synchronized pointer and status; not a second approval authority. |
| `.github/workflows/build.yml` | No change | Existing CI is the supported Jekyll build proof. |

## Interfaces / Contracts

Each data record contains `id`, `order`, `en.title`, `en.summary`, `es.title`, `es.summary`, and `evidence_boundary`. Rendering selects `page.lang`, preserves order, emits six identifiable articles, and never emits score/proficiency fields. Formal evidence must cite one deployed successor SHA and verified authority references.

## Testing Strategy

No local Ruby/Bundler, automated test runner, linter, or type checker exists. RED checks are source/static parity checks: six IDs, exact order, EN/ES presence, no percentage tokens, and rendered HTML structure. GREEN proof is GitHub Actions Build Check. Manual/browser QA covers 12 routes, required viewports, Chromium plus a second browser, light/dark, navigation, forms, keyboard/focus, accessibility, links, metadata, console, overflow, performance, claims, and privacy. Record unavailable local build as unavailable, never PASS.

## Threat Matrix

- Documentation-like paths — **N/A**: no executable documentation or classification change.
- Git repository selection — **Applicable**: bind all identity checks to this repository and explicit cwd; fail closed on another/missing root. RED: relative/absolute/wrong-root selector.
- Commit state — **Applicable**: freeze successor from the exact reviewed tree; fail on staged/worktree/index mismatch. RED: staged-only, dirty, and empty-index cases.
- Push state — **N/A**: no push/refspec automation is designed; deployment is externally evidenced.
- PR commands — **N/A**: no PR command composition or automation is in scope.

## Migration / Rollout

No data migration or feature flag. Roll out source and evidence as ordered work units, freeze the successor SHA, run S3.17, then update reports and rerun S3.18. Roll back by reverting the successor and restoring the prior evidence state while retaining the baseline finding.

## Open Questions

- [ ] Owner must provide authoritative approval/decision for S3.5 and S3.17.
- [ ] Which approved browser/manual evidence artifact can be retained or linked for the successor SHA?
