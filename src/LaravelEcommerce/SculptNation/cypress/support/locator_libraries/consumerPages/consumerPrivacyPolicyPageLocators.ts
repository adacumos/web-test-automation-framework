const consumerPrivacyPolicyPageLocators = {
    pageSections: {
        privacyPolicyStatement: () => cy.contains('h1', 'Privacy Policy'),
        policyUpdates: () => cy.contains('h3', 'UPDATES TO OUR PRIVACY POLICY'),
        personalInfoCollection: () =>
            cy.contains('h3', 'PERSONAL INFORMATION WE COLLECT'),
        piiPuposeo: () =>
            cy.contains(
                'h3',
                'PURPOSES AND LEGAL BASIS FOR PROCESSING PERSONAL INFORMATION'
            ),
        piiWeShare: () => cy.contains('h3', 'PERSONAL INFORMATION WE DISCLOSE'),
        linkToOtherSites: () =>
            cy.contains('h3', 'HOW WE PROTECT PERSONAL INFORMATION'),
        thirdPartyAds: () => cy.contains('h3', 'CHILDREN’S PRIVACY'),
        yourRights: () => cy.contains('h3', '9. CALIFORNIA RESIDENTS'),
    },
    address: () => cy.get('.inner-content > :nth-child(42)'),
};
export default consumerPrivacyPolicyPageLocators;
