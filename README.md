# Common web test automation framework

### Keywords: Test Automation, Test Data, Infrastructure Automation, CICD

## Purpose

This test automation framework houses end to end web tests for the following platforms and brands from the Vshred organization:

1. Laravel Ecommerce platform (LE):

    1. SculptNation
    2. LE.Vshred.com
    3. Marketing funnels for the LE platform

2. Vshred platform (VS):
    1. Vshred and Trainer Tool
    2. Marketing funnels for the VS platform

## Structure

We chose a unified approach so that the QA team has a single space of collaboration when writing automated tests, but at the same time each of their projects is nested separately with its own settings, commands and steps.

Inside **src** are two major platform folders labeled as:

1. Laravel Ecommerce (LE)
2. Vshred (VS)

Each folder contains specific project folders for its brands.

There is a folder called **\_libs** in each of the two platform's directories which houses shared, reusable commands and steps to avoid code duplication across each project. Command files from this folder can be imported inside each project's **e2e.ts** file and used in the step definitions for that project.

Each project contains a **commands** and **scripts** folder which contains custom commands file.

Each command has its own file for easier management and maintenance. If a command needs to be deprecated or added, the user just needs to make the changes on its particular file. This will also ensure that the **commands.ts** file of each project does not become bloated and hard to read due to a large number of custom commands added in the same place.

The **scripts** folder is similar to the **commands** one, but contains custom functions that need to be called using **cy.task()**. Some example include ssh-ing into a machine, generating an image for security testing, etc.

Each of the projects has it's own Cypress **[name].config.ts** file. This means that when a project is spun up using the scripts from **package.json** only the settings, variables, steps, fixtures and commands for that project are run (exception being the commands and steps for the **\_libs** folder which are set to be available globally across projects). This will ensure that users only see the project they are working on currently and tests and will also prevent any mistakes spilling out to another project and reduce the chances of introducing a breaking change across the test framework.

## Language and Tools

The framework is built using:

1. Cypress
2. Cypress Testing Library
3. Cucumber
4. Typescript
5. Yarn

We use Typescript instead of JavaScript as it supports several dependencies for Cypress as well as the efficient integration of Cucumber.

The use of Yarn ensures that dependencies get installed in parallel instead of sequentially like npm does. Running scripts is similar, however instead of **npm run [script_name]**, the syntax is **yarn [script_name]**

## Setup

1. Install TypeScript globally - yarn global add typescript
2. Run the **yarn** command to install the dependencies.
3. Run the **yarn [script_name]** to either open or run the tests for a specific project.
4. Run the **yarn lint** command to find and fix any linting problems.
5. Go to the 1Password QA Testing vault and download the cypress.env.json files which correspond to each test project. Add these in the root of the project (where the \*.config.ts file is located) in order for the env variables to be picked up and used by the tests.

## Tagging tests

Cucumber supports tagging tests using the "@" character and a descriptive noun. For example, @smoke, @security, @regression. These tags are used to run only the specific tests which share the tag and will skip the rest. This is achieved by adding the **--env tags='@smoke'** parameter to the Cypress test script. Multiple tags can be called at once, for example **--env tags='@smoke and @security'**. There’s also a way of running all tests that contain either one of tags **--env tags='@smoke or @security'**, as well as passing a **not** keyword to run all tags exept specified one **--env tags='not @smoke'**.

## Test reports

Since the framework is using Cypress Cloud, the test reports for CI/CD runs are stored in each project's Cypress Cloud space. There a user can replay the test, see error logs and screenshots. For local runs the test status report and any errors for failed tests are shown in the terminal, while the screenshots for failed tests are saved to a screenshot folder.

## Running tests with pre-established (default) data sets

Most tests use a set of data that is used to feed input into fields, validate amounts, verify messages, etc. These data sets are stored as fixture files with the `.json` extension, and automatically loaded for a test as long as for LE the `The user loads the LE test data` step is called in the `Background` block, and for VS the `The user loads the VS test data` step is called. The fixture files live in each project's `fixtures` folder and in order for them to be picked up by a test, they _need to match the test name exactly_. For example, a test called `01_create_and_delete_user.feature` will have a fixture file that needs to be called `01_create_and_delete_user.json`.

## Running tests with custom data sets

The tests have the built in ability to handle default and custom data sets via fixture files. The `fixtures` folder of each project contains two sub folders, one for default data which is being used during each test run, and one for custom data which is used only if explicitly specifieid via an environment variable. For now only one test may be run at a time with custom data sets.

An example command to run a test with a custom data set is:

```
yarn cypress run --project ./src/LaravelEcommerce/SculptNation --config-file le.sn.config.ts --spec "src/LaravelEcommerce/SculptNation/features/adminTool/01_create_and_delete_user.feature"  --env CUSTOM_TEST_DATA_JSON=01_create_and_delete_user -b chrome --headed
```

Note that the `.json` extension is automatically appended by the data set load command, no need to specify it.

## Running tests with a different location emulated in the browser window

The LaravelEcommerce test project supports running tests with a different geolocation emulated in the browser. To achieve this, set the `GEOLOCATION` environment variable in your `cypress.env.json` local file to one of the values from the `common-web-test-automation-framework/src/LaravelEcommerce/SculptNation/cypress/support/testData/geolocations.ts` file. For example, "sydney".

For CircleCi, add another string parameter called `geolocation` set to one of the locations from the file above (i.e. sydney - without the quotes) in the Trigger Pipeline pop-up.

Use this URL locally to test your geolocation change: https://www.w3schools.com/html/html5_geolocation.asp. Just replace the / in the cy.visit command with the URL, and once the page loads, click the Try it! button to see the geolocation.

## Running tests on a different URL from CircleCi

The LaravelEcommerce test project supports running tests in CircleCi on a different URL than the default baseUrl specified in the `le.sn.config.ts` file. To do so, just add a new `string` parameter called `url` to the list of available parameters in the Trigger Pipeline popup of CircleCi.

By default, the URL will be `http://staging.abc.com` (the one we use as a baseUrl in the framework and in PR validation tests in CircleCI). So you do not need to explicitly add the `url` parameter to the Trigger Pipeline popup if you wish to run on staging.

However, if you want to run on `le-sn-staging` for example, you need to add the `url` string parameter and populate it exactly like `https://staging.abc.com` WITHOUT a `/` at the end.

## Additional information and documentation

[Please check this page for additional information and documentation.]
