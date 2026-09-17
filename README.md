# React Starter

A minimal template for building a [React](https://react.dev/) app in [TypeScript](https://www.typescriptlang.org/), bundled with [Vite](https://vite.dev/). Ships pre-configured with formatting, linting, 100% test coverage enforcement, pre-commit hooks, and CI/CD.

## Getting Started

Create a new repository from this template on GitHub using [this link](https://github.com/new?template_name=react-starter&template_owner=threeal), or clone it locally and point it at your own remote.

## Setup

Install [pnpm](https://pnpm.io/), then install dependencies:

```sh
pnpm install
```

Install [Lefthook](https://lefthook.dev/), then register the pre-commit hook:

```sh
lefthook install
```

## Customizing

Replace or extend the template files to fit your project:

- **`src/Counter.tsx`** — Replace with your own component, or remove it entirely.
- **`src/index.tsx`** — Extend directly, or compose in additional components, as your app grows.
- **`index.html`** — Update the page title, icon, and other metadata.
- **`CLAUDE.md`** — Replace with guidance specific to your project.
- **`LICENSE`** — Replace with your preferred license, or keep the [Unlicense](https://unlicense.org/).
- **`README.md`** — Replace with a description of your project.

## Development

Write code in `src/`. Try the app locally in development mode with:

```sh
pnpm vite
```

This supports hot reload, so changes to the source code are reflected directly in the running app.

Test files live alongside source as `*.test.tsx`. Run the test suite with:

```sh
pnpm vitest run
```

The project enforces 100% code coverage on every run.

Before committing, run the pre-commit hook to install dependencies, type-check, and fix formatting and lint:

```sh
lefthook run pre-commit
```

If any file changes during the run, re-stage the changed files and retry. The hook also runs automatically on each `git commit` — if it fails, fix the reported issues, re-stage, and commit again.

After committing, push to `main` or open a pull request from another branch — CI/CD will run the pre-commit hook across all files, the full test suite, and `pnpm vite build`, then deploy the result to Cloudflare Pages (see [Deploying](#deploying)).

## Deploying

Authenticate Wrangler and create an empty Cloudflare Pages project:

```sh
pnpm wrangler login
pnpm wrangler pages project create <project-name> --production-branch main
```

Add `<project-name>` as the `CLOUDFLARE_PROJECT_NAME` GitHub Actions variable.

Generate a Cloudflare API token scoped to `Account > Cloudflare Pages > Edit` for that account — see [Create an API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) for the exact steps. Add it, along with your Cloudflare account ID, as the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` GitHub Actions secrets.

Then push to `main` or open a pull request — CI/CD will automatically build the app and publish it to Cloudflare Pages, as a production deployment for `main` and a preview deployment for pull requests.
