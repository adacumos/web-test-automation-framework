import {
    consumerHomepageLocators,
    consumerSupplementsPageLocators,
    femaleSupplementGuidePageLocators,
    maleSupplementGuidePageLocators,
    consumerLoginPageLocators,
    consumerReviewsPageLocators,
    consumerContactUsPageLocators,
    consumerPrivacyPolicyPageLocators,
    shippingAndReturnsPageLocators,
    consumerAccessibilityPageLocators,
    consumerTsAndCsPageLocators,
    consumerDNSPersonalInformation,
    consumerTestimonialSupport,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validatePageSection: (pageName: string) => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Landing pages
 * @param pageName refers to the LE landing page
 * cy.validatePageSection('Supplements')
 */
export const validatePageSection = (
    pageName: string
): Cypress.Chainable<any> => {
    const homePageArray = Object.values(consumerHomepageLocators.pageSections);
    const supplementsPageArray = Object.values(
        consumerSupplementsPageLocators.pageSections
    );
    const femaleSupplementPageArray = Object.values(
        femaleSupplementGuidePageLocators.pageSections
    );
    const maleSupplementPageArray = Object.values(
        maleSupplementGuidePageLocators.pageSections
    );
    const aboutUsPageArray = Object.values(consumerHomepageLocators.aboutUs);
    const myAccountPageArray = Object.values(
        consumerLoginPageLocators.loginForm
    );
    const reviewsPageArray = Object.values(
        consumerReviewsPageLocators.reviewsPageSections
    );
    const zeroCartPageArray = Object.values(
        consumerHomepageLocators.zeroCartItems
    );
    const contactUsPageArray = Object.values(
        consumerContactUsPageLocators.contactUsPageSections
    );
    const privacyPolicyPageArray = Object.values(
        consumerPrivacyPolicyPageLocators.pageSections
    );
    const shippingAndReturnsPageArray = Object.values(
        shippingAndReturnsPageLocators.pageSections
    );
    const ourPressPageArray = Object.values(consumerHomepageLocators.ourPress);
    const termsAndConditionPageArray = Object.values(
        consumerTsAndCsPageLocators.pageSections
    );
    const accessibilityPageArray = Object.values(
        consumerAccessibilityPageLocators.pageSections
    );
    const dnsPersonalInformationPageArray = Object.values(
        consumerDNSPersonalInformation.pageSections
    );
    const testimonialSupportPageArray = Object.values(
        consumerTestimonialSupport.pageSections
    );

    let urlReference = '';

    cy.logStep(`Verify ${pageName} page sections are loaded`);
    switch (pageName) {
        case 'Home':
            urlReference = 'sculptnation.com';
            homePageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        case 'Supplements':
        case 'Shop':
        case 'Top-Selling-Items':
            urlReference = 'Products';
            supplementsPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        case 'Supplement-Guide-Female':
            urlReference = 'Supplement-Guide-For-Women';
            femaleSupplementPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        case 'Supplement-Guide-Male':
            urlReference = 'Supplement-Guide-For-Men';
            maleSupplementPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        case 'Clothing':
            urlReference = 'vshredthreads.com';
            break;
        case 'About-Us':
            urlReference = 'About-Us';
            aboutUsPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        case 'My-Account':
            urlReference = 'Login';
            myAccountPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        case 'Reviews':
            urlReference = 'Reviews';
            reviewsPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        case 'Cart':
            urlReference = 'Cart';
            zeroCartPageArray.forEach((pageSections) => {
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        case 'Contact-Us':
            urlReference = 'Contact-Us';
            contactUsPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        case 'Privacy-Policy':
            urlReference = 'privacy-policy';
            privacyPolicyPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            consumerPrivacyPolicyPageLocators
                .address()
                .scrollIntoView()
                .contains('PO Box 1563');
            break;
        case 'Shipping-and-Returns':
            urlReference = 'shipping-and-returns';
            shippingAndReturnsPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        case 'Our-Press':
            urlReference = 'our-press';
            ourPressPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        case 'Terms-and-Conditions':
            urlReference = 'terms-and-conditions';
            termsAndConditionPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            consumerTsAndCsPageLocators
                .address()
                .contains('PO Box 1563 Liberty Hill, TX 78642');
            break;
        case 'Accessibility':
            urlReference = 'accessibility';
            accessibilityPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        case 'Testimonial-Support':
            urlReference = 'testimonial-support';
            testimonialSupportPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        case 'DNS-Personal-Information':
            urlReference = 'personal-information';
            dnsPersonalInformationPageArray.forEach((pageSections) => {
                cy.log('Verifying page section visibility');
                pageSections().scrollIntoView().should('be.visible');
            });
            break;
        default:
            throw new Error('Selected LE page is not yet active');
    }

    return cy.url().should('include', urlReference.toLowerCase());
};
