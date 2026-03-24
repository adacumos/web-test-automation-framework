import {
    dashboardLocators,
    gtinsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createNewGtin: (
                gtinsType: string,
                gtinsValue: string,
                productName: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create new Gtins through LE Admin
 * @param gtinsType Gtins type, upc, isbn, ean, aisn, jan, gcid
 * @param gtinsValue unique Gtins Value/Name
 * @param productName Product that was created, searh field i.e. TEST-- PRODUCT --TEST
 * example:  createNewGtin('upc','TEST-- GTIN --TEST', 'TEST-- PRODUCT --TEST')
 */

export const createNewGtin = (
    gtinsType: string,
    gtinsValue: string,
    productName: string
): Cypress.Chainable<any> => {
    cy.logStep('Verify New Gtin to be created do not exist');
    dashboardLocators.searchInput().clear().type(`${gtinsValue}`);
    dashboardLocators.noMatchedRecord('Gtin').should('be.visible');

    cy.logStep('Creating New Gtin');
    gtinsPageLocators.createNewGtin().click();
    gtinsPageLocators.gtinType().select(`${gtinsType}`);
    gtinsPageLocators.gtinValue().type(`${gtinsValue} {enter}`);
    gtinsPageLocators.gtinProduct().type(`${productName}`);
    gtinsPageLocators.gtinsSearch().click();
    gtinsPageLocators.createGtinButton().click();

    return dashboardLocators.successToast().should('be.visible');
};
