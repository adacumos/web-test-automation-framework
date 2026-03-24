const braintreeLocators = {
    loginForm: {
        usernameField: () => cy.get('#login'),
        passwordField: () => cy.get('#password'),
        loginButton: () => cy.get('[name="commit"]'),
    },
    // locators for logged in users
    user: {
        homeTitle: () => cy.get('h2 .active'),
        searchField: () => cy.get('#q'),
        resultsTitle: () => cy.get('h2').contains('Results'),
        transactionAmount: () => cy.get('.amount_negative'),
        transactionType: () =>
            cy.get('.amount_negative').contains('td', 'Credit'),
        transactionNumber: (transNo: string) =>
            cy.get(`a[href*="transactions/${transNo}"]`),
    },
    transactionDetail: {
        customerEmail: () => cy.get('dd a[href*="mailto:"]'),
        orderID: () => cy.contains('dt', 'Order ID').next(),
        orderAmount: () => cy.contains('dt', 'Amount').next(),
        orderItem: (orderName: string) => cy.contains('tbody td', orderName),
        shipCategoryItem: (shipCategoryName: string) =>
            cy.contains('tbody td', shipCategoryName),
        unitAmount: () => cy.get('.amount_positive'),
    },
};

export default braintreeLocators;
