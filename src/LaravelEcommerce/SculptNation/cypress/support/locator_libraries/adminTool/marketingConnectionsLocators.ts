const marketingConnectionsLocators = {
    marketingListTextBox: () => cy.get('[dusk=marketing-lists-search-input]'),
    checkoutTestValue: () =>
        cy.get('[dusk=marketing-lists-search-input-result-0]'),
    checkoutTestValue1: () =>
        cy.get('[dusk=marketing-lists-search-input-result-1]'),
    marketableTextBox: () => cy.findByRole('combobox'),
    offerTextBox: () => cy.get('[dusk=marketable-search-input]'),
    offerTestValue: () => cy.get('[dusk=marketable-search-input-result-0]'),
};

export default marketingConnectionsLocators;
