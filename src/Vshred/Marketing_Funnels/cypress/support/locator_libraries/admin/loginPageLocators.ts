const loginPageLocators = {
    emailField: () => cy.findByRole('textbox'),
    passwordField: () => cy.findByLabelText(/password/i),
    loginButton: () =>
        cy.findByRole('button', {
            name: /login/i,
        }),
    loginHeaderLink: () => cy.get('a').contains('Login'),
};

export default loginPageLocators;
