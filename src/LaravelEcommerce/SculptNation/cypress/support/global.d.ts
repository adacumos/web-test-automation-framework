// cypress/support/global.d.ts
// This file is used to declare global types or augment existing ones.
// It will be automatically included by TypeScript because it ends with .d.ts
// and is typically covered by your tsconfig.json's 'include' patterns.

// ----------------------------------------------------------------------
// 1. Augment Cypress Global Namespace
//    (Addresses: 'Cypress' has no exported member named 'BrowserLaunchOptions')
//    (Addresses: 'pending' property on Cypress.currentTest if still present)
// ----------------------------------------------------------------------
declare namespace Cypress {
    // Fix for BrowserLaunchOptions type rename
    // If you're using 'BrowserLaunchOptions' in your setupNodeEvents or before:browser:launch hook
    type BrowserLaunchOptions = BeforeBrowserLaunchOptions;

    // Augment the 'CurrentTest' interface to include 'pending' for programmatic skipping
    // This helps when you directly access Cypress.currentTest.pending
    interface CurrentTest {
        /**
         * Indicates if the current test is pending (skipped programmatically).
         * This is typically set via `this.skip()` or by a grepping plugin.
         * @deprecated Consider using `this.skip()` for programmatic skips.
         */
        pending?: boolean;
    }

    // Add any custom Cypress commands you define in 'cypress/support/commands.ts'
    // so TypeScript knows about them. Example:
    // interface Chainable<Subject> {
    //   /**
    //    * Custom command to login a user.
    //    * @example cy.login('username', 'password')
    //    */
    //   login(username: string, password?: string): Chainable<Subject>;
    // }
}

// ----------------------------------------------------------------------
// 2. Augment the global Window interface
//    (Addresses: 'dataLayer' does not exist on type 'Window')
//    (Addresses: 'ga' does not exist on type 'Window')
//    (Add any other global variables your app might inject into 'window')
// ----------------------------------------------------------------------
declare global {
    interface Window {
        // For Google Tag Manager (GTM) dataLayer
        // The type can be more specific if you know the exact structure of your dataLayer events
        dataLayer: Record<string, any>[]; // Array of objects with any properties

        // For Google Analytics (Legacy 'ga' object)
        // Cypress.Agent is used if you are stubbing/spying on it with cy.stub() or cy.spy()
        ga: Cypress.Agent<(...args: any[]) => void> | undefined;

        // Add other global properties if your application defines them on 'window'
        // For example:
        // myAppGlobalConfig: { apiUrl: string };
    }
}

// ----------------------------------------------------------------------
// 3. Augment Mocha's Test interface (for 'pending' property)
//    (This covers cases where Cypress.currentTest might directly expose Mocha.Test properties)
// ----------------------------------------------------------------------
declare module 'mocha' {
    interface Test {
        pending?: boolean;
        // If cypress-grep adds other properties directly to Mocha's Test object, add them here
        tags?: string[];
    }

    interface Suite {
        tags?: string[];
    }
}
