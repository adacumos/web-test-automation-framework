import {
    dashboardLocators,
    leOffersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            deleteOffersTestData: (
                offerSku: string,
                offerTitle: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to delete Offers test data created
 * @param offerSku unique Offer sku
 * @param offerTitle Offer Title
 * example:  deleteOffersTestData('test_burn_3.0','test burn titlr')
 */

export const deleteOffersTestData = (
    offerSku: string,
    offerTitle: string
): Cypress.Chainable<any> => {
    const deleteTestData = {
        host: Cypress.env('DB_HOST'),
        port: Cypress.env('DB_PORT'),
        database: Cypress.env('DB_DB'),
        user: Cypress.env('DB_USER'),
        password: Cypress.env('DB_PASSWORD'),
        query: '',
        params: '',
    };
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep('Searching Offers test data');
        dashboardLocators.searchInput().clear().type(`${offerSku}`);
        dashboardLocators
            .getRecord(`${offerSku}`)
            .parent()
            .within(() => {
                dashboardLocators.viewButton().click();
            });

        cy.logStep('Deleting table reference from Orders');
        dashboardLocators.selectTab('Orders').click();
        leOffersPageLocators.tablRelations.Orders.orderOfferRelation(offerTitle)
            .parents('tr')
            .within(() => {
                dashboardLocators.viewButton().click();
            });
        dashboardLocators.selectTab('Order Offers').click();

        cy.logStep('Force delete Order Offer reference table');
        leOffersPageLocators.orderOffersPage
            .orderOffers(offerTitle)
            .parents('tr')
            .within(() => {
                leOffersPageLocators.orderOffersPage
                    .orderOfferID()
                    .invoke('text')
                    .then((id) => {
                        deleteTestData.query =
                            staticTestData.deleteTestData.orderOfferTable;
                        deleteTestData.params = id.trim();
                        cy.task('runSQLCmd', deleteTestData);
                    });
            });

        cy.logStep('Deleting table reference from Prices');
        dashboardLocators.menuButton('Offers').click();
        cy.reload();
        dashboardLocators.searchInput().clear().type(`${offerSku}`);
        dashboardLocators
            .getRecord(`${offerSku}`)
            .parent()
            .within(() => {
                dashboardLocators.viewButton().click();
            });

        dashboardLocators.selectTab('Prices').click();
        leOffersPageLocators.viewOfferPrices
            .offerAmount()
            .parents('tr')
            .within(() => {
                cy.get('[via-resource=offers] a')
                    .invoke('text')
                    .then((price) => {
                        deleteTestData.query =
                            staticTestData.deleteTestData.priceTable;
                        deleteTestData.params = price.trim();
                        cy.task('runSQLCmd', deleteTestData);
                    });
            });

        cy.logStep('Force Deleting Offers Test Data');
        dashboardLocators.selectTab('Details').click();
        leOffersPageLocators.offerDetailsPage
            .offerSku()
            .parent()
            .next()
            .invoke('text')
            .then((sku) => {
                deleteTestData.query =
                    staticTestData.deleteTestData.OffersTable;
                deleteTestData.params = sku.trim();
                cy.task('runSQLCmd', deleteTestData);
            });

        cy.logStep('Verifying Offers test data created is deleted');
        dashboardLocators.menuButton('Offers').click();
        cy.reload();
        dashboardLocators.searchInput().clear().type(`${offerSku}`);
    });

    return dashboardLocators.noMatchedRecord('offer').should('be.visible');
};
