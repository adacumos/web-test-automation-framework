import { offersPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            searchOffers: (
                searchField: string,
                searchValue: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to search Offers in VShred Admin Tool
 *
 * @param searchField search field
 * @param searchValue search text value
 * Example: cy.searchOffers('Name','Turmeric Black')
 *
 */
export const searchOffers = (
    searchField: string,
    searchValue: string
): Cypress.Chainable<any> => {
    cy.logStep(`Filter records by ${searchField}`);
    cy.intercept('**/api/offers?**').as('offerSearch');
    switch (searchField) {
        case 'ID':
            offersPageLocators.offersLandingPage
                .filterOfferId()
                .clear()
                .type(`${searchValue}{enter}`);
            cy.wait('@offerSearch');
            break;
        case 'Name':
            offersPageLocators.offersLandingPage
                .filterOfferName()
                .clear()
                .type(`${searchValue}{enter}`);
            cy.wait('@offerSearch');
            break;
        case 'Source':
            offersPageLocators.offersLandingPage
                .filterOfferSource()
                .select(`${searchValue}`);
            cy.wait('@offerSearch');
            break;
        default:
            throw new Error('Invalid Criteria Selected');
    }
    return offersPageLocators.offersLandingPage
        .pageHeader()
        .should('be.visible');
};
