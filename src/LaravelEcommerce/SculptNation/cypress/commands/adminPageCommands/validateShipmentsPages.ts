import {
    dashboardLocators,
    leShipmentsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateShipmentsPages: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Shipping > Shipments Pages
 * cy.validateShipmentsPages()
 */
export const validateShipmentsPages = (): Cypress.Chainable<any> => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { tableHeader } = staticTestData.landingPage;
        const shipmentDetailsPageArray = Object.values(
            leShipmentsPageLocators.shipmentsDetailsPage
        );
        cy.logStep('Verify Shipments Landing page');

        // leShipmentsPageLocators.shipmentsLandingPage
        //     .createShipmentButton()
        //     .should('be.visible');
        dashboardLocators.tableRecords().should('have.length.at.least', 25);

        cy.logStep('Verify Expected table columns are visible');
        tableHeader.forEach((header: any) => {
            dashboardLocators.tableHeader(header).should('be.visible');
        });

        cy.logStep('Searching an Existing Shipment by reference number');
        let referenceNumber: string;
        dashboardLocators
            .tableRecords()
            .eq(Math.floor(Math.random() * 25))
            .within(() => {
                leShipmentsPageLocators.shipmentsLandingPage
                    .shipmentReferenceNumber()

                    .then(($value: any) => {
                        referenceNumber = $value.text().trim();
                    });
            })
            .then(() => {
                dashboardLocators
                    .searchInput()
                    .should('be.enabled')
                    .clear()
                    .type(`${referenceNumber}`);
                dashboardLocators.tableRecords().should('have.length', 1);
                dashboardLocators
                    .tableRecords()
                    .eq(0)
                    .within(() => {
                        dashboardLocators
                            .editButton()
                            .scrollIntoView()
                            .should('be.visible');
                        dashboardLocators
                            .viewButton()
                            .should('be.visible')
                            .click();
                    });
            })
            .then(() => {
                cy.logStep('Verify Shipment Details page');
                leShipmentsPageLocators
                    .shipmentDetailsHeader(referenceNumber)
                    .should('be.visible');

                shipmentDetailsPageArray.forEach((pageHeaders) => {
                    pageHeaders().should('be.visible');
                });
            });
    });

    return dashboardLocators
        .pageHeader('Shipment Details')
        .should('be.visible');
};
