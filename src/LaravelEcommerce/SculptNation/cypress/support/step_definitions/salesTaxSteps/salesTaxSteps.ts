/// <reference types="cypress" />

import { Then, Step } from '@badeball/cypress-cucumber-preprocessor';
import {
    consumerLandingPageLocators,
    usersPageLocators,
    vsDashboardLocators,
    vsUsersPageLocators,
    dashboardLocators,
} from '../../locator_libraries';
import vsSurveyOrderFormPageLocators from '../../locator_libraries/consumerPages/vsSurveyOrderFormPageLocators';
import { dynamicTestData } from '../../testData';

Then(
    'The user verifies the sales tax on {string} is correct',
    (platform: string) => {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000);
        if (platform === 'LE') {
            cy.get('@staticTestData').then((staticTestData: any) => {
                const { salesTax } = staticTestData.oneBottle.cartDetails;
                consumerLandingPageLocators.checkoutPage.paymentInformation
                    .salesTax()
                    .invoke('text')
                    .then((tax) => {
                        expect(tax.trim()).to.eq(salesTax);
                    });
            });
        } else {
            cy.get('@staticTestData').then((staticTestData: any) => {
                const { salesTax } = staticTestData.surveyLandingPage;
                vsSurveyOrderFormPageLocators.orderSummary().within(() => {
                    vsSurveyOrderFormPageLocators.salesTax().within(() => {
                        cy.get('strong')
                            .eq(1)
                            .invoke('text')
                            .then((tax) => {
                                expect(tax.trim()).to.eq(salesTax);
                            });
                    });
                });
            });
        }
    }
);

Then('The user fills in the payment details and places the order', () => {
    cy.intercept('POST', '/api/cart/pay').as('orderPlaced');
    cy.logStep('Fill in payment information');
    consumerLandingPageLocators.checkoutPage.paymentInformation
        .creditCardNumber()
        .type(Cypress.env('CREDIT_CARD_NUMBER'));
    consumerLandingPageLocators.checkoutPage.paymentInformation
        .expirationMonth()
        .type(Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'));
    consumerLandingPageLocators.checkoutPage.paymentInformation
        .expirationYear()
        .type(Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'));
    consumerLandingPageLocators.checkoutPage.paymentInformation
        .securtyCode()
        .type(Cypress.env('CREDIT_CARD_CVV'));
    consumerLandingPageLocators.checkoutPage.paymentInformation
        .placeOrderButton()
        .click();

    cy.wait('@orderPlaced');
});

Then('The user fills in the order form', () => {
    dynamicTestData.userPassword = Math.floor(
        Math.random() * 9000000000 + 1000000000
    ).toString();

    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep('Fill in billing details');
        cy.generateRandomTestEmail().then((randomEmail) => {
            dynamicTestData.userEmail = randomEmail;

            consumerLandingPageLocators.checkoutPage.billingDetails
                .emailAddress()
                .type(dynamicTestData.userEmail);
        });
        consumerLandingPageLocators.checkoutPage.billingDetails
            .firstName()
            .type(staticTestData.firstName);
        consumerLandingPageLocators.checkoutPage.billingDetails
            .lastName()
            .type(staticTestData.lastName);
        consumerLandingPageLocators.checkoutPage.billingDetails
            .country()
            .select(staticTestData.country);
        consumerLandingPageLocators.checkoutPage.billingDetails
            .streetAddress()
            .type(staticTestData.streetAddress);
        consumerLandingPageLocators.checkoutPage.billingDetails
            .city()
            .type(staticTestData.city);
        consumerLandingPageLocators.checkoutPage.billingDetails
            .state()
            .select(staticTestData.state);
        consumerLandingPageLocators.checkoutPage.billingDetails
            .postCode()
            .type(staticTestData.postcode);
        consumerLandingPageLocators.checkoutPage.billingDetails
            .phone()
            .type(staticTestData.phone);
        consumerLandingPageLocators.checkoutPage.billingDetails
            .password()
            .type(dynamicTestData.userPassword, { log: false });
        if (staticTestData.country === 'CAN') {
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(30000);
            consumerLandingPageLocators.checkoutPage.billingDetails
                .shipping()
                .click();
        }
    });
});

Then('The user verifies the Sales Tax on {string}', (platform: string) => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);

    if (platform === 'LE') {
        Step(
            new Mocha.Context(),
            'The user logs into the Admin Tool using an account with "admin" credentials'
        );
        Step(new Mocha.Context(), 'The user searches the "dynamic" test email');

        cy.get('@staticTestData').then((staticTestData: any) => {
            const { orderSalesTax } = staticTestData;
            const taxCount: string[] = orderSalesTax.leTaxList;
            /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
            for (let i = 0; i < taxCount.length; i++) {
                usersPageLocators.ordersTable.rows(i + 1).within(() => {
                    usersPageLocators.ordersTable.orderIdLink().click();
                });

                dashboardLocators.selectTab('Order Offers').click();

                if (orderSalesTax.leTaxList[i] !== '$0.00') {
                    usersPageLocators.orderOffers
                        .table()
                        .find('tr')
                        .then((row) => {
                            /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
                            for (let x = 1; x <= row.length; x++) {
                                usersPageLocators.orderOffers
                                    .row(x)
                                    .within(() => {
                                        usersPageLocators.orderOffers
                                            .type()
                                            .invoke('text')
                                            .then((type) => {
                                                if (type.trim() === 'tax') {
                                                    usersPageLocators.orderOffers
                                                        .refundable()
                                                        .should(
                                                            'have.text',
                                                            orderSalesTax
                                                                .leTaxList[i]
                                                        );
                                                }
                                            });
                                    });
                            }
                        });
                }

                cy.go('back');
            }
        });
    } else {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000);
        Step(new Mocha.Context(), 'The user navigates to VShred landing page');
        Step(
            new Mocha.Context(),
            'The user logs into the Vshred Admin Tool as "admin" user'
        );
        Step(new Mocha.Context(), 'The user searches a client record');

        vsDashboardLocators.selectTab('Purchases').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000);
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { orderSalesTax } = staticTestData;
            const orderCount: string[] = orderSalesTax.vsTaxList;
            /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
            for (let i = 0; i < orderCount.length; i++) {
                vsUsersPageLocators.purchasesTab
                    .orderItemRow(i + 1)
                    .within(() => {
                        vsUsersPageLocators.purchasesTab
                            .orderTaxAmount()
                            .invoke('text')
                            .then((taxAmount) => {
                                expect(taxAmount.trim()).to.eq(
                                    orderSalesTax.vsTaxList[i]
                                );
                            });
                    });
            }
        });
    }
});
