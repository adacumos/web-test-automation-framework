import { consumerLandingPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            fillInLeOrderFormInvalidCreditCard: (
                name: string,
                shippingPostalCode: string,
                cardNumber: string,
                expirationDate: string,
                cvv: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to fill out the order form in Vshred sales funnels with an invalid credit card.
 * @example
 * @param name the user name
 * @param shippingPostalCode the shipping postal code
 * @param cardNumber the test credit card number
 * @param expirationDate the expiration date for the card
 * @param cvv the CVV number
 * @example cy.fillInLeOrderFormInvalidCreditCard('John Doe', '78787', '4111222233334444', '12/26', '123')
 *
 */

export const fillInLeOrderFormInvalidCreditCard = (
    name: string,
    shippingPostalCode: string,
    cardNumber: string,
    expirationDate: string,
    cvv: string
): Cypress.Chainable<any> => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // Have to wait for modal to fully load before entering data
    cy.wrap(Math.floor(Math.random() * 89999 + 10000)).as('randomInt');
    /// CONTACT INFORMATION SECTION
    // Verify Order Form page
    cy.url().should('include', '/order-form/fat-loss-extreme/');
    consumerLandingPageLocators.orderForm
        .heading()
        .contains('What You Get Today')
        .should('be.visible');
    /// Type name for contact information
    consumerLandingPageLocators.orderForm.userName().type(name);
    /// Type email for contact information
    cy.get('@randomInt').then((rand) => {
        consumerLandingPageLocators.orderForm
            .userEmail()
            .type(`Tests+_WebAUTOMATION${rand}@vshred.com`);
    });

    /// Type phone number
    cy.get('#phone').type('1231234567');

    /// Click "Next Step" button
    consumerLandingPageLocators.orderForm.nextStepOne().click();

    /// PAYMENT INFORMATION SECTION
    consumerLandingPageLocators.orderForm.creditCardNumber().type(cardNumber);
    consumerLandingPageLocators.orderForm.expirationDate().type(expirationDate);
    consumerLandingPageLocators.orderForm.securityCode().type(cvv);
    consumerLandingPageLocators.orderForm.postalCode().type(shippingPostalCode); /// SPECIAL OFFER SECTION
    return consumerLandingPageLocators.orderForm.nextStepThree().click();
};
