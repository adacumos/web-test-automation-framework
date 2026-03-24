const productsPageLocators = {
    newProductsButton: () => cy.findByRole('button', { name: /new product/i }),

    productsLandingPage: {
        // Products Landing Page
        pageUrl: () => cy.url().should('include', '/admin/products'),
        pageHeader: () => cy.findByRole('heading', { name: /products/i }),
        colHeaderId: () => cy.findByRole('columnheader', { name: /id/i }),
        colHeaderName: () => cy.findByRole('columnheader', { name: /name/i }),
        colHeaderGender: () =>
            cy.findByRole('columnheader', { name: /gender/i }),
        colHeaderCreatedAt: () =>
            cy.findByRole('columnheader', { name: /created at/i }),

        // text input/filter values
        filterProductId: () => cy.get('input[id=table-filter-id]'),
        filterProductName: () => cy.get('input[id=table-filter-name]'),
        filterProductGender: () => cy.get('input[id=table-filter-gender]'),
    },
    // View Products Page
    viewProductsPage: {
        productID: () => cy.contains('div b', 'ID'),
        productName: () => cy.contains('div b', 'Name'),
        productDefaultPrice: () => cy.contains('div b', 'Default Price'),
        productCogs: () => cy.contains('div b', 'Cost of Goods'),
        productPhysical: () => cy.contains('div b', 'Physical'),
        productDescription: () => cy.contains('div b', 'Description'),
        productAbility: () => cy.contains('div b', 'Ability'),
    },
    // Edit Products Page
    editProductsPage: {
        editID: () =>
            cy.contains('.col-md-2.col div', 'ID').parent().next().children(),
        editName: () =>
            cy.contains('.col-md-2.col div', 'Name').parent().next().children(),
        editDefaultPrice: () =>
            cy
                .contains('.col-md-2.col div', 'Default Price')
                .parent()
                .next()
                .children(),
        editCogs: () =>
            cy
                .contains('.col-md-2.col div', 'Cost of Goods')
                .parent()
                .next()
                .children('input'),
        // .children(),
        editDescription: () =>
            cy
                .contains('.col-md-2.col div', 'Description')
                .parent()
                .next()
                .children(),
        editAbility: () =>
            cy
                .contains('.col-md-2.col div', 'Ability')
                .parent()
                .next()
                .children(),
        editStatus: () =>
            cy
                .contains('.col-md-2.col span', 'Physical')
                .parent()
                .next()
                .children(),
    },
    // Create New Product Page
    newProductsPage: {
        id: () => cy.contains('div.col-md-2.col', 'ID').next().children(),
        name: () => cy.contains('div.col-md-2.col', 'Name').next().children(),
        defaultPrice: () =>
            cy.contains('div.col-md-2.col', 'Default Price').next().children(),
        cogs: () =>
            cy.contains('div.col-md-2.col', 'Cost of Goods').next().children(),
        description: () =>
            cy.contains('div.col-md-2.col', 'Description').next().children(),
        ability: () =>
            cy.contains('div.col-md-2.col', 'Ability').next().children(),
        physicalItem: () => cy.findByRole('checkbox'),
    },
};

export default productsPageLocators;
