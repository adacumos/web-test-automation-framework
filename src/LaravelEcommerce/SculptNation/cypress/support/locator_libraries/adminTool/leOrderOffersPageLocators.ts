const leOrderOffersPageLocators = {
    orderOffersLandingPage: {
        createOrderOfferButton: () =>
            cy.findByRole('button', { name: /create order offer/i }),

        // linked resource tables
        linkedResource: (resource: string) =>
            cy
                .get(`td a[href*="nova/resources/${resource.toLowerCase()}/"]`)
                .eq(0),
    },
    orderOfferDetailPage: {
        orderOfferID: () => cy.contains('h4.text-80', 'ID'),
        offer: () => cy.contains('h4.text-80', 'Offer'),
        orderID: () => cy.contains('h4.text-80', 'Order'),
        appliedDiscount: () =>
            cy.findByRole('heading', { name: /applied discount/i }),
        type: () => cy.findByRole('heading', { name: /type/i }),
    },
};
export default leOrderOffersPageLocators;
