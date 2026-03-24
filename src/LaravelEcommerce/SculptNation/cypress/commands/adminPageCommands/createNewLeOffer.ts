import {
    dashboardLocators,
    leOffersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createNewLeOffer: (
                offerTitle: string,
                offerDescription: string,
                offerPrice: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create new Offer through LE Admin
 * @param offerTitle Offer Title
 * @param offerDescription Offer description
 * @param offerPrice offer amount
 * example:  createNewLeOffer('Burn 3.0','test_burn_3.0','test burn description details','997')
 */

export const createNewLeOffer = (
    offerTitle: string,
    offerDescription: string,
    offerPrice: string
): Cypress.Chainable<any> => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    const random = Cypress._.random(0, 1e5);
    let offerSku: string;
    let offerID: string;

    cy.logStep('Creating New Offers');
    leOffersPageLocators.offersLandingPage.createOffer().click();
    leOffersPageLocators.addOfferPage
        .offerTitle()
        .clear()
        .type(`${offerTitle}`);
    leOffersPageLocators.addOfferPage
        .offerSku()
        .clear()
        .type(`testOfferSku${random}`);
    leOffersPageLocators.addOfferPage
        .offerDescription()
        .clear()
        .type(`${offerDescription}`);
    leOffersPageLocators.addOfferPage.createOffer().click();
    dashboardLocators.successToast().should('be.visible');

    // create new Price
    dashboardLocators.selectTab('Prices').click();
    leOffersPageLocators.viewOfferPrices.createPriceButton().click();
    leOffersPageLocators.createNewPrice
        .newAmount()
        .clear()
        .type(`${offerPrice}`);
    leOffersPageLocators.createNewPrice.createPriceButton().click();
    dashboardLocators.successToast().should('be.visible');

    cy.logStep('Get new resource data');
    leOffersPageLocators.viewOfferPrices
        .priceDetailsAmount()
        .then(($value: any) => {
            offerPrice = $value.text().trim(); // eslint-disable-line no-param-reassign
        });

    leOffersPageLocators.viewOfferPrices
        .priceDetailsOfferLink(offerTitle)
        .click();

    leOffersPageLocators.offerDetailsPage
        .offerID()
        .parent()
        .next()
        .then(($value: any) => {
            offerID = $value.text().trim();
        });
    leOffersPageLocators.offerDetailsPage
        .offerTitle()
        .parent()
        .next()
        .then(($value: any) => {
            offerTitle = $value.text().trim(); // eslint-disable-line no-param-reassign
        });
    leOffersPageLocators.offerDetailsPage
        .offerSku()
        .parent()
        .next()
        .then(($value: any) => {
            offerSku = $value.text().trim();
        });

    return cy.readFile(filepath).then((data) => {
        data.push({
            offerID: `${offerID}`,
            offerTitle: `${offerTitle}`,
            offerPrice: `${offerPrice}`,
            offerSku: `${offerSku}`,
        });
        cy.writeFile(filepath, JSON.stringify(data, null, 2));
    });
};
