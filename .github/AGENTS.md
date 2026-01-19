# Agent Instructions

This repo is a micro-frontend demo using Rspack and Module Federation.
Follow these guidelines when working in this codebase.

## Project Map

- Host app: `hosts/web`
- Remotes: `remotes/home`, `remotes/catalogue`
- Discovery document: `frontend-discovery.json`
- Discovery server: `hosts/web/scripts/server.js`

## Workflows

- Install: `pnpm install` (from repo root)
- Dev: `pnpm dev` (runs all workspaces in parallel)
- Build: `pnpm build`

## Conventions

- Keep configs aligned with `hosts/web` when adding new remotes.
- Prefer `rspack.config.js` over webpack configs.
- Keep package names in `package.json` matching their folder names.
- Update `frontend-discovery.json` when remotes or ports change.

## Output

- Keep logs concise; use workspace-level scripts for aggregation.
- Document notable changes in `README.md`.
