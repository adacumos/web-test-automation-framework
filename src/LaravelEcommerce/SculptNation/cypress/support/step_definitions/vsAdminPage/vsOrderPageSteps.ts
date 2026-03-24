/// <reference types="cypress" />

import { Step, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    vsDashboardLocators,
    vsOrdersPageLocators,
    vsProcessOrderPageLocators,
} from '../../locator_libraries';
import { dynamicTestData } from '../../testData';

Then('The user searches for {string} and adds offer', (offerType: string) => {
    vsOrdersPageLocators.filterRecord.addOfferButton().click();
    vsProcessOrderPageLocators.selectTabOffers().click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // expected delays with loading all offers

    vsProcessOrderPageLocators.searchProductInputBox().clear().type(offerType);
    vsDashboardLocators
        .getRecord(offerType)
        .eq(0)
        .should('be.visible')
        .parent()
        .within(() => {
            vsProcessOrderPageLocators.addOfferButtton().click();
        });
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // expected delays in adding orders to cart

    vsDashboardLocators.getRecord(offerType).should('be.visible');
});

Then('The user searches for plan and adds plan', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        vsOrdersPageLocators.filterRecord
            .buttonWithText(staticTestData.subscriptionButtonText.AddPlan)
            .click();
        vsOrdersPageLocators.filterRecord
            .bySearchNameField()
            .should('be.visible');
        vsOrdersPageLocators.filterRecord.ByNameField().should('be.visible'); // This step ensures that the search field finishes loading
        vsOrdersPageLocators.filterRecord
            .bySearchNameField()
            .type(staticTestData.offerSku);
        vsOrdersPageLocators.filterRecord
            .ByPlanNameField()
            .should('contain', staticTestData.offerSku);
        vsOrdersPageLocators.filterRecord
            .addPlanModalButton()
            .first()
            .should('be.visible');
        vsOrdersPageLocators.filterRecord.addPlanModalButton().click();
    });
});

Then('The user adds shipping and billing address', () => {
    cy.addShippingAndBillingAddressVsAdmin();
});

Then('The user places the order', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        vsOrdersPageLocators.filterRecord.placeOrderButton().click();
        vsOrdersPageLocators.processPayment
            .creditCardNumber()
            .should('be.visible');

        vsOrdersPageLocators.processPayment
            .creditCardNumber()
            .clear()
            .type(Cypress.env('CREDIT_CARD_NUMBER'));
        vsOrdersPageLocators.processPayment
            .creditCardExpiration()
            .type(
                Cypress.env('CREDIT_CARD_EXPIRATION_MONTH') +
                    Cypress.env('CREDIT_CARD_EXPIRATION_YEAR')
                        .toString()
                        .substr(-2)
            );
        vsOrdersPageLocators.processPayment
            .creditCardCvv()
            .type(Cypress.env('CREDIT_CARD_CVV'));
        vsOrdersPageLocators.processPayment
            .creditCardPostalCode()
            .type(staticTestData.postalCode);
        vsOrdersPageLocators.processPayment.submitPaymentButton().click();
        vsOrdersPageLocators.processPayment.toastMessage().should('be.visible');
    });
});

Then('The user subscribes to the plan', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        vsOrdersPageLocators.filterRecord
            .buttonWithText(staticTestData.subscriptionButtonText.Subscribe)
            .click();
        vsOrdersPageLocators.processPayment
            .creditCardNumber()
            .should('be.visible');

        vsOrdersPageLocators.processPayment
            .creditCardNumber()
            .clear()
            .type(Cypress.env('CREDIT_CARD_NUMBER'));
        vsOrdersPageLocators.processPayment
            .creditCardExpiration()
            .type(
                Cypress.env('CREDIT_CARD_EXPIRATION_MONTH') +
                    Cypress.env('CREDIT_CARD_EXPIRATION_YEAR')
                        .toString()
                        .substr(-2)
            );
        vsOrdersPageLocators.processPayment
            .creditCardCvv()
            .type(Cypress.env('CREDIT_CARD_CVV'));
        vsOrdersPageLocators.processPayment
            .creditCardPostalCode()
            .type(staticTestData.postalCode);
        vsOrdersPageLocators.processPayment.submitPaymentButton().click();
        vsOrdersPageLocators.processPayment.toastMessage().should('be.visible');
    });
});

Then(
    'The user places the order and waits 2 minutes for the database to update',
    () => {
        Step(new Mocha.Context(), 'The user places the order');

        /* eslint-disable cypress/no-unnecessary-waiting */
        cy.wait(120000); // expected delay in refreshing the page
    }
);

Then('The user enters an invalid credit card', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        vsOrdersPageLocators.filterRecord
            .placeOrderButton()
            .should('be.visible');
        vsOrdersPageLocators.filterRecord.placeOrderButton().click();
        vsOrdersPageLocators.filterRecord.placeOrderButton().click();
        vsOrdersPageLocators.processPayment
            .creditCardNumber()
            .should('be.visible');
        vsOrdersPageLocators.processPayment
            .creditCardNumber()
            .clear()
            .type(staticTestData.creditCard);
        vsOrdersPageLocators.processPayment
            .creditCardExpiration()
            .type(
                Cypress.env('CREDIT_CARD_EXPIRATION_MONTH') +
                    Cypress.env('CREDIT_CARD_EXPIRATION_YEAR')
                        .toString()
                        .substr(-2)
            );
        vsOrdersPageLocators.processPayment
            .creditCardCvv()
            .type(Cypress.env('CREDIT_CARD_CVV'));
        vsOrdersPageLocators.processPayment
            .creditCardPostalCode()
            .type(staticTestData.postalCode);
        vsOrdersPageLocators.processPayment.submitPaymentButton().click();
        vsOrdersPageLocators.processPayment
            .toastErrorMessage()
            .should('be.visible');
        vsOrdersPageLocators.processPayment
            .invalidCreditCardMessage()
            .should('be.visible');
    });
});

Then('The user searches for an order', () => {
    vsOrdersPageLocators.filterRecord.byCustomerEmail().should('be.visible');
    vsOrdersPageLocators.filterRecord
        .byCustomerEmail()
        .type(dynamicTestData.userEmail)
        .type('{enter}');
});

Then('The user verifies the status of order', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        vsOrdersPageLocators.filterRecord
            .statusOfFirstOrder()
            .should('be.visible');
        vsOrdersPageLocators.filterRecord
            .statusOfFirstOrder()
            .should('contain', staticTestData.status);
    });
});

Then(
    'The user adds {string} plan, subscribes and submits',
    (planType: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            vsOrdersPageLocators.planOrderPage.addPlan().click();
            vsOrdersPageLocators.planOrderPage
                .searchOfferField()
                .type(planType);
            vsOrdersPageLocators.planOrderPage.addSpecificPlan().click();
            vsOrdersPageLocators.planOrderPage.subscribeButton().click();
            vsOrdersPageLocators.planOrderPage
                .total()
                .should('contain', staticTestData.total);
            vsOrdersPageLocators.planOrderPage
                .radioButtonForCardToUse()
                .click();
            vsOrdersPageLocators.planOrderPage.submitTransaction().click();
            vsOrdersPageLocators.processPayment
                .toastMessage()
                .should('be.visible');
            vsOrdersPageLocators.planOrderPage
                .total()
                .should('contain', staticTestData.total);
        });
    }
);

Then(
    'The user collects the Transaction Reference from the Payments tab and settles the payment for the order',
    () => {
        cy.logStep('Click on the Payments tab');
        // payments tab is visible
        vsOrdersPageLocators.payments.payment_tab_title().should('be.visible');

        cy.logStep('Store Transaction Reference number');
        vsOrdersPageLocators.payments
            .transactionReference()
            .invoke('text')
            .then((reference) => {
                const transactionReference = reference.trim(); // Store the transaction reference ID in dynamicTestData.transactionReference

                cy.logStep('Settle payment using SSH command');
                const sshHost = Cypress.env('VS_SSH_HOST');
                const sshUrl = Cypress.env('VS_ADMIN_URL');
                const sshUsername = Cypress.env('SSH_USERNAME');
                const sshCmd = `php artisan transaction:settle ${transactionReference}`; // using 1.0 settlement command

                cy.task('getSshKey').then((sshKeyPath: any) => {
                    const sshInfo = {
                        sshHost,
                        sshUrl,
                        sshUsername,
                        sshKeyPath,
                        sshCmd,
                    };
                    cy.task('runSshCmd', sshInfo).then((result: any) => {
                        cy.log(result);
                    });
                });
            });
        cy.reload(); // refresh the page or else the refund button will not be visible
    }
);

Then('The user clicks the "Refund" button', () => {
    cy.logStep('Click on the "Refund" button');
    vsOrdersPageLocators.orderDetails.refundButton().should('be.visible');
    vsOrdersPageLocators.orderDetails.refundButton().click();
});

Then('When The refund modal opens the user will process a full refund', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        // assert refund modal is visible
        vsOrdersPageLocators.refundModal.refundModal().should('be.visible');

        // assert the refund checkbox is visible and click
        vsOrdersPageLocators.refundModal
            .refundAllCheckbox()
            .should('be.visible')
            .click();

        // select option from the dropdown
        vsOrdersPageLocators.refundModal
            .refundReasonDropdown()
            .select('Changed Mind');

        // assert the refund button is visible and click
        vsOrdersPageLocators.refundModal
            .refundButton()
            .contains(`Refund ${staticTestData.price}`)
            .should('be.visible')
            .click();

        // assert the refund confirmation button is visible and click
        vsOrdersPageLocators.refundModal
            .confirmRefundButton()
            .should('be.visible')
            .click();

        // assert the order status has been changed to returned
        vsOrdersPageLocators.orderDetails
            .orderStatus()
            .should('contain', 'returned');

        // assert the refund price details are visible
        vsOrdersPageLocators.cartDetails
            .refundPriceDetails()
            .contains(staticTestData.refundedPrice)
            .should('be.visible');
    });
});

Then('The user selects the first order from the search list', () => {
    /* eslint-disable cypress/no-unnecessary-waiting */
    cy.wait(1000); // wait until the page loads before selecting the first order
    vsOrdersPageLocators.planOrderPage.firstOrderOnList().should('be.visible');
    vsOrdersPageLocators.planOrderPage.firstOrderOnList().click();
});

Then('The user selects vsu and purchases', () => {
    vsOrdersPageLocators.planOrderPage.purchaseVsu().should('be.visible');
    vsOrdersPageLocators.planOrderPage.purchaseVsu().click();
});

Then('Select the submit button if its still visible', () => {
    vsProcessOrderPageLocators.submitOrderButton().then(($btn) => {
        if ($btn.is(':visible')) {
            cy.wrap($btn).click();
        }
    });
});

Then('Validate the Thank you order page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        vsProcessOrderPageLocators.thankYouPage
            .productTitle()
            .should('contain', staticTestData.productName);
        vsProcessOrderPageLocators.thankYouPage
            .totalPrice()
            .should('contain', staticTestData.orderTotal);
    });
});
