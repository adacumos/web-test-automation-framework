import vsSurveyOrderFormPageLocators from '../support/locator_libraries/consumerPages/vsSurveyOrderFormPageLocators';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutPaymentInformation: () => void;
        }
    }
}

/** *
 * Command to fill out Checkout form payment information
 * @example cy.filloutPaymentInformation()
 */

export const filloutPaymentInformation = (): void => {
    cy.logStep('Fillout payment information');
    cy.get('body').then((paymentInfo: any) => {
        if (paymentInfo.find('#adyen-checkout-container').length > 0) {
            cy.logStep('Fill out Adyen Payment Container');
            vsSurveyOrderFormPageLocators.adyenPaymentContainer
                .creditCardNumber()
                .type(Cypress.env('CREDIT_CARD_NUMBER'));
            vsSurveyOrderFormPageLocators.adyenPaymentContainer
                .expirationDate()
                .type(
                    `${Cypress.env('CREDIT_CARD_EXPIRATION_MONTH')}
                                ${String(
                                    Cypress.env('CREDIT_CARD_EXPIRATION_YEAR')
                                ).slice(-2)}`
                );
            vsSurveyOrderFormPageLocators.adyenPaymentContainer
                .securityCode()
                .type(Cypress.env('CREDIT_CARD_CVV'));
        } else {
            cy.logStep('Fill out Braintree Payment Container');
            vsSurveyOrderFormPageLocators.paymentInformation
                .creditCardNumber()
                .type(Cypress.env('CREDIT_CARD_NUMBER'));

            cy.get('body').then((paymentContainer: any) => {
                if (
                    paymentContainer.find(
                        '#braintree-hosted-field-expirationDate'
                    ).length > 0
                ) {
                    vsSurveyOrderFormPageLocators.paymentInformation
                        .expirationDate()
                        .type(
                            `${Cypress.env('CREDIT_CARD_EXPIRATION_MONTH')}
                                ${String(
                                    Cypress.env('CREDIT_CARD_EXPIRATION_YEAR')
                                )}`
                        );
                } else {
                    vsSurveyOrderFormPageLocators.paymentInformation
                        .expirationMonth()
                        .type(Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'));
                    vsSurveyOrderFormPageLocators.paymentInformation
                        .expirationYear()
                        .type(Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'));
                }
            });
            vsSurveyOrderFormPageLocators.paymentInformation
                .securityCode()
                .type(Cypress.env('CREDIT_CARD_CVV'));
            vsSurveyOrderFormPageLocators.paymentInformation
                .postalCode()
                .type('89101');
        }
    });
};
