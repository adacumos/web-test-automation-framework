const consumerHeaderFooterPageLocators = {
    pageHeaders: {
        home: () => cy.findByRole('listitem', { name: /home/i }),
        supplements: () => cy.get('.nav-item a[href="/products"]'),
        supplementGuide: () =>
            cy.contains('.nav-item span', 'Supplement Guide'),
        femaleGuide: () => cy.findByRole('menuitem', { name: /female guide/i }),
        maleGuide: () => cy.contains('a.dropdown-item', 'Male Guide'),
        clothing: () => cy.findByRole('link', { name: /clothing/i }),
        aboutUs: () => cy.get('.nav-item a[href="/about-us"]'),
        myAccount: () => cy.get('.nav-item a[href="/my-account"]'),
        reviews: () => cy.get('.nav-item a[href="/reviews"]'),
    },
    hamburgerIcon: () => cy.get('[aria-label="Toggle navigation"]'),
    mobileMenuIcon: () => cy.contains('i.material-icons', 'menu'),
    headerIcons: {
        socialFacebook: () => cy.findByRole('link', { name: /facebook/i }),
        socialInstagram: () => cy.findByRole('link', { name: /instagram/i }),
        contactUs: () => cy.get('.header__contact a[href="/contact-us"]'),
        sculptNation: () => cy.get('.navbar-brand'),
        cartItems: () => cy.get('a[href="/cart"]'),
    },
    sitemapList: {
        home: () => cy.contains('div.footer-sitemap li a', 'Home'),
        shop: () => cy.findByRole('link', { name: /shop/i }),
        aboutUs: () => cy.contains('div.footer-sitemap li a', 'About Us'),
        topSellingItems: () =>
            cy.findByRole('link', { name: /top selling items/i }),
        privacyPolicy: () =>
            cy.findByRole('link', { name: /privacy and cookie policy/i }),
        shippingAndReturns: () =>
            cy.findByRole('link', { name: /shipping and returns/i }),
        ourPress: () => cy.findByRole('link', { name: /our press/i }),
        contactUs: () => cy.contains('div.footer-sitemap li a', 'Contact Us'),
        reviews: () => cy.contains('div.footer-sitemap li a', 'Reviews'),
    },
    footerLinks: {
        termsAndCondition: () =>
            cy.findByRole('link', { name: /terms and conditions/i }),
        privacyPolicy: () =>
            cy.get('.footer div.mb-4 a[href*="privacy-policy"]'),
        accessibility: () => cy.findByRole('link', { name: /accessibility/i }),
        testimonialSupport: () =>
            cy.findByRole('link', { name: /testimonial support/i }),
        dnsPersonalInformation: () =>
            cy.findByRole('link', {
                name: /do not sell my personal information/i,
            }),
    },
    cookieButton: () => cy.get('button.Cookie__button'),
};
export default consumerHeaderFooterPageLocators;
