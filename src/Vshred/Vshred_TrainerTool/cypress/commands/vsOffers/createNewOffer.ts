import {
    dashboardLocators,
    offersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createNewOffer: (
                newOfferID: string,
                newOfferPrice: string,
                newPurchLimit: number,
                newQuantity: number,
                newProduct: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/** Command used to create New Offer
 *
 * @param newOfferId the new Offer ID
 * @param newOfferPrice  the Offer price
 * @param newPurchLimit the purchase limit
 * @param newQuantity the default quantity
 * @param newProduct the linked product ID
 * Example: cy.createNewOffer('sku_offer','199','1','1','prod_Offer',)
 */
export const createNewOffer = (
    newOfferID: string,
    newOfferPrice: string,
    newPurchLimit: number,
    newQuantity: number,
    newProduct: string
): Cypress.Chainable<any> => {
    cy.log('Check if Offer ID exists');
    cy.searchOffers('ID', newOfferID);

    if (dashboardLocators.noDataAvailable()) {
        cy.logStep(`Creating New Offer for ProductID: ${newProduct}`);
        offersPageLocators.newOfferButton().click();
        offersPageLocators.newOffersPage.Sku().clear().type(`${newOfferID}`);
        offersPageLocators.newOffersPage.active().click();
        offersPageLocators.newOffersPage
            .price()
            .clear()
            .type(`${newOfferPrice}`);
        offersPageLocators.newOffersPage
            .purchaseLimit()
            .clear()
            .type(`${newPurchLimit}`);
        offersPageLocators.newOffersPage
            .quantity()
            .clear()
            .type(`${newQuantity}`);
        offersPageLocators.newOffersPage
            .product()
            .clear()
            .type(`${newProduct}`);
        offersPageLocators.newOffersPage.matchedProductSelect(`${newProduct}`);
        dashboardLocators.saveButton().click();
    } else {
        throw new Error('Offer ID Already Exists');
    }

    return offersPageLocators.viewOffersPage
        .offerID()
        .next()
        .should('be.visible');
};
