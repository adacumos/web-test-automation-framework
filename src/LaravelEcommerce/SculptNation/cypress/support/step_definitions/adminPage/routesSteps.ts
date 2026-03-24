/// <reference types="cypress" />

import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { dashboardLocators, routesLocators } from '../../locator_libraries';

Then('The user Verifies the Routes URL in Routes page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.routesURL);
    });
});

When(
    'The user fills the {string} name for the fields in the routes page',
    (option: string) => {
        switch (option) {
            case 'updated route':
                routesLocators.slugField().type('1');
                break;
            case 'route':
                routesLocators.slugField().clear().type('test_order_form');
                break;
            default:
                throw new Error('Invalid button specified');
        }
    }
);

When('The user clicks on the edit route icon', () => {
    routesLocators.editRouteButton().click();
});

When('The user clicks on the update route button in the routes page', () => {
    dashboardLocators.updateButton().click();
});

Then('The user verifies the updated route', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        dashboardLocators
            .cmsLocator()
            .contains(staticTestData.updatedRoute)
            .should('be.visible');
    });
});

When('The user clicks on the route edit icon', () => {
    routesLocators.routeEditButton().click();
});
