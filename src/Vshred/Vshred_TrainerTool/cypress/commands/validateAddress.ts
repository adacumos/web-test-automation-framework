import { ordersPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateAddress: (
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

/** Command used to validate a newly created address for an Order in the VShred Admin Tool
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
 * cy.validateAddress('Home', '7025551212', '1217 W Hammer Ln', 'Block 10', 'US', 'NV', 'North Las Vegas', '89031')
 *
 */
export const validateAddress = (
    name: string,
    phone: string,
    address: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    zipCode: string
): Cypress.Chainable<any> => {
    cy.logStep('Check address name');
    ordersPageLocators.manageAddressWidget
        .addressName(name)
        .should('be.visible');
    cy.logStep('Check street');
    ordersPageLocators.manageAddressWidget.addressRow(name).within(() => {
        ordersPageLocators.manageAddressWidget
            .addressField(address)
            .should('be.visible');
    });
    cy.logStep('Check address2');
    ordersPageLocators.manageAddressWidget.addressRow(name).within(() => {
        ordersPageLocators.manageAddressWidget
            .addressField(address2)
            .should('be.visible');
    });
    cy.logStep('Check city');
    ordersPageLocators.manageAddressWidget.addressRow(name).within(() => {
        ordersPageLocators.manageAddressWidget
            .addressField(city)
            .should('be.visible');
    });
    cy.logStep('Check state');
    ordersPageLocators.manageAddressWidget.addressRow(name).within(() => {
        ordersPageLocators.manageAddressWidget
            .addressField(state)
            .should('be.visible');
    });
    cy.logStep('Check country');
    ordersPageLocators.manageAddressWidget.addressRow(name).within(() => {
        ordersPageLocators.manageAddressWidget
            .addressField(country)
            .should('be.visible');
    });
    cy.logStep('Check postal code');
    ordersPageLocators.manageAddressWidget.addressRow(name).within(() => {
        ordersPageLocators.manageAddressWidget
            .addressField(zipCode)
            .should('be.visible');
    });
    cy.logStep('Check phone');
    return ordersPageLocators.manageAddressWidget
        .addressRow(name)
        .within(() => {
            ordersPageLocators.manageAddressWidget
                .addressField(phone)
                .should('be.visible');
        });
};
