/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { quietLogisticsLocators } from '../../locator_libraries';
import { dynamicTestData } from '../../testData';

Given('The user logs into Quiet Logistics', () => {
    cy.clearAllSessionData();

    cy.logStep('Navigate to the Quiet Logistics login screen');
    cy.visit(Cypress.env('QUIET_LOGISTICS_URL'), {
        onBeforeLoad(win) {
            win.localStorage.clear();
        },
    });

    cy.logStep('Login to Quiet Logistics using valid credentials');
    cy.loginToQuietLogistics(
        Cypress.env('QUIET_LOGISTICS_USERNAME'),
        Cypress.env('QUIET_LOGISTICS_PASSWORD')
    );
});

When(
    'The user searches for the SO Number previosuly created in Deposco and clicks the Pick button to set all Pick Qty to Order Qty',
    () => {
        cy.logStep('Go to the Client Testing menu');
        quietLogisticsLocators.clientTesting().click();

        cy.logStep('Search for the SO Number from Deposco');
        quietLogisticsLocators.goButton().click();

        cy.logStep('Wait for the SO number to appear');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(60000); // need to wait for the SO number to actually appear in the list

        quietLogisticsLocators
            .searchField()
            .type(dynamicTestData.deposcoSONumber);
        quietLogisticsLocators.findButton().click();

        cy.logStep('Validate the SO Number and status as Pending');
        quietLogisticsLocators
            .soNumber()
            .should('have.text', dynamicTestData.deposcoSONumber);
        quietLogisticsLocators.soStatus().contains(/Available|Inducted/);

        cy.logStep(
            'Click the Pick button and click the Set All Pick Qty to Order Qty'
        );
        quietLogisticsLocators.pickButton().click();
        quietLogisticsLocators.setAllPickQtyToOrderQtyButton().click();

        cy.logStep('Verify Qty matches the ones selected in the SN Admin Tool');
        cy.get('@staticTestData').then((staticTestData: any) => {
            quietLogisticsLocators
                .qtyValue()
                .should('be.visible')
                .invoke('text')
                .then((qtyText) => {
                    expect(qtyText.trim()).to.eq(
                        staticTestData.productQuantity
                    );
                });
        });
    }
);

When(
    'The user searches for the SO Number previously created in Deposco and cancels the order',
    () => {
        cy.logStep('Go to the Client Testing menu');
        quietLogisticsLocators.clientTesting().click();

        cy.logStep('Search for the SO Number from Deposco');
        quietLogisticsLocators.goButton().click();

        cy.logStep('Wait for the SO number to appear');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(60000); // need to wait for the SO number to actually appear in the list

        quietLogisticsLocators
            .searchField()
            .type(dynamicTestData.deposcoSONumber);
        quietLogisticsLocators.findButton().click();

        cy.logStep('Wait for the SO number to appear');
        quietLogisticsLocators.cancelButton().click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(10000); // need to wait for the SO number to be cancelled
    }
);

Then(
    'The user clicks the Complete Order and Ship button and checks that the pick was successfull',
    () => {
        cy.logStep(
            'Click Complete Order and Shipment and go back to the SO Number page'
        );
        quietLogisticsLocators.completeOrderAndShipButton().click();
        quietLogisticsLocators
            .statusMessage()
            .should('have.text', 'Order has been successfully picked!');
    }
);

Then(
    'The user checks that the SO number status has been updated to {string}',
    (soStatus: string) => {
        cy.logStep('Go back and search again for the SO number');
        quietLogisticsLocators.backButton().click();
        quietLogisticsLocators
            .searchField()
            .type(dynamicTestData.deposcoSONumber);
        quietLogisticsLocators.findButton().click();

        cy.logStep(
            'Click the Send SO Results button and wait for the process to Completed'
        );
        quietLogisticsLocators.sendSOResultButton().click();
        quietLogisticsLocators.soStatus().should('have.text', `${soStatus}`);

        cy.logStep(
            'Wait for 1.5 minutes for the changes to propage to the Admin Tool'
        );
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(90000);
    }
);

Then(
    'The user checks that the SO number status has been updated to Cancelled',
    () => {
        cy.logStep('Validate the SO Number and status as Cancelled');
        quietLogisticsLocators
            .soNumber()
            .should('have.text', dynamicTestData.deposcoSONumber);
        quietLogisticsLocators.soStatus().should('have.text', 'Cancelled');
    }
);
