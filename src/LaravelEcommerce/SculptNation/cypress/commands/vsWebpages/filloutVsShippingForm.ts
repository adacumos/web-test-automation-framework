import { consumerLandingPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutVsShippingForm: () => void;
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
 * @example cy.supplementOrderForm('John Doe', '1217 W Hammer Ln', 'North Las Vegas', 'North Las Vegas', '89123', '8153211010')
 *
 */
export const filloutVsShippingForm = (): void => {
    cy.logStep('Fillout VS Shipment Form');
    cy.get('@staticTestData').then((staticTestData: any) => {
        consumerLandingPageLocators.supplementOrderForm
            .shippingName()
            .clear()
            .type(staticTestData.clientName);
        consumerLandingPageLocators.supplementOrderForm
            .shippingStreet()
            .clear()
            .type(staticTestData.address);
        consumerLandingPageLocators.supplementOrderForm
            .shippingCity()
            .clear()
            .type(staticTestData.city);
        consumerLandingPageLocators.supplementOrderForm
            .shippingState()
            .select(staticTestData.state);
        consumerLandingPageLocators.supplementOrderForm
            .shippingPostalCode()
            .clear()
            .type(staticTestData.postcode);
        consumerLandingPageLocators.supplementOrderForm
            .shippingCountry()
            .select(staticTestData.country);
        consumerLandingPageLocators.supplementOrderForm
            .shippingPhone()
            .clear()
            .type(staticTestData.phoneNumber);

        consumerLandingPageLocators.supplementOrderForm.saveAddress().click();
    });
};
