import vsSurveyOrderFormPageLocators from '../../support/locator_libraries/consumerPages/vsSurveyOrderFormPageLocators';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutVsSurveyCheckout: (clientEmail: string) => void;
        }
    }
}

/** *
 * Command to fill out the VS Order Form
 * @param clientEmail client user's e-mail address
 * @example cy.filloutVsSurveyCheckout('janed.test@example.com')
 */

export const filloutVsSurveyCheckout = (clientEmail: string): void => {
    cy.logStep('Navigate to checkout form');

    cy.get('body').then((checkoutForm: any) => {
        if (checkoutForm.find('#order_summary').length > 0) {
            cy.logStep('Redirect checkout form fillout to CheckoutFLE');
            cy.filloutVsCheckoutFle(clientEmail);
        } else {
            cy.get('@staticTestData').then((staticTestData: any) => {
                const {
                    clientName,
                    phoneNumber,
                    address,
                    city,
                    state,
                    postalCode,
                    country,
                } = staticTestData;

                cy.intercept('POST', '**/vsu/subscribe/**').as('braintreeCall');

                cy.logStep('Fill out Contact Information');
                vsSurveyOrderFormPageLocators.contactInformation
                    .name()
                    .clear()
                    .type(clientName);
                vsSurveyOrderFormPageLocators.contactInformation
                    .email()
                    .clear()
                    .type(clientEmail);
                vsSurveyOrderFormPageLocators.contactInformation
                    .phoneNumber()
                    .clear()
                    .type(phoneNumber);
                vsSurveyOrderFormPageLocators.contactInformation
                    .addressLine1()
                    .clear()
                    .type(address);
                vsSurveyOrderFormPageLocators.contactInformation
                    .city()
                    .clear()
                    .type(city);
                vsSurveyOrderFormPageLocators.contactInformation
                    .postalCode()
                    .clear()
                    .type(postalCode);
                vsSurveyOrderFormPageLocators.contactInformation
                    .country(country)
                    .select(country)
                    .should('have.value', country);
                if (country !== 'USA') {
                    vsSurveyOrderFormPageLocators.contactInformation
                        .country(country)
                        .should('have.value', country);
                    vsSurveyOrderFormPageLocators.contactInformation
                        .state()
                        .select(state)
                        .invoke('attr', 'value', state)
                        .should('have.attr', 'value', state)
                        .select(state)
                        .select(state)
                        .select(state)
                        .select(state)
                        .select(state)
                        .select(state)
                        .select(state)
                        .select(state) // Having to smash the button in order to get the value to stay. Bug raised will update after fix
                } else {
                    vsSurveyOrderFormPageLocators.contactInformation
                        .state()
                        .select(state)
                        .should('have.value', state);
                }
                vsSurveyOrderFormPageLocators.contactInformation
                    .nextStep()
                    .click();

                cy.get('body').then((paymentInfo: any) => {
                    if (
                        paymentInfo.find('#adyen-checkout-container').length > 0
                    ) {
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
                        // eslint-disable-next-line cypress/no-unnecessary-waiting
                        cy.wait(1000); // expected wait time in loading order details
                    } else {
                        cy.logStep('Fill out Braintree Payment Container');

                        vsSurveyOrderFormPageLocators.paymentInformation
                            .creditCardNumber()
                            .type(Cypress.env('CREDIT_CARD_NUMBER'));

                        vsSurveyOrderFormPageLocators.paymentInformation
                            .expirationMonth()
                            .type(Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'));
                        vsSurveyOrderFormPageLocators.paymentInformation
                            .expirationYear()
                            .type(Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'));
                        vsSurveyOrderFormPageLocators.paymentInformation
                            .securityCode()
                            .type(Cypress.env('CREDIT_CARD_CVV'));
                        vsSurveyOrderFormPageLocators.paymentInformation
                            .postalCode()
                            .type('89120');
                    }
                });
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(2000); // expected wait time in loading order details

                vsSurveyOrderFormPageLocators.paymentInformation
                    .nextStep()
                    .click();
            });
        }
    });

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(6000); // expected wait time to load order details
};
