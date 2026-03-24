/// <reference types="cypress" />

import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    smsCampaignsLocators,
} from '../../locator_libraries';

Then('The user verifies the SMS Messages URL in Messages page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.smsMessagesURL);
    });
});

Then('The user fills the data for the fields in the sms messages page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        smsCampaignsLocators.nameField().type(staticTestData.createdMessage);
        dashboardLocators.body().type(staticTestData.createdMessage);
    });
});

Then(
    'The user fills the updated message name for the fields in the messages page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            smsCampaignsLocators
                .nameField()
                .type(staticTestData.messageSentCount);
        });
    }
);

When(
    'The user clicks on the {string} message button in the messages page',
    (option: string) => {
        switch (option) {
            case 'Create':
                dashboardLocators.createButton().click();
                break;
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

Then('The user verifies the {string} message', (message: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (message) {
            case 'Created':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.createdMessage)
                    .should('be.visible');
                break;
            case 'Updated':
                dashboardLocators.updatedMessage().should('be.visible');
                break;
            case 'Deleted':
                dashboardLocators.updatedMessage().should('not.be.visible');
                break;
            default:
                throw new Error('Invalid button specified');
        }
    });
});

When('The user click on the {string} template icon', (action: string) => {
    switch (action) {
        case 'Edit':
            dashboardLocators.editButtonDashboard().click();
            break;
        case 'Delete':
            dashboardLocators.deleteModalButton().click();
            break;
        default:
            throw new Error('Invalid button specified');
    }
});
