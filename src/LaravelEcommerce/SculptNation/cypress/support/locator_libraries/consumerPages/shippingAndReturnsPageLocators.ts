const shippingAndReturnsPageLocators = {
    pageSections: {
        pageTitle: () => cy.contains('Shipping and Returns'),
        shippingSection: () => cy.contains('h4', 'SHIPPING'),
        returnsSection: () => cy.contains('h4', 'RETURNS'),
        moneyBackGuarantee: () =>
            cy.contains('h5', `100% Lifetime Money Back Guarantee`),
        contactHereLink: () => cy.get('ul>li>a[href="/contact"]'),
        // rmaLink: () =>   // element is no longer available in page
        //     cy.get(
        //         'ul>li a[href*="fulfillment.fedex.com/web/commerce/rma-web"]'
        //     ),
        moreQuestionsButton: () => cy.get('.more-question a[href="/help"]'),
    },
};
export default shippingAndReturnsPageLocators;
