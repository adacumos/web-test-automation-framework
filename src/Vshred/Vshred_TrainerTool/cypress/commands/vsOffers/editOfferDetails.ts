import {
    dashboardLocators,
    offersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            editOfferDetails: (
                editField: string,
                editValue: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to edit Offer Details given the following parameters
 *
 * @param editField the Offer ID
 * @param editValue  the Offer Source
 *
 * Example: cy.editOfferDetails('Price','99')
 */
export const editOfferDetails = (
    editField: string,
    editValue: string
): Cypress.Chainable<any> => {
    cy.logStep(`Editing the Offer's ${editField} with ${editValue}`);
    switch (editField) {
        case 'ID':
            offersPageLocators.editOffersPage
                .editID()
                .clear()
                .type(`${editValue}{enter}`);
            dashboardLocators.saveButton().click();
            break;
        case 'Price':
            offersPageLocators.editOffersPage
                .editPrice()
                .clear()
                .type(`${editValue}{enter}`);
            dashboardLocators.saveButton().click();
            break;
        case 'Product':
            offersPageLocators.editOffersPage
                .editProduct()
                .clear()
                .type(`${editValue}{enter}`);
            dashboardLocators.saveButton().click();
            break;
        default:
            throw new Error('Invalid Option Selected');
    }

    return offersPageLocators.offersLandingPage
        .pageHeader()
        .should('be.visible');
};
