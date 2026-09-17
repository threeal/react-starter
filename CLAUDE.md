# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Template notice:** This file describes the template repository itself. If working in a project derived from this template, inform the user that this CLAUDE.md still contains template guidance and should be updated with project-specific content.

## About This Repository

This is a minimalist React starter template written in TypeScript targeting the browser (ESM). The counter app in `src/` is a placeholder — replace it with your actual application when starting a new project.

## Architecture

### Source Files

- **`src/index.tsx`** — Entry point; mounts components into the `#root` element (defined in `index.html`) inside `StrictMode`.
- **`src/Counter.tsx`** — The sample component — a placeholder to replace with your own.
- **`src/*.css`** — Stylesheets imported directly into their corresponding component/entry files.
- **`src/*.test.tsx`** — Vitest test files co-located with source.

### Build Output

- **`dist/`** — Static site produced by `pnpm vite build`; deployed to Cloudflare Pages by CI/CD.
- **`public/_redirects`** — Serves `index.html` for any unmatched path (Cloudflare Pages' native SPA fallback); not yet exercised since there's no client-side router, but needed once one's added.

## Tooling

### Dependabot

Keeps GitHub Actions and npm dependencies up to date automatically via `.github/dependabot.yaml`.

### ESLint

Linter configured in `eslint.config.ts`.

### GitHub Actions

Automates CI/CD. Workflow file:

- **`.github/workflows/ci-cd.yaml`** — Triggers on push to `main`, pull requests, and manual dispatch. Validates the pre-commit hook and tests, then builds the app and publishes `dist/` to Cloudflare Pages via `wrangler pages deploy` (Direct Upload, not Cloudflare's own Git integration; production for `main`, a preview deployment for pull requests) — requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repo secrets, and a `CLOUDFLARE_PROJECT_NAME` repo variable. Also passes `gitHubToken` (needs the job's `deployments: write` permission) so each deploy shows up as a GitHub Deployment.

### Lefthook

Git hook manager configured in `lefthook.yaml`.

### pnpm

Package manager. Also manages the Node.js runtime — versions for Node.js and pnpm are pinned in `package.json`.

### Prettier

Formatter configured in `.prettierrc.json` using `prettier-plugin-organize-imports` and `prettier-plugin-css-order` — import order and CSS property order are auto-managed.

### TypeScript

Type checker. `tsconfig.json` (extends `@tsconfig/vite-react`) is used for type checking via `pnpm tsc`. There's no separate build config — Vite transpiles and bundles TypeScript itself without type-checking, so `pnpm tsc` is the only type-safety gate.

### Vite

Dev server and bundler configured in `vite.config.ts`.

### Vitest

Test runner configured in `vitest.config.ts` with 100% coverage threshold required on every test run (`src/index.tsx` is excluded, since it's just app bootstrap). Tests run in a real headless Chromium browser via `@vitest/browser-playwright` and `vitest-browser-react`, not jsdom.

## Checking and Fixing

Run the pre-commit hook to check types, formatting, and lint locally:

```sh
lefthook run pre-commit              # staged files only (default)
lefthook run pre-commit --all-files  # all files — matches what CI runs
```

If any file changes during the run, re-stage the changed files and retry.

## Testing

```sh
pnpm vitest run             # Run all tests
pnpm vitest run <file>      # Run a single test file
```

Coverage is always enabled and computed for all files imported during the test run. Running a single test file may fail the 100% threshold if it imports a source file that another test is responsible for fully covering — use the full suite for accurate results.

Tests require Playwright's Chromium shell, installed automatically by the `prepare` script (`playwright install chromium --only-shell`) after `pnpm install`.

## Building and Deploying

Use `pnpm vite build` to produce the production bundle in `dist/`; this is for local verification only. Deployment happens automatically: pushing to `main` or opening a pull request triggers `.github/workflows/ci-cd.yaml`, which builds the app and publishes `dist/` to Cloudflare Pages via Wrangler — production for `main`, a preview deployment for pull requests.
