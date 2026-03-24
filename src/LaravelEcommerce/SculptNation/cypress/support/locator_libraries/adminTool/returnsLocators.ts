const returnsLocators = {
    ordersListTextBox: () => cy.get('[dusk=orders-search-input]'),
    checkoutTestValue: () => cy.get('[dusk=orders-search-input-result-0]'),
    reason: () => cy.get('[dusk=reason]'),
    baseCurrencyAmount: () =>
        cy.get('input[placeholder="Base Currency Amount"]'),
    amount: () => cy.get('input[placeholder="Amount"]'),
};

export default returnsLocators;
