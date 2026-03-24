import {
    dashboardLocators,
    leProductsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateProductsPages: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Products Pages
 * cy.validateProductsPages()
 */
export const validateProductsPages = (): Cypress.Chainable<any> => {
    cy.logStep('Verify Products Landing page');
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { productSku } = staticTestData.editProduct;
        const productDetailsPageArray = Object.values(
            leProductsPageLocators.productDetailsPage
        );
        const createEditproductPageArray = Object.values(
            leProductsPageLocators.editAddProductPage
        );
        leProductsPageLocators.productsLandingPage
            .createNewProduct()
            .should('be.visible');
        dashboardLocators.tableRecords().should('have.length', 25);

        cy.logStep('Searching Products');
        dashboardLocators
            .searchInput()
            .should('be.enabled')
            .clear()
            .type(`${productSku}`);
        dashboardLocators.tableRecords().should('have.length', 1);
        dashboardLocators
            .getRecord(`${productSku}`)
            .parent()
            .within(() => {
                dashboardLocators.editButton().should('be.visible');
                dashboardLocators.viewButton().should('be.visible').click();
            });

        cy.logStep('Verify Products View page');
        productDetailsPageArray.forEach((pageHeader) => {
            pageHeader().should('be.visible');
        });
        leProductsPageLocators.productDetailsPage
            .productSku()
            .should('be.visible')
            .parent()
            .next()
            .contains(`${productSku}`);

        cy.logStep('Verify Edit Products Page');
        leProductsPageLocators.editProductButton().click();
        createEditproductPageArray.forEach((inputFields) => {
            inputFields().should('be.enabled');
        });
        dashboardLocators.updateButton().should('be.visible');
        leProductsPageLocators.cancelButton().click();

        cy.logStep('Return to Products Landing page');
        cy.go('back');

        cy.logStep('Verify Create New Products Page');
        leProductsPageLocators.productsLandingPage.createNewProduct().click();
        createEditproductPageArray.forEach((inputFields) => {
            inputFields().should('be.enabled');
        });

        leProductsPageLocators.createAndAddAnotherButton().should('be.visible');
        dashboardLocators.createButton().should('be.visible');
        leProductsPageLocators.cancelButton().click();

        cy.logStep('Return to Products Landing page');
        cy.go('back');

        dashboardLocators.searchInput().should('be.enabled').clear();
        dashboardLocators.tableRecords().should('have.length', 25);
    });
    return dashboardLocators.pageHeader(`Products`).should('be.visible');
};
