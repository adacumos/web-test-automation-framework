const vsProcessOrderPageLocators = {
    clientEmailLink: () => cy.get('a[href*="admin/users/"]').eq(0),
    addOfferButtton: () => cy.findByRole('button', { name: /add offer/i }),
    placeOrderButton: () => cy.findByRole('button', { name: /place order/i }),
    selectTabOffers: () => cy.findByRole('tab', { name: /offers/i }),
    selectTabBundles: () => cy.findByRole('tab', { name: /bundles/i }),
    searchProductInputBox: () =>
        cy.get('input[placeholder="Search by Name or SKU"]'),
    cartOrderDetails: () => cy.get('#paymentModal___BV_modal_body_ tr'),
    submitOrderButton: () => cy.get('#submit-order'),

    processPayment: {
        selectTabExistingCard: () =>
            cy.findByRole('tab', { name: /existing card/i }),
        selectTabNewCard: () => cy.findByRole('tab', { name: /new card/i }),
        submitPaymentButton: () =>
            cy.findByRole('button', { name: /submit payment/i }),
    },

    thankYouPage: {
        productTitle: () =>
            cy.get(':nth-child(1) > .row > :nth-child(1) > .h5'),
        totalPrice: () => cy.get(':nth-child(4) > .row > .text-right > .h5'),
    },
};
export default vsProcessOrderPageLocators;
