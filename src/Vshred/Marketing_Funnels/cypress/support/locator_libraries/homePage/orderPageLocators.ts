const orderPageLocators = {
    addtoCart: () => cy.findByRole('button', { name: /add to cart/i }),
    addtoOrder: () => cy.findAllByText(/add to order/i).eq(0),
    subscribeNow: () => cy.findByRole('button', { name: /subscribe now/i }),
};

export default orderPageLocators;
