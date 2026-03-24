const leProductsPageLocators = {
    cancelButton: () => cy.findByText(/cancel/i),
    updateContinueEditingButton: () =>
        cy.findByText(/update & continue editing/i),
    createAndAddAnotherButton: () =>
        cy.findByRole('button', { name: /create & add another/i }),

    productsLandingPage: {
        createNewProduct: () => cy.get('a.btn-primary[href*="/products/new"]'),
        // table headers
        sortProductID: () => cy.findByText(/id/i),
        sortProductName: () => cy.findByText(/name/i),
        sortProductSku: () => cy.findByText(/sku/i),

        // product table rows
        trProductID: (productID: number) =>
            cy.findByRole('link', { name: `${productID}` }),
    },
    productDetailsPage: {
        productDetailsHeader: () =>
            cy.findByRole('heading', { name: /product details/i }),
        productID: () => cy.findByRole('heading', { name: /id/i }),
        productName: () => cy.findByRole('heading', { name: /name/i }),
        productSku: () => cy.findByRole('heading', { name: /sku/i }),
        productType: () => cy.findByRole('heading', { name: /type/i }),
        showContentButton: () =>
            cy.contains('a[aria-role=button]', 'Show Content'),
        productDescription: () =>
            cy.findByRole('heading', { name: /description/i }),
        productCreatedAt: () =>
            cy.findByRole('heading', { name: /created at/i }),
        productUpdatedAt: () =>
            cy.findByRole('heading', { name: /updated at/i }),
        productCogs: () => cy.findByRole('heading', { name: /cogs/i }),
        productDefaultVariant: () =>
            cy.findByRole('heading', { name: /default variant/i }),
        productParentProduct: () =>
            cy.findByRole('heading', { name: /parent product/i }),
    },
    // details page buttons
    deleteProductButton: () =>
        leProductsPageLocators.productDetailsPage
            .productDetailsHeader()
            .next()
            .then((buttons) => {
                cy.wrap(buttons).find('button[data-testid=open-delete-modal]');
            }),
    editProductButton: () =>
        leProductsPageLocators.productDetailsPage
            .productDetailsHeader()
            .next()
            .then((buttons) => {
                cy.wrap(buttons).find('a[data-testid=edit-resource]');
            }),

    editAddProductPage: {
        productName: () => cy.get('input[id=name]'),
        productSku: () => cy.get('input[id=sku]'),
        productType: () => cy.get('select[id=type]'),
        productStatus: () => cy.get('select[id=status]'),
        productDescription: () => cy.get('textarea[id=description]'),
        productDefaultVariant: () =>
            cy.get('select[data-testid=products-select]').eq(0),
        productParent: () =>
            cy.get('select[data-testid=products-select]').eq(1),
        addNewMedia: () => cy.get('#__media__default'),
    },
};
export default leProductsPageLocators;
