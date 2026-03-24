import {
    dashboardLocators,
    lePaymentsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            navigateToPaymentResource: (
                resourceName: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to navigate to Payment's linked resources page
 * @param resourceName linked Resource to subscription
 * cy.navigateToPaymentResource('User')
 *
 */
export const navigateToPaymentResource = (
    resourceName: string
): Cypress.Chainable<any> => {
    cy.logStep(`Navigate to Payment ${resourceName} resource details`);
    switch (resourceName) {
        case 'Orders': {
            lePaymentsPageLocators.paymentsDetailsPage
                .order()
                .parent()
                .next()
                .within(() => {
                    dashboardLocators.resourceLink(resourceName).click();
                });
            break;
        }
        case 'User-Payment-Methods': {
            lePaymentsPageLocators.paymentsDetailsPage
                .userPaymentMethod()
                .parent()
                .next()
                .within(() => {
                    dashboardLocators.resourceLink(resourceName).click();
                });
            break;
        }
        case 'Users': {
            dashboardLocators.selectTab('User').click();
            dashboardLocators
                .resourceTableRecord('Users')
                .eq(0)
                .within(() => {
                    dashboardLocators.resourceLink(resourceName).click();
                });
            break;
        }
        default:
            throw new Error(
                'Selected Payment Resource Link is Not yet supported'
            );
    }

    return cy
        .url()
        .should('contain', `nova/resources/${resourceName.toLowerCase()}`);
};
