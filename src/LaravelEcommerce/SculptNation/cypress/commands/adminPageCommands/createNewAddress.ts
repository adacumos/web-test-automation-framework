import {
    dashboardLocators,
    usersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createNewAddress: (
                emailReference: string,
                addressDetails: any
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create new User Address through LE Admin Users page
 * @param emailReference user email address the new address will be linked to
 * @param addressDetails array of address details reference to json file
 * example:  createNewAddress('ramdomUser@mail.com', 'AddressDetails')
 */

export const createNewAddress = (
    emailReference: string,
    addressDetails: any
): Cypress.Chainable<any> => {
    cy.logStep('Creating New Address');
    usersPageLocators.changeAddressWidget
        .userField()
        .should('contain.text', `${emailReference}`);

    usersPageLocators.changeAddressWidget.isPrimaryBillingCheckbox().click();
    usersPageLocators.changeAddressWidget.isPrimaryShippingCheckbox().click();
    usersPageLocators.changeAddressWidget
        .firstNameField()
        .clear()
        .type(`${addressDetails.firstName}`);
    usersPageLocators.changeAddressWidget
        .lastNameField()
        .clear()
        .type(`${addressDetails.lastName}`);
    usersPageLocators.changeAddressWidget
        .phoneNumberField()
        .clear()
        .type(`${addressDetails.phoneNumber}`);
    usersPageLocators.changeAddressWidget
        .addressField()
        .clear()
        .type(`${addressDetails.address1}`);
    usersPageLocators.changeAddressWidget
        .address2Field()
        .clear()
        .type(`${addressDetails.address2}`);
    usersPageLocators.changeAddressWidget
        .cityField()
        .clear()
        .type(`${addressDetails.city}`);
    usersPageLocators.changeAddressWidget
        .stateField()
        .clear()
        .type(`${addressDetails.state}`);
    usersPageLocators.changeAddressWidget
        .countryField()
        .select(`${addressDetails.country}`);
    usersPageLocators.changeAddressWidget
        .postalCodeField()
        .clear()
        .type(`${addressDetails.postalCode}`);

    usersPageLocators.changeAddressWidget.createAddress().click();

    return dashboardLocators
        .successToast()
        .should('contain.text', 'The address was created');
};
