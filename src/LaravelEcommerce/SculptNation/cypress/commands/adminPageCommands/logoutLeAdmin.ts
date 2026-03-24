import { dashboardLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            logoutLeAdmin: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to logout of LE Admin
 * example:  logoutLeAdmin()
 */

export const logoutLeAdmin = (): Cypress.Chainable<any> => {
    cy.logStep(`Logging out of LE Admin`);
    dashboardLocators
        .logoutIcon()
        .click()
        .then(() => {
            dashboardLocators.logoutButton().click();
        });
    return cy.url().should('contain', 'nova/login');
};
