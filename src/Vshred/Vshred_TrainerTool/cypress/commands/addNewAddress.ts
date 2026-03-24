import { ordersPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            addNewAddress: (
                name: string,
                phone: string,
                address: string,
                address2: string,
                country: string,
                state: string,
                city: string,
                zipCode: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to create a new address for an Order in the VShred Admin Tool
 *
 * @param name the address name
 * @param phone the address phone
 * @param address the address street
 * @param address2 the address additional details (block, apartment, floor)
 * @param country the address country
 * @param state the address state
 * @param city the address city
 * @param zipCode the address zipCode
 *
 * @example
 * cy.addNewAddress('Home', '7025551212', '1217 W Hammer Ln', 'Block 10', 'US', 'NV', 'North Las Vegas', '89031')
 *
 */
export const addNewAddress = (
    name: string,
    phone: string,
    address: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    zipCode: string
): Cypress.Chainable<any> => {
    ordersPageLocators.manageAddressWidget.newAddressButton().click();

    cy.logStep('Fill in address fields and confirm');
    ordersPageLocators.addAddressWidget.nameField().type(name);
    ordersPageLocators.addAddressWidget.phoneField().type(phone);
    ordersPageLocators.addAddressWidget.addressField().type(address);
    ordersPageLocators.addAddressWidget.address2Field().type(address2);
    ordersPageLocators.addAddressWidget.countryField().select(country);
    ordersPageLocators.addAddressWidget.stateField().select(state);
    ordersPageLocators.addAddressWidget.cityField().type(city);
    ordersPageLocators.addAddressWidget.zipCodeField().type(zipCode);
    return ordersPageLocators.addAddressWidget.addAddressModal().within(() => {
        ordersPageLocators.addAddressWidget.confirmButton().click();
    });
};
