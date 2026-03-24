const usersPageLocators = {
    createUserButton: () =>
        cy.findByRole('button', {
            name: /create user/i,
        }),

    // Search user
    emailSearchField: () => cy.get('#table-filter-email'),

    // User Details
    userDetails: {
        // User Details Tabs
        navigationTab: (tabName: string) =>
            cy.findByRole('tab', {
                name: new RegExp(tabName.toLowerCase(), 'i'),
            }),
        // User Details Info Messages
        userDeletedMessage: (userEmail: string) =>
            cy.contains(`Success: User "${userEmail}" successfully deleted.`),
        // User Details Buttons
        newOrderButton: () => cy.findByRole('button', { name: /new order/i }),
        resendLoginButton: () =>
            cy.findByRole('button', { name: /resend login/i }),
    },

    // User Details -> Create User
    createUserForm: {
        // Create User Modal
        createUserModal: () =>
            cy.findByRole('dialog', {
                name: /create user/i,
            }),
        // Create user Fields
        nameField: () => cy.findByPlaceholderText(/enter name/i),
        emailField: () => cy.findByPlaceholderText(/enter email/i),
        phoneField: () =>
            cy.findByPlaceholderText(/enter phone number \(optional\)/i),
        passwordField: () => cy.findByPlaceholderText(/enter password/i),
        passwordConfirmationField: () =>
            cy.findByPlaceholderText(/confirm password/i),
        roleField: () => cy.findByRole('combobox'), // accessible within createUserModal
        // Create user Buttons
        cancelButton: () => cy.findByRole('button', { name: /cancel/i }),
        saveButton: () => cy.findByRole('button', { name: /save/i }),
    },

    // User Details -> View User
    viewUserForm: {
        detailsSection: () => cy.get('div.details'),
    },

    // User Details -> Edit User
    editUserForm: {
        // Edit user Fields
        nameField: () => cy.findByRole('textbox', { name: /name/i }),
        emailField: () => cy.findByRole('textbox', { name: /email/i }),
        phoneField: () => cy.findByRole('textbox', { name: /phone/i }),
        passwordField: () => cy.findByLabelText(/password/i),
        passwordConfirmationField: () => cy.findByLabelText(/confirm/i),
        roleField: () => cy.findByRole('combobox', { name: /role/i }),
        // Edit user Buttons
        impersonateButton: () =>
            cy.findByRole('button', { name: /impersonate/i }),
        deleteButton: () => cy.findByRole('button', { name: /delete/i }),
        updateButton: () => cy.findByRole('button', { name: /update/i }),
    },
};

export default usersPageLocators;
