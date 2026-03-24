import { dashboardLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            verifyVsPage: (vsMenu: string) => Cypress.Chainable<any>;
        }
    }
}
/** Command used to verify VS Pages
 *
 * Example: cy.verifyVsPage('Offers')
 *
 */
export const verifyVsPage = (vsMenu: string): Cypress.Chainable<any> => {
    switch (vsMenu) {
        case 'Offers':
            cy.verifyOffersPages();
            break;
        case 'Bundles':
            cy.verifyBundlePages();
            break;
        case 'Products':
            cy.verifyProductsPages();
            break;
        default:
            throw new Error(
                'Selected Page is not yet available for automated tests'
            );
    }
    return dashboardLocators.vsLogo().should('be.visible');
};
