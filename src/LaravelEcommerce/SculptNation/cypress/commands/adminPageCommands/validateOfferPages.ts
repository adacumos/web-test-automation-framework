import {
    dashboardLocators,
    leOffersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateOfferPages: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Offer Pages
 * cy.validateOfferPages()
 */
export const validateOfferPages = (): Cypress.Chainable<any> => {
    cy.logStep('Verify Offers Landing page');
    const leOffersDetailsPageArray = Object.values(
        leOffersPageLocators.offerDetailsPage
    );
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { offerSku } = staticTestData.editOffer;

        leOffersPageLocators.offersLandingPage
            .createOffer()
            .should('be.visible');
        dashboardLocators.tableRecords().should('have.length', 25);

        cy.logStep('Searching Offers');
        dashboardLocators
            .searchInput()
            .should('be.enabled')
            .clear()
            .type(`${offerSku}`);
        dashboardLocators.tableRecords().should('have.length', 1);
        dashboardLocators
            .getRecord(`${offerSku}`)
            .parent()
            .within(() => {
                dashboardLocators.editButton().should('be.visible');
                dashboardLocators.viewButton().should('be.visible').click();
            });

        cy.logStep('Verify Offers Details page');
        leOffersDetailsPageArray.forEach((pageHeader) => {
            pageHeader().should('be.visible');
        });

        leOffersPageLocators.offerDetailsPage
            .offerSku()
            .parent()
            .next()
            .contains(`${offerSku}`);

        cy.logStep('Verify Edit Offers Page');
        leOffersPageLocators.editOfferButton().click();
        leOffersPageLocators.editOfferPage.offerTitle().should('be.enabled');
        leOffersPageLocators.editOfferPage.offerSku().should('be.enabled');
        leOffersPageLocators.editOfferPage
            .offerDescription()
            .should('be.enabled');
        leOffersPageLocators.editOfferPage.addNewMedia().should('be.visible');
        leOffersPageLocators.updateContinueEditingButton().should('be.visible');
        leOffersPageLocators.updateContinueEditingButton().should('be.visible');
        leOffersPageLocators.editOfferPage
            .updateOfferButton()
            .should('be.visible');
        leOffersPageLocators.cancelButton().click();

        cy.logStep('Return to Offers Landing page');
        cy.go('back');

        cy.logStep('Verify Create New Offers Page');
        leOffersPageLocators.offersLandingPage.createOffer().click();
        leOffersPageLocators.addOfferPage.offerTitle().should('be.enabled');
        leOffersPageLocators.addOfferPage.offerSku().should('be.enabled');
        leOffersPageLocators.addOfferPage
            .offerDescription()
            .should('be.enabled');
        leOffersPageLocators.addOfferPage.addNewMedia().should('be.visible');
        leOffersPageLocators.createAndAddAnotherButton().should('be.visible');
        leOffersPageLocators.addOfferPage.createOffer().should('be.visible');
        leOffersPageLocators.cancelButton().click();

        cy.logStep('Return to Offers Landing page');
        cy.go('back');

        dashboardLocators.searchInput().should('be.enabled').clear();
        dashboardLocators.tableRecords().should('have.length', 25);
    });
    return dashboardLocators.pageHeader(`Offers`).should('be.visible');
};
