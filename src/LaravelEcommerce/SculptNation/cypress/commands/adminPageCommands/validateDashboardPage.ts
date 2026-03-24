import { dashboardLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateDashboardPage: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Dashboard page
 * cy.validateDashboardPage()
 */
export const validateDashboardPage = (): Cypress.Chainable<any> => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const cardPanel = staticTestData.cardPanelName;
        const { cardCharts } = staticTestData;

        cy.logStep('Verify Dashboard Card Panel Display');
        cardPanel.forEach((cards: any) => {
            dashboardLocators
                .dashboardCardPanel()
                .contains(cards)
                .should('be.visible');
        });

        cy.logStep('Verify Card Panel Values are visible');
        cardPanel.forEach((cards: any) => {
            dashboardLocators
                .dashboardCardPanel()
                .contains(cards)
                .parents('.px-3.mb-6')
                .within(() => {
                    dashboardLocators.cardPanelValue().should('be.visible');
                });
        });
        cy.logStep('Verify Card Panel Charts are loaded');
        cardCharts.forEach((charts: any) => {
            dashboardLocators
                .dashboardCardPanel()
                .contains(charts)
                .parents('.px-3.mb-6')
                .within(() => {
                    dashboardLocators.cardPanelChart().should('be.visible');
                });
        });
    });

    return dashboardLocators.logoutIcon().should('be.visible');
};
