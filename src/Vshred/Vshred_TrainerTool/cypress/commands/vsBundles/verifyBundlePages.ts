import {
    dashboardLocators,
    bundlesPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            verifyBundlePages: () => Cypress.Chainable<any>;
        }
    }
}

/** Command used to verify VS Bundle pages
 *
 * Example: cy.verifyBundlePages()
 *
 */
export const verifyBundlePages = (): Cypress.Chainable<any> => {
    cy.logStep('Verify Bundles Landing page');
    bundlesPageLocators.bundlesLandingPage.pageUrl();
    bundlesPageLocators.bundlesLandingPage
        .pageHeader()
        .should('contain.text', 'Bundles');
    bundlesPageLocators.bundlesLandingPage.colHeaderId().should('be.visible');
    bundlesPageLocators.bundlesLandingPage
        .colHeaderSource()
        .should('be.visible');
    bundlesPageLocators.bundlesLandingPage
        .colHeaderPrice()
        .should('be.visible');
    bundlesPageLocators.bundlesLandingPage
        .colHeaderTitle()
        .should('be.visible');
    bundlesPageLocators.bundlesLandingPage
        .colHeaderGender()
        .should('be.visible');
    bundlesPageLocators.bundlesLandingPage
        .colHeaderCreatedAt()
        .should('be.visible');

    cy.logStep('Verify View Bundles page is Loaded');
    dashboardLocators
        .tdRecords()
        .eq(0)
        .parent()
        .within(() => {
            dashboardLocators.viewButton().click();
        });
    bundlesPageLocators.viewBundlesPage.bundleID().should('be.visible');
    bundlesPageLocators.viewBundlesPage.bundleSource().should('be.visible');
    bundlesPageLocators.viewBundlesPage.bundleTitle().should('be.visible');
    bundlesPageLocators.viewBundlesPage
        .bundleDescription()
        .should('be.visible');
    bundlesPageLocators.viewBundlesPage.bundlePrice().should('be.visible');

    // Edit Existing Bundles page
    cy.logStep('Verify Edit Bundles page is Loaded');
    dashboardLocators.navigateMenu('Bundles').click();

    cy.intercept('**/api/bundles?**').as('bundlesSearch');
    bundlesPageLocators.bundlesLandingPage
        .filterBundleSource()
        .select('V Shred');
    cy.wait('@bundlesSearch');
    dashboardLocators
        .tdRecords()
        .eq(1)
        .parent()
        .within(() => {
            dashboardLocators.viewButton().click();
        });
    dashboardLocators.editButton().should('be.enabled').click();
    bundlesPageLocators.editBundlesPage.editTitle().should('be.visible');
    bundlesPageLocators.editBundlesPage.editDescription().should('be.visible');
    bundlesPageLocators.editBundlesPage.editPrice().should('be.visible');
    dashboardLocators.navigationMenuItemLink('Bundles').click();

    // Create New Bundles page
    cy.logStep('Verify Create New Bundles page is Loaded');
    bundlesPageLocators.newBundleButton().click();
    bundlesPageLocators.newBundlesPage.title().should('be.enabled');
    bundlesPageLocators.newBundlesPage.description().should('be.enabled');
    bundlesPageLocators.newBundlesPage.price().should('be.enabled');
    bundlesPageLocators.newBundlesPage.currency().should('be.enabled');
    bundlesPageLocators.newBundlesPage.addOffer().should('be.visible');
    dashboardLocators.cancelButton().click();

    return bundlesPageLocators.bundlesLandingPage
        .pageHeader()
        .should('be.visible');
};
