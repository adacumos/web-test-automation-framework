import { consumerAccountPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            viewOrderDetails: (orderType: string) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to compare order Details against expected test data
 * @param orderType type of Order to validate
 * example:  viewOrderDetails('Orders')
 */

export const viewOrderDetails = (orderType: string): Cypress.Chainable<any> => {
    const currentDate = new Date();
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(currentDate.getMonth() + 1);
    const orderDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const renewalDate = nextMonthDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    cy.logStep('Click the View button');
    consumerAccountPageLocators
        .tableRecords()
        .eq(0)
        .within(() => {
            consumerAccountPageLocators.viewButton().click();
        });

    switch (orderType) {
        case 'Order': {
            cy.get('@staticTestData').then((staticTestData: any) => {
                const {
                    firstItemOrderStatus: status,
                    firstSubscriptionName: productName,
                    firstItemOrderTotal: totalPrice,
                } = staticTestData.subscription.orderDetails;

                cy.url().should('contain', '/my-account/view-order/');
                cy.logStep('Verify order details are as expected');
                consumerAccountPageLocators.ordersPage
                    .orderDate()
                    .should('contain', `${orderDate}`);
                consumerAccountPageLocators.ordersPage
                    .orderStatus()
                    .should('contain', `${status}`);
                consumerAccountPageLocators.ordersPage
                    .orderItem(`${productName}`)
                    .should('be.visible');
                consumerAccountPageLocators.ordersPage
                    .orderTotal()
                    .should('contain.text', `${totalPrice}`);
            });
            break;
        }
        case 'Subscription': {
            cy.get('@staticTestData').then((staticTestData: any) => {
                const {
                    subscriptionStatus: status,
                    firstSubscriptionName: productName,
                    firstSubscriptionPricePerMonth: recurringPrice,
                } = staticTestData.subscription.orderDetails;

                cy.url().should('contain', '/my-account/view-subscription/');
                cy.logStep('Verify Subscription details are as expected');
                consumerAccountPageLocators.subscriptionsPage
                    .startDate()
                    .should('contain', `${orderDate}`);
                consumerAccountPageLocators.subscriptionsPage
                    .nextPaymentDate()
                    .should('contain', `${renewalDate}`);
                consumerAccountPageLocators.subscriptionsPage
                    .subscriptionStatus()
                    .should('contain', `${status}`);
                consumerAccountPageLocators.subscriptionsPage
                    .orderItem(`${productName}`)
                    .should('be.visible');
                consumerAccountPageLocators.subscriptionsPage
                    .orderTotal()
                    .should('contain', `${recurringPrice}`);
            });
            break;
        }
        default:
            throw new Error('Selected Order Type Not Yet Supported');
    }

    return cy.logStep(`Resouce Values are matched with Order Details`);
};
