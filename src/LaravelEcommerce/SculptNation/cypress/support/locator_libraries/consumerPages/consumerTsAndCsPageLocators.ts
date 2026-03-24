const consumerTsAndCsPageLocators = {
    pageSections: {
        pageTitle: () => cy.contains('h3', 'Terms of Use'),
        userAccessRestriction: () =>
            cy.contains(
                'h5',
                'Access to the Website and Restrictions on Your Use'
            ),
        privacyPolicy: () => cy.contains('h5', 'Privacy Policy'),
        purchasingItemFeature: () =>
            cy.contains('h5', 'Purchasing Items Featured on our Website'),
        pricingErrorsOmissions: () =>
            cy.contains('h5', 'Pricing Errors and Omissions'),
        multipleProductOrders: () =>
            cy.contains('u', 'Multiple Product Orders'),
        orderAcceptancePoicy: () => cy.contains('u', 'Order Acceptance Policy'),
        outOfStockProducts: () => cy.contains('u', 'Out of Stock Products'),
        moneybackGuarantee: () =>
            cy.contains('p', '100% Lifetime Money Back Guarantee'),
        GeneralRefundPolicy: () =>
            cy.contains('p', 'General Refund Policy Notes'),
        suspensionOfWebsite: () =>
            cy.contains('h5', 'Modification or Suspension of the Website'),
        contentDisclaimer: () => cy.contains('h5', 'Content Disclaimer'),
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        // resale: () => cy.contains('h5', 'Resale is Prohibited'),
        consentAndReview: () =>
            cy.contains('h5', 'Physician Consent and Review'),
        liabilityLimits: () =>
            cy.contains('h5', 'Limitations of Liability and Damages'),
        indemnity: () => cy.contains('h5', 'Indemnity'),
        contentOwnership: () => cy.contains('h5', 'Ownership of Content'),
        customPlans: () => cy.contains('h5', 'Custom Plans'),
        rulesAndPolicyEnforcement: () =>
            cy.contains('h5', 'Enforcement of Rules and Policies'),
        governingLaw: () => cy.contains('h5', 'Governing Law'),
        disputeResolution: () =>
            cy.contains('h5', 'Dispute Resolution by Binding Arbitration'),
        digitalMillenniumCopyrightAct: () =>
            cy.contains('h5', 'Digital Millennium Copyright Act'),
        technicalSupport: () => cy.contains('h5', 'Technical Support'),
        miscellaneous: () => cy.contains('h5', 'Miscellaneous'),
        californiaUsersNotice: () =>
            cy.contains('h5', 'Notice for California Users'),
    },
    address: () => cy.get(':nth-child(99)'),
};
export default consumerTsAndCsPageLocators;
