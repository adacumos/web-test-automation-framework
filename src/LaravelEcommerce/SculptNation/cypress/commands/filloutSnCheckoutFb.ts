import { consumerLandingPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutSnCheckoutFb: (
                userEmail: string,
                clientName: string,
                billingAddress: string,
                billingCity: string,
                billingPostCode: string,
                billingState: string,
                billingcountry: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** *
 * Command to fill-up the new LE funnels Order Form
 * @example
 * @param userEmail e-mail address
 * @param clientName name
 * @param billingAddress billing street address
 * @param billingCity billing city
 * @param billingPostCode billing postal code
 * @param billingState billing state
 * @param billingcountry billing country

 * @example cy.filloutSnCheckoutFb('test@example.com', 'test123', 'John', 'Doe', 'Test Address', 'Boston', '01434', '712-1231234')
 */

export const filloutSnCheckoutFb = (
    userEmail: string,
    clientName: string,
    billingAddress: string,
    billingCity: string,
    billingPostCode: string,
    billingState: string,
    billingcountry: string
): Cypress.Chainable<any> => {
    cy.intercept('GET', '/api/location-check/**').as('getState');
    cy.intercept('POST', '/api/cart/shipping-categories/*').as('postShipping');
    cy.intercept('POST', '/api/cart/pay').as('orderPlaced');

    cy.logStep('Fill out contact and billing information');
    consumerLandingPageLocators.fastCheckoutV2.contactInformation
        .clientName()
        .type(clientName);
    consumerLandingPageLocators.fastCheckoutV2.contactInformation
        .emailAddress()
        .type(userEmail);
    consumerLandingPageLocators.fastCheckoutV2.contactInformation
        .addressLine1()
        .type(billingAddress);
    consumerLandingPageLocators.fastCheckoutV2.contactInformation
        .country()
        .select(billingcountry);
    consumerLandingPageLocators.fastCheckoutV2.contactInformation
        .city()
        .type(billingCity);
    consumerLandingPageLocators.fastCheckoutV2.contactInformation
        .state()
        .select(billingState);
    consumerLandingPageLocators.fastCheckoutV2.contactInformation
        .postal()
        .type(billingPostCode);
    consumerLandingPageLocators.fastCheckoutV2.nextStep1Btn().click();

    cy.logStep('Fill in payment information');
    consumerLandingPageLocators.fastCheckoutV2.paymentInformation
        .creditCardNumber()
        .type(Cypress.env('CREDIT_CARD_NUMBER'));
    consumerLandingPageLocators.fastCheckoutV2.paymentInformation
        .expirationMonth()
        .type(Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'));
    consumerLandingPageLocators.fastCheckoutV2.paymentInformation
        .expirationYear()
        .type(Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'));
    consumerLandingPageLocators.fastCheckoutV2.paymentInformation
        .securityCode()
        .type(Cypress.env('CREDIT_CARD_CVV'));
    consumerLandingPageLocators.fastCheckoutV2.paymentInformation
        .postalCode()
        .type(billingPostCode);
    consumerLandingPageLocators.fastCheckoutV2.secondNextBtn().click();

    cy.logStep('Submit Order');
    consumerLandingPageLocators.fastCheckoutV2.submitOrderBtnCC().click();

    return cy.wait('@orderPlaced');
};
