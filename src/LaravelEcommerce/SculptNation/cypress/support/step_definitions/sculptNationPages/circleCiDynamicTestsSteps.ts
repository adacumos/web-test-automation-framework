// page_specific_steps.js

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// This is where you would place any global setup or conditional skipping logic
// that applies to all scenarios in this step definition file.
// For the original skipping logic, you might do something like this,
// though it's often better handled by Cypress-Cucumber's tagging or `before` hooks
// in the support file if it's a global condition.
before(() => {
    const assetId = Cypress.env('ASSET_ID');
    const assetType = Cypress.env('ASSET_TYPE');

    // Example of conditional skipping at the step definition level.
    // In a real Cucumber setup, this might be handled by a global before hook
    // or by filtering specs/features based on environment variables.
    if (
        assetType === 'page' &&
        assetId &&
        assetId !== 'YOUR_PAGE_ID_FOR_THIS_SPEC'
    ) {
        cy.log(
            `Skipping scenarios in this file: Not relevant for asset ID ${assetId}`
        );
        // Note: Marking Cypress.currentTest.pending = true here would only affect
        // individual tests if called within an 'it' block.
        // For skipping entire feature files or scenarios, you'd typically rely
        // on Cypress-Cucumber's built-in filtering or a custom hook.
        // For demonstration, we'll proceed with the steps as if the conditions are met.
    }
});

Given('I am on the specific page with path {string}', (path: string) => {
    cy.visit(path);
});

Given('I am on the page with path {string}', (path: string) => {
    cy.visit(path);
});

When(
    'I fill in the {string} field with {string}',
    (fieldName: string, value: string) => {
        // This assumes you have a way to identify fields, e.g., by name, label, or placeholder
        cy.get(`[name="${fieldName}"]`).type(value); // Example: targeting by name attribute
        // Or by label: cy.contains('label', fieldName).next('input').type(value);
    }
);

When('I click the {string} button', (buttonText: string) => {
    cy.contains('span', buttonText).click();
});

Then('I should see the header containing {string}', (expectedText) => {
    cy.get('h1').should('contain', expectedText);
});

Then('I should see a success message {string}', (message: string) => {
    cy.contains(message).should('be.visible'); // Assumes the message is visible on the page
});

Then('the URL should be {string}', (expectedUrlPath) => {
    cy.url().should('include', expectedUrlPath);
});
