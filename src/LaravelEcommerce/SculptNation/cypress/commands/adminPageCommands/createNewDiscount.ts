import {
    dashboardLocators,
    discountsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createNewDiscount: (
                discountType: string,
                discounRate: string,
                discountStarts: string,
                discountEnds: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create new Discount through LE Admin
 * @param discountType Percentage or Flat rate
 * @param discountRate Discount percentage or amount value
 * @param discountStarts Start date discount becomes active
 * @param discountEnds End Date discount is active
 * example:  createNewDiscount('BurnNow','30','2023-07-01', 2023-09-30','percentage','burn30')
 */

export const createNewDiscount = (
    discountType: string,
    discountRate: string,
    discountStarts: string,
    discountEnds: string
): Cypress.Chainable<any> => {
    cy.logStep('Verify New Discount is unique');
    dashboardLocators.resourceTable().should('be.visible');
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    const random = Cypress._.random(0, 1e4);
    let discountID: string;
    let discountTitle: string;
    let couponCode: string;

    cy.logStep('Creating New Discount');
    discountsPageLocators.discountsLandingPage.createNewDiscounts().click();
    discountsPageLocators.addEditDiscountPage
        .discountTitle()
        .clear()
        .type(`TestDisc${random}`);
    discountsPageLocators.addEditDiscountPage
        .discountType()
        .select(discountType);
    discountsPageLocators.addEditDiscountPage
        .discountRate()
        .clear()
        .type(discountRate);
    discountsPageLocators.addEditDiscountPage
        .discountStarts()
        .parent()
        .click()
        .type(discountStarts)
        .then(() => {
            discountsPageLocators.addEditDiscountPage.discountRate().click();
        });
    discountsPageLocators.addEditDiscountPage
        .discountEnds()
        .parent()
        .click()
        .type(discountEnds)
        .then(() => {
            discountsPageLocators.addEditDiscountPage.discountRate().click();
        });
    discountsPageLocators.addEditDiscountPage
        .discountCouponCode()
        .clear()
        .type(`CC${random}`);
    discountsPageLocators.addEditDiscountPage
        .discountAvailableToAdmin()
        .click();
    dashboardLocators.createButton().click();
    dashboardLocators.successToast().should('be.visible');

    cy.reload();
    cy.logStep('Get new resource data');
    discountsPageLocators.discountsDetailsPage
        .discountID()
        .parent()
        .next()
        .then(($value: any) => {
            discountID = $value.text().trim();
        });
    discountsPageLocators.discountsDetailsPage
        .discountTitle()
        .parent()
        .next()
        .then(($value: any) => {
            discountTitle = $value.text().trim();
        });
    discountsPageLocators.discountsDetailsPage
        .discountCouponCode()
        .parent()
        .next()
        .then(($value: any) => {
            couponCode = $value.text().trim();
        });

    return cy.readFile(filepath).then((data) => {
        data.push({
            discountID: `${discountID}`,
            discountTitle: `${discountTitle}`,
            couponCode: `${couponCode}`,
        });
        cy.writeFile(filepath, JSON.stringify(data, null, 2));
    });
};
