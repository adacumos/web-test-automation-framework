import {
    dashboardLocators,
    leSubscriptionsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateSubscriptionsPages: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Subscription Pages
 * cy.validateSubscriptionsPages()
 */
export const validateSubscriptionsPages = (): Cypress.Chainable<any> => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const headerNames: string[] = staticTestData.landingPage.tableHeader;
        cy.logStep('Verify Subscriptions Landing page');

        leSubscriptionsPageLocators.subscriptionsLandingPage
            .createSubscriptionButton()
            .should('be.visible');
        dashboardLocators.tableRecords().should('have.length.at.least', 25);

        cy.logStep('Verify Expected table columns are visible');
        headerNames.forEach((header) => {
            leSubscriptionsPageLocators
                .tableHeader(header)
                .scrollIntoView()
                .should('be.visible');
        });
    });

    cy.logStep('Searching an Existing Subscription');
    let subscriptionID: string;
    dashboardLocators
        .tableRecords()
        .eq(Math.floor(Math.random() * 25))
        .within(() => {
            leSubscriptionsPageLocators.subscriptionsLandingPage
                .subscriptionId()
                .then(($value: any) => {
                    subscriptionID = $value.text().trim();
                });
        })
        .then(() => {
            dashboardLocators
                .searchInput()
                .should('be.enabled')
                .clear()
                .type(`${subscriptionID}`);
            dashboardLocators.tableRecords().should('have.length', 1);
            dashboardLocators
                .tableRecords()
                .eq(0)
                .within(() => {
                    leSubscriptionsPageLocators.subscriptionsLandingPage
                        .cancelSubscriptionButton()
                        .should('be.visible');
                    dashboardLocators
                        .editButton()
                        .scrollIntoView()
                        .should('be.visible');
                    dashboardLocators.viewButton().should('be.visible').click();
                });
            cy.logStep('Verify Subscription Details page');
            const subscriptionDetailsPageArray = Object.values(
                leSubscriptionsPageLocators.subscriptionDetailsPage
            );

            subscriptionDetailsPageArray.forEach((pageHeader) => {
                cy.log('Verifying visibility of page field');
                pageHeader().should('be.visible');
            });
        });

    return leSubscriptionsPageLocators.subscriptionDetailsPage
        .subscriptionDetailsHeader()
        .should('be.visible');
};
