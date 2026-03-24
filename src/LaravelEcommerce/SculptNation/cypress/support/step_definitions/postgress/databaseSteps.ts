/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from '../../testData';

Then(
    /^The user verifies the (created|refunded|cancelled) (user|order|subscription|payment|refund|shipment|invoice) on the (Users|Orders|Subscriptions|Payments|Refunds|Shipments|Invoices) table$/,
    (actionName: string, itemName: string, tableName) => {
        cy.logStep(
            `Verify the ${actionName} ${itemName} on the ${tableName} table`
        );

        const dbParams = {
            host: Cypress.env('DB_HOST'),
            port: Cypress.env('DB_PORT'),
            database: Cypress.env('DB_DB'),
            user: Cypress.env('DB_USER'),
            password: Cypress.env('DB_PASSWORD'),
            query: '',
            params: '',
        };

        switch (tableName) {
            /* eslint-disable no-unused-expressions, @typescript-eslint/no-unused-expressions */
            case 'Users':
                cy.get('@staticTestData').then((staticTestData: any) => {
                    dbParams.query = staticTestData.usersQuery;
                    dbParams.params = dynamicTestData.userEmail;

                    cy.task('runSQLCmd', dbParams).then((queryResult: any) => {
                        const result = JSON.parse(queryResult);
                        // eslint-disable-next-line cypress/no-unnecessary-waiting
                        cy.wait(10000);
                        result.forEach((data: any) => {
                            expect(data.id).to.not.be.null;
                            expect(data.first_name).to.eq(
                                staticTestData.firstName
                            );
                            expect(data.last_name).to.eq(
                                staticTestData.lastName
                            );
                            expect(data.email).to.eq(dynamicTestData.userEmail);
                        });
                    });
                });
                break;
            case 'Orders':
                cy.get('@staticTestData').then((staticTestData: any) => {
                    dbParams.query = staticTestData.ordersQuery;
                    dbParams.params = dynamicTestData.userEmail;

                    cy.task('runSQLCmd', dbParams).then((queryResult: any) => {
                        const result = JSON.parse(queryResult);
                        result.forEach((data: any) => {
                            expect(data.id).to.not.be.null;
                            expect(data.amount.toString()).to.eq(
                                staticTestData.totalAmount
                                    .replace(/\./, '')
                                    .replace(/^\$/, '')
                            );
                            expect(data.status).to.eq(
                                staticTestData.orderStatus
                            );
                            expect(data.created_at).to.not.be.null;
                            expect(data.checkout_at).to.not.be.null;
                            expect(data.paid_at).to.not.be.null;
                            expect(data.offers).to.eq(
                                staticTestData.productName
                            );
                            expect(data.user).to.eq(dynamicTestData.userEmail);
                        });
                    });
                });
                break;
            case 'Subscriptions':
                cy.get('@staticTestData').then((staticTestData: any) => {
                    dbParams.query = staticTestData.subscriptionsQuery;
                    dbParams.params = dynamicTestData.userEmail;
                    // eslint-disable-next-line cypress/no-unnecessary-waiting
                    cy.wait(20000); // Need to wait to ensure cancelled subscription status is updated

                    cy.task('runSQLCmd', dbParams).then((queryResult: any) => {
                        const result = JSON.parse(queryResult);
                        result.forEach((data: any) => {
                            expect(data.id).to.not.be.null;
                            expect(data.status).to.eq(
                                staticTestData.subscriptionStatus
                            );

                            if (actionName === 'created') {
                                expect(data.renews_at).to.be.not.null;
                                expect(data.canceled_at).to.be.null;
                            } else {
                                expect(data.renews_at).to.not.be.null;
                                expect(data.canceled_at).to.be.null;
                            }

                            expect(data.offer).to.eq(
                                staticTestData.productName
                            );
                            expect(data.amount.toString()).to.eq(
                                staticTestData.totalAmount
                                    .replace(/\./, '')
                                    .replace(/^\$/, '')
                            );
                            expect(data.email).to.eq(dynamicTestData.userEmail);
                        });
                    });
                });
                break;
            case 'Payments':
                cy.get('@staticTestData').then((staticTestData: any) => {
                    dbParams.query = staticTestData.paymentsQuery;
                    dbParams.params = dynamicTestData.userEmail;

                    cy.task('runSQLCmd', dbParams).then((queryResult: any) => {
                        const result = JSON.parse(queryResult);
                        result.forEach((data: any) => {
                            expect(data.id).to.not.be.null;
                            expect(data.amount.toString()).to.eq(
                                staticTestData.totalAmount
                                    .replace(/\./, '')
                                    .replace(/^\$/, '')
                            );
                            if (actionName === 'created') {
                                expect(data.amount_refunded.toString()).to.eq(
                                    staticTestData.refundedAmount.replace(
                                        /^\$/,
                                        ''
                                    )
                                );
                                expect(data.net_revenue.toString()).to.eq(
                                    staticTestData.totalAmount
                                        .replace(/\./, '')
                                        .replace(/^\$/, '')
                                );
                            } else {
                                expect(data.amount_refunded.toString()).to.eq(
                                    staticTestData.totalAmount
                                        .replace(/\./, '')
                                        .replace(/^\$/, '')
                                );
                                expect(data.net_revenue.toString()).to.eq(
                                    staticTestData.netRevenue.replace(/^\$/, '')
                                );
                            }

                            expect(data.status).to.eq(
                                staticTestData.paymentStatus
                            );
                            expect(data.transaction_reference).to.not.be.null;
                            expect(data.gateway).to.eq(
                                staticTestData.paymentGateway
                            );
                            expect(data.created_at).to.not.be.null;
                            expect(data.email).to.eq(dynamicTestData.userEmail);
                        });
                    });
                });
                break;
            case 'Refunds':
                cy.get('@staticTestData').then((staticTestData: any) => {
                    dbParams.query = staticTestData.refundsQuery;
                    dbParams.params = dynamicTestData.userEmail;

                    cy.task('runSQLCmd', dbParams).then((queryResult: any) => {
                        const result = JSON.parse(queryResult);
                        cy.log(result);
                        result.forEach((data: any, index: number) => {
                            expect(data.refund_id).to.not.be.null;
                            expect(data.offer_id).to.not.be.null;
                            expect(data.title).to.eq(
                                staticTestData.productName
                            );
                            if (index === 0) {
                                expect(data.amount.toString()).to.eq(
                                    staticTestData.refundAmount
                                        .replace(/\./, '')
                                        .replace(/^\$/, '')
                                );
                            } else {
                                expect(data.amount.toString()).to.eq(
                                    staticTestData.shippingCost
                                        .replace(/\./, '')
                                        .replace(/^\$/, '')
                                );
                            }
                            expect(data.reason.replace('_', ' ')).to.eq(
                                staticTestData.refundReason.toLowerCase()
                            );
                            expect(data.status).to.eq(
                                staticTestData.orderStatus
                            );
                            expect(data.created_at).to.not.be.null;
                            expect(data.email).to.eq(dynamicTestData.userEmail);
                        });
                    });
                });
                break;
            case 'Shipments':
                cy.get('@staticTestData').then((staticTestData: any) => {
                    dbParams.query = staticTestData.shipmentsQuery;
                    dbParams.params = dynamicTestData.userEmail;

                    cy.task('runSQLCmd', dbParams).then((queryResult: any) => {
                        const result = JSON.parse(queryResult);
                        cy.log(result);
                        result.forEach((data: any) => {
                            expect(data.id).to.not.be.null;
                            expect(data.reference_number).to.not.be.null;
                            expect(data.status).to.eq(
                                staticTestData.shipmentStatus
                            );
                            expect(data.created_at).to.not.be.null;
                            expect(data.email).to.eq(dynamicTestData.userEmail);
                        });
                    });
                });
                break;
            case 'Invoices':
                cy.get('@staticTestData').then((staticTestData: any) => {
                    dbParams.query = staticTestData.invoicesQuery;
                    dbParams.params = dynamicTestData.userEmail;

                    cy.task('runSQLCmd', dbParams).then((queryResult: any) => {
                        const result = JSON.parse(queryResult);
                        cy.log(result);
                        result.forEach((data: any) => {
                            expect(data.id).to.not.be.null;
                            expect(data.base_amount.toString()).to.eq(
                                staticTestData.totalAmount
                                    .replace(/\./, '')
                                    .replace(/^\$/, '')
                            );
                            expect(data.amount.toString()).to.eq(
                                staticTestData.totalAmount
                                    .replace(/\./, '')
                                    .replace(/^\$/, '')
                            );
                            expect(data.status).to.eq(
                                staticTestData.invoiceStatus
                            );
                            expect(data.paid_at).to.not.be.null;
                            expect(data.email).to.eq(dynamicTestData.userEmail);
                        });
                    });
                });
                break;
            default:
                throw new Error(`Invalid table ${tableName} `);
        }
    }
);
