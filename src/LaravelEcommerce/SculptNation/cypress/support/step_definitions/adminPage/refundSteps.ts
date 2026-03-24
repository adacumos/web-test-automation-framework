/// <reference types="cypress" />

import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    leOrdersPageLocators,
} from '../../locator_libraries';

Then('The user Verifies the Refund URL in Refund page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.refundURL);
    });
});

When('The user clicks on the back arrow in Refund page', () => {
    dashboardLocators.backArrow().click();
});

Then('The user Verifies the Orders URL in Orders page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.ordersURL);
    });
});

Then('The user verifies the table headers in Refund page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const headerNames: string[] = staticTestData.adminPage.tableHeader;
        cy.logStep('Verify Expected table columns are visible');
        headerNames.forEach((header) => {
            leOrdersPageLocators
                .tableHeader(header)
                .scrollIntoView()
                .should('be.visible');
        });
    });
});
