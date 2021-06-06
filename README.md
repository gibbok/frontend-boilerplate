
# End to end testing for Actyx websites

This project performs automatic testing on Actyx websites. It aims to catch common issues like broken links, not working web forms, and so on.

You can use this tool for the production sites or locally on your branch.

## For production usage

The following scripts will run tests against live productions sites:

| Script                             | Description                                                 |
|------------------------------------|-------------------------------------------------------------|
| npm run test                       | Run links checker and end to end testing                    |
| npm run links:check:prod           | Check for broken links across all Actyx websites            |
| npm run links:check:prod:developer | Check for broken links across <https://developer.actyx.com> |
| npm run links:check:prod:main      | Check for broken links across <https://www.actyx.com>       |
| npm run links:check:prod:download  | Check for broken links across <https://download.actyx.com>  |

## For development usage

Perform the same tests as above but locally, useful when developing new features.
To run end to end testing, you need to build each website locally and set some global variables (more info below).
You need to have a local server installed, please use: `npm install --global http-server`.

| Script                            |
|-----------------------------------|
| npm run test:dev                  |
| npm run links:check:dev           |
| npm run links:check:dev:developer |
| npm run links:check:dev:main      |
| npm run links:check:dev:download  |

## End to end testing

Run the following scripts to run end to end testing using Cypress:

| Script          | Description                 |
|-----------------|-----------------------------|
| npm run cy:open | Run Cypress app             |
| npm run cy:run  | Run Cypress headless chrome |

## ENV variables

By default the links checker and the end to end testing are pointing to productions sites, you can use alternative URLs by setting the following env variables in your terminal:

Env variable for links checker and their defaults:

|                      |                               |
|----------------------|-------------------------------|
| AX_WEB_E2E_DOWNLOAD  | <https://downloads.actyx.com> |
| AX_WEB_E2E_MAIN      | <https://www.actyx.com>       |
| AX_WEB_E2E_DEVELOPER | <https://developer.actyx.com> |

Env variable Cypress and their defaults:

|                              |                                                       |
|------------------------------|-------------------------------------------------------|
| CYPRESS_AX_WEB_E2E_DOWNLOAD  | <https://downloads.actyx.com>                         |
| CYPRESS_AX_WEB_E2E_MAIN      | <https://www.actyx.com>                               |
| CYPRESS_AX_WEB_E2E_DEVELOPER | <https://developer.actyx.com>                         |
| CYPRESS_AX_WEB_E2E_STORAGE   | <https://axartifacts.blob.core.windows.net/artifacts> |

Example of configurations for local development:

```shell
export AX_WEB_E2E_DOWNLOAD=http://localhost:8081
export AX_WEB_E2E_MAIN=http://localhost:9000
export AX_WEB_E2E_DEVELOPER=http://localhost:8082
export CYPRESS_AX_WEB_E2E_DOWNLOAD=http://localhost:8081
export CYPRESS_AX_WEB_E2E_MAIN=http://localhost:9000
export CYPRESS_AX_WEB_E2E_DEVELOPER=http://localhost:8082
export CYPRESS_AX_WEB_E2E_STORAGE=https://axartifacts.blob.core.windows.net/artifacts/
```

### Build locally downloads.actyx.com

- Go to downloads.actyx.com folder and run `npm run build`
- Enter the public folder `cd ./public`
- Run website locally: `npx http-server -p 8081`
- Switch to this repository and export some global variable: `export AX_WEB_E2E_DOWNLOAD='http://localhost:8081'`
- Now you can run tests for instance using: `links:check:dev:download`

### Build locally www.actyx.com

- Go to www.actyx.com folder and run `npm run build`
- Run website locally: `npm run serve`
- Switch to this repository and export some global variable: `export AX_WEB_E2E_MAIN='http://localhost:9000'`
- Now you can run tests for instance using: `links:check:dev:main`

### Build locally developer.actyx.com

- Go to developer.actyx.com folder and run `npm run build`
- Enter the public folder `cd ./build`
- Run website locally: `npx http-server -p 8082`
- Switch to this repository and export some global variable: `export AX_WEB_E2E_DEVELOPER='http://localhost:8082'`
- Now you can run tests for instance using: `links:check:dev:developer`

## General caveats

- Only URLs which are server-rendered in the DOM will be followed by the link checker
