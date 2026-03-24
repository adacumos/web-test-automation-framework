const leShipmentsPageLocators = {
    shipmentDetailsHeader: (referenceNumber: string) =>
        cy.findByRole('heading', {
            name: new RegExp(
                `Shipment Details: Reference Number: ${referenceNumber}`,
                'i'
            ),
        }),
    shipmentsLandingPage: {
        createShipmentButton: () =>
            cy.findByRole('link', { name: /create shipment/i }),
        shipmentID: () => cy.get('td:nth-child(2) a'),
        shipmentReferenceNumber: () => cy.get('td:nth-child(3) span'),
    },

    shipmentsDetailsPage: {
        editShipmentButton: () => cy.get('a[data-testid=edit-resource]'),
        deleteShipmentButton: () =>
            cy.get('button[data-testid=open-delete-modal]'),
        shipmentID: () => cy.findByRole('heading', { name: /id/i }),
        referenceNumber: () => cy.contains('h4.text-80', 'Reference Number'),
        trackingNumber: () =>
            cy.findByRole('heading', { name: /tracking number/i }),
        status: () => cy.findByRole('heading', { name: /status/i }),
        user: () => cy.contains('h4.text-80', 'User'),
        shippingCategory: () =>
            cy.findByRole('heading', { name: /shipping category/i }),
    },
};
export default leShipmentsPageLocators;
