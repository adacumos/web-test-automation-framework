const consumerSupplementsPageLocators = {
    pageSections: {
        assessmentBanner: () => cy.get('div.promo-banner'),
        productsList: () => cy.get('div.programs'),
        productGuarantee: () => cy.get('div.programs__guarantee'),
        program_bundle: () => cy.get('div.programs__bundle'),
        claim: () => cy.get('div.claim'),
        productCategories: () => cy.get('div.categories'),
        testimonials: () => cy.get('div.testimonials'),
        stories: () => cy.get('div.stories'),
        videos: () => cy.get('div.videos'),
    },
};
export default consumerSupplementsPageLocators;
