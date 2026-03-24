import { usersPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            addNewShippingAddress: (
                firstName: string,
                lastName: string,
                phone: string,
                address: string,
                address2: string,
                city: string,
                state: string,
                country: string,
                postalCode: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to create a new shipping address for an order
 * @param firstName the user's first name
 * @param lastName the user's last name
 * @param phone the user's phone
 * @param address the user's address
 * @param address2 the user's address 2
 * @param city the user's city
 * @param state the user's state
 * @param country the user's country
 * @param postalCode the user's postalCode
 * @example
 * cy.addNewShippingAddress('test', 'tester', '1234567890', 'main street', 'block B2', 'Cleveland', 'OH', 'USA', '12333')
 *
 */
export const addNewShippingAddress = (
    firstName: string,
    lastName: string,
    phone: string,
    address: string,
    address2: string,
    city: string,
    state: string,
    country: string,
    postalCode: string
): Cypress.Chainable<any> => {
    cy.logStep('Click add shipping address button');
    cy.intercept('GET', '/nova-api/addresses*').as('createAddress');
    usersPageLocators.newOrder.addShippingAddressButton().click();
    cy.wait('@createAddress');

    cy.logStep('Enter new shipping address details');
    usersPageLocators.changeAddressWidget.addNewShippingAddress().click();
    usersPageLocators.changeAddressWidget.isPrimaryBillingCheckbox().click();
    usersPageLocators.changeAddressWidget.isPrimaryShippingCheckbox().click();

    cy.logStep('Fill in address fields and click Create Address');
    usersPageLocators.changeAddressWidget.firstNameField().type(firstName);
    usersPageLocators.changeAddressWidget.lastNameField().type(lastName);
    usersPageLocators.changeAddressWidget.phoneNumberField().type(phone);
    usersPageLocators.changeAddressWidget.addressField().type(address);
    usersPageLocators.changeAddressWidget.address2Field().type(address2);
    usersPageLocators.changeAddressWidget.cityField().type(city);
    usersPageLocators.changeAddressWidget.stateField().type(state);
    usersPageLocators.changeAddressWidget.countryField().select(country);
    usersPageLocators.changeAddressWidget.postalCodeField().type(postalCode);
    usersPageLocators.changeAddressWidget.createAddressButton().click();
    return cy.wait('@createAddress');
};
