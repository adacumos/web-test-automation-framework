const deposcoLocators = {
    // Login form
    usernameInputField: () => cy.get('#mat-input-0'),
    passwordInputField: () => cy.get('#mat-input-1'),
    loginButton: () =>
        cy.findByRole('button', {
            name: /log in/i,
        }),

    // Quiet menu
    quietMenuHeader: () => cy.findByText(/quiet menu/i),
    quietMenuItem: (itemName: string) => cy.findByText(itemName),

    // Generic elements
    searchInputField: () => cy.get('input[placeholder="Search"]'),
    loadingAnimation: () =>
        cy.findByRole('heading', {
            name: /loading\.\.\./i,
        }),

    // Search results
    searchResults: {
        number: () => cy.get('.abbreviate.link-info.link-style').eq(1),
        status: () => cy.get('.badge.badge-gray.badge-pill.text-regular'),
    },

    clientRW: {
        clientRW: () => cy.findByTitle(/clientrw: clientrw/i),
        clientRWTable: () =>
            cy.findByRole('tabpanel', {
                name: /clientrw/i,
            }),
    },

    // CoHeader details page
    fulfillmentOrdersTab: () => cy.findByText(/fulfillment orders/i),
    coNoticesTab: () => cy.findByText(/co notices/i),
    fulfillmentOrders: {
        table: () => cy.get('ng-table > table'),
        number: () => cy.get('.abbreviate.link-info.link-style').eq(0),
    },
};

export default deposcoLocators;
