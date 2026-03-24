import {
    dashboardLocators,
    leProductsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            deleteProductsTestData: (
                productSku: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to delete Products test data created
 * @param productSku unique product sku to be deleted
 * example:  deleteProductsTestData('ttest_sku_regress_product')
 */

export const deleteProductsTestData = (
    productSku: string
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
        cy.logStep('Searching Product test data');
        dashboardLocators.searchInput().clear().type(`${productSku}`);
        dashboardLocators
            .getRecord(`${productSku}`)
            .parent()
            .within(() => {
                dashboardLocators.viewButton().click();
            });

        cy.logStep('Deleting table reference from Products');
        dashboardLocators.selectTab('Offers').click();
        dashboardLocators.trashedResourceFilter('Offers').click();
        dashboardLocators.selectTrashedOption().select('With Trashed');
        dashboardLocators.trashedResourceFilter('Offers').click();
        dashboardLocators.resourceTableRecord('Offers').within(() => {
            dashboardLocators.deleteButton().click();
        });
        dashboardLocators.confirmButton().click();

        cy.logStep('Force Deleting Products Test Data');
        dashboardLocators.selectTab('Details').click();
        leProductsPageLocators.productDetailsPage
            .productSku()
            .parent()
            .next()
            .invoke('text')
            .then((sku) => {
                deleteTestData.query =
                    staticTestData.deleteTestData.ProductsTable;
                deleteTestData.params = sku.trim();
                cy.task('runSQLCmd', deleteTestData);
            });
        cy.logStep('Verifying Products test data created is deleted');
        dashboardLocators.menuButton('Products').click();
        cy.reload();
        dashboardLocators.searchInput().clear().type(`${productSku}`);
    });

    return cy.logStep('Product Test Data Deleted');
};
