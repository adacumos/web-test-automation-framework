import {
    homePageLocators,
    loginPageLocators,
} from '../../Marketing_Funnels/cypress/support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            loginToVsAdminTool: (
                userEmail: string,
                userPassword: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to login to VShred Admin Tool using the provided credentials
 *
 * @param userEmail the user's email
 * @param userPassword the user's password
 *
 * @example
 * cy.loginToVsAdminTool('user_email@domain.com', '1234')
 *
 */
export const loginToVsAdminTool = (
    userEmail: string,
    userPassword: string
): Cypress.Chainable<any> => {
    cy.logStep('Navigate to Admin Tool Login screen');
    cy.visit('/');
    homePageLocators.navigationMenu().within(() => {
        homePageLocators.navigationMenuItemLink('login').click();
    });

    cy.logStep('Fill in valid login data and click Login');
    loginPageLocators.emailField().type(userEmail);
    loginPageLocators.passwordField().type(userPassword, { log: false });

    return loginPageLocators.loginButton().click();
};
