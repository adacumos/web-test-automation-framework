/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import surveyLocators from '../../LE_Vshred/cypress/support/locator_libraries/surveyLocators';

declare global {
    namespace Cypress {
        interface Chainable {
            fillInSupplementOrderFormSurvey: (
                shippingFirstName: string,
                shippingLastName: string,
                shippingStreet: string,
                shippingCity: string,
                shippingState: string,
                shippingPostalCode: string
                // shippingPhone: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to fill out the order form in Vshred sales funnels.
 * @example
 * @param shippingFirstName the Name to ship to
 * * @param shippingLastName the Name to ship to
 * @param shippingStreet the shipping street
 * @param shippingCity the shipping city
 * @param shippingState the shipping city
 * @param shippingPostalCode the shipping postal code
 * @example cy.supplementOrderForm('John Doe', '1217 W Hammer Ln', 'North Las Vegas', 'North Las Vegas', '89123', '8153211010')
 *
 */
export const fillInSupplementOrderFormSurvey = (
    shippingFirstName: string,
    shippingLastName: string,
    shippingStreet: string,
    shippingCity: string,
    shippingState: string,
    shippingPostalCode: string
): Cypress.Chainable<any> => {
    surveyLocators.shippingFirstNameTextBox().type(shippingFirstName);
    surveyLocators.shippingLastNameTextBox().type(shippingLastName);
    surveyLocators.ShippingStreetAddressTextBox().type(shippingStreet);
    surveyLocators.shippingcityTextBox().type(shippingCity);
    surveyLocators.shippingStateTextBox().select('Nevada');
    surveyLocators.shippingZipTextBox().type(shippingPostalCode);

    return surveyLocators.shippingSaveAddressButton().click();
};
