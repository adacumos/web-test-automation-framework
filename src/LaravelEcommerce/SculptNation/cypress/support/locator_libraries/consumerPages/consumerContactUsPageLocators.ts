const consumerContactUsPageLocators = {
    contactUsPageSections: {
        pageTitle: () => cy.contains('h3', 'Contact Us'),
        sendEmail: () => cy.get('a[href="/contact"]'),
        faqPage: () => cy.get('a[href="/help"]'),
        returnInfoLink: () => cy.get('p a[href = "/shipping-and-returns"]'),
    },
};
export default consumerContactUsPageLocators;
