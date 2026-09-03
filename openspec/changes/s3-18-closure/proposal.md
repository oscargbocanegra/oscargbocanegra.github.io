# Proposal: S3.18 Closure

## Intent

Close S3.18 from audited baseline `5727b6188f91fc767416e124d64087fdfa9c82f6` without overclaiming approval. Resolve authority, implement missing S3.5 content, bind evidence to one successor SHA, complete S3.17, reconcile H-03, and rerun S3.18.

## Scope

### In Scope

- Establish owner authority for S3.5 and S3.17 before implementation; both are proposed/pending.
- Implement exactly six ordered, evidence-bound EN/ES capability groups.
- Freeze/publish a successor SHA with CI Build Check and GitHub Pages proof.
- Execute formal S3.17 across EN/ES routes, responsive/browser, accessibility, navigation, CTA/form, links, metadata, console, performance, claims, and privacy checks.
- Reconcile evidence and rerun S3.18 with baseline-to-successor lineage.

### Out of Scope

- Broader redesign, new case studies, or unrelated content; portraits/`og:image` without approval.
- S3.19–S3.22 validation or promotion, penetration-test/enterprise-security claims, or unsupported header guarantees.
- Treating prior/unbound QA, CI/Pages, route probes, or axe output as formal S3.17 approval.

## Capabilities Contract

### New Capabilities

- `s3-5-capability-groups`: Exactly six ordered bilingual groups: AI Engineering; Data Engineering; Data & AI Platforms; Architecture & Governance; Cloud & Integration; Delivery & Technical Leadership. Claims are evidence-bound, EN/ES-equivalent, and unscored.
- `s3-17-formal-qa`: Formal QA evidence and sign-off bound to the deployed successor SHA.
- `s3-18-evidence-closure`: H-03 reconciliation, defect/owner/retest lineage, and final acceptance matrix.

### Modified Capabilities

- None; `openspec/specs/` is empty.

## Approach

Use candidate-first sequencing: authority -> shared six-group model -> successor SHA -> CI/Pages proof -> formal S3.17 -> evidence consolidation -> S3.18. Preserve `5727b618...` as baseline, not closure candidate.

## Affected Areas

| Area | Impact | Description |
|---|---|---|
| `docs/index.html`, `docs/es/index.html`, `docs/_data/` | Modified | Six-group content/rendering. |
| `docs/S3.18_REMEDIATION_QA_EVIDENCE.md`, `docs/S3.18_FINAL_CONFORMANCE_REPORT.md`, `docs/PORTFOLIO_AUDIT.md` | Modified | Current-SHA S3.17/H-03/S3.18 evidence. |
| `.github/workflows/build.yml` | Evidence only | Proof source; unchanged. |

## Risks

| Risk | Likelihood | Mitigation |
|---|---|---|
| Authority conflict | High | Require explicit owner resolution; do not infer approval. |
| Evidence stales after source change | High | Freeze one successor SHA before QA/docs. |
| QA overclaim or scope creep | Med | Record observed evidence and enforce listed non-goals. |

## Rollback Plan

Revert the successor and restore prior evidence; retain the baseline finding if any gate is unproven.

## Dependencies

- Owner authority for S3.5/S3.17.
- Approved bilingual group content.
- Successful CI/Pages deployment and formal QA access.

## Success Criteria

- [ ] Six exact groups render with EN/ES parity and evidence-bound claims.
- [ ] CI Build Check and Pages succeed for the tested successor SHA.
- [ ] Formal S3.17 sign-off covers required routes and QA dimensions on that SHA.
- [ ] H-03 is reconciled with baseline-to-successor lineage.
- [ ] S3.18 rerun has no unresolved material Critical/High finding; exceptions are explicit.
