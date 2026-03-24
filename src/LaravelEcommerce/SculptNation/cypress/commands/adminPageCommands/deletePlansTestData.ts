import { dashboardLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            deletePlansTestData: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to delete Plans test data created
 * example:  deletePlansTestData()
 */

export const deletePlansTestData = (): Cypress.Chainable<any> => {
    const deleteTestData = {
        host: Cypress.env('DB_HOST'),
        port: Cypress.env('DB_PORT'),
        database: Cypress.env('DB_DB'),
        user: Cypress.env('DB_USER'),
        password: Cypress.env('DB_PASSWORD'),
        query: '',
        params: '',
    };

    cy.get('@staticTestData').then((staticTestData: any) => {
        const { offerSku } = staticTestData.createNewPlan.offerDetails;
        deleteTestData.query = staticTestData.deleteTestData.deleteLinkedOffers;
        deleteTestData.params =
            staticTestData.createNewPlan.offerDetails.offerSku;

        cy.logStep('Searching Offer linked to created Plan');
        dashboardLocators.navigateMenu('Offers').click();
        dashboardLocators.searchInput().clear().type(`${offerSku} {enter}`);
        dashboardLocators
            .getRecord(offerSku)
            .parents('tr')
            .within(() => {
                dashboardLocators.viewButton().click();
            });

        cy.logStep('Detaching Products resouce from Offer');
        dashboardLocators.selectTab('Products').click();
        dashboardLocators
            .resourceTableRecord('Products')
            .eq(0)
            .within(() => {
                dashboardLocators.deleteButton().click();
            });
        dashboardLocators
            .confirmButton()
            .click()
            .then(() => {
                cy.logStep('Deleting Offer Test Data');
                cy.task('runSQLCmd', deleteTestData);
            });
    });
    cy.logStep('Detaching Plans Test Data');
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { planSlug } = staticTestData.createNewPlan;
        deleteTestData.query = staticTestData.deleteTestData.deleteTestPlan;
        deleteTestData.params = staticTestData.createNewPlan.planSlug;

        dashboardLocators.navigateMenu('Plans').click();
        cy.reload();
        dashboardLocators.searchInput().clear().type(`${planSlug} {enter}`);
        dashboardLocators
            .getRecord(planSlug)
            .parents('tr')
            .within(() => {
                dashboardLocators.viewButton().click();
            });
        cy.task('runSQLCmd', deleteTestData);

        cy.logStep('Verifying Test Plan record is not available');
        dashboardLocators.navigateMenu('Plans').click();
        cy.reload();
        dashboardLocators.searchInput().clear().type(`${planSlug} {enter}`);
    });

    return dashboardLocators.noMatchedRecord('Plan').should('be.visible');
};
