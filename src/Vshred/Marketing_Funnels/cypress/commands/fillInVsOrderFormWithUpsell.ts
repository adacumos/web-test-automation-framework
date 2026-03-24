import { homePageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            fillInVsOrderFormWithUpsell: (
                name: string,
                userEmail: string,
                phoneNumber: string,
                cardNumber: string,
                expirationDate: string,
                cvv: string,
                postalCode: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to fill out the order form in Vshred sales funnels.
 * @example
 * @param name the first name
 * @param userEmail the email
 * @param phoneNumber the phone number
 * @param cardNumber the test credit card number
 * @param expirationData the expiration date for the card
 * @param cvv the CVV number
 * @param postalCode the postal code
 * @example cy.fillInVsOrderFormWithUpsell('John Doe', 'mkt-8687e0+robot+75748@vshred.com', '123456789', '4111222233334444', '12/26', '123', '12345')
 *
 */
export const fillInVsOrderFormWithUpsell = (
    name: string,
    userEmail: string,
    phoneNumber: string,
    cardNumber: string,
    expirationDate: string,
    cvv: string,
    postalCode: string
): Cypress.Chainable<any> => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // Have to wait for modal to fully load before entering data

    /// CONTACT INFORMATION SECTION
    // Verify Order Form page
    homePageLocators.orderForm
        .heading()
        .contains('What You Get Today')
        .should('be.visible');
    /// Type name for contact information
    homePageLocators.orderForm.userName().type(name);
    /// Type email for contact information
    homePageLocators.orderForm.userEmail().type(userEmail);
    /// Type phone number for contact information
    homePageLocators.orderForm.userPhone().type(phoneNumber);
    /// Click "Next Step" button
    homePageLocators.orderForm.nextStepOne().click();
    /// PAYMENT INFORMATION SECTION
    cy.logStep('Fill in payment information');
    homePageLocators.orderForm.creditCardNumber().type(cardNumber);
    homePageLocators.orderForm.expirationDate().type(expirationDate);
    homePageLocators.orderForm.securityCode().type(cvv);
    homePageLocators.orderForm.postalCode().type(postalCode); /// SPECIAL OFFER SECTION
    /// Click "Next Step" button 2
    homePageLocators.orderForm.nextStepTwo().click();
    /// Click on the "CDP Upsell Checkbox" button
    homePageLocators.orderForm.cdpUpsell().click();
    /// Click on the "Submit Order" button
    return homePageLocators.orderForm.submitOrder().click();
};
