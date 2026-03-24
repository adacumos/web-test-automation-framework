import { consumerLandingPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            fillInLeOrderForm: (
                name: string,
                shippingName: string,
                shippingStreet: string,
                shippingCity: string,
                shippingState: string,
                shippingPostalCode: string,
                shippingCountry: string,
                shippingPhone: string,
                phoneNumber: string,
                cardNumber: string,
                expirationDate: string,
                cvv: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to fill out the order form in Vshred sales funnels.
 * @example
 * @param name the first name
 * @param shippingName the shipping name
 * @param shippingStreet the shipping street
 * @param shippingCity the shipping city
 * @param shippingState the shipping state
 * @param shippingPostalCode the shipping postal code
 * @param shippingCountry the country
 * @param shippingPhone the shipping phone number
 * @param phoneNumber the phone number
 * @param cardNumber the test credit card number
 * @param expirationDate the expiration date for the card
 * @param cvv the CVV number
 * @param postalCode the postal code
 * @example cy.fillInLeOrderForm('John', 'John Doe', '123 Disneyland Drive', 'Tampa Bay', 'Florida', 'United States', '123456789', '4111222233334444', '12/26', '123', '12345')
 *
 */
export const fillInLeOrderForm = (
    name: string,
    shippingName: string,
    shippingStreet: string,
    shippingCity: string,
    shippingState: string,
    shippingPostalCode: string,
    shippingCountry: string,
    shippingPhone: string,
    phoneNumber: string,
    cardNumber: string,
    expirationDate: string,
    cvv: string
): Cypress.Chainable<any> => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // Have to wait for modal to fully load before entering data
    cy.wrap(Math.floor(Math.random() * 89999 + 10000)).as('randomInt');
    /// CONTACT INFORMATION SECTION
    // Verify Order Form page
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
    /// Click "Next Step" button
    consumerLandingPageLocators.orderForm.nextStepOne().click();

    consumerLandingPageLocators.supplementOrderForm
        .shippingName()
        .type(shippingName);
    consumerLandingPageLocators.supplementOrderForm
        .shippingStreet()
        .type(shippingStreet);
    consumerLandingPageLocators.supplementOrderForm
        .shippingCity()
        .type(shippingCity);
    consumerLandingPageLocators.supplementOrderForm
        .shippingState()
        .select(shippingState);
    consumerLandingPageLocators.supplementOrderForm
        .shippingPostalCode()
        .type(shippingPostalCode);
    consumerLandingPageLocators.supplementOrderForm
        .shippingCountry()
        .select(shippingCountry);
    consumerLandingPageLocators.supplementOrderForm
        .shippingPhone()
        .type(shippingPhone);
    // /// Type phone number for contact information
    // consumerLandingPageLocators.orderForm.userPhone().type(phoneNumber);
    /// Click "Next Step" button 2
    consumerLandingPageLocators.orderForm.nextStepTwo().click();
    /// PAYMENT INFORMATION SECTION
    cy.logStep('Fill in payment information');
    consumerLandingPageLocators.orderForm.creditCardNumber().type(cardNumber);
    consumerLandingPageLocators.orderForm.expirationDate().type(expirationDate);
    consumerLandingPageLocators.orderForm.securityCode().type(cvv);
    consumerLandingPageLocators.orderForm.postalCode().type(shippingPostalCode); /// SPECIAL OFFER SECTION
    consumerLandingPageLocators.orderForm.nextStepThree().click();
    /// Click on the "Submit Order" button
    return consumerLandingPageLocators.orderForm.submitOrder().click();
};
