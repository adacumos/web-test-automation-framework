import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
// eslint-disable-next-line import/no-unresolved
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import {
    getSshKey,
    runSshCmd,
    generateOTP,
    runSQLCmd,
} from './cypress/scripts';
import {
    setupBrowserBeforeRun,
    checkIfFileExists,
    deleteFile,
} from '../_libs/scripts';

export default defineConfig({
    projectId: 'vk1aj4',
    e2e: {
        env: {
            ADMIN_USER: process.env.CYPRESS_ADMIN_USER,
            ADMIN_PASSWORD: process.env.CYPRESS_ADMIN_PASSWORD,
            TAGS: process.env.TAGS,
            DOMAIN: process.env.CYPRESS_DOMAIN,
        },
        baseUrl: process.env.CYPRESS_BASE_URL,
        watchForFileChanges: true,
        specPattern: '**/*.feature',
        supportFile: 'cypress/support/e2e.ts',
        viewportWidth: 1920,
        viewportHeight: 1080,
        defaultCommandTimeout: 30000,
        pageLoadTimeout: 60000,
        requestTimeout: 60000,
        chromeWebSecurity: false,
        experimentalModifyObstructiveThirdPartyCode: true,
        experimentalInteractiveRunEvents: true,
        experimentalMemoryManagement: true,
        numTestsKeptInMemory: 1,
        retries: 2,
        trashAssetsBeforeRuns: true,
        scrollBehavior: 'center',
        experimentalWebKitSupport: true,
        reporter: require.resolve(
            '@badeball/cypress-cucumber-preprocessor/pretty-reporter'
        ),
        async setupNodeEvents(
            on: Cypress.PluginEvents,
            config: Cypress.PluginConfigOptions
        ): Promise<Cypress.PluginConfigOptions> {
            // This is required for the preprocessor to be able to build Cucumber step definitions, generate JSON reports after each run, and more.
            // DO NOT ADD THE FOLLOWING EVENT HANDLERS AS THEY ARE OVERWRITTEN BY THE PLUGIN AND MIGHT AFFECT OR BREAK IT!!!
            // before:run
            // after:run
            // before:spec
            // after:spec
            // after:screenshot
            // MORE ON: https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/event-handlers.md
            await addCucumberPreprocessorPlugin(on, config);

            on(
                'file:preprocessor',
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );

            on('before:browser:launch', (browser, launchOptions) => {
                setupBrowserBeforeRun(browser, launchOptions);
            });

            on('task', {
                getSshKey,
                runSshCmd,
                generateOTP,
                checkIfFileExists,
                deleteFile,
                runSQLCmd,
            });

            return config;
        },
    },
});
