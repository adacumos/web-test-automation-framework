/// <reference types="cypress" />

import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given(
    'The user logs into the VShred Admin Tool using an {string} account',
    (accountType: string) => {
        cy.logStep(`Login using ${accountType} credentials`);
        cy.clearAllSessionData();
        cy.visit('staging.vshred.com/login');
        // if (accountType === 'admin') {
        //     cy.loginToAdminTool(
        //         Cypress.env('ADMIN_USER'),
        //         Cypress.env('ADMIN_PASSWORD')
        //     );
        if (accountType === 'admin') {
            cy.get('#email').type(Cypress.env('VS_ADMIN_USER'));
            cy.get('#password').type(Cypress.env('VS_PASSWORD'));
            cy.get('button').contains('Login').click();
        } else {
            throw new Error(
                'User role not yet supported. Please add the user type and credentials to this step definition.'
            );
        }
    }
);
