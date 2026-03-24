import { consumerAccountPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            viewFunnelOrderDetails: (
                orderList: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to compare Funnel Order Details against expected test data
 * @param orderType type of Order to validate
 * @param orderList expected list of Orders created (optional)
 * example:  viewFunnelOrderDetails('Orders')
 */

export const viewFunnelOrderDetails = (
    orderList: string
): Cypress.Chainable<any> => {
    const currentDate = new Date();
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(currentDate.getMonth() + 1);
    const orderDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    cy.get('@staticTestData').then((staticTestData: any) => {
        const funnelOrders = staticTestData[`${orderList}`];

        cy.logStep('View each of the Order items');
        /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
        for (let x = 0; x < funnelOrders.length; x++) {
            consumerAccountPageLocators
                .tableRecords()
                .eq(x)
                .within(() => {
                    consumerAccountPageLocators.viewButton().click();
                });
            cy.url().should('contain', '/my-account/view-order/');
            cy.logStep('Verify order details are as expected');
            consumerAccountPageLocators.ordersPage
                .orderStatus()
                .should('contain', 'fulfilled');
            consumerAccountPageLocators.ordersPage
                .orderDate()
                .should('contain', orderDate);
            consumerAccountPageLocators.ordersPage
                .orderItem(funnelOrders[x])
                .should('be.visible');
            consumerAccountPageLocators.myAccountMenu('Orders').click();
        }
    });

    return cy.logStep(`Resouce Values are matched with Order Details`);
};
