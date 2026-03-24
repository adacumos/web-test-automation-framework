import { usersPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            searchAndAddOffer: (value: string) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to search and add an offer on the User Information page.
 * @param value the offer name to search for
 * @example
 * cy.searchAndAddOffer('Turmeric')
 *
 */
export const searchAndAddOffer = (value: string): Cypress.Chainable<any> => {
    cy.intercept('GET', '/nova-vendor/process-order/order/*').as('offerAdded');

    cy.logStep(`Search and add for product ${value}`);

    usersPageLocators.newOrder.addOfferButton().click();

    usersPageLocators.addOfferWidget.searchOfferField().type(value);

    usersPageLocators.addOfferWidget
        .offerSuggestion(value)
        .parent()
        .within(() => {
            usersPageLocators.addOfferWidget.addButton().click();
        });

    return cy.wait('@offerAdded');
};
