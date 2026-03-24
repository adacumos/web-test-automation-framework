/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { deposcoLocators } from '../../locator_libraries';
import { dynamicTestData } from '../../testData';

Given('The user logs into Deposco', () => {
    cy.clearAllSessionData();

    cy.logStep('Navigate to the Deposco login screen');
    cy.visit(Cypress.env('DEPOSCO_URL'), {
        onBeforeLoad(win) {
            win.localStorage.clear();
        },
    });
    cy.logStep('Login to Deposco using valid credentials');
    cy.loginToDeposco(
        Cypress.env('DEPOSCO_EMAIL'),
        Cypress.env('DEPOSCO_PASSWORD')
    );

    cy.logStep('Wait for the data to be loaded in Deposco');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(80000);
});

When(
    'The user searches for the Shipping Reference Number previosuly created in the Admin Tool',
    () => {
        cy.logStep('Search for the Shipping Reference Number');
        deposcoLocators
            .searchInputField()
            .type(`${dynamicTestData.referenceNumber}{enter}`);
    }
);

Then(
    'The user obtains the SO Number for the Shipping Reference Number from the Fulfillment Orders page',
    () => {
        cy.logStep('Click the CO code in the search results');
        cy.intercept('GET', '/deposco/resources/secure/entity/*').as(
            'customerInfoLoaded'
        );
        deposcoLocators.searchResults
            .number()
            .should('be.visible')
            .invoke('text')
            .then((code) => {
                dynamicTestData.deposcoCustomOrder = code;
            });
        deposcoLocators.searchResults.number().click();

        cy.logStep('Wait for the data to be populated in ClientRW');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait('@customerInfoLoaded');

        cy.logStep('Click on the Fulfilment Orders tab');
        deposcoLocators.fulfillmentOrdersTab().click();

        cy.logStep('Get the SO Number from Fulfilment Orders');
        deposcoLocators.fulfillmentOrders.table().within(() => {
            deposcoLocators.fulfillmentOrders
                .number()
                .should('be.visible')
                .invoke('text')
                .then((number) => {
                    dynamicTestData.deposcoSONumber = number;
                });
        });
    }
);

When(
    'The user searches for the SO number previosuly canceled in QuietLogistics',
    () => {
        cy.logStep('Search for the Shipping Reference Number');
        deposcoLocators
            .searchInputField()
            .type(`${dynamicTestData.deposcoSONumber}{enter}`);
    }
);

Then('The user verifies the SO has been canceled', () => {
    deposcoLocators.searchResults
        .status()
        .should('be.visible')
        .invoke('text')
        .then((status) => {
            expect(status).to.eq('Canceled');
        });
});
