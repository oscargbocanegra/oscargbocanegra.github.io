# S3.5 Capability Groups Specification

## Purpose

Specify six ordered, bilingual, evidence-bound groups.

## Requirements

### Requirement: Authoritative six-group model

The implementation MUST use this order: AI Engineering; Data Engineering; Data & AI Platforms; Architecture & Governance; Cloud & Integration; Delivery & Technical Leadership. EN/ES structure MUST be equivalent; claims MUST be evidence-bound; scoring MUST NOT be used.

#### Scenario: Approved model renders

- GIVEN the current Master Prompt or explicit owner decision approves S3.5
- WHEN the candidate renders the capability section
- THEN EN and ES render exactly six groups in order

#### Scenario: Approval is absent

- GIVEN the authoritative source marks S3.5 proposed or pending
- WHEN a backlog labels groups approved
- THEN approval MUST NOT be inferred and implementation remains unapproved

### Requirement: Parity and claim boundaries

One ordered model MUST drive both locales. Claims MUST be factual and evidence-bounded; unsupported claims MUST NOT be introduced.

#### Scenario: Candidate parity is verified

- GIVEN the approved model contains EN and ES content
- WHEN parity checks compare routes
- THEN count, order, meaning, and evidence boundaries match

#### Scenario: Locale drift is detected

- GIVEN a locale is missing, reordered, or unsupported
- WHEN S3.5 validation runs
- THEN validation MUST fail and the candidate cannot advance
