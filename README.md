![frontend-boilerplate logo](frontend-boilerplate-logo.svg)

# frontend-boilerplate

This project is an opinionated boilerplate which helps you build fast, robust, and adaptable single-page application (SPA) in [React](https://reactjs.org/) with [Styled Components](https://styled-components.com/). It's built on modern tools such as [TypeScript](https://www.typescriptlang.org/), [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/), and [Travis](https://travis-ci.org/) and contains state-of-art testing and development tools such [Cypress](https://www.cypress.io/), [React Test Renderer](https://reactjs.org/docs/test-renderer.html), [StoryBook](https://storybook.js.org/), and [Loki](https://loki.js.org/).

Kick-start your project with this boilerplate is super easy and will help you to stay productive.

## 😍 Features

Your environment will have everything you need to build and test a modern single-page React application:

- A live-reloading server (HMR) that warns about common mistakes
- Full support for TypeScript and language extras beyond ES6 like the object spread operator
- A build script to bundle and optimize JS and CSS
- Autoprefixed CSS, so you don’t need -webkit- or other prefixes plus a useful CSS normalizer
- Proper linting with ESLint and Prettier
- A fast interactive unit test runner with built-in support for coverage reporting
- Flowless integration with End to End UI testing and with Continuous integration (CI)
- Visual regression testing
- Support for Component Driven Development (CDD)

## 🚀 Quickstart

1. Clone this repo
1. Run `npm install`
1. Code your project and see it live using `npm start`
1. Work on your React components in isolation with `npm run storybook`
1. Lint and test with `npm run lint` and `npm test`
1. Build for production by running `npm run build`
1. Deploy with a single command to GitHub Pages using `npm run deploy`

## 🌟 Getting started

### Set up your development environment

1. Make sure you have NodeJS installed in your machine. For detailed instructions, see [Installing Node](https://nodejs.org/en/download/package-manager/):

2. Clone the project to your computer using:

```shell
git clone https://github.com/gibbok/frontend-boilerplate.git
```

3. Navigate to your new folder and run this command to install the project-specific dependencies:

```shell
npm install
```

4. Done! You can now start your development server by running `npm start`. This command will start a local server, located at `http://localhost:8080`.

### Creating UI components

React Components, their tests, and StoryBook stories can be located anywhere in the `src` folder, please use `.tsx` for React with JSX and `.stories.tsx` for stories.

Styled Components is pre-installed by default and it has been set to use `displayName` as class name for better debugging. If you don't need this feature, you can disable it in file `.babelrc` with the `"displayName": false` option:

Also, your application will use a CSS normalizer, which makes browsers render all elements more consistently and in line with modern standards.

Validate your application code against TypeScript by using `npm run tsc` or in watch mode by `npm run tsc:watch`.

### Linting

Statically analyzes your code to quickly find problems, the `npm run lint` script supports `.ts, .tsx, .js, .json` files, use `npm run lint:fix` to automatically and safely fix issues and format the code using ESLint and Prettier rules.

If you use Visual Studio Code IDE on file save, your source code will be automatically formatted if you have installed [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension. Type the following command in your terminal to install it:

```shell
code --install-extension dbaeumer.vscode-eslint
```

### Testing

Unit tests are done with Jest. TypeScipts files in the `src` folder ending with `.test.ts` or `.test.tsx` will be run through Jest. File for test support as `.support.test.ts` will be excluded from Jest test coverage.

Run tests by executing `npm run test` or simply `npm t`, use `npm run test:watch` to continuously watch your tests when coding.

Visual regression with Loki can be run using `npm run test:visual` (after StoryBook is running `npm run storybook`), when you make changes and you want to save them as reference use `test:visual:approve`. Loki configurations can be found in `loki.config.js` file.

End to End testing using Cypress can be executed locally running `npm run cy:open`, this project also automatically perform headless E2E testing on CI using Travis.

Suggested extension, very useful when writing tests:  [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner), simply install it by running:

```shell
code --install-extension firsttris.vscode-jest-runner
```

#### Building

Running `npm run build` will compile and build your `src` folder and pipe it to the `build` folder. The `build` folder will contain two subfolders, `project` for your application and `storybook` for your stories. Both folders can then be uploaded to your server.

Running `npm run build-deploy` will compile and build your code and publish on GitHub Pages automatically, your application will be visible on GitHub, for example at:

```shell
https://gibbok.github.io/frontend-boilerplate/
--------^^ your user ------ ^^ your repository
```

If you want to deploy also StoryBook together with your application on GitHub Pages you can run `npm run build-deploy:all`, this script will place your app in a subfolder `/project` and StoryBook will be situated in folder `/storybook`, for instance:

```shell
https://gibbok.github.io/frontend-boilerplate/project/
https://gibbok.github.io/frontend-boilerplate/storybook/
```

#### Tooling

You can use `npm run clean` to wipe out the cache and start from a fresh slate.

To see how many source lines of code your project includes by using `npm run sloc`.

You can clean up your project by checking unused npm packages with `npm run dep`.

#### Npm package script details

List of all npm scripts in the project, use them appending `npm run` before each command.

|                       |                                                                                                                   |
|-----------------------|-------------------------------------------------------------------------------------------------------------------|
| build-deploy          | Executes `npm run check`, builds for production and deploys `build` folder to GitHub Pages                        |
| build-deploy:all      | As `build-deploy` but it deploys your application and StoryBook to respectively `project` and `storybook` folders |
| build:start           | Runs on a test server the content of the `build` folder                                                           |
| build                 | Build the project                                                                                                 |
| check                 | Validate source code using TypeScript, ESLint, and Jest                                                           |
| clean                 | Wipe out the cache and start from a fresh slate                                                                   |
| cy:verify             | Verify that Cypress is installed correctly and is executable                                                      |
| dep                   | Identify not used dependencies                                                                                    |
| deploy                | Deploy `project` folder to GitHub Pages                                                                           |
| deploy:all            | As `deploy` but also publish `storybook` folder                                                                   |
| cy:ci                 | On Travis CI, it verifies Cypress installation, starts a server and runs `cy:run`                                 |
| cy:open               | Runs Cypress Test Runner locally                                                                                  |
| cy:run                | Runs End to End testing using Cypress headless Chrome on Travis CI                                                |
| lint:fix              | Safely auto-fix ESLint and Prettier issues and warnings when possible                                             |
| lint                  | Validate ESLint and Prettier rules for the codebase                                                               |
| loki:ci               | Runs Visual Regression testing on CI                                                                              |
| sloc                  | Count source lines of code                                                                                        |
| start                 | Runs a live-reloading server with Hot Module Reloading (HMR) for development                                      |
| storybook:build:start | Runs built version of StoryBook on a local server for testing                                                     |
| storybook:build       | Builds StoryBook locally                                                                                          |
| storybook             | Runs StoryBook locally for development                                                                            |
| test:visual:approve   | Save visual changes ad reference for Visual Regression                                                            |
| test:visual           | Runs Visual Regression testing, StoryBook must be running to work                                                 |
| test:watch            | Runs Jest tests in watch mode                                                                                     |
| test                  | Runs Jest tests once                                                                                              |
| tsc:watch             | Runs TypeScript validation in watch mode                                                                          |
| tsc                   | Runs TypeScript validation                                                                                        |

## License

`frontend-boilerplate` is an open-source software [licensed as MIT](./LICENSE).

Please consider supporting this project by adding a link to it.
