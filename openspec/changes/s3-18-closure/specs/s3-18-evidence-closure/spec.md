# S3.18 Evidence Closure Specification

## Purpose

Specify SHA lineage reconciliation and S3.18 acceptance.

## Requirements

### Requirement: Baseline-to-successor H-03 reconciliation

The pack MUST preserve the baseline SHA, identify the successor SHA, and link source, deployment, QA, and report evidence. H-03 MUST remain open until reports reference the tested successor or are marked historical.

#### Scenario: Lineage is reconciled

- GIVEN S3.17 evidence is complete on one deployed successor
- WHEN reports and audit pointers are updated
- THEN H-03 records baseline-to-successor lineage and current-SHA evidence

#### Scenario: SHA references disagree

- GIVEN reports, deployment, or QA point to different SHAs
- WHEN reconciliation runs
- THEN H-03 remains unresolved and closure MUST be rejected

### Requirement: S3.17-before-S3.18 acceptance gate

S3.18 MUST run only after formal S3.17 sign-off on the successor SHA. Acceptance MUST have no unresolved material Critical or High finding; Medium or Low issues MUST have owner disposition, evidence, and retest state.

#### Scenario: Closure is eligible

- GIVEN S3.17 is signed off and H-03 is reconciled
- WHEN the S3.18 matrix is rerun
- THEN acceptance MAY occur when the material-finding rule is satisfied

#### Scenario: Formal QA is missing or fails

- GIVEN S3.17 is absent, stale, or has an unresolved material Critical or High
- WHEN S3.18 is evaluated
- THEN the result MUST be Rework Required and MUST NOT claim closure
