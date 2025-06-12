# React Starter

A minimalist template for starting a new [React](https://react.dev/) project.

This template provides a basic React project containing a sample web application written in [TypeScript](https://www.typescriptlang.org/), with built-in support for formatting, linting, testing, and continuous integration.

## Key Features

- Minimal React project written in TypeScript with [ESM](https://nodejs.org/api/esm.html) support.
- Uses [pnpm](https://pnpm.io/) as the package manager.
- Supports formatting with [Prettier](https://prettier.io/), linting with [ESLint](https://eslint.org/), and testing with [Vitest](https://vitest.dev/).
- Fixes formatting and linting during pre-commit hooks using [Lefthook](https://lefthook.dev/).
- Preconfigured workflows for [Dependabot](https://docs.github.com/en/code-security/dependabot) and [GitHub Actions](https://github.com/features/actions).
- Supports deployment of the web application to [GitHub Pages](https://pages.github.com/).

## Usage

This guide explains how to use this template to start a new React project, from creation to deployment.

### Create a New Project

Follow [this link](https://github.com/new?template_name=react-starter&template_owner=threeal) to create a new project based on this template. For more information about creating a repository from a template on GitHub, refer to [this documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

Alternatively, you can clone this repository locally to begin using this template.

### Choose a License

By default, this template is [unlicensed](https://unlicense.org/). Before modifying this template, it is recommended to replace the [`LICENSE`](./LICENSE) file with the license that will be used for the new project. For more information about licensing a repository, refer to [this documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).

Alternatively, you can remove the `LICENSE` file or leave it as is to keep the new project unlicensed.

### Set Up Tools

This template uses [pnpm](https://pnpm.io/) as the package manager. If pnpm is not installed, follow [this guide](https://pnpm.io/installation) to install it. Then, install the project dependencies with:

```sh
pnpm install
```

For more information on pnpm, including how to add dependencies or run tools, refer to [this documentation](https://pnpm.io/pnpm-cli).

### Developing the App

Run the development version of the app using:

```sh
pnpm dev
```

While viewing the development version, you can modify the app by updating the source code in the [`src`](./src) directory. You can also modify the [`index.html`](./index.html) file to update the app’s metadata, such as the title and icon. If you're new to [React](https://react.dev/), refer to [this documentation](https://react.dev/learn) for guidance.

### Testing the App

Test files in this template are named `*.test.tsx` and typically correspond to the components being tested. This template uses [Vitest](https://vitest.dev/) and [Playwright](https://playwright.dev/) for testing. For more information on testing with Vitest, refer to [this documentation](https://vitest.dev/guide/).

After writing the tests, run them with:

```sh
pnpm test
```

### Deploying the App

To deploy the app, first set up your GitHub repository to enable deployment to GitHub Pages using GitHub Actions (see [this guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)). Then commit your changes and push them to the `main` branch. Every change pushed to the `main` branch will automatically trigger a CI workflow to deploy the app to GitHub Pages.
