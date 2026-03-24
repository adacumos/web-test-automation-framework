const consumerTestimonialSupport = {
    pageSections: {
        pageHeader: () => cy.contains('h1', 'SCULPT NATION SURVEY RESULTS'),
        burnSurveySummary: () => cy.contains('h2', 'BURN EVOLVED 2.0 (“BURN”)'),
        testBoostMaxSurveySummary: () => cy.contains('h2', 'TEST BOOST MAX'),
        tumericBlackSurveySummary: () => cy.contains('h2', 'TURMERIC BLACK'),
        burnPMSurveySummary: () => cy.contains('h2', 'BURN PM'),
        testBoostRipped90DSurveySummary: () =>
            cy.contains('h2', 'TEST BOOST + RIPPED IN 90 DAYS'),
        burnEvolvedFatLossExtremeSurveySummary: () =>
            cy.contains('h2', 'BURN EVOLVED + FAT LOSS EXTREME'),
    },
};
export default consumerTestimonialSupport;
