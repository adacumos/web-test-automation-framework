import {
    dashboardLocators,
    leCheckoutFormsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateCheckoutFormPages: (
                formPage: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Checkout Form Pages
 * cy.validateCheckoutFormPages()
 */
export const validateCheckoutFormPages = (
    formPage: string
): Cypress.Chainable<any> => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const {
            bumperTemplateHeader,
            bumpersHeader,
            carouselsHeader,
            reviewsHeader,
        } = staticTestData.landingPage;
        const bumperDetailsPageArray = Object.values(
            leCheckoutFormsPageLocators.bumperPage.viewDetails
        );
        const carouselDetailsPageArray = Object.values(
            leCheckoutFormsPageLocators.carouselPage.viewDetails
        );
        const reviewDetailsPageArray = Object.values(
            leCheckoutFormsPageLocators.reviewPage.viewDetails
        );
        cy.logStep('Verify Expected page details are visible');
        switch (formPage) {
            case 'Bumper-Templates':
                bumperTemplateHeader.forEach((header: any) => {
                    dashboardLocators.tableHeader(header).should('be.visible');
                });

                break;
            case 'Bumpers':
                bumpersHeader.forEach((header: any) => {
                    dashboardLocators.tableHeader(header).should('be.visible');
                });

                cy.logStep(`Randomly view a ${formPage} details page`);
                dashboardLocators
                    .tableRecords()
                    .eq(0)
                    .within(() => {
                        dashboardLocators.viewButton().scrollIntoView().click();
                    });

                cy.logStep(`Verify ${formPage} Details page`);
                bumperDetailsPageArray.forEach((pageElements) => {
                    cy.log('Verifying page section visibility');
                    pageElements().should('be.visible');
                });
                break;

            case 'Carousels':
                carouselsHeader.forEach((header: any) => {
                    dashboardLocators.tableHeader(header).should('be.visible');
                });

                cy.logStep(`Randomly view a ${formPage} details page`);
                dashboardLocators
                    .tableRecords()
                    .eq(0)
                    .within(() => {
                        dashboardLocators.viewButton().scrollIntoView().click();
                    });

                cy.logStep(`Verify ${formPage} Details page`);
                carouselDetailsPageArray.forEach((pageElements) => {
                    cy.log('Verifying page section visibility');
                    pageElements().should('be.visible');
                });
                break;
            case 'Reviews':
                reviewsHeader.forEach((header: any) => {
                    dashboardLocators.tableHeader(header).should('be.visible');
                });
                cy.logStep(`Randomly view a ${formPage} details page`);
                dashboardLocators
                    .tableRecords()
                    .eq(0)
                    .within(() => {
                        dashboardLocators.viewButton().scrollIntoView().click();
                    });

                cy.logStep(`Verify ${formPage} Details page`);
                reviewDetailsPageArray.forEach((pageElements) => {
                    cy.log('Verifying page section visibility');
                    pageElements().should('be.visible');
                });
                break;
            default:
                throw new Error(
                    'Selected Checkout Form menu page is not available'
                );
        }
    });

    return cy
        .url()
        .should('include', `/nova/resources/${formPage.toLowerCase()}`);
};
