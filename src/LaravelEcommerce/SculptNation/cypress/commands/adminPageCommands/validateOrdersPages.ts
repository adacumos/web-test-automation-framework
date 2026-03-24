import {
    dashboardLocators,
    leOrdersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateOrdersPages: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Order Pages
 * cy.validateOrdersPages()
 */
export const validateOrdersPages = (): Cypress.Chainable<any> => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const headerNames: string[] = staticTestData.landingPage.tableHeader;
        cy.logStep('Verify Orders Landing page');
        leOrdersPageLocators.ordersLandingPage
            .createNewOrderButton()
            .should('be.visible');
        dashboardLocators.tableRecords().should('have.length.at.least', 25);

        cy.logStep('Verify Expected table columns are visible');
        headerNames.forEach((header) => {
            leOrdersPageLocators
                .tableHeader(header)
                .scrollIntoView()
                .should('be.visible');
        });
    });

    cy.logStep('Searching an Existing Order');
    const orderDetailsPageArray = Object.values(
        leOrdersPageLocators.ordersDetailsPage
    );
    let orderID: string;
    dashboardLocators
        .tableRecords()
        .eq(Math.floor(Math.random() * 25))
        .within(() => {
            leOrdersPageLocators.ordersLandingPage
                .orderId()
                .then(($value: any) => {
                    orderID = $value.text().trim();
                });
        })
        .then(() => {
            dashboardLocators
                .searchInput()
                .should('be.enabled')
                .clear()
                .type(`${orderID}`);
            dashboardLocators.tableRecords().should('have.length', 1);
            dashboardLocators
                .tableRecords()
                .eq(0)
                .within(() => {
                    dashboardLocators
                        .editButton()
                        .scrollIntoView()
                        .should('be.visible');
                    dashboardLocators.viewButton().should('be.visible').click();
                });

            cy.logStep('Verify Order Details page');
            orderDetailsPageArray.forEach((pageHeaders) => {
                pageHeaders().should('be.visible');
            });
        });

    return dashboardLocators.pageHeader(`Order Details`).should('be.visible');
};
