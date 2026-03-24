const permissionsPageLocators = {
    cancelButton: () => cy.findByText(/cancel/i),
    updateContinueEditingButton: () =>
        cy.findByText(/update & continue editing/i),
    createAndAddAnotherButton: () =>
        cy.findByRole('button', { name: /create & add another/i }),

    permissionsLandingPage: {
        createNewPermission: () =>
            cy.get('a.btn-primary[href*="/permissions/new"]'),
        sortRoleID: () => cy.findByText(/id/i),
    },

    permissionDetailsPage: {
        permissionDetailsHeader: (permissionName: string) =>
            cy.findByRole('heading', {
                name: new RegExp(`permission details: ${permissionName}`, 'i'),
            }),
        editPermissionButton: () => cy.get('a[data-testid=edit-resource]'),
        deletePermissionButton: () =>
            cy.get('button[data-testid=open-delete-modal]'),

        permissionID: () => cy.contains('div h4', 'ID'),
        permissionName: () => cy.contains('div h4', 'Name'),
        permissionGuardName: () => cy.contains('div h4', 'Guard Name'),
        viewRoles: (roleName: string) =>
            cy.contains('span.ml-1', new RegExp(`^${roleName}$`, 'g')),

        roleList: () => cy.get('li.mb-1'),
        roleActive: () => cy.get('svg[aria-labelledby=x-circle]'),
        roleInactive: () => cy.get('svg[aria-labelledby=check-circle]'),
    },
    addEditPermissionPage: {
        permissionUpdateHeader: (permissionName: string) =>
            cy.findByRole('heading', {
                name: new RegExp(`Update Permission: ${permissionName}`, 'i'),
            }),
        createNewPermissionHeader: () =>
            cy.findByRole('heading', { name: /create permission/i }),
        permissionName: () => cy.findByPlaceholderText('Name'),
        guardName: () => cy.findByRole('combobox', { name: /guard name/i }),
        rolesList: () => cy.get('label.mt-2'),
        enableRole: (roleName: string) => cy.get(`input[name="${roleName}"]`),
        updatePermissionButton: () =>
            cy.findByRole('button', { name: /update permission/i }),
        createPermissionButton: () =>
            cy.findByRole('button', { name: /create permission/i }),
    },
};

export default permissionsPageLocators;
