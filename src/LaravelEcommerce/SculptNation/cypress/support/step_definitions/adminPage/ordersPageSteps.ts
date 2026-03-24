import { When } from '@badeball/cypress-cucumber-preprocessor';

When('The user validates Order detail values with related resources', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.writeFile(filepath, []);

    cy.logStep('Capture Order values for reference');
    cy.getResourceValues('Orders');

    cy.logStep('Validate Order details with Order Offers resource');
    cy.validateOrderDetails('OrderOffers');
    cy.validateOrderDetails('Invoices');
    cy.validateOrderDetails('Payments');
    cy.validateOrderDetails('Shipments');
});
