# Rspack Dynamic Module Federation Demo 🚀

This repo hosts a micro-frontend demo built with Rspack and Module Federation.
It is a fork of the demo project that accompanies Luca Mezzalira's book
["Building Micro-Frontends"](https://www.amazon.co.uk/Building-Micro-Frontends-Distributed-Systems-Frontend-ebook/dp/B0FXNQQQFT).
This version adapts the original webpack example to Rspack and simplifies the
number of remotes and overall setup. Credit to Luca Mezzalira for the original
concept and reference implementation.
The host app (`hosts/web`) fetches a discovery document to register remotes at runtime,
then lazily loads each remote using a `System` component.

This fork updates the baseline with TypeScript, ES modules in `common`, and adds ESLint plus Prettier.

## Scripts 🧰

Root (workspace):

- `pnpm dev`: run all packages in parallel with compact output
- `pnpm build`: build all packages
- `pnpm lint`, `pnpm format`, `pnpm types`: lint/format/typecheck across packages

Packages:

- `hosts/web`: `pnpm dev`, `pnpm build`, `pnpm serve`
- `remotes/home`: `pnpm dev`, `pnpm build`, `pnpm serve`
- `remotes/catalogue`: `pnpm dev`, `pnpm build`, `pnpm serve`

## VS Code Workspace 🧑‍💻

Open the workspace file at `.vscode/module-federation-demo.code-workspace` for a
preconfigured VS Code setup (folders, settings, and tasks).

## Prerequisites ✅

- Node.js (LTS recommended)
- pnpm

## Discovery Server 🛰️

`hosts/web/scripts/server.js` starts a small HTTP server on `http://localhost:8081`
that serves `frontend-discovery.json` with CORS enabled. The host app reads this file
to determine which remote entries to register at runtime.

## Dynamic Loading via the System Component 🧩

In `hosts/web/src/app.tsx`, the `System` component uses the Module Federation runtime
to load a remote module based on the route request string. The host:

1. Fetches `frontend-discovery.json` and builds route configs.
2. Registers remotes with `mfInstance.registerRemotes(...)`.
3. Renders `<System request="name/exposed" ...>` for each route.
4. `System` calls `mfInstance.loadRemote(request)` and lazy-loads the remote component.

This allows new remotes to be wired in without rebuilding the host, as long as the
discovery document is updated to point at the new remote entry.

## Credits 🙌

- Luca Mezzalira: original demo and book reference implementation.
- Codex (GPT-5): Rspack migration, repo cleanup, and documentation updates.
