import { bundlesPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            verifyBundleDetails: (
                bundleID: string,
                bundleSource: string,
                bundleTitle: string,
                bundleDescription: string,
                bundlePrice: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to verify Bundles details
 *
 * @param bundleID the bundle id
 * @param bundleSource the bundle source reference
 * @param bundleTitle the bundle title
 * @param bundleDescription the bundle description
 * @param bundlePrice the bundle price
 * cy.verifyBundleDetails('bun_61b40e3f6f313','vshred', 'V SHRED ACCELERATOR', 'Gold Coaching Plus Plan', '$2997.00')
 *
 */
export const verifyBundleDetails = (
    bundleID: string,
    bundleSource: string,
    bundleTitle: string,
    bundleDescription: string,
    bundlePrice: string
): Cypress.Chainable<any> => {
    cy.logStep(`Verify Bundle Details`);
    bundlesPageLocators.viewBundlesPage
        .bundleID()
        .parent()
        .next()
        .should('contain.text', `${bundleID}`);
    bundlesPageLocators.viewBundlesPage
        .bundleSource()
        .parent()
        .next()
        .should('contain.text', `${bundleSource}`);
    bundlesPageLocators.viewBundlesPage
        .bundleTitle()
        .parent()
        .next()
        .should('contain.text', `${bundleTitle}`);
    bundlesPageLocators.viewBundlesPage
        .bundleDescription()
        .parent()
        .next()
        .should('include.text', `${bundleDescription}`);
    bundlesPageLocators.viewBundlesPage
        .bundlePrice()
        .parent()
        .next()
        .should('contain.text', `${bundlePrice}`);

    return bundlesPageLocators.bundlesLandingPage
        .pageHeader()
        .should('be.visible');
};
