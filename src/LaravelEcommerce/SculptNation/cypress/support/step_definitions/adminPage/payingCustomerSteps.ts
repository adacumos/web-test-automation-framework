/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { salesFunnelsLocators } from '../../locator_libraries';

Then(
    'The user Verifies the Paying Customers URL in Paying Customers page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.url().should('include', staticTestData.payingCustomersURL);
        });
    }
);

Then(
    'The user Verifies the table is existed with entries in Paying Customer page',
    () => {
        salesFunnelsLocators.tableBody().then((row) => {
            salesFunnelsLocators.tableBody().should('have.length', row.length);
        });
    }
);

Then(
    'The user verifies the table and table headers in Paying Customers page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            salesFunnelsLocators.tableBody().should('be.visible');
            const headerNames: string[] = staticTestData.adminPage.tableHeader;
            cy.logStep('Verify Expected table columns are visible');
            headerNames.forEach((header) => {
                salesFunnelsLocators
                    .tableHeaderSales(header)
                    .scrollIntoView()
                    .should('be.visible');
            });
        });
    }
);
