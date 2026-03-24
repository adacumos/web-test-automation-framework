const gtinsPageLocators = {
    createNewGtin: () => cy.get('a').contains('Create Gtin'),
    gtinType: () => cy.get('#type'),
    gtinValue: () => cy.get('#value'),
    gtinProduct: () => cy.get('[data-testid=products-search-input]'),
    createGtinButton: () => cy.findByRole('button', { name: /Create Gtin/i }),
    gtinsSearch: () => cy.get('[dusk=products-search-input-result-0]'),
};

export default gtinsPageLocators;
