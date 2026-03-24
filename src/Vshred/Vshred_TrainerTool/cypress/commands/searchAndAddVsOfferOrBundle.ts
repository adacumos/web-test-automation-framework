import { ordersPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            searchAndAddVsOfferOrBundle: (
                offerType: string,
                offerValue: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to search for and add an offer or a bundle to an Order
 *
 * @param offerType the offer type (offer or bundle)
 * @param offerValue the offer or bundle to search for
 *
 * @example
 * cy.searchAndAddVsOfferOrBundle('Turmeric')
 *
 */
export const searchAndAddVsOfferOrBundle = (
    offerType: string,
    offerValue: string
): Cypress.Chainable<any> => {
    ordersPageLocators.orderCartSection.addOfferButton().click();

    type ObjectKey = keyof typeof ordersPageLocators.addOfferWidget;
    const navigationTab = 'bundles';
    const searchField: ObjectKey =
        offerType === 'Bundle' ? 'searchBundleField' : 'searchOfferField';
    const addButton: ObjectKey =
        offerType === 'Bundle' ? 'addBundleButton' : 'addOfferButton';

    cy.logStep(`Search and add ${offerType} ${offerValue}`);

    ordersPageLocators.addOfferWidget.navigationTab(navigationTab).click();
    ordersPageLocators.addOfferWidget[searchField]().type(offerValue);
    return ordersPageLocators.addOfferWidget.offerRow(offerValue).within(() => {
        ordersPageLocators.addOfferWidget[addButton]().click();
    });
};
