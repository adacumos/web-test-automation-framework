const salesFunnelsLocators = {
    createFunnelButton: () =>
        cy.findByRole('button', { name: /create funnel/i }),
    nameField: () => cy.get('[dusk=title]'),
    slugField: () => cy.get('[dusk=slug]'),
    routeField: () => cy.get('[dusk=routes-search-input]'),
    searchField: () => cy.get("div[class*='p-2 bg-grey-300']"),
    checkoutTestValue: () => cy.get('[dusk=routes-search-input-result-1]'),
    salesFunnelsLabel: () => cy.contains('Sales Funnels'),
    tableHeaderSales: (columnName: string) => cy.contains('th', columnName),
    saveFunnelButton: () => cy.findByRole('button', { name: /save funnel/i }),
    salesViewButton: () => cy.get('[dusk=10-view-button]'),
    updatedFunnel: () => cy.findByText(/TestFunnel1/i),
    tableBody: () => cy.get('table tbody>tr'),
};

export default salesFunnelsLocators;
