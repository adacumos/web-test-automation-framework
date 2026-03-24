// import { Step } from '@badeball/cypress-cucumber-preprocessor';
import { consumerLandingPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            addBundleByBottleToCart: (
                bottleCount: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to add one bottle Product to Cart
 * @param bottleCount refers to the number of product bottle
 * example:  addProductByBottleToCart('one-bottle')
 */

export const addBundleByBottleToCart = (
    bottleCount: string
): Cypress.Chainable<any> => {
    cy.logStep(`Adding ${bottleCount} to cart`);

    consumerLandingPageLocators.productPage
        .bundleContainer()
        .should('be.visible')
        .scrollIntoView();
    switch (bottleCount.toLowerCase()) {
        case '1 bottle':
            consumerLandingPageLocators.productPage
                .bundleContainer()
                .within(() => {
                    consumerLandingPageLocators.productPage
                        .oneBunddle()
                        .click();
                    consumerLandingPageLocators.productPage
                        .addToOrder()
                        .click();
                });
            break;
        case '3 bottles':
            consumerLandingPageLocators.productPage
                .bundleContainer()
                .within(() => {
                    consumerLandingPageLocators.productPage
                        .threeBunddle()
                        .click();
                    consumerLandingPageLocators.productPage
                        .addToOrder()
                        .click();
                });
            break;
        case '6 bottles':
            consumerLandingPageLocators.productPage
                .bundleContainer()
                .within(() => {
                    consumerLandingPageLocators.productPage
                        .sixBunddle()
                        .click();
                    consumerLandingPageLocators.productPage
                        .addToOrder()
                        .click();
                });
            break;

        default:
            throw new Error('Supplement package selected is invalid');
    }
    return cy.logStep(`${bottleCount} added to customer cart`);
};
