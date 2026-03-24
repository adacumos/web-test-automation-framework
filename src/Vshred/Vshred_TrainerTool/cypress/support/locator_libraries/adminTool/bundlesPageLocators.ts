const bundlesPageLocators = {
    newBundleButton: () => cy.findByRole('button', { name: /new bundle/i }),

    bundlesLandingPage: {
        // Bundles Landing Page
        pageUrl: () => cy.url().should('include', '/admin/bundles'),
        pageHeader: () => cy.findByRole('heading', { name: /bundles/i }),
        colHeaderId: () => cy.findByRole('columnheader', { name: /id/i }),
        colHeaderSource: () =>
            cy.findByRole('columnheader', { name: /source/i }),
        colHeaderPrice: () => cy.findByRole('columnheader', { name: /price/i }),
        colHeaderTitle: () => cy.findByRole('columnheader', { name: /title/i }),
        colHeaderGender: () =>
            cy.findByRole('columnheader', { name: /gender/i }),
        colHeaderCreatedAt: () =>
            cy.findByRole('columnheader', { name: /created at/i }),

        // text input/filter values
        filterBundleId: () => cy.get('input[id=table-filter-id]'),
        filterBundleSource: () => cy.get('select[id=__BVID__14]'),
        filterBundleTitle: () => cy.get('input[id=table-filter-title]'),
    },
    // View Bundle Page
    viewBundlesPage: {
        bundleID: () => cy.contains('div b', 'ID'),
        bundleSource: () => cy.contains('div b', 'Source'),
        bundleTitle: () => cy.contains('div b', 'Title'),
        bundleDescription: () => cy.contains('div b', 'Description'),
        bundlePrice: () => cy.contains('div b', 'Price'),
    },
    // Edit Bundle Page
    editBundlesPage: {
        editTitle: () =>
            cy
                .contains('.col-md-2.col div', 'Title')
                .parent()
                .next()
                .children(),
        editDescription: () =>
            cy
                .contains('.col-md-2.col div', 'Title')
                .parent()
                .next()
                .children(),
        editPrice: () =>
            cy
                .contains('.col-md-2.col div', 'Price')
                .parent()
                .next()
                .children(),
    },
    // Create New Bundle Page
    newBundlesPage: {
        title: () => cy.contains('div.col-md-2.col', 'Title').next().children(),
        description: () =>
            cy.contains('div.col-md-2.col', 'Description').next().children(),
        price: () => cy.contains('div.col-md-2.col', 'Price').next().children(),
        currency: () =>
            cy.contains('div.col-md-2.col', 'Currency').next().children(),
        addOffer: () => cy.get('button i.fa-plus').eq(1),
    },
};

export default bundlesPageLocators;
