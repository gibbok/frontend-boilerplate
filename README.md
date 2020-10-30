
# End to end testing for Actyx websites (production)

This project performs automatic testing on Actyx websites. It aims to catch common issues like broken links, not working web forms, and so on.
You can use this tool for the production site or for locally on your branch.

## For production usage

| Script                             | Description                                                 |
|------------------------------------|-------------------------------------------------------------|
| npm run evaluate                   | Run end to end testing and link checker                     |
| npm run links:check:prod           | Check for broken links across all Actyx websites            |
| npm run links:check:prod:developer | Check for broken links across <https://developer.actyx.com> |
| npm run links:check:prod:main      | Check for broken links across <https://www.actyx.com>       |
| npm run links:check:prod:download  | Check for broken links across <https://download.actyx.com>  |
| npm run cy:open                    | Run Cypress using production urls                           |
| npm run cy:run                     | Run Cypress headless chrome using production urls           |

## For development usage

Perform the same tests as above but locally, useful when developing new features.
To run end to end testing, you need to build each website locally and set some global variables.
You need to have a local server installed, please use: `npm install --global http-server`.

| Script                            | Description                                               |
|-----------------------------------|-----------------------------------------------------------|
| npm run evaluate:dev              | Run end to end testing and link checker                   |
| npm run links:check:dev           | Check for broken links across all Actyx websites locally  |
| npm run links:check:dev:developer | Check for broken links across developer.actyx.com locally |
| npm run links:check:dev:main      | Check for broken links across www.actyx.com locally       |
| npm run links:check:dev:download  | Check for broken links across download.actyx.com locally  |
| npm run cy:open                   | Run Cypress as production urls (value can be overwritten) |
| npm run cy:run                    | Run Cypress headless chrome using production urls         |

It is possible to set custom urls for Cypress by using:

export CYPRESS_AX_WEB_E2E_DOWNLOAD=http://localhost:8081
export CYPRESS_AX_WEB_E2E_MAIN=http://localhost:9000
export CYPRESS_AX_WEB_E2E_DEVELOPER=http://localhost:8082
export CYPRESS_AX_WEB_E2E_STORAGE=https://axartifacts.blob.core.windows.net/artifacts/

| Script               | Local URL for project |
|----------------------|-----------------------|
| AX_WEB_E2E_DOWNLOAD  | downloads.actyx.com   |
| AX_WEB_E2E_MAIN      | www.actyx.com         |
| AX_WEB_E2E_DEVELOPER | developer.actyx.comx  |

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
