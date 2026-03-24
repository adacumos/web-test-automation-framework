import {
    dashboardLocators,
    usersPageLocators,
} from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            cancelSubscriptionFromAdminTool: () => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to cancel a subscription in the SculptNation Admin Tool
 * @example
 * cy.cancelSubscriptionFromAdminTool()
 *
 */
export const cancelSubscriptionFromAdminTool = (): Cypress.Chainable<any> => {
    // Commenting this one to use the new drop-down for cancel subscription
    /* usersPageLocators.subscriptions.cancelSubscriptionButton().click();
    usersPageLocators.subscriptions
        .subscriptionCancellationConfirmationButton()
        .click();
    */
    usersPageLocators.subscriptions
        .cancelSubscriptionMenu()
        .select('cancel-subscription');
    usersPageLocators.subscriptions
        .subscriptionCancellationConfirmationButton()
        .click();
    dashboardLocators
        .successToast()
        .should('be.visible')
        .and('have.text', 'Subscription canceled!');

    usersPageLocators.ordersSection.tab('Subscriptions').click();
    return usersPageLocators.subscriptions
        .updatedStatus()
        .should('have.text', 'cancelled');
};
