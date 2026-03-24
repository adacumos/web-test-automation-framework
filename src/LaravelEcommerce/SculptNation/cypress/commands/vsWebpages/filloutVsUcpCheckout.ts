import { consumerLandingPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutVsUcpCheckout: (
                firstName: string,
                lastName: string,
                userEmail: string,
                address: string,
                city: string,
                state: string,
                postalCode: string,
                phoneNumber: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to fill out the order form in Vshred-Order UCP Checkout form.
 * @example
 * @param firstName client first name
 * @param lastName client last name
 * @param userEmail client email address
 * @param address shipping address
 * @param city shipping city
 * @param state shipping state
 * @param postalCode shipping postal code
 * @example cy.filloutVsUcpCheckout('John', 'Doe', 'johndoe@mail.com','4530 South Decatur Boulevard', 'Las Vegas', 'Nevada', '89103')
 */
export const filloutVsUcpCheckout = (
    firstName: string,
    lastName: string,
    userEmail: string,
    address: string,
    city: string,
    state: string,
    postalCode: string,
    phoneNumber: string
): Cypress.Chainable<any> => {
    cy.intercept('GET', '/api/location-check/**').as('getState');
    cy.intercept('POST', '/api/cart/shipping-categories/*').as('postShipping');
    cy.intercept('POST', '/api/cart/pay').as('orderPlaced');

    cy.get('div.checkout')
        .should('be.visible')
        .then(($body) => {
            consumerLandingPageLocators.checkoutFormV4.contactInformation
                .emailAddress()
                .type(userEmail);
            if ($body.text().includes('Contact Information')) {
                // with password input field
                cy.logStep('Fill out Contact Information');
                consumerLandingPageLocators.checkoutFormV4.contactInformation
                    .password()
                    .type('asdfasdf');
            }
            cy.logStep('Fill out Billing information');
            consumerLandingPageLocators.checkoutFormV4.shippingInformation
                .firstName()
                .type(firstName);
            consumerLandingPageLocators.checkoutFormV4.shippingInformation
                .lastName()
                .type(lastName);
            consumerLandingPageLocators.checkoutFormV4.shippingInformation
                .addressLine1()
                .type(address);
            consumerLandingPageLocators.checkoutFormV4.shippingInformation
                .city()
                .type(city);
            consumerLandingPageLocators.checkoutFormV4.shippingInformation
                .state()
                .select(state);
            consumerLandingPageLocators.checkoutFormV4.shippingInformation
                .postalCode()
                .type(postalCode);
            consumerLandingPageLocators.checkoutFormV4.shippingInformation
                .phone()
                .type(phoneNumber);

            cy.logStep('Fill in payment information');
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
        });

    return cy.logStep('Order Form details are populated');
};
