import { dashboardLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            deleteProductsTestDataNoTrashed: (
                productName: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to delete Products test data created
 * @param productName unique product name to be deleted
 * example:  deleteProductsTestDataNoTrashed('TEST__PRODUCT___TEST')
 */

export const deleteProductsTestDataNoTrashed = (
    productName: string
): Cypress.Chainable<any> => {
    cy.logStep('Searching Product test data');
    dashboardLocators.searchInput().clear().type(`${productName}`);
    dashboardLocators
        .getRecord(`${productName}`)
        .parent()
        .within(() => {
            dashboardLocators.viewButton().click();
        });

    cy.logStep('Deleting Products');
    dashboardLocators.deleteModalButton().eq(0).click();
    dashboardLocators.confirmButton().click();
    dashboardLocators.confirmButton().click();
    dashboardLocators.successToast().should('be.visible');

    return cy.logStep('Product Deleted');
};
