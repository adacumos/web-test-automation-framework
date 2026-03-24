const rolesPageLocators = {
    cancelButton: () => cy.findByText(/cancel/i),
    updateContinueEditingButton: () =>
        cy.findByText(/update & continue editing/i),
    createAndAddAnotherButton: () =>
        cy.findByRole('button', { name: /create & add another/i }),
    rolesLandingPage: {
        createNewRole: () => cy.get('a.btn-primary[href*="/roles/new"]'),
        sortRoleID: () => cy.findByText(/id/i),
    },

    roleDetailsPage: {
        roleDetailsHeader: (roleName: string) =>
            cy.findByRole('heading', {
                name: new RegExp(`Role Details: ${roleName}`, 'i'),
            }),
        editRoleButton: () => cy.get('a[data-testid=edit-resource]'),
        deleteRoleButton: () => cy.get('button[data-testid=open-delete-modal]'),

        roleID: () =>
            cy.contains('div[dusk=roles-detail-component] div h4', 'ID'),
        roleName: () =>
            cy.contains('div[dusk=roles-detail-component] div h4', 'Name'),
        roleGuardName: () =>
            cy.contains(
                'div[dusk=roles-detail-component] div h4',
                'Guard Name'
            ),
        viewPermission: (permissionName: string) =>
            cy.contains('span.ml-1', permissionName),

        permissionList: () => cy.get('li.mb-1'),
        roleActive: () => cy.get('svg[aria-labelledby=x-circle]'),
        roleInactive: () => cy.get('svg[aria-labelledby=check-circle]'),
    },
    addEditRolePage: {
        roleUpdateHeader: (roleName: string) =>
            cy.findByRole('heading', {
                name: new RegExp(`Update Role: ${roleName}`, 'i'),
            }),
        createNewRoleHeader: () =>
            cy.findByRole('heading', { name: /create role/i }),
        roleName: () => cy.get('input[id=name]'),
        guardName: () => cy.get('select[id=guard_name]'),
        permissionList: () => cy.get('label.mt-2'),
        enablePermission: (permissionName: string) =>
            cy.get(`input[name="${permissionName}"]`),
        updateRoleButton: () => cy.contains('button span', 'Update Role'),
        createRoleButton: () => cy.contains('button span', 'Create Role'),
    },
    attachRole: {
        attachRoleLink: () => cy.contains('a', 'Attach Role').eq(0),
        roleSelect: () => cy.get('[data-testid="roles-select"]'),
        attachRoleButton: () => cy.contains('button span', 'Attach Role'),
    },
    verifyRole: () => cy.get('span'),
};

export default rolesPageLocators;
