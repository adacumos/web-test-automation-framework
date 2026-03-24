/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { consumerLandingPageLocators } from '../support/locator_libraries';

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
    return consumerLandingPageLocators.supplementOrderForm
        .saveAddress()
        .click();
};
