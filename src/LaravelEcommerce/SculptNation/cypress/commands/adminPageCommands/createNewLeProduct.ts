import {
    dashboardLocators,
    leProductsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createNewLeProduct: (
                productName: string,
                productDescription: string,
                productType: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create new Product through LE Admin
 * @param productName Product Name
 * @param productDescription Product description
 * @param productType product type, digital or physical
 * example:  createNewLeProduct('prod_newHope_1.0','New Product','test product description details','$0.00','physical')
 */

export const createNewLeProduct = (
    productName: string,
    productDescription: string,
    productType: string
): Cypress.Chainable<any> => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    const random = Cypress._.random(0, 1e5);
    let productID: string;
    let productSku: string;

    cy.logStep('Creating New Product');
    leProductsPageLocators.productsLandingPage.createNewProduct().click();
    leProductsPageLocators.editAddProductPage
        .productName()
        .clear()
        .type(`${productName}`);
    leProductsPageLocators.editAddProductPage
        .productSku()
        .clear()
        .type(`productSku${random}`);
    leProductsPageLocators.editAddProductPage.productStatus().select('Active');
    leProductsPageLocators.editAddProductPage
        .productType()
        .select(`${productType}`);
    leProductsPageLocators.editAddProductPage
        .productDescription()
        .clear()
        .type(`${productDescription}`);

    dashboardLocators.createButton().click();
    dashboardLocators.successToast().should('be.visible');

    cy.reload();
    cy.logStep('Get new resource data');
    leProductsPageLocators.productDetailsPage
        .productID()
        .parent()
        .next()
        .then(($value: any) => {
            productID = $value.text().trim();
        });
    leProductsPageLocators.productDetailsPage
        .productName()
        .parent()
        .next()
        .then(($value: any) => {
            productName = $value.text().trim(); // eslint-disable-line no-param-reassign
        });
    leProductsPageLocators.productDetailsPage
        .productSku()
        .parent()
        .next()
        .then(($value: any) => {
            productSku = $value.text().trim();
        });

    return cy.readFile(filepath).then((data) => {
        data.push({
            productID: `${productID}`,
            productName: `${productName}`,
            productSku: `${productSku}`,
        });
        cy.writeFile(filepath, JSON.stringify(data, null, 2));
    });
};
