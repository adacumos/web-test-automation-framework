/// <reference types="cypress" />

import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { loginPageLocators } from '../../locator_libraries';

Given(
    'The user logs into the Admin Tool using an account with {string} credentials',
    (accountType: string) => {
        cy.visit(Cypress.env('LE_ADMIN_URL'), { failOnStatusCode: false });
        const loginUser = Cypress.env('VS_ADMIN_USER');
        const loginPassword = Cypress.env('VS_PASSWORD');
        cy.logStep(`Login using ${accountType} credentials`);

        cy.url().then((loginUrl: any) => {
            const isUatProdServer = loginUrl.includes(
                loginUrl.includes('https://le-uat.sculptnation.com') ||
                    loginUrl.includes('https://sculptnation.com') ||
                    loginUrl.includes('https://le.vshred.com') ||
                    loginUrl.includes('https://vshred.com')
            );

            if (isUatProdServer) {
                cy.loginToAdminTool(
                    Cypress.env('LE_UAT_ADMIN_USER'),
                    Cypress.env('UAT_ADMIN_PASSWORD'),
                    Cypress.env('LE_ADMIN_URL')
                );
            } else if (accountType !== 'admin') {
                cy.loginToAdminTool(
                    loginUser,
                    loginPassword,
                    Cypress.env('LE_ADMIN_URL')
                );
            } else if (accountType === 'admin') {
                cy.loginToAdminTool(
                    Cypress.env('ADMIN_USER'),
                    Cypress.env('ADMIN_PASSWORD'),
                    Cypress.env('LE_ADMIN_URL')
                );
            } else {
                throw new Error(
                    'User role not yet supported. Please add the user type and credentials to this step definition.'
                );
            }
        });
    }
);

Given(
    'The user logs into the Vshred Admin Tool as {string} user',
    (userType: string) => {
        cy.logStep(`Login to VShred Admin tool as ${userType} user`);
        cy.loginToVshredAdminTool(userType.toLowerCase());
    }
);

Given('The new user created logs into the Vshred Admin Tool', () => {
    const vshredUrl = Cypress.env('VS_ADMIN_URL');
    cy.visit(`${vshredUrl}/login`);

    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { newUserEmail, newUserPassword } = data[0];
        loginPageLocators.vsEmailInputField().clear().type(newUserEmail);
        loginPageLocators.passwordInputField().clear().type(newUserPassword);
    });
    loginPageLocators.loginButton().click();
});
