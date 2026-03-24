/// <reference types="cypress" />

import { Then, When, Step } from '@badeball/cypress-cucumber-preprocessor';
import { createNewAddress } from 'LaravelEcommerce/SculptNation/cypress/commands/adminPageCommands/createNewAddress';
import { dashboardLocators, usersPageLocators } from '../../locator_libraries';
import { dynamicTestData } from '../../testData';

When('The user creates a new test user in the Admin Tool', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        dynamicTestData.userPassword = Math.floor(
            Math.random() * 100000000
        ).toString();

        cy.logStep('Click on users menu button');
        dashboardLocators.menuButton('users').click();

        cy.logStep('Click on Create New User');
        usersPageLocators.createNewUserButton().click();

        cy.logStep('Enter valid user data in the form and click Create User');
        cy.generateRandomTestEmail().then((randomEmail) => {
            dynamicTestData.userEmail = randomEmail;

            cy.createUserInAdminTool(
                staticTestData.firstName,
                staticTestData.lastName,
                dynamicTestData.userEmail,
                dynamicTestData.userPassword
            );
        });

        cy.logStep('Verify success toast message');
        dashboardLocators
            .successToast()
            .should('be.visible')
            .and('have.text', 'The user was created!');
    });
});

Then('The Users page is displayed', () => {
    // cy.findByRole('link', { name: /create user/i }).should('be.visible');
    usersPageLocators.createNewUserButton().should('be.visible');
    dashboardLocators.searchInput().should('be.visible');
});

When('The user clicks on the Create User button on the Users page', () => {
    cy.log('Click on Create New User');
    usersPageLocators.createNewUserButton().click();
});

When(
    /^The user clicks on the "(Create User|Create & Add Another|Cancel|Add New Media)" button on the User Information page$/,
    (button: string) => {
        switch (button) {
            case 'Create User':
                usersPageLocators.newUserForm.createUserButton().click();
                break;
            case 'Create & Add Another':
                usersPageLocators.newUserForm
                    .createAndAddAnotherButton()
                    .click();
                break;
            case 'Cancel':
                usersPageLocators.newUserForm.cancelButton().click();
                break;
            case 'Add New Media':
                usersPageLocators.newUserForm.addNewMediaButton().click();
                break;
            default:
                throw new Error('Invalid button specified');
        }
    }
);

Then(
    /^The user enters "([^"]*)" in the "(first name|last name|email|password)" field of the User Information page$/,
    (value: string, field: string) => {
        let inputValue = value;
        let inputField: any;

        switch (field) {
            case 'first name':
                inputField =
                    usersPageLocators.newUserForm.firstNameInputField();
                break;
            case 'last name':
                inputField = usersPageLocators.newUserForm.lastNameInputField();
                break;
            case 'email':
                inputField = usersPageLocators.newUserForm.emailInputField();

                if (value === 'a valid test email') {
                    cy.generateRandomTestEmail().then((randomEmail) => {
                        inputValue = randomEmail;
                    });
                }

                dynamicTestData.userEmail = inputValue;
                break;
            case 'password':
                inputField = usersPageLocators.newUserForm.passwordInputField();

                if (value === 'a valid password') {
                    inputValue = Math.floor(
                        Math.random() * 100000000
                    ).toString();
                }

                dynamicTestData.userPassword = inputValue;
                break;
            default:
                throw new Error('Invalid input field specified.');
        }

        if (field === 'password') {
            // input field should be of type password so that the value is hidden from view
            inputField.should('have.attr', 'type', 'password');

            // for security reasons, do not log the password when typing it
            inputField.type(inputValue, { log: false });
        } else {
            inputField.type(inputValue);
        }
    }
);

Then(
    'The user sees the User Information page for the newly created test user',
    () => {
        cy.logStep('Verify newly added user data is correct');

        usersPageLocators.editUserInformation
            .detailsTab()
            .then((detailsTab) => {
                expect(detailsTab.attr('class')).to.include(
                    'text-grey-black font-bold border-primary'
                );
            });

        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.get(
                usersPageLocators.editUserInformation.detailsSection()
            ).within(() => {
                usersPageLocators.editUserInformation
                    .userInformation(staticTestData.firstName)
                    .should('be.visible');
                usersPageLocators.editUserInformation
                    .userInformation(staticTestData.lastName)
                    .should('be.visible');
                usersPageLocators.editUserInformation
                    .userInformation(dynamicTestData.userEmail)
                    .should('be.visible');
            });
        });
    }
);

Then('The user deletes the test user in the Admin Tool', () => {
    cy.logStep('Delete the test user');
    cy.deleteUserInAdminTool();
});

Then('The user navigates to the New Order page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const userName = `${staticTestData.firstName} ${staticTestData.lastName}`;

        cy.logStep('Go to the New Order page for the test user');

        cy.navigateToNewOrderPage(userName);
    });
});

When(
    /^The user clicks on the "(Delete|Process Order For User)" button on the User Information page$/,
    (button: string) => {
        switch (button) {
            case 'Delete':
                cy.logStep('Delete the user');
                usersPageLocators.editUserInformation
                    .deleteUserButton()
                    .click();
                break;
            case 'Process Order For User':
                cy.logStep('Click Process Order for the user');
                usersPageLocators.editUserInformation
                    .processOrderForUserButton()
                    .click();
                break;
            default:
                throw new Error('Invalid button specified.');
        }
    }
);

When(
    /^The user clicks on the "(Delete|Cancel)" button on the delete user confirmation pop-up$/,
    (button: string) => {
        usersPageLocators.editUserInformation.confirmUserDeleteButton().click();
        switch (button) {
            case 'Delete':
                usersPageLocators.editUserInformation
                    .confirmUserDeleteButton()
                    .click();
                break;
            case 'Cancel':
                usersPageLocators.editUserInformation
                    .cancelUserDeleteButton()
                    .click();
                break;
            default:
                throw new Error('Invalid button specified.');
        }
    }
);

Then('The user sees the Recent Orders page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const userName = `${staticTestData.firstName} ${staticTestData.lastName}`;

        usersPageLocators.recentOrders
            .recentOrdersHeading(userName)
            .should('be.visible');
        usersPageLocators.recentOrders
            .recentCartsHeading(userName)
            .should('be.visible');
    });

    usersPageLocators.recentOrders.newOrderButton().should('be.visible');
});

When(
    /^The user clicks the "(New Order|Customer Name)" button on the Recent Orders page$/,
    (button: string) => {
        switch (button) {
            case 'New Order':
                usersPageLocators.recentOrders.newOrderButton().click();
                break;
            case 'Customer Name':
                usersPageLocators.recentOrders.userNameLink().click();
                break;
            default:
                throw new Error('Invalid button specified.');
        }
    }
);

Then('The user sees the offer and the total amount in the Orders table', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        usersPageLocators.ordersTable.rows(1).within(() => {
            usersPageLocators.ordersTable
                .offers()
                .invoke('text')
                .then((text) => {
                    expect(text.trim()).to.equal(staticTestData.productName);
                });
            usersPageLocators.ordersTable
                .totalAmount()
                .should('have.text', staticTestData.totalAmount);
        });
    });
});

Then(
    'The user sees the shipment status as {string} and sees {string} rows in the Fulfilment Logs section of the Shipment Details page',
    (status: string, numberOfRows: string) => {
        cy.logStep('Check the shipment status and number of fulfillment logs');
        usersPageLocators.detailsPages
            .fieldName('Status')
            .should('contain.text', status);
        usersPageLocators.fulfillmentLogs
            .rows()
            .should('have.length', numberOfRows);
    }
);

// ORDER DETAILS - DETAILS
Then(
    'The user validates the {string} data on the Order Details page',
    (orderType: string) => {
        cy.logStep('Validate Order Details data');
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep('Check Base Currency Amount');
            usersPageLocators.detailsPages
                .fieldName('Base Currency Amount')
                .should('contain.text', staticTestData.baseCurrencyTotalAmount);
            cy.logStep('Check Amount');
            usersPageLocators.detailsPages
                .fieldName('Amount')
                .should('contain.text', staticTestData.totalAmount);
            cy.logStep('Check Refunded Amount');
            usersPageLocators.detailsPages
                .fieldName('Refunded')
                .should(
                    'contain.text',
                    orderType.includes('Refunded')
                        ? staticTestData.amountRefunded
                        : staticTestData.refundedAmount
                );
            cy.logStep('Check Base Currency Subtotal');
            usersPageLocators.detailsPages
                .fieldName('Base Currency Subtotal')
                .should('contain.text', staticTestData.baseCurrencySubtotal);
            cy.logStep('Check COGS Amount');
            usersPageLocators.detailsPages
                .fieldName('COGS Amount')
                .should('contain.text', staticTestData.COGSAmount);
            cy.logStep('Check Order Status');
            usersPageLocators.detailsPages
                .fieldName('Status')
                .should('contain.text', staticTestData.orderStatus);
        });
    }
);

Then(
    'The user sees the {string} as {string} on the {string} Details page',
    (fieldName: string, value: string) => {
        usersPageLocators.detailsPages
            .fieldName(fieldName)
            .should('contain.text', value);
    }
);

Then(
    'The user sees {string} rows in the Fulfilment Logs section of the Shipment Details page',
    (value: string) => {
        usersPageLocators.fulfillmentLogs
            .rows()
            .eq(Number(value) - 1)
            .should('be.visible')
            .and('contain.text', 'QuietLogistics')
            .and('contain.text', 'false');
    }
);

Then(
    /^The user clicks on the Fulfillment Id link on row "([^"]*)" and sees the "(Payload|Response)" information on the Fulfilment Log Details page$/,
    (rowNumber: string, section: string) => {
        cy.logStep(`Click Fulfillment Id link and check ${section} section`);
        usersPageLocators.fulfillmentLogs
            .rows()
            .eq(Number(rowNumber) - 1)
            .within(() => {
                usersPageLocators.fulfillmentLogs.fulfillmentLogId().click();
            });
        // usersPageLocators.fulfillmentLogs.noErrorsStatus().should('be.visible');

        if (section === 'Payload') {
            usersPageLocators.fulfillmentLogs
                .payloadContent()
                .should('contain.text', dynamicTestData.referenceNumber)
                .and(
                    'contain.text',
                    'schemas.quietlogistics.com/V2/ShipmentOrder.xsd'
                );
            usersPageLocators.fulfillmentLogs
                .responseContent()
                .should(
                    'not.contain.text',
                    'schemas.quiettechnology.com/V2/SOResultDocument.xsd'
                );
        } else if (section === 'Response') {
            usersPageLocators.fulfillmentLogs
                .payloadContent()
                .should(
                    'not.contain.text',
                    'schemas.quietlogistics.com/V2/ShipmentOrder.xsd'
                );
            usersPageLocators.fulfillmentLogs
                .responseContent()
                .should('contain.text', dynamicTestData.referenceNumber)
                .and(
                    'contain.text',
                    'schemas.quiettechnology.com/V2/SOResultDocument.xsd'
                );
        } else {
            throw new Error('Invalid section specified');
        }
    }
);

Then(
    'The user sees the Payload information on the Fulfilment Log Details page',
    () => {
        usersPageLocators.fulfillmentLogs
            .payloadContent()
            .should('contain.text', dynamicTestData.referenceNumber);
    }
);

Then(
    'The user sees the reference number on row {string} the Shipments page',
    (row: string) => {
        usersPageLocators.shipments.row(Number(row)).within(() => {
            usersPageLocators.shipments
                .referenceNumber()
                .should('be.visible')
                .invoke('text')
                .then((reference) => {
                    dynamicTestData.referenceNumber = reference;
                });
        });
    }
);

Then(
    'The user sees the {string} as {string} on row {string} of the Shipments page',
    (name: string, value: string, row: string) => {
        usersPageLocators.shipments.row(Number(row)).within(() => {
            switch (name) {
                case 'Status':
                    usersPageLocators.shipments
                        .status()
                        .should('have.text', value);
                    break;
                default:
                    throw new Error('Invalid column specified');
            }
        });
    }
);

// ORDER DETAILS - ORDER OFFERS
Then(
    'The user validates the {string} Order data on row {string} of the Order Offers page',
    (orderType: string, row: string) => {
        cy.logStep('Validate Order Offer data');
        cy.get('@staticTestData').then((staticTestData: any) => {
            switch (row) {
                case '1':
                    cy.logStep(
                        `Validate the ${orderType} order data on product row`
                    );
                    usersPageLocators.orderOffers.row(1).within(() => {
                        cy.logStep('Check Offer');
                        usersPageLocators.orderOffers
                            .offerName()
                            .invoke('text')
                            .then((text) => {
                                if (
                                    typeof staticTestData.productName !==
                                    'undefined'
                                ) {
                                    expect(text.trim()).to.equal(
                                        staticTestData.productName
                                    );
                                } else {
                                    expect(text.trim()).to.equal(
                                        staticTestData.refundData.refundProduct
                                    );
                                }
                            });
                        cy.logStep('Check Base Currency Amount');
                        if (
                            typeof staticTestData.productPrice !== 'undefined'
                        ) {
                            usersPageLocators.orderOffers
                                .baseCurrencyTotalAmount()
                                .should(
                                    'have.text',
                                    staticTestData.productPrice
                                );
                        } else {
                            usersPageLocators.orderOffers
                                .baseCurrencyTotalAmount()
                                .should(
                                    'have.text',
                                    staticTestData.refundData.subtotal
                                );
                        }

                        cy.logStep('Check Amount');
                        if (
                            typeof staticTestData.productPrice !== 'undefined'
                        ) {
                            usersPageLocators.orderOffers
                                .amount()
                                .should(
                                    'have.text',
                                    staticTestData.productPrice
                                );
                        } else {
                            usersPageLocators.orderOffers
                                .amount()
                                .should(
                                    'have.text',
                                    staticTestData.refundData.subtotal
                                );
                        }

                        cy.logStep('Check Discounted Amount');
                        usersPageLocators.orderOffers
                            .discountedAmount()
                            .should(
                                'have.text',
                                staticTestData.discountedAmount
                            );
                        // cy.logStep('Check Tax Amount');
                        // usersPageLocators.orderOffers
                        //     .taxAmount()
                        //     .should('have.text', staticTestData.productTax);
                        cy.logStep('Check Quantity');
                        if (
                            typeof staticTestData.productQuantity !==
                            'undefined'
                        ) {
                            usersPageLocators.orderOffers
                                .quantity()
                                .should(
                                    'have.text',
                                    staticTestData.productQuantity
                                );
                        } else {
                            usersPageLocators.orderOffers
                                .quantity()
                                .should(
                                    'have.text',
                                    staticTestData.refundData.quantity
                                );
                        }

                        cy.logStep('Check Type');
                        usersPageLocators.orderOffers
                            .type()
                            .should('have.text', staticTestData.typeProduct);
                        cy.logStep('Check Amount Refunded');
                        let amountRefunded: string;
                        switch (orderType) {
                            case 'Refunded Item':
                            case 'Refunded Order without Shipping':
                            case 'Refunded Order with Shipping':
                                if (
                                    typeof staticTestData.productPrice !==
                                    'undefined'
                                ) {
                                    amountRefunded =
                                        staticTestData.productPrice;
                                } else {
                                    amountRefunded =
                                        staticTestData.refundData.subtotal;
                                }
                                break;
                            default:
                                amountRefunded = staticTestData.refundedAmount;
                                break;
                        }
                        usersPageLocators.orderOffers
                            .amountRefunded()
                            .should('have.text', amountRefunded);
                        cy.logStep('Check Refundable Amount');
                        usersPageLocators.orderOffers
                            .refundable()
                            .should(
                                'have.text',
                                orderType === 'Refunded Item'
                                    ? staticTestData.refundedAmount
                                    : staticTestData.refundableAmount
                            );
                        if (orderType === 'Refunded Shipping')
                            usersPageLocators.orderOffers
                                .refundOrderItemButton()
                                .should(`be.enabled`);
                    });
                    break;
                case '2':
                    cy.logStep(
                        `Validate the ${orderType} order data on tax row`
                    );
                    usersPageLocators.orderOffers.row(2).within(() => {
                        cy.logStep('Check Base Currency Amount');
                        usersPageLocators.orderOffers
                            .baseCurrencyTotalAmount()
                            .should('have.text', staticTestData.productTax);
                        cy.logStep('Check Amount');
                        usersPageLocators.orderOffers
                            .amount()
                            .should('have.text', staticTestData.productTax);
                        cy.logStep('Check Discounted Amount');
                        usersPageLocators.orderOffers
                            .discountedAmount()
                            .should(
                                'have.text',
                                staticTestData.discountedAmount
                            );
                        cy.logStep('Check Tax Amount');
                        usersPageLocators.orderOffers
                            .taxAmount()
                            .should('have.text', staticTestData.noTaxAmount);
                        usersPageLocators.orderOffers
                            .quantity()
                            .should(
                                'have.text',
                                staticTestData.productQuantity
                            );
                        usersPageLocators.orderOffers
                            .type()
                            .should('have.text', staticTestData.typeTax);
                        cy.logStep('Check Amount Refunded');
                        usersPageLocators.orderOffers
                            .amountRefunded()
                            .should('have.text', staticTestData.refundedTax);
                        cy.logStep('Check Refundable Amount');
                        usersPageLocators.orderOffers
                            .refundable()
                            .should('have.text', staticTestData.refundableTax);
                    });
                    break;
                case '3':
                    cy.logStep(
                        `Validate the ${orderType} order data on shipping row`
                    );
                    usersPageLocators.orderOffers.row(3).within(() => {
                        usersPageLocators.orderOffers
                            .baseCurrencyTotalAmount()
                            .should('have.text', staticTestData.shippingCost);
                        usersPageLocators.orderOffers
                            .amount()
                            .should('have.text', staticTestData.shippingCost);
                        usersPageLocators.orderOffers
                            .discountedAmount()
                            .should(
                                'have.text',
                                staticTestData.discountedAmount
                            );
                        usersPageLocators.orderOffers
                            .taxAmount()
                            .should('have.text', staticTestData.noTaxAmount);
                        usersPageLocators.orderOffers
                            .quantity()
                            .should(
                                'have.text',
                                staticTestData.productQuantity
                            );
                        usersPageLocators.orderOffers
                            .type()
                            .should('have.text', staticTestData.typeShipping);
                        cy.logStep('Check Amount Refunded');
                        let amountRefunded: string;
                        switch (orderType) {
                            case 'Refunded Shipping':
                                amountRefunded = staticTestData.refundAmount;
                                break;
                            case 'Refunded Order with Shipping':
                                amountRefunded = staticTestData.shippingCost;
                                break;
                            default:
                                amountRefunded = staticTestData.refundedAmount;
                        }
                        usersPageLocators.orderOffers
                            .amountRefunded()
                            .should('have.text', amountRefunded);
                        cy.logStep('Check Refundable Amount');
                        usersPageLocators.orderOffers
                            .refundable()
                            .should(
                                'have.text',
                                orderType === 'Refunded Shipping' ||
                                    orderType === 'Refunded Order with Shipping'
                                    ? staticTestData.refundedAmount
                                    : staticTestData.shippingCost
                            );
                        if (
                            orderType === 'Refunded Item' ||
                            orderType === 'Refunded Order without Shipping'
                        ) {
                            usersPageLocators.orderOffers
                                .refundOrderItemButton()
                                .should(`be.enabled`);
                        }
                    });
                    break;
                default:
                    throw new Error('Invalid row number specified');
            }
        });
    }
);

// ORDER DETAILS - INVOICES
Then('The user validates the Order data on the Invoices page', () => {
    cy.logStep('Validate Invoice data');
    /* eslint-disable cypress/no-unnecessary-waiting */
    cy.wait(15000);
    cy.get('@staticTestData').then((staticTestData: any) => {
        usersPageLocators.invoices.row(1).within(() => {
            cy.logStep('Check Base Currency Amount');
            usersPageLocators.invoices
                .orderRow()
                .should('have.text', staticTestData.baseCurrencyTotalAmount);

            cy.logStep('Check Amount');
            usersPageLocators.invoices
                .amount()
                .should('have.text', staticTestData.totalAmount);

            cy.logStep('Check Invoice Status');
            usersPageLocators.invoices
                .status()
                .should('have.text', staticTestData.invoiceStatus);
        });
    });
});

Then('The user clicks the payments ID on the Payments page', () => {
    usersPageLocators.payments.row(Number(1)).within(() => {
        usersPageLocators.payments.paymentsId().click();
    });
});

// ORDER DETAILS - PAYMENTS
Then(
    'The user validates the {string} Order data on the Payments page',
    (orderType: string) => {
        cy.logStep('Validate Payment data');
        cy.get('@staticTestData').then((staticTestData: any) => {
            usersPageLocators.payments.row(Number(1)).within(() => {
                cy.logStep('Check Amount');
                usersPageLocators.payments
                    .amount()
                    .should('have.text', staticTestData.totalAmount);
                cy.logStep('Check Amount Refunded');
                usersPageLocators.payments
                    .amountRefunded()
                    .should(
                        'have.text',
                        orderType.includes('Refunded')
                            ? staticTestData.amountRefunded
                            : staticTestData.refundedAmount
                    );
                cy.logStep('Check Net Revenue');
                usersPageLocators.payments
                    .netRevenue()
                    .should(
                        'have.text',
                        orderType.includes('Refunded')
                            ? staticTestData.netRevenue
                            : staticTestData.totalAmount
                    );
                cy.logStep('Check Payment Status');
                usersPageLocators.payments
                    .status()
                    .should('have.text', staticTestData.paymentStatus);
            });
        });
    }
);

// ORDER DETAILS - SHIPMENTS
Then('The user validates the Order data on the Shipments page', () => {
    cy.logStep('Validate Shipment data');
    cy.get('@staticTestData').then((staticTestData: any) => {
        usersPageLocators.shipments.row(1).within(() => {
            cy.logStep('Check Shipment status');
            usersPageLocators.shipments
                .status()
                .should('have.text', staticTestData.shipmentStatus);
        });
    });
});

Then(
    /^The user clicks on the "(Details|Order Offers|Invoices|Payments|Shipments|Related Orders|Returns|Payment Logs)" tab on the (Order Details|Payment Details) page$/,
    (tabName: string) => {
        cy.logStep(`Click on the ${tabName} tab`);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20000);
        if (tabName === 'Shipments') {
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(20000);
        }

        usersPageLocators.detailsPages.tab(tabName).click();
        if (tabName === 'Details') {
            cy.reload();
        }
        usersPageLocators.loadingAnimation().should('not.exist');
    }
);

Then(
    'The user collects the Transaction Reference from the Payments page and settles the payment for the order',
    () => {
        cy.logStep('Click on the Payments tab');
        usersPageLocators.detailsPages.tab('Payments').click();
        usersPageLocators.loadingAnimation().should('not.exist');

        cy.logStep('Store Transaction Reference number');
        usersPageLocators.payments
            .transactionReference()
            .invoke('text')
            .then((reference) => {
                dynamicTestData.transactionReference = reference;

                cy.logStep('Settle payment using SSH command');
                const sshHost = Cypress.env('SSH_HOST');
                const sshUrl = Cypress.config().baseUrl;
                const sshUsername = Cypress.env('SSH_USERNAME');
                const sshPort = Cypress.env('SSH_PORT');
                const sshCmd = `php artisan test:transaction:settle ${dynamicTestData.transactionReference}`;

                cy.task('getSshKey').then((sshKeyPath: any) => {
                    const sshInfo = {
                        sshHost,
                        sshUrl,
                        sshUsername,
                        sshPort,
                        sshKeyPath,
                        sshCmd,
                    };
                    cy.task('runSshCmd', sshInfo).then((result: any) => {
                        cy.log(result);
                    });
                });
            });
    }
);

Then('The user clicks on the Order Id link in the Orders table', () => {
    cy.logStep('Click on the Order Id link');
    usersPageLocators.ordersTable.rows(1).within(() => {
        usersPageLocators.ordersTable.orderIdLink().click();
    });
});

Then('The user clicks on the Shipment Id link in the Shipments table', () => {
    cy.logStep('Click on the Shipment Id link');
    usersPageLocators.shipments
        .shipmentId()
        .invoke('text')
        .then((id) => {
            dynamicTestData.shipmentId = id;
        });
    usersPageLocators.shipments.shipmentId().click();
    usersPageLocators.shipments.status().should('be.visible');
});

Then(
    'The user sees the reference number on the Shipments page and sends the shipment for the order',
    () => {
        cy.logStep('Click on the Shipments tab');
        usersPageLocators.detailsPages.tab('Shipments').click();
        usersPageLocators.loadingAnimation().should('not.exist');

        cy.logStep('Collect the reference number from the first row');
        usersPageLocators.shipments.row(Number(1)).within(() => {
            usersPageLocators.shipments
                .referenceNumber()
                .should('be.visible')
                .invoke('text')
                .then((reference) => {
                    dynamicTestData.referenceNumber = reference;

                    cy.logStep('Send shipment using SSH command');
                    const sshHost = Cypress.env('SSH_HOST');
                    const sshUrl = Cypress.config().baseUrl;
                    const sshUsername = Cypress.env('SSH_USERNAME');
                    const sshPort = Cypress.env('SSH_PORT');
                    const sshCmd = `php artisan shipments:send --reference-numbers=${dynamicTestData.referenceNumber}`;

                    cy.task('getSshKey').then((sshKeyPath) => {
                        const sshInfo = {
                            sshHost,
                            sshUrl,
                            sshUsername,
                            sshPort,
                            sshKeyPath,
                            sshCmd,
                        };
                        cy.task('runSshCmd', sshInfo).then((result: any) => {
                            cy.log(result);
                        });
                    });

                    cy.logStep('Wait for the shipment changes to proparage');
                    // eslint-disable-next-line cypress/no-unnecessary-waiting
                    cy.wait(95000); // wait for the changes to propagate
                });
        });
    }
);

Then('The user sees the New Order page', () => {
    usersPageLocators.newOrder.backToUserButton().should('be.visible');
    usersPageLocators.newOrder.orderDetailsHeading().should('be.visible');
    usersPageLocators.newOrder.offersHeading().should('be.visible');
    usersPageLocators.newOrder.addShippingAddressButton().should('be.visible');
    usersPageLocators.newOrder.findUserButton().should('be.visible');
    usersPageLocators.newOrder.addOfferButton().should('be.visible');
    usersPageLocators.newOrder.addDiscountButton().should('be.visible');
    usersPageLocators.newOrder.paymentsHeading().should('be.visible');
    usersPageLocators.newOrder.shipmentsHeading().should('be.visible');
});

When(
    'The user adds a new shipping and billing address on the New Order page',
    () => {
        cy.logStep('Adding a new shipping address');
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.addNewShippingAddress(
                staticTestData.firstName,
                staticTestData.lastName,
                staticTestData.phone,
                staticTestData.address,
                staticTestData.address2,
                staticTestData.city,
                staticTestData.state,
                staticTestData.country,
                staticTestData.postalCode
            );

            dashboardLocators
                .successToast()
                .should('be.visible')
                .and('have.text', 'The Address was created!');
        });

        cy.logStep('Set the Shipping & Billing Addresses to be the same');
        usersPageLocators.changeAddressWidget
            .sameShippingAndBillingCheckmark()
            .click();
        usersPageLocators.changeAddressWidget.addressCard().eq(0).click();

        cy.logStep('Save the addresses and close the address widget');
        usersPageLocators.changeAddressWidget.saveAddressButton().click();
    }
);

When(
    /^The user clicks the "(Add Shipping Address|Find User|Add Offer|Add Discount|Back To User|Process Payment)" button on the New Order page$/,
    (button: string) => {
        switch (button) {
            case 'Add Shipping Address':
                cy.intercept('GET', '/nova-api/addresses*').as('createAddress');

                usersPageLocators.newOrder.addShippingAddressButton().click();

                cy.wait('@createAddress');
                break;
            case 'Find User':
                usersPageLocators.newOrder.findUserButton().click();
                break;
            case 'Add Offer':
                usersPageLocators.newOrder.addOfferButton().click();
                break;
            case 'Add Discount':
                usersPageLocators.newOrder.addDiscountButton().click();
                break;
            case 'Back To User':
                usersPageLocators.newOrder.backToUserButton().click();
                break;
            case 'Process Payment':
                cy.intercept(
                    'GET',
                    '/nova-vendor/process-order/user/*/payment-method'
                ).as('paymentWindowLoading');

                usersPageLocators.newOrder.processPaymentButton().click();

                cy.wait('@paymentWindowLoading');
                break;
            default:
                throw new Error('Invalid button specified');
        }
    }
);

Then(
    /^The user clicks on the "(Add New Shipping Address|Add New Billing Address|Add New Address|Cancel Change Address|Save Address|Cancel Creater Address|Create Address|Shipping & Billing Adresses Are The Same)" button on the Change Address widget$/,
    (button: string) => {
        cy.intercept('GET', '/nova-api/addresses*').as('createAddress');

        usersPageLocators.changeAddressWidget
            .loadingAnimation()
            .should('not.exist');

        switch (button) {
            case 'Add New Shipping Address':
                cy.logStep('Adding a new address');

                usersPageLocators.changeAddressWidget
                    .addNewShippingAddress()
                    .click();
                break;
            case 'Add New Billing Address':
                usersPageLocators.changeAddressWidget
                    .addNewBillingAddress()
                    .click();
                break;
            case 'Add New Address':
                usersPageLocators.changeAddressWidget.addNewAddress().click();
                break;
            case 'Cancel Change Address':
                usersPageLocators.changeAddressWidget
                    .cancelChangeAddressButton()
                    .click();
                break;
            case 'Save Address':
                usersPageLocators.changeAddressWidget
                    .saveAddressButton()
                    .click();
                break;
            case 'Cancel Creater Address':
                usersPageLocators.changeAddressWidget
                    .cancelCreateAddressButton()
                    .click();
                break;
            case 'Create Address':
                usersPageLocators.changeAddressWidget
                    .createAddressButton()
                    .click();

                cy.wait('@createAddress');

                usersPageLocators.changeAddressWidget
                    .loadingAnimation()
                    .should('not.exist');
                break;
            case 'Shipping & Billing Adresses Are The Same':
                usersPageLocators.changeAddressWidget
                    .sameShippingAndBillingCheckmark()
                    .click();

                usersPageLocators.changeAddressWidget
                    .addressCard()
                    .eq(0)
                    .click();
                break;
            default:
                throw new Error('Invalid button specified');
        }
    }
);

Then(
    /^The user clicks the "(Is Primary Billing|Is Primary Shipping)" checkbox of the Add Address pop-up$/,
    (option: string) => {
        switch (option) {
            case 'Is Primary Billing':
                usersPageLocators.changeAddressWidget
                    .isPrimaryBillingCheckbox()
                    .click();
                break;
            case 'Is Primary Shipping':
                usersPageLocators.changeAddressWidget
                    .isPrimaryShippingCheckbox()
                    .click();
                break;
            default:
                throw new Error('Invalid option specified');
        }
    }
);

Then(
    /^The user enters "([^"]*)" in the "(First Name|Last Name|Company Name|Phone Number|Address|Address 2|City|State|Country|Postal Code)" field of the Add Address pop-up$/,
    (value: string, option: string) => {
        switch (option) {
            case 'First Name':
                usersPageLocators.changeAddressWidget
                    .firstNameField()
                    .type(value);
                break;
            case 'Last Name':
                usersPageLocators.changeAddressWidget
                    .lastNameField()
                    .type(value);
                break;
            case 'Company Name':
                usersPageLocators.changeAddressWidget
                    .companyNameField()
                    .type(value);
                break;
            case 'Phone Number':
                usersPageLocators.changeAddressWidget
                    .phoneNumberField()
                    .type(value);
                break;
            case 'Address':
                usersPageLocators.changeAddressWidget
                    .addressField()
                    .type(value);
                break;
            case 'Address 2':
                usersPageLocators.changeAddressWidget
                    .address2Field()
                    .type(value);
                break;
            case 'City':
                usersPageLocators.changeAddressWidget.cityField().type(value);
                break;
            case 'State':
                usersPageLocators.changeAddressWidget.stateField().type(value);
                break;
            case 'Country':
                usersPageLocators.changeAddressWidget
                    .countryField()
                    .select(value);
                break;
            case 'Postal Code':
                usersPageLocators.changeAddressWidget
                    .postalCodeField()
                    .type(value);
                break;
            default:
                throw new Error('Invalid field specified');
        }
    }
);

Then('The user searches and adds offers using the Add Offer widget', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { offerNames } = staticTestData.addOffers;
        offerNames.forEach((offers: string) => {
            cy.searchAndAddOffer(offers);
        });
    });
});

When('The user searches and adds an offer using the Add Offer widget', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.searchAndAddOffer(staticTestData.productName);

        cy.logStep('Check product price');
        usersPageLocators.newOrder
            .offersSectionItemPrice(
                staticTestData.productName,
                staticTestData.productPrice
            )
            .should('be.visible');

        cy.logStep('Check product quantity');
        usersPageLocators.newOrder
            .offersSectionItemQuantity()
            .find(':selected')
            .then((qty) => {
                expect(qty.text()).to.eq(staticTestData.productQuantity);
            });

        cy.logStep('Check product tax');
        usersPageLocators.newOrder
            .taxes()
            .should('have.text', `Tax: ${staticTestData.productTax}`);
    });
});

Then('The user selects the shipping option in the Offers section', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        usersPageLocators.newOrder
            .shippingOption()
            .select(staticTestData.shippingOption);
    });
});

Then(
    /^The user processes the payment using a "(valid|invalid)" credit card$/,
    (cardType: string) => {
        cy.intercept(
            'GET',
            '/nova-vendor/process-order/user/*/payment-method'
        ).as('paymentWindowLoading');
        cy.reload(); // Temp fix for the BT error issue on le-sn-staging
        usersPageLocators.newOrder.processPaymentButton().click();

        cy.wait('@paymentWindowLoading');

        let cc: string;

        if (cardType === 'valid') {
            cc = Cypress.env('CREDIT_CARD_NUMBER');
        } else {
            cc = '0000000000000000';
        }

        cy.processPayment(cc);
    }
);

When(
    /^The user clicks the "(Orders|Payment Methods|Subscriptions|Discounts|Refunds|Notes)" tab on the Orders section$/,
    (tabName: string) => {
        cy.logStep(`Click on the ${tabName} tab`);

        usersPageLocators.ordersSection.tab(tabName).click();
    }
);

Then('The user validates the data on the Subscriptions page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        usersPageLocators.subscriptions.row(Number(1)).within(() => {
            usersPageLocators.subscriptions
                .initialStatus()
                .should('have.text', staticTestData.subscriptionStatus);
            // usersPageLocators.subscriptions
            //     .renewsAt()
            //     .invoke('text')
            //     .then((text) => {
            //         const renewalDateMonth = new Date(text).getMonth() + 1; // indexing starts from 0, add +1 to reflect the actual month text
            //         const nextMonth =
            //             new Date(
            //                 new Date().setDate(new Date().getDate() + 31)
            //             ).getMonth() + 1; // month indexing starts from 0, add +1 to reflect the actual next month after having added the days

            //         expect(renewalDateMonth).to.eq(nextMonth);
            //     });
            usersPageLocators.subscriptions
                .offer()
                .invoke('text')
                .then((text) => {
                    expect(text.trim()).to.equal(staticTestData.productName);
                });
        });
    });
});

Then('The user cancels the subscription', () => {
    cy.logStep('Perform subscription cancellation');
    cy.cancelSubscriptionFromAdminTool();
});

When(
    'The user navigates to the Shipments page in the Admin Tool and searches for the Shipment Id',
    () => {
        cy.logStep('Recieve shipment using SSH command');
        const sshHost = Cypress.env('SSH_HOST');
        const sshUrl = Cypress.config().baseUrl;
        const sshUsername = Cypress.env('SSH_USERNAME');
        const sshPort = Cypress.env('SSH_PORT');
        const sshCmd = `php artisan shipments:receive --reference-numbers=${dynamicTestData.referenceNumber}`;

        cy.task('getSshKey').then((sshKeyPath) => {
            const sshInfo = {
                sshHost,
                sshUrl,
                sshUsername,
                sshPort,
                sshKeyPath,
                sshCmd,
            };
            cy.task('runSshCmd', sshInfo).then((result: any) => {
                cy.log(result);
            });
        });

        cy.logStep('Wait for the shipment changes to proparage');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(60000); // wait for the changes to propagate

        cy.logStep('Click on users menu button and search for the shipment');
        dashboardLocators.menuButton('shipments').click();
        dashboardLocators
            .searchInput()
            .type(`${dynamicTestData.referenceNumber}`);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000);
        cy.logStep('Verify the shipment data');
        usersPageLocators.shipments
            .referenceNumber()
            .should('be.visible')
            .invoke('text')
            .then((reference) => {
                expect(reference).to.eq(dynamicTestData.referenceNumber);
            });
        usersPageLocators.shipments
            .trackingNumber()
            .should('be.visible')
            .invoke('text')
            .then((trackingNumber) => {
                expect(trackingNumber).to.not.eq('');
                dynamicTestData.trackingNumber = trackingNumber;
            });
        usersPageLocators.shipments.status().contains(/shipped|cancelled/);
    }
);

When(
    'The user clicks the Refund Order Item button on row {string}',
    (row: string) => {
        cy.logStep('Click Refund Order Item');
        usersPageLocators.orderOffers.row(Number(row)).within(() => {
            usersPageLocators.orderOffers.refundOrderItemButton().click();
        });
    }
);

Then(
    'The user selects Refund Order Item Via Paypal from Order Item Actions dropdown on row {string}',
    (row: string) => {
        cy.logStep('Click Actions Order Item');
        usersPageLocators.orderOffers.row(Number(row)).within(() => {
            usersPageLocators.orderOffers
                .refundOrderItemDropDown()
                .select('Refund Order Item Via Paypal');
        });
    }
);

Then(
    'The user validates the {string} Paypal refund data on row {string}',
    (status: string, row: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            usersPageLocators.paymentLogs.row(Number(row)).within(() => {
                usersPageLocators.paymentLogs
                    .baseCurrencyAmount()
                    .should('have.text', staticTestData.refundAmount);
                usersPageLocators.paymentLogs
                    .amount()
                    .should('have.text', staticTestData.refundAmount);
                usersPageLocators.paymentLogs
                    .status()
                    .should('have.text', 'refunded');
                usersPageLocators.paymentLogs
                    .gateway()
                    .should('have.text', 'PayPal');
                usersPageLocators.paymentLogs
                    .gatewayStatus()
                    .should('have.text', status.toUpperCase());
            });
        });
        if (status === 'Pending') {
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(30000); // Need to wait for the unclaimed payment record reflects
            cy.reload();
        }
    }
);

When(
    /^The user initiates a "(Entire Order with Shipping|Entire Order without Shipping|Partial Order)" refund using the Refund Order widget$/,
    (refundType: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            if (refundType.includes('Entire')) {
                usersPageLocators.detailsPages
                    .actionSelectButton()
                    .select(staticTestData.orderDetailsAction);

                usersPageLocators.detailsPages
                    .actionConfirmButton()
                    .should('be.enabled')
                    .click();
            }
            cy.logStep('The user fills in data on the refund widget form');
            usersPageLocators.refundOrderWidget
                .refundHeading(refundType)
                .should('be.visible');
            if (refundType.includes('Partial')) {
                usersPageLocators.refundOrderWidget
                    .refundAmount()
                    .type(staticTestData.refundAmount.slice(1));
            }
            usersPageLocators.refundOrderWidget
                .refundReason()
                .select(staticTestData.refundReason);
            if (refundType.includes('with Shipping')) {
                usersPageLocators.refundOrderWidget.refundShipping().check();
            }
            usersPageLocators.refundOrderWidget.runActionButton().click();
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(20000);
        });
    }
);

Then('The user edits the users password', () => {
    cy.logStep('Performing password changing');

    dynamicTestData.userPassword = Math.floor(
        Math.random() * 100000000
    ).toString();
    usersPageLocators.editResourceButton().eq(0).click();

    usersPageLocators.newUserForm
        .passwordInputField()
        .type(dynamicTestData.userPassword);

    usersPageLocators.newUserForm
        .confirmPasswordInputField()
        .type(dynamicTestData.userPassword);
    usersPageLocators.newUserForm.updateUserButton().click();
});

Then('The user searches for the user', () => {
    cy.logStep('Searching for User');
    cy.get('@staticTestData').then((staticTestData: any) => {
        usersPageLocators
            .topMenuSearch()
            .type(staticTestData.lastName)
            .type('{enter}');
    });
});

When('The user searches for test email in the Admin Tool', () => {
    cy.logStep('Searching for User');
    cy.get('@staticTestData').then((staticTestData: any) => {
        if (typeof staticTestData.email !== 'undefined') {
            cy.intercept('GET', '/nova-api/search?**').as('searchResult');
            usersPageLocators.topMenuSearch().type(staticTestData.email);
            cy.wait('@searchResult');
            usersPageLocators.menuSearchResult(staticTestData.email).click();
        } else {
            cy.intercept('GET', '/nova-api/search?**').as('searchResult');
            usersPageLocators.topMenuSearch().type(dynamicTestData.userEmail);
            cy.wait('@searchResult');
            usersPageLocators
                .menuSearchResult(dynamicTestData.userEmail)
                .click();
        }
    });
});

When('The user searches and updates the User Name Details', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { firstName, lastName } = staticTestData.editUserDetails;
        const filepath = 'cypress/fixtures/customData/resourceValues.json';

        cy.readFile(filepath).then((data) => {
            const { userID } = data[0];
            const originalUserEmail = data[0].email;

            dashboardLocators.searchInput().clear().type(originalUserEmail);
            dashboardLocators.getRecord(userID).click();
        });
        usersPageLocators.editResourceButton().eq(0).click();
        cy.editResourceDetails('Users', 'FirstName', `${firstName}`);
        cy.editResourceDetails('Users', 'LastName', `${lastName}`);
        usersPageLocators.newUserForm.updateUserButton().click();

        cy.logStep(
            'Update returns success in updating client user name details'
        );
        dashboardLocators
            .successToast()
            .should('contain', 'The user was updated!');
    });
});

Then('Updates email to existing email on record', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    usersPageLocators.editResourceButton().eq(0).click();

    cy.readFile(filepath).then((data) => {
        const originalUserEmail = data[0].email;

        cy.editResourceDetails('Users', 'Email', `${originalUserEmail}`);
    });
    usersPageLocators.newUserForm.updateUserButton().click();

    cy.logStep(
        'Error is returned in trying to save to an existing email record'
    );
    usersPageLocators.editUserInformation
        .helpTextError()
        .should('contain', 'The Email has already been taken');
    dashboardLocators
        .errorToast()
        .should('contain', 'There was a problem submitting the form');
    usersPageLocators.newUserForm.cancelButton().click();
});

When('The user updates the password with mismatched password details', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { newPassword, invalidConfirmPassword } =
            staticTestData.editUserDetails;
        const filepath = 'cypress/fixtures/customData/resourceValues.json';

        cy.readFile(filepath).then((data) => {
            const { userID } = data[0];
            const originalUserEmail = data[0].email;

            dashboardLocators.searchInput().clear().type(originalUserEmail);
            dashboardLocators.getRecord(userID).click();
        });
        usersPageLocators.editResourceButton().eq(0).click();

        cy.logStep(
            'Attempt to change password with mismatched Password details'
        );
        usersPageLocators.newUserForm
            .passwordInputField()
            .clear()
            .type(`${newPassword}`);

        usersPageLocators.newUserForm
            .confirmPasswordInputField()
            .clear()
            .type(`${invalidConfirmPassword}`);
        usersPageLocators.newUserForm.updateUserButton().click();

        cy.logStep(
            'Error is returned in trying update Password with mismatched password details'
        );
        usersPageLocators.editUserInformation
            .helpTextError()
            .should('contain', 'The Password confirmation does not match.');
        dashboardLocators
            .errorToast()
            .should('contain', 'There was a problem submitting the form');
    });
});

When('The user changes the Client user password', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { newPassword, invalidConfirmPassword } =
            staticTestData.editUserDetails;
        const filepath = 'cypress/fixtures/customData/resourceValues.json';

        cy.readFile(filepath).then((data) => {
            const { userID } = data[0];
            const originalUserEmail = data[0].email;

            dashboardLocators.searchInput().clear().type(originalUserEmail);
            dashboardLocators.getRecord(userID).click();
        });
        usersPageLocators.editResourceButton().eq(0).click();

        cy.logStep(
            'Attempt to change password with mismatched Password details'
        );
        usersPageLocators.newUserForm
            .passwordInputField()
            .clear()
            .type(`${newPassword}`);

        usersPageLocators.newUserForm
            .confirmPasswordInputField()
            .clear()
            .type(`${invalidConfirmPassword}`);
        usersPageLocators.newUserForm.updateUserButton().click();

        cy.logStep('Attempt to change password with correct Password details');
        cy.editResourceDetails('Users', 'Password', `${newPassword}`);
        usersPageLocators.newUserForm.updateUserButton().click();
        cy.logStep(
            'Update returns success in updating client user name details'
        );
        dashboardLocators
            .successToast()
            .should('contain', 'The user was updated!');
    });
});

When('The user updates the password with the same active password', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { newPassword } = staticTestData.editUserDetails;
        const filepath = 'cypress/fixtures/customData/resourceValues.json';

        cy.readFile(filepath).then((data) => {
            const { userID } = data[0];
            const originalUserEmail = data[0].email;

            dashboardLocators.searchInput().clear().type(originalUserEmail);
            dashboardLocators.getRecord(userID).click();
        });
        usersPageLocators.editResourceButton().eq(0).click();
        cy.editResourceDetails('Users', 'Password', `${newPassword}`);
        usersPageLocators.newUserForm.updateUserButton().click();

        cy.logStep(
            'Error is returned in trying to update user Password with existing password'
        );
        usersPageLocators.editUserInformation
            .helpTextError()
            .should(
                'contain',
                'This password has already been used. Please choose a different password.'
            );
        dashboardLocators
            .errorToast()
            .should('contain', 'There was a problem submitting the form');
        usersPageLocators.newUserForm.cancelButton().click();
    });
});

Then('The user Creates a new Address through the User Admin page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const filepath = 'cypress/fixtures/customData/resourceValues.json';
        cy.readFile(filepath).then((data) => {
            const { userID } = data[0];
            const originalUserEmail = data[0].email;

            const addressDetails = {
                firstName: staticTestData.firstName,
                lastName: staticTestData.lastName,
                phoneNumber: staticTestData.phone,
                address1: staticTestData.address,
                address2: staticTestData.address2,
                city: staticTestData.city,
                state: staticTestData.state,
                country: staticTestData.country,
                postalCode: staticTestData.postalCode,
            };

            dashboardLocators.searchInput().clear().type(originalUserEmail);
            dashboardLocators.getRecord(userID).click();

            dashboardLocators.selectTab('Addresses').click();
            dashboardLocators.createResourceButton('Addresses').click();
            createNewAddress(originalUserEmail, addressDetails);
            dashboardLocators.resourceLink('Users').click();

            cy.logStep('Verify phone number reflects in Users Details page');
            usersPageLocators.editUserInformation
                .userInformation(staticTestData.phone)
                .should('be.visible');
        });
    });
});

Then('Delete test User data created', () => {
    cy.deleteUserInAdminTool();
});

Then('The password is reset to default value', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const defaultPassword = Cypress.env('VS_PASSWORD');
        const { lastName } = staticTestData;

        cy.logStep(`User Password is reset to default value: "asdfasdf"`);
        usersPageLocators.editResourceButton().eq(0).click();

        usersPageLocators.newUserForm
            .lastNameInputField()
            .then(($lastNameField) => {
                const lastNameValue = $lastNameField.text().trim();

                if (!lastNameValue) {
                    usersPageLocators.newUserForm
                        .lastNameInputField()
                        .clear()
                        .type(lastName);
                }
                usersPageLocators.newUserForm
                    .passwordInputField()
                    .type(defaultPassword);
                usersPageLocators.newUserForm
                    .confirmPasswordInputField()
                    .type(defaultPassword);
                usersPageLocators.newUserForm.updateUserButton().click();
                dashboardLocators
                    .successToast()
                    .should('contain', 'The user was updated');
            });
    });
});

When('The user logs out of Admin Tool', () => {
    cy.logoutLeAdmin();
});

When('The user searches the {string} test email', (dataType: string) => {
    cy.logStep(`Searching for ${dataType} Test User`);
    const clientEmail = dynamicTestData.userEmail;
    cy.intercept('GET', '/nova-api/search?**').as('searchResult');
    if (dataType === 'Static') {
        cy.get('@staticTestData').then((staticTestData: any) => {
            usersPageLocators.topMenuSearch().type(staticTestData.email);
            cy.wait('@searchResult');
            usersPageLocators.menuSearchResult(staticTestData.email).click();
        });
    } else {
        usersPageLocators.topMenuSearch().type(clientEmail);
        cy.wait('@searchResult');
        usersPageLocators.menuSearchResult(clientEmail).click();
    }
});

When('The New User logs with Two-Factor Authorization', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { defaultPassword } = staticTestData;
        cy.loginAsNewAdminUser(dynamicTestData.userEmail, defaultPassword);
    });
});

Then('The One - Time Password is entered', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.reload();
    cy.readFile(filepath).then((data) => {
        const newUserToken = data[0].tokenId;
        cy.logStep('Enter One Time Password');
        cy.task('generateOTP', newUserToken).then((token) =>
            cy.get('#secret').type(`${token}`, { log: false })
        );
    });
});

Then('The Admin Tool Dashboard is loaded', () => {
    cy.url().should('include', 'nova/dashboards/main');
});

When(
    'The Orders are sync in the Admin Tool - {string}',
    (orderList: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const funnelOrders = staticTestData[`${orderList}`];
            Step(new Mocha.Context(), 'The user clears out the session data');
            Step(
                new Mocha.Context(),
                'The user logs into the Admin Tool using an account with "admin" credentials'
            );
            Step(
                new Mocha.Context(),
                'The user searches the "dynamic" test email'
            );

            cy.logStep(
                'Verify Funnel Orders made are linked to the client user'
            );

            dashboardLocators.selectTab('Orders').click();

            usersPageLocators.ordersSection.filterData().click();
            usersPageLocators.ordersSection
                .includeTestData()
                .select('With Tests');
            usersPageLocators.ordersSection.filterData().click();

            dashboardLocators
                .resourceTableRecord('Orders')
                .should('have.length.at.least', 1);

            funnelOrders.forEach((orderItem: any) => {
                usersPageLocators.ordersTable
                    .orderItems(orderItem)
                    .last()
                    .should('be.visible');
            });
        });
    }
);

When('The user Refunds a CDP Order through the LE Admin Users page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { orderItem, refundReason } = staticTestData.orderTransaction;

        Step(
            new Mocha.Context(),
            'The user collects the Transaction Reference from the Payments page and settles the payment for the order'
        );
        cy.logStep('Initiate Order Item Refund');
        cy.refundOrderItem(orderItem, refundReason);
    });
});

When('The client user purchased CDP through a VS Survey Funnel Offer', () => {
    cy.clearAllSessionData();
    Step(new Mocha.Context(), 'The user navigates to V Shred Survey page');
    Step(new Mocha.Context(), 'The user starts V Shred survey for "Woman"');
    Step(
        new Mocha.Context(),
        'The Female user describes self as "I\'m skinny. I need to add toned muscle"'
    );
    Step(
        new Mocha.Context(),
        'The user clicks "EVERYTHING FOR JUST $67.00" button'
    );
    Step(
        new Mocha.Context(),
        'The user verifies the Checkout form Order details'
    );
    Step(new Mocha.Context(), 'The user fills out the survey order form');
    Step(
        new Mocha.Context(),
        'The User "Declines" the CDP Bumper Offer and submits the order'
    );
    Step(
        new Mocha.Context(),
        'The user verifies the next funnel upsell is "Burn Evolved"'
    );
    Step(
        new Mocha.Context(),
        'The user clicks the "Declines" button on the "first" upsell page'
    );
    Step(new Mocha.Context(), 'The User "Declines" the "Burn PM" Funnel Offer');
    Step(new Mocha.Context(), 'The User "Declines" the "VSU" Funnel Offer');
    Step(
        new Mocha.Context(),
        'The User "Upgrades" the "Custom Plan" Funnel Offer'
    );
    Step(
        new Mocha.Context(),
        'The User "Declines" the "Ultimate Recipe" Funnel Offer'
    );
});

When('The client user purchased CDP as an Add-On offer', () => {
    cy.clearAllSessionData();
    Step(new Mocha.Context(), 'The user navigates to V Shred Survey page');
    Step(
        new Mocha.Context(),
        'The user clicks "EVERYTHING FOR JUST $57.00" button'
    );
    Step(new Mocha.Context(), 'The user fills out the survey order form');

    Step(
        new Mocha.Context(),
        'The User "Selects" the CDP Bumper Offer and submits the order'
    );
    Step(
        new Mocha.Context(),
        'The user verifies the next funnel upsell is "Burn Evolved"'
    );
    Step(
        new Mocha.Context(),
        'The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer'
    );
    Step(new Mocha.Context(), 'The user fills out the shipping order form');
    Step(new Mocha.Context(), 'The User "Declines" the "Burn PM" Funnel Offer');
    Step(new Mocha.Context(), 'The user clicks on "VSU upgrade" button');
    Step(new Mocha.Context(), 'The User "Upgrades" the "Greens" Funnel Offer');
});

When('The user views the details of an Order Item', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { orderItem } = staticTestData.orderTransaction;

        Step(new Mocha.Context(), 'The user searches the "Dynamic" test email');

        dashboardLocators.selectTab('Orders').click();
        usersPageLocators.ordersTable
            .orderItems(orderItem)
            .should('be.visible')
            .parents('tr')
            .within(() => {
                dashboardLocators.viewButton().click();
            });
    });
});

When('The user searches and adds a {string} offer', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { offerTitle } = staticTestData.offerDetails;
        cy.log('Searching Offer and add to Order');
        cy.searchAndAddOffer(offerTitle);
    });
});

Then(
    'The Offer purchased is listed in the User Orders table - {string}',
    (orderList: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const funnelOrders = staticTestData[`${orderList}`];
            dashboardLocators.selectTab('Orders').click();
            dashboardLocators
                .resourceTableRecord('Orders')
                .should('have.length.at.least', 1);

            funnelOrders.forEach((orderItem: any) => {
                usersPageLocators.ordersTable
                    .orderItems(orderItem)
                    .should('be.visible');
            });
        });
    }
);

Then('The Subscription offer is listed in the User Subscriptions table', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { intervalLength, offerTitle } = staticTestData.offerDetails;
        const computedDate: Date = new Date(
            new Date().setMonth(new Date().getMonth() + intervalLength)
        );
        const renewalDate = computedDate.toISOString().split('T')[0];
        const [year, month] = renewalDate.split('-');
        const formattedRenewalDate = `${year}-${month}`;

        dashboardLocators
            .selectTab('Subscriptions')
            .click()
            .then(() => {
                usersPageLocators.subscriptions
                    .offer()
                    .should('contain.text', `${offerTitle}`);
                usersPageLocators.subscriptions
                    .renewsAt()
                    .should('contain.text', `${formattedRenewalDate}`);
                usersPageLocators.subscriptions
                    .initialStatus()
                    .should('contain.text', 'new');
            });
    });
});

When('The user views the order details in LE Admin', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { orderItem } = staticTestData.orderTransaction;
        dashboardLocators.selectTab('Orders').click();
        usersPageLocators.ordersTable
            .orderItems(orderItem)
            .should('be.visible')
            .parents('tr')
            .within(() => {
                usersPageLocators.ordersTable
                    .orderIdLink()
                    .invoke('text')
                    .then((orderReference) => {
                        dynamicTestData.orderItemId = orderReference.trim();
                    });

                dashboardLocators.viewButton().click();
            });
    });
});

When(
    'The user Fully Refunds a purchased item - {string} in LE Admin',
    (purchasedItem: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { orderItem, refundReason } = staticTestData.orderTransaction;
            cy.logStep(`Attempting to refund ${purchasedItem}`);
            Step(
                new Mocha.Context(),
                'The user views the order details in LE Admin'
            );
            Step(
                new Mocha.Context(),
                'The user collects the Transaction Reference from the Payments page and settles the payment for the order'
            );
            cy.logStep('Initiate Order Item Refund');
            cy.refundOrderItem(orderItem, refundReason);
        });
    }
);

When(
    'The user Partially Refunds the purchased item - {string} in LE Admin',
    (purchasedItem: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { orderItem } = staticTestData.orderTransaction;
            cy.logStep(`Partially refunding ${purchasedItem}`);
            Step(
                new Mocha.Context(),
                'The user views the order details in LE Admin'
            );
            Step(
                new Mocha.Context(),
                'The user collects the Transaction Reference from the Payments page and settles the payment for the order'
            );
            dashboardLocators.selectTab('Order Offers').click();
            usersPageLocators.orderOffers
                .offerName()
                .contains(orderItem)
                .should('be.visible')
                .parents('tr')
                .within(() => {
                    usersPageLocators.orderOffers
                        .refundOrderItemButton()
                        .click();
                });
            Step(
                new Mocha.Context(),
                'The user initiates a "Partial Order" refund using the Refund Order widget'
            );
            dashboardLocators.selectTab('Details').click();
            cy.reload();
            usersPageLocators.detailsPages
                .fieldName('Status')
                .children()
                .should('contain', 'partially_refunded');
        });
    }
);
