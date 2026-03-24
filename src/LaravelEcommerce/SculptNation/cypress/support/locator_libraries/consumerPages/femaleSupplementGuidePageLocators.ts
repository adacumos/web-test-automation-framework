const femaleSupplementGuidePageLocators = {
    pageSections: {
        supplementBannerFemale: () =>
            cy.contains('h2.sup-name', 'SUPPLEMENT GUIDE FOR WOMEN'),
        burnProduct: () => cy.get('#burn'),
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
export default femaleSupplementGuidePageLocators;
