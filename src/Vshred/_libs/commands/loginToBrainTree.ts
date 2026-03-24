import { brainTreeLocators } from '../../Vshred_TrainerTool/cypress/support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            loginToBrainTree: (
                username: string,
                password: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to login to the BrainTree using the provided credentials
 *
 * @param userName the user's name
 * @param password the user's password

 * @example
 * cy.loginToBrainTree('userName', '1234')
 *
 */
export const loginToBrainTree = (
    userName: string,
    password: string
): Cypress.Chainable<any> => {
    cy.logStep('Navigate to the BrainTree login screen');
    cy.visit(Cypress.env('BRAINTREE_URL'), {
        onBeforeLoad(win) {
            win.localStorage.clear();
        },
    });

    cy.reload();

    cy.logStep('Fill in valid login data and click Login');
    brainTreeLocators.loginForm.userNameField().type(userName);
    brainTreeLocators.loginForm.passwordField().type(password, { log: false });

    return brainTreeLocators.loginForm.loginButton().click();
};
