/// <reference types="cypress" />

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    usersPageLocators,
    ordersPageLocators,
    dashboardLocators,
} from '../../../Vshred_TrainerTool/cypress/support/locator_libraries';
import { dynamicTestData } from '../../testData';

When(
    'The user navigates to {string} tab and clicks the New Order button',
    (tabName: string) => {
        usersPageLocators.userDetails.navigationTab(tabName).click();
        usersPageLocators.userDetails.newOrderButton().click();

        cy.logStep('Check Order Details section is loaded');
        ordersPageLocators.orderDetailsSection.heading().should('be.visible');
        ordersPageLocators.orderDetailsSection
            .addShippingAddressButton()
            .should('be.visible');
        ordersPageLocators.orderDetailsSection
            .addBillingAddressButton()
            .should('be.visible');
        ordersPageLocators.orderDetailsSection
            .addCouponButton()
            .should('be.visible');

        cy.logStep('Check Order Cart section is loaded');
        ordersPageLocators.orderCartSection.heading().should('be.visible');
        ordersPageLocators.orderCartSection
            .addOfferButton()
            .should('be.visible');
        ordersPageLocators.orderCartSection
            .placeOrderButton()
            .should('be.visible');

        cy.logStep('Check Payments section is loaded');
        ordersPageLocators.paymentsSection.heading().should('be.visible');

        cy.logStep('Check Refunds section is loaded');
        ordersPageLocators.refundsSection.heading().should('be.visible');
    }
);

Then(
    /^The user adds a "(Bundle|Offer)" to the Cart using the Add Offer widget$/,
    (offerType: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.searchAndAddVsOfferOrBundle(
                offerType,
                staticTestData.productName
            );

            cy.logStep(
                'Check added bundle info is correct under Order Cart section'
            );
            cy.logStep('Check product name');
            ordersPageLocators.orderCartSection
                .offerName(staticTestData.productName)
                .should('be.visible');
            cy.logStep('Check product price');
            ordersPageLocators.orderCartSection
                .orderRow(staticTestData.productName)
                .within(() => {
                    ordersPageLocators.orderCartSection
                        .offerPrice(staticTestData.productPrice)
                        .should('be.visible');
                });
        });
    }
);

Then(
    'The user adds a new Plan to the User Subscription Cart using the Add Plan widget',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.searchAndAddVsPlan(staticTestData.planName);

            cy.logStep(
                "Check added plan info is correct under the User's Subscription Cart"
            );

            cy.logStep('Check plan name');
            ordersPageLocators.usersSubscriptionCart
                .planName(staticTestData.planName)
                .should('be.visible');

            cy.logStep('Check plan price');
            ordersPageLocators.usersSubscriptionCart
                .planRow(staticTestData.planName)
                .within(() => {
                    ordersPageLocators.usersSubscriptionCart
                        .planPrice(staticTestData.planPrice)
                        .should('be.visible');
                });
        });
    }
);

Then('The user adds a new Shipping address', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        ordersPageLocators.orderDetailsSection
            .addShippingAddressButton()
            .click();

        cy.logStep('Add new address');
        cy.addNewAddress(
            staticTestData.addressName,
            staticTestData.addressPhone,
            staticTestData.address,
            staticTestData.address2,
            staticTestData.addressCountry,
            staticTestData.addressState,
            staticTestData.addressCity,
            staticTestData.addressZipCode
        );

        cy.logStep(
            'Check newly created address has been added to the Addresses'
        );
        cy.validateAddress(
            staticTestData.addressName,
            staticTestData.addressPhone,
            staticTestData.address,
            staticTestData.address2,
            staticTestData.addressCountry,
            staticTestData.addressState,
            staticTestData.addressCity,
            staticTestData.addressZipCode
        );

        cy.log('Select newly created address as Shipping Address');
        ordersPageLocators.manageAddressWidget
            .addressRow(staticTestData.addressName)
            .within(() => {
                ordersPageLocators.manageAddressWidget
                    .useAddressButton()
                    .click();
            });

        cy.logStep(
            'Check shipping address has successfully been set for the order under Order Details section'
        );
        ordersPageLocators.orderDetailsSection
            .noShippingAddressMessage()
            .should('not.exist');
        ordersPageLocators.orderDetailsSection
            .addShippingAddressButton()
            .should('not.exist');
        ordersPageLocators.orderDetailsSection
            .editShippingAddressButton()
            .should('be.visible');
        ordersPageLocators.orderDetailsSection
            .editShippingAddressButton()
            .parent()
            .within(() => {
                ordersPageLocators.orderDetailsSection
                    .addressField(staticTestData.address)
                    .should('be.visible');
                ordersPageLocators.orderDetailsSection
                    .addressField(staticTestData.address2)
                    .should('be.visible');
                ordersPageLocators.orderDetailsSection
                    .addressField(
                        `${staticTestData.addressCity}, ${staticTestData.addressState}, ${staticTestData.addressZipCode}`
                    )
                    .should('be.visible');
                ordersPageLocators.orderDetailsSection
                    .addressField(staticTestData.addressPhone)
                    .should('be.visible');
            });
    });
});

Then('The user adds a Billing address', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep('Add Billing address');
        ordersPageLocators.orderDetailsSection
            .addBillingAddressButton()
            .click();

        cy.log('Select previously created address as Billing Address');
        ordersPageLocators.manageAddressWidget
            .addressRow(staticTestData.addressName)
            .within(() => {
                ordersPageLocators.manageAddressWidget
                    .useAddressButton()
                    .click();
            });

        cy.logStep(
            'Check billing address has successfully been set for the order under Order Details section'
        );
        ordersPageLocators.orderDetailsSection
            .noBillingAddressMessage()
            .should('not.exist');
        ordersPageLocators.orderDetailsSection
            .addBillingAddressButton()
            .should('not.exist');
        ordersPageLocators.orderDetailsSection
            .editBillingAddressButton()
            .should('be.visible');
        ordersPageLocators.orderDetailsSection
            .editBillingAddressButton()
            .parent()
            .within(() => {
                ordersPageLocators.orderDetailsSection
                    .addressField(staticTestData.address)
                    .should('be.visible');
                ordersPageLocators.orderDetailsSection
                    .addressField(staticTestData.address2)
                    .should('be.visible');
                ordersPageLocators.orderDetailsSection
                    .addressField(
                        `${staticTestData.addressCity}, ${staticTestData.addressState}, ${staticTestData.addressZipCode}`
                    )
                    .should('be.visible');
                ordersPageLocators.orderDetailsSection
                    .addressField(staticTestData.addressPhone)
                    .should('be.visible');
            });
    });
});

When('The user places the Order and submits the payment', () => {
    ordersPageLocators.orderDetailsSection
        .orderId()
        .invoke('text')
        .then((orderId) => {
            dynamicTestData.orderId = orderId;
        });

    ordersPageLocators.orderCartSection.placeOrderButton().click();
    cy.processVsPayment();

    cy.logStep('Verify success message');
    dashboardLocators
        .successMessage()
        .should('be.visible')
        .and('have.text', 'Payment successful!');

    cy.logStep(
        'Check payment info has successfully been set for the order under Payments section'
    );
    cy.get('@staticTestData').then((staticTestData: any) => {
        ordersPageLocators.paymentsSection
            .heading()
            .parentsUntil(ordersPageLocators.cardBody)
            .siblings()
            .within(() => {
                ordersPageLocators.paymentsSection
                    .paymentId()
                    .invoke('text')
                    .then((paymentId) => {
                        dynamicTestData.paymentId = paymentId.trim();
                    });
                cy.logStep('Check Amount');
                ordersPageLocators.paymentsSection
                    .paymentAmount(staticTestData.totalAmount)
                    .should('be.visible');
                cy.logStep('Check Status');
                ordersPageLocators.paymentsSection
                    .paymentStatus(staticTestData.paymentStatus)
                    .should('be.visible');
            });
    });
});

When('The user processes the payment for the Digital Subscription Plan', () => {
    ordersPageLocators.usersSubscriptionCart.subscribeButton().click();
    cy.processVsPayment();

    cy.logStep('Verify success message');
    dashboardLocators
        .successMessage()
        .should('be.visible')
        .and('have.text', 'Subscription successful!');

    cy.logStep(
        "Check digital subscription info has successfully been set for the order under User's Active Subscriptions section"
    );
    cy.get('@staticTestData').then((staticTestData: any) => {
        ordersPageLocators.subscriptionsSection
            .heading()
            .parent()
            .parent()
            .siblings()
            .within(() => {
                ordersPageLocators.subscriptionsSection
                    .subscriptionId()
                    .should('be.visible')
                    .invoke('text')
                    .then((subscriptionId) => {
                        dynamicTestData.subscriptionId = subscriptionId.trim();
                    });
                cy.logStep('Check Amount + Tax');
                ordersPageLocators.subscriptionsSection
                    .subscriptionAmount(staticTestData.amountPlusTax)
                    .should('be.visible');
                cy.logStep('Check active subscription Status');
                ordersPageLocators.subscriptionsSection
                    .subscriptionStatus()
                    .should('be.visible')
                    .invoke('text')
                    .then((status) => {
                        expect(status.trim()).to.eq(
                            staticTestData.activeSubscriptionStatus
                        );
                    });
            });
    });
});

Then('The user cancels the recently made Digital Subscription Plan', () => {
    cy.logStep('Cancel the recently made digital subscription plan');

    ordersPageLocators.subscriptionsSection.cancelSubscriptionButton().click();

    ordersPageLocators.subscriptionsSection
        .restoreSubscriptionButton()
        .should('be.visible');

    cy.get('@staticTestData').then((staticTestData: any) => {
        ordersPageLocators.subscriptionsSection
            .heading()
            .parent()
            .parent()
            .siblings()
            .within(() => {
                ordersPageLocators.subscriptionsSection
                    .subscriptionId()
                    .invoke('text')
                    .then((subscriptionId) => {
                        expect(subscriptionId.trim()).to.eq(
                            dynamicTestData.subscriptionId
                        );
                    });
                cy.logStep('Check Amount + Tax');
                ordersPageLocators.subscriptionsSection
                    .subscriptionAmount(staticTestData.amountPlusTax)
                    .should('be.visible');
                cy.logStep('Check canceled subscription Status');
                ordersPageLocators.subscriptionsSection
                    .subscriptionStatus()
                    .invoke('text')
                    .then((status) => {
                        expect(status.trim()).to.eq(
                            staticTestData.cancelledSubscriptionStatus
                        );
                    });
            });
    });
});

Then(
    'The user navigates to the Orders page and views the recently placed order',
    () => {
        cy.logStep('Navigate to orders page');
        dashboardLocators.ordersNavigationMenuItemLink().click();

        cy.logStep('Check order has successfully been added to the Orders');
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep('Check Order ID');
            ordersPageLocators.orders
                .orderId(dynamicTestData.orderId)
                .should('be.visible');
            cy.logStep('Check Customer Name');
            ordersPageLocators.orders
                .orderRow(dynamicTestData.orderId)
                .within(() => {
                    ordersPageLocators.orders
                        .customerName(staticTestData.userName)
                        .should('be.visible');
                });
            cy.logStep('Check Customer Email');
            ordersPageLocators.orders
                .orderRow(dynamicTestData.orderId)
                .within(() => {
                    ordersPageLocators.orders
                        .customerEmail(dynamicTestData.userEmail)
                        .should('be.visible');
                });
            cy.logStep('Check Customer Phone');
            ordersPageLocators.orders
                .orderRow(dynamicTestData.orderId)
                .within(() => {
                    ordersPageLocators.orders
                        .customerPhone(staticTestData.userPhone)
                        .should('be.visible');
                });
            cy.logStep('Check Total Amount');
            ordersPageLocators.orders
                .orderRow(dynamicTestData.orderId)
                .within(() => {
                    ordersPageLocators.orders
                        .totalAmount(staticTestData.totalAmount)
                        .should('be.visible');
                });
            cy.logStep('Check Refunded Amount');
            ordersPageLocators.orders
                .orderRow(dynamicTestData.orderId)
                .within(() => {
                    ordersPageLocators.orders
                        .refundedAmount(staticTestData.refundedAmount)
                        .should('be.visible');
                });
            cy.logStep('Check Created By');
            ordersPageLocators.orders
                .orderRow(dynamicTestData.orderId)
                .within(() => {
                    ordersPageLocators.orders
                        .createdBy(staticTestData.accountType)
                        .should('be.visible');
                });
            cy.logStep('Check Status');
            ordersPageLocators.orders
                .orderRow(dynamicTestData.orderId)
                .within(() => {
                    ordersPageLocators.orders
                        .orderStatus(staticTestData.orderStatus)
                        .should('be.visible');
                });
        });
    }
);
