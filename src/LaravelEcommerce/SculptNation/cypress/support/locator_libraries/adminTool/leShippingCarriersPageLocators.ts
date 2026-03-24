const leShippingCarriersPageLocators = {
    carriersLandingPage: {
        createCarrierButton: () =>
            cy.findByRole('link', { name: /create carrier/i }),
        carrierID: () => cy.get('td:nth-child(2) a'),
        carrierName: () => cy.get('td:nth-child(3) span'),
    },

    carriersDetailsPage: {
        carrierDetailsHeader: (carrierName: string) =>
            cy.findByRole('heading', {
                name: new RegExp(`Carrier Details: ${carrierName}`, 'i'),
            }),
        editCarrierButton: () => cy.get('a[data-testid=edit-resource]'),
        deleteCarrierButton: () =>
            cy.get('button[data-testid=open-delete-modal]'),
        carrierID: () => cy.findByRole('heading', { name: /id/i }),
        carrierName: () => cy.findByRole('heading', { name: /name/i }),
        priority: () => cy.findByRole('heading', { name: /priority/i }),
        media: () => cy.findByRole('heading', { name: /media/i }),
    },

    addEditCarrierPage: {
        roleUpdateHeader: (carrierName: string) =>
            cy.findByRole('heading', {
                name: new RegExp(`Update Role: ${carrierName}`, 'i'),
            }),
        carrierName: () => cy.findByRole('combobox', { name: /name*/i }),
        carrierPriority: () =>
            cy.findByRole('spinbutton', { name: /priority*/i }),
        updateCarrierButton: () =>
            cy.findByRole('button', { name: /update carrier/i }),
        createCarrierButton: () =>
            cy.findByRole('button', { name: /create carrier/i }),
    },
    shippingCategory: {
        createCategoryButton: () =>
            cy.findByRole('button', { name: /create category/i }),
        attachCategoryButton: () =>
            cy.findByRole('button', { name: /attach category/i }),
        selectCategory: () =>
            cy.get('select[data-testid="shipping-categories-select"]'),
        shippingCategoryID: () =>
            cy.get(`td a[href*="nova/resources/shipping-categories/"]`).eq(0),
        shippingCategoryName: () => cy.get('td:nth-child(3) span').eq(0),
    },
};
export default leShippingCarriersPageLocators;
