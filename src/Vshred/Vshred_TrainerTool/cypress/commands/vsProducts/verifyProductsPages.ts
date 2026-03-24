import {
    dashboardLocators,
    productsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            verifyProductsPages: () => Cypress.Chainable<any>;
        }
    }
}

/** Command used to verify VS Bundle pages
 *
 * Example: cy.verifyProductsPages()
 *
 */
export const verifyProductsPages = (): Cypress.Chainable<any> => {
    cy.logStep('Verify Products Landing page');
    productsPageLocators.productsLandingPage.pageUrl();
    productsPageLocators.productsLandingPage
        .pageHeader()
        .should('contain.text', 'Products');
    productsPageLocators.productsLandingPage.colHeaderId().should('be.visible');
    productsPageLocators.productsLandingPage.colHeaderId().should('be.visible');
    productsPageLocators.productsLandingPage
        .colHeaderName()
        .should('be.visible');
    productsPageLocators.productsLandingPage
        .colHeaderGender()
        .should('be.visible');
    productsPageLocators.productsLandingPage
        .colHeaderCreatedAt()
        .should('be.visible');

    cy.logStep('Verify View Products page is Loaded');
    dashboardLocators
        .tdRecords()
        .eq(1)
        .parent()
        .within(() => {
            dashboardLocators.viewButton().click();
        });
    productsPageLocators.viewProductsPage.productID().should('be.visible');
    productsPageLocators.viewProductsPage
        .productDefaultPrice()
        .should('be.visible');
    productsPageLocators.viewProductsPage.productCogs().should('be.visible');
    productsPageLocators.viewProductsPage
        .productPhysical()
        .should('be.visible');
    productsPageLocators.viewProductsPage
        .productDescription()
        .should('be.visible');
    productsPageLocators.viewProductsPage.productAbility().should('be.visible');

    // Edit Existing products page
    cy.logStep('Verify Edit Products page is Loaded');
    dashboardLocators.editButton().click();
    productsPageLocators.editProductsPage.editID().should('be.enabled');
    productsPageLocators.editProductsPage.editName().should('be.enabled');
    productsPageLocators.editProductsPage
        .editDefaultPrice()
        .should('be.enabled');
    productsPageLocators.editProductsPage.editCogs().should('be.enabled');
    productsPageLocators.editProductsPage
        .editDescription()
        .should('be.enabled');
    productsPageLocators.editProductsPage.editAbility().should('be.enabled');
    dashboardLocators.navigationMenuItemLink('products').click();

    // Create New products page
    cy.logStep('Verify Create New products page is Loaded');
    productsPageLocators.newProductsButton().click();
    productsPageLocators.newProductsPage.id().should('be.enabled');
    productsPageLocators.newProductsPage.name().should('be.enabled');
    productsPageLocators.newProductsPage.defaultPrice().should('be.enabled');
    productsPageLocators.newProductsPage.cogs().should('be.enabled');
    productsPageLocators.newProductsPage.description().should('be.enabled');
    productsPageLocators.newProductsPage.ability().should('be.enabled');
    dashboardLocators.cancelButton().click();

    return productsPageLocators.productsLandingPage
        .pageHeader()
        .should('be.visible');
};
