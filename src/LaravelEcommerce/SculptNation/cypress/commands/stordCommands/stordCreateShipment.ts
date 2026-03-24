declare global {
    namespace Cypress {
        interface Chainable {
            stordCreateShipment: (
                referenceNumber: string,
                facilityId: string,
                itemSKUs: []
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to get email data from Mailtrap.
 * @param referenceNumber shipping reference number
 * @param facilityId warehouse ID in Stored
 * @param itemSKUs array of SKU details from test data
 * @example
 * cy.stordCreateShipment('LE-UKHV-BCAE', '10-011005-90-000-30', '1', 'e0e57d02-f505-4fe5-8c3e-e383d124c09e')
 */

export const stordCreateShipment = (
    referenceNumber: string,
    facilityId: string,
    itemSKUs: any[]
): Cypress.Chainable<any> => {
    const stordAPI = Cypress.env('STORD_API');
    const stordOrgID = Cypress.env('STORD_ORGID');
    const stordNetID = Cypress.env('STORD_NETID');
    const dateNow = new Date();
    const lineItems = [];

    // create array of objects
    lineItems.push({
        facility_id: `${facilityId}`,
        shipped_at: `${dateNow.toISOString()}`,
        wms_posted_at: `${dateNow.toISOString()}`,
        shipment_confirmation_line_items: '',
    });

    lineItems[0].shipment_confirmation_line_items = getSKUs(itemSKUs); // eslint-disable-line

    const options = {
        method: 'POST',
        url: `https://staging.api-next.stord.com/v1/organizations/${stordOrgID}/oms/networks/${stordNetID}/orders/${referenceNumber}/confirmations/shipments`,
        json: true,
        headers: {
            Authorization: `Bearer ${stordAPI}`,
        },
        body: {
            data: {},
        },
    };

    options.body.data = lineItems[0]; // eslint-disable-line

    const shipmentData: any = [];
    cy.request(options).then((response) => {
        expect(response.status).to.eq(201);
        shipmentData.push(response.body);
    });

    return cy.wrap(shipmentData);
};

// function to create an array of objects from itemSKUs[]
function getSKUs(skuItems: any[]) {
    const lineItems: any = [];
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    for (let i = 0; i < skuItems.length; i++) {
        lineItems.push({
            actual: `${skuItems[i].quantity}`,
            sku: `${skuItems[i].sku}`,
            unit_of_measure: 'ea',
        });
    }
    return lineItems;
}
