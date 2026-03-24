import { Step } from '@badeball/cypress-cucumber-preprocessor';
import { consumerLandingPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            addProductByBottleToCart: (
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

export const addProductByBottleToCart = (
    bottleCount: string
): Cypress.Chainable<any> => {
    cy.logStep(`Adding ${bottleCount} to cart`);

    switch (bottleCount.toLowerCase()) {
        case 'one bottle':
            consumerLandingPageLocators.productPage
                .oneTimeDeliveryCheckbox()
                .click();
            consumerLandingPageLocators.productPage
                .oneBottleHeader()
                .parent('div.single-option')
                .within(() => {
                    consumerLandingPageLocators.productPage
                        .addToOrderButton()
                        .click();
                });
            break;
        case 'three bottle':
            consumerLandingPageLocators.productPage
                .threeBottleHeader()
                .parent('div.single-option')
                .within(() => {
                    consumerLandingPageLocators.productPage
                        .addToOrderButton()
                        .click();
                });
            break;
        case 'six bottle':
            consumerLandingPageLocators.productPage
                .sixBottleHeader()
                .parent('div.single-option')
                .within(() => {
                    consumerLandingPageLocators.productPage
                        .addToOrderButton()
                        .click();
                });
            break;
        case '1 bottle':
            consumerLandingPageLocators.productPage
                .oneBottleHeader()
                .parent('div.single-option')
                .within(() => {
                    consumerLandingPageLocators.productPage
                        .addToOrderButton()
                        .click();
                });
            break;
        case '2 bottles':
            consumerLandingPageLocators.productPage
                .twoBottleHeader()
                .parent('div.single-option')
                .within(() => {
                    consumerLandingPageLocators.productPage
                        .addToOrderButton()
                        .click();
                });
            break;
        case '3 bottles':
            consumerLandingPageLocators.productPage
                .threeBottleHeader()
                .parent('div.single-option')
                .within(() => {
                    consumerLandingPageLocators.productPage
                        .addToOrderButton()
                        .click();
                });
            break;
        case '4 bottles':
            consumerLandingPageLocators.productPage
                .fourBottleHeader()
                .parent('div.single-option')
                .within(() => {
                    consumerLandingPageLocators.productPage
                        .addToOrderButton()
                        .click();
                });
            break;
        case '6 bottles':
            consumerLandingPageLocators.productPage
                .sixBottleHeader()
                .parent('div.single-option')
                .within(() => {
                    consumerLandingPageLocators.productPage
                        .addToOrderButton()
                        .click();
                });
            break;

        default:
            throw new Error('Supplement package selected is invalid');
    }

    /* eslint-disable cypress/no-unnecessary-waiting */
    cy.wait(3000); // Expected delay in checking shipment information is already received
    cy.get('body').then(($body) => {
        if (
            $body.find(
                ':contains("Tell Us Where To Ship Your Supplement"):visible'
            ).length > 0
        ) {
            if ($body.find('h4.modal-title:visible').length > 0) {
                Step(
                    new Mocha.Context(),
                    'The user fills out VS shipping order form'
                );
            } else if ($body.find('h2.m-title:visible').length > 0) {
                Step(
                    new Mocha.Context(),
                    'The user fills out the shipping order form'
                );
            } else {
                throw new Error('Shipment form is not yet supported');
            }
        }
    });
    return cy.logStep(`${bottleCount} added to customer cart`);
};
