const brainTreeLocatorsMkt = {
    // Login Form
    loginForm: {
        userNameField: () => cy.findByRole('textbox', { name: /username/i }),
        passwordField: () => cy.findByLabelText(/password/i),
        loginButton: () => cy.findByRole('button', { name: /log in/i }),
    },

    searchField: () => cy.findByPlaceholderText(/search/i),
    transactionsTab: () => cy.contains('Transactions'),
    newTransactionOption: () => cy.contains('New Transaction'),
    searchTextBox: () => cy.get(':nth-child(2) > #q'),
};

export default brainTreeLocatorsMkt;
