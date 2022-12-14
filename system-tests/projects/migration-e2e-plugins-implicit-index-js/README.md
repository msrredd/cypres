## Migration E2E Plugins Implicit index.js

An e2e project with 1 spec file. The purpose of this project is to cover the case where `cypress.json` has `pluginsFile` configured to specify a folder (containing an `index.js`) instead of a file. Technically, `pluginsFile` should point to a file, but Cypress 9 also supported a folder containing an `index.js` file, too.

Reference issue: https://github.com/cypress-io/cypress/issues/22461

The following migration steps will be used during this migration:

- [x] automatic file rename
- [ ] manual file rename
- [x] rename support
- [x] update config file
- [ ] setup component testing

## Automatic Migration

| Before | After|
|---|---|
| `cypress/integration/foo.spec.js` | `cypress/e2e/foo.cy.js` |

## Manual Files

This step is not used.

## Rename supportFile

The project has a default support file, `cypress/support/index.js`. We can rename it for them to `cypress/support/e2e.js`.

| Before | After|
|---|---|
| `cypress/support/index.js` | `cypress/support/e2e.js` |

## Update Config

The expected output is in [`expected-cypress.config.js`](./expected-cypress.config.js).
