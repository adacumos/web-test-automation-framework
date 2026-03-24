import { consumerLandingPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutSNSecureCheckoutForm: (
                userEmail: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** *
 * Command to fill out the LE Checkout Order Form V4
 * @example
 * @param userEmail e-mail address
 * @example cy.filloutFastCheckoutForm('test@example.com')
 */

export const filloutSNSecureCheckoutForm = (
    userEmail: string
): Cypress.Chainable<any> => cy.logStep('Fillout SN Secure Checkout form')
    .get('@staticTestData')
    .then((staticTestData: any) => {
        const {
            clientName,
            streetAddress,
            city,
            state,
            country,
            postcode,
        } = staticTestData;

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

        consumerLandingPageLocators.secureCheckoutV2
            .nextStep1Btn()
            .click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(3000);

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
        consumerLandingPageLocators.fastCheckoutV2
            .paymentNextBtn()
            .click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.logStep('Submit Order');
        consumerLandingPageLocators.fastCheckoutV2
            .submitOrderBtnCC()
            .click();
    });
