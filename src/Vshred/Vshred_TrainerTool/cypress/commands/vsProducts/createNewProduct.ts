import {
    dashboardLocators,
    productsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createNewProduct: (
                newProductID: string,
                newProductName: string,
                newProductPrice: string,
                newProductCogs: string,
                newProductPhysical: boolean,
                newProductDescription: string,
                newProductAbility: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to create new Product in VS Admin
 *
 * @param newProductID the Products unique ID
 * @param newProductName the new Product Name
 * @param newProductPrice the new Product Default Price
 * @param newProductCogs the new Product Cost of Goods
 * @param newProductPhysical true for physical products otherwise a digital product
 * @param newProductDescription the new Product Description
 * @param newProductAbility the ability the new Product is assigned to
 *
 * Example: cy.createNewProduct('sku_accelerator_6mProg,'VS Accelerator 6months','4995','0','false','The new Accelerator 6Months','vshred-accelerator-program')
 *
 */
export const createNewProduct = (
    newProductID: string,
    newProductName: string,
    newProductPrice: string,
    newProductCogs: string,
    newProductPhysical: boolean,
    newProductDescription: string,
    newProductAbility: string
): Cypress.Chainable<any> => {
    cy.logStep(`Checking if Product ID exist`);
    cy.searchProducts('ID', newProductID);

    if (dashboardLocators.noDataAvailable()) {
        cy.logStep(`Creating New Product with ProductID: ${newProductID}`);
        productsPageLocators.newProductsButton().click();

        productsPageLocators.newProductsPage
            .id()
            .clear()
            .type(`${newProductID}`);
        productsPageLocators.newProductsPage
            .name()
            .clear()
            .type(`${newProductName}`);
        productsPageLocators.newProductsPage
            .defaultPrice()
            .clear()
            .type(`${newProductPrice}`);
        productsPageLocators.newProductsPage
            .cogs()
            .clear()
            .type(`${newProductCogs}`);
        productsPageLocators.newProductsPage
            .description()
            .clear()
            .type(`${newProductDescription}`);
        productsPageLocators.newProductsPage
            .ability()
            .clear()
            .type(`${newProductAbility}`);
        // check if new Product is Physical or Digital
        if (!newProductPhysical) {
            dashboardLocators.saveButton().click();
        } else {
            productsPageLocators.newProductsPage.physicalItem().click();
            dashboardLocators.saveButton().click();
        }
    } else {
        throw new Error('Product ID already Exists');
    }

    return productsPageLocators.viewProductsPage
        .productID()
        .parent()
        .next()
        .should('contain.text', `${newProductID}`);
};
