import { vsOrderFormPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutVsOrderForm: (
                clientName: string,
                clientEmail: string,
                phoneNumber: string,
                orderItem: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** *
 * Command to fill out the VS Order Form
 * @example
 * @param clientName client user's name
 * @param clientEmail client user's e-mail address
 * @param phoneNumber client user's phone number
 * @param orderItem expected order Item
 * @example cy.filloutVsOrderForm('Jane Doe', janed.test@example.com', '712-1231234')
 */

export const filloutVsOrderForm = (
    clientName: string,
    clientEmail: string,
    phoneNumber: string,
    orderItem: string
): Cypress.Chainable<any> => {
    cy.logStep('Navigate to checkout form');
    cy.url().should('include', '/order-form/');

    cy.intercept('POST', '**/vsu/subscribe/**').as('braintreeCall');

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
    vsOrderFormPageLocators.paymentInformation.nextStep().click();

    vsOrderFormPageLocators
        .orderSummary()
        .should('be.visible')
        .and('contain', orderItem);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000); // expected wait time to load order details

    vsOrderFormPageLocators.submitOrderButton().should('be.visible').click();
    // cy.wait('@braintreeCall');

    return cy.get('body').then(($body) => {
        if ($body.find('.error > span').length) {
            vsOrderFormPageLocators.submitOrderButton().click();
        }
    });
};
