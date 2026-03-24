import {
    dashboardLocators,
    bundlesPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            editBundleDetails: (
                editField: string,
                editValue: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to edit Bundles Details given the following parameters
 *
 * @param editField the bundle field to edit
 * @param editValue the new bundle value
 * Example: cy.editBundleDetails('price','1497')
 *
 */
export const editBundleDetails = (
    editField: string,
    editValue: string
): Cypress.Chainable<any> => {
    cy.logStep(`Editing the bundle's ${editField} with ${editValue}`);

    switch (editField) {
        case 'Title':
            bundlesPageLocators.editBundlesPage
                .editTitle()
                .clear()
                .type(`${editValue}`);
            dashboardLocators.saveButton().click();
            break;
        case 'Description':
            bundlesPageLocators.editBundlesPage
                .editDescription()
                .clear()
                .type(`${editValue}`);
            dashboardLocators.saveButton().click();
            break;
        case 'Price':
            bundlesPageLocators.editBundlesPage
                .editPrice()
                .clear()
                .type(`${editValue}`);
            dashboardLocators.saveButton().click();
            break;
        default:
            throw new Error('Invalid Option Selected');
    }
    return bundlesPageLocators.bundlesLandingPage
        .pageHeader()
        .should('be.visible');
};
