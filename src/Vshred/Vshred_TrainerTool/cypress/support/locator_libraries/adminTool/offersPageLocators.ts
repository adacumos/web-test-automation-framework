const offersPageLocators = {
    newOfferButton: () => cy.findByRole('button', { name: /new offer/i }),

    offersLandingPage: {
        // Bundles Landing Page
        pageUrl: () => cy.url().should('include', '/admin/offers'),
        pageHeader: () => cy.findByRole('heading', { name: /offers/i }),
        colHeaderId: () => cy.findByRole('columnheader', { name: /id/i }),
        colHeaderSource: () =>
            cy.findByRole('columnheader', { name: /source/i }),
        colHeaderName: () => cy.findByRole('columnheader', { name: /name/i }),
        colHeaderCreatedAt: () =>
            cy.findByRole('columnheader', { name: /created at/i }),

        // text input/filter values
        filterOfferId: () => cy.get('input[id=table-filter-id]'),
        filterOfferSource: () => cy.get('select[id=__BVID__14]'),
        filterOfferName: () => cy.get('input[id=table-filter-name]'),
    },

    viewOffersPage: {
        offerID: () => cy.contains('.col-md-2.col', 'SKU'),
        offerSource: () => cy.contains('.col-md-2.col', 'Source'),
        offerName: () => cy.contains('.col-md-2.col', 'Name'),
        offerPrice: () => cy.contains('.col-md-2.col', 'Price'),
        offerProduct: () => cy.contains('.col-md-2.col', 'Product'),
    },

    editOffersPage: {
        editID: () =>
            cy
                .contains('.col-md-2.col div', 'SKU - ')
                .parent()
                .next()
                .children(),
        active: () => cy.findByRole('checkbox'),
        editPrice: () =>
            cy
                .contains('.col-md-2.col div', 'Price - WARNING')
                .parent()
                .next()
                .children(),
        editProduct: () =>
            cy
                .contains('.col-md-2.col span', 'Product')
                .parent()
                .next()
                .children(),
    },

    newOffersPage: {
        Sku: () =>
            cy
                .contains('.col-md-2.col div', 'SKU - ')
                .parent()
                .next()
                .children(),
        active: () => cy.findByRole('checkbox'),
        price: () =>
            cy
                .contains('.col-md-2.col div', 'Price - WARNING')
                .parent()
                .next()
                .children(),
        purchaseLimit: () =>
            cy
                .contains('.col-md-2.col span', 'Purchase Limit')
                .parent()
                .next()
                .children(),
        quantity: () =>
            cy
                .contains('.col-md-2.col span', 'Quantity')
                .parent()
                .next()
                .children(),
        product: () =>
            cy
                .contains('.col-md-2.col span', 'Product')
                .parent()
                .next()
                .children(),

        matchedProductSelect: (productID: string) => {
            cy.contains('span.vbt-matched-text', `${productID}`).click();
        },
    },
};

export default offersPageLocators;
