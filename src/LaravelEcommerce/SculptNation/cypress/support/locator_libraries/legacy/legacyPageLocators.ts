const legacyPageLocators = {
    videoContainer: () => cy.get('.video-container'),
    submitOrderButton: () => cy.get('#submit-order'),

    // Fatloss Extreme for Her Locators
    fatLossExtremeForHer: {
        buyButton: () => cy.get('a[data-id=fat-loss-extreme]'),
        invalidCreditCardMessage: () => cy.get("[data-braintree-id='number-field-group'].braintree-form__field-group--has-error .braintree-form__field-error"),
        // submitOrderButton: () => cy.get('#submit-order')
    },
        // Fatloss Extreme for Him Locators
    fatLossExtremeForHim: {
        buyButton: () => cy.get('a[data-id=fat-loss-extreme]'),
    },

    // thank you page locators
    thankYouPage: {
        thankYouTitle: () => cy.get('h2'),
        hereButton: () => cy.get('H5 a'),
        modalCloseCross: () => cy.get('.modal-content .modal-close-cross'),
    },

    // profile page locators
    profilePage: {
        urlShouldIncludeProfile: () => cy.url().should('include', 'profile'),
        purchasesLink: () => cy.findByRole('link', { name: /purchases/i }),
        accountPurchasesShouldBeVisible: () => cy.get('.boxed #account-purchases').should('be.visible'),
        purchasesOrderTable: () => cy.get('#orders-table .th-name'),
    },
};

export default legacyPageLocators;
