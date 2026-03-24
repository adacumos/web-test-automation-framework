import { Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    disputesPageLocators,
} from '../../locator_libraries';

Then('The user creates a new Dispute', () => {
    cy.logStep('Creating new Dispute');
    cy.get('@staticTestData').then((staticTestData: any) => {
        disputesPageLocators.createDisputeButton().click();
        disputesPageLocators.keyField().type(staticTestData.Key);
        disputesPageLocators.valueField().type(staticTestData.Value);
        disputesPageLocators
            .paymentDropdownSelector()
            .type(staticTestData.Payment);
        disputesPageLocators.paymentSelector().click();
        disputesPageLocators.createDisputeButton().click();
        dashboardLocators
            .successToast()
            .should('be.visible')
            .and('have.text', staticTestData.createdDispute);
    });
});

Then('The user Verifies the newly created Dispute', () => {
    cy.logStep('Verifing newly created dispute');
    disputesPageLocators.viewDisputeButton().click();
    dashboardLocators.cmsLocator().should('be.visible');
});

Then('The user Deletes the newly created Dispute', () => {
    cy.logStep('Deleting Dispute');
    cy.get('@staticTestData').then((staticTestData: any) => {
        disputesPageLocators.deleteButton().click();
        disputesPageLocators.confirmDeleteButton().click();
        dashboardLocators
            .successToast()
            .should('be.visible')
            .and('have.text', staticTestData.deletedDispute);
    });
});

Then('The user Verifies the newly created Disputed no longer exists', () => {
    cy.logStep('Verifiying dispute no longer exists');
    cy.get('@staticTestData').then((staticTestData: any) => {
        disputesPageLocators
            .emptyTableSelector()
            .contains(staticTestData.emptyTable);
    });
});

Then('The user Verifies the table is empty', () => {
    cy.logStep('Verifiying dispute no longer exists');
    cy.get('@staticTestData').then((staticTestData: any) => {
        disputesPageLocators
            .emptyTableSelector()
            .contains(staticTestData.emptyTable);
    });
});
