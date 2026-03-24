/// <reference types="cypress" />

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { usersPageLocators } from '../../../Vshred_TrainerTool/cypress/support/locator_libraries';
import { dynamicTestData } from '../../testData';

When('The user creates a new test user', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        dynamicTestData.userPassword = Math.floor(
            Math.random() * 100000000
        ).toString();

        cy.generateRandomTestEmail().then((randomEmail) => {
            dynamicTestData.userEmail = randomEmail;
            cy.createVsUserViaAdminTool(
                staticTestData.userName,
                dynamicTestData.userEmail,
                staticTestData.userPhone,
                dynamicTestData.userPassword,
                staticTestData.userRole
            );
        });
    });
});

When(
    'The user searches for the recently created user email and opens the Information page',
    () => {
        usersPageLocators
            .emailSearchField()
            .clear()
            .type(dynamicTestData.userEmail);
    }
);

Then(
    'The user views the User Information page for the newly created test user',
    () => {
        cy.logStep('Verify newly created user data is correct');

        cy.get('@staticTestData').then((staticTestData: any) => {
            usersPageLocators.viewUserForm.detailsSection().within(() => {
                cy.contains('.col-lg-10', staticTestData.userName).should(
                    'be.visible'
                );
                cy.contains('.col-lg-10', dynamicTestData.userEmail).should(
                    'be.visible'
                );
                cy.contains('.col-lg-10', staticTestData.userPhone).should(
                    'be.visible'
                );
                cy.contains('.col-lg-10', staticTestData.userRole).should(
                    'be.visible'
                );
            });
        });
    }
);

Then('The user deletes the newly created test user', () => {
    cy.logStep('Navigate to Edit user page');
    usersPageLocators.userDetails.navigationTab('edit').click();

    cy.deleteVsUserViaAdminTool(dynamicTestData.userEmail);
});
