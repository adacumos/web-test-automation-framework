import {
    dashboardLocators,
    leShippingCarriersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createNewCarrier: (
                carrierPriority: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create new Shipping Carrier through LE Admin
 *
 * @param carrierPriority Carrier Priority
 * example:  createNewCarrier('XPS','2')
 */

export const createNewCarrier = (
    carrierPriority: string
): Cypress.Chainable<any> => {
    cy.logStep('Verify New Carrier to be created do not exist');
    dashboardLocators.resourceTable().should('be.visible');
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    const random = Cypress._.random(0, 1e5);
    let carrierID: string;
    let carrierName: string;
    let priority: string;

    cy.logStep('Creating New Carrier');
    leShippingCarriersPageLocators.carriersLandingPage
        .createCarrierButton()
        .click();
    leShippingCarriersPageLocators.addEditCarrierPage
        .carrierName()
        .clear()
        .type(`TestCarrier${random}`);
    leShippingCarriersPageLocators.addEditCarrierPage
        .carrierPriority()
        .clear()
        .type(carrierPriority);
    leShippingCarriersPageLocators.addEditCarrierPage
        .createCarrierButton()
        .click();
    dashboardLocators.successToast().should('be.visible');

    cy.reload();
    cy.logStep('Get new resource data');
    leShippingCarriersPageLocators.carriersDetailsPage
        .carrierID()
        .parent()
        .next()
        .then(($value: any) => {
            carrierID = $value.text().trim();
        });
    leShippingCarriersPageLocators.carriersDetailsPage
        .carrierName()
        .parent()
        .next()
        .then(($value: any) => {
            carrierName = $value.text().trim();
        });

    leShippingCarriersPageLocators.carriersDetailsPage
        .priority()
        .parent()
        .next()
        .then(($value: any) => {
            priority = $value.text().trim();
        });

    return cy.readFile(filepath).then((data) => {
        data.push({
            carrierID: `${carrierID}`,
            carrierName: `${carrierName}`,
            priority: `${priority}`,
        });
        cy.writeFile(filepath, JSON.stringify(data, null, 2));
    });
};
