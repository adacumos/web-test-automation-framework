import { consumerLandingPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutSecureCheckoutForm: (
                userEmail: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** *
 * Command to fill out the LE Secure Checkout Form
 * @example
 * @param userEmail e-mail address
 * @example cy.filloutSecureCheckoutForm('test@example.com')
 */

export const filloutSecureCheckoutForm = (
    userEmail: string
): Cypress.Chainable<any> => {
    cy.logStep('Fillout SN Secure Checkout form');
    cy.get('@staticTestData').then((staticTestData: any) => {
        const {
            clientName,
            streetAddress,
            city,
            state,
            country,
            postcode,
            shippingOption,
        } = staticTestData;

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
            .type(streetAddress);
        consumerLandingPageLocators.fastCheckoutV2.contactInformation
            .country()
            .select(country);
        consumerLandingPageLocators.fastCheckoutV2.contactInformation
            .city()
            .type(city);
        consumerLandingPageLocators.fastCheckoutV2.contactInformation
            .state()
            .select(state);
        consumerLandingPageLocators.fastCheckoutV2.contactInformation
            .postal()
            .type(postcode);

        consumerLandingPageLocators.fastCheckoutV2.nextStep1Btn().click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000);

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
            .type(postcode);
        consumerLandingPageLocators.fastCheckoutV2.paymentNextBtn().click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000);

        cy.logStep('Select Shipping Method');
        if (shippingOption === 'FREE Shipping Special!') {
            consumerLandingPageLocators.fastCheckoutV2.shippingMethod
                .freeShippingSpecial()
                .click();
        } else {
            consumerLandingPageLocators.fastCheckoutV2.shippingMethod
                .priorityFlatRate()
                .click();
        }
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(4000);
        cy.logStep('Submit Order');
        consumerLandingPageLocators.fastCheckoutV2.submitOrderBtnCC().click();
    });
    return cy.wait('@orderPlaced');
};
