import {
    dashboardLocators,
    discountsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateDiscountsPages: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Finance Discounts Pages
 * cy.validateDiscountsPages()
 *
 */
export const validateDiscountsPages = (): Cypress.Chainable<any> => {
    cy.logStep('Verify Discounts Landing page');
    const discountsDetailsPageArray = Object.values(
        discountsPageLocators.discountsDetailsPage
    );
    const discountAddEditPageArray = Object.values(
        discountsPageLocators.addEditDiscountPage
    );
    discountsPageLocators.discountsLandingPage
        .createNewDiscounts()
        .should('be.visible');
    dashboardLocators.tableRecords().should('have.length.at.least', 10);

    cy.logStep('Verify Discounts Details page');
    dashboardLocators
        .tableRecords()
        .eq(0)
        .within(() => {
            dashboardLocators
                .viewButton()
                .scrollIntoView()
                .should('be.visible')
                .click();
            dashboardLocators.editButton().should('be.visible');
        });
    cy.logStep('Verify Discount Details page elements');
    discountsDetailsPageArray.forEach((pageHeaders) => {
        pageHeaders().should('be.visible');
    });

    cy.logStep('Verify Discount Edit page elements');
    discountsPageLocators.discountsDetailsPage.editDiscountButton().click();
    discountAddEditPageArray.forEach((inputFields) => {
        inputFields().should('be.enabled');
    });

    discountsPageLocators.cancelButton().click();
    dashboardLocators.menuButton('Discounts').click();

    return dashboardLocators.pageHeader('Discounts').should('be.visible');
};
