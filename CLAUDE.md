# CLAUDE.md

## Code style

- Comment only when code can't be understood alone.
- No Claude/AI attribution in code, commits, or PRs.

## Agent skills

### Issue tracker

GitHub Issues, via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default label vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context — `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## New feature workflow (skip for fixes/small changes)

Use Matt Pocock skills where they apply. Prefer this order; stop early if a ticket/spec already exists:

1. Research
2. Wayfind — map + frontier tickets in `.scratch/`
3. Spec → tickets
4. Prototype if design/risk is unclear
5. Implement
