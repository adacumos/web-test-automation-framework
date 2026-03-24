import { consumerLandingPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutVsEcomCheckout: (
                userEmail: string,
                firstName: string,
                lastName: string,
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
 * Command used to fill out the order form in Vshred-ecom UCP Checkout form.
 * @example
 * @param userEmail client email
 * @param firstName client first name
 * @param lastName client last name
 * @param address shipping address
 * @param city shipping city
 * @param state shipping state
 * @param postalCode shipping postal code
 * @example cy.filloutVsEcomCheckout('John', 'Doe', 'johndoe@mail.com','4530 South Decatur Boulevard', 'Las Vegas', 'Nevada', '89103')
 */
export const filloutVsEcomCheckout = (
    userEmail: string,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    postalCode: string,
    phoneNumber: string
): Cypress.Chainable<any> => {
    cy.intercept('GET', '/api/location-check/**').as('getState');
    cy.intercept('POST', '/api/cart/shipping-categories/*').as('postShipping');
    cy.intercept('POST', '/api/cart/pay').as('orderPlaced');

    cy.logStep('Fillout Contact Information');
    consumerLandingPageLocators.checkoutFormV4.contactInformation
        .emailAddress()
        .type(userEmail);
    cy.logStep('Fill out Billing Information');
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
                Cypress.env('CREDIT_CARD_EXPIRATION_YEAR').toString().substr(-2)
        );
    consumerLandingPageLocators.checkoutV3.paymentInformation
        .securtyCode()
        .type(Cypress.env('CREDIT_CARD_CVV'));

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // Or use a more robust wait

    return cy.logStep('Order Form details are populated');
};
