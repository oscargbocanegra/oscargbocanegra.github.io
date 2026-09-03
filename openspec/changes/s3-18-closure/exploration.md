## Exploration: S3.18 closure

### Current State

The smallest coherent closure is not documentation-only. It must align the six S3.5 capability groups, freeze formal S3.17 evidence to one deployed candidate SHA, and only then rerun S3.18 against that same SHA.

**Authority actually found**

- The repository does not contain a copy of the Master Prompt. It only references it from the S3.18 reports.
- The authoritative source was found as the native Google Doc **“S3 - Portfolio Conversion - Development Master Prompt”** (`https://docs.google.com/document/d/1zJ2pel2k49KsSxw2_uT2OWpL4_YcSG1VD4TDjh1fWBo/`). The current retrieved revision is `ANLCKQmckVvdTRSEvt_S4PMkPGyqq5bmzhNjOMNvVzkScLNFN3qYd3saXjPu4V85uYMtFuaJu4ybZWT2dP4Lv_XmVcZTvc2uDyTyS98a9rA`.
- That current document says `Status: Living specification`, labels S3.5 **PROPOSED FOR APPROVAL**, and labels S3.17 **PROPOSED / PENDING USER APPROVAL**. No current `FINAL / APPROVED FOR BUILD` record or S3.5/S3.17 approval record was found in the document.
- The same document defines the six S3.5 groups in this order: AI Engineering; Data Engineering; Data & AI Platforms; Architecture & Governance; Cloud & Integration; Delivery & Technical Leadership. It requires equivalent EN/ES structure, evidence-bound claims, no proficiency scoring, and a reusable shared structure where compatible with Jekyll.
- The same document requires S3.17 to run on the implemented production site, produce a complete QA evidence pack, and reach zero unresolved Critical defects, zero unresolved High defects in primary flows, zero broken primary links, functional EN/ES mobile and desktop journeys, and explicit acceptance of remaining Medium/Low issues. S3.18 is explicitly after S3.17 and must remain separate.

**Backlog and repository evidence actually found**

- `C:\Users\Oscar\Downloads\Puntos-pendientes.txt` evaluates commit `5727b6188f91fc767416e124d64087fdfa9c82f6`, reports 83.3% weighted compliance, zero Critical findings, one material High (`H-03`), and `Rework Required`. It also records S3.5 as partial because Home has five groups instead of six.
- Local `HEAD`, `origin/main`, and the reviewed backlog SHA all resolve to `5727b6188f91fc767416e124d64087fdfa9c82f6`.
- `docs/index.html` and `docs/es/index.html` each render five inline `<span>` capability groups. A read-only production probe also found five groups in each locale.
- `docs/S3.18_FINAL_CONFORMANCE_REPORT.md` still identifies `d5b048d` as the reviewed commit and retains the earlier 72.7% matrix. `docs/S3.18_REMEDIATION_QA_EVIDENCE.md` is frozen across `64c404a`, `37dea85`, and other earlier states. Neither evidence document references `5727b6188f91fc767416e124d64087fdfa9c82f6`; `docs/PORTFOLIO_AUDIT.md` also does not bind its verification summary to that SHA. This independently confirms H-03.
- The local ignored QA directory contains 185 files and multiple browser/axe/keyboard/performance evidence JSON files, but none contains the current SHA. These artifacts are available historical evidence, not current-SHA formal S3.17 proof.
- Current-SHA GitHub evidence is available: `Build check` run `33456132742` and Pages deployment run `33456131960` both completed successfully for `5727b6188f91fc767416e124d64087fdfa9c82f6`; Pages reports `main`/`docs` as the source and status `built`.
- A bounded live-origin probe in this exploration returned HTTP 200, one `h1`, one `main`, and the expected `lang` for all 12 primary EN/ES routes. This is independently observed structural evidence, but it is not a formal browser, accessibility, interaction, responsive, performance, privacy, or S3.17 PASS.
- Ruby, Bundler, and Jekyll are unavailable locally. The repository-supported build proof is GitHub Actions; rendered/manual QA remains required.

The authority state is therefore a proposal blocker that must be explicit: the backlog calls the six groups “approved,” but the current authoritative Google Doc still calls S3.5 and S3.17 proposed. SDD may prepare a proposal, but implementation or formal approval claims must not silently resolve that conflict.

### Affected Areas

- `docs/_data/site_profile.yml` or a focused new file under `docs/_data/` — candidate owner for one ordered bilingual capability model, avoiding EN/ES structural drift.
- `docs/index.html` — replace the five English inline groups with the six-group semantic rendering.
- `docs/es/index.html` — render the same six records with curated Spanish labels and descriptions.
- `docs/css/style.css` — likely no new system is required; existing `commercial-grid--three` and `commercial-card` patterns already provide responsive cards and shared dark-theme tokens. Any change should be limited to capability-specific readability gaps proven during implementation.
- `docs/S3.18_REMEDIATION_QA_EVIDENCE.md` — consolidate candidate identity, S3.17 checklist, defect register, owners, retests, and bounded evidence.
- `docs/S3.18_FINAL_CONFORMANCE_REPORT.md` — replace the stale matrix only after S3.17 finishes, preserving `Rework Required` unless the acceptance rule is actually met.
- `docs/PORTFOLIO_AUDIT.md` — synchronize its evidence pointer, tested SHA, and remaining limitations without turning it into a second approval authority.
- `.github/workflows/build.yml` — evidence source only; no workflow change is currently indicated.
- `.tmp/qa-screenshots/` — disposable local evidence source only; ignored artifacts must not be cited as current-SHA proof unless regenerated and identity-bound.

### Approaches

1. **Candidate-first, single final evidence pack** — approve authority, implement S3.5, publish a successor candidate SHA, execute formal S3.17 on that SHA, then consolidate H-03 and rerun S3.18 once.
   - Pros: avoids immediately stale documentation; keeps build, browser, accessibility, performance, privacy, and conformance evidence on one immutable candidate; minimizes contradictory approval records.
   - Cons: H-03 for `5727b618...` is preserved as the baseline finding rather than closed by a standalone documentation commit; requires the final reports to distinguish baseline SHA from closure SHA.
   - Effort: Medium

2. **Two-stage evidence-first closure** — first rewrite all three evidence documents to describe `5727b618...` accurately, then implement S3.5 and repeat evidence consolidation for the successor SHA.
   - Pros: closes the historical documentation mismatch literally against the audited commit before source changes.
   - Cons: duplicates evidence work, creates an intentionally short-lived evidence state, and increases the chance of another H-03 mismatch.
   - Effort: High

3. **Documentation-only closure on `5727b618...`** — import the backlog result and mark H-03 closed without changing capabilities or running formal S3.17.
   - Pros: smallest file diff.
   - Cons: invalid; S3.5 remains five groups, formal S3.17 is absent, the current Master Prompt approval state is unresolved, and S3.18 acceptance criteria are not met.
   - Effort: Low, but unacceptable

For S3.5 implementation, a shared bilingual Jekyll data model plus two small rendering loops is preferable to duplicating six full cards in both Home pages. It adds one data owner but preserves order and evidence parity by construction; the existing card/grid CSS can likely be reused.

### Recommendation

Use **candidate-first, single final evidence pack** with these proposal boundaries:

1. Record explicit owner authority for the current S3.5 model and S3.17 QA specification, or update/confirm the authoritative Master Prompt state before implementation. Do not infer approval from the backlog.
2. Implement exactly six evidence-bound capability groups from one shared ordered bilingual data model; preserve industry-standard product names and remove all arbitrary scoring.
3. Freeze and publish the resulting successor SHA. Require successful Build Check and Pages deployment for that exact SHA.
4. Execute formal S3.17 against that same production SHA. Cover all 12 EN/ES routes; the Master Prompt viewport classes (approximately 360, 390–430, 768, 1366, and 1440+); Chromium plus a second modern browser; light/dark rendering; navigation, locale, CTA, form/no-JS, keyboard/focus, accessibility automation, links, metadata, console, overflow, bounded performance, claims, secrets, and security/privacy sanity. Record observed evidence, not inferred PASS.
5. Consolidate the three versioned evidence documents only after S3.17 reaches a formal recommendation. Preserve `5727b618...` as the audited baseline and identify the successor SHA as the tested closure candidate.
6. Rerun the complete S3.18 matrix after S3.17. Approval is allowed only if no material Critical/High finding remains and accepted Medium/Low exceptions are explicit.

**Proposal scope**

- Authority prerequisite and candidate identity rules.
- Six-group EN/ES S3.5 implementation and parity acceptance criteria.
- Exact S3.17 execution/evidence requirements and formal sign-off gate.
- H-03 document reconciliation with baseline-to-candidate lineage.
- S3.18 re-evaluation order and binary acceptance rule.

**Explicit non-goals**

- No broader visual redesign, navigation rewrite, new service/case-study content, or unrelated resume changes.
- No S3.19–S3.22 repository validation or promotion of gated case studies.
- No new professional portrait or `og:image` without an owner-approved asset.
- No penetration-test or enterprise-security certification claim; S3.17 remains a bounded sanity review.
- No unsupported GitHub Pages header guarantee; platform limitations and owner privacy decisions are documented rather than disguised as PASS.
- No claim that local Jekyll, historical screenshots, Build Check, Pages deployment, route probes, or axe output alone constitutes formal S3.17 approval.

### Risks

- **Authority conflict:** the current Google Doc labels S3.5 and S3.17 proposed while the backlog calls the six groups approved. Silent implementation would violate the stated source-of-truth rule.
- **SHA sequencing:** any S3.5 source change makes `5727b618...` a baseline, not the final candidate. Updating evidence only to `5727b618...` would become stale immediately.
- **Evidence overclaim:** current-SHA CI and bounded live route checks are real, but current-SHA browser/accessibility/manual evidence and formal S3.17 sign-off are absent.
- **Evidence durability:** ignored `.tmp` screenshots and JSON are not versioned; the final pack must retain sufficient route-level measurements and references to audit the decision without inventing unavailable artifacts.
- **Scope creep:** privacy headers, a portrait, social imagery, and external case-study gates can expand closure unnecessarily unless held as explicit non-goals or documented owner decisions.

### Ready for Proposal

**Yes, with an explicit authority prerequisite.** The proposal can now define the coherent closure sequence and acceptance criteria. It must not authorize implementation or claim S3.5/S3.17 approval until the project owner resolves the current Master Prompt status conflict.
