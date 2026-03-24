const dashboardLocators = {
    menuButton: (menuItem: string) =>
        cy.findByRole('link', { name: new RegExp(menuItem, 'i') }),
    // menu navigation option when Testing Library fails to identify an element
    navigateMenu: (menu: string) =>
        cy.get(`a[dusk="${menu.toLowerCase()}-resource-link"]`),
    pageHeader: (menuItem: string) =>
        cy.findByRole('heading', {
            name: new RegExp(menuItem.toLowerCase(), 'i'),
        }),
    sidebarMenu: (menuItem: string) =>
        cy.contains('span.sidebar-label', menuItem),
    searchInput: () => cy.get('[data-testid="search-input"]'),
    headerSearch: () => cy.get('[dusk=global-search]'),
    successToast: () => cy.get('.toasted.nova.success'),
    errorToast: () => cy.get('.toasted.nova.error'),
    selectCheckbox: () => cy.get('button input[type=checkbox]'),
    selectAllCheckbox: () => cy.get('label[dusk=select-all-button]'),
    selectAllMatchingCheckbox: () =>
        cy.get('label[dusk=select-all-matching-button]'),
    filterDropdown: () => cy.get('filter-menu-dropdown'),
    loadingAnimation: () => cy.get('svg.text-60.mx-auto.block'),
    tableHeader: (columnName: string) => cy.contains('th span', columnName),
    tableRecords: () => cy.get('table[data-testid=resource-table] tbody>tr'),
    getRecord: (value: string) => cy.contains('tbody td', value),
    noMatchedRecord: (menuItem: string) =>
        cy.contains(`No ${menuItem.toLowerCase()} matched the given criteria`),
    viewButton: () => cy.get('a[data-testid*=view-button]'),
    editButton: () => cy.get('a[dusk*=edit-button]'),
    deleteButton: () => cy.get('button[data-testid*=delete-button]'),
    deleteModalButton: () => cy.get('button[data-testid=open-delete-modal]'),
    paginationNumber: (pageCount: number) =>
        cy.findByRole('button', { name: `/${pageCount}/` }),
    cancelButton: () => cy.findByRole('button', { name: /cancel/i }),
    confirmButton: () => cy.get('button[data-testid=confirm-button]'),
    messagePrompt: () => cy.get('form h2'),

    defaultDetailsTab: () => cy.contains('button', 'Details'),
    selectTab: (tabName: string) =>
        cy.findByRole('button', {
            name: new RegExp(tabName.toLowerCase(), 'i'),
        }),
    resourceTable: () => cy.get('table[data-testid=resource-table]'),
    resourceTableRecord: (tableName: string) =>
        cy
            .get(`a[href*="/nova/resources/${tableName.toLowerCase()}/"]`)
            .parents('tr'),
    resourceLink: (resourceName: string) =>
        cy
            .get(`a[href*="nova/resources/${resourceName.toLowerCase()}/"]`)
            .eq(0),
    attachResourceButton: (resource: string) =>
        cy.get(
            `a.btn-primary[href*="/attach/${resource.toLowerCase()}?viaRelationship"]`
        ),
    createResourceButton: (resource: string) =>
        cy.get(
            `a.btn-primary[href*="/resources/${resource.toLowerCase()}/new"]`
        ),
    trashedResourceFilter: (resource: string) =>
        cy.get(`div.${resource.toLowerCase()} div.filter-menu-dropdown button`),
    selectTrashedOption: () => cy.get('select[dusk=trashed-select]'),
    redirectsLinks: () => cy.get('a').contains('168'),
    routeLinks: () => cy.get('a').contains('300'),
    cmsLocator: () => cy.get('.text-90'),
    redirectsSuccess: () => cy.get('.text-success'),
    redirectsEqSeven: () => cy.get('.text-90').eq(7),
    redirectsEqEight: () => cy.get('.text-90').eq(8),
    createButton: () => cy.get('[dusk=create-button]'),
    updateButton: () => cy.get('[dusk=update-button]'),
    editButtonDashboard: () => cy.get('[dusk=edit-resource-button]'),
    backArrow: () => cy.get('[data-testid="lens-back"]'),
    body: () => cy.get('[dusk=body]'),
    updatedMessage: () => cy.findByText(/TestMessageName1/i),
    logoutIcon: () =>
        cy.get('button img[src*="https://secure.gravatar.com/avatar/"]'),
    logoutButton: () => cy.get('a[href*="nova/logout"]'),
    dashboardCardPanel: () => cy.get('.px-3 .card-panel h3'),
    cardPanelDropdown: () => cy.get('select.select-box-sm'),
    cardPanelValue: () => cy.get('p.mb-4'),
    cardPanelChart: () => cy.get('div.ct-chart'),
    chartPoints: () => cy.get('line.ct-point'),
    purgeCacheButton: () => cy.findByRole('button', { name: /purge cache/i }),
};

export default dashboardLocators;
