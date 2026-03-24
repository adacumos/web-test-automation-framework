declare global {
    namespace Cypress {
        interface Chainable {
            stordCancelShipment: (
                referenceNumber: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to get email data from Mailtrap.
 * @param referenceNumber shipping reference number from LE or VS
 * @example
 * cy.stordCancelShipment('LE-UKHV-BCAE')
 */

export const stordCancelShipment = (
    referenceNumber: string
): Cypress.Chainable<any> => {
    const stordAPI = Cypress.env('STORD_API');
    const stordOrgID = Cypress.env('STORD_ORGID');
    const stordNetID = Cypress.env('STORD_NETID');

    const options = {
        method: 'POST',
        url: `https://staging.api-next.stord.com/v1/organizations/${stordOrgID}/oms/networks/${stordNetID}/orders/cancel`,
        json: true,
        headers: {
            Authorization: `Bearer ${stordAPI}`,
        },
        body: {
            data: {
                order_number: `${referenceNumber}`,
            },
        },
    };

    const shipmentData: any = [];
    cy.request(options).then((response) => {
        expect(response.status).to.eq(204);
        shipmentData.push(response.body);
    });

    return cy.wrap(shipmentData);
};
