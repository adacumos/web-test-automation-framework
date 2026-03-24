/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { homePageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            fillInSupplementOrderForm: (
                shippingName: string,
                shippingStreet: string,
                shippingCity: string,
                shippingState: string,
                shippingPostalCode: string,
                shippingCountry: string,
                shippingPhone: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to fill out the order form in Vshred sales funnels.
 * @example
 * @param shippingName the Name to ship to
 * @param shippingStreet the shipping street
 * @param shippingCity the shipping city
 * @param shippingState the shipping city
 * @param shippingPostalCode the shipping postal code
 * @param shippingCountry the shipping country
 * @param shippingPhone the phone number
 * @example cy.supplementOrderForm('John Doe', '1217 W Hammer Ln', 'North Las Vegas', 'North Las Vegas', '89123', '8153211010')
 * cy.fillInSupplementOrderForm()
 *
 */
export const fillInSupplementOrderForm = (
    shippingName: string,
    shippingStreet: string,
    shippingCity: string,
    shippingState: string,
    shippingPostalCode: string,
    shippingCountry: string,
    shippingPhone: string
): Cypress.Chainable<any> => {
    homePageLocators.supplementOrderForm.shippingName().type(shippingName);
    homePageLocators.supplementOrderForm.shippingStreet().type(shippingStreet);
    homePageLocators.supplementOrderForm.shippingCity().type(shippingCity);
    homePageLocators.supplementOrderForm.shippingState().select(shippingState);
    homePageLocators.supplementOrderForm
        .shippingPostalCode()
        .type(shippingPostalCode);
    homePageLocators.supplementOrderForm
        .shippingCountry()
        .select(shippingCountry);
    homePageLocators.supplementOrderForm.shippingPhone().type(shippingPhone);
    return homePageLocators.supplementOrderForm.saveAddress().click();
};
