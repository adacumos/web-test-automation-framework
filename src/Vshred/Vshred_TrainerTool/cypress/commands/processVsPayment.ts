import { ordersPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            processVsPayment: () => // creditCardNumber: string
            Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to enter the credit card data in the process payment window.
 * @example
 * cy.processVsPayment()
 *
 */
export const processVsPayment = (): Cypress.Chainable<any> => {
    cy.logStep('Process payment');

    ordersPageLocators.processPaymentWidget
        .cardNumber()
        .type(Cypress.env('CARD_NUMBER'));
    ordersPageLocators.processPaymentWidget
        .cardExpirationDate()
        .type(
            `${Cypress.env('CARD_EXPIRATION_MONTH')}/${Cypress.env(
                'CARD_EXPIRATION_YEAR'
            )
                .toString()
                .slice(2)}`
        );
    ordersPageLocators.processPaymentWidget
        .cardCvv()
        .type(Cypress.env('CARD_CVV'));
    ordersPageLocators.processPaymentWidget
        .cardPostalCode()
        .type(Cypress.env('CARD_POSTAL_CODE'));

    return ordersPageLocators.processPaymentWidget
        .submitPaymentButton()
        .click();
};
