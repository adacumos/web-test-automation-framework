const consumerDNSPersonalInformation = {
    pageSections: {
        dnsStatement: () =>
            cy.contains('h3', 'Do Not Sell My Personal Information'),
        dnsMailToLink: () =>
            cy.get('div a[href*="mailto:Privacy@SCULPTnation.com?"]'),
        privacyPolicy: () => cy.get('div>p>a[href*="/privacy-policy"]'),
    },
};
export default consumerDNSPersonalInformation;
