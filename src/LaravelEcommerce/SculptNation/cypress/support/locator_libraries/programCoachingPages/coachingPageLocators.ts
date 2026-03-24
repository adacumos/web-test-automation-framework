const coachingPageLocators = {
    pageSections: {
        titleBlock: () => cy.get('.product-single__title'),
        title: () => cy.get('.section-header__title'),

        buyItNow: () => cy.get('.shopify-payment-button__button'),
        addToCart: () => cy.contains('Add to cart'),
        checkoutButton: () => cy.get('.cart__checkout'),

        productPrice: () => cy.get('#ProductPrice-8576004948196'),

        coachingPlans: () =>
            cy.get(':nth-child(1) > .skrim__link > .skrim__overlay'),
        homePage: () =>
            cy.get(':nth-child(2) > .skrim__link > .skrim__overlay'),
        plans: () => cy.get(':nth-child(3) > .skrim__link > .skrim__overlay'),
    },

    programBlocks: {
        acceleratorPlus: () =>
            cy.get('[data-product-handle="accelerator-plus"]'),
        acceleratorPlusTitle: () =>
            cy.contains('V Shred Accelerator+ Custom Coaching Plan'),
        turbo30: () =>
            cy.get(
                '[data-product-handle="v-shred-turbo-30-day-1-1-coaching-program"]'
            ),
        turbo30Title: () =>
            cy.contains('V Shred TURBO - 30-Day 1-1 Coaching Program'),
        acceleratorRenewal: () =>
            cy.get('[data-product-handle="v-shred-accelerator-renewal"]'),
        acceleratorRenewalTitle: () =>
            cy.contains('V Shred Accelerator RENEWAL!'),
        metabolicRehabTitle: () =>
            cy.contains('V Shred Metabolic Rehab Program'),
    },
};

export default coachingPageLocators;
