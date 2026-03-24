import {
    dashboardLocators,
    leShippingFulfillmentLogsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateShippingFulfillmentLogsPages: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Shipping > Fulfillment Logs Pages
 * cy.validateShippingFulfillmentLogsPages()
 */
export const validateShippingFulfillmentLogsPages =
    (): Cypress.Chainable<any> => {
        cy.get('@staticTestData')
            .then((staticTestData: any) => {
                const { tableHeader } = staticTestData.landingPage;

                cy.logStep('Verify Shipping Fulfillment Logs Landing page');
                dashboardLocators
                    .tableRecords()
                    .should('have.length.at.least', 25);

                cy.logStep('Verify Expected table columns are visible');
                tableHeader.forEach((header: any) => {
                    dashboardLocators.tableHeader(header).should('be.visible');
                });

                cy.logStep('Randomly view a fulfillment log');
                dashboardLocators
                    .tableRecords()
                    .eq(Math.floor(Math.random() * 25))
                    .within(() => {
                        dashboardLocators
                            .viewButton()
                            .should('be.visible')
                            .click();
                    });
            })
            .then(() => {
                cy.logStep('Verify Shipping Fulfillment Log Details page');
                const elementsList: any[] = [
                    leShippingFulfillmentLogsPageLocators.fulfillmentLogDetailsPage.fulfillmentLogID(),
                    leShippingFulfillmentLogsPageLocators.fulfillmentLogDetailsPage.service(),
                    leShippingFulfillmentLogsPageLocators.fulfillmentLogDetailsPage.hasErrors(),
                    leShippingFulfillmentLogsPageLocators.fulfillmentLogDetailsPage.payload(),
                    leShippingFulfillmentLogsPageLocators.fulfillmentLogDetailsPage.response(),
                ];
                elementsList.forEach((pageFields) => {
                    cy.log(
                        'Verifying visibility of Shipping Fulfillment Log field:'
                    );
                    pageFields.should('be.visible');
                });
            });

        return dashboardLocators
            .pageHeader('Fulfillment Log Details')
            .should('be.visible');
    };
