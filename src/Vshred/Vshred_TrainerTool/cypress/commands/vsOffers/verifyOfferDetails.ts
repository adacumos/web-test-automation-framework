import { offersPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            verifyOfferDetails: (
                offerID: string,
                offerSource: string,
                offerName: string,
                offerPrice: string,
                offerProduct: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to verify VS Offer Details
 *
 * @param offerID the Offer ID
 * @param offerSource  the Offer Source
 * @param offerName  the Offer Name
 * @param offerPrice  the Offer Price
 * @param offerProduct  the Offer Product
 *
 * Example: cy.verifyOfferDetails('sku_turmeric_1','vshred','Turmeric Black','49','prod_turmeric_black')
 */
export const verifyOfferDetails = (
    offerID: string,
    offerSource: string,
    offerName: string,
    offerPrice: string,
    offerProduct: string
): Cypress.Chainable<any> => {
    cy.logStep('Verifying Offer Details');
    offersPageLocators.viewOffersPage
        .offerID()
        .next()
        .should('contain.text', offerID);
    offersPageLocators.viewOffersPage
        .offerSource()
        .next()
        .should('contain.text', offerSource);
    offersPageLocators.viewOffersPage
        .offerName()
        .next()
        .should('contain.text', offerName);
    offersPageLocators.viewOffersPage
        .offerPrice()
        .next()
        .should('contain.text', offerPrice);
    offersPageLocators.viewOffersPage
        .offerProduct()
        .next()
        .children()
        .should('contain.text', offerProduct);

    return offersPageLocators.offersLandingPage
        .pageHeader()
        .should('be.visible');
};
