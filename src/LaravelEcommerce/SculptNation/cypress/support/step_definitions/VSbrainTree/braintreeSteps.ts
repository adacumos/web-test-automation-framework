/// <reference types="cypress" />

import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import brainTreeLocators from '../../locator_libraries/brainTree/brainTreeLocators';
import { dynamicTestData } from '../../testData';

Given('The user login to BrainTree', () => {
    cy.logStep('Navigate to the BrainTree login screen');
    cy.visit(Cypress.env('BT_SANDBOX_URL'));

    cy.logStep('Fill in valid login data and click Login');

    const attemptLogin = () => {
        brainTreeLocators.loginForm
            .usernameField()
            .type(Cypress.env('BT_SANDBOX_USERNAME'));
        brainTreeLocators.loginForm
            .passwordField()
            .type(Cypress.env('BT_SANDBOX_PASSWORD'), { log: false });
        brainTreeLocators.loginForm.loginButton().click();
    };
    attemptLogin();
    attemptLogin();

    brainTreeLocators.user.homeTitle().should('be.visible');
});

Then('The user searches for transaction reference email', () => {
    const clientEmail = dynamicTestData.userEmail;
    // enter the email in the search field
    brainTreeLocators.user.searchField().clear().type(`${clientEmail}{enter}`);
});

Then('The user verifies that the refund was successful', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        // assert that the results title is visible
        brainTreeLocators.user.resultsTitle().should('be.visible');

        // assert that the transaction amount
        brainTreeLocators.user
            .transactionAmount()
            .should('contain', staticTestData.refundedPrice);

        // assert that the transaction type is Refund
        brainTreeLocators.user.transactionType().should('contain', 'Refund');
    });
});

Then('The user searches for transaction reference number', () => {
    const transNumber = dynamicTestData.transactionReference;
    brainTreeLocators.user.searchField().clear().type(`${transNumber}{enter}`);
    brainTreeLocators.user
        .transactionNumber(transNumber)
        .should('be.visible')
        .click();
});

Then('Verifies BT Transaction Order Details', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const filepath = 'cypress/fixtures/customData/resourceValues.json';
        cy.readFile(filepath).then((data) => {
            const clientEmail = dynamicTestData.userEmail;
            const { productName, shippingOption, shippingCost } =
                staticTestData;
            const { baseCurrencyAmount, baseCurrencySubtotal, orderID } =
                data[0];

            brainTreeLocators.transactionDetail
                .customerEmail()
                .should('contain', clientEmail);
            brainTreeLocators.transactionDetail
                .orderID()
                .should('contain', orderID);
            brainTreeLocators.transactionDetail
                .orderAmount()
                .should('contain', baseCurrencyAmount);
            brainTreeLocators.transactionDetail
                .orderItem(productName)
                .should('be.visible')
                .parent()
                .within(() => {
                    brainTreeLocators.transactionDetail
                        .unitAmount()
                        .should('contain', baseCurrencySubtotal);
                });

            if (
                shippingOption === 'Priority Flat Rate' ||
                shippingOption === 'Standard Flat Rate'
            ) {
                brainTreeLocators.transactionDetail
                    .shipCategoryItem('Priority Flat Rate')
                    .should('be.visible')
                    .parent()
                    .within(() => {
                        brainTreeLocators.transactionDetail
                            .unitAmount()
                            .should('contain', shippingCost);
                    });
            } else {
                cy.logStep('No Shipping Cost logged in Braintree');
            }
        });
    });
});
