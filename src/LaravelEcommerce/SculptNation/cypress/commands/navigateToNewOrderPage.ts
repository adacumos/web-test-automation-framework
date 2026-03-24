import { usersPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            navigateToNewOrderPage: (
                userName: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to navigate to the New Order page in the SculptNation Admin Tool
 * @param userName the user name
 * @example
 * cy.navigateToNewOrderPage('test user')
 *
 */
export const navigateToNewOrderPage = (
    userName: string
): Cypress.Chainable<any> => {
    usersPageLocators.editUserInformation.processOrderForUserButton().click();
    usersPageLocators.recentOrders
        .recentOrdersHeading(userName)
        .should('be.visible');
    usersPageLocators.recentOrders
        .recentCartsHeading(userName)
        .should('be.visible');
    usersPageLocators.recentOrders.newOrderButton().click();

    cy.logStep('Wait for the New Order page to load');
    usersPageLocators.newOrder.backToUserButton().should('be.visible');
    usersPageLocators.newOrder.orderDetailsHeading().should('be.visible');
    usersPageLocators.newOrder.offersHeading().should('be.visible');
    usersPageLocators.newOrder.addShippingAddressButton().should('be.visible');
    usersPageLocators.newOrder.findUserButton().should('be.visible');
    usersPageLocators.newOrder.addOfferButton().should('be.visible');
    usersPageLocators.newOrder.addDiscountButton().should('be.visible');
    usersPageLocators.newOrder.paymentsHeading().should('be.visible');
    return usersPageLocators.newOrder.shipmentsHeading().should('be.visible');
};
