import {
    dashboardLocators,
    offersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            verifyOffersPages: () => Cypress.Chainable<any>;
        }
    }
}

/** Command used to verify VS Offers Pages
 *
 * Example: cy.verifyOffersPages()
 *
 */
export const verifyOffersPages = (): Cypress.Chainable<any> => {
    cy.logStep('Verifying Offers Landing page');
    offersPageLocators.offersLandingPage
        .pageHeader()
        .should('contain.text', 'Offers');
    offersPageLocators.offersLandingPage.colHeaderId().should('be.visible');
    offersPageLocators.offersLandingPage.colHeaderName().should('be.visible');
    offersPageLocators.offersLandingPage.colHeaderSource().should('be.visible');
    offersPageLocators.offersLandingPage
        .colHeaderCreatedAt()
        .should('be.visible');
    dashboardLocators.tdRecords().should('have.length.at.least', 25);
    offersPageLocators.newOfferButton().should('be.enabled');

    // View Offers page
    cy.logStep('Verifying View Offers Page is loaded');
    dashboardLocators
        .tdRecords()
        .eq(1)
        .parent()
        .within(() => {
            dashboardLocators.viewButton().click();
        });
    offersPageLocators.viewOffersPage.offerID().should('be.visible');
    offersPageLocators.viewOffersPage.offerSource().should('be.visible');
    offersPageLocators.viewOffersPage.offerName().should('be.visible');
    offersPageLocators.viewOffersPage.offerPrice().should('be.visible');
    offersPageLocators.viewOffersPage.offerProduct().should('be.visible');
    dashboardLocators.editButton().should('be.enabled').click();

    // Edit Existing Offer page
    cy.logStep('Verifying Edit Offers Page is loaded');
    offersPageLocators.editOffersPage.editID().should('be.visible');
    offersPageLocators.editOffersPage.active().should('be.visible');
    offersPageLocators.editOffersPage.editPrice().should('be.enabled');
    offersPageLocators.editOffersPage.editProduct().should('be.visible');
    cy.contains('span.nav-label', 'Offers').click();

    // Create new Offer Page
    cy.logStep('Verifying Created New Offers Page is loaded');
    offersPageLocators.newOfferButton().click();
    offersPageLocators.newOffersPage.Sku().should('be.enabled');
    offersPageLocators.newOffersPage.active().should('be.enabled');
    offersPageLocators.newOffersPage.price().should('be.enabled');
    offersPageLocators.newOffersPage.purchaseLimit().should('be.enabled');
    offersPageLocators.newOffersPage.quantity().should('be.enabled');
    offersPageLocators.newOffersPage.product().should('be.visible');
    dashboardLocators.saveButton().should('be.enabled');
    dashboardLocators.cancelButton().should('be.enabled').click();

    return offersPageLocators.offersLandingPage
        .pageHeader()
        .should('be.visible');
};
