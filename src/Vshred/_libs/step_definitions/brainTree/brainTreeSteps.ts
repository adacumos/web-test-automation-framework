/// <reference types="cypress" />

import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import { brainTreeLocators } from 'Vshred/Vshred_TrainerTool/cypress/support/locator_libraries';
import { brainTreeLocatorsMkt } from '../../../Marketing_Funnels/cypress/support/locator_libraries';
import { dynamicTestData } from '../../testData';

Given('The user logs into BrainTree', () => {
    cy.clearAllSessionData();
    cy.loginToBrainTree(
        Cypress.env('BRAINTREE_USERNAME'),
        Cypress.env('BRAINTREE_PASSWORD')
    );
});
Then(
    'The user validates that the {string} purchase recorded in BrainTree',
    (button: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            brainTreeLocatorsMkt.transactionsTab().click();
            brainTreeLocatorsMkt.newTransactionOption().click();
            brainTreeLocatorsMkt
                .searchTextBox()
                .type(`${dynamicTestData.userEmail}{enter}`);
            switch (button) {
                case 'clean bulk':
                    cy.contains(staticTestData.greensPrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.customDietPlanPrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.cleanBulkBundlePrice).should(
                        'be.visible'
                    );
                    break;
                case 'ripped':
                    cy.contains(staticTestData.greensPrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.burnPMMonthlyPrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.burnEvolvedPrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.rippedPrice).should(
                        'be.visible'
                    );
                    break;
                default:
                    throw new Error(`Invalid ${button}`);
            }
        });
    }
);
Then('The user validates that the purchase is recorded in BrainTree', () => {
    cy.logStep('Search for transaction id');
    brainTreeLocators.searchField().type(`${dynamicTestData.paymentId}{enter}`);

    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep('Check payment id');
        brainTreeLocators.transactions
            .paymentId(dynamicTestData.paymentId)
            .should('be.visible');
        cy.logStep('Check payment status');
        brainTreeLocators.transactions
            .transactionRow(dynamicTestData.paymentId)
            .within(() => {
                brainTreeLocators.transactions
                    .paymentStatus(staticTestData.paymentStatus)
                    .should('be.visible');
            });
        cy.logStep('Check amount');
        brainTreeLocators.transactions
            .transactionRow(dynamicTestData.paymentId)
            .within(() => {
                brainTreeLocators.transactions
                    .amount(staticTestData.totalAmount)
                    .should('be.visible');
            });
        cy.logStep('Check customer');
        brainTreeLocators.transactions
            .transactionRow(dynamicTestData.paymentId)
            .within(() => {
                brainTreeLocators.transactions
                    .customer(staticTestData.userName)
                    .should('be.visible');
            });
    });
});
