/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from 'Vshred/_libs/testData';
import { adminPageLocatorsMKT, loginPageLocators } from '../locator_libraries';

Given('The user logs into the admin menu', () => {
    cy.visit('/');
    loginPageLocators.loginHeaderLink().click();
    cy.get('@staticTestData').then((staticTestData: any) => {
        loginPageLocators.emailField().type(staticTestData.adminUser);
        loginPageLocators
            .passwordField()
            .type(staticTestData.adminPassword)
            .type('{enter}');
    });
});

When('The user creates a new test user in the Admin Tool', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep('Click on users menu button');
        adminPageLocatorsMKT.usersTab().click();

        cy.logStep('Click on Create New User');
        adminPageLocatorsMKT.createUserButton().click();

        cy.logStep('Enter valid user data in the form and click Create User');
        dynamicTestData.userEmail = Math.floor(
            Math.random() * 100000000
        ).toString();

        adminPageLocatorsMKT.usernameField().type(staticTestData.firstName);
        adminPageLocatorsMKT
            .useremailField()
            .type(
                staticTestData.newAutomationUser +
                    dynamicTestData.userEmail +
                    staticTestData.newEmail
            );

        cy.logStep('Storing Email for Reference');
        adminPageLocatorsMKT.useremailField().invoke('text').as('NewUserEmail');

        adminPageLocatorsMKT.userPhoneField().type(staticTestData.phoneDetails);
        adminPageLocatorsMKT
            .userPasswordField()
            .type(staticTestData.newPassword);
        adminPageLocatorsMKT
            .userConfirmField()
            .type(staticTestData.newPassword);
        adminPageLocatorsMKT.saveCreateUserButton().click();
    });
});

Then(
    'The user sees the User Information page for the newly created test user',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            adminPageLocatorsMKT
                .userInfoVerificationLocator()
                .contains(staticTestData.firstName);
            adminPageLocatorsMKT
                .userInfoVerificationLocator()
                .contains(staticTestData.phoneDetails);

            adminPageLocatorsMKT
                .userInfoVerificationLocator()
                .contains(staticTestData.phoneDetails);
        });
    }
);

Then(
    'The user updates the users email to all ready existing user and encounters error',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            adminPageLocatorsMKT.editUserProfileTab().click();
            adminPageLocatorsMKT
                .editUserEmailField()
                .clear()
                .type(staticTestData.existingEmail);

            adminPageLocatorsMKT.updateUserInfoButton().click();

            adminPageLocatorsMKT.alertError().should('be.visible');
        });
    }
);

Then('The user updates the users email', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        adminPageLocatorsMKT.editUserProfileTab().click();

        dynamicTestData.userEmail = Math.floor(
            Math.random() * 100000000
        ).toString();

        adminPageLocatorsMKT
            .editUserEmailField()
            .clear()
            .type(
                staticTestData.newAutomationUser +
                    dynamicTestData.userEmail +
                    staticTestData.newEmail
            );

        adminPageLocatorsMKT.updateUserInfoButton().click();

        adminPageLocatorsMKT.alertSuccess().should('be.visible');
    });
});

Then('The user updates the users phone details', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        adminPageLocatorsMKT.editUserProfileTab().click();

        adminPageLocatorsMKT
            .updateUserPhoneField()
            .type(staticTestData.newPhoneDetails);

        adminPageLocatorsMKT.updateUserInfoButton().click();

        adminPageLocatorsMKT.alertSuccess().should('be.visible');
    });
});

Then(
    'The user updates the users password to same password and encounters error',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            adminPageLocatorsMKT.editUserProfileTab().click();

            adminPageLocatorsMKT
                .updateUserPassword()
                .type(staticTestData.newPassword);

            adminPageLocatorsMKT
                .updateConfirmUserPassword()
                .type(staticTestData.newPassword);

            adminPageLocatorsMKT.updateUserInfoButton().click();

            adminPageLocatorsMKT.alertError().should('be.visible');
        });
    }
);

Then('The user edits the users password', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        adminPageLocatorsMKT.editUserProfileTab().click();

        adminPageLocatorsMKT
            .updateUserPassword()
            .type(staticTestData.updatedPassword);

        adminPageLocatorsMKT
            .updateConfirmUserPassword()
            .type(staticTestData.updatedPassword);

        adminPageLocatorsMKT.updateUserInfoButton().click();

        adminPageLocatorsMKT.alertSuccess().should('be.visible');
    });
});

Then(
    'The user updates the users password with incorrect password in confirm password field and error is encountered',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            adminPageLocatorsMKT.editUserProfileTab().click();

            adminPageLocatorsMKT
                .updateUserPassword()
                .type(staticTestData.newPassword);

            adminPageLocatorsMKT
                .updateConfirmUserPassword()
                .type(staticTestData.updatedPassword);

            adminPageLocatorsMKT.updateUserInfoButton().click();

            adminPageLocatorsMKT.alertError().should('be.visible');
        });
    }
);
