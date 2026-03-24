import {
    dashboardLocators,
    leSubscriptionsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateSubscriptionResource: (
                resourceName: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to validate Subscription resource are synced with linked resource tables
 * @param resourceName name of the resource table linked
 * cy.validateSubscriptionResource(resource)
 */
export const validateSubscriptionResource = (
    resourceName: string
): Cypress.Chainable<any> => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const {
            subscriptionID,
            subscriptionStatus,
            renewsAt,
            offer,
            orderID,
            user,
        } = data[0];
        switch (resourceName) {
            case 'Users': {
                dashboardLocators.selectTab('Subscriptions').click();
                dashboardLocators
                    .resourceTableRecord('Subscriptions')
                    .contains(orderID)
                    .should('be.visible')
                    .parents('tr')
                    .within(() => {
                        cy.contains('td a', subscriptionID).should(
                            'be.visible'
                        );
                        cy.contains('td span', subscriptionStatus).should(
                            'be.visible'
                        );
                        cy.contains('td span', renewsAt).should('be.visible');
                        cy.contains('td span', offer).should('be.visible');
                    });
                break;
            }
            case 'Plans': {
                dashboardLocators.selectTab('Subscriptions').click();
                dashboardLocators
                    .searchInput()
                    .clear()
                    .type(subscriptionID)
                    .then(() => {
                        dashboardLocators
                            .resourceTableRecord('Subscriptions')
                            .contains(subscriptionID)
                            .should('be.visible')
                            .parents('tr')
                            .within(() => {
                                cy.contains(
                                    'td span',
                                    subscriptionStatus
                                ).should('be.visible');
                                cy.contains('td span', renewsAt).should(
                                    'be.visible'
                                );
                                cy.contains('td span', offer).should(
                                    'be.visible'
                                );
                                cy.contains('td span', orderID).should(
                                    'be.visible'
                                );
                                cy.contains('td span', user).should(
                                    'be.visible'
                                );
                            });
                    });
                break;
            }
            default:
                throw new Error('Selected resource name is not yet supported');
        }
        dashboardLocators
            .resourceTableRecord('Subscriptions')
            .contains(subscriptionID)
            .click();
    });

    return leSubscriptionsPageLocators.subscriptionDetailsPage
        .subscriptionDetailsHeader()
        .should('be.visible');
};
