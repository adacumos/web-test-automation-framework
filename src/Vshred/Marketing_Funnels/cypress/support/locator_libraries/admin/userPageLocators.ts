const userPageLocators = {
    // Admin Page Elements
    userOption: () => cy.contains('Users'),
    emailTextbox: () => cy.get('#table-filter-email'),
    viewButton: () => cy.findByTitle('View'),
    purchasesTab: () => cy.contains('Purchases'),
    subscriptionsTab: () => cy.contains('Subscriptions'),
    vsuSubscription: () => cy.contains('VSU - Monthly -'),
    burnEvolvedSubscription: () => cy.contains('BURN EVOLVED 2.0 -'),
    burnPMSubscription: () => cy.contains('BURN PM -'),
    noSubscriptionsEmptyTable: () =>
        cy.findByText(
            /the user has no subscriptions\. create a new one using the subscription cart\./i
        ),
    customDietPlanLabelAdmin: () =>
        cy.findByRole('cell', { name: /custom diet plan/i }),
};

export default userPageLocators;
