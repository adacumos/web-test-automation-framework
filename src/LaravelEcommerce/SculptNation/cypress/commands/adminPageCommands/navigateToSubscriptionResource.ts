import { dashboardLocators } from '../../support/locator_libraries';
import leSubscriptionsPageLocators from '../../support/locator_libraries/adminTool/leSubscriptionsPageLocators';

declare global {
    namespace Cypress {
        interface Chainable {
            navigateToSubscriptionResource: (
                resourceName: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to navigate to Subscription's linked resources page
 * @param resourceName linked Resource to subscription
 * cy.navigateToSubscriptionResource('User')
 *
 */
export const navigateToSubscriptionResource = (
    resourceName: string
): Cypress.Chainable<any> => {
    cy.logStep(`Navigate to Subscription ${resourceName} resource details`);
    let linkedElement;
    switch (resourceName) {
        case 'Users': {
            linkedElement =
                leSubscriptionsPageLocators.subscriptionDetailsPage.user();
            break;
        }
        case 'Plans': {
            linkedElement =
                leSubscriptionsPageLocators.subscriptionDetailsPage.subscriptionPlan();
            break;
        }
        default:
            throw new Error(
                'Selected Subscription Resource Link is Not yet supported'
            );
    }
    linkedElement
        .parent()
        .next()
        .within(() => {
            dashboardLocators.resourceLink(resourceName).click();
        });

    return cy
        .url()
        .should('contain', `nova/resources/${resourceName.toLowerCase()}`);
};
