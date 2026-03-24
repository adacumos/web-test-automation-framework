import {
    dashboardLocators,
    leProductsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            restoreProductsTestData: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to restore all default values of the Products Test Data
 * cy.restoreProductsTestData()
 *
 */
export const restoreProductsTestData = (): Cypress.Chainable<any> => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { productName, productType, productDescription } =
            staticTestData.editProduct;

        cy.logStep(`Restoring default Product test data default values`);
        leProductsPageLocators.editProductButton().click();
        leProductsPageLocators.editAddProductPage
            .productName()
            .clear()
            .type(`${productName}`);
        leProductsPageLocators.editAddProductPage
            .productType()
            .select(`${productType}`);
        leProductsPageLocators.editAddProductPage
            .productDescription()
            .clear()
            .type(`${productDescription}`);
        dashboardLocators.updateButton().click();
    });
    return cy.logStep('Default Values are restored');
};
