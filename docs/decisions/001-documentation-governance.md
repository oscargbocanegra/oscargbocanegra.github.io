# 001 — Documentation governance

## Decision

Keep architecture, verified current state, and durable decisions in `docs/`, while maintaining one canonical agent guide in `AGENTS.md` and synchronized copies in `CLAUDE.md` and `.agent.md`.

## Why

The project is consumed by multiple coding agents and maintainers. A shared, reviewable documentation structure reduces contradictory instructions and makes important changes discoverable without treating generated output as source.

## Synchronization mechanism

The repository provides a versioned `.githooks/pre-commit` hook. It runs `scripts/sync-agent-guides.ps1`, stages synchronized copies, and fails closed when conflicting guide edits cannot be identified safely. CI performs a read-only synchronization check as a second guard.

## Tradeoffs

- A Git hook cannot react to every editor save; it guarantees synchronization at the commit boundary when enabled.
- The hook must be enabled per clone because Git does not version hook activation itself.
- Documentation completeness is a repository policy and review responsibility; the hook enforces the guide invariant and flags missing documentation for non-documentation changes in staged commits.
