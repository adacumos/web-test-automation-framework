/// <reference types="cypress" />

import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { agentListLocators, dashboardLocators } from '../../locator_libraries';

Then('The user Verifies the Agent List URL in Agent List page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.agentListURL);
    });
});

Then(
    'The user fills the data for all the fields in the agent list page and clicks on the create sales agent button',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.createNewSalesAgent(
                staticTestData.firstName,
                staticTestData.lastName,
                staticTestData.email,
                staticTestData.password,
                staticTestData.confirmPassword,
                staticTestData.agency,
                staticTestData.callCenterUserName
            );
        });
    }
);

Then('The user verifies the {string} sales agent', (option: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (option) {
            case 'created':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.agency)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.callCenterUserName)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.email)
                    .should('be.visible');
                break;
            case 'updated':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.updatedAgencyName)
                    .should('be.visible');
                break;
            default:
                throw new Error('Invalid button specified');
        }
    });
});

When(
    'The user click on the edit sales agent icon and fills the updated agency name and clicks on the update sales agent button',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            dashboardLocators.editButtonDashboard().click();
            agentListLocators
                .agencyField()
                .clear()
                .type(staticTestData.updatedAgencyName);
            dashboardLocators.updateButton().click();
        });
    }
);
