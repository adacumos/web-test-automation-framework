import { consumerLandingPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutCheckoutV3: (
                userEmail: string,
                userPassword: string,
                firstName: string,
                lastName: string,
                billingAddress: string,
                billingCity: string,
                billingPostCode: string,
                billingPhone: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** *
 * Command to fill-up the new LE funnels Order Form
 * @example
 * @param userEmail e-mail address
 * @param userPassword password
 * @param firstName first name
 * @param lastName last name
 * @param billingAddress billing street address
 * @param billingCity billing city
 * @param billingPostCode billing postal code
 * @param billingPhone billing phone number
 * @example cy.filloutCheckoutV3('test@example.com', 'test123', 'John', 'Doe', 'Test Address', 'Boston', '01434', '712-1231234')
 */

export const filloutCheckoutV3 = (
    userEmail: string,
    userPassword: string,
    firstName: string,
    lastName: string,
    billingAddress: string,
    billingCity: string,
    billingPostCode: string,
    billingPhone: string
): Cypress.Chainable<any> => {
    cy.intercept('GET', '/api/location-check/**').as('getState');
    cy.intercept(
        'POST',
        'https://origin-analytics-sand.sandbox.braintree-api.com/*'
    ).as('postBTAnalytics');
    cy.intercept('POST', '/api/cart/pay').as('orderPlaced');

    cy.logStep('Fill in contact and billing information');

    consumerLandingPageLocators.checkoutV3.contactInformation
        .emailAddress()
        .type(userEmail);

    consumerLandingPageLocators.checkoutV3.contactInformation
        .password()
        .type(userPassword, { log: false });

    consumerLandingPageLocators.checkoutV3.billingInformation
        .firstName()
        .type(firstName);

    consumerLandingPageLocators.checkoutV3.billingInformation
        .lastName()
        .type(lastName);

    consumerLandingPageLocators.checkoutV3.billingInformation
        .addressOne()
        .type(billingAddress);

    consumerLandingPageLocators.checkoutV3.billingInformation
        .city()
        .type(billingCity);

    consumerLandingPageLocators.checkoutV3.billingInformation
        .postCode()
        .type(billingPostCode);

    consumerLandingPageLocators.checkoutV3.billingInformation
        .phone()
        .type(billingPhone);

    cy.wait('@getState');

    cy.logStep('Fill in payment information');
    cy.wait('@postBTAnalytics').then(() => {
        consumerLandingPageLocators.checkoutV3.paymentInformation
            .creditCardNumber()
            .type(Cypress.env('CREDIT_CARD_NUMBER'));

        consumerLandingPageLocators.checkoutV3.paymentInformation
            .cardHolderName()
            .type(`${firstName} ${lastName}`);

        consumerLandingPageLocators.checkoutV3.paymentInformation
            .expirationDate()
            .type(
                Cypress.env('CREDIT_CARD_EXPIRATION_MONTH') +
                    Cypress.env('CREDIT_CARD_EXPIRATION_YEAR')
                        .toString()
                        .substr(-2)
            );

        consumerLandingPageLocators.checkoutV3.paymentInformation
            .securtyCode()
            .type(Cypress.env('CREDIT_CARD_CVV'));

        consumerLandingPageLocators.checkoutV3.payNowButton().click();
    });
    return cy.wait('@orderPlaced');
};
