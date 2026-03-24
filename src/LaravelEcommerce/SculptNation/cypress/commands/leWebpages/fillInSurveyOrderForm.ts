import { consumerLandingPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            fillInSurveyOrderForm: (
                name: string,
                email: string,
                phone: string,
                postalCode: number
            ) => Cypress.Chainable<any>;
        }
    }
}

export const fillInSurveyOrderForm = (
    name: string,
    email: string,
    phone: string,
    postalCode: string
): Cypress.Chainable<any> => {
    cy.intercept('POST', 'https://payments.sandbox.braintree-api.com/*').as(
        'waitForPayment'
    );
    cy.intercept('POST', '/api/cart/offer').as('waitForOffer');
    cy.logStep('Fill-up the order form');
    consumerLandingPageLocators.surveyOrderForm.name().type(name);
    consumerLandingPageLocators.surveyOrderForm.email().type(email);
    consumerLandingPageLocators.surveyOrderForm.phone().type(phone);
    cy.logStep('Click the Next Step button');
    consumerLandingPageLocators.surveyOrderForm.nextStepOne().click();
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
    consumerLandingPageLocators.surveyOrderForm.postalCode().type(postalCode); /// SPECIAL OFFER SECTION
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // Or use a more robust wait
    cy.logStep('Click the Next Step button');
    consumerLandingPageLocators.surveyOrderForm.nextStepTwo().click();
    cy.wait('@waitForPayment');

    return cy.logStep('Order Form details are populated');
};
