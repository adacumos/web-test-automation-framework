const vsUsersPageLocators = {
    filterRecord: {
        byUserID: () => cy.get('#table-filter-id'),
        byName: () => cy.get('#table-filter-name'),
        byEmail: () => cy.get('#table-filter-email'),
    },
    viewButton: () => cy.get('button[title=View]'),
    impersonateButton: () => cy.get('button[title=Impersonate]'),
    newOrderButton: () => cy.get('button[title="New Order"]'),
    createUserButton: () => cy.findByRole('button', { name: /Create user/ }),
    createPlusNewUserButton: () => cy.get('.btn > span'),
    viewTab: {
        clientName: () => cy.contains('label', /name/i).next(),
        clientEmail: () => cy.contains('label', /email/i).parent().next(),
        membershipAbility: () => cy.get('span[data-ability]'),
        newOrderButton: () => cy.findByRole('button', { name: /new order/i }),
    },
    editTab: {
        nameTextbox: () => cy.findByRole('textbox', { name: /name/i }),
        emailTextbox: () => cy.findByRole('textbox', { name: /email/i }),
        genderTextbox: () => cy.findByRole('textbox', { name: /gender/i }),
        passwordTextbox: () => cy.findByRole('textbox', { name: /password/i }),
        confirmTextbox: () => cy.findByRole('textbox', { name: /confirm/i }),
        leaderTextbox: () => cy.findByRole('textbox', { name: /leader/i }),
        utmContentKey: () =>
            cy.findByRole('textbox', { name: /utm_content_key/i }),
        couponTextBox: () => cy.findByRole('textbox', { name: /coupon_code/i }),
        abilityDropdown: () => cy.get('#admin_abilities_chosen'),

        updateButton: () => cy.findByRole('button', { name: /update/i }),
        impersonateButton: () =>
            cy.findByRole('button', { name: /impersonate/i }),
        deleteButton: () => cy.findByRole('button', { name: /delete/i }),
        newOrderButton: () => cy.findByRole('button', { name: /new order/i }),
        userInfoButton: () => cy.get('.btn-info'),
        editTab: () => cy.get('[role="tablist"] > :nth-child(2) > .nav-link'),
        deleteUser: () => cy.get('.btn-danger'),
    },
    purchasesTab: {
        orderItem: (itemName: string) => cy.contains('td.th-name', itemName),
        orderItemStatus: () => cy.get('td.th-status'),
        orderTaxAmount: () => cy.get('td.th-tax_amount'),
        orderItemRow: (index: number) =>
            cy.get(`table[id=orders-table] tbody > tr:nth-child(${index})`),
    },
    createUserDialog: {
        nameField: () => cy.findByPlaceholderText('Enter name'),
        emailField: () => cy.findByPlaceholderText('Enter email'),
        passwordField: () =>
            cy.findByPlaceholderText('Enter password', { log: false }),
        confirmPasswordField: () =>
            cy.findByPlaceholderText('Confirm password', { log: false }),
        roleSelect: () => cy.get('select[id="user-status"]'),
        genderSelect: () => cy.get('select[id="gender"'),
        leaderSelect: () => cy.get('input[type="search"]'),
        utmField: () => cy.get('input[id="utm_content_key"]'),
        couponField: () => cy.get('input[id="coupon_code"]'),
        saveButton: () => cy.findByRole('button', { name: /Save/ }),
        cancelButton: () => cy.findByRole('button', { name: /Cancel/ }),
    },
    newUserFormAdmin: {
        firstNameInputField: () => cy.get('#user-name'),
        emailInputField: () => cy.get('#user-email'),
        phoneInputField: () => cy.get('#user-phone'),
        passwordInputField: () => cy.get('#user-password'),
        confirmInputField: () => cy.get('#user-confirm'),
        cancelButton: () => cy.get('.btn-secondary'),
        saveButton: () =>
            cy.get('#createFormModal___BV_modal_footer_ > .btn-primary'),
    },
};
export default vsUsersPageLocators;
