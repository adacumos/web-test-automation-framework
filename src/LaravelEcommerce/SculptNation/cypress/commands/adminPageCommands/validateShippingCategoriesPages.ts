import {
    dashboardLocators,
    leShippingCategoriesPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateShippingCategoriesPages: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Shipping > Categories Pages
 * cy.validateShippingCategoriesPages()
 */
export const validateShippingCategoriesPages = (): Cypress.Chainable<any> => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { tableHeader } = staticTestData.landingPage;
        const { shippingCategory } = staticTestData;
        cy.logStep('Verify Shipping Categories Landing page');

        leShippingCategoriesPageLocators.categoriesLandingPage
            .createCategoryButton()
            .should('be.visible');
        dashboardLocators.tableRecords().should('have.length.at.least', 1);

        cy.logStep('Verify Expected table columns are visible');
        tableHeader.forEach((header: any) => {
            dashboardLocators.tableHeader(header).should('be.visible');
        });

        dashboardLocators
            .getRecord(shippingCategory)
            .parents('tr')
            .within(() => {
                dashboardLocators
                    .editButton()
                    .scrollIntoView()
                    .should('be.visible');
                dashboardLocators.viewButton().should('be.visible').click();
            });

        cy.logStep('Verify Shipping Category Details page');
        const elementsList: any[] = [
            leShippingCategoriesPageLocators.categoriesDetailsPage.categoryID(),
            leShippingCategoriesPageLocators.categoriesDetailsPage.categoryName(),
            leShippingCategoriesPageLocators.categoriesDetailsPage.detail(),
            leShippingCategoriesPageLocators.categoriesDetailsPage.strategy(),
            leShippingCategoriesPageLocators.categoriesDetailsPage.categoryClass(),
            leShippingCategoriesPageLocators.categoriesDetailsPage.carrier(),
            leShippingCategoriesPageLocators.categoriesDetailsPage.serviceLevel(),
        ];
        elementsList.forEach((pageFields) => {
            cy.log('Verifying visibility of Shipping Category input field:');
            pageFields.should('be.visible');
        });
    });

    return dashboardLocators
        .pageHeader('Category Details')
        .should('be.visible');
};
