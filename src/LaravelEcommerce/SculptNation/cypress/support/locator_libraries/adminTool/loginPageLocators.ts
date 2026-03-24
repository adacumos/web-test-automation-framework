const loginPageLocators = {
    emailInputField: () =>
        cy.findByRole('textbox', {
            name: /email address/i,
        }),
    vsEmailInputField: () => cy.findByLabelText(/email/i),
    passwordInputField: () => cy.findByLabelText(/password/i),
    loginButton: () =>
        cy.findByRole('button', {
            name: /login|log in/i,
        }),
    oneTimpPasswordInputField: () => cy.findByRole('spinbutton'),
    authenticateButton: () =>
        cy.findByRole('button', {
            name: /authenticate/i,
        }),
    continueButton: () => cy.contains('button', 'Continue'),

    vsDashboard: () => cy.findByText(/welcome to the admin dashboard!/i),
};

export default loginPageLocators;
