/// <reference types="cypress" />

import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    leOrdersPageLocators,
} from '../../locator_libraries';

Then('The user Verifies the Activity URL in Activity page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.refundURL);
    });
});

When('The user clicks on the back arrow in Activity page', () => {
    dashboardLocators.backArrow().click();
});

Then('The user verifies the table headers in Activity page', () => {
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
