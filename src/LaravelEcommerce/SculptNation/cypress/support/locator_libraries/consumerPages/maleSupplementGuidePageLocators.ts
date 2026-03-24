const maleSupplementGuidePageLocators = {
    pageSections: {
        supplementBannerMale: () =>
            cy.contains('h2.sup-name', 'SUPPLEMENT GUIDE FOR MEN'),
        burnProduct: () => cy.get('#burn'),
        testboostProduct: () => cy.get('#testboost'),
        creatineProduct: () => cy.get('#creatine'),
        burnPMProduct: () => cy.get('#burn_pm'),
        turmericProduct: () => cy.get('#turmeric'),
        fatlossProduct: () => cy.get('#fls'),
        greensProduct: () => cy.get('#greens'),
        hghBoostProduct: () => cy.get('#hgh_boost'),
        probioticsProduct: () => cy.contains('#mbs', 'PROBIOTICS'),
        enzymesProduct: () => cy.contains('#mbs', 'ENZYMES'),
        preWorkoutProduct: () => cy.get('#pre_workout'),
        postWorkoutProduct: () => cy.get('#post_workout'),
        proteinProduct: () => cy.get('#protein'),
        bcaaProduct: () => cy.get('#bcaa'),
        neuroctaneProduct: () => cy.get('#neuroctane'),
    },
};
export default maleSupplementGuidePageLocators;
