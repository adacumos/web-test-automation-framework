/// <reference types="cypress" />

import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('The user loads the VS test data', () => {
    const customFileName = Cypress.env('CUSTOM_TEST_DATA_JSON');

    if (customFileName) {
        cy.logStep(`Using custom test data from ${customFileName}.json:`);
        cy.fixture(`customData/${customFileName}.json`).as('staticTestData');
    } else {
        const testFileName = Cypress.spec.name.replace('feature', 'json');
        cy.logStep(`Using default test data from ${testFileName}:`);
        cy.fixture(`defaultData/${testFileName}`).as('staticTestData');
    }
    cy.get('@staticTestData').then((staticTestData: any) => {
        Object.entries(staticTestData).forEach(([key, value]: any) => {
            cy.log(key, value);
        });
    });
});

// When('The user reloads the page', () => {
//     cy.reload();
// });

Then('The user checks that all links are not broken', () => {
    cy.get('a').each((link) => {
        if (link.prop('href') && !link.prop('href').includes('javascript'))
            cy.request({
                url: link.prop('href'),

                failOnStatusCode: true,
            });
    });
});
