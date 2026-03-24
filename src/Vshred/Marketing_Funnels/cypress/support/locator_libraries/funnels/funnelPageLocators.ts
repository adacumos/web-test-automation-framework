const funnelPageLocators = {
    // Funnel Elements
    cdpUpgradeYes: () =>
        cy.findByRole('button', {
            name: /yes! i want to upgrade to the 4-week custom diet and burn fat 4x's faster/i,
        }),
    greenUpgradeYes: () =>
        cy.findByRole('button', {
            name: /Add To Cart/i,
        }),
    UpgradeYes: () =>
        cy.findByRole('button', {
            name: /yes! upgrade my order/i,
        }),
    agreeCheckBox: () =>
        cy.findByText(
            /i agree to the payment terms of this recurring product/i
        ),
    VSUUpgradeYes: () =>
        cy.findByRole('button', {
            name: /Yes! I want to start my FREE Month!/i,
        }),
};

export default funnelPageLocators;
