const loginPageLocators = {
    emailInputField: () =>
        cy.findByRole('textbox', {
            name: /email address/i,
        }),
    passwordInputField: () => cy.findByLabelText(/password/i),
    loginButton: () =>
        cy.findByRole('button', {
            name: /login/i,
        }),
    oneTimpPasswordInputField: () => cy.findByRole('spinbutton'),
    authenticateButton: () =>
        cy.findByRole('button', {
            name: /authenticate/i,
        }),
};

export default loginPageLocators;
