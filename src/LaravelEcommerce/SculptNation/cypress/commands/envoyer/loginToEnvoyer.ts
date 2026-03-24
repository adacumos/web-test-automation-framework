import { envoyerPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            loginToEnvoyer: (email: string, password: string) => void;
        }
    }
}

/**
 * Command used to log in to Envoyer
 * @param email the user's first name
 * @param password the user's last name
 * @example
 * cy.loginToEnvoyer('arvin.d@vshred.com', 'pass123')
 *
 */

export const loginToEnvoyer = (email: string, password: string): void => {
    envoyerPageLocators.loginPage.emailTextBox().type(email);
    envoyerPageLocators.loginPage.passwordTextBox().type(password);
    envoyerPageLocators.loginPage.continueButton().click();
    cy.task('generateOTP', Cypress.env('ENVOYER_TOKEN')).then((token) =>
        envoyerPageLocators.loginPage
            .tokenTextBox()
            .type(`${token}`, { log: false })
    );
    envoyerPageLocators.loginPage.verifyButton().click();
};
