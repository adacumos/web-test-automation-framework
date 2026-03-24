import {
    vsDashboardLocators,
    vsUsersPageLocators,
    vsProcessOrderPageLocators,
    consumerLandingPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            addOfferVsAdmin: (offerSku: any, offerTitle: any) => void;
        }
    }
}
/**
 * command used to add Program or Product offer through VS Admin
 * @param offerSku unique offer sku
 * @param offerTitle product or program title
 * example:  addOfferVsAdmin('sku_gold_plus_accelerator_3_months', 'V SHRED Accelerator Program - 3 Months')
 */

export const addOfferVsAdmin = (offerSku: any, offerTitle: any): void => {
    cy.logStep(`Adding Offer ${offerTitle} to client user`);
    vsUsersPageLocators.viewTab.newOrderButton().click();
    cy.url().should('include', '/process-order/');

    const orderSKUlist = offerSku;
    const orderTitleList = offerTitle;

    orderSKUlist.forEach((sku: string) => {
        vsProcessOrderPageLocators.addOfferButtton().click();
        vsProcessOrderPageLocators.selectTabOffers().click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(5000); // expected delays with loading all offers

        vsProcessOrderPageLocators.searchProductInputBox().clear().type(sku);
        vsDashboardLocators
            .getRecord(sku)
            .eq(0)
            .should('be.visible')
            .parent()
            .within(() => {
                vsProcessOrderPageLocators.addOfferButtton().click();
            });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000); // expected delays in adding orders to cart
    });
    orderTitleList.forEach((productTitle: string) => {
        vsDashboardLocators.getRecord(productTitle).should('be.visible');
    });

    vsProcessOrderPageLocators.placeOrderButton().click();

    cy.logStep('Verify cart order details');
    orderTitleList.forEach((orderTitle: string) => {
        vsProcessOrderPageLocators
            .cartOrderDetails()
            .should('be.visible')
            .then(($payCart) => {
                cy.wrap($payCart).contains(orderTitle).should('be.visible');
            });
    });
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000); // expected delays in loading CC related iframe elements in VS Admin
    cy.logStep('processing order payment');
    vsProcessOrderPageLocators.processPayment.selectTabNewCard().click();
    cy.logStep('Fill in payment information');
    consumerLandingPageLocators.orderForm
        .creditCardNumber()
        .type(Cypress.env('CREDIT_CARD_NUMBER'));
    consumerLandingPageLocators.orderForm
        .expirationDate()
        .type(
            Cypress.env('CREDIT_CARD_EXPIRATION_MONTH') +
                Cypress.env('CREDIT_CARD_EXPIRATION_YEAR').toString().substr(-2)
        );
    consumerLandingPageLocators.orderForm
        .securityCode()
        .type(Cypress.env('CREDIT_CARD_CVV'));
    consumerLandingPageLocators.orderForm.postalCode().type('89120');
    vsProcessOrderPageLocators.processPayment.submitPaymentButton().click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000); // expected delays in posting order

    cy.logStep('Verify order is posted successfully');
    vsDashboardLocators
        .getRecord('Submitted For Settlement')
        .should('be.visible')
        .siblings()
        .contains('true')
        .should('be.visible');

    cy.logStep('navigate back to Users page');
    vsProcessOrderPageLocators.clientEmailLink().click();
    cy.url().should('contain', '/admin/users/');
};
