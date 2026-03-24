/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('The user Verifies the Failed Orders URL in Failed Orders page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.failedOrdersURL);
    });
});
