const agentListLocators = {
    createAgentListButton: () =>
        cy.findByRole('link', { name: /create sales agent/i }),
    firstNameField: () => cy.get('[dusk=first_name]'),
    lastNameField: () => cy.get('[dusk=last_name]'),
    emailField: () => cy.get('[dusk=email]'),
    passwordField: () => cy.get('[dusk=password]'),
    confirmPasswordField: () => cy.get('[dusk=password_confirmation]'),
    agencyField: () => cy.get('[dusk=agency]'),
    callCenterUserNameField: () => cy.get('[dusk=call_center_username]'),
};

export default agentListLocators;
