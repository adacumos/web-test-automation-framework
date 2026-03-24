/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('The user Verifies redirect is working', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        // cy.visit(staticTestData.redirectTestURL + staticTestData.shop);
        cy.visit(`${Cypress.config().baseUrl}/${staticTestData.shop}`);
        cy.url().should('include', staticTestData.products);
    });
});

Then('The user sees the Redirects listed on the Redirects page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.redirectsURL);
    });
});
