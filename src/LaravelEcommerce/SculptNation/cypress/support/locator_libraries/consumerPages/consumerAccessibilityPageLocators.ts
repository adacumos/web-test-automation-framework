const consumerAccessibilityPageLocators = {
    pageSections: {
        accessibilityStament: () =>
            cy.contains('h3', 'Accessibility Statement'),
        general: () => cy.contains('h5', 'General'),
        websiteAccessibility: () =>
            cy.contains('h5', 'Accessibility on this Website'),
        accessibilityMenu: () =>
            cy.contains('h5', 'Enabling the Accessibility Menu'),
        disclaimer: () => cy.contains('h5', 'Disclaimer'),
        thirdPartyApplications: () =>
            cy.contains('h5', 'Third Party Applications'),
        hereForYou: () => cy.contains('h5', 'We are Here for You'),
    },
    accessibilityLinks: {
        googleProducts: () =>
            cy.get(
                'li a[href*="www.google.com/accessibility/products-features"]'
            ),
        firefoxBrowser: () =>
            cy.get(
                'li a[href*="addons.mozilla.org/en-US/firefox/addon/tota11y-accessibility-toolkit/"]'
            ),
        fbAccessibilityPolicy: () =>
            cy.get('li a[href*="www.facebook.com/help/accessibility"]'),
        youTubeAccessibilityPolicy: () =>
            cy.get(
                'li a[href*="support.google.com/youtube/answer/189278?hl=en"]'
            ),
        instagramAccessibilityAnnouncements: () =>
            cy.get(
                'li a[href*="9to5mac.com/2018/11/28/accessibility-instagram-alternative-text/"]'
            ),
        instagramAccessibilityPolicy: () =>
            cy.get('li a[href*="help.instagram.com/1178723545597542"]'),
        twitterAccessibilityPolicy: () =>
            cy.get(
                'li a[href*="help.twitter.com/en/using-twitter/picture-descriptions"]'
            ),
        linkedInAccessibilityPolicy: () =>
            cy.get('li a[href*="www.linkedin.com/accessibility"]'),
    },
    thirdPartyScreenReaders: {
        jaws: () =>
            cy.get(
                'li a[href*="freedomscientific.com/products/software/jaws/"]'
            ),
        afb: () =>
            cy.get(
                'li a[href*="www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products/"]'
            ),
    },
};
export default consumerAccessibilityPageLocators;
