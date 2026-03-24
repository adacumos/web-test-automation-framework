import { loginPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            loginToAdminTool: (
                userEmail: string,
                userPassword: string,
                environment?: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to login to the SculptNation Admin Tool using the provided credentials.
 * @param userEmail the user's email
 * @param userPassword the user's password
 * @param environment the environment
 * @example
 * cy.loginToAdminTool('user_email@domain.com', '1234')
 *
 */
export const loginToAdminTool = (
    userEmail: string,
    userPassword: string,
    environment: string
): Cypress.Chainable<any> => {
    cy.clearAllSessionData();
    cy.logStep('Navigate to LE Sculptnation Admin Tool login screen');
    cy.visit(`${environment}/nova`);
    loginPageLocators.emailInputField().type(userEmail);
    loginPageLocators.passwordInputField().type(userPassword, { log: false });
    loginPageLocators.loginButton().click();

    return cy.url().then((currentUrl) => {
        if (currentUrl.includes('https://le-uat.sculptnation.com')) {
            cy.logStep('Enter One Time Password');
            cy.task('generateOTP', Cypress.env('UAT_TOKEN')).then((token) =>
                loginPageLocators
                    .oneTimpPasswordInputField()
                    .type(`${token}`, { log: false })
            );
        } else if (currentUrl.includes('staging')) {
            cy.logStep('Enter One Time Password');
            cy.task('generateOTP', Cypress.env('TOKEN')).then((token) =>
                loginPageLocators
                    .oneTimpPasswordInputField()
                    .type(`${token}`, { log: false })
            );
        } else {
            cy.logStep('Not on staging environment - no OTP needed');
        }
    });
};
