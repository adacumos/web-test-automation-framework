const leSubscriptionsPageLocators = {
    cancelButton: () => cy.findByText(/cancel/i),
    updateContinueEditingButton: () =>
        cy.findByText(/update & continue editing/i),
    createAndAddAnotherButton: () =>
        cy.findByRole('button', { name: /create & add another/i }),

    tableHeader: (columnName: string) => cy.contains('th span', columnName),

    subscriptionsLandingPage: {
        createSubscriptionButton: () =>
            cy.findByRole('link', { name: /create subscription/i }),
        subscriptionId: () => cy.get('td:nth-child(2) a'),

        cancelSubscriptionButton: () =>
            cy.findByRole('button', { name: /cancel subscription/i }),
    },
    subscriptionDetailsPage: {
        subscriptionDetailsHeader: () =>
            cy.findByRole('heading', { name: /subscription details/i }),
        subscriptionID: () => cy.contains('h4.text-80', 'ID'),
        subscriptionStatus: () => cy.findByRole('heading', { name: /status/i }),
        startsAt: () => cy.contains('h4.text-80', 'Starts At'),
        endsAt: () => cy.contains('h4.text-80', 'Ends At'),
        trialStartsAt: () =>
            cy.findByRole('heading', { name: /trial starts at/i }),
        trialEndsAt: () => cy.findByRole('heading', { name: /trial ends at/i }),
        renewsAt: () => cy.findByRole('heading', { name: /renews at/i }),
        canceledAt: () => cy.findByRole('heading', { name: /canceled at/i }),
        billingCyclesPaid: () =>
            cy.findByRole('heading', { name: /billing cycles paid/i }),
        subscriptionOffer: () => cy.contains('h4.text-80', 'Offer'),
        subscriptionPlan: () => cy.findByRole('heading', { name: /plan/i }),
        subtotal: () => cy.findByRole('heading', { name: /subtotal/i }),
        shippingAmount: () => cy.contains('h4.text-80', 'Shipping'),
        amount: () => cy.findByRole('heading', { name: /amount/i }),
        originatingOrder: () => cy.contains('h4.text-80', 'Originating Order'),
        originatingOrderOffer: () =>
            cy.findByRole('heading', { name: /originating order offer/i }),
        user: () => cy.contains('h4.text-80', 'User'),
        userPaymentMethod: () =>
            cy.findByRole('heading', { name: /user payment method/i }),
        appliedDiscount: () =>
            cy.findByRole('heading', { name: /applied discount/i }),
        shippingCategory: () =>
            cy.findByRole('heading', { name: /shipping category/i }),
    },
};
export default leSubscriptionsPageLocators;
