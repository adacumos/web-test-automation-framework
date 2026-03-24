const vshredmdLocators = {
    addToCart: () => cy.findAllByText(/add to cart/i),
    subscribeNowButton: () => cy.contains('Subscribe Now'),
    oneBottle: () => cy.get('#subscription_2'),
    noThanks: () =>
        cy.get(':nth-child(6) > [data-testid="form-component"] > .needsclick'),
    email: () => cy.get(':nth-child(5) > .input-with-icon > input'),
    address: () => cy.get(':nth-child(6) > .input-with-icon > input'),
    thankYouTitle: () => cy.get('.wait-alert > .text-center'),
    thankYouText: () => cy.get('h3'),
    upgrade: () => cy.findAllByText(/Upgrade Your Order/i),

    cartPage: {
        cartItem: () => cy.get('.item-line-title > span'),
        price: () => cy.get('.item-line-price-fix'),
    },
};

export default vshredmdLocators;
