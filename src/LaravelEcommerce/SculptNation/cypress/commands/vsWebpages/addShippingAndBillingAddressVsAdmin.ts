import { vsOrdersPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            addShippingAndBillingAddressVsAdmin: () => Cypress.Chainable<any>;
        }
    }
}

export const addShippingAndBillingAddressVsAdmin =
    (): Cypress.Chainable<any> => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            vsOrdersPageLocators.changeAddressWidget
                .addShippingAddressButton()
                .should('be.visible');
            vsOrdersPageLocators.changeAddressWidget
                .addShippingAddressButton()
                .click();
            cy.logStep('Enter new shipping address details');
            vsOrdersPageLocators.changeAddressWidget
                .newShippingAddress()
                .click();

            cy.logStep('Fill in address fields and click Create Address');
            vsOrdersPageLocators.changeAddressWidget
                .name()
                .type(staticTestData.firstName);
            vsOrdersPageLocators.changeAddressWidget
                .phone()
                .type(staticTestData.phone);
            vsOrdersPageLocators.changeAddressWidget
                .address()
                .type(staticTestData.address);
            vsOrdersPageLocators.changeAddressWidget
                .address2()
                .type(staticTestData.address2);
            vsOrdersPageLocators.changeAddressWidget
                .countryField()
                .select(staticTestData.country);
            vsOrdersPageLocators.changeAddressWidget
                .stateField()
                .select(staticTestData.state);
            vsOrdersPageLocators.changeAddressWidget
                .city()
                .type(staticTestData.city);
            vsOrdersPageLocators.changeAddressWidget
                .zip()
                .type(staticTestData.postalCode);
            vsOrdersPageLocators.changeAddressWidget.okSaveAddress().click();
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(1000);
            vsOrdersPageLocators.changeAddressWidget.useAddressButton().click();

            cy.logStep(
                'User selects the shipping address as their billing address'
            );
            vsOrdersPageLocators.newOrder
                .addBillingAddressButton()
                .should('be.visible');
            vsOrdersPageLocators.newOrder.addBillingAddressButton().click();
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(500);
            vsOrdersPageLocators.newOrder
                .manageAddressModal()
                .should('be.visible'); // This step ensures that modal is loaded
            vsOrdersPageLocators.changeAddressWidget.useAddressButton().click();
        });
        return cy.logStep(`Added shipping and billing address.`);
    };
