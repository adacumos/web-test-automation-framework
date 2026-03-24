const plansPageLocators = {
    plansLandingPage: {
        // Products Landing Page
        pageUrl: () => cy.url().should('include', '/admin/plans'),
        pageHeader: () => cy.findByRole('heading', { name: /plans/i }),

        // landing page buttons
        createPlansButton: () =>
            cy.findByRole('button', { name: /create plan/i }),
        clearSearchButton: () => cy.findByRole('button', { name: /clear/i }),
        copyPlanButton: () => cy.findByRole('button', { name: /copy/i }),
        searchPlan: () => cy.findByRole('searchbox', { name: /search:/i }),
        editPlanBUtton: () => cy.findByRole('link', { name: /edit/i }),

        duplicatePlanButton: () =>
            cy.findByRole('link', { name: /duplicate/i }),

        // table headers
        colHeaderId: () => cy.get('.th-id'),
        colHeaderName: () => cy.get('.th-name'),
        colHeaderBraintreeID: () => cy.get('.th-braintree_id'),
        colHeaderStripeID: () => cy.get('.th-stripe_id'),
        colHeaderMobileAppID: () => cy.get('.th-app_id'),
        colHeaderCreated: () => cy.get('.th-created_at'),
        colHeaderActions: () => cy.get('.th-actions'),

        // vuetable rows
        planRecords: () => cy.get('tbody tr[role=row]'),
        getPlanRecord: (value: string) => cy.contains('tbody tr', value),
        noPlanDataAvailable: () =>
            cy.findByRole('cell', { name: /no matching records found/i }),
    },
    // Edit Plans Page
    editPlansPage: {
        planNameHeader: (planTitle: string) =>
            cy.findByRole('heading', { name: new RegExp(planTitle, 'i') }),
        planID: () => cy.get('input[name=id]'),
        editTab: () => cy.findByRole('link', { name: /edit/i }),
        editPlanName: () => cy.findByRole('textbox', { name: /name/i }),
        editBraintreeID: () =>
            cy.findByRole('textbox', { name: /braintree id/i }),
        editMobileAppID: () =>
            cy.findByRole('textbox', { name: /mobile app id/i }),
        editStripeID: () => cy.findByRole('textbox', { name: /stripe id/i }),
        editPlanAmount: () => cy.findByRole('textbox', { name: /amount/i }),
        editPhysicalOffer: () => cy.get('select[name=itemable_id]'),
        editAbilityName: () => cy.get('select[name=ability_name]'),
        editTrialPeriod: () =>
            cy.findByRole('textbox', { name: /trial period days/i }),
        editPlanInterval: () =>
            cy.findByRole('textbox', { name: /interval count/i }),
        editBillingCycle: () =>
            cy.findByRole('textbox', { name: /billing cycle/i }),
    },

    // Create New Plans Page
    newPlansPage: {
        planHeader: () => cy.findByRole('heading', { name: /new plan/i }),
        newPlanName: () => cy.findByRole('textbox', { name: /name/i }),
        newBraintreeID: () =>
            cy.findByRole('textbox', { name: /braintree id/i }),
        newMobileAppID: () =>
            cy.findByRole('textbox', { name: /mobile app id/i }),
        newStripeID: () => cy.findByRole('textbox', { name: /stripe id/i }),
        newPlanAmount: () => cy.findByRole('textbox', { name: /amount/i }),
        newPhysicalOffer: () => cy.get('select[name=itemable_id]'),
        newAbilityName: () => cy.get('select[name=ability_name]'),
        newTrialPeriod: () =>
            cy.findByRole('textbox', { name: /trial period days/i }),
        newPlanInterval: () =>
            cy.findByRole('textbox', { name: /interval count/i }),
        newBillingCycle: () =>
            cy.findByRole('textbox', { name: /billing cycle/i }),
    },
};

export default plansPageLocators;
