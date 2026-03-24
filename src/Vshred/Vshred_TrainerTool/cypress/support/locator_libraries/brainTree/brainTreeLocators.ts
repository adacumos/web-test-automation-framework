const brainTreeLocators = {
    // Login Form
    loginForm: {
        userNameField: () => cy.findByRole('textbox', { name: /username/i }),
        passwordField: () => cy.findByLabelText(/password/i),
        loginButton: () => cy.findByRole('button', { name: /log in/i }),
    },

    searchField: () => cy.findByPlaceholderText(/search/i),

    // Transactions Table
    transactions: {
        transactionRow: (paymentId: string) =>
            cy
                .findByRole('link', {
                    name: new RegExp(paymentId, 'i'),
                })
                .parent()
                .parent(),
        paymentId: (id: string) =>
            cy.findByRole('link', { name: new RegExp(id, 'i') }),
        paymentStatus: (paymentStatus: string) =>
            cy.findByRole('cell', {
                name: new RegExp(paymentStatus, 'i'),
            }), // accesible within transactionRow
        amount: (amount: string) =>
            cy.findByRole('cell', { name: `${amount} USD` }), // accesible within transactionRow
        customer: (customer: string) =>
            cy.findByRole('cell', {
                name: new RegExp(customer, 'i'),
            }), // accesible within transactionRow
    },
};

export default brainTreeLocators;
