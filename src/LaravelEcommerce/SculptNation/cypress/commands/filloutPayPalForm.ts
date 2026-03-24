import { consumerLandingPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutPayPalForm: (
                userEmail: string,
                billingFirstName: string,
                billingLastName: string,
                billingAddress: string,
                billingCity: string,
                billingZipCode: string,
                billingCountry: string,
                billingPhone: string,
                shippingFirstName?: string,
                shippingLastName?: string,
                shippingAddress?: string,
                shippingCity?: string,
                shippingZipCode?: string,
                shippingCountry?: string,
                shippingPhone?: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** *
 * Command to fill out the LE Checkout Order Form V4
 * @example
 * @param userEmail e-mail address
 * @param billingFirstName billing first name
 * @param billingLastName billing last name
 * @param billingAddress billing address
 * @param billingCity billing city
 * @param billingZipCode billing postal code
 * @param billingCountry billing country
 * @param billingPhone billing phone
 * @param shippingFirstName shipping first name
 * @param shippingLastName shipping last name
 * @param shippingAddress shipping address
 * @param shippingCity shipping city
 * @param shippingZipCode shipping postal code
 * @param shippingCountry shipping country
 * @param shippingPhone shipping phone
 * @example cy.filloutPayPalForm('test@example.com', 'John', 'Doe', 'Test Address', 'Boston', '01434', '712-1231234')
 */

export const filloutPayPalForm = (
    userEmail: string,
    billingFirstName: string,
    billingLastName: string,
    billingAddress: string,
    billingCity: string,
    billingZipCode: string,
    billingCountry: string,
    billingPhone: string,
    shippingFirstName?: string,
    shippingLastName?: string,
    shippingAddress?: string,
    shippingCity?: string,
    shippingZipCode?: string,
    shippingCountry?: string,
    shippingPhone?: string
): Cypress.Chainable<any> => {
    cy.intercept('POST', '/api/cart/pay').as('orderPlaced');

    cy.logStep('Fill out contact and billing information');

    consumerLandingPageLocators.checkoutPayPal.billingInformation
        .billingAddressForm()
        .within(() => {
            consumerLandingPageLocators.checkoutPayPal.billingInformation
                .firstName()
                .type(billingFirstName);
            consumerLandingPageLocators.checkoutPayPal.billingInformation
                .lastName()
                .type(billingLastName);
            consumerLandingPageLocators.checkoutPayPal.billingInformation
                .emailAddress()
                .type(userEmail);
            consumerLandingPageLocators.checkoutPayPal.billingInformation
                .address()
                .type(billingAddress);
            consumerLandingPageLocators.checkoutPayPal.billingInformation
                .city()
                .type(billingCity);
            consumerLandingPageLocators.checkoutPayPal.billingInformation
                .zipCode()
                .type(billingZipCode);
            consumerLandingPageLocators.checkoutPayPal.billingInformation
                .phone()
                .click();
            if (billingCountry === 'USA') {
                consumerLandingPageLocators.checkoutPayPal.billingInformation
                    .country()
                    .select(0)
                    .should('have.value', 'USA');
            } else {
                consumerLandingPageLocators.checkoutPayPal.billingInformation
                    .country()
                    .select(1)
                    .should('have.value', 'CAN');

                if (
                    consumerLandingPageLocators.checkoutPayPal
                        .blackListContent()
                        .should('satisfy', Cypress.dom.isVisible)
                )
                    /* eslint consistent-return: off */
                    cy.logStep(
                        'Burn Evolved order cannot be submitted for Canada country!'
                    );
            }
            consumerLandingPageLocators.checkoutPayPal.billingInformation
                .phone()
                .type(billingPhone);
        });

    if (typeof shippingFirstName !== 'undefined') {
        consumerLandingPageLocators.checkoutPayPal.shippingInformation
            .shippingCheckBox()
            .click();
        consumerLandingPageLocators.checkoutPayPal.shippingInformation
            .shippingAddressForm()
            .within(() => {
                consumerLandingPageLocators.checkoutPayPal.shippingInformation
                    .firstName()
                    .type(shippingFirstName);
                if (typeof shippingLastName !== 'undefined')
                    consumerLandingPageLocators.checkoutPayPal.shippingInformation
                        .lastName()
                        .type(shippingLastName);
                if (typeof shippingAddress !== 'undefined')
                    consumerLandingPageLocators.checkoutPayPal.shippingInformation
                        .address()
                        .type(shippingAddress);
                if (typeof shippingCity !== 'undefined')
                    consumerLandingPageLocators.checkoutPayPal.shippingInformation
                        .city()
                        .type(shippingCity);

                if (typeof shippingZipCode !== 'undefined')
                    consumerLandingPageLocators.checkoutPayPal.shippingInformation
                        .zipCode()
                        .type(shippingZipCode);
                consumerLandingPageLocators.checkoutPayPal.shippingInformation
                    .phone()
                    .click();
                if (typeof shippingCountry !== 'undefined') {
                    if (shippingCountry === 'USA') {
                        consumerLandingPageLocators.checkoutPayPal.shippingInformation
                            .country()
                            .select(1)
                            .should('have.value', 'USA');
                    } else {
                        consumerLandingPageLocators.checkoutPayPal.shippingInformation
                            .country()
                            .select(0)
                            .should('have.value', 'CAN');
                    }
                }
                if (typeof shippingPhone !== 'undefined')
                    consumerLandingPageLocators.checkoutPayPal.shippingInformation
                        .phone()
                        .type(shippingPhone);
            });
    }

    // Fill out credit card details
    consumerLandingPageLocators.checkoutPayPal.paymentInformation
        .creditCardNumber()
        .type(Cypress.env('CREDIT_CARD_NUMBER'));
    consumerLandingPageLocators.checkoutPayPal.paymentInformation
        .creditCardName()
        .type(`${billingFirstName} ${billingLastName}`);
    consumerLandingPageLocators.checkoutPayPal.paymentInformation
        .creditCardExpiration()
        .type(
            Cypress.env('CREDIT_CARD_EXPIRATION_MONTH') +
                Cypress.env('CREDIT_CARD_EXPIRATION_YEAR').toString().substr(-2)
        );
    consumerLandingPageLocators.checkoutPayPal.paymentInformation
        .creditCardCVV()
        .type(Cypress.env('CREDIT_CARD_CVV'));

    // Verify that PayPal payment option exists
    consumerLandingPageLocators.checkoutPayPal
        .payPalPaymentOption()
        .should('be.visible');

    consumerLandingPageLocators.checkoutPayPal.payNow().click();
    return cy.wait('@orderPlaced');
};
