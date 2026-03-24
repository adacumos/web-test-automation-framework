import { ordersPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            searchAndAddVsPlan: (planName: string) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to search for and add a plan to an Order
 *
 * @param planName the name of the plan
 *
 * @example
 * cy.searchAndAddVsPlan('BURN - 1 Bottle Monthly - $41')
 *
 */
export const searchAndAddVsPlan = (
    planName: string
): Cypress.Chainable<any> => {
    cy.intercept('/api/subscriptions/user/**').as('addPlan');

    ordersPageLocators.usersSubscriptionCart.addNewPlanButton().click();

    cy.logStep(`Search and add ${planName} plan`);

    ordersPageLocators.usersSubscriptionCart
        .searchPlanInputField()
        .type(planName);

    ordersPageLocators.usersSubscriptionCart.planRow(planName).within(() => {
        ordersPageLocators.usersSubscriptionCart.addPlanWidgetButton().click();
    });

    return cy.wait('@addPlan');
};
