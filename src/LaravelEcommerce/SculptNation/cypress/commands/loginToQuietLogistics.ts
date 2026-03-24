import { quietLogisticsLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            loginToQuietLogistics: (
                username: string,
                password: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to login to the Quiet Logistics using the provided credentials.
 * @param username the username
 * @param password the user's password
 * @example
 * cy.loginToQuietLogistics('user_name', '1234')
 *
 */
export const loginToQuietLogistics = (
    username: string,
    password: string
): Cypress.Chainable<any> => {
    cy.logStep('Login into Quiet Logistics');

    quietLogisticsLocators.usernameInputField().type(username);
    quietLogisticsLocators.passwordInputField().type(password, { log: false });
    return quietLogisticsLocators.loginButton().click();
};
