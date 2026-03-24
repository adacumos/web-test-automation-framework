import { deposcoLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            loginToDeposco: (
                username: string,
                password: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to login to the Deposco using the provided credentials.
 * @param username the username
 * @param password the user's password
 * @example
 * cy.loginToDeposco('user_name', '1234')
 *
 */
export const loginToDeposco = (
    username: string,
    password: string
): Cypress.Chainable<any> => {
    deposcoLocators.usernameInputField().type(username);
    deposcoLocators.passwordInputField().type(password, { log: false });
    return deposcoLocators.loginButton().click();
};
