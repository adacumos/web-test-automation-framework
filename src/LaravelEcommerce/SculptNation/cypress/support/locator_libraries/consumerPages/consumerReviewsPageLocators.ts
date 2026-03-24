const consumerReviewsPageLocators = {
    reviewsPageSections: {
        reviewBanner: () => cy.get('div.reviews__banner'),
        reviewVideos: () => cy.get('div.reviews__videos'),
        reviewTestimonials: () => cy.get('div.reviews__testimonials'),
    },
};
export default consumerReviewsPageLocators;
