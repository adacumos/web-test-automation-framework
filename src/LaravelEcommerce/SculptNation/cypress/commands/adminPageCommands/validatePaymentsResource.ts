import {
    dashboardLocators,
    leOrdersPageLocators,
    lePaymentsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validatePaymentResource: (
                resourceName: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to validate Payment resource are synced with linked resource tables
 * @param resourceName name of the resource table linked
 * cy.validatePaymentResource(resource)
 */
export const validatePaymentResource = (
    resourceName: string
): Cypress.Chainable<any> => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data: any) => {
        const {
            paymentID,
            baseCurrencyAmount,
            amount,
            orderID,
            gateway,
            transactionReference,
            userPaymentMethod,
            userEmail,
        } = data[0];
        switch (resourceName) {
            case 'Orders': {
                dashboardLocators.selectTab('Details').click();
                leOrdersPageLocators.ordersDetailsPage
                    .orderID()
                    .parent()
                    .next()
                    .then((value) => {
                        expect(value).contain(orderID);
                    });
                leOrdersPageLocators.ordersDetailsPage
                    .baseCurrencyAmount()
                    .parent()
                    .next()
                    .then((value) => {
                        expect(value).contain(baseCurrencyAmount);
                    });
                leOrdersPageLocators.ordersDetailsPage
                    .amount()
                    .parent()
                    .next()
                    .then((value) => {
                        expect(value).contain(amount);
                    });
                leOrdersPageLocators.ordersDetailsPage
                    .user()
                    .parent()
                    .next()
                    .then((value) => {
                        expect(value).contain(userEmail);
                    });

                dashboardLocators.selectTab('Payments').click();
                leOrdersPageLocators.orderPayments
                    .paymentID()
                    .should('contain.text', paymentID);
                leOrdersPageLocators.orderPayments
                    .transactionReference()
                    .should('contain.text', transactionReference)
                    .parents('td')
                    .next()
                    .should('contain.text', gateway);

                break;
            }
            case 'User-Payment-Methods': {
                dashboardLocators.selectTab('Details').click();
                lePaymentsPageLocators.userPaymentMethodDetails
                    .paymentMethodID()
                    .parent()
                    .next()
                    .then((value) => {
                        expect(value).contain(userPaymentMethod);
                    });
                lePaymentsPageLocators.userPaymentMethodDetails
                    .paymentGateway()
                    .parent()
                    .next()
                    .then((value) => {
                        expect(value).contain(gateway);
                    });
                lePaymentsPageLocators.userPaymentMethodDetails
                    .userEmail()
                    .parent()
                    .next()
                    .then((value) => {
                        expect(value).contain(userEmail);
                    });

                dashboardLocators.selectTab('Payments').click();
                dashboardLocators
                    .getRecord(paymentID)
                    .should('be.visible')
                    .parent()
                    .within(() => {
                        // const transNumber = transactionReference
                        if (transactionReference === '-') {
                            lePaymentsPageLocators.paymentsLandingPage
                                .nullTransactionReference()
                                .should('contain.text', '');
                        } else {
                            lePaymentsPageLocators.paymentsLandingPage
                                .transactionReference()
                                .should('contain.text', transactionReference);
                        }
                    });
                break;
            }
            case 'Users': {
                dashboardLocators.selectTab('Orders').click();
                dashboardLocators.trashedResourceFilter('Orders').click();
                dashboardLocators.selectTrashedOption().select('With Trashed');
                dashboardLocators.trashedResourceFilter('Orders').click();
                leOrdersPageLocators.ordersLandingPage
                    .searchOrder()
                    .clear()
                    .type(orderID);
                dashboardLocators
                    .resourceTableRecord('Orders')
                    .eq(0)
                    .should('contain.text', orderID);
                dashboardLocators
                    .selectTab('Payment Methods')
                    .click()
                    .then(() => {
                        dashboardLocators
                            .resourceTableRecord('user-payment-methods')
                            .contains(userPaymentMethod)
                            .should('be.visible')
                            .parents('tr')
                            // .eq(0)
                            // .should('contain.text', userPaymentMethod)
                            .within(() => {
                                dashboardLocators
                                    .resourceLink('user-payment-methods')
                                    .click();
                            });
                    });
                dashboardLocators.selectTab('Payments').click();
                break;
            }
            default:
                throw new Error('Selected resource name is not yet supported');
        }
        dashboardLocators
            .resourceTableRecord('Payments')
            .contains(paymentID)
            .click();
    });

    return lePaymentsPageLocators.paymentsDetailsPage
        .paymentDetailsHeader()
        .should('be.visible');
};
