import {
    dashboardLocators,
    lePaymentsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validatePaymentsPages: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Payments Pages
 * cy.validatePaymentsPages()
 */
export const validatePaymentsPages = (): Cypress.Chainable<any> => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const paymentsDetailsPageArray = Object.values(
            lePaymentsPageLocators.paymentsDetailsPage
        );
        const { tableHeader, graphs } = staticTestData.landingPage;
        cy.logStep('Verify Payments Landing page');

        lePaymentsPageLocators.paymentsLandingPage
            .createPaymentButton()
            .should('be.visible');
        dashboardLocators.tableRecords().should('have.length.at.least', 25);

        cy.logStep('Verify Expected graphs are visible');
        graphs.forEach((graphName: any) => {
            lePaymentsPageLocators.paymentsLandingPage
                .graphTitle(graphName)
                .scrollIntoView()
                .should('be.visible');
        });

        cy.logStep('Verify Expected table columns are visible');
        tableHeader.forEach((header: any) => {
            dashboardLocators
                .tableHeader(header)
                .scrollIntoView()
                .should('be.visible');
        });

        cy.logStep('Searching an Existing Payment by transaction reference');
        let paymentID: string;
        dashboardLocators
            .tableRecords()
            .eq(Math.floor(Math.random() * 5))
            .within(() => {
                lePaymentsPageLocators.paymentsLandingPage
                    .paymentID()
                    .then(($value: any) => {
                        paymentID = $value.text().trim();
                    });
            })
            .then(() => {
                dashboardLocators
                    .searchInput()
                    .should('be.enabled')
                    .clear()
                    .type(`${paymentID}`);
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
            });

        cy.logStep('Verify Payments Details page');
        paymentsDetailsPageArray.forEach((pageHeaders) => {
            pageHeaders().should('be.visible');
        });
    });

    return lePaymentsPageLocators.paymentsDetailsPage
        .paymentDetailsHeader()
        .should('be.visible');
};
