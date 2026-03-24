const dashboardLocators = {
    navigationMenuItemLink: (menuItem: string) =>
        cy.findByRole('link', {
            name: new RegExp(menuItem, 'i'),
        }),
    ordersNavigationMenuItemLink: () =>
        cy.findByRole('link', {
            name: 'Orders',
        }),
    successMessage: () => cy.get('.toast-message'),

    // menu navigation option when Testing Library fails to identify an element
    navigateMenu: (menu: string) =>
        cy.get(`a[href*="admin/${menu.toLowerCase()}"]`),

    // vuetable rows
    tdRecords: () => cy.get('td.vuetable-td-id'),
    getRecord: (value: string) => cy.contains('tr', value),
    rowCountSelect: () => cy.get('.row-count-dropdown.custom-select-sm'),
    noDataAvailable: () => cy.get('.vuetable-empty-result'),

    // shared buttons
    viewButton: () => cy.findByRole('button', { name: /view/i }),
    editButton: () => cy.findByRole('button', { name: /edit/i }),
    cloneButton: () => cy.findByRole('button', { name: /clone/i }),
    deleteButton: () => cy.findByRole('button', { name: /delete/i }),
    cancelButton: () => cy.findByRole('button', { name: /cancel/i }),
    saveButton: () => cy.findByRole('button', { name: /save/i }),

    vsLogo: () => cy.findByRole('img'),
};

export default dashboardLocators;
