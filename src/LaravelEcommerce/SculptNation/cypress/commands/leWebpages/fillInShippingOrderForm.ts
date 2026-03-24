import { consumerLandingPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            fillInShippingOrderForm: (
                firstName: string,
                lastName: string,
                street: string,
                city: string,
                state: string,
                postalCode: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to fill out the order form in Vshred sales funnels.
 * @example
 * @param firstName shipping first name
 * @param lastName shipping last name
 * @param street shipping street
 * @param city shipping city
 * @param state shipping state
 * @param postalCode shipping postal code
 * @example cy.fillInShippingOrderForm('John', 'Doe', 'United States of America', '4530 South Decatur Boulevard', 'Las Vegas', 'Nevada', '89103')
 */

export const fillInShippingOrderForm = (
    firstName: string,
    lastName: string,
    street: string,
    city: string,
    state: string,
    postalCode: string
): void => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // Expected delay in checking shipment information is already received
    cy.get('body').then(($body) => {
        if ($body.text().includes('Tell Us Where To Ship Your Supplements')) {
            cy.intercept('POST', '/api/user/order').as('waitShippingDetails');
            consumerLandingPageLocators.checkoutPage.billingDetails
                .firstName()
                .should('be.visible')
                .type(firstName);
            consumerLandingPageLocators.checkoutPage.billingDetails
                .lastName()
                .type(lastName);
            consumerLandingPageLocators.checkoutPage.billingDetails
                .streetAddress()
                .type(street);
            consumerLandingPageLocators.checkoutPage.billingDetails
                .city()
                .type(city);
            consumerLandingPageLocators.checkoutPage.billingDetails
                .state()
                .select(state);
            consumerLandingPageLocators.checkoutPage.billingDetails
                .postCode()
                .type(postalCode);
            consumerLandingPageLocators.supplementOrderForm
                .saveAddress()
                .click();

            cy.wait('@waitShippingDetails');
        }
        consumerLandingPageLocators.loader().should('not.exist');
    });
};
