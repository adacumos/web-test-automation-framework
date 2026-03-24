import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { dashboardLocators } from '../../locator_libraries';

Then('A unique Shipment Resource can be traced to a Client Order', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { referenceNumber, fulfillmentID } = data[0];
        dashboardLocators.navigateMenu('Shipments').click();

        cy.logStep(`Searching the saved Fufillment Log's Reference Number`);
        dashboardLocators.searchInput().clear().type(referenceNumber);
        dashboardLocators.getRecord(referenceNumber).should('be.visible');
        dashboardLocators
            .viewButton()
            .click()
            .then(() => {
                dashboardLocators
                    .resourceLink('Fulfillment-Logs')
                    .should('contain', fulfillmentID);
            });
    });
});
