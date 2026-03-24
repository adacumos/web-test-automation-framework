import {
    dashboardLocators,
    lePlansPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validatePlansPages: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Plans Pages
 * cy.validatePlansPages()
 */
export const validatePlansPages = (): Cypress.Chainable<any> => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const headerNames: string[] = staticTestData.landingPage.tableHeader;
        cy.logStep('Verify Plans Landing page');
        lePlansPageLocators.plansLandingPage
            .createNewPlansButton()
            .should('be.visible');
        dashboardLocators.tableRecords().should('have.length.at.least', 25);

        cy.logStep('Verify Expected table columns are visible');
        headerNames.forEach((li) => {
            lePlansPageLocators.plansLandingPage
                .tableHeader(li)
                .scrollIntoView()
                .should('be.visible');
        });
    });

    cy.logStep('Searching an Existing Plans');
    const plansDetailsPageArray = Object.values(
        lePlansPageLocators.plansDetailsPage
    );
    const plansAddEditPageArray = Object.values(
        lePlansPageLocators.addEditPlansPage
    );
    let planSlug: string;
    lePlansPageLocators.plansLandingPage.sortPlanID().click();
    dashboardLocators
        .tableRecords()
        .eq(Math.floor(Math.random() * 25))
        .within(() => {
            lePlansPageLocators.plansLandingPage.slug().then(($value: any) => {
                planSlug = $value.text().trim();
            });
        })
        .then(() => {
            dashboardLocators
                .searchInput()
                .should('be.enabled')
                .clear()
                .type(`${planSlug}`);
            dashboardLocators.tableRecords().should('have.length', 1);
            dashboardLocators
                .getRecord(planSlug)
                .eq(0)
                .parents('tr')
                .within(() => {
                    dashboardLocators.editButton().should('be.visible');
                    // dashboardLocators.deleteButton().should('be.visible');
                    dashboardLocators.viewButton().should('be.visible').click();
                });
            cy.logStep('Verify Plans View page');
            plansDetailsPageArray.forEach((pageHeaders) => [
                pageHeaders().should('be.visible'),
            ]);
            lePlansPageLocators.plansDetailsPage
                .planSlug()
                .should('be.visible')
                .parent()
                .next()
                .should('contain.text', `${planSlug}`);

            cy.logStep('Verify Edit Plans Page');
            lePlansPageLocators.plansDetailsPage.editPlanButton().click();
            plansAddEditPageArray.forEach((pageHeader) => {
                pageHeader().should('be.enabled');
            });
            lePlansPageLocators
                .updateContinueEditingButton()
                .should('be.visible');
            lePlansPageLocators.cancelButton().click();
        });

    cy.logStep('Return to Plans Landing page');
    dashboardLocators.menuButton('Plans').click();

    cy.logStep('Verify Create New Plans Page');
    lePlansPageLocators.plansLandingPage.createNewPlansButton().click();
    plansAddEditPageArray.forEach((pageHeader) => {
        pageHeader().should('be.enabled');
    });
    lePlansPageLocators.createAndAddAnotherButton().should('be.visible');
    dashboardLocators.createButton().should('be.visible');

    cy.logStep('Return to Plans Landing page');
    cy.go('back');

    dashboardLocators.searchInput().should('be.enabled').clear();

    return dashboardLocators.pageHeader(`Plans`).should('be.visible');
};
