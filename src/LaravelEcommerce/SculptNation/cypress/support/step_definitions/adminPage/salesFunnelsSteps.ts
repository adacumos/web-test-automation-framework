/// <reference types="cypress" />

import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    salesFunnelsLocators,
} from '../../locator_libraries';

Then('The user verifies the Sales Funnels URL in Sales Funnels page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.salesFunnelsURL);
    });
});

When(
    'The user clicks on the Sales Funnels label from the sidebar menu of the Admin Tool Dashboard',
    () => {
        salesFunnelsLocators.salesFunnelsLabel().click();
    }
);

Then('The user verifies the table in sales funnels page', () => {
    salesFunnelsLocators.tableBody().should('be.visible');
});

When('The user fills the data for the fields in the sales funnel page', () => {
    cy.wrap(Math.floor(Math.random() * 89999 + 10000)).as('randomInt');
    salesFunnelsLocators.nameField().type('TestFunnel');
    cy.get('@randomInt').then((rand) => {
        salesFunnelsLocators.slugField().clear().type(`TestSlug${rand}`);
    });
    salesFunnelsLocators.routeField().click();
    salesFunnelsLocators.searchField().type('Test');
    salesFunnelsLocators.checkoutTestValue().click();
});

When(
    'The user clicks on the {string} sales funnel button in the sales funnels page',
    (option: string) => {
        switch (option) {
            case 'Create':
                dashboardLocators.createButton().click();
                break;
            case 'Save Funnel':
                salesFunnelsLocators.saveFunnelButton().click();
                salesFunnelsLocators.salesFunnelsLabel().click();
                break;
            default:
                throw new Error('Invalid button specified');
        }
    }
);

When(
    'The user fills the updated sales funnel name for the field in the sales funnel page',
    () => {
        salesFunnelsLocators.nameField().type('1');
    }
);

Then('The user verifies the {string} sales funnel', (template: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (template) {
            case 'Created':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.createdFunnel)
                    .should('be.visible');
                break;
            case 'Updated':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.updatedFunnel)
                    .should('be.visible');
                break;
            case 'Deleted':
                salesFunnelsLocators.salesFunnelsLabel().click();
                salesFunnelsLocators.updatedFunnel().should('not.be.visible');
                break;
            default:
                throw new Error('Invalid button specified');
        }
    });
});

When('The user click on the {string} sales funnel icon', (action: string) => {
    switch (action) {
        case 'Edit':
            dashboardLocators.editButtonDashboard().click();
            break;
        case 'Delete':
            /* eslint-disable cypress/no-unnecessary-waiting */
            cy.wait(5000);
            salesFunnelsLocators.salesViewButton().eq(0).click();
            dashboardLocators.deleteModalButton().click();
            break;
        default:
            throw new Error('Invalid button specified');
    }
});
