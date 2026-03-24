/// <reference types="cypress" />

import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given(
    'The user logs into the {string} Admin tool with {string} account credentials',
    (environment: string, accountType: string) => {
        if (environment === 'Sculptnation') {
            cy.logStep(`Login using ${accountType} credentials`);
            if (accountType === 'admin') {
                cy.loginToAdminTool(
                    Cypress.env('ADMIN_USER'),
                    Cypress.env('ADMIN_PASSWORD'),
                    environment
                );
            }
        } else if (environment === 'LE Vshred') {
            cy.logStep(`Login using ${accountType} credentials`);
            if (accountType === 'admin') {
                cy.loginToAdminTool(
                    Cypress.env('ADMIN_USER'),
                    Cypress.env('ADMIN_PASSWORD'),
                    environment
                );
            } 
        } else if (environment === 'Vshred') {
            cy.logStep(`Login using ${accountType} credentials`);
            if (accountType === 'admin') {
                cy.loginToAdminTool(
                    Cypress.env('ADMIN_USER'),
                    Cypress.env('ADMIN_PASSWORD'),
                    environment
                );
            } 
        }else {
            throw new Error(
                'User role not yet supported. Please add the user type and credentials to this step definition.'
            );
        }
    }
);
