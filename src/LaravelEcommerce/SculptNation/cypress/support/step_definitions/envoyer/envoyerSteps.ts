/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { envoyerPageLocators } from '../../locator_libraries';

Given('The user logs into Envoyer', () => {
    cy.clearAllSessionData();

    cy.logStep('User navigates to the Envoyer login screen');
    cy.visit(Cypress.env('ENVOYER_URL'), {
        onBeforeLoad(win) {
            win.localStorage.clear();
        },
    });
    cy.log('User logs into Envoyer');
    cy.loginToEnvoyer(
        Cypress.env('ADMIN_USER'),
        Cypress.env('ENVOYER_PASSWORD')
    );
});

Then(
    'The user updates the {string} environment variable to {string} on the test server',
    (envVar: string, varValue: string) => {
        cy.logStep(
            `Update ${envVar} environment variable to ${varValue} using SSH command`
        );

        switch (envVar) {
            case 'KLAVIYO_ENABLED':
                if (varValue === 'false') {
                    cy.setEnvoyerEnvVar(envVar, 'true', varValue);
                } else if (varValue === 'true') {
                    cy.setEnvoyerEnvVar(envVar, 'false', varValue);
                }
                break;
            case 'DEFAULT_FRAUD_DRIVER':
                if (varValue === 'Forter') {
                    cy.setEnvoyerEnvVar(envVar, 'Dummy', varValue);
                } else if (varValue === 'Dummy') {
                    cy.setEnvoyerEnvVar(envVar, 'Forter', varValue);
                }
                break;
            default:
                throw new Error(`Invalid Environment Variable: ${envVar}`);
        }
    }
);

When('The user navigates to Envoyer test environment', () => {
    cy.logStep('Navigate to the test environment');
    const testEnvUrl: any = Cypress.config().baseUrl;

    envoyerPageLocators.dashboardPage
        .testEnvLink(
            testEnvUrl
                .replace(/^http(s?):\/\//i, 'le-sn-')
                .replace('.sculptnation.com', '')
        )
        .should('be.visible')
        .scrollIntoView()
        .click({ multiple: true });
});

Then('The user deploys a branch to the test environment', () => {
    cy.logStep('Deploy branch to the test environment');
    envoyerPageLocators.dashboardPage.deployButton().click();
    envoyerPageLocators.dashboardPage
        .deployDialog()
        .should('be.visible')
        .within(() => {
            envoyerPageLocators.dashboardPage.branchText().click();
            envoyerPageLocators.dashboardPage.deployButton().click();
        });
});
