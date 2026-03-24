import { productsPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            verifyProductDetails: (
                productID: string,
                productName: string,
                productDefaultPrice: string,
                productCogs: string,
                productAbility: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to verify VS Product's Details
 *
 * @param productID the product's ID
 * @param productName the product's Name
 * @param productDefaultPrice the product's default price
 * @param productCogs the product's cost of goods
 * @param productAbility the product's ability
 * Example: cy.verifyProductDetails('prod_accelerator_plus','V SHRED ACCELERATOR PLUS+ 12 Weeks','1997','','V SHRED ACCELERATOR','vshred-accelerator-program')
 *
 */
export const verifyProductDetails = (
    productID: string,
    productName: string,
    productDefaultPrice: string,
    productCogs: string,
    productAbility: string
): Cypress.Chainable<any> => {
    cy.logStep('Verifying Product Details');

    productsPageLocators.viewProductsPage
        .productID()
        .parent()
        .next()
        .should('contain.text', `${productID}`);
    productsPageLocators.viewProductsPage
        .productName()
        .parent()
        .next()
        .should('contain.text', `${productName}`);
    productsPageLocators.viewProductsPage
        .productDefaultPrice()
        .parent()
        .next()
        .should('contain.text', `${productDefaultPrice}`);
    productsPageLocators.viewProductsPage
        .productCogs()
        .parent()
        .next()
        .should('contain.text', `${productCogs}`);
    productsPageLocators.viewProductsPage
        .productAbility()
        .parent()
        .next()
        .should('contain.text', `${productAbility}`);

    return productsPageLocators.productsLandingPage
        .pageHeader()
        .should('be.visible');
};
