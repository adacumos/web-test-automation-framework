/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from '../../testData';

Then(
    'The user verifies the status of shipping reference number {string} in Stord is {string}',
    (referenceNumber: string, shipmentStatus: string) => {
        cy.log(
            `Verify ${referenceNumber} has a status ${shipmentStatus} in Stord`
        );
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20000);
        switch (shipmentStatus) {
            case 'Shipped':
                cy.stordGetShipmentStatus(referenceNumber).then(
                    (response: any) => {
                        expect(response[0].data[0].status).to.equal('shipped');
                    }
                );
                break;
            case 'Partially Shipped':
                cy.stordGetShipmentStatus(referenceNumber).then(
                    (response: any) => {
                        expect(response[0].data[0].status).to.equal(
                            'partially_shipped'
                        );
                    }
                );
                break;
            case 'Canceled':
                cy.stordGetShipmentStatus(referenceNumber).then(
                    (response: any) => {
                        expect(response[0].data[0].status).to.equal('canceled');
                    }
                );
                break;
            case 'Open':
                cy.stordGetShipmentStatus(referenceNumber).then(
                    (response: any) => {
                        dynamicTestData.facilityId =
                            response[0].data[0].sla_sales_order_lines[0].facility_id;
                        expect(response[0].data[0].status).to.equal('open');
                    }
                );
                break;
            default:
                throw new Error(`Invalid table ${shipmentStatus} `);
        }
    }
);

Then(
    'The user verifies the shipment status is {string} in Stord',
    (shipmentStatus: string) => {
        cy.log(
            `Verify shipment ${dynamicTestData.referenceNumber} has a status ${shipmentStatus} in Stord`
        );
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(95000);
        switch (shipmentStatus) {
            case 'Shipped':
                cy.stordGetShipmentStatus(dynamicTestData.referenceNumber).then(
                    (response: any) => {
                        expect(response[0].data[0].status).to.equal('shipped');
                    }
                );
                break;
            case 'Partially Shipped':
                cy.stordGetShipmentStatus(dynamicTestData.referenceNumber).then(
                    (response: any) => {
                        expect(response[0].data[0].status).to.equal(
                            'partially_shipped'
                        );
                    }
                );
                break;
            case 'Canceled':
                cy.stordGetShipmentStatus(dynamicTestData.referenceNumber).then(
                    (response: any) => {
                        expect(response[0].data[0].status).to.equal('canceled');
                    }
                );
                break;
            case 'Open':
                cy.stordGetShipmentStatus(dynamicTestData.referenceNumber).then(
                    (response: any) => {
                        dynamicTestData.facilityId =
                            response[0].data[0].sla_sales_order_lines[0].facility_id;
                        expect(response[0].data[0].status).to.equal('open');
                    }
                );
                break;
            default:
                throw new Error(`Invalid table ${shipmentStatus} `);
        }
    }
);

Then(
    'The user processes the shipment of shipping reference number {string} in Stord',
    (referenceNumber: string) => {
        cy.log(`Process shipment ${referenceNumber} in Stord`);
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { itemSKUs } = staticTestData;
            cy.stordCreateShipment(
                referenceNumber,
                dynamicTestData.facilityId,
                itemSKUs
            );
        });
    }
);

Then('The user processes the shipment in Stord', () => {
    cy.log(`Process shipment ${dynamicTestData.referenceNumber} in Stord`);
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { itemSKUs } = staticTestData;
        cy.stordCreateShipment(
            dynamicTestData.referenceNumber,
            dynamicTestData.facilityId,
            itemSKUs
        );
    });
});

Then(
    'The user cancels the shipment of shipping reference number {string} in Stord',
    (referenceNumber: string) => {
        cy.log(`Cancel shipment ${referenceNumber} in Stord`);
        cy.stordCancelShipment(referenceNumber);
    }
);

Then('The user cancels the shipment in Stord', () => {
    cy.log(`Cancel shipment ${dynamicTestData.referenceNumber} in Stord`);
    cy.stordCancelShipment(dynamicTestData.referenceNumber);
});
