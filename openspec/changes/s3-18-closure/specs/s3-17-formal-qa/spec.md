# S3.17 Formal QA Specification

## Purpose

Specify owner-authorized QA evidence for the deployed candidate.

## Requirements

### Requirement: Authority-bound formal sign-off

Formal S3.17 MUST cite the authoritative Master Prompt or explicit owner decision for S3.5 and S3.17. Backlog or prior evidence MUST NOT independently constitute approval.

#### Scenario: Authorized QA completes

- GIVEN both approvals are verified from the authoritative source
- WHEN formal QA inspects the deployed candidate
- THEN it records a sign-off state

#### Scenario: Backlog-only approval is offered

- GIVEN the backlog says approved but the Master Prompt does not
- WHEN readiness is evaluated
- THEN sign-off MUST be blocked and the conflict recorded

### Requirement: Successor-SHA evidence

After S3.5 changes, QA MUST freeze and deploy a successor SHA; every formal result MUST cite that exact SHA. The pack MUST cover all 12 primary EN/ES routes and required responsive/browser/accessibility/navigation/interaction/link/metadata/console/performance/claims/privacy dimensions.

#### Scenario: Current candidate passes

- GIVEN the successor SHA is deployed and recorded
- WHEN the S3.17 plan executes
- THEN evidence reports Critical, High, Medium, and Low outcomes

#### Scenario: Evidence is stale or mixed

- GIVEN a result references another commit
- WHEN the pack is assembled
- THEN it MUST be marked non-current and mixed-lineage S3.17 MUST NOT pass
