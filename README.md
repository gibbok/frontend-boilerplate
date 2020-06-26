# frontend-boilerplate

This project is an opinionated boilerplate which helps you build fast, robust, and adaptable single-page application (SPA) in React and Styled Components. It's built on modern tools such as TypeScript, Webpack, Babel and Travis and contains state of art testing and developement tools such Cypress, React Test Renderer, StoryBook and Loki.
Kick-start your project with this boilerplate is super easy and will help you to stay productive.

## Features

- A live-reloading server (HMR)
- Automated build process that includes, but is not limited to TypeScript and JavaScript transpiling, CSS and image/svg optimization
- Linting with ESLint and Prettier
- Sourcemaps
- Integration with End to End UI testing and with Continuous integration (CI)
- Visual regression testing
- Support for Component Driven Development (CDD)

## Quickstart

1. Clone this repo
1. Run `npm install`
1. Code you project and see it live using `npm start`
1. Code your React component in isolation `npm run storybook`
1. Lint and test with `npm run lint` and `npm test`
1. Build for production by running `npm run build`
1. Deploy with a single command to GitHub Pages using `npm run deploy`

## Getting started

### Set up your development environment

1. Make sure you have NodeJS installed in your machine. For detailed instructions, see [Installing Node](https://nodejs.org/en/download/package-manager/):

1. Clone the project to your computer using:

```shell
git clone https://github.com/gibbok/frontend-boilerplate.git
```

1. Navigate to your new folder and run this command to install the project-specific dependencies:

```shell
npm install
```

1. Done! You can now start your development server by running npm run dev. This command will start a local server, located at `http://localhost:8080`.

### Creating components

React Components, tests and StoryBook stories can be located anywhere in the `src` folder, please use:
`.tsx` for React with JSX
`.stories.tsx` for stories


### Linting

The `npm run lint` lint script supports `.ts, .tsx, .js, .json` files, use `npm run lint:fix` to automatically and safelly formats the code.

If you use Visual Studio Code IDE on file save, the code will be automatically formatted, but you need to install [ESLInt](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension, using:

```shell
code --install-extension dbaeumer.vscode-eslint
```

### Testing

Unit tests are done with Jest. TypeScipts files in the component `src` folder ending with `.test.ts` or `.test.tsx` will be run through Jest.
File for test support as `.support.test.ts` will be escluded from Jest test coverage.
Run tests by executing `npm run test` or simply `npm t`, use `npm run test:watch` to conituoisly watch your test when coding.

Visual regression can be runed using `npm run test:visual`, when you make changes and you want to save as reference use `test:visual:approve`.

End to End testing using Cypress can be executed using locally running `npm run cy:open", this project automatically perform headless E2E testing on CI using Travis.

#### Building

Running `npm run build` will compile and build in your `src` folder and pipe it to the `build` folder. This folder can then be uploaded to your server by running.

Running `npm run build-deploy` will compile and build your code and publish on
GitHub Pages automatically, the project will be visible for example at:

```shell
https://gibbok.github.io/frontend-boilerplate/
--------^ your user name -------^ your repository name
```

If you want to deploy also StoryBook together with your application you can run `npm run build-deploy:all`, this script will place your app in a subfolder `/project` and StoryBook will be placed at `/storybook`, for instance:

```shell
https://gibbok.github.io/frontend-boilerplate/project/
https://gibbok.github.io/frontend-boilerplate/storybook/
```
