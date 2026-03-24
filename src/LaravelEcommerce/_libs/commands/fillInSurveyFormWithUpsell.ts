import surveyLocators from '../../LE_Vshred/cypress/support/locator_libraries/surveyLocators';

declare global {
    namespace Cypress {
        interface Chainable {
            fillInSurveyFormWithUpsell: (
                name: string,
                userEmail: string,
                phoneNumber: string,
                cardNumber: string,
                expirationMonth: string,
                expirationYear: string,
                cvv: string,
                postalCode: string,
                upsellType?: string
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
 * @param expirationMonth the expiration date for the card
 * * @param expirationYear the expiration date for the card
 * @param cvv the CVV number
 * @param postalCode the postal code
 * @example cy.fillInSurveyFormWithUpsell('John Doe', 'mkt-8687e0+robot+75748@vshred.com', '123456789', '4111222233334444', '12/26', '123', '12345')
 *
 */
export const fillInSurveyFormWithUpsell = (
    name: string,
    userEmail: string,
    phoneNumber: string,
    cardNumber: string,
    expirationMonth: string,
    expirationYear: string,
    cvv: string,
    postalCode: string,
    upsellType: string
): Cypress.Chainable<any> => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // Have to wait for modal to fully load before entering data

    /// CONTACT INFORMATION SECTION
    // Verify Order Form page
    surveyLocators.orderForm
        .heading()
        .contains('What You Get Today')
        .should('be.visible');
    /// Type name for contact information
    surveyLocators.orderForm.userName().type(name);
    /// Type email for contact information
    surveyLocators.orderForm.userEmail().type(userEmail);
    /// Type phone number for contact information
    surveyLocators.orderForm.userPhone().type(phoneNumber);
    /// Click "Next Step" button
    surveyLocators.orderForm.nextStepOne().click();
    /// PAYMENT INFORMATION SECTION
    cy.logStep('Fill in payment information');
    surveyLocators.orderForm.creditCardNumber().type(cardNumber);
    surveyLocators.orderForm.expirationMonth().type(expirationMonth);
    surveyLocators.orderForm.expirationYear().type(expirationYear);
    surveyLocators.orderForm.securityCode().type(cvv);
    surveyLocators.orderForm.postalCode().type(postalCode); /// SPECIAL OFFER SECTION

    /// Click "Next Step" button 2
    surveyLocators.orderForm.nextStepTwo().click();

    if (upsellType !== 'cdpupsell') {
        /// Click on the "CDP Upsell Checkbox" button
        surveyLocators.orderForm.cdpUpsell().click();
    }

    /// Click on the "Submit Order" button
    return surveyLocators.orderForm.submitOrder().click();
};
