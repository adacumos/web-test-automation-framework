/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    returnsLocators,
    salesFunnelsLocators,
} from '../../locator_libraries';

Then('The user verifies the Returns URL in Returns page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.returnsURL);
    });
});

Then(
    'The user fills the data for the fields and click on the create return button in the returns page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            returnsLocators.ordersListTextBox().click();
            salesFunnelsLocators.searchField().type(staticTestData.orderID1);
            returnsLocators.checkoutTestValue().click();
            returnsLocators.reason().type(staticTestData.createdReturn);
            returnsLocators
                .baseCurrencyAmount()
                .clear()
                .type(staticTestData.orderID);
            returnsLocators.amount().clear().type(staticTestData.orderID);
            dashboardLocators.createButton().click();
        });
    }
);

Then('The user verifies the {string} return', (message: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (message) {
            case 'Created':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.createdReturn)
                    .should('be.visible');
                break;
            case 'Updated':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.updatedReturn)
                    .should('be.visible');
                break;
            default:
                throw new Error('Invalid button specified');
        }
    });
});

Then(
    'The user fills the updated reason for the fields in the returns page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            returnsLocators.reason().type(staticTestData.orderID);
        });
    }
);
