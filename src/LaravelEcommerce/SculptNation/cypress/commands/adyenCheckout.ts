import { consumerLandingPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            adyenCheckout: (
                email: string,
                fullName: string,
                address: string,
                city: string,
                postalCode: string,
                phone: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** *
 * Command to fill out the Adyen checkout form
 * @example
 * @param email e-mail address
 * @param fullName first name
 * @param address shipping street address
 * @param city shipping city
 * @param postalCode shipping postal code
 * @param phone shipping phone number
 * @example cy.adyenCheckout('staticTestData.email,
            staticTestData.fullName,
            staticTestData.address,
            staticTestData.city,
            staticTestData.postalCode,
            staticTestData.phone')
 */

export const adyenCheckout = (): Cypress.Chainable<any> => {
    cy.logStep('Adyen checkout form');
    cy.intercept('POST', '/api/cart/pay').as('orderPlaced');
    cy.get('@staticTestData').then((staticTestData: any) => {
        consumerLandingPageLocators.adyenCheckout.contactInformation
            .firstName()
            .type(staticTestData.fullName);
        consumerLandingPageLocators.adyenCheckout.contactInformation
            .emailAddress()
            .type(staticTestData.email);
        consumerLandingPageLocators.adyenCheckout.contactInformation
            .phone()
            .type(staticTestData.phone);
        consumerLandingPageLocators.adyenCheckout.contactInformation
            .addressLine1()
            .type(staticTestData.address);
        consumerLandingPageLocators.adyenCheckout.contactInformation
            .city()
            .type(staticTestData.city);
        consumerLandingPageLocators.adyenCheckout.contactInformation
            .postalCode()
            .type(staticTestData.postalCode);
        consumerLandingPageLocators.adyenCheckout.contactInformation
            .state()
            .select(staticTestData.state);
        cy.get('.next').eq(0).click();

        cy.logStep('Fill in payment information');

        consumerLandingPageLocators.adyenCheckout.paymentInformation
            .creditCardNumber()
            .type(Cypress.env('CREDIT_CARD_NUMBER'));

        consumerLandingPageLocators.adyenCheckout.paymentInformation
            .expirationMonth()
            .type(Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'));

        consumerLandingPageLocators.adyenCheckout.paymentInformation
            .expirationYear()
            .type(Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'));

        consumerLandingPageLocators.adyenCheckout.paymentInformation
            .postalCode()
            .type(staticTestData.postalCode);

        consumerLandingPageLocators.adyenCheckout.paymentInformation
            .securtyCode()
            .type(Cypress.env('CREDIT_CARD_CVV'));

        consumerLandingPageLocators.adyenCheckout.paymentInformation
            .nextStep()
            .click();

        consumerLandingPageLocators.adyenCheckout.paymentInformation
            .payNowButton()
            .click();
    });
    return cy.wait('@orderPlaced');
};
