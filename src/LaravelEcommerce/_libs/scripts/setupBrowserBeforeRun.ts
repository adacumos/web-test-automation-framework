/* Automatically configure the browser under test before the test run.
 * Add this script as in the example below in the Cypress .config.ts file.
 * @example
 * on('before:browser:launch', (browser, launchOptions) => {
 *     setupBrowserBeforeRun(browser, launchOptions);
 * });
 */
export const setupBrowserBeforeRun = (
    browser: Cypress.Browser,
    launchOptions: Cypress.BrowserLaunchOptions
): any => {
    // `args` is an array of all the arguments that will
    // be passed to browsers when it launches
    if (browser.name === 'chrome') {
        // auto open devtools
        launchOptions.args.push('--disable-gpu');
        launchOptions.args.push('--auto-open-devtools-for-tabs');
        launchOptions.args.push('--disable-dev-shm-usage');
        launchOptions.args.push('--headless=old');
        // allow remote debugging
        // launchOptions.args.push("--remote-debugging-port=9221")
        // whatever you return here becomes the launchOptions
    } else if (browser.family === 'firefox') {
        // auto open devtools
        launchOptions.args.push('-devtools');
    }
    console.log(launchOptions.args); // print all current args
    return launchOptions;
};
