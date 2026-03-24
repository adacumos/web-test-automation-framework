/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then(
    'The user verifies the SMS Confirmations URL in Confirmations page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.url().should('include', staticTestData.smsConfirmationsURL);
        });
    }
);
