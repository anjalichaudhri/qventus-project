1. initialize project
npm init -y

2. install playwright
npm install playwright

3. install browsers
npm playwright install

// check version
4. npx playwright --version

5. npm init playwright@latest

    created playwrigth.config.js file

6. Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test