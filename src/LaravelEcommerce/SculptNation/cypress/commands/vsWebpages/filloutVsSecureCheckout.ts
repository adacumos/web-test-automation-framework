import { consumerLandingPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutVsSecureCheckout: (
                clientEmail: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** *
 * Command to fill out the VS Order Form
 * @example
 * @param clientEmail client user's email
 * @example cy.filloutVsSecureCheckout('janed.test@example.com')
 */

export const filloutVsSecureCheckout = (
    clientEmail: string
): Cypress.Chainable<any> => {
    cy.logStep('Fillout LE-VS Secure Checkout form');
    cy.get('@staticTestData').then((staticTestData: any) => {
        const {
            clientName,
            phone,
            address,
            city,
            state,
            country,
            postalCode,
            productName,
            productPrice,
        } = staticTestData;

        cy.intercept('GET', '/api/location-check/**').as('getState');
        cy.intercept('POST', '/api/cart/pay').as('orderPlaced');
        cy.intercept('POST', '**/vsu/subscribe/**').as('braintreeCall');

        cy.logStep('Fill out contact and billing information');
        consumerLandingPageLocators.secureCheckoutV2.contactInformation
            .clientName()
            .type(clientName);
        consumerLandingPageLocators.secureCheckoutV2.contactInformation
            .emailAddress()
            .type(clientEmail);
        consumerLandingPageLocators.secureCheckoutV2.contactInformation
            .phone()
            .type(phone);
        consumerLandingPageLocators.secureCheckoutV2.contactInformation
            .addressLine1()
            .type(address);
        consumerLandingPageLocators.secureCheckoutV2.contactInformation
            .country()
            .select(country);
        consumerLandingPageLocators.secureCheckoutV2.contactInformation
            .city()
            .type(city);
        consumerLandingPageLocators.secureCheckoutV2.contactInformation
            .state()
            .select(state);
        consumerLandingPageLocators.secureCheckoutV2.contactInformation
            .postal()
            .type(postalCode);

        consumerLandingPageLocators.secureCheckoutV2.nextStep1Btn().click();

        cy.logStep('Fill in payment information');
        consumerLandingPageLocators.secureCheckoutV2.paymentInformation
            .creditCardNumber()
            .type(Cypress.env('CREDIT_CARD_NUMBER'));
        consumerLandingPageLocators.secureCheckoutV2.paymentInformation
            .expirationMonth()
            .type(Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'));
        consumerLandingPageLocators.secureCheckoutV2.paymentInformation
            .expirationYear()
            .type(Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'));
        consumerLandingPageLocators.secureCheckoutV2.paymentInformation
            .securityCode()
            .type(Cypress.env('CREDIT_CARD_CVV'));
        consumerLandingPageLocators.secureCheckoutV2.paymentInformation
            .postalCode()
            .type(postalCode);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000);
        consumerLandingPageLocators.secureCheckoutV2.paymentNextBtn().click();

        cy.logStep('Verify Order Summary');
        consumerLandingPageLocators.secureCheckoutV2.orderSummary
            .orderItem()
            .contains(productName)
            .should('be.visible')
            .parent()
            .within(() => {
                consumerLandingPageLocators.secureCheckoutV2.orderSummary
                    .orderItemPrice()
                    .contains(productPrice);
            });
        cy.logStep('Submit Order');
        consumerLandingPageLocators.secureCheckoutV2.submitOrderBtn().click();
    });
    return cy.wait('@orderPlaced');
};
