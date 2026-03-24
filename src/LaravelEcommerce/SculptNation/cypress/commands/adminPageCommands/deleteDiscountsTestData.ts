import {
    dashboardLocators,
    discountsPageLocators,
    leOrderOffersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            deleteDiscountsTestData: (
                couponCode: string,
                discountTitle: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to delete Discounts test data created
 * @param couponCode unique coupon code
 * @param discountTitle Discount Title
 * example:  deleteDiscountsTestData('welcome20','Welcome20')
 */

export const deleteDiscountsTestData = (
    couponCode: string,
    discountTitle: string
): Cypress.Chainable<any> => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const deleteTestData = {
            host: Cypress.env('DB_HOST'),
            port: Cypress.env('DB_PORT'),
            database: Cypress.env('DB_DB'),
            user: Cypress.env('DB_USER'),
            password: Cypress.env('DB_PASSWORD'),
            query: '',
            params: '',
        };
        cy.logStep('Searching Discount test data');
        dashboardLocators.searchInput().clear().type(`${couponCode}`);
        dashboardLocators
            .getRecord(`${couponCode}`)
            .parent()
            .within(() => {
                dashboardLocators.viewButton().click();
            });
        cy.logStep('Deleting table reference from Applied Discounts');
        dashboardLocators.selectTab('Applied Discounts').click();
        dashboardLocators
            .tableRecords()
            .eq(0)
            .within(() => {
                dashboardLocators.viewButton().click();
            });
        cy.url().should('contain', 'resources/applied-discounts/');
        discountsPageLocators.appliedDiscounts
            .orderOfferID()
            .parents('tr')
            .within(() => {
                dashboardLocators.viewButton().click();
            });
        cy.url().should('contain', 'resources/order-offers/');
        dashboardLocators.selectTab('Details').click();
        cy.logStep('Force delete linked order offer');
        leOrderOffersPageLocators.orderOfferDetailPage
            .orderOfferID()
            .parent()
            .next()
            .invoke('text')
            .then((id) => {
                deleteTestData.query =
                    staticTestData.deleteTestData.deleteLinkedOrderOffers;
                deleteTestData.params = id.trim();
                cy.task('runSQLCmd', deleteTestData);
            })
            .then(() => {
                dashboardLocators.menuButton('Discounts').click();
                cy.reload();
                dashboardLocators.searchInput().clear().type(`${couponCode}`);
                dashboardLocators
                    .getRecord(`${couponCode}`)
                    .parent()
                    .within(() => {
                        dashboardLocators.viewButton().click();
                    });
                cy.logStep('Delete Linked Applied Discount');
                dashboardLocators.selectTab('Applied Discounts').click();
                dashboardLocators
                    .tableRecords()
                    .eq(0)
                    .within(() => {
                        dashboardLocators.deleteButton().click();
                    });
                dashboardLocators.confirmButton().click();

                cy.logStep('Force Delete Test Discount Resource');
                dashboardLocators.selectTab('Details').click();
                discountsPageLocators.discountsDetailsPage
                    .discountCouponCode()
                    .parent()
                    .next()
                    .invoke('text')
                    .then((coupon) => {
                        deleteTestData.query =
                            staticTestData.deleteTestData.discountsTable;
                        deleteTestData.params = coupon.trim();
                        cy.task('runSQLCmd', deleteTestData);
                    });
            });
        cy.logStep('Verify test data is deleted');
        dashboardLocators.menuButton('Discounts').click();
        cy.reload();
        cy.logStep('Verify Discount test data is no longer visible');
        dashboardLocators
            .searchInput()
            .clear()
            .type(`${discountTitle} {enter}`);
    });

    return dashboardLocators.noMatchedRecord('discount').should('be.visible');
};
