const lePlansPageLocators = {
    cancelButton: () => cy.findByText(/cancel/i),
    updateContinueEditingButton: () =>
        cy.findByText(/update & continue editing/i),
    createAndAddAnotherButton: () =>
        cy.findByRole('button', { name: /create & add another/i }),

    plansLandingPage: {
        createNewPlansButton: () => cy.get('a.btn-primary[href*="/plans/new"]'),
        sortPlanID: () => cy.findByRole('columnheader', { name: /id/i }),
        // table rows
        tableHeader: (columnName: string) => cy.contains('th span', columnName),
        planID: () => cy.get('td:nth-child(2) a'),
        slug: () => cy.get('td:nth-child(2) span'),
        interval: () => cy.get('td:nth-child(4) span'),
        intervalLength: () => cy.get('td:nth-child(5) span'),
        trialPeriodDays: () => cy.get('td:nth-child(6) span'),
    },

    plansDetailsPage: {
        planDetailsHeader: () =>
            cy.findByRole('heading', { name: /plan details/i }),
        editPlanButton: () => cy.findByRole('link', { name: /edit/i }),
        // deletePlanButton: () => cy.findByTitle(/Delete/),
        planID: () => cy.findByRole('heading', { name: /id/i }),
        planSlug: () => cy.findByRole('heading', { name: /slug/i }),
        planInterval: () => cy.contains('h4.text-80', 'Interval'),
        planIntervalLength: () =>
            cy.findByRole('heading', { name: /interval length/i }),
        planTrialPeriodDays: () =>
            cy.findByRole('heading', { name: /trial period days/i }),
    },

    addEditPlansPage: {
        planSlug: () => cy.findByRole('combobox', { name: /slug*/i }),
        planInterval: () => cy.findByRole('combobox', { name: /interval*/i }),
        // cy.get('#interval'),
        planIntervalLength: () =>
            cy.findByRole('spinbutton', { name: /interval length*/i }),
        planTrialPeriodDays: () =>
            cy.findByRole('spinbutton', { name: /trial period days*/i }),
    },
    planOffer: {
        offerID: () => cy.get('table td:nth-child(1) a'),
        offerSku: () => cy.get('table td:nth-child(3) > span'),
        offerTitle: () => cy.get('table td:nth-child(2) > span'),
    },
    planSubscriptions: {
        subscriptionID: () => cy.get('table td:nth-child(1) a'),
        subscriptionStatus: () => cy.get('table td:nth-child(2) > span'),
        renewsAt: () => cy.get('table td:nth-child(3) > span'),
        canceledAt: () => cy.get('table td:nth-child(3) > span'),
        offerTitle: () => cy.get('table td:nth-child(3) > span'),
        originatingOrder: () => cy.get('table td:nth-child(3) > span'),
        user: () => cy.get('table td:nth-child(3) > span'),
        appliedDiscount: () => cy.get('table td:nth-child(3) > span'),
        shippingAddress: () => cy.get('table td:nth-child(3) > span'),

        cancelSubscriptionButton: () =>
            cy.findByRole('button', { name: /cancel subscription/i }),
        createSubscriptionButton: () =>
            cy.findByRole('link', { name: /create subscription/i }),
    },
    attachProduct: {
        searchTrigger: () => cy.get('.search-input-trigger'),
        searchInputTextbox: () => cy.findByRole('textbox'),
        selectSearchResult: () =>
            cy.get('div[dusk=products-search-input-result-0]'),
        quantity: () => cy.findByRole('spinbutton', { name: /quantity/i }),
        attachProductButton: () =>
            cy.findByRole('button', { name: /attach product/i }),
    },
};

export default lePlansPageLocators;
