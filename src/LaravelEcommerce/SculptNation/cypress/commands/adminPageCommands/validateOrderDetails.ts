import {
    dashboardLocators,
    leOrdersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateOrderDetails: (
                resourceType: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to validate Order Details values with related Order resource data
 * @param resouceType type of resource data
 * example:  validateOrderDetails('OrderOffers')
 */

export const validateOrderDetails = (
    resourceType: string
): Cypress.Chainable<any> => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        switch (resourceType) {
            case 'OrderOffers': {
                const { baseCurrencySubtotal } = data[0];
                dashboardLocators.selectTab('Order Offers').click();
                leOrdersPageLocators.orderOffers
                    .baseCurrencyAmount()
                    .eq(0)
                    .should('be.visible')
                    .invoke('text')
                    .then((value: any) => {
                        expect(value.trim()).to.eq(baseCurrencySubtotal);
                    });
                break;
            }
            case 'Invoices': {
                const { baseCurrencyAmount, paidAtDate } = data[0];
                dashboardLocators.selectTab('Invoices').click();
                leOrdersPageLocators.orderInvoices
                    .baseCurrencyAmount()
                    .eq(0)
                    .should('be.visible')
                    .invoke('text')
                    .then((value: any) => {
                        expect(value.trim()).to.eq(baseCurrencyAmount);
                    });
                leOrdersPageLocators.orderInvoices
                    .paidAtDate()
                    .should('be.visible')
                    .invoke('text')
                    .then((value: any) => {
                        expect(value.trim()).to.include(paidAtDate);
                    });
                break;
            }
            case 'Payments': {
                dashboardLocators.selectTab('Payments').click();
                const { baseCurrencyAmount, orderID } = data[0];

                leOrdersPageLocators.orderPayments
                    .orderId()
                    .invoke('text')
                    .then((value: any) => {
                        expect(value.trim()).to.contain(orderID);
                    });

                leOrdersPageLocators.orderPayments
                    .amount()
                    .invoke('text')
                    .then((value: any) => {
                        expect(value.trim()).to.eq(baseCurrencyAmount);
                    });

                break;
            }
            case 'Shipments': {
                const { shippingCategory } = data[0];
                if (shippingCategory !== '-') {
                    cy.logStep('Order has No Shipping Charges');
                } else {
                    dashboardLocators.selectTab('Shipments').click();
                    leOrdersPageLocators.orderShipments
                        .shippingCategory()
                        .invoke('text')
                        .then((value: any) => {
                            expect(value.trim()).to.eq(shippingCategory);
                        });
                }
                break;
            }
            case 'Subscriptions': {
                dashboardLocators.selectTab('Subscriptions').click();
                const {
                    subscriptionID,
                    subscriptionStatus,
                    renewsAt,
                    offer,
                    orderID,
                } = data[0];

                dashboardLocators
                    .resourceTableRecord('Subscriptions')
                    .contains(orderID)
                    .should('be.visible')
                    .parents('tr')
                    .within(() => {
                        cy.contains('td a', subscriptionID).should(
                            'be.visible'
                        );
                        cy.contains('td span', subscriptionStatus).should(
                            'be.visible'
                        );
                        cy.contains('td span', renewsAt).should('be.visible');
                        cy.contains('td span', offer).should('be.visible');
                    });

                break;
            }
            default:
                throw new Error('Selected Resource Type Not Yet Supported');
        }
    });
    return cy.logStep(
        `${resourceType} Resouce Values are matched with Order Details`
    );
};
