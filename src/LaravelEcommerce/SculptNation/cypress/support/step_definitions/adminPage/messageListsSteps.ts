/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('The user verifies the lists URL in lists page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.listsURL);
    });
});
