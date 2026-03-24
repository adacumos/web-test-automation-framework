const customCoachingPlansPageLocators = {
    startCustomPlanButton: () => cy.get('.custom__start-button.first'),
    getDietPlanButton: () =>
        cy.contains('.packages32__cta,a[href]', 'GET MY DIET PLAN').eq(0),
    getDietTrainingPlanButton: () =>
        cy
            .contains(
                '.packages32__cta,a[href]',
                'GET MY DIET & TRAINING PLAN!'
            )
            .eq(0),
    yesCDPButton: () =>
        cy.findAllByText(/YES! GET MY CUSTOM PLAN NOW! >>/i).eq(0),
    yesRippedButton: () =>
        cy.findAllByText(/Yes I want Ripped In 90 Days!/i).eq(0),
    dietPlanButton: () => cy.findByText(/GET MY DIET PLAN!/i),
    yesBurnButton: () => cy.findByText(/YES! Give Me the Burn Stack/i),
    addtoOrderButton: () => cy.findByText(/Add This to My Order! >>/i),
    claimMembershipOfferButton: () => cy.contains('Claim Membership Offer >>'),
    claimAnnualPassButton: () => cy.contains('Claim ANNUAL PASS >>'),
    getMyGreensNowButton: () => cy.contains(/Greens Now! >>/i),
    dietAndTrainingPlanButton: () =>
        cy.findByText(/GET MY DIET & TRAINING PLAN!/i),
};
export default customCoachingPlansPageLocators;
