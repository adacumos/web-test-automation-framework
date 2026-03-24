import {
    dashboardLocators,
    leOffersPageLocators,
    lePlansPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createNewLePlan: (
                intervalLength: string,
                offerDetails: any,
                productDetails: any
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create new Plan through LE Admin

 * @param intervalLength Plan Interval
 * @param offerDetails Details of the Offer to be linked to the Plan
 * example:  createNewLePlan('burn-fast','1')
 */

export const createNewLePlan = (
    intervalLength: string,
    offerDetails: any,
    productDetails: any
): Cypress.Chainable<any> => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    const random = Cypress._.random(0, 1e5);
    let planSlug: string;
    let offerID: string;
    let offerTitle: string;
    let offerPrice: string;
    let offerSku: string;

    cy.logStep('Creating New Plan');
    lePlansPageLocators.plansLandingPage.createNewPlansButton().click();
    lePlansPageLocators.addEditPlansPage
        .planSlug()
        .clear()
        .type(`TestMonthlyPlan${random}`);
    lePlansPageLocators.addEditPlansPage
        .planIntervalLength()
        .clear()
        .type(intervalLength);
    dashboardLocators.createButton().click();
    lePlansPageLocators.plansDetailsPage
        .planSlug()
        .parent()
        .next()
        .then(($value: any) => {
            planSlug = $value.text().trim();
        });

    cy.logStep('Creating Offer for the new Plan');
    dashboardLocators.selectTab('Offer').click();
    dashboardLocators.createResourceButton('Offers').click();

    leOffersPageLocators.addOfferPage
        .offerTitle()
        .clear()
        .type(offerDetails.offerTitle);
    leOffersPageLocators.addOfferPage
        .offerSku()
        .clear()
        .type(offerDetails.offerSku + random);
    leOffersPageLocators.addOfferPage.createOffer().click();

    cy.logStep('Attaching Product');
    dashboardLocators.selectTab('Product').click();
    dashboardLocators.attachResourceButton('Products').click();
    lePlansPageLocators.attachProduct.searchTrigger().click();
    lePlansPageLocators.attachProduct
        .searchInputTextbox()
        .clear()
        .type(productDetails.productName);
    lePlansPageLocators.attachProduct.selectSearchResult().click();
    lePlansPageLocators.attachProduct
        .quantity()
        .clear()
        .type(productDetails.productQuantity);
    lePlansPageLocators.attachProduct.attachProductButton().click();

    cy.logStep('Adding Offer Price');
    dashboardLocators.selectTab('Prices').click();
    dashboardLocators.createResourceButton('Prices').click();
    leOffersPageLocators.createNewPrice
        .offerTitle()
        .should('contain', offerDetails.offerTitle);
    leOffersPageLocators.createNewPrice
        .newAmount()
        .clear()
        .type(offerDetails.offerPrice);
    leOffersPageLocators.createNewPrice.createPriceButton().click();
    dashboardLocators.successToast().should('be.visible');

    cy.reload();
    cy.logStep('Get new resource data');
    // leOffersPageLocators.viewOfferPrices
    //     .priceDetailsAmount()
    //     .then(($value: any) => {
    //         offerPrice = $value.text().trim();
    //     });
    // leOffersPageLocators.viewOfferPrices
    //     .priceDetailsOfferLink(offerDetails.offerTitle)
    //     .click();

    // leOffersPageLocators.offerDetailsPage
    //     .offerID()
    //     .parent()
    //     .next()
    //     .then(($value: any) => {
    //         offerID = $value.text().trim();
    //     });
    // leOffersPageLocators.offerDetailsPage
    //     .offerTitle()
    //     .parent()
    //     .next()
    //     .then(($value: any) => {
    //         offerTitle = $value.text().trim();
    //     });
    // leOffersPageLocators.offerDetailsPage
    //     .offerSku()
    //     .parent()
    //     .next()
    //     .then(($value: any) => {
    //         offerSku = $value.text().trim();
    //     });

    return cy.readFile(filepath).then((data) => {
        data.push({
            planSlug: `${planSlug}`,
            offerID: `${offerID}`,
            offerTitle: `${offerTitle}`,
            offerPrice: `${offerPrice}`,
            offerSku: `${offerSku}`,
        });
        cy.writeFile(filepath, JSON.stringify(data, null, 2));
    });
};
