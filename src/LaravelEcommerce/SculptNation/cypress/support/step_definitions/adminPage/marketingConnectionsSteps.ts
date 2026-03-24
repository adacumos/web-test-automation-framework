/// <reference types="cypress" />

import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import {
    marketingConnectionsLocators,
    salesFunnelsLocators,
    dashboardLocators,
} from '../../locator_libraries';

Then('The user verifies the connections URL in connections page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.connectionsURL);
    });
});

Then('The user fills the data for the fields in the connections page', () => {
    marketingConnectionsLocators.marketingListTextBox().click();
    salesFunnelsLocators.searchField().type('Test');
    marketingConnectionsLocators.checkoutTestValue().click();
    marketingConnectionsLocators.marketableTextBox().select('Offer');
    marketingConnectionsLocators.offerTextBox().click();
    salesFunnelsLocators.searchField().type('Test');
    marketingConnectionsLocators.offerTestValue().click();
});

Then(
    'The user fills the updated connect name for the fields in the connections page',
    () => {
        marketingConnectionsLocators.marketingListTextBox().click();
        salesFunnelsLocators.searchField().type('Test');
        marketingConnectionsLocators.checkoutTestValue1().click();
    }
);

Then('The user verifies the {string} connection', (message: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (message) {
            case 'Created':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.createdConnection)
                    .should('be.visible');
                break;
            case 'Updated':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.updatedConnection)
                    .should('be.visible');
                break;
            default:
                throw new Error('Invalid button specified');
        }
    });
});

When(
    'The user clicks on the {string} connection button in the connections page',
    (option: string) => {
        switch (option) {
            case 'Edit':
                dashboardLocators.editButtonDashboard().click();
                break;
            case 'Update':
                dashboardLocators.updateButton().click();
                break;
            case 'Delete':
                dashboardLocators.deleteModalButton().click();
                break;
            default:
                throw new Error('Invalid button specified');
        }
    }
);
