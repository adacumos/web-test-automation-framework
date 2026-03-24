import { consumerAccountPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            checkAccountOrders: (orderType: string) => void;
        }
    }
}

/**
 * Command to check orders are correct on the account page
 * @param orderType
 * @example
 * cy.checkAccountOrders('three bottle')
 */
export const checkAccountOrders = (orderType: string): void => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (orderType.toLowerCase()) {
            case 'subscription':
                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.subscription.orderDetails,
                        'firstItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(1)
                        .should(
                            'contain.text',
                            staticTestData.subscription.orderDetails
                                .firstItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.subscription.orderDetails
                                .firstItemOrderTotal
                        );
                }

                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.subscription.orderDetails,
                        'secondItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(2)
                        .should(
                            'contain.text',
                            staticTestData.subscription.orderDetails
                                .secondItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.subscription.orderDetails
                                .secondItemOrderTotal
                        );
                }
                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.subscription.orderDetails,
                        'thirdItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(3)
                        .should(
                            'contain.text',
                            staticTestData.subscription.orderDetails
                                .thirdItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.subscription.orderDetails
                                .thirdItemOrderTotal
                        );
                }
                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.subscription.orderDetails,
                        'fourthItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(4)
                        .should(
                            'contain.text',
                            staticTestData.subscription.orderDetails
                                .fourthItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.subscription.orderDetails
                                .fourthItemOrderTotal
                        );
                }
                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.subscription.orderDetails,
                        'fifthItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(5)
                        .should(
                            'contain.text',
                            staticTestData.subscription.orderDetails
                                .fifthItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.subscription.orderDetails
                                .fifthItemOrderTotal
                        );
                }
                break;
            case 'one bottle':
                consumerAccountPageLocators.ordersPage
                    .itemtOrderRow(1)
                    .should(
                        'contain.text',
                        staticTestData.oneBottle.orderDetails
                            .firstItemOrderStatus
                    )
                    .and(
                        'contain.text',
                        staticTestData.oneBottle.orderDetails
                            .firstItemOrderTotal
                    );

                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.oneBottle.orderDetails,
                        'secondItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(2)
                        .should(
                            'contain.text',
                            staticTestData.oneBottle.orderDetails
                                .secondItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.oneBottle.orderDetails
                                .secondItemOrderTotal
                        );
                }
                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.oneBottle.orderDetails,
                        'thirdItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(3)
                        .should(
                            'contain.text',
                            staticTestData.oneBottle.orderDetails
                                .thirdItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.oneBottle.orderDetails
                                .thirdItemOrderTotal
                        );
                }
                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.oneBottle.orderDetails,
                        'fourthItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(4)
                        .should(
                            'contain.text',
                            staticTestData.oneBottle.orderDetails
                                .fourthItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.oneBottle.orderDetails
                                .fourthItemOrderTotal
                        );
                }
                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.oneBottle.orderDetails,
                        'fifthItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(5)
                        .should(
                            'contain.text',
                            staticTestData.oneBottle.orderDetails
                                .fifthItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.oneBottle.orderDetails
                                .fifthItemOrderTotal
                        );
                }
                break;
            case 'six bottle':
                consumerAccountPageLocators.ordersPage
                    .itemtOrderRow(1)
                    .should(
                        'contain.text',
                        staticTestData.sixBottle.orderDetails
                            .firstItemOrderStatus
                    )
                    .and(
                        'contain.text',
                        staticTestData.sixBottle.orderDetails
                            .firstItemOrderTotal
                    );

                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.sixBottle.orderDetails,
                        'secondItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(2)
                        .should(
                            'contain.text',
                            staticTestData.sixBottle.orderDetails
                                .secondItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.sixBottle.orderDetails
                                .secondItemOrderTotal
                        );
                }
                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.sixBottle.orderDetails,
                        'thirdItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(3)
                        .should(
                            'contain.text',
                            staticTestData.sixBottle.orderDetails
                                .thirdItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.sixBottle.orderDetails
                                .thirdItemOrderTotal
                        );
                }
                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.sixBottle.orderDetails,
                        'fourthItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(4)
                        .should(
                            'contain.text',
                            staticTestData.sixBottle.orderDetails
                                .fourthItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.sixBottle.orderDetails
                                .fourthItemOrderTotal
                        );
                }
                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.sixBottle.orderDetails,
                        'fifthItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(5)
                        .should(
                            'contain.text',
                            staticTestData.sixBottle.orderDetails
                                .fifthItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.sixBottle.orderDetails
                                .fifthItemOrderTotal
                        );
                }
                break;
            case 'three bottle':
                consumerAccountPageLocators.ordersPage
                    .itemtOrderRow(1)
                    .should(
                        'contain.text',
                        staticTestData.threeBottle.orderDetails
                            .firstItemOrderStatus
                    )
                    .and(
                        'contain.text',
                        staticTestData.threeBottle.orderDetails
                            .firstItemOrderTotal
                    );

                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.threeBottle.orderDetails,
                        'secondItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(2)
                        .should(
                            'contain.text',
                            staticTestData.threeBottle.orderDetails
                                .secondItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.threeBottle.orderDetails
                                .secondItemOrderTotal
                        );
                }
                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.threeBottle.orderDetails,
                        'thirdItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(3)
                        .should(
                            'contain.text',
                            staticTestData.threeBottle.orderDetails
                                .thirdItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.threeBottle.orderDetails
                                .thirdItemOrderTotal
                        );
                }
                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.threeBottle.orderDetails,
                        'fourthItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(4)
                        .should(
                            'contain.text',
                            staticTestData.threeBottle.orderDetails
                                .fourthItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.threeBottle.orderDetails
                                .fourthItemOrderTotal
                        );
                }
                if (
                    Object.prototype.hasOwnProperty.call(
                        staticTestData.threeBottle.orderDetails,
                        'fifthItemOrderStatus'
                    )
                ) {
                    consumerAccountPageLocators.ordersPage
                        .itemtOrderRow(5)
                        .should(
                            'contain.text',
                            staticTestData.threeBottle.orderDetails
                                .fifthItemOrderStatus
                        )
                        .and(
                            'contain.text',
                            staticTestData.threeBottle.orderDetails
                                .fifthItemOrderTotal
                        );
                }
                break;
            default:
                throw new Error(`Invalid ${orderType} `);
        }
    });
};
