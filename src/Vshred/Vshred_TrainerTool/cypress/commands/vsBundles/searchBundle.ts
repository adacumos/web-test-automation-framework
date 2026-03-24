import {
    bundlesPageLocators,
    dashboardLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            searchBundle: (
                searchField: string,
                searchValue: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to search Bundles in VShred Admin Tool
 *
 * @param searchField search field
 * @param searchValue search text value
 * Example: cy.searchBundle('ID', 'bun_62183dd54615b')
 *
 */
export const searchBundle = (
    searchField: string,
    searchValue: string
): Cypress.Chainable<any> => {
    cy.logStep(`Search Bundles by ${searchField}`);
    cy.intercept('**/api/bundles?**').as('bundlesSearch');
    switch (searchField) {
        case 'ID':
            bundlesPageLocators.bundlesLandingPage
                .filterBundleId()
                .clear()
                .type(`${searchValue}{enter}`);
            cy.wait('@bundlesSearch');
            break;
        case 'Source':
            bundlesPageLocators.bundlesLandingPage
                .filterBundleSource()
                .select(`${searchValue}`);
            cy.wait('@bundlesSearch');
            break;
        case 'Title':
            bundlesPageLocators.bundlesLandingPage
                .filterBundleTitle()
                .clear()
                .type(`${searchValue}{enter}`);
            cy.wait('@bundlesSearch');
            break;
        default:
            throw new Error('Invalid Criteria Selected');
    }
    return dashboardLocators.tdRecords().eq(0).should('be.visible');
};
