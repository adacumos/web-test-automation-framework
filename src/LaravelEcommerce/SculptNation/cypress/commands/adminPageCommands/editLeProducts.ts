import {
    dashboardLocators,
    leProductsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            editLeProducts: (editField: string) => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to edit LE Admin Product
 * @param editField product field reference to be edited
 * cy.editProduct('Name','Turmeric Black')
 */
export const editLeProducts = (editField: string): Cypress.Chainable<any> => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { editName, editType, editDescription } =
            staticTestData.editProduct;

        cy.logStep(`Updating Product ${editField}`);
        leProductsPageLocators.editProductButton().click();
        switch (editField) {
            case 'Name':
                leProductsPageLocators.editAddProductPage
                    .productName()
                    .clear()
                    .type(`${editName}`);
                dashboardLocators.updateButton().click();
                leProductsPageLocators.productDetailsPage
                    .productName()
                    .parent()
                    .next()
                    .should('contain.text', `${editName}`);
                break;
            case 'Type':
                leProductsPageLocators.editAddProductPage
                    .productType()
                    .select(`${editType}`);
                dashboardLocators.updateButton().click();
                leProductsPageLocators.productDetailsPage
                    .productType()
                    .parent()
                    .next()
                    .should('contain.text', `${editType}`);
                break;
            case 'Description':
                leProductsPageLocators.editAddProductPage
                    .productDescription()
                    .clear()
                    .type(`${editDescription}`);
                dashboardLocators.updateButton().click();
                leProductsPageLocators.productDetailsPage
                    .showContentButton()
                    .click();
                leProductsPageLocators.productDetailsPage
                    .productDescription()
                    .parent()
                    .next()
                    .should('contain.text', `${editDescription}`);
                break;
            default:
                throw new Error(
                    'Selected Product field is invalid or inactive'
                );
        }
    });
    return dashboardLocators.pageHeader(`Product Details`).should('be.visible');
};
