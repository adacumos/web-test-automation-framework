/// <reference types="cypress" />

import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

Given('The user loads the LE test data', () => {
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

When('The user reloads the page', () => {
    cy.reload();
    cy.skipVideo();
});

When(/^The user navigates "(back|forward)"$/, (direction: string) => {
    if (direction === 'back') {
        cy.go('back');
    } else if (direction === 'forward') {
        cy.go('forward');
    } else {
        throw new Error('Invalid direction specified');
    }
});
