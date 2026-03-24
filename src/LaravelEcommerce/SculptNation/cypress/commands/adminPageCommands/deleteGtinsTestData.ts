import { dashboardLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            deleteGtinsTestData: (gtinsValue: string) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to delete Products test data created
 * @param gtinsValue unique product sku to be deleted
 * example:  deleteGtinsTestData(TEST__Gtins_TEST')
 */

export const deleteGtinsTestData = (
    gtinsValue: string
): Cypress.Chainable<any> => {
    cy.logStep('Searching Gtins test data');
    dashboardLocators.headerSearch().clear().type(`${gtinsValue} {enter}`);
    dashboardLocators
        .getRecord(`${gtinsValue}`)
        .parent()
        .within(() => {
            dashboardLocators.viewButton().click();
        });

    cy.logStep('Deleting Gtin');
    dashboardLocators.deleteModalButton().click();
    dashboardLocators.confirmButton().click();
    dashboardLocators.successToast().should('be.visible');

    return cy.logStep('Gtins Test Data Deleted');
};
