import {
    dashboardLocators,
    // leOrdersPageLocators,
    usersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            refundOrderItem: (
                orderItem: string,
                refundReason: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to refund and order Item in LE Admin
 * @param orderItem purchased item to refund
 * @param refundReason select from the list of refund reasons
 * example:  refundOrderItem('Custom Diet Plan', 'Change of Mind)
 */

export const refundOrderItem = (
    orderItem: string,
    refundReason: string
): Cypress.Chainable<any> => {
    cy.logStep(`Initiating ${orderItem} order item refund`);

    usersPageLocators.detailsPages
        .actionSelectButton()
        .select('Refund Entire Order');
    usersPageLocators.detailsPages.actionConfirmButton().click();
    usersPageLocators.refundOrderWidget.refundReason().select(refundReason);
    usersPageLocators.refundOrderWidget.runActionButton().click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000); // Expected Delay in synching status with VS Admin
    cy.reload();

    return dashboardLocators.getRecord('refunded').should('be.visible');
};
