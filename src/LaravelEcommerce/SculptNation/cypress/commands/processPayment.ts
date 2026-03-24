import { usersPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            processPayment: (
                creditCardNumber: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to enter the credit card data in the process payment window.
 * @param creditCardNumber the card number
 * @example
 * cy.processPayment('the credit card number')
 *
 */
export const processPayment = (
    creditCardNumber: string
): Cypress.Chainable<any> => {
    cy.logStep('Process credit card payment');

    cy.intercept('POST', '/nova-vendor/process-order/order/pay').as(
        'paymentDone'
    );

    usersPageLocators.processPayment.newCard().click();

    usersPageLocators.processPayment
        .creditCardNumber()
        .clear()
        .type(creditCardNumber);

    usersPageLocators.processPayment
        .creditCardExpirationMonth()
        .type(Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'));

    usersPageLocators.processPayment
        .creditCardExpirationYear()
        .type(Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'));

    usersPageLocators.processPayment
        .creditCardCvv()
        .type(Cypress.env('CREDIT_CARD_CVV'));

    usersPageLocators.processPayment.processPaymentButton().click();

    return cy.wait('@paymentDone');
};
