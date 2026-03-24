import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    leOrderOffersPageLocators,
} from '../../locator_libraries';

When(
    /^The user navigates to Shipment's "(Orders|Order-Offers)" linked resource$/,
    (resourceName: string) => {
        cy.logStep(`Navigate to Shipping ${resourceName} resource details`);
        leOrderOffersPageLocators.orderOffersLandingPage
            .linkedResource(resourceName)
            .click();
    }
);

Then('The Shipment details are synced with the linked resources', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { shipmentID, referenceNumber, status, userEmail } = data[0];
        dashboardLocators.selectTab('Shipments').click();
        cy.logStep('Verifying saved Shipping details matched linked resources');
        dashboardLocators
            .resourceTableRecord('Shipments')
            .contains(referenceNumber)
            .should('be.visible')
            .parents('tr')
            .within(() => {
                cy.contains('td', shipmentID).should('be.visible');
                cy.contains('td', status).should('be.visible');
                cy.contains('td', userEmail).should('be.visible');
            });
        cy.go('back');
    });
});
