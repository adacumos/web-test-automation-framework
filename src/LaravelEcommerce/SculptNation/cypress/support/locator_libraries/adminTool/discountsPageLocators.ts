const discountsPageLocators = {
    cancelButton: () => cy.findByText(/cancel/i),
    updateContinueEditingButton: () =>
        cy.findByRole('button', { name: /update & continue editing/i }),
    createAndAddAnotherButton: () =>
        cy.findByRole('button', { name: /create & add another/i }),
    createDiscountButton: () =>
        cy.findByRole('button', { name: /create discount/i }),

    discountsLandingPage: {
        createNewDiscounts: () =>
            cy.get('a.btn-primary[href*="/discounts/new"]'),
        sortDiscountID: () => cy.findByText(/id/i),
    },

    discountsDetailsPage: {
        discountDetailsHeader: () =>
            cy.findByRole('heading', { name: /discount details/i }),
        editDiscountButton: () => cy.get('a[data-testid=edit-resource]'),
        deleteDiscountButton: () =>
            cy.get('button[data-testid=open-delete-modal]'),
        discountID: () => cy.findByRole('heading', { name: /id/i }),
        discountTitle: () => cy.findByRole('heading', { name: /title/i }),
        discountUser: () => cy.contains('h4.text-80', 'User'),
        discountType: () => cy.contains('h4.text-80', 'Type'),
        discountRate: () =>
            cy.findByRole('heading', { name: /amount of type/i }),
        discountStarts: () => cy.findByRole('heading', { name: /starts at/i }),
        discountEnds: () => cy.findByRole('heading', { name: /ends at/i }),
        discountReccurringUses: () =>
            cy.findByRole('heading', { name: /recurring uses/i }),
        discountMinimumCarTotal: () =>
            cy.findByRole('heading', { name: /minimum cart total/i }),
        discountMax: () => cy.findByRole('heading', { name: /max discount/i }),
        discountUsage: () =>
            cy.findByRole('heading', { name: /discount usage/i }),
        discountCouponCode: () =>
            cy.findByRole('heading', { name: /coupon code/i }),
    },
    addEditDiscountPage: {
        discountTitle: () => cy.findByRole('combobox', { name: /title*/i }),
        discountType: () => cy.get('#type'),
        discountRate: () => cy.get('#percentage'),
        discountStarts: () => cy.get('div input[name="Starts At"]'),
        discountEnds: () => cy.get('div input[name="Ends At"]'),
        discountReccurringUses: () =>
            cy.findByRole('spinbutton', { name: /recurring uses/i }),
        discountMinimumCarTotal: () =>
            cy.findByRole('spinbutton', { name: /minimum cart total/i }),
        discountMax: () =>
            cy.findByRole('spinbutton', { name: /max discount/i }),
        discountCouponCode: () =>
            cy.findByRole('combobox', { name: /coupon code/i }),
        discountAvailableToAdmin: () =>
            cy.findByRole('checkbox', { name: /available to admins/i }),
    },
    appliedDiscounts: {
        createAppliedDiscButton: () =>
            cy.findByRole('link', { name: /create applied discount/i }),
        orderOfferID: () =>
            cy.get(
                'div[dusk="order-offers-index-component"] td:nth-child(2) a'
            ),
    },
};

export default discountsPageLocators;
