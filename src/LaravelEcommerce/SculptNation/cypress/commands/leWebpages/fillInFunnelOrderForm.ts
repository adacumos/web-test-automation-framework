import { consumerLandingPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            fillInFunnelOrderForm: (
                clientName: string,
                userEmail: string,
                shippingAddress1: string,
                shippingCity: string,
                shippingState: string,
                shippingPostal: string,
                shippingCountry: string,
                shippingPhoneNumber: string
            ) => Cypress.Chainable<any>;
        }
    }
}

export const fillInFunnelOrderForm = (
    clientName: string,
    userEmail: string,
    shippingAddress1: string,
    shippingCity: string,
    shippingState: string,
    shippingPostal: string,
    shippingCountry: string,
    shippingPhoneNumber: string
): Cypress.Chainable<any> => {
    cy.logStep('Fillout LE VS Checkout Order Form');
    cy.intercept('POST', '/api/cart/pay*').as('waitForPayment');

    consumerLandingPageLocators.surveyOrderForm.name().clear().type(clientName);
    consumerLandingPageLocators.surveyOrderForm.email().clear().type(userEmail);
    consumerLandingPageLocators.surveyOrderForm.nextStepOne().click();

    cy.logStep('Fillout Shipping Information');
    consumerLandingPageLocators.surveyOrderForm
        .shippingName()
        .clear()
        .type(clientName);
    consumerLandingPageLocators.surveyOrderForm
        .shippingAddress1()
        .clear()
        .type(shippingAddress1);
    consumerLandingPageLocators.surveyOrderForm
        .shippingCity()
        .clear()
        .type(shippingCity);
    consumerLandingPageLocators.surveyOrderForm
        .shippingState()
        .select(shippingState);
    consumerLandingPageLocators.surveyOrderForm
        .shippingPostalCode()
        .clear()
        .type(shippingPostal);
    consumerLandingPageLocators.surveyOrderForm
        .shippingCountry()
        .select(shippingCountry);
    consumerLandingPageLocators.surveyOrderForm
        .shippingPhoneNumber()
        .clear()
        .type(shippingPhoneNumber);
    consumerLandingPageLocators.surveyOrderForm.nextStepTwo().click();

    cy.logStep('Fill in payment information');
    consumerLandingPageLocators.surveyOrderForm
        .creditCardNumber()
        .type(Cypress.env('CREDIT_CARD_NUMBER'));
    consumerLandingPageLocators.surveyOrderForm
        .expirationMonth()
        .type(Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'));
    consumerLandingPageLocators.surveyOrderForm
        .expirationYear()
        .type(Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'));
    consumerLandingPageLocators.surveyOrderForm
        .securityCode()
        .type(Cypress.env('CREDIT_CARD_CVV'));
    consumerLandingPageLocators.surveyOrderForm
        .postalCode()
        .type(shippingPostal);
    consumerLandingPageLocators.surveyOrderForm.nextStepThree().click();
    consumerLandingPageLocators.orderForm.submitOrder().click();
    cy.wait('@waitForPayment');

    return cy.logStep('Order Form details are populated');
};
