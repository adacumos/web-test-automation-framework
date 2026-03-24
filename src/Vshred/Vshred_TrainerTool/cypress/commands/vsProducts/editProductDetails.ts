import {
    dashboardLocators,
    productsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            editProductDetails: (
                editField: string,
                editValue: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to edit the Products details by field
 *
 * @param editField the Products edit field to be updated
 * @param editValue the new Product value
 * Example: cy.editProductDetails('Name','Accelerator')
 *
 */
export const editProductDetails = (
    editField: string,
    editValue: string
): Cypress.Chainable<any> => {
    cy.logStep(`Editing Product's ${editField} with ${editValue}`);

    if (editField !== 'Cogs') {
        switch (editField) {
            case 'ID':
                productsPageLocators.editProductsPage
                    .editID()
                    .clear()
                    .type(`${editValue} {enter}`);
                break;
            case 'Name':
                productsPageLocators.editProductsPage
                    .editName()
                    .clear()
                    .type(`${editValue} {enter}`);
                break;
            case 'Price':
                productsPageLocators.editProductsPage
                    .editDefaultPrice()
                    .clear()
                    .type(`${editValue} {enter}`);
                break;
            case 'Description':
                productsPageLocators.editProductsPage
                    .editDescription()
                    .clear()
                    .type(`${editValue} {enter}`);
                break;
            case 'Ability':
                productsPageLocators.editProductsPage
                    .editAbility()
                    .clear()
                    .type(`${editValue} {enter}`);
                cy.wait('@productSearch');
                break;
            case 'Status':
                productsPageLocators.editProductsPage.editStatus().click();
                break;
            default:
                throw new Error('Search Criteria is invalid');
        }
        productsPageLocators.editProductsPage.editCogs().clear().type('0');
        dashboardLocators.saveButton().click();
    } else {
        productsPageLocators.editProductsPage
            .editCogs()
            .clear()
            .type(`${editValue} {enter}`);
        dashboardLocators.saveButton().click();
    }

    return productsPageLocators.viewProductsPage
        .productID()
        .should('be.visible');
};
