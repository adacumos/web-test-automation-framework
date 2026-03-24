const leShippingCategoriesPageLocators = {
    categoriesLandingPage: {
        createCategoryButton: () =>
            cy.findByRole('link', { name: /create category/i }),
        categoryID: () => cy.get('td:nth-child(2) a'),
        categoryName: () => cy.get('td:nth-child(3) span'),
        carrier: () => cy.get('td:nth-child(7) span'),
    },

    categoriesDetailsPage: {
        categoryDetailsHeader: (categoryName: string) =>
            cy.findByRole('heading', {
                name: new RegExp(`Category Details: ${categoryName}`, 'i'),
            }),
        editCategoryButton: () => cy.get('a[data-testid=edit-resource]'),
        deleteCategoryButton: () =>
            cy.get('button[data-testid=open-delete-modal]'),
        categoryID: () => cy.findByRole('heading', { name: /id/i }),
        categoryName: () => cy.findByRole('heading', { name: /name/i }),
        detail: () => cy.contains('h4.text-80', 'Detail'),
        strategy: () => cy.findByRole('heading', { name: /strategy/i }),
        categoryClass: () => cy.findByRole('heading', { name: /class/i }),
        carrier: () => cy.findByRole('heading', { name: /carrier/i }),
        serviceLevel: () =>
            cy.findByRole('heading', { name: /service level/i }),
    },

    addEditShippingCategoryPage: {
        categoryName: () => cy.findByRole('combobox', { name: /name*/i }),
        categoryDetail: () => cy.findByRole('combobox', { name: /detail*/i }),
        strategy: () => cy.findByRole('combobox', { name: /strategy*/i }),
        class: () => cy.findByRole('combobox', { name: /class*/i }),
        shippingCarrier: () =>
            cy.get('[data-testid="shipping-carriers-select"]'),
        serviceLevel: () =>
            cy.findByRole('combobox', { name: /service level*/i }),
        createCategoryButton: () =>
            cy.findByRole('button', { name: /create category/i }),
    },

    prices: {
        priceID: () => cy.get(`td a[href*="nova/resources/prices/"]`).eq(0),
        priceAmount: () => cy.get('td:nth-child(3) span'),
    },
};
export default leShippingCategoriesPageLocators;
