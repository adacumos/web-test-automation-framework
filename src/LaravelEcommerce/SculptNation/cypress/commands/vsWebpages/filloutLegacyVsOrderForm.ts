import { vsOrderFormPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutLegacyVsOrderForm: (
                clientEmail: string,
                clientName: string,
                phoneNumber: string
            ) => void;
        }
    }
}

/** *
 * Command to fill out the Legacy VS Order Form
 * @example
 * @param clientEmail client user's e-mail address
 * @param clientName client user's name
 * @param phoneNumber client user's phone number
 * @example cy.filloutLegacyVsOrderForm('Jane Doe', janed.test@example.com', '712-1231234')
 */

export const filloutLegacyVsOrderForm = (
    clientEmail: string,
    clientName: string,
    phoneNumber: string
): void => {
    cy.logStep('Navigate to checkout form');
    cy.url().should('include', '/order-form/');
    cy.logStep('Fill out Contact Information');
    vsOrderFormPageLocators.contactInformation.name().clear().type(clientName);
    vsOrderFormPageLocators.contactInformation
        .email()
        .clear()
        .type(clientEmail);
    vsOrderFormPageLocators.contactInformation
        .phoneNumber()
        .clear()
        .type(phoneNumber);
    vsOrderFormPageLocators.contactInformation.nextStep().click();

    cy.logStep('Fill out Payment Information');
    vsOrderFormPageLocators.paymentInformation
        .creditCardNumber()
        .type(Cypress.env('CREDIT_CARD_NUMBER'));

    vsOrderFormPageLocators.paymentInformation
        .expirationDate()
        .type(
            Cypress.env('CREDIT_CARD_EXPIRATION_MONTH') +
                Cypress.env('CREDIT_CARD_EXPIRATION_YEAR').toString().substr(-2)
        );
    vsOrderFormPageLocators.paymentInformation
        .securityCode()
        .type(Cypress.env('CREDIT_CARD_CVV'));

    vsOrderFormPageLocators.paymentInformation.postalCode().type('89120');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // Or use a more robust wait
    vsOrderFormPageLocators.paymentInformation.nextStep().click();

    vsOrderFormPageLocators.submitOrderButton().should('be.visible');

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // expected wait time to load order details
};
