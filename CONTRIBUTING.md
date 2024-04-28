# Contributing to Techie Sleuths

## Welcome Open Source Contributors!

See `README.md` for ways to get started.

Welcome to the Techie Sleuths project! We're excited to have you as a contributor. Before you get started, please take a moment to read through this document to ensure a smooth and productive collaboration.

This is a list of guidelines for people who will be contributing to the Techie Sleuths Project of FOSS NSBM.

Follow these guidelines to ensure that your contributions are clean and readable.

If you have questions or comments, please create an issue.

Please adhere to this project's `CODE_OF_CONDUCT.md`.

Contributions are always welcome!

## How to Contribute

We welcome contributions in the form of bug reports, feature requests, code changes, and documentation improvements. To contribute, please follow these general steps:

1. [Search for existing issues](https://github.com/fossnsbm/techie-sleuths-24-frontend/issues) to avoid duplication.

2. Clone the `development` branch of the repository. Pull all changes from the `development` branch.

3. Create a new branch for your work:

- For New Features

  ```bash
  git checkout -b feat/development/{issue-number}-{issue-name}
  ```

  Example:

  > git checkout -b feat/development/5-navbar

- For Bug Fixes

  ```bash
  git checkout -b bugFix/development/{bug-number}
  ```

  Example:

  > git checkout -b bugFix/development/5

- For Revert:
  ```bash
  git checkout -b revert/commit-id
  ```
  Example:
  > git checkout -b revert/4f4256c

4. Make your changes and commit them with clear and concise messages:

- Use `feat!`, `feat`, `fix`, `patch`, `chore`, `build`, `debug`, `refactor`, `revert`, `ci`, `perf`, `style`, `test`, `docs`, `wip` as prefixes for the commit messages.

  For more information:
  [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

5. Push the changes to your branch:
   ```bash
   git push
   ```
6. Create a Pull Request (PR) from the repository. Wait until your code is reviewed and accepted.

7. Provide a descriptive title and details about your changes in the PR.

## Code of Conduct

Please review and adhere to our [Code of Conduct](CODE_OF_CONDUCT). We aim to maintain a respectful and inclusive community for all contributors.

## Yarn

This project uses Yarn as the package manager. Make sure you are using Yarn to manage project dependencies. You can refer to the official Yarn documentation for more information.

## Reporting Issues

If you encounter a bug or want to request a new feature, please open an issue in our [issue tracker](https://github.com/fossnsbm/techie-sleuths-24-frontend/issues). Be sure to provide as much detail as possible, including the steps to reproduce the issue.

## Pull Requests

We appreciate your contributions. Please ensure your Pull Requests meet the following criteria:

- Describe the problem your changes solve.
- Maintain code quality and style by following our coding standards.

Thank you for your interest in contributing to Techie Sleuths! We look forward to your contributions and collaboration.
