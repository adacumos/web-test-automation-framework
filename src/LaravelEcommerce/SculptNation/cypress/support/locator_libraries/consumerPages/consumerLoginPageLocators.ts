const consumerLoginPageLocators = {
    loginForm: {
        usernameField: () =>
            cy.findByRole('textbox', {
                name: /username or email address/i,
            }),
        passwordField: () => cy.findByLabelText(/password/i),
        logInButton: () =>
            cy.findByRole('button', {
                name: /log in/i,
            }),
        lostPasswordLink: () =>
            cy.findByRole('link', { name: /lost your password\?/i }),
    },
};

export default consumerLoginPageLocators;
