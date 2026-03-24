const consumerHomepageLocators = {
    pageSections: {
        heroPage: () => cy.get('.hero'),
        assessmentBanner: () => cy.get('div.promo-banner'),
        productsList: () => cy.get('div.programs'),
        productGuarantee: () => cy.get('div.programs__guarantee'),
        program_bundle: () => cy.get('div.programs__bundle'),
        stories: () => cy.get('div.stories'),
        claim: () => cy.get('div.claim'),
        productCategories: () => cy.get('div.categories'),
        guarantee: () => cy.get('div.guarantee'),
        videos: () => cy.get('div.videos'),
        testimonials: () => cy.get('div.testimonials'),
        customProgram: () => cy.get('div.custom__program'),
        customProgramPeople: () => cy.get('div.custom__program-people'),
        customStart: () => cy.get('div.custom__start'),
    },
    aboutUs: {
        pageTitle: () => cy.contains('h3', 'About Us'),
        productContainer: () => cy.get('.mt-3.container'),
    },
    zeroCartItems: {
        emptyCartImage: () => cy.get('i.empty-cart'),
        zeroItemAddedMessage: () =>
            cy.contains('h5', `You haven't added anything to your cart.`),
        inviteToBuyMessage: () =>
            cy.contains('h5', `We're sure you'll find something in our store!`),
        continueShoppingButton: () =>
            cy.get('div.inner-content a[href="/products"]'),
    },
    ourPress: {
        ourPressHeader: () => cy.contains('h3', 'Our Press'),
        siteLinks1: () => cy.get('.site-link a').eq(0),
        siteLinks2: () => cy.get('.site-link a').eq(1),
    },
};
export default consumerHomepageLocators;
