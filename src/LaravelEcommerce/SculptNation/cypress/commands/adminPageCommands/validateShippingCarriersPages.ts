import {
    dashboardLocators,
    leShippingCarriersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateShippingCarriersPages: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Shipping > Carriers Pages
 * cy.validateShippingCarriersPages()
 */
export const validateShippingCarriersPages = (): Cypress.Chainable<any> => {
    cy.get('@staticTestData')
        .then((staticTestData: any) => {
            const { tableHeader } = staticTestData.landingPage;
            cy.logStep('Verify Shipping Carriers Landing page');

            leShippingCarriersPageLocators.carriersLandingPage
                .createCarrierButton()
                .should('be.visible');
            dashboardLocators.tableRecords().should('have.length.at.least', 1);

            cy.logStep('Verify Expected table columns are visible');
            tableHeader.forEach((header: any) => {
                dashboardLocators.tableHeader(header).should('be.visible');
            });

            cy.logStep('Select existing Carrier');
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
        })
        .then(() => {
            cy.logStep('Verify Shipping Carrier Details page');
            const elementsList: any[] = [
                leShippingCarriersPageLocators.carriersDetailsPage.carrierID(),
                leShippingCarriersPageLocators.carriersDetailsPage.carrierName(),
                leShippingCarriersPageLocators.carriersDetailsPage.priority(),
                leShippingCarriersPageLocators.carriersDetailsPage.media(),
            ];
            elementsList.forEach((pageFields) => {
                cy.log('Verifying visibility of Shipping Carrier input field:');
                pageFields.should('be.visible');
            });
        });

    return dashboardLocators.pageHeader('Carrier Details').should('be.visible');
};
