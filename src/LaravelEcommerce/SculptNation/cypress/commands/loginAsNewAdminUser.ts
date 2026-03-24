import { loginPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            loginAsNewAdminUser: (
                userEmail: string,
                userPassword: string,
                userToken?: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to login to the SculptNation Admin Tool as a Non-Admin user given the credentials.
 * @param userEmail the user's email
 * @param userPassword the user's password
 * @param userToken the user 2fa token user account is already registered
 * cy.loginAsNonAdminUser('user_email@domain.com', '1234')
 *
 */
export const loginAsNewAdminUser = (
    userEmail: string,
    userPassword: string,
    userToken?: string
): Cypress.Chainable<any> => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.clearAllSessionData();
    cy.logStep('Navigate to Admin Tool login screen');
    cy.visit('nova/login');

    loginPageLocators.emailInputField().type(userEmail);
    loginPageLocators.passwordInputField().type(userPassword);
    loginPageLocators.loginButton().click();

    cy.url().then((currentUrl) => {
        if (currentUrl.includes('staging')) {
            cy.get('body').then(($body: any) => {
                if (
                    $body
                        .text()
                        .includes('Welcome to Two-Factor Authentication')
                ) {
                    cy.logStep('New User 2FA setup');
                    loginPageLocators.continueButton().click();

                    cy.getLeAdminToken(userEmail);
                    cy.reload();

                    cy.readFile(filepath).then((data) => {
                        const newUserToken = data[0].tokenId;
                        cy.logStep('Enter One Time Password');
                        cy.task('generateOTP', newUserToken).then((token) =>
                            cy.get('#secret').type(`${token}`, { log: false })
                        );
                    });
                } else {
                    cy.logStep('Enter One Time Password');
                    cy.task('generateOTP', userToken).then((token) =>
                        loginPageLocators
                            .oneTimpPasswordInputField()
                            .type(`${token}`, { log: false })
                    );
                }
            });
        } else {
            cy.logStep('Not on staging environment - no OTP needed');
        }
    });

    return cy.logStep('Login');
};
