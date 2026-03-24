import { processOrderPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createUserViaiFrame: (userDetails: any) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to create a new user in the SculptNation Admin Tool
 * @param userDetails the user information details
 * cy.createUserViaiFrame('test', 'tester', 'user_email@domain.com', '1234')
 *
 */
export const createUserViaiFrame = (
    userDetails: any
): Cypress.Chainable<any> => {
    cy.logStep('Creating New User within an iFrame');

    processOrderPageLocators.userInformationIframe
        .firstName()
        .type(userDetails.firstName);
    processOrderPageLocators.userInformationIframe
        .lastName()
        .type(userDetails.lastName);
    processOrderPageLocators.userInformationIframe
        .email()
        .type(userDetails.email);
    processOrderPageLocators.userInformationIframe
        .password()
        .clear()
        .type(userDetails.password);
    processOrderPageLocators.userInformationIframe
        .confirmPassword()
        .clear()
        .type(userDetails.password);
    processOrderPageLocators.userInformationIframe.createUserButton().click();

    return processOrderPageLocators.userInformationIframe
        .successToast()
        .should('be.visible');
};
