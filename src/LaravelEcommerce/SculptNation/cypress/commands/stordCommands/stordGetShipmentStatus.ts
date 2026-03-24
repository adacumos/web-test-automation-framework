declare global {
    namespace Cypress {
        interface Chainable {
            stordGetShipmentStatus: (
                referenceNumber: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to get email data from Mailtrap.
 * @param referenceNumber shipping reference number from LE or VS
 * @example
 * cy.stordGetShipmentStatus('LE-UKHV-BCAE')
 */

export const stordGetShipmentStatus = (
    referenceNumber: string
): Cypress.Chainable<any> => {
    const stordAPI = Cypress.env('STORD_API');
    const stordOrgID = Cypress.env('STORD_ORGID');
    const stordNetID = Cypress.env('STORD_NETID');

    const options = {
        method: 'GET',
        url: `https://staging.api-next.stord.com/v1/organizations/${stordOrgID}/oms/networks/${stordNetID}/orders/sales?search_term=${referenceNumber}&search_field=order_number`,
        json: true,
        headers: {
            Authorization: `Bearer ${stordAPI}`,
        },
    };

    const salesOrderData: any = [];
    cy.request(options).then((response) => {
        expect(response.status).to.eq(200);
        salesOrderData.push(response.body);
    });

    return cy.wrap(salesOrderData);
};
