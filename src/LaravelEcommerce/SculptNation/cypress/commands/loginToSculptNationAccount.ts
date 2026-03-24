import { consumerLoginPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            loginToSculptNationAccount: (
                userEmail: string,
                userPassword: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to login to the SculptNation account on the consumer site using the provided credentials.
 * @param userEmail the user's email
 * @param userPassword the user's password
 * @example
 * cy.loginToSculptNationAccount('user_email@domain.com', '1234')
 *
 */
export const loginToSculptNationAccount = (
    userEmail: string,
    userPassowrd: string
): Cypress.Chainable<any> => {
    cy.logStep('Navigate to the SculptNation login page and log in');

    cy.clearAllSessionData();

    cy.visit('login', {
        onBeforeLoad(win) {
            win.localStorage.clear();
        },
    });

    consumerLoginPageLocators.loginForm.usernameField().type(userEmail);
    consumerLoginPageLocators.loginForm
        .passwordField()
        .type(userPassowrd, { log: false });

    return consumerLoginPageLocators.loginForm.logInButton().click();
};
