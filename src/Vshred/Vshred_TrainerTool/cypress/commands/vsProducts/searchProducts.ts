import { productsPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            searchProducts: (
                searchField: string,
                searchValue: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to search Products by search field
 *
 * @param searchField  search field
 * @param searchValue search text value
 * Example: cy.searchProducts('Name','Accelerator')
 *
 */
export const searchProducts = (
    searchField: string,
    searchValue: string
): Cypress.Chainable<any> => {
    cy.logStep(`Search ${searchValue} from ${searchField} field`);
    cy.intercept('**/api/products?**').as('productSearch');
    switch (searchField) {
        case 'ID':
            productsPageLocators.productsLandingPage
                .filterProductId()
                .clear()
                .type(`${searchValue} {enter}`);
            cy.wait('@productSearch');
            break;
        case 'Name':
            productsPageLocators.productsLandingPage
                .filterProductName()
                .clear()
                .type(`${searchValue} {enter}`);
            cy.wait('@productSearch');
            break;
        case 'Gender':
            productsPageLocators.productsLandingPage
                .filterProductGender()
                .clear()
                .type(`${searchValue} {enter}`);
            cy.wait('@productSearch');
            break;
        default:
            throw new Error('Search Criteria is invalid');
    }
    return productsPageLocators.productsLandingPage
        .pageHeader()
        .should('be.visible');
};
