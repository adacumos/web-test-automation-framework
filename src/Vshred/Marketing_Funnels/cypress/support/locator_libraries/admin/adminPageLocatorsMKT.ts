const adminPageLocatorsMKT = {
    emailField: () => cy.findByRole('textbox'),
    passwordField: () => cy.findByLabelText(/password/i),
    loginButton: () =>
        cy.findByRole('button', {
            name: /login/i,
        }),
    usersTab: () => cy.get('span').contains('Users'),
    createUserButton: () => cy.get('[title="Create user"]'),
    usernameField: () => cy.get('#user-name'),
    useremailField: () => cy.get('#user-email'),
    editUserEmailField: () => cy.get('#email'),
    userPhoneField: () => cy.get('#user-phone'),
    updateUserPhoneField: () => cy.get('#phone'),
    userPasswordField: () => cy.get('#user-password'),
    updateUserPassword: () => cy.get('#password'),
    userConfirmField: () => cy.get('#user-confirm'),
    updateConfirmUserPassword: () => cy.get('#password_confirmation'),
    saveCreateUserButton: () => cy.get('button').contains('Save'),
    emailSearchBox: () => cy.get('#table-filter-email'),
    viewUserProfileButton: () => cy.get('[title="View"]').eq(0),
    editUserProfileTab: () => cy.get('[href="#tab-edit"]'),
    deleteuserButton: () => cy.get('.delete-button'),
    alertSuccess: () => cy.get('.alert-success'),
    alertError: () => cy.get('.alert-danger'),
    updateUserInfoButton: () => cy.get('[value="Update"]'),
    restoreUserButton: () => cy.get('restore-button'),
    userInfoVerificationLocator: () => cy.get('div'),
};

export default adminPageLocatorsMKT;
