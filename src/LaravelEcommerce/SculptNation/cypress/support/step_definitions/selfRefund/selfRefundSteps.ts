/// <reference types="cypress" />

import { When, Then, Step } from '@badeball/cypress-cucumber-preprocessor';
import { usersPageLocators } from '../../locator_libraries';
import { dynamicTestData } from '../../testData';

Then(
    /^The user "(creates|verifies)" a self "(refund|return)" with "(no prior refund|prior refund not on this order|prior refund on this order)"$/,
    (action: string, actionType: string, condition: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            if (action === 'creates' && actionType === 'refund') {
                const { refundAmount } = staticTestData.refundData;
                const { refundReason } = staticTestData.refundData;
                const { totalRefund } = staticTestData.refundData;
                const { estimatedRefund } = staticTestData.refundData;
                if (condition === 'no prior refund') {
                    cy.createSelfRefund(refundAmount, refundReason, condition);
                } else if (condition === 'prior refund not on this order') {
                    cy.createSelfRefund(
                        estimatedRefund,
                        refundReason,
                        condition
                    );
                } else {
                    cy.createSelfRefund(totalRefund, refundReason, condition);
                }
            } else if (action === 'verifies' && actionType === 'refund') {
                const { totalRefund } = staticTestData.refundData;
                cy.checkSelfRefund(totalRefund);
            }
        });
    }
);

Then(
    /^The user creates a "(one bottle|bundle)" refund with "(no prior refund|prior refund not on this order)" with subscription "(cancellation|retention)"$/,
    (orderType: string, condition: string, subscriptionAction: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { refundAmount } = staticTestData.refundData;
            const { refundReason } = staticTestData.refundData;
            const { estimatedRefund } = staticTestData.refundData;
            switch (orderType) {
                case 'one bottle':
                    cy.createSelfRefund(
                        refundAmount,
                        refundReason,
                        condition,
                        subscriptionAction
                    );
                    break;
                case 'bundle':
                    if (condition === 'no prior refund') {
                        cy.createSelfRefund(
                            refundAmount,
                            refundReason,
                            condition,
                            subscriptionAction
                        );
                    } else if (condition === 'prior refund not on this order') {
                        cy.createSelfRefund(
                            estimatedRefund,
                            refundReason,
                            condition,
                            subscriptionAction
                        );
                    }
                    break;
                default:
                    throw new Error(
                        `Invalid order type ${orderType} specified`
                    );
            }
        });
    }
);

When('The user settles the payment', () => {
    cy.logStep('Retrieve the payment transaction reference number');
    const dbParams = {
        host: Cypress.env('DB_HOST'),
        port: Cypress.env('DB_PORT'),
        database: Cypress.env('DB_DB'),
        user: Cypress.env('DB_USER'),
        password: Cypress.env('DB_PASSWORD'),
        query: '',
        params: '',
    };

    cy.get('@staticTestData').then((staticTestData: any) => {
        dbParams.query = staticTestData.getTxnRefNo;
        dbParams.params = dynamicTestData.userEmail;

        cy.task('runSQLCmd', dbParams).then((queryResult: any) => {
            const result = JSON.parse(queryResult);
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(10000);
            result.forEach((data: any) => {
                cy.logStep('Settle payment using SSH command');
                cy.task('getSshKey').then((sshKeyPath: any) => {
                    const sshInfo = {
                        sshHost: Cypress.env('SSH_HOST'),
                        sshUrl: Cypress.config().baseUrl,
                        sshUsername: Cypress.env('SSH_USERNAME'),
                        sshPort: Cypress.env('SSH_PORT'),
                        sshKeyPath,
                        sshCmd: `php artisan test:transaction:settle ${data.transaction_ref}`,
                    };
                    cy.task('runSshCmd', sshInfo).then((output: any) => {
                        cy.log(output);
                    });
                });
            });
        });
    });
});

Then(
    'The user clicks on the Order Id {int} in the Orders table',
    (row: number) => {
        cy.logStep('Click on the Order Id link');
        usersPageLocators.ordersTable.rows(row).within(() => {
            usersPageLocators.ordersTable.orderIdLink().click();
        });
    }
);

When('The user navigates to the product landing page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(
            `Navigate to SculptNation landing page for ${staticTestData.productLandingPage.productName}`
        );

        cy.visit(`/products/${staticTestData.productLandingPage.productUrl}`);
    });
});

Then('The user verifies the subscription status', () => {
    usersPageLocators.subscriptions
        .table()
        .find('tr')
        .then((rows) => {
            if (rows.length > 2) {
                cy.get('@staticTestData').then((staticTestData: any) => {
                    const { status } = staticTestData.refundData.subscription;
                    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
                    for (let i = 0; i <= status.length - 1; i++) {
                        usersPageLocators.subscriptions
                            .row(i + 1)
                            .within(() => {
                                usersPageLocators.subscriptions
                                    .initialStatus()
                                    .should('have.text', status[i]);
                            });
                    }
                });
            } else {
                cy.get('@staticTestData').then((staticTestData: any) => {
                    const { status } = staticTestData.refundData.subscription;
                    usersPageLocators.subscriptions.row(1).within(() => {
                        usersPageLocators.subscriptions
                            .initialStatus()
                            .should('have.text', status);
                    });
                });
            }
        });
});

When(
    /^The user creates a (new|second) (one bottle|bundle) subscription$/,
    (orderOption: string, orderType: string) => {
        if (orderType === 'one bottle') {
            Step(
                new Mocha.Context(),
                'The user navigates to the product landing page'
            );
            Step(
                new Mocha.Context(),
                'The user clicks Buy Now button from the product page'
            );
            Step(
                new Mocha.Context(),
                'The user selects the Subscribe Now button under the One Bottle option and checks that the Cart data is correct'
            );
            Step(
                new Mocha.Context(),
                'The user clicks the Proceed to Checkout button'
            );

            if (orderOption === 'new') {
                Step(
                    new Mocha.Context(),
                    'The user fills in the fields on the Checkout page and places the order'
                );
            } else {
                Step(
                    new Mocha.Context(),
                    'The user fills in the credit card details on the Checkout page and places the order'
                );
            }

            Step(
                new Mocha.Context(),
                'The user clicks the "Declines" button on the "first" upsell page'
            );
            Step(
                new Mocha.Context(),
                'The user clicks the "Declines" button on the "second" upsell page'
            );
            Step(
                new Mocha.Context(),
                'The user clicks the "Declines" button on the "third" upsell page'
            );
        } else if (orderType === 'bundle') {
            Step(
                new Mocha.Context(),
                'The user navigates to the product landing page'
            );
            Step(
                new Mocha.Context(),
                'The user clicks Buy Now button from the product page'
            );
            Step(
                new Mocha.Context(),
                'The user selects the Subscribe Now button under the One Bottle option and checks that the Cart data is correct'
            );
            Step(
                new Mocha.Context(),
                'The user clicks the Proceed to Checkout button'
            );
            if (orderOption === 'new') {
                Step(
                    new Mocha.Context(),
                    'The user fills in the fields on the Checkout page and places the order'
                );
            } else {
                Step(
                    new Mocha.Context(),
                    'The user fills in the credit card details on the Checkout page and places the order'
                );
            }
            Step(
                new Mocha.Context(),
                'The user clicks the "Declines" button on the "first" upsell page'
            );
            Step(
                new Mocha.Context(),
                'The user clicks the "Declines" button on the "second" upsell page'
            );
            Step(
                new Mocha.Context(),
                'The user clicks the "Declines" button on the "third" upsell page'
            );
            Step(
                new Mocha.Context(),
                'The user clicks the "Declines" button on the "fourth" upsell page'
            );
            Step(
                new Mocha.Context(),
                'The user clicks the "Declines" button on the "fifth" upsell page'
            );
        }
    }
);

When(
    /^The user creates a (new|second) (one bottle|multi bottle|bundle) order$/,
    (orderOption: string, orderType: string) => {
        switch (orderType) {
            case 'one bottle':
                Step(
                    new Mocha.Context(),
                    'The user navigates to the product landing page'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks Buy Now button from the product page'
                );
                Step(
                    new Mocha.Context(),
                    'The user selects One-time delivery price check box under the One Bottle option'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks the "Add To Cart" button under the "One Bottle" option and checks that the Cart data is correct'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks the Proceed to Checkout button'
                );

                if (orderOption === 'new') {
                    Step(
                        new Mocha.Context(),
                        'The user fills in the fields on the Checkout page and places the order'
                    );
                } else {
                    Step(
                        new Mocha.Context(),
                        'The user fills in the credit card details on the Checkout page and places the order'
                    );
                }

                Step(
                    new Mocha.Context(),
                    'The user clicks the "Declines" button on the "first" upsell page'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks the "Declines" button on the "second" upsell page'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks the "Declines" button on the "third" upsell page'
                );
                break;
            case 'multi bottle':
                Step(
                    new Mocha.Context(),
                    'The user navigates to the product landing page'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks Buy Now button from the product page'
                );
                Step(
                    new Mocha.Context(),
                    'The user selects One-time delivery price check box under the One Bottle option'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks the "Add To Cart" button under the "One Bottle" option and checks that the Cart data is correct'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks the Proceed to Checkout button'
                );
                if (orderOption === 'new') {
                    Step(
                        new Mocha.Context(),
                        'The user fills in the fields on the Checkout page and places the order'
                    );
                    Step(
                        new Mocha.Context(),
                        'The user clicks the "Upgrade" button on the "first" upsell page'
                    );
                    Step(
                        new Mocha.Context(),
                        'The user selects One-time delivery price check box and clicks Speed Up My Metabolism on the "second" upsell page'
                    );
                    Step(
                        new Mocha.Context(),
                        'The user selects One-time delivery price check box and clicks Add To Cart on the "third" upsell page'
                    );
                    Step(
                        new Mocha.Context(),
                        'The user clicks the "Declines" button on the "fourth" upsell page'
                    );
                } else {
                    Step(
                        new Mocha.Context(),
                        'The user fills in the credit card details on the Checkout page and places the order'
                    );
                    Step(
                        new Mocha.Context(),
                        'The user clicks the "Upgrade" button on the "first" upsell page'
                    );
                    Step(
                        new Mocha.Context(),
                        'The user clicks the "Declines" button on the "second" upsell page'
                    );
                    Step(
                        new Mocha.Context(),
                        'The user clicks the "Declines" button on the "third" upsell page'
                    );
                    Step(
                        new Mocha.Context(),
                        'The user clicks the "Declines" button on the "fourth" upsell page'
                    );
                }
                break;
            case 'bundle':
                Step(
                    new Mocha.Context(),
                    'The user navigates to the product landing page'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks Buy Now button from the product page'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks the "Add To Cart" button under the "Three Bottles" option and checks that the Cart data is correct'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks the Proceed to Checkout button'
                );
                if (orderOption === 'new') {
                    Step(
                        new Mocha.Context(),
                        'The user fills in the fields on the Checkout page and places the order'
                    );
                } else {
                    Step(
                        new Mocha.Context(),
                        'The user fills in the credit card details on the Checkout page and places the order'
                    );
                }
                Step(
                    new Mocha.Context(),
                    'The user clicks the "Declines" button on the "first" upsell page'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks the "Declines" button on the "second" upsell page'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks the "Declines" button on the "third" upsell page'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks the "Declines" button on the "fourth" upsell page'
                );
                Step(
                    new Mocha.Context(),
                    'The user clicks the "Declines" button on the "fifth" upsell page'
                );
                break;
            default:
                throw new Error(`Invalid ${orderType}`);
        }
    }
);

Then('The user verifies the subscription status in the admin tool', () => {
    cy.logStep('Navigate to Dashboard page');
    cy.visit('/nova/');

    Step(new Mocha.Context(), 'The user searches the "Dynamic" test email');
    Step(
        new Mocha.Context(),
        'The user clicks the "Subscriptions" tab on the Orders section'
    );
    Step(new Mocha.Context(), 'The user verifies the subscription status');
});

Then(
    /^The user verifies "(one bottle|multi bottle|bundle)" self refund with "(no prior refund|prior refund not on this order|prior refund on this order)" in the admin tool$/,
    (orderType: string, refundOption: string) => {
        Step(
            new Mocha.Context(),
            'The user logs into the Admin Tool using an account with "admin" credentials'
        );
        Step(new Mocha.Context(), 'The user searches the "Dynamic" test email');

        switch (orderType) {
            case 'one bottle':
                if (
                    refundOption === 'no prior refund' ||
                    refundOption === 'prior refund on this order'
                ) {
                    Step(
                        new Mocha.Context(),
                        'The user clicks on the Order Id 1 in the Orders table'
                    );
                } else {
                    Step(
                        new Mocha.Context(),
                        'The user clicks on the Order Id 2 in the Orders table'
                    );
                }
                break;
            case 'multi bottle':
                if (
                    refundOption === 'no prior refund' ||
                    refundOption === 'prior refund on this order'
                ) {
                    Step(
                        new Mocha.Context(),
                        'The user clicks on the Order Id 1 in the Orders table'
                    );
                } else {
                    Step(
                        new Mocha.Context(),
                        'The user clicks on the Order Id 3 in the Orders table'
                    );
                }
                break;
            case 'bundle':
                if (
                    refundOption === 'no prior refund' ||
                    refundOption === 'prior refund on this order'
                ) {
                    Step(
                        new Mocha.Context(),
                        'The user clicks on the Order Id 1 in the Orders table'
                    );
                } else {
                    Step(
                        new Mocha.Context(),
                        'The user clicks on the Order Id 2 in the Orders table'
                    );
                }
                break;
            default:
                throw new Error(`Invalid ${orderType}`);
        }

        Step(
            new Mocha.Context(),
            'The user validates the "Self Refunded" data on the Order Details page'
        );
        Step(
            new Mocha.Context(),
            'The user clicks on the "Order Offers" tab on the Order Details page'
        );
        Step(
            new Mocha.Context(),
            'The user validates the "Self Refunded" Order data on row "1" of the Order Offers page'
        );
        Step(
            new Mocha.Context(),
            'The user clicks on the "Invoices" tab on the Order Details page'
        );
        Step(
            new Mocha.Context(),
            'The user validates the Order data on the Invoices page'
        );
        Step(
            new Mocha.Context(),
            'The user clicks on the "Payments" tab on the Order Details page'
        );
        Step(
            new Mocha.Context(),
            'The user validates the "Self Refunded" Order data on the Payments page'
        );
    }
);
