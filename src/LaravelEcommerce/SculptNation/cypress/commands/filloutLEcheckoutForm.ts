import { consumerLandingPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutLEcheckoutForm: (
                userEmail: string,
                userPassword: string,
                firstName: string,
                lastName: string,
                shippingAddress: string,
                shippingCity: string,
                shippingPostCode: string,
                shippingPhone: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** *
 * Command to fill out the LE Checkout Order Form V4
 * @example
 * @param userEmail e-mail address
 * @param userPassword password
 * @param firstName first name
 * @param lastName last name
 * @param shippingAddress shipping street address
 * @param shippingCity shipping city
 * @param shippingPostCode shipping postal code
 * @param shippinhPhone shipping phone number
 * @example cy.filloutLEcheckoutForm('/checkout-v3', 'test@example.com', 'test123', 'John', 'Doe', 'Test Address', 'Boston', '01434', '712-1231234')
 */

export const filloutLEcheckoutForm = (
    userEmail: string,
    userPassword: string,
    firstName: string,
    lastName: string,
    shippingAddress: string,
    shippingCity: string,
    shippingPostCode: string,
    shippingPhone: string
): Cypress.Chainable<any> => {
    cy.logStep('Navigate to checkout form');

    cy.url().should('include', '/checkout-v4');

    cy.intercept('GET', '/api/location-check/**').as('getState');
    cy.intercept('POST', '/api/cart/shipping-categories/*').as('postShipping');
    // cy.intercept(
    //     'POST',
    //     'https://origin-analytics-sand.sandbox.braintree-api.com/*'
    // ).as('postBTAnalytics');
    cy.intercept('POST', '/api/cart/pay').as('orderPlaced');

    cy.logStep('Fill out contact and billing information');

    consumerLandingPageLocators.checkoutFormV4.contactInformation
        .emailAddress()
        .type(userEmail);

    // consumerLandingPageLocators.checkoutFormV4.contactInformation
    //     .password()
    //     .type(userPassword, { log: false });

    consumerLandingPageLocators.checkoutFormV4.shippingInformation
        .firstName()
        .type(firstName);

    consumerLandingPageLocators.checkoutFormV4.shippingInformation
        .lastName()
        .type(lastName);

    consumerLandingPageLocators.checkoutFormV4.shippingInformation
        .addressLine1()
        .type(shippingAddress);

    consumerLandingPageLocators.checkoutFormV4.shippingInformation
        .city()
        .type(shippingCity);
    consumerLandingPageLocators.checkoutFormV4.shippingInformation
        .zipcode()
        .type(shippingPostCode);
    consumerLandingPageLocators.checkoutFormV4.shippingInformation
        .phone()
        .type(shippingPhone);

    cy.wait('@getState');

    cy.logStep('Fill in payment information');
    // cy.wait('@postBTAnalytics').then(() => {
    consumerLandingPageLocators.checkoutFormV4.paymentInformation
        .creditCardNumber()
        .type(Cypress.env('CREDIT_CARD_NUMBER'));

    consumerLandingPageLocators.checkoutFormV4.paymentInformation
        .cardHolderName()
        .type(`${firstName} ${lastName}`);

    consumerLandingPageLocators.checkoutFormV4.paymentInformation
        .expirationDate()
        .type(
            Cypress.env('CREDIT_CARD_EXPIRATION_MONTH') +
                Cypress.env('CREDIT_CARD_EXPIRATION_YEAR').toString().substr(-2)
        );

    consumerLandingPageLocators.checkoutFormV4.paymentInformation
        .securtyCode()
        .type(Cypress.env('CREDIT_CARD_CVV'));

    consumerLandingPageLocators.checkoutFormV4.paymentInformation
        .payNowButton()
        .click();
    // });
    return cy.wait('@orderPlaced');
};
