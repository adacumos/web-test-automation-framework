/// <reference types="cypress" />

import {
    Given,
    When,
    Then,
    Step,
} from '@badeball/cypress-cucumber-preprocessor';
import { validatePageSection } from 'LaravelEcommerce/SculptNation/cypress/commands';
import {
    consumerHeaderFooterPageLocators,
    consumerLandingPageLocators,
    consumerSurveyPageLocators,
    videoControlsLocators,
    vsNewSurveyPageLocators,
    vsSurveyPageLocators,
} from '../../locator_libraries';
import { dynamicTestData } from '../../testData';
import customCoachingPlansPageLocators from '../../locator_libraries/consumerPages/customCoachingPlansPageLocators';
import vsSurveyOrderFormPageLocators from '../../locator_libraries/consumerPages/vsSurveyOrderFormPageLocators';

Given('The user navigates to the SculptNation product landing page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(
            `Navigate to SculptNation landing page for ${staticTestData.productLandingPage.productName}`
        );

        cy.visit(
            `/products/${staticTestData.productLandingPage.productUrl}?qa_test=VSQAT`
        );
    });
});

Given('The user starts on sculpt nation {string} page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.visit(`${staticTestData.LandingPage.fullurl}`);
    });
});

Given('The user navigates to the SculptNation homepage', () => {
    cy.visit(`/`, { failOnStatusCode: false });

    cy.url().then((currentUrl) => {
        const isProdServer =
            currentUrl.includes(`https://sculptnation.com`) ||
            currentUrl.includes(`https://le-uat.sculptnation.com`) ||
            currentUrl.includes(`https://uat.sculptnation.com`);

        if (isProdServer) {
            cy.visit(`${currentUrl}?qa_test=VSQAT`);
        }
    });
});

When(
    'The user browses to {string} section of the landing page',
    (sectionText: string) => {
        cy.logStep(`Navigate to ${sectionText} section`);
        consumerLandingPageLocators.pageText
            .text(sectionText)
            .scrollIntoView()
            .should('be.visible');
    }
);

Then('The validates the data on the product landing page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(
            `Verify the data on the product landing page for ${staticTestData.productLandingPage.productName}`
        );
        consumerLandingPageLocators.productPage.buyNowButton().click();
        consumerLandingPageLocators.productPage
            .bottlePrices(0)
            .should(
                'have.text',
                staticTestData.productLandingPage.oneBottlePrice
            );
        consumerLandingPageLocators.productPage
            .bottlePrices(1)
            .should(
                'have.text',
                staticTestData.productLandingPage.sixBottlePrice
            );
        consumerLandingPageLocators.productPage
            .bottlePrices(2)
            .should(
                'have.text',
                staticTestData.productLandingPage.threeBottlePrice
            );
        consumerLandingPageLocators.productPage
            .autoRefillCheckbox()
            .should('have.css', 'color', 'rgb(255, 0, 0)');
    });
});

Then(
    'The user clicks the Subscribe Now button under the One Bottle option and checks that the Cart data is correct',
    () => {
        cy.logStep('Click Subscribe Now under one bottle option');
        consumerLandingPageLocators.productPage.subscribeNowButton().click();

        cy.logStep('Verify the cart data');
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { productName, subtotal, quantity } =
                staticTestData.cartDetails;
            consumerLandingPageLocators.cartPage
                .productName()
                .invoke('text')
                .then((name) => {
                    expect(name.trim()).to.eq(`${productName}`);
                });
            consumerLandingPageLocators.cartPage
                .productPricePerItem()
                .should('have.text', `${subtotal}`);
            consumerLandingPageLocators.cartPage
                .productQuantity()
                .find(':selected')
                .then((qty) => {
                    expect(qty.text()).to.eq(`${quantity}`);
                });
            consumerLandingPageLocators.cartPage
                .subtotal()
                .should('have.text', `${subtotal}`);
            consumerLandingPageLocators.cartPage
                .cartTotalPrice()
                .should('have.text', `${subtotal}`);
        });
    }
);

Then(
    'The user clicks the Subscribe Now button under the One Bottle option on the {string} upsell page',
    (pageNumber: string) => {
        cy.logStep(
            `Click Subscribe Now under one bottle option on the ${pageNumber}`
        );

        cy.skipVideo();

        consumerLandingPageLocators.productPage.subscribeNowButton().click();

        consumerLandingPageLocators.loader().should('be.visible');

        consumerLandingPageLocators.loader().should('not.exist');
    }
);

Then('The user dismisses the {string} offer', (productName: string) => {
    cy.logStep(`Decline the ${productName} offer`);
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.skipVideo();
    consumerLandingPageLocators.productPage.dismissOfferButton().click();

    cy.logStep('Wait for the products to be processed');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000); // wait for all products selected so far to be processed by the backend.
});

Then(
    'The user dismisses the {string} offer with link',
    (productName: string) => {
        cy.logStep(`Decline the ${productName} offer`);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000);
        cy.skipVideo();
        consumerLandingPageLocators.productPage.declineLink().click();

        cy.logStep('Wait for the products to be processed');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(10000); // wait for all products selected so far to be processed by the backend.
    }
);

When('The user clicks the Proceed to Checkout button', () => {
    consumerLandingPageLocators.cartPage.proceedToCheckoutButton().click();
    cy.url().should('contain', 'checkout');
});

Then('The user verifies an alert message is displayed', () => {
    cy.url().then((checkoutUrl: any) => {
        if (checkoutUrl.includes(`/checkout-paypal`)) {
            consumerLandingPageLocators.checkoutPayPal
                .blackListContent()
                .should('be.visible');
        } else {
            consumerLandingPageLocators.checkoutPage.billingDetails
                .alertMessage()
                .should('be.visible');
        }
    });
});

Then(
    'The user fills in the credit card details on the Checkout page and places the order',
    () => {
        cy.intercept('POST', '/api/cart/pay').as('orderPlaced');
        cy.logStep('Fill in payment information');
        consumerLandingPageLocators.checkoutPage.paymentInformation
            .creditCardNumber()
            .type(Cypress.env('CREDIT_CARD_NUMBER'));
        consumerLandingPageLocators.checkoutPage.paymentInformation
            .expirationMonth()
            .type(Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'));
        consumerLandingPageLocators.checkoutPage.paymentInformation
            .expirationYear()
            .type(Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'));
        consumerLandingPageLocators.checkoutPage.paymentInformation
            .securtyCode()
            .type(Cypress.env('CREDIT_CARD_CVV'));
        consumerLandingPageLocators.checkoutPage.paymentInformation
            .placeOrderButton()
            .click();

        cy.wait('@orderPlaced');
    }
);

Then(
    'The user fills in the fields on the Checkout page and places the order',
    () => {
        dynamicTestData.userPassword = Math.floor(
            Math.random() * 9000000000 + 1000000000
        ).toString();

        cy.intercept('POST', '/api/cart/pay').as('orderPlaced');

        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep('Fill in billing details');

            cy.url().then((checkoutPageUrl: any) => {
                const isUatProdServer = checkoutPageUrl.includes(
                    `https://le-uat.vshred.com`
                );
                const isProdServer =
                    checkoutPageUrl.includes(`https://le-vshred.com`) ||
                    checkoutPageUrl.includes(`https://vshred.com`);
                const isSNProdServer =
                    checkoutPageUrl.includes(`https://sculptnation.com`) ||
                    checkoutPageUrl.includes(`https://le-uat.sculptnation.com`);

                if (isUatProdServer) {
                    cy.visit(`${checkoutPageUrl}&qa_test=VSQAT`);
                }
                if (isProdServer) {
                    cy.visit(`${checkoutPageUrl}&qa_test=VSQAT`);
                }
                if (isSNProdServer) {
                    cy.visit(`${checkoutPageUrl}?qa_test=VSQAT`);
                }

                cy.generateRandomTestEmail().then((randomEmail) => {
                    dynamicTestData.userEmail = randomEmail;

                    consumerLandingPageLocators.checkoutPage.billingDetails
                        .emailAddress()
                        .type(dynamicTestData.userEmail);
                });
                consumerLandingPageLocators.checkoutPage.billingDetails
                    .firstName()
                    .type(staticTestData.firstName);
                consumerLandingPageLocators.checkoutPage.billingDetails
                    .lastName()
                    .type(staticTestData.lastName);
                consumerLandingPageLocators.checkoutPage.billingDetails
                    .country()
                    .select(staticTestData.country);
                consumerLandingPageLocators.checkoutPage.billingDetails
                    .streetAddress()
                    .type(staticTestData.streetAddress);
                consumerLandingPageLocators.checkoutPage.billingDetails
                    .city()
                    .type(staticTestData.city);
                consumerLandingPageLocators.checkoutPage.billingDetails
                    .state()
                    .select(staticTestData.state);
                consumerLandingPageLocators.checkoutPage.billingDetails
                    .postCode()
                    .type(staticTestData.postcode);
                consumerLandingPageLocators.checkoutPage.billingDetails
                    .phone()
                    .type(staticTestData.phone);
                consumerLandingPageLocators.checkoutPage.billingDetails
                    .password()
                    .type(dynamicTestData.userPassword, {
                        log: false,
                    });
                if (staticTestData.country === 'CAN') {
                    // eslint-disable-next-line cypress/no-unnecessary-waiting
                    cy.wait(30000);
                    consumerLandingPageLocators.checkoutPage.billingDetails
                        .shipping()
                        .click();
                }
                cy.logStep('Fill in payment information');
                cy.get('body').then((paymentInfo: any) => {
                    if (
                        paymentInfo.find('#adyen-checkout-container').length > 0
                    ) {
                        cy.logStep('Fill out Adyen Payment Container');
                        consumerLandingPageLocators.adyenCheckout.paymentInformation
                            .creditCardNumber()
                            .type(Cypress.env('CREDIT_CARD_NUMBER'));
                        consumerLandingPageLocators.adyenCheckout.paymentInformation
                            .expirationDate()
                            .type(
                                `${Cypress.env('CREDIT_CARD_EXPIRATION_MONTH')}
                                ${String(
                                    Cypress.env('CREDIT_CARD_EXPIRATION_YEAR')
                                ).slice(-2)}`
                            );
                        consumerLandingPageLocators.adyenCheckout.paymentInformation
                            .securityCode()
                            .type(Cypress.env('CREDIT_CARD_CVV'));
                        // eslint-disable-next-line cypress/no-unnecessary-waiting
                        cy.wait(1000); // expected wait time in loading order details
                    } else {
                        cy.logStep('Fill out Braintree Payment Container');
                        consumerLandingPageLocators.checkoutPage.paymentInformation
                            .creditCardNumber()
                            .type(Cypress.env('CREDIT_CARD_NUMBER'));
                        consumerLandingPageLocators.checkoutPage.paymentInformation
                            .expirationMonth()
                            .type(Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'));
                        consumerLandingPageLocators.checkoutPage.paymentInformation
                            .expirationYear()
                            .type(Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'));
                        consumerLandingPageLocators.checkoutPage.paymentInformation
                            .securtyCode()
                            .type(Cypress.env('CREDIT_CARD_CVV'));
                    }
                });
                consumerLandingPageLocators.checkoutPage.paymentInformation
                    .placeOrderButton()
                    .click();
                cy.wait('@orderPlaced');
            });
        });
    }
);

Then(
    'The user verifies they are on the checkout page with {string} in the url',
    (url: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            if (url === '/sn-checkout') {
                cy.url().should('contain', '/sn-checkout');
                consumerLandingPageLocators.orderConformation
                    .productTitle()
                    .should(
                        'contain',
                        staticTestData.productLandingPage.productTitle
                    );
                consumerLandingPageLocators.orderConformation
                    .price()
                    .should(
                        'contain',
                        staticTestData.productLandingPage.oneBottlePrice
                    );
            }
            if (url === '/cart') {
                cy.url().should('contain', '/cart');
                consumerLandingPageLocators.orderConformation
                    .cartProductTitle()
                    .should('be.visible');
                consumerLandingPageLocators.orderConformation
                    .cartProductTitle()
                    .should(
                        'contain',
                        staticTestData.productLandingPage.productName
                    );
                consumerLandingPageLocators.orderConformation
                    .cartPrice()
                    .should(
                        'contain',
                        staticTestData.productLandingPage.oneBottlePrice
                    );
            }
        });
    }
);

When(
    'The user navigates to {string} section of the landing page',
    (sectionImage: string) => {
        cy.logStep(`Navigate to ${sectionImage} page section`);
        consumerLandingPageLocators.pageImage
            .image(sectionImage)
            .eq(0)
            .scrollIntoView()
            .should('be.visible');
    }
);

Then('The user verifies that {string} text exists', (pageText: string) => {
    consumerLandingPageLocators.pageText
        .text(pageText)
        .scrollIntoView()
        .should('be.visible');
});

Then(
    'The user verifies that {string} supplement exists',
    (productName: string) => {
        consumerLandingPageLocators.pageText
            .product(productName)
            .invoke('text')
            .then((bottleName) => {
                expect(bottleName.trim()).to.eq(productName);
            });
    }
);

Then('The user verifies that {string} image exists', (imageName: string) => {
    consumerLandingPageLocators.pageImage
        .image(imageName.toLowerCase())
        .eq(0)
        .scrollIntoView()
        .should('be.visible');
});

Then(
    'The user clicks {string} bottle image {int} on the landing page',
    (imageName: string, imageNumber: number) => {
        cy.logStep(`Click ${imageName} supplement bottle`);
        consumerLandingPageLocators.pageImage
            .image(imageName.toLowerCase())
            .eq(imageNumber - 1)
            .click();
    }
);

Then('The user clicks Buy Now button from the product page', () => {
    cy.logStep('Click Buy Now button from the product page');
    consumerLandingPageLocators.productPage.buyNowButton().click();
});

Then(
    'The user selects One-time delivery price check box under the One Bottle option',
    () => {
        cy.logStep(
            'Select one-time delivery price check box under one bottle option'
        );
        consumerLandingPageLocators.productPage
            .oneTimeDeliveryCheckbox()
            .click();
    }
);

Then(
    'The user clicks the {string} button on the {string} upsell page',
    (buttonAction: string, pageNumber: string) => {
        cy.logStep(
            `Click ${buttonAction} under one bottle option on the ${pageNumber} upsell page`
        );

        cy.skipVideo();
        if (buttonAction === 'Subscribe Now') {
            consumerLandingPageLocators.productPage
                .subscribeOfferButton()
                .click();
        } else if (buttonAction === 'Declines') {
            consumerLandingPageLocators.productPage
                .declineLink()
                .scrollIntoView()
                .should('be.visible')
                .click();
        } else {
            consumerLandingPageLocators.productPage
                .upgradeOrderButton()
                .click();
        }

        consumerLandingPageLocators.loader().should('be.visible');

        consumerLandingPageLocators.loader().should('not.exist');
    }
);

Then(
    /^The user selects One-time delivery price check box and clicks (Add To Cart|Speed Up My Metabolism) on the "(first|second|third|fourth)" upsell page$/,
    (buttonName: string, pageNumber: string) => {
        cy.logStep(
            `Select One-time delivery price and click ${buttonName} on the ${pageNumber} upsell page`
        );
        cy.skipVideo();
        consumerLandingPageLocators.productPage
            .oneTimeDeliveryCheckbox()
            .click();
        if (buttonName === 'Add To Cart') {
            consumerLandingPageLocators.productPage
                .addToCartOneBottleButton()
                .click();
        } else {
            consumerLandingPageLocators.productPage
                .speedUpMyMetabolismOneBottleButton()
                .click();
        }
        consumerLandingPageLocators.loader().should('be.visible');
        consumerLandingPageLocators.loader().should('not.exist');
    }
);

Then(
    'The user clicks the {string} button under the {string} option on the {string} upsell page',
    (buttonName: string, orderOption: string, pageNumber: string) => {
        cy.logStep(
            `Click ${buttonName} under ${orderOption} option on ${pageNumber} upsell page`
        );
        cy.skipVideo();
        switch (buttonName) {
            case 'Add To Cart':
                if (orderOption === 'Six Bottles') {
                    consumerLandingPageLocators.productPage
                        .addToCartSixBottleButton()
                        .click();
                } else {
                    consumerLandingPageLocators.productPage
                        .addToCartThreeBottleButton()
                        .click();
                }
                break;
            case 'Speed Up My Metabolism':
                if (orderOption === 'Six Bottles') {
                    consumerLandingPageLocators.productPage
                        .speedUpMyMetabolismSixBottleButton()
                        .click();
                }
                if (orderOption === 'One Bottle') {
                    consumerLandingPageLocators.productPage
                        .speedUpMyMetabolismSixBottleButton()
                        .click();
                } else {
                    consumerLandingPageLocators.productPage
                        .speedUpMyMetabolismThreeBottleButton()
                        .click();
                }
                break;
            default:
                Error(`Invalid button ${buttonName}`);
        }

        consumerLandingPageLocators.loader().should('be.visible');
        consumerLandingPageLocators.loader().should('not.exist');
    }
);

Then(
    'The user selects the Subscribe Now button under the One Bottle option and checks that the Cart data is correct',
    () => {
        cy.logStep('Click Subscribe Now under one bottle option');
        consumerLandingPageLocators.productPage.subscribeNowButton().click();

        cy.logStep('Verify the cart data');
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { productName, subtotal, quantity } =
                staticTestData.subscription.cartDetails;
            consumerLandingPageLocators.cartPage
                .productName()
                .invoke('text')
                .then((name) => {
                    expect(name.trim()).to.eq(`${productName}`);
                });
            consumerLandingPageLocators.cartPage
                .productPricePerItem()
                .should('have.text', `${subtotal}`);
            consumerLandingPageLocators.cartPage
                .productQuantity()
                .find(':selected')
                .then((qty) => {
                    expect(qty.text()).to.eq(`${quantity}`);
                });
            consumerLandingPageLocators.cartPage
                .subtotal()
                .should('have.text', `${subtotal}`);
            consumerLandingPageLocators.cartPage
                .cartTotalPrice()
                .should('have.text', `${subtotal}`);
        });
    }
);

Then(
    'The user clicks the {string} button under the {string} option and checks that the Cart data is correct',
    (buttonName: string, orderOption: string) => {
        cy.logStep(
            `Click ${buttonName} under ${orderOption} option and verify the cart data`
        );

        cy.checkCartOrders(buttonName, orderOption);
    }
);

Then('The user clicks the arrow right slider button', () => {
    consumerLandingPageLocators.landingPageButtons.arrowRightButton().click();
});

Then('The user clicks the arrow left slider button', () => {
    consumerLandingPageLocators.landingPageButtons.arrowLeftButton().click();
});

Then(
    'The user selects a flavor on the {string} upsell page',
    (pageNumber: string) => {
        cy.logStep(`Select a flavor on the ${pageNumber} upsell page`);
        cy.skipVideo();
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.productPage
                .selectFlavorDropdown()
                .eq(0)
                .scrollIntoView()
                .select(staticTestData.productLandingPage.productFlavor);
        });
    }
);
When(
    /^The user clicks the "(Home|Supplements|Supplement-Guide-Female|Supplement-Guide-Male|Clothing|About-Us|My-Account|Reviews)" header menu$/,
    (headerMenu: string) => {
        switch (headerMenu) {
            case 'Home':
                consumerHeaderFooterPageLocators.pageHeaders.home().click();
                break;
            case 'Supplements':
                consumerHeaderFooterPageLocators.pageHeaders
                    .supplements()
                    .click();
                break;
            case 'Supplement-Guide-Female':
                consumerHeaderFooterPageLocators.pageHeaders
                    .supplementGuide()
                    .click();
                consumerHeaderFooterPageLocators.pageHeaders
                    .femaleGuide()
                    .click();
                break;
            case 'Supplement-Guide-Male':
                consumerHeaderFooterPageLocators.pageHeaders
                    .supplementGuide()
                    .click();
                consumerHeaderFooterPageLocators.pageHeaders
                    .maleGuide()
                    .click();
                break;
            case 'Clothing':
                consumerHeaderFooterPageLocators.pageHeaders.clothing().click();
                break;
            case 'About-Us':
                consumerHeaderFooterPageLocators.pageHeaders.aboutUs().click();
                break;
            case 'My-Account':
                consumerHeaderFooterPageLocators.pageHeaders
                    .myAccount()
                    .click();
                break;
            case 'Reviews':
                consumerHeaderFooterPageLocators.pageHeaders.reviews().click();
                break;
            default:
                throw new Error('Invalid Header Menu selected');
        }
    }
);

When(
    /^The user clicks the "(SculptNation|Facebook|Instagram|Contact-Us|Cart)" header icon$/,
    (iconMenu) => {
        switch (iconMenu) {
            case 'SculptNation':
                consumerHeaderFooterPageLocators.headerIcons
                    .sculptNation()
                    .click();
                break;
            case 'Facebook':
                consumerHeaderFooterPageLocators.headerIcons
                    .socialFacebook()
                    .click();
                cy.url().should('contain', 'facebook.com/sculptnation/');
                cy.go('back');
                break;
            case 'Instagram':
                consumerHeaderFooterPageLocators.headerIcons
                    .socialInstagram()
                    .click();
                cy.url().should('contain', 'sculptnation');
                cy.go('back');
                break;
            case 'Contact-Us':
                consumerHeaderFooterPageLocators.headerIcons
                    .contactUs()
                    .click();
                break;
            case 'Cart':
                consumerHeaderFooterPageLocators.headerIcons
                    .cartItems()
                    .click();
                cy.url().should('contain', '/cart');
                break;
            default:
                throw new Error('Invalid Header Icon selected');
        }
    }
);

Then(
    /^The "(Home|Supplements|Supplement-Guide-Female|Supplement-Guide-Male|Clothing|About-Us|My-Account|Reviews|Cart|Contact-Us|Shop|Top-Selling-Items|Privacy-Policy|Shipping-and-Returns|Our-Press|Terms-and-Conditions|Accessibility|Testimonial-Support|DNS-Personal-Information)" page is loaded with the expected page sections$/,
    (pageName: string) => {
        validatePageSection(pageName);
    }
);

When(
    /^The user navigates through Sitemap - "(Home|Shop|About-Us|Top-Selling-Items|Privacy-Policy|Shipping-and-Returns|Our-Press|Contact-Us|Reviews)" menu item$/,
    (siteList: string) => {
        switch (siteList) {
            case 'Home':
                consumerHeaderFooterPageLocators.sitemapList
                    .home()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
                break;
            case 'Shop':
                consumerHeaderFooterPageLocators.sitemapList
                    .shop()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
                break;
            case 'About-Us':
                consumerHeaderFooterPageLocators.sitemapList
                    .aboutUs()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
                break;
            case 'Top-Selling-Items':
                consumerHeaderFooterPageLocators.sitemapList
                    .topSellingItems()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
                break;
            case 'Privacy-Policy':
                consumerHeaderFooterPageLocators.sitemapList
                    .privacyPolicy()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
                break;
            case 'Shipping-and-Returns':
                consumerHeaderFooterPageLocators.sitemapList
                    .shippingAndReturns()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
                break;
            case 'Our-Press':
                consumerHeaderFooterPageLocators.sitemapList
                    .ourPress()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
                break;
            case 'Contact-Us':
                consumerHeaderFooterPageLocators.sitemapList
                    .contactUs()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
                break;
            case 'Reviews':
                consumerHeaderFooterPageLocators.sitemapList
                    .reviews()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
                break;
            default:
                throw new Error('Invalid Sitemap list selected');
        }
    }
);

When(
    /^The user clicks the "(Terms-and-Conditions|Privacy-Policy|Accessibility|Testimonial-Support|DNS-Personal-Information)" footer link$/,
    (footerLink) => {
        cy.get('body').then(($body) => {
            if ($body.text().includes('Do not sell my personal information')) {
                consumerHeaderFooterPageLocators.cookieButton().click();
            }
            switch (footerLink) {
                case 'Terms-and-Conditions':
                    consumerHeaderFooterPageLocators.footerLinks
                        .termsAndCondition()
                        .scrollIntoView()
                        .should('be.visible')
                        .click();
                    break;
                case 'Privacy-Policy':
                    consumerHeaderFooterPageLocators.footerLinks
                        .privacyPolicy()
                        .scrollIntoView()
                        .should('be.visible')
                        .click();
                    break;
                case 'Accessibility':
                    consumerHeaderFooterPageLocators.footerLinks
                        .accessibility()
                        .scrollIntoView()
                        .should('be.visible')
                        .click();
                    break;
                case 'Testimonial-Support':
                    consumerHeaderFooterPageLocators.footerLinks
                        .testimonialSupport()
                        .scrollIntoView()
                        .should('be.visible')
                        .click();
                    break;
                case 'DNS-Personal-Information':
                    consumerHeaderFooterPageLocators.footerLinks
                        .dnsPersonalInformation()
                        .scrollIntoView()
                        .should('be.visible')
                        .click();
                    break;
                default:
                    throw new Error('Invalid Footer Link selected');
            }
        });
    }
);

When('The user Continues Shopping and adds another product', () => {
    consumerLandingPageLocators.cartPage.continueShoppingButton().click();
});

When(
    'The user adds {string} of product {string} to cart',
    (bottleCount: string, productTitle: any) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { productName } = staticTestData[productTitle];
            const { productUrl } = staticTestData[productTitle];
            const { productUnitPrice } = staticTestData[productTitle];
            const bundleBottlePrice =
                staticTestData[productTitle].bundlePrice[
                    bottleCount.toLowerCase()
                ];

            cy.logStep(`Navigate to ${productName} products page`);
            cy.visit(`/products/${productUrl}`);
            consumerLandingPageLocators.productPage
                .productName()
                .contains(new RegExp(`${productName}`), { matchCase: false })
                .should('be.visible');
            consumerLandingPageLocators.productPage
                .discountedPrice()
                .should('contain.text', `${productUnitPrice}`);
            consumerLandingPageLocators.productPage.buyNowButton().click();

            // adding product to cart
            cy.addProductByBottleToCart(bottleCount);

            consumerLandingPageLocators.cartPage.productName().then((cart) => {
                cy.wrap(cart)
                    .contains(new RegExp(`${productName}`), {
                        matchCase: false,
                    })
                    .next()
                    .should('contain', bundleBottlePrice);
            });
        });
    }
);

When(
    /^The user applies a "(valid|invalid)" coupon code$/,
    (codeType: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { applyDiscount } = staticTestData.cartTotals;
            consumerLandingPageLocators.cartPage
                .couponCode()
                .clear()
                .type(applyDiscount);
            consumerLandingPageLocators.cartPage.applyCouponButton().click();

            if (codeType === 'valid') {
                consumerLandingPageLocators.cartPage
                    .successDiscountText()
                    .should('be.visible');
            } else {
                consumerLandingPageLocators.cartPage
                    .invalidDiscountText()
                    .should('be.visible');
            }
        });
    }
);

Then('The cart total amount is updated', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        consumerLandingPageLocators.cartPage
            .cartTotalLabel()
            .next()
            .should('contain', staticTestData.cartTotals.total);
    });
});

Then('The user selects the one bottle Add To Cart button', () => {
    cy.logStep(`Click the add to cart button`);
    consumerLandingPageLocators.productPage.addToCartOneBottleButton().click();
});

Then(
    /^The user clicks (Add To Cart|Upgrade My Order) on the upsell page$/,
    (button: string) => {
        cy.logStep(`Click ${button} on the upsell page`);
        cy.skipVideo();
        if (button === 'Add To Cart') {
            consumerLandingPageLocators.productPage.addToCartButton().click();
        } else {
            consumerLandingPageLocators.productPage
                .upgradeOrderButton()
                .click();
        }
        consumerLandingPageLocators.loader().should('be.visible');
        consumerLandingPageLocators.loader().should('not.exist');
    }
);

Then(
    /^The user clicks the (Add To Cart|Speed Up My Metabolism) button under the (Six Bottles|Three Bottles) option on the (first|second|third|fourth) upsell page$/,
    (buttonName: string, orderOption: string, pageNumber: string) => {
        cy.logStep(
            `Click ${buttonName} under ${orderOption} option on ${pageNumber} upsell page`
        );
        cy.skipVideo();
        switch (buttonName) {
            case 'Add To Cart':
                if (orderOption === 'Six Bottles') {
                    consumerLandingPageLocators.productPage
                        .addToCartSixBottleButton()
                        .click();
                } else {
                    consumerLandingPageLocators.productPage
                        .addToCartThreeBottleButton()
                        .click();
                }
                break;
            case 'Speed Up My Metabolism':
                if (orderOption === 'Six Bottles') {
                    consumerLandingPageLocators.productPage
                        .speedUpMyMetabolismSixBottleButton()
                        .click();
                } else {
                    consumerLandingPageLocators.productPage
                        .speedUpMyMetabolismThreeBottleButton()
                        .click();
                }
                break;
            default:
                Error(`Invalid button ${buttonName}`);
        }

        consumerLandingPageLocators.loader().should('be.visible');
        consumerLandingPageLocators.loader().should('not.exist');
    }
);

Then('The user clicks {string} button', (buttonText: string) => {
    cy.logStep(`Clicks the ${buttonText} button`);
    cy.intercept('GET', '/checkout-vs/**').as('waitForCheckout');
    cy.interceptPixels('addtocart');
    cy.reload();

    cy.skipVideo();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000); // expected delays in updating the order summary page
    consumerLandingPageLocators.productPage.addToOrderButton().then(($el) => {
        if ($el.is(':visible')) {
            consumerLandingPageLocators.productPage
                .addToOrderButton()
                .invoke('css', 'display', 'block')
                .scrollIntoView()
                .should('be.visible')
                .click({ force: true });
        } else {
            consumerLandingPageLocators.productPage
                .claimOfferNowButton()
                .first()
                .click();
        }
    });
});

Then('The user clicks Claim Now', () => {
    cy.intercept('GET', '/checkout-vs/**').as('waitForCheckout');
    cy.interceptPixels('addtocart');
    cy.reload();

    cy.skipVideo();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000); // expected delays in updating the order summary page
    consumerLandingPageLocators.productPage
        .claimOfferNowButtonOnFemaleFl()
        .first()
        .click();
});

Then('The user clicks 67 button', (buttonText: string) => {
    cy.logStep(`Clicks the ${buttonText} button`);
    cy.intercept('GET', '/checkout-vs/**').as('waitForCheckout');
    cy.interceptPixels('addtocart');
    cy.reload();

    cy.skipVideo();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000); // expected delays in updating the order summary page
    consumerLandingPageLocators.productPage
        .everythingForJust67Button()
        .then(($el) => {
            if ($el.is(':visible')) {
                consumerLandingPageLocators.productPage
                    .everythingForJust67Button()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
            } else {
                consumerLandingPageLocators.productPage
                    .claimOfferNowButton()
                    .first()
                    .click();
            }
        });
});

Then('The user clicks 87 button', (buttonText: string) => {
    cy.logStep(`Clicks the ${buttonText} button`);
    cy.intercept('GET', '/checkout-vs/**').as('waitForCheckout');
    cy.interceptPixels('addtocart');
    cy.reload();

    cy.skipVideo();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000); // expected delays in updating the order summary page
    consumerLandingPageLocators.productPage
        .everythingForJust87Button()
        .then(($el) => {
            if ($el.is(':visible')) {
                consumerLandingPageLocators.productPage
                    .everythingForJust87Button()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
            } else {
                consumerLandingPageLocators.productPage
                    .claimOfferNowButton()
                    .first()
                    .click();
            }
        });
});

Then('The user clicks 57 button', (buttonText: string) => {
    cy.logStep(`Clicks the ${buttonText} button`);
    cy.intercept('GET', '/checkout-vs/**').as('waitForCheckout');
    cy.interceptPixels('addtocart');
    cy.reload();

    cy.skipVideo();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000); // expected delays in updating the order summary page
    consumerLandingPageLocators.productPage
        .everythingForJust57Button()
        .then(($el) => {
            if ($el.is(':visible')) {
                consumerLandingPageLocators.productPage
                    .everythingForJust57Button()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
            } else {
                consumerLandingPageLocators.productPage
                    .claimOfferNowButton()
                    .first()
                    .click();
            }
        });
});

Then(
    'The user clicks the {string} Buy Now button on the page',
    (buttonText: string) => {
        cy.logStep(`Clicks the ${buttonText} button`);
        cy.intercept('GET', '/checkout-vs/**').as('waitForCheckout');
        cy.interceptPixels('addtocart');

        switch (buttonText) {
            case '1':
                consumerLandingPageLocators.productPage
                    .addToOrderButton()
                    .then(($el) => {
                        if ($el.is(':visible')) {
                            consumerLandingPageLocators.productPage
                                .addToOrderButton()
                                .eq(0)
                                .scrollIntoView()
                                .should('be.visible')
                                .click();
                        } else {
                            consumerLandingPageLocators.productPage
                                .claimOfferNowButton()
                                .eq(0)
                                .first()
                                .click();
                        }
                    });

                break;
            case '2':
                consumerLandingPageLocators.productPage
                    .addToOrderButton()
                    .then(($el) => {
                        if ($el.is(':visible')) {
                            consumerLandingPageLocators.productPage
                                .addToOrderButton()
                                .eq(1)
                                .scrollIntoView()
                                .should('be.visible')
                                .click();
                        } else {
                            consumerLandingPageLocators.productPage
                                .claimOfferNowButton()
                                .eq(1)
                                .first()
                                .click();
                        }
                    });
                break;
            case '3':
                consumerLandingPageLocators.productPage
                    .addToOrderButton()
                    .then(($el) => {
                        if ($el.is(':visible')) {
                            consumerLandingPageLocators.productPage
                                .addToOrderButton()
                                .eq(2)
                                .scrollIntoView()
                                .should('be.visible')
                                .click();
                        } else {
                            consumerLandingPageLocators.productPage
                                .claimOfferNowButton()
                                .eq(2)
                                .first()
                                .click();
                        }
                    });
                break;
            default:
                throw new Error('Invalid case number');
        }
    }
);

Then('The user clicks YES! button', (buttonText: string) => {
    cy.logStep(`Clicks the ${buttonText} button`);
    cy.intercept('GET', '/checkout-vs/**').as('waitForCheckout');
    cy.interceptPixels('addtocart');
    consumerLandingPageLocators.productPage.yes().click();
});

Then(
    'The user skips video and clicks {string} button',
    (buttonText: string) => {
        cy.logStep(`Clicks the ${buttonText} button`);
        cy.skipVideo();
        cy.intercept('GET', '/checkout-vs/**').as('waitForCheckout');
        consumerLandingPageLocators.productPage
            .addToOrderButton()
            .scrollIntoView()
            .should('be.visible')
            .click();
    }
);

Then('The user fills out the survey order form', () => {
    cy.logStep('Validate VS Checkout form type before data entry');
    cy.generateRandomTestEmail().then((randomEmail) => {
        dynamicTestData.userEmail = randomEmail;
        dynamicTestData.userPassword = Math.floor(
            Math.random() * 9000000000 + 1000000000
        ).toString();
        cy.checkVsOrderForm(dynamicTestData.userEmail);
    });
});

Then('The user fills out the survey order form fast checkout', () => {
    cy.logStep('Validate VS Checkout form type before data entry');
    cy.generateRandomTestEmail().then((randomEmail) => {
        dynamicTestData.userEmail = randomEmail;
        dynamicTestData.userPassword = Math.floor(
            Math.random() * 9000000000 + 1000000000
        ).toString();
        cy.filloutFastCheckoutForm(dynamicTestData.userEmail);
    });
});

Then(
    'The user fills out the survey order form with specific fraud email',
    () => {
        cy.logStep('Validate VS Checkout form type before data entry');
        const uuid = () => Cypress._.random(0, 1e5);
        const id = uuid();
        const fraudEmail = `automationTest+_${id}blockme@vshred.com`;
        dynamicTestData.userEmail = fraudEmail;
        cy.checkVsOrderForm(fraudEmail);
    }
);

Then(
    'The user verifies the error message is displayed on the order summary page',
    () => {
        consumerLandingPageLocators.orderConformation
            .errorMessage()
            .should('be.visible');
    }
);

Then('The user fills out the funnel order form', () => {
    cy.logStep('Validate checkout order form');
    cy.generateRandomTestEmail().then((randomEmail) => {
        dynamicTestData.userEmail = randomEmail;
        dynamicTestData.userPassword = Math.floor(
            Math.random() * 9000000000 + 1000000000
        ).toString();
        cy.checkOrderForm(
            dynamicTestData.userEmail,
            dynamicTestData.userPassword
        );
    });
});

Then('The user submits the order', () => {
    cy.logStep('User submits the order');
    cy.intercept('POST', '/api/cart/pay').as('orderPlaced');

    consumerLandingPageLocators.surveyOrderForm.submitOrderButton().click();
    cy.wait('@orderPlaced');
});

When(
    /^The User "(Selects|Declines)" the CDP Bumper Offer and submits the order$/,
    (cdpOffer: string) => {
        cy.intercept('POST', 'https://payments.sandbox.braintree-api.com/*').as(
            'waitForPayment'
        );
        cy.intercept('POST', '/api/cart/pay').as('orderPlaced');
        cy.url().then((checkoutPageUrl) => {
            const isVshredOrder =
                checkoutPageUrl.includes(`/vshred-order?`) ||
                checkoutPageUrl.includes(`/vshred-ecom?`);
            const isCheckoutFle = checkoutPageUrl.includes(`/checkout-fle?`);

            if (isCheckoutFle && cdpOffer === 'Selects') {
                cy.contains('Yes! Add to My Order').should('be.visible');
                cy.logStep('Selects Bumper Offer before Order Submission');
                consumerLandingPageLocators.checkoutFle
                    .bumperCheckbox()
                    .click();
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(2000); // expected delays in updating the order summary page
                cy.scrollTo('bottom');
                consumerLandingPageLocators.checkoutFle
                    .placeOrderBtn()
                    .invoke('removeAttr', 'disabled')
                    .scrollIntoView()
                    .click({ force: true });
                cy.wait('@orderPlaced');
            } else if (isCheckoutFle) {
                cy.contains('Yes! Add to My Order').should('be.visible');
                cy.logStep('Did NOT select Bumper Offer');
                cy.scrollTo('bottom');
                consumerLandingPageLocators.checkoutFle
                    .placeOrderBtn()
                    .invoke('removeAttr', 'disabled')
                    .scrollIntoView()
                    .click({ force: true });
                cy.wait('@orderPlaced');
            } else if (cdpOffer === 'Selects' && isVshredOrder) {
                cy.logStep('Select Special Offer before Order Submission');
                consumerLandingPageLocators.checkoutFormV4.bumperOffer
                    .specialOfferCheckbox()
                    .click();
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(2000); // expected delays in updating the order summary page
                consumerLandingPageLocators.checkoutFormV4.paymentInformation
                    .payNowButton()
                    .click();
                cy.wait('@orderPlaced');
            } else if (cdpOffer === 'Selects') {
                cy.logStep(' Select CDP Bumper before Order Submission');
                consumerLandingPageLocators.surveyOrderForm.cdpUpsell().click();
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(2000); // expected delays in updating the order summary page
                consumerLandingPageLocators.surveyOrderForm
                    .submitOrderButton()
                    .click();
                cy.wait('@orderPlaced');
            } else if (isVshredOrder) {
                cy.logStep('Did not select bumper offer');
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(2000); // expected delays in updating the order summary page
                consumerLandingPageLocators.checkoutFormV4.paymentInformation
                    .payNowButton()
                    .click();
                cy.wait('@orderPlaced');
            } else {
                cy.logStep('Did not select bumper offer');
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(2000); // expected delays in updating the order summary page
                consumerLandingPageLocators.surveyOrderForm
                    .submitOrderButton()
                    .click();
                cy.wait('@orderPlaced');
            }
        });
    }
);

When(
    /^The User "(Selects|Declines)" Checkout Upsell Offer$/,
    (upsellOffer: string) => {
        cy.interceptPixels('purchase');
        cy.intercept('POST', '/api/cart/pay').as('orderPlaced');

        const newBumperPage = () => {
            cy.scrollTo('bottom');
            consumerLandingPageLocators.checkoutFle
                .loadingAnimation()
                .should('not.exist');
            consumerLandingPageLocators.checkoutFle
                .placeOrderBtn()
                .invoke('css', 'display', 'block')
                .scrollIntoView()
                .click({ force: true });
            cy.wait('@orderPlaced');
        };

        const payNow = () => {
            consumerLandingPageLocators.secureCheckoutV2
                .loadingAnimation()
                .should('not.exist');
            cy.get('.order-summary').should('be.visible');
            consumerLandingPageLocators.checkoutFormV4.paymentInformation
                .payNowButton()
                .should('be.visible')
                .click({ force: true });
            cy.wait('@orderPlaced');
        };

        const submitOrder = () => {
            consumerLandingPageLocators.secureCheckoutV2
                .loadingAnimation()
                .should('not.exist');
            cy.get('.order-summary').should('be.visible');
            vsSurveyOrderFormPageLocators
                .submitOrderButton()
                .should('be.visible')
                .invoke('css', 'display', 'block')
                .invoke('removeAttr', 'disabled')
                .click({ force: true });
            cy.wait('@orderPlaced');
        };

        const processOrder = (isVshredOrder: boolean) => {
            if (upsellOffer === 'Selects') {
                if (isVshredOrder) {
                    cy.logStep('Select Special Offer before Order Submission');
                    consumerLandingPageLocators.checkoutFormV4.bumperOffer
                        .specialOfferCheckbox()
                        .click();
                    // eslint-disable-next-line cypress/no-unnecessary-waiting
                    cy.wait(5000); // Expected page load delay in updating order summary
                    payNow();
                } else {
                    cy.logStep('Select CDP Bumper before Order Submission');
                    vsSurveyOrderFormPageLocators.upsellCheckbox().click();
                    // eslint-disable-next-line cypress/no-unnecessary-waiting
                    cy.wait(5000); // Expected page load delay in updating order summary
                    cy.get('div.order-summary')
                        .invoke('css', 'display', 'block')
                        .should('contain', 'Custom Diet Plan');
                    submitOrder();
                }
            } else {
                cy.logStep('Did not select bumper offer');
                if (isVshredOrder) {
                    payNow();
                } else {
                    submitOrder();
                }
            }
        };

        cy.get('body').then((bumperPage: any) => {
            if (bumperPage.find('#scene2').length > 0) {
                cy.logStep('New Funnel offer page scene is displayed');
                cy.contains('Yes! Add to My Order').should('be.visible');

                if (upsellOffer === 'Selects') {
                    cy.logStep('Selects Bumper Offer before Order Submission');
                    consumerLandingPageLocators.checkoutFle
                        .bumperCheckbox()
                        .click();
                    // eslint-disable-next-line cypress/no-unnecessary-waiting
                    cy.wait(5000); // Expected delays in updating the order summary page
                } else {
                    cy.logStep('Did NOT select Bumper Offer');
                }
                newBumperPage();
            } else {
                cy.url().then((checkoutPageUrl) => {
                    const isVshredOrder =
                        checkoutPageUrl.includes('/vshred-order?') ||
                        checkoutPageUrl.includes('/vshred-ecom?');
                    processOrder(isVshredOrder);
                });
            }
        });
    }
);

Then('The user fills out the shipping order form', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.fillInShippingOrderForm(
            staticTestData.firstName,
            staticTestData.lastName,
            staticTestData.address,
            staticTestData.city,
            staticTestData.state,
            staticTestData.postalCode
        );
    });
});

Then(
    'The user verifies the next funnel upsell is {string}',
    (productName: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { funnelUrl } = staticTestData[productName];
            cy.url().should('contain', `/${funnelUrl}`);
            cy.skipVideo();
        });
    }
);

Then('The user accepts the VSU dollar special page', () => {
    cy.skipVideo();
    consumerLandingPageLocators.productPage.vusPageAcceptButton().click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000); // expected delay creating vsu subscription
});

Then('The user accepts the VSU page', () => {
    cy.skipVideo();
    consumerLandingPageLocators.productPage.agreeToPaymentTerms().click();
    consumerLandingPageLocators.productPage
        .yesIWantToStartMyFreeMonthButton()
        .click({ force: true });
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000); // expected delay creating vsu subscription
});

When('The user navigates to {string} CMS Offer page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.visit(`/${staticTestData.offerLandingPage.pageUrl}`);
        cy.url().then((currentUrl) => {
            const isProdServer =
                currentUrl.includes(`https://sculptnation.com`) ||
                currentUrl.includes(`https://le-uat.sculptnation.com`) ||
                currentUrl.includes(`https://uat.sculptnation.com`);

            if (isProdServer) {
                cy.visit(`${currentUrl}?qa_test=VSQAT`);
            }
        });

        cy.url().then((surveyUrl) => {
            if (!surveyUrl.includes('sp/burn/burnpm-fle-fbk-cpc-eco-v5')) {
                cy.skipVideo();
            }
        });
    });
});

Then('The Bundled Product Offer details are displayed', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { bottleBundle } = staticTestData.offerLandingPage;
        bottleBundle.forEach((bundleOffer: any) => {
            cy.contains('h2.bottle-title', bundleOffer).should('be.visible');
        });
    });
});

When('The user clicks {string} from the offer page', () => {
    consumerLandingPageLocators.productPage
        .addToOrderButton()
        .should('be.visible')
        .click();
});

When(
    'The user skips video then clicks {string} from the offer page',
    (incomeAction: string) => {
        cy.skipVideo();
        if (incomeAction === 'yes') {
            consumerLandingPageLocators.productPage
                .addToOrderButton()
                .should('be.visible')
                .click();
        } else if (
            incomeAction === 'I understand' ||
            incomeAction === 'No thanks'
        ) {
            consumerLandingPageLocators.productPage
                .declineLink()
                .should('be.visible')
                .click();
        }
    }
);

When('The user clicks the first buy now from the offer page', () => {
    consumerLandingPageLocators.productPage
        .buyNow()
        .eq(0)
        .should('be.visible')
        .click();
});

When(
    /^The user "(Skips All|Selects All)" Funnel Offers$/,
    (selectFunnel: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const offerUrl = staticTestData.funnelOfferUrl;

            offerUrl.forEach((url: any) => {
                cy.url().should('contain', url);
                cy.skipVideo();

                switch (selectFunnel) {
                    case 'Skips All':
                        consumerLandingPageLocators.productPage
                            .declineLink()
                            .click();
                        cy.reload();
                        break;
                    case 'Selects All':
                        consumerLandingPageLocators.productPage
                            .upgradeOrderButton()
                            .click();
                        break;
                    default:
                        throw new Error('Option selected is invalid');
                }
            });
        });
    }
);

When('The user Opts in to select Funnel Offers', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const offerUrl = staticTestData.funnelOfferUrl;
        offerUrl.forEach((url: any, index: number) => {
            cy.url().should('contain', url);
            cy.skipVideo();
            if (index === 0 || index === 1) {
                cy.contains('No thanks').click();
                cy.reload();
            } else if (index === 2 || index === 3) {
                consumerLandingPageLocators.productPage
                    .upgradeOrderButton()
                    .click();
            }
        });
    });
});

When(
    /^The user selects "(One Bottle|Six Bottle|Three Bottle|1 Bottle|2 Bottles|3 Bottles|4 Bottles|6 Bottles)" package and clicks "([^"]*)" button$/,
    (packageOption: string, buttonName: string) => {
        cy.interceptPixels('addtocart');
        switch (buttonName) {
            case 'Speed Up My Metabolism':
                cy.addProductByBottleToCart(packageOption);
                break;
            case 'BURN BELLY FAT FASTER':
                cy.addProductByBottleToCart(packageOption);
                break;
            case 'Buy Now':
                cy.addProductByBottleToCart(packageOption);
                break;
            case 'SKYROCKET MY MANHOOD':
                cy.addProductByBottleToCart(packageOption);
                break;
            default:
                throw new Error('Expected button is not visible');
        }
    }
);

When(
    /^The user selects bundle "(1 Bottle|3 Bottles|6 Bottles)" and clicks "([^"]*)" button$/,
    (packageOption: string, buttonName: string) => {
        cy.interceptPixels('addtocart');
        switch (buttonName) {
            case 'Speed Up My Metabolism':
                cy.addBundleByBottleToCart(packageOption);
                break;
            case 'BURN BELLY FAT FASTER':
                cy.addBundleByBottleToCart(packageOption);
                break;
            case 'Buy Now':
                cy.addBundleByBottleToCart(packageOption);
                break;
            case 'SKYROCKET MY MANHOOD':
                cy.addBundleByBottleToCart(packageOption);
                break;
            default:
                throw new Error('Expected button is not visible');
        }
    }
);

Then(
    /^The User "(Upgrades|Subscribes|Declines)" the "([^"]*)" Funnel Offer$/,
    (selectOption: string, productName: any) => {
        cy.interceptPixels('purchase');
        cy.fixture(`customData/productOfferList.json`).as('offerList');
        cy.get('@offerList').then((productOfferList: any) => {
            const matchProduct: any = Object.values(
                productOfferList.productOffers
            ).find(
                (product: any) =>
                    product.productName.toLowerCase() ===
                    productName.toLowerCase()
            );
            if (matchProduct) {
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(5000);
                const { slug } = matchProduct;
                if (Array.isArray(slug)) {
                    cy.url().then((currentUrl) => {
                        const slugFound = slug.some((sUrl: string) =>
                            currentUrl.includes(sUrl)
                        );
                        assert.isTrue(
                            slugFound,
                            `funnel url contains one of the expected values: ${slug.join(
                                ', '
                            )}`
                        );
                    });
                } else {
                    cy.url().should('contain', slug);
                }

                cy.skipVideo();
                cy.get('body').then(($body) => {
                    if ($body.find('div.screen').length > 0) {
                        cy.get('div.screen').invoke('css', 'display', 'block');
                    }
                });
                switch (selectOption) {
                    case 'Declines':
                        consumerLandingPageLocators.productPage
                            .declineLink()
                            .invoke('css', 'display', 'block')
                            .scrollIntoView()
                            .should('be.visible')
                            .click({ force: true });
                        break;
                    case 'Upgrades':
                        consumerLandingPageLocators.productPage
                            .upgradeOfferButton()
                            .scrollIntoView()
                            .should('be.visible')
                            .click();
                        break;
                    case 'Subscribes':
                        consumerLandingPageLocators.productPage
                            .subscribeOfferButton()
                            .scrollIntoView()
                            .should('be.visible')
                            .click();
                        break;
                    default:
                        throw new Error('Invalid Selection');
                }
            } else {
                throw new Error('No matching Product found');
            }
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(3000); // expected delays in loading new pages
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(3000); // Expected delay in checking shipment information is already received
            cy.get('body').then(($body) => {
                if (
                    $body.find(
                        ':contains("Tell Us Where To Ship Your Supplement"):visible'
                    ).length > 0
                ) {
                    if ($body.find('h4.modal-title:visible').length > 0) {
                        Step(
                            new Mocha.Context(),
                            'The user fills out VS shipping order form'
                        );
                    } else if ($body.find('h2.m-title:visible').length > 0) {
                        Step(
                            new Mocha.Context(),
                            'The user fills out the shipping order form'
                        );
                    } else {
                        throw new Error('Shipment form is not yet supported');
                    }
                }
            });
        });
    }
);

When(
    'The User Selects {string} of {string} Funnel Offer',
    (bottleCount: string, productName: any) => {
        cy.interceptPixels('upsell');
        cy.fixture(`customData/productOfferList.json`).as('offerList');
        cy.get('@offerList').then((productOfferList: any) => {
            const matchProduct: any = Object.values(
                productOfferList.productOffers
            ).find(
                (product: any) =>
                    product.productName.toLowerCase() ===
                    productName.toLowerCase()
            );
            if (matchProduct) {
                const { slug } = matchProduct;
                cy.url().should('contain', slug);
                cy.skipVideo();
                cy.addProductByBottleToCart(bottleCount);
            } else {
                throw new Error('No matching Product found');
            }
        });
    }
);

Then('Check if the next upsell is burn pm or recipe guide', () => {
    cy.url().then((currentUrl) => {
        if (currentUrl.includes('/burn-pm')) {
            // Call Burn PM action
            cy.log('Burn PM Upsell detected');
            cy.then(() => {
                // Call the step *code* directly
                cy.log('Calling Burn PM funnel offer step');
                cy.skipVideo();
                consumerLandingPageLocators.productPage
                    .declineLink()
                    .invoke('css', 'display', 'block')
                    .scrollIntoView()
                    .should('be.visible')
                    .click({ force: true });
            });
        } else if (currentUrl.includes('/recipe-guide')) {
            // Call Recipe Guide action
            cy.log('Recipe Guide Upsell detected');
            cy.then(() => {
                consumerLandingPageLocators.productPage
                    .declineLink()
                    .invoke('css', 'display', 'block')
                    .scrollIntoView()
                    .should('be.visible')
                    .click({ force: true });
            });
        } else {
            cy.log(
                `⚠️ WARNING: Unknown upsell URL — No action taken: ${currentUrl}`
            );
        }
    });
});

Then(
    /^The user fills out the Order Form with (upsell|cdpupsell) and submits the order$/,
    (upsellType: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            dynamicTestData.userEmail =
                Cypress.env('EMAIL_BASE') +
                Cypress._.random(0, 1e9) +
                Cypress.env('EMAIL_DOMAIN');
            cy.fillInSurveyFormWithUpsell(
                staticTestData.name,
                dynamicTestData.userEmail,
                staticTestData.phoneNumber,
                Cypress.env('CREDIT_CARD_NUMBER'),
                Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'),
                Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'),
                Cypress.env('CREDIT_CARD_CVV'),
                staticTestData.postalCode,
                upsellType
            );
        });
    }
);

When('The user clicks the hamburger icon', () => {
    consumerHeaderFooterPageLocators.hamburgerIcon().click();
});

// step definition when using new version (v4) of Product page layout
When(
    /^The user choose "(1 Bottle|3 Bottles|6 Bottles)" package and clicks "([^"]*)" button$/,
    (packageOption: string, buttonName: string) => {
        cy.interceptPixels('addtocart');
        if (buttonName === 'Subscribe Now') {
            consumerLandingPageLocators.newProductPage
                .oneBottleHeader()
                .parents('.package')
                .within(() => {
                    consumerLandingPageLocators.newProductPage
                        .subscriptionRadioButton()
                        .click();
                    consumerLandingPageLocators.newProductPage
                        .clickOrderButton(buttonName)
                        .click();
                });
        } else {
            consumerLandingPageLocators.newProductPage
                .selectPackage(packageOption)
                .parents('.package')
                .within(() => {
                    if (buttonName === 'Subscribe Now') {
                        consumerLandingPageLocators.newProductPage
                            .subscriptionRadioButton()
                            .click();
                    }
                    if (packageOption === '1 Bottle') {
                        consumerLandingPageLocators.newProductPage
                            .oneTimeDeliveryCheckbox()
                            .click();
                    }
                    consumerLandingPageLocators.newProductPage
                        .clickOrderButton(buttonName)
                        .click();
                });
        }
    }
);

When(
    'The user selects the {string} Special Offer and clicks {string} button',
    (specialOffer: string, buttonName: string) => {
        cy.interceptPixels('addtocart');
        consumerLandingPageLocators.specialOfferProductPage
            .selectPackage(specialOffer)
            .parents('.packages11__item')
            .within(() => {
                consumerLandingPageLocators.specialOfferProductPage
                    .buyNowButton(buttonName)
                    .click();
            });
    }
);

Then(
    'The user selects the buy now button for ULTIMATE BURN on the page',
    () => {
        consumerLandingPageLocators.productPage
            .buyNowForUltimateBurn()
            .scrollIntoView();
        consumerLandingPageLocators.productPage.buyNowForUltimateBurn().click();
    }
);

When('The user declines the {string} Special Offer', (offerName: string) => {
    cy.url().should('include', offerName.toLowerCase());
    cy.skipVideo();
    consumerLandingPageLocators.specialOfferProductPage
        .declineOfferLink()
        .scrollIntoView()
        .should('be.visible')
        .click();
});

Given('The user navigates to {string} Sculptnation Survey page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.visit(`/${staticTestData.surveyLandingPage.surveyUrl}`);
        cy.skipVideo();
    });
});

When('The user navigates to V Shred Survey page', () => {
    cy.clearAllSessionData();
    cy.get('@staticTestData').then((staticTestData: any) => {
        const leVshredUrl = Cypress.env('LE_VSHRED_URL');
        const isProdServer =
            leVshredUrl.includes(`https://le.vshred.com`) ||
            leVshredUrl.includes(`https://vshred.com`) ||
            leVshredUrl.includes(`https://le.vshredmd.com`) ||
            leVshredUrl.includes(`https://sculptnation.com`) ||
            leVshredUrl.includes(`https://le-uat.vshred.com`) ||
            leVshredUrl.includes(`https://uat.vshred.com`);

        if (isProdServer) {
            const { surveyUrl } = staticTestData.surveyLandingPage;
            cy.visit(`${leVshredUrl}${surveyUrl}?qa_test=VSQAT`);
        } else {
            const { surveyUrl } = staticTestData.surveyLandingPage;
            cy.visit(`${leVshredUrl}${surveyUrl}`);
        }
        consumerLandingPageLocators.loader().should('not.exist');
        cy.skipVideo();
    });
});

When(
    'The user navigates to V Shred Survey page with endpoint {string}',
    (endpoint: string) => {
        cy.clearAllSessionData();
        cy.get('@staticTestData').then((staticTestData: any) => {
            // === declare variables ====
            let surveyUrl;

            // === declare  endpoint variables ====
            switch (endpoint) {
                case 'survey-ga':
                    surveyUrl = staticTestData.landingPage.surveyga;
                    break;
                case 'survey-ga#':
                    surveyUrl = staticTestData.landingPage.surveygahash;
                    break;
                case 'surveyaka1':
                    surveyUrl = staticTestData.landingPage.surveyaka1;
                    break;
                case 'flbtv5':
                    surveyUrl = staticTestData.landingPage.flbtv5;
                    break;
                case 'fbkcpcv3':
                    surveyUrl = staticTestData.landingPage.fbkcpcv3;
                    break;
                case 'fbkcpcv5':
                    surveyUrl = staticTestData.landingPage.fbkcpcv5;
                    break;
                case 'surveyaka1v13':
                    surveyUrl = staticTestData.landingPage.surveyaka1v13;
                    break;
                case 'fbkcpc':
                    surveyUrl = staticTestData.landingPage.fbkcpc;
                    break;
                case 'aka1#':
                    surveyUrl = staticTestData.landingPage.aka1hash;
                    break;
                case 'aka1v3':
                    surveyUrl = staticTestData.landingPage.aka1v3;
                    break;
                case 'fbkcpcv2':
                    surveyUrl = staticTestData.landingPage.fbkcpcv2;
                    break;
                case 'bodytypequiz':
                    surveyUrl = staticTestData.landingPage.bodytypequiz;
                    break;
                case 'aka1':
                    surveyUrl = staticTestData.landingPage.aka1;
                    break;
                default:
                    throw new Error('Invalid endpoint provided');
            }
            // === visit the page ===
            const leVshredUrl = Cypress.env('LE_VSHRED_URL');
            cy.visit(`${leVshredUrl}${surveyUrl}`);
            consumerLandingPageLocators.loader().should('not.exist');
            consumerLandingPageLocators.loader().should('not.exist');
            cy.skipVideo();
        });
    }
);

When(
    'The user navigates to {string} product page with endpoint {string}',
    (product: string, endpoint: string) => {
        cy.clearAllSessionData();
        cy.get('@staticTestData').then((staticTestData: any) => {
            // === declare variables ====
            let surveyUrl;

            // === declare  endpoint variables ====
            switch (endpoint) {
                case 'productEndpoint':
                    surveyUrl = staticTestData.landingPage.productEndpoint;
                    break;
                case 'burnpmflefbkcpcecov5':
                    surveyUrl = staticTestData.landingPage.burnpmflefbkcpcecov5;
                    break;
                case 'testrippedfbkcpcecobb':
                    surveyUrl =
                        staticTestData.landingPage.testrippedfbkcpcecobb;
                    break;
                case 'flbtv5':
                    surveyUrl = staticTestData.landingPage.flbtv5;
                    break;
                case 'fbkcpcv3':
                    surveyUrl = staticTestData.landingPage.fbkcpcv3;
                    break;
                case 'fbkcpcv5':
                    surveyUrl = staticTestData.landingPage.fbkcpcv5;
                    break;
                case 'surveyaka1v13':
                    surveyUrl = staticTestData.landingPage.surveyaka1v13;
                    break;
                case 'fbkcpc':
                    surveyUrl = staticTestData.landingPage.fbkcpc;
                    break;
                case 'aka1#':
                    surveyUrl = staticTestData.landingPage.aka1hash;
                    break;
                case 'aka1v3':
                    surveyUrl = staticTestData.landingPage.aka1v3;
                    break;
                case 'fbkcpcv2':
                    surveyUrl = staticTestData.landingPage.fbkcpcv2;
                    break;
                case 'burnfbkcpc':
                    surveyUrl = staticTestData.landingPage.burnfbkcpc;
                    break;
                case 'testrippedgglcpc':
                    surveyUrl = staticTestData.landingPage.testrippedgglcpc;
                    break;
                case 'tumericflefbkcpcv3':
                    surveyUrl = staticTestData.landingPage.tumericflefbkcpcv3;
                    break;
                case 'testrippedfbkcpceconbb':
                    surveyUrl =
                        staticTestData.landingPage.testrippedfbkcpceconbb;
                    break;
                case 'burnfilefbkcpcv4':
                    surveyUrl = staticTestData.landingPage.burnfilefbkcpcv4;
                    break;
                case 'specialofferecofbkcpc':
                    surveyUrl =
                        staticTestData.landingPage.specialofferecofbkcpc;
                    break;
                case 'burnevolvedfbkcpcv19':
                    surveyUrl = staticTestData.landingPage.burnevolvedfbkcpcv19;
                    break;
                case 'testrippedfbkcpceco':
                    surveyUrl = staticTestData.landingPage.testrippedfbkcpceco;
                    break;
                case 'testrippedfbkcpc':
                    surveyUrl = staticTestData.landingPage.testrippedfbkcpc;
                    break;
                case 'burnga':
                    surveyUrl = staticTestData.landingPage.burnga;
                    break;
                case 'sculptnation':
                    surveyUrl = staticTestData.landingPage.sculptnation;
                    break;
                case 'testrippedfbkcpceconbbv2':
                    surveyUrl =
                        staticTestData.landingPage.testrippedfbkcpceconbbv2;
                    break;
                case 'burnpmflegglshopbndcpc':
                    surveyUrl =
                        staticTestData.landingPage.burnpmflegglshopbndcpc;
                    break;
                case 'tbmtrfbkcpcecobb':
                    surveyUrl = staticTestData.landingPage.tbmtrfbkcpcecobb;
                    break;
                default:
                    throw new Error('Invalid endpoint provided');
            }
            const leVshredUrl = Cypress.env('LE_VSHRED_URL');
            cy.visit(`${leVshredUrl}${surveyUrl}`);
            consumerLandingPageLocators.loader().should('not.exist');
            cy.skipVideo();
        });
    }
);

When('The user navigates to {string} product page', () => {
    cy.clearAllSessionData();
    cy.get('@staticTestData').then((staticTestData: any) => {
        const leVshredUrl = Cypress.env('LE_VSHRED_URL');
        const { productEndpoint } = staticTestData.landingPage;
        cy.visit(`${leVshredUrl}${productEndpoint}`);
        consumerLandingPageLocators.loader().should('not.exist');
        cy.skipVideo();
    });
});

When('The user navigates to a LE-VS Checkout form', () => {
    cy.clearAllSessionData();
    cy.get('@staticTestData').then((staticTestData: any) => {
        const leVshredUrl = Cypress.env('LE_VSHRED_URL');
        const { checkoutUrl } = staticTestData.checkoutForm;
        cy.visit(`${leVshredUrl}${checkoutUrl}`);
        consumerLandingPageLocators.loader().should('not.exist');
        cy.skipVideo();
    });
});

When('The user navigates to a SN Checkout form', () => {
    cy.clearAllSessionData();
    cy.get('@staticTestData').then((staticTestData: any) => {
        const leAdmindUrl = Cypress.env('LE_ADMIN_URL');
        const { checkoutUrl } = staticTestData.checkoutForm;
        cy.visit(`${leAdmindUrl}${checkoutUrl}`);
        consumerLandingPageLocators.loader().should('not.exist');
        cy.skipVideo();
    });
});

When('The user navigates to SN {string} product page', () => {
    cy.clearAllSessionData();
    cy.get('@staticTestData').then((staticTestData: any) => {
        const leSNUrl = Cypress.env('LE_ADMIN_URL');
        const { productEndpoint } = staticTestData.landingPage;
        cy.visit(`${leSNUrl}${productEndpoint}`);
        consumerLandingPageLocators.loader().should('not.exist');
        cy.skipVideo();
    });
});

When(
    'The user begins tracking and navigates to V Shred Survey {string} - {string}',
    (endpoint: string, platform: string) => {
        cy.clearAllSessionData();
        cy.get('@staticTestData').then((staticTestData: any) => {
            // === declare variables ====
            const vsIntPixelId = staticTestData.vshredPixelDetail.internal;
            const vsKenPixelId = staticTestData.vshredPixelDetail.kendago;
            let surveyUrl;

            // === intercept pixel ids ===
            switch (platform) {
                case 'Facebook':
                    cy.intercept(`**tr/?id=${vsIntPixelId}**`).as(
                        'vsIntRequest'
                    );
                    cy.intercept(`**tr/?id=${vsKenPixelId}**`).as(
                        'vsKenRequest'
                    );
                    break;
                case 'Twitter':
                    // Nothing to intercept for Twitter. Add here for future use.
                    break;
                case 'Tiktok':
                    // Nothing to intercept for Tiktok. Add here for future use.
                    break;
                default:
                    throw new Error('Invalid tracking option provided');
            }
            // === declare  endpoint variables ====
            switch (endpoint) {
                case 'survey-ga':
                    surveyUrl = staticTestData.landingPage.surveyga;
                    break;
                case 'survey-ga#':
                    surveyUrl = staticTestData.landingPage.surveygahash;
                    break;
                case 'surveyaka1':
                    surveyUrl = staticTestData.landingPage.surveyaka1;
                    break;
                case 'flbtv5':
                    surveyUrl = staticTestData.landingPage.flbtv5;
                    break;
                case 'fbkcpcv3':
                    surveyUrl = staticTestData.landingPage.fbkcpcv3;
                    break;
                case 'fbkcpcv5':
                    surveyUrl = staticTestData.landingPage.fbkcpcv5;
                    break;
                case 'surveyaka1v13':
                    surveyUrl = staticTestData.landingPage.surveyaka1v13;
                    break;
                case 'fbkcpc':
                    surveyUrl = staticTestData.landingPage.fbkcpc;
                    break;
                case 'aka1#':
                    surveyUrl = staticTestData.landingPage.aka1hash;
                    break;
                case 'aka1v3':
                    surveyUrl = staticTestData.landingPage.aka1v3;
                    break;
                case 'fbkcpcv2':
                    surveyUrl = staticTestData.landingPage.fbkcpcv2;
                    break;
                default:
                    throw new Error('Invalid endpoint provided');
            }
            // === visit the page ===
            const leVshredUrl = Cypress.env('LE_VSHRED_URL');
            cy.visit(`${leVshredUrl}${surveyUrl}`);
            consumerLandingPageLocators.loader().should('not.exist');
        });
    }
);

When(
    'The user begins tracking and navigates to V Shred Survey page - {string} for {string} with endpoint {string}',
    (option: string, social: string, endpoint: string) => {
        cy.clearAllSessionData();
        cy.get('@staticTestData').then((staticTestData: any) => {
            // === declare variables ====
            const vsIntPixelId = staticTestData.vshredPixelDetail.internal;
            const vsKenPixelId = staticTestData.vshredPixelDetail.kendago;
            let surveyUrl;

            // === declare  endpoint variables ====
            switch (endpoint) {
                case 'survey-ga':
                    surveyUrl = staticTestData.landingPage.surveyga;
                    break;
                case 'survey-ga#':
                    surveyUrl = staticTestData.landingPage.surveygahash;
                    break;
                case 'surveyaka1':
                    surveyUrl = staticTestData.landingPage.surveyaka1;
                    break;
                case 'flbtv5':
                    surveyUrl = staticTestData.landingPage.flbtv5;
                    break;
                case 'fbkcpcv3':
                    surveyUrl = staticTestData.landingPage.fbkcpcv3;
                    break;
                case 'fbkcpcv5':
                    surveyUrl = staticTestData.landingPage.fbkcpcv5;
                    break;
                case 'surveyaka1v13':
                    surveyUrl = staticTestData.landingPage.surveyaka1v13;
                    break;
                case 'fbkcpc':
                    surveyUrl = staticTestData.landingPage.fbkcpc;
                    break;
                case 'aka1#':
                    surveyUrl = staticTestData.landingPage.aka1hash;
                    break;
                case 'aka1v3':
                    surveyUrl = staticTestData.landingPage.aka1v3;
                    break;
                case 'fbkcpcv2':
                    surveyUrl = staticTestData.landingPage.fbkcpcv2;
                    break;
                case 'burnpmflefbkcpcecov5':
                    surveyUrl = staticTestData.landingPage.burnpmflefbkcpcecov5;
                    break;
                case 'burnfbkcpc':
                    surveyUrl = staticTestData.landingPage.burnfbkcpc;
                    break;
                case 'testrippedfbkcpcecobb':
                    surveyUrl =
                        staticTestData.landingPage.testrippedfbkcpcecobb;
                    break;
                case 'testrippedgglcpc':
                    surveyUrl = staticTestData.landingPage.testrippedgglcpc;
                    break;
                case 'tumericflefbkcpcv3':
                    surveyUrl = staticTestData.landingPage.tumericflefbkcpcv3;
                    break;
                case 'testrippedfbkcpceconbb':
                    surveyUrl =
                        staticTestData.landingPage.testrippedfbkcpceconbb;
                    break;
                case 'burnfilefbkcpcv4':
                    surveyUrl = staticTestData.landingPage.burnfilefbkcpcv4;
                    break;
                case 'specialofferecofbkcpc':
                    surveyUrl =
                        staticTestData.landingPage.specialofferecofbkcpc;
                    break;
                case 'burnevolvedfbkcpcv19':
                    surveyUrl = staticTestData.landingPage.burnevolvedfbkcpcv19;
                    break;
                case 'testrippedfbkcpceco':
                    surveyUrl = staticTestData.landingPage.testrippedfbkcpceco;
                    break;
                case 'testrippedfbkcpc':
                    surveyUrl = staticTestData.landingPage.testrippedfbkcpc;
                    break;
                case 'burnga':
                    surveyUrl = staticTestData.landingPage.burnga;
                    break;
                case 'sculptnation':
                    surveyUrl = staticTestData.landingPage.sculptnation;
                    break;
                case 'fbkcpcv1':
                    surveyUrl = staticTestData.landingPage.fbkcpcv1;
                    break;
                case 'testrippedfbkcpceconbbv2':
                    surveyUrl =
                        staticTestData.landingPage.testrippedfbkcpceconbbv2;
                    break;
                case 'burnpmflegglshopbndcpc':
                    surveyUrl =
                        staticTestData.landingPage.burnpmflegglshopbndcpc;
                    break;
                default:
                    throw new Error('Invalid endpoint provided');
            }

            // === intercept pixel ids ===
            switch (option) {
                case 'Internal':
                    cy.intercept(`**p?pid=${vsIntPixelId}**`).as(
                        'vsIntRequest'
                    ); // <--- FOR Snapchat
                    cy.intercept(`**js?sdkid=${vsIntPixelId}**`).as(
                        'vsIntRequestTiktok'
                    ); // <--- FOR Tiktok
                    cy.intercept(`**txn_id=${vsIntPixelId}**`).as(
                        staticTestData.interceptNameInternal
                    ); // <--- FOR Twitter
                    break;
                case 'Kendago':
                    cy.intercept(`**p?pid=${vsKenPixelId}**`).as(
                        'vsKenRequest'
                    ); // <---FOR Snapchat
                    cy.intercept(`**js?sdkid=${vsKenPixelId}**`).as(
                        'vsKenRequestTiktok'
                    ); // <--- FOR Tiktok
                    cy.intercept(`**txn_id=${vsKenPixelId}**`).as(
                        staticTestData.interceptNameKendago
                    ); // <--- FOR Twitter
                    break;
                default:
                    throw new Error('Invalid tracking option provided');
            }
            // === visit the page ===
            const leVshredUrl = Cypress.env('LE_VSHRED_URL');
            cy.visit(`${leVshredUrl}${surveyUrl}`);
            consumerLandingPageLocators.loader().should('not.exist');
        });
    }
);

When(
    'The user begins tracking and navigates to V Shred Survey page - {string} for {string}',
    (option: string) => {
        cy.clearAllSessionData();
        cy.get('@staticTestData').then((staticTestData: any) => {
            // === declare variables ====
            const vsIntPixelId = staticTestData.vshredPixelDetail.internal;
            const vsKenPixelId = staticTestData.vshredPixelDetail.kendago;

            // === intercept pixel ids ===
            switch (option) {
                case 'Internal':
                    cy.intercept(`**p?pid=${vsIntPixelId}**`).as(
                        'vsIntRequest'
                    ); // <--- FOR Snapchat
                    cy.intercept(`**js?sdkid=${vsIntPixelId}**`).as(
                        'vsIntRequestTiktok'
                    ); // <--- FOR Tiktok
                    cy.intercept(`**txn_id=${vsIntPixelId}**`).as(
                        staticTestData.interceptNameInternal
                    ); // <--- FOR Twitter
                    break;
                case 'Kendago':
                    cy.intercept(`**p?pid=${vsKenPixelId}**`).as(
                        'vsKenRequest'
                    ); // <---FOR Snapchat
                    cy.intercept(`**js?sdkid=${vsKenPixelId}**`).as(
                        'vsKenRequestTiktok'
                    ); // <--- FOR Tiktok
                    cy.intercept(`**txn_id=${vsKenPixelId}**`).as(
                        staticTestData.interceptNameKendago
                    ); // <--- FOR Twitter
                    break;
                default:
                    throw new Error('Invalid tracking option provided');
            }
            // === visit the page ===
            const leVshredUrl = Cypress.env('LE_VSHRED_URL');
            const { surveyUrl } = staticTestData.landingPage;
            cy.visit(`${leVshredUrl}${surveyUrl}`);
            consumerLandingPageLocators.loader().should('not.exist');
        });
    }
);

When(
    'The user begins tracking and navigates to Sculptnation page {string} - {string}',
    (endpoint: string, platform: string) => {
        cy.clearAllSessionData();
        cy.get('@staticTestData').then((staticTestData: any) => {
            // === declare variables ====
            const snIntPixelId =
                staticTestData.sculptNationPixelDetail.internal;
            const snKenPixelId = staticTestData.sculptNationPixelDetail.kendago;
            let surveyUrl;

            // === intercept pixel ids ===
            switch (platform) {
                case 'Facebook':
                    cy.intercept(`**tr/?id=${snIntPixelId}**`).as(
                        'snIntRequest'
                    );
                    cy.intercept(`**tr/?id=${snKenPixelId}**`).as(
                        'snKenRequest'
                    );
                    break;
                case 'Tiktok':
                    cy.intercept(`**sdkid=${snIntPixelId}**`).as(
                        'snIntRequestTiktok'
                    );
                    break;
                default:
                    throw new Error('Invalid tracking option provided');
            }
            // === declare  endpoint variables ====
            switch (endpoint) {
                case 'burnpmflefbkcpcecov5':
                    surveyUrl = staticTestData.landingPage.burnpmflefbkcpcecov5;
                    break;
                case 'burnfbkcpc':
                    surveyUrl = staticTestData.landingPage.burnfbkcpc;
                    break;
                case 'template':
                    surveyUrl = staticTestData.landingPage.xxxx;
                    break;
                case 'testrippedfbkcpcecobb':
                    surveyUrl =
                        staticTestData.landingPage.testrippedfbkcpcecobb;
                    break;
                case 'tumericflefbkcpc':
                    surveyUrl = staticTestData.landingPage.tumericflefbkcpc; /// Broken
                    break;
                case 'testrippedgglcpc':
                    surveyUrl = staticTestData.landingPage.testrippedgglcpc;
                    break;
                case 'tumericflefbkcpcv3':
                    surveyUrl = staticTestData.landingPage.tumericflefbkcpcv3;
                    break;
                case 'testrippedfbkcpceconbb':
                    surveyUrl =
                        staticTestData.landingPage.testrippedfbkcpceconbb;
                    break;
                case 'burnfilefbkcpcv4':
                    surveyUrl = staticTestData.landingPage.burnfilefbkcpcv4;
                    break;
                case 'specialofferecofbkcpc':
                    surveyUrl =
                        staticTestData.landingPage.specialofferecofbkcpc;
                    break;
                case 'testrippedfbkcpceco':
                    surveyUrl = staticTestData.landingPage.testrippedfbkcpceco;
                    break;
                case 'testrippedfbkcpc':
                    surveyUrl = staticTestData.landingPage.testrippedfbkcpc;
                    break;
                case 'burnga':
                    surveyUrl = staticTestData.landingPage.burnga;
                    break;
                case 'sculptnation':
                    surveyUrl = staticTestData.landingPage.sculptnation;
                    break;
                case 'fbkcpcv1':
                    surveyUrl = staticTestData.landingPage.fbkcpcv1;
                    break;
                case 'testrippedfbkcpceconbbv2':
                    surveyUrl =
                        staticTestData.landingPage.testrippedfbkcpceconbbv2;
                    break;
                case 'burnpmflegglshopbndcpc':
                    surveyUrl =
                        staticTestData.landingPage.burnpmflegglshopbndcpc;
                    break;
                case 'aka1v3':
                    surveyUrl = staticTestData.landingPage.aka1v3;
                    break;
                case 'burnEvolvedfbkcpcv19':
                    surveyUrl = staticTestData.landingPage.burnevolvedfbkcpcv19;
                    break;
                case 'tbmtrfbkcpcecobb':
                    surveyUrl = staticTestData.landingPage.tbmtrfbkcpcecobb;
                    break;
                case 'femaleGT':
                    surveyUrl = staticTestData.landingPage.femaleGT;
                    break;
                case 'testBoostMaxquizvsl':
                    surveyUrl = staticTestData.landingPage.testBoostMaxquizvsl;
                    break;
                default:
                    throw new Error('Invalid endpoint provided');
            }

            // === visit the page ===
            const leSculptnationUrl = Cypress.env('LE_ADMIN_URL');
            cy.visit(`${leSculptnationUrl}${surveyUrl}`);
            consumerLandingPageLocators.loader().should('not.exist');
        });
    }
);
When('Begin tracking {string} Snapchat events', (pixelOwner: string) => {
    cy.trackSnapchatEvents(pixelOwner);
});

When(
    /^Verify "(Sculptnation|Vshred)" Snapchat "(Internal|Kendago)" event:"([^"]*)" is triggered$/,
    (platform: string, pixelOwner: string, eventName: string) => {
        cy.verifySnapchatPixels(platform, pixelOwner, eventName);
    }
);
When(
    'The user begins tracking Sculptnation {string} event',
    (eventTitle: string) => {
        cy.clearAllSessionData();
        cy.get('@staticTestData').then((staticTestData: any) => {
            const snIntSnapchatId = staticTestData.snapchatID.internal;
            const snKendagonapchatId = staticTestData.snapchatID.kendago;
            switch (eventTitle) {
                case 'Page View': {
                    const { pageview } = staticTestData.event;
                    cy.intercept(
                        `**p?pid=${snIntSnapchatId}&ev=${pageview}**`
                    ).as('snInternalPageView');
                    cy.intercept(
                        `**p?pid=${snKendagonapchatId}&ev=${pageview}**`
                    ).as('snKendagoPageView');
                    break;
                }
                case 'Add To Cart': {
                    const { addtocart } = staticTestData.event;
                    cy.intercept(
                        `**p?pid=${snIntSnapchatId}&ev=${addtocart}**`
                    ).as('snInternalAddtoCart');
                    break;
                }
                case 'Start Checkout': {
                    const { startCheckout } = staticTestData.event;
                    cy.intercept(
                        `**p?pid=${snIntSnapchatId}&ev=${startCheckout}**`
                    ).as('snInternalStartCheckout');
                    cy.log(eventTitle + startCheckout);
                    cy.intercept(
                        `**p?pid=${snKendagonapchatId}&ev=${startCheckout}**`
                    ).as('snKendagoStartCheckout');
                    break;
                }
                case 'Quiz Completed': {
                    const { quizCompleted } = staticTestData.event;
                    cy.intercept(
                        `**p?pid=${snIntSnapchatId}&ev=${quizCompleted}**`
                    ).as('snInternalQuiz');
                    cy.log(eventTitle + quizCompleted);
                    cy.intercept(
                        `**p?pid=${snKendagonapchatId}&ev=${quizCompleted}**`
                    ).as('snKendagoQuiz');
                    break;
                }
                case 'Purchase': {
                    const { purchase } = staticTestData.event;
                    cy.intercept(
                        `**p?pid=${snIntSnapchatId}&ev=${purchase}**`
                    ).as('snInternalPurchase');
                    cy.log(eventTitle + purchase);
                    cy.intercept(
                        `**p?pid=${snKendagonapchatId}&ev=${purchase}**`
                    ).as('snKendagoPurchase');
                    break;
                }
                default:
                    throw new Error('Event not supported');
            }
        });
    }
);

When('The user starts new Survey FL Funnel for {string}', (gender: string) => {
    cy.logStep(`Initiate VS ${gender} survey`);
    const ageIndex = Math.floor(Math.random() * 6);
    const activityIndex = Math.floor(Math.random() * 3);

    const ageRange = Object.values(vsNewSurveyPageLocators.surveyFl.AgeRange)[
        ageIndex
    ];

    const activity = Object.values(
        vsNewSurveyPageLocators.surveyFl.activeLevel
    )[activityIndex];

    switch (gender.toLowerCase()) {
        case 'women':
        case 'woman':
            vsNewSurveyPageLocators.surveyFl.womenTextGender().click();
            ageRange().should('be.visible').click();
            vsNewSurveyPageLocators.surveyFl
                .continueButton()
                .should('be.visible')
                .click();
            vsNewSurveyPageLocators.surveyFl.continueButtonWeight().click();
            activity().should('be.visible').click();
            break;

        case 'men':
        case 'man':
            vsNewSurveyPageLocators.surveyFl.manTextGender().click();
            ageRange().should('be.visible').click();
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(1000); // wait for the age range to be selected
            vsNewSurveyPageLocators.surveyFl
                .continueButton()
                .should('be.visible')
                .click();
            vsNewSurveyPageLocators.surveyFl.continueButtonWeight().click();
            activity().should('be.visible').click();
            break;

        default:
            throw new Error(`Unsupported gender: ${gender}`);
    }
});

When('The user starts V Shred survey for {string}', (gender: string) => {
    cy.randomVsSurveyResponse(gender);
});

When('The user starts new Survey GA Funnel for {string}', (gender: string) => {
    cy.randomNewVsSurveyResponse(gender);
});

When('The user starts new Body Type Survey for {string}', (gender: string) => {
    cy.randomNewBodyTypeSurvey(gender);
});

When(
    'The user runs surveyGa page refresh tests for {string}',
    (gender: string) => {
        cy.surveyGaRefreshPageTests(gender);
    }
);

When('The user finishes the V Shred survey and skips video', () => {
    /*
        !!!!! IMPORTANT !!!!!
        This must be used after step ---> "The user starts V Shred survey for {string}"
        The previous step stops at a certain point, and this step finishes the survey and clicks the product button.
        This step also skips the video and confirms the product button is visible.
    */
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep('Finish the survey');
        cy.logStep('Select body description');
        vsSurveyPageLocators.femaleaka1v3.descriptionSoft().click(); // select body description
        vsSurveyPageLocators.femaleaka1v3.videoContainer().should('be.visible'); // assert video container is visible
        cy.skipVideo();
        // assert product button is visible and click
        // cy.logStep(`Select the product for purchase of ${option}`);
        cy.get('[type=button]')
            .contains(staticTestData.buttonText)
            .should('be.visible')
            .click();
    });
});
When('View Survey Offer', () => {
    cy.get('body').then((surveyBody: any) => {
        if (surveyBody.find('button.continue').length > 0) {
            vsNewSurveyPageLocators.nextButton().click();
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(1000); // expected delay in loading new page
        }
    });
});

When('Show survey results', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // expected delay in loading new page
    cy.get('body').then(($warningMessage) => {
        if (
            $warningMessage
                .text()
                .includes('Please be careful with the information')
        ) {
            vsSurveyPageLocators.showSurveyResults().click({ force: true });
        }
    });
});

When('Survey prompts to email Custom Plan', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // expected delay in loading new page
    cy.get('body').then(($body: any) => {
        if ($body.text().includes('Get A Customized Diet Plan')) {
            vsNewSurveyPageLocators
                .emailCustomPlanButton()
                .click({ force: true });
        }
    });
});

When('The Male user describes self as {string}', (selfRate: string) => {
    cy.interceptPixels('quizcompleted');
    switch (selfRate) {
        case "I can't get bigger or gain muscle":
            vsSurveyPageLocators.maleHardGainer().click();
            Step(new Mocha.Context(), 'Show survey results');
            cy.url().should('contain', 'male-cb');
            cy.skipVideo();
            break;
        case "I'm skinny fat":
            vsSurveyPageLocators.maleSkinnyFat().click();
            Step(new Mocha.Context(), 'Show survey results');
            cy.url().should('contain', 'male-sf');
            cy.skipVideo();
            break;
        case "I'm happy with my body, but":
            vsSurveyPageLocators.maleGetRipped().click();
            Step(new Mocha.Context(), 'Show survey results');
            cy.url().should('contain', 'male-gr');
            cy.skipVideo();
            break;
        case "I'm not happy with my body":
            vsSurveyPageLocators.maleFatLoss().click();
            Step(new Mocha.Context(), 'Show survey results');
            cy.url().should('contain', 'male-fl');
            cy.skipVideo();
            break;
        default:
            throw new Error('Invalid selection');
    }
});

When('The Female user describes self as {string}', (selfRate: string) => {
    cy.interceptPixels('quizcompleted');
    switch (selfRate) {
        case "I'm soft. I need to lose 5 to 10 lbs":
            vsSurveyPageLocators.femaleGetToned().click();
            Step(new Mocha.Context(), 'Show survey results');
            cy.url().should('contain', 'female-gt');
            cy.skipVideo();
            break;
        case 'I have 20 lbs or more fat':
            vsSurveyPageLocators.femaleFatLoss().click();
            Step(new Mocha.Context(), 'Show survey results');
            cy.url().should('contain', 'female-fl');
            cy.skipVideo();
            break;
        case "I'm skinny. I need to add toned muscle":
            vsSurveyPageLocators.femaleSkinnyFat().click();
            Step(new Mocha.Context(), 'Show survey results');
            cy.url().should('contain', 'female-sf');
            cy.skipVideo();
            break;
        default:
            throw new Error('Invalid selection');
    }
});

When('The User describes self as {string}', (selfRate: string) => {
    cy.interceptPixels('quizcompleted');
    switch (selfRate) {
        // Female
        case "I'm soft. I need to lose 5 to 10 lbs":
            vsNewSurveyPageLocators.femaleGetToned().click();
            Step(new Mocha.Context(), 'View Survey Offer');
            cy.url().should('contain', 'female-gt');
            cy.skipVideo();
            break;
        case 'I have 20 lbs or more fat':
            vsNewSurveyPageLocators.femaleFatLoss().click();
            Step(new Mocha.Context(), 'Survey prompts to email Custom Plan');
            Step(new Mocha.Context(), 'View Survey Offer');
            Step(new Mocha.Context(), 'Show survey results');
            cy.url().should('contain', 'female-fl');
            cy.skipVideo();
            break;
        case "I'm skinny. I need to add toned muscle":
            vsNewSurveyPageLocators.femaleSkinnyFat().click();
            Step(new Mocha.Context(), 'View Survey Offer');
            Step(new Mocha.Context(), 'Show survey results');
            cy.url().should('contain', 'female-sf');
            cy.skipVideo();
            break;

        // Male
        case "I can't get bigger or gain muscle":
            vsNewSurveyPageLocators.maleHardGainer().click();
            Step(new Mocha.Context(), 'View Survey Offer');
            Step(new Mocha.Context(), 'Show survey results');
            cy.url().should('contain', 'male-cb');
            cy.skipVideo();
            break;
        case "I'm skinny fat":
            vsNewSurveyPageLocators.maleSkinnyFat().click();
            Step(new Mocha.Context(), 'View Survey Offer');
            Step(new Mocha.Context(), 'Show survey results');
            cy.url().should('contain', 'male-sf');
            cy.skipVideo();
            break;
        case "I'm happy with my body, but":
            vsNewSurveyPageLocators.maleGetRipped().click();
            Step(new Mocha.Context(), 'View Survey Offer');
            Step(new Mocha.Context(), 'Show survey results');
            cy.url().should('contain', 'male-gr');
            cy.skipVideo();
            break;
        case "I'm not happy with my body":
            vsNewSurveyPageLocators.maleFatLoss().click();
            Step(new Mocha.Context(), 'View Survey Offer');
            Step(new Mocha.Context(), 'Show survey results');
            cy.url().should('contain', 'male-fl');
            cy.skipVideo();
            break;
        default:
            throw new Error('Invalid Selection');
    }
});

When('The user starts Sculptnation survey for {string}', (gender: string) => {
    switch (gender) {
        case 'Women':
            consumerSurveyPageLocators.womenButton().click();
            break;
        case 'Men':
            consumerSurveyPageLocators.menButton().click();
            break;
        default:
            throw new Error('Invalid selection');
    }
    cy.generateRandomSurveyResponse();
});

Then('The user watches the Product Presentation', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        consumerSurveyPageLocators.watchPresentationButton().click();
        cy.skipVideo();
        cy.url().should('include', staticTestData.offerLandingPage.pageUrl);
    });
});

Then('The user verifies the Checkout form Order details', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { productDescription, productPrice, checkoutUrl } =
            staticTestData.surveyLandingPage;
        const bundledProducts = staticTestData.surveyLandingPage.productBundle;
        const prodDesc = productDescription.split(' and')[0];
        cy.url().then((checkoutPageUrl: any) => {
            const isUatProdServer =
                checkoutPageUrl.includes(`https://le-uat.vshred.com`) ||
                checkoutPageUrl.includes(`https://le-uat.sculptnation.com`);

            const isVshredOrder =
                checkoutPageUrl.includes(`/vshred-order?`) ||
                checkoutPageUrl.includes(`/vshred-ecom?`);

            if (isUatProdServer) {
                cy.visit(`${checkoutPageUrl}&qa_test=VSQAT`);
            }

            if (!isVshredOrder) {
                cy.url().should('contain', checkoutUrl);
                cy.logStep('Verify bundled products');
                cy.wrap(bundledProducts).each((bundleItem: any) => {
                    cy.contains(new RegExp(bundleItem, 'i')).should(
                        'be.visible'
                    );
                });
            }
            cy.contains(new RegExp(prodDesc, 'i')).should('be.visible');
            cy.contains(productPrice.split(' USD')[0]).should('be.visible');
        });
    });
});

Then('The user verifies the {string} URL', (button: string) => {
    switch (button) {
        case 'burn':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnUrl);
            });
            cy.skipVideo();
            break;
        case 'burn woman':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnWomanUrl);
            });
            cy.skipVideo();
            break;
        case 'burn v3':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnv3Url);
            });
            cy.skipVideo();
            break;
        case 'burn v5':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnv5Url);
            });
            break;
        case 'burn-us':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnUSUrl);
            });
            cy.skipVideo();
            break;
        case 'burnPM':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnPMUrl);
            });
            cy.skipVideo();
            break;
        case 'burnPM woman':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnPMWomanUrl);
            });
            cy.skipVideo();
            break;
        case 'VSU':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.vsuSplOfferUrl);
            });
            cy.skipVideo();
            break;
        case 'VSU woman':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.vsuSplOfferWomanUrl);
            });
            cy.skipVideo();
            break;
        case 'custom plan':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.customPlanMaleUrl);
            });
            cy.skipVideo();
            break;
        case 'special offer':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.splOfferUrl);
            });
            break;
        case 'successful order':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.purchaseURL);
            });
            break;
        case 'CDP':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should(
                    'include',
                    staticTestData.surveyLandingPage.surveyUrl
                );
            });
            break;
        case 'Ripped':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should(
                    'include',
                    staticTestData.surveyLandingPage.surveyUrl
                );
            });
            break;
        case 'greens':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.greensUrl);
            });
            break;
        case 'custom plan female':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.customPlanFemaleUrl);
            });
            cy.skipVideo();
            break;
        default:
            throw new Error(`Invalid ${button}`);
    }
});

Then('The user navigates to the Custom Coaching Plans page', () => {
    const vshredUrl = Cypress.env('LE_VSHRED_URL');
    cy.visit(`${vshredUrl}/sp/custom-diet-plan/reup`);
});

When('The user selects {string} Subscription Plan', (customPlan: string) => {
    if (customPlan === 'Monthly Custom Diet & Training') {
        customCoachingPlansPageLocators.getDietTrainingPlanButton().click();
    } else {
        customCoachingPlansPageLocators.getDietPlanButton().click();
    }
});

Given(
    'The user navigates to the SculptNation {string} Supplement Guide Page',
    (input: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { Male } = staticTestData.supplementURL;
            const { Female } = staticTestData.supplementURL;
            let URL;

            switch (input) {
                case 'Male':
                    URL = Male;
                    break;
                case 'Female':
                    URL = Female;
                    break;
                default:
                    throw new Error('Invalid selection');
            }

            cy.visit(URL);
        });
    }
);

Then('Validating the Supplements on the {string} Page', (input: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(
            `Verify the data on the supplement page for ${staticTestData.supplementTypes}`
        );
        const {
            TestBoostMaxMale,
            BurnEvolvedMale,
            HGHBoostMale,
            BurnPmMale,
            CreatineMale,
            PreWorkoutMale,
            PostWorkoutMale,
            ProteinMale,
            TurmericBlackMale,
            GreensMale,
            BCAASMale,
            NeuroctaneMale,
            FatLossStackMale,
            MuscleBuildingStackMale,
            ProbioticsMale,
            EnzymesMale,
            HGHBoost,
            BurnPm,
            BurnE,
            PreWorkout,
            PostWorkout,
            Protein,
            TurmericBlack,
            Greens,
            BCAAS,
            Neuroctane,
            FatLossStack,
            Probiotics,
            Enzymes,
        } = staticTestData.supplementTypes;
        switch (input) {
            case 'Male':
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${BurnEvolvedMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${TestBoostMaxMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${HGHBoostMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${BurnPmMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${CreatineMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${PreWorkoutMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${PostWorkoutMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${ProteinMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${TurmericBlackMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${GreensMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${BCAASMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${NeuroctaneMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${FatLossStackMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${MuscleBuildingStackMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${ProbioticsMale}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${EnzymesMale}`);
                break;
            case 'female':
                cy.logStep(
                    `Verify the data on the female supplement page for ${staticTestData.supplementTypes}`
                );
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${BurnE}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${HGHBoost}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${BurnPm}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${PreWorkout}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${PostWorkout}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${Protein}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${TurmericBlack}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${Greens}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${BCAAS}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${Neuroctane}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${FatLossStack}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${Probiotics}`);
                consumerLandingPageLocators.orderForm
                    .heading()
                    .contains(`${Enzymes}`);
                break;
            default:
                throw new Error('Invalid selection');
        }
    });
});

Then(
    'The user Validates {string} number of the videos on the {string} supplement Page',
    (input: string) => {
        /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
        for (let i = 0; i < input.length; i++) {
            consumerLandingPageLocators.jwVideo().eq(i).should('be.visible');
        }
    }
);

When('The user clicks the {string} Link on the Page', (input: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(
            `Verify the data on the Supplements landing page for ${staticTestData.supplementTypesURL}`
        );
        const {
            BurnEvolvedURL,
            TestBoostMaxURL,
            HGHBoostURL,
            BurnPmURL,
            CreatineURL,
            PreWorkoutURL,
            PostWorkoutURL,
            ProteinURL,
            TurmericBlackURL,
            GreensURL,
            BCAASURL,
            NeuroctaneURL,
            FatLossStackURL,
            MuscleBuildingStackURL,
            ProbioticsURL,
            EnzymesURL,
        } = staticTestData.supplementTypesURL;

        switch (input) {
            case 'BurnEvolved':
                cy.get(`[href="${BurnEvolvedURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', BurnEvolvedURL);
                break;
            case 'TestBoostMax':
                cy.get(`[href="${TestBoostMaxURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', TestBoostMaxURL);
                break;
            case 'HGHBoost':
                cy.get(`[href="${HGHBoostURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', HGHBoostURL);
                break;
            case 'BurnPm':
                cy.get(`[href="${BurnPmURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', BurnPmURL);
                break;
            case 'Creatine':
                cy.get(`[href="${CreatineURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', CreatineURL);
                break;
            case 'PreWorkout':
                cy.get(`[href="${PreWorkoutURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', PreWorkoutURL);
                break;
            case 'PostWorkout':
                cy.get(`[href="${PostWorkoutURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', PostWorkoutURL);
                break;
            case 'Protein':
                cy.get(`[href="${ProteinURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', ProteinURL);
                break;
            case 'TurmericBlack':
                cy.get(`[href="${TurmericBlackURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', TurmericBlackURL);
                break;
            case 'Greens':
                cy.get(`[href="${GreensURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', GreensURL);
                break;
            case 'BCAAS':
                cy.get(`[href="${BCAASURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', BCAASURL);
                break;
            case 'Neuroctane':
                cy.get(`[href="${NeuroctaneURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', NeuroctaneURL);
                break;
            case 'FatLossStack':
                cy.get(`[href="${FatLossStackURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', FatLossStackURL);
                break;
            case 'MuscleBuildingStack':
                cy.get(`[href="${MuscleBuildingStackURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', MuscleBuildingStackURL);
                break;
            case 'Probiotics':
                cy.get(`[href="${ProbioticsURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', ProbioticsURL);
                break;
            case 'Enzymes':
                cy.get(`[href="${EnzymesURL}"]`)
                    .should('be.visible')
                    .first()
                    .invoke('removeAttr', 'target')
                    .click();
                cy.url().should('include', EnzymesURL);
                break;
            default:
                throw new Error('Invalid selection');
        }
    });
});

Then('The user adds {string} to the cart', () => {
    cy.logStep(`Verifying Product is available`);

    cy.get('button').then(($btn) => {
        if ($btn.hasClass('disabled')) {
            cy.logStep(`Product is out of stock`);
        } else {
            cy.logStep(`Product is available`);
            consumerLandingPageLocators.productPage
                .subscribeNowButton()
                .click();
        }
    });
});

When('The user clicks {string} supplement on the page', (input: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { Male } = staticTestData.supplementURL;
        const { Female } = staticTestData.supplementURL;
        switch (input) {
            case 'Male':
                cy.get(`[href="${Male}"]`).should('be.visible').click();
                break;
            case 'Female':
                cy.get(`[href="${Female}"]`).should('be.visible').click();
                break;
            default:
                throw new Error('Invalid selection');
        }
    });
});

When(
    'The user Verfies the {string} Link on the {string} Supplement Page that links to Amazon',
    (input: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep(
                `Verify the data on the Supplements landing page for ${staticTestData.supplementTypesURL} Amazon links`
            );
            const {
                BurnEvolvedURL,
                HGHBoostURL,
                BurnPmURL,
                PreWorkoutURL,
                PostWorkoutURL,
                ProteinURL,
                TurmericBlackURL,
                GreensURL,
                BCAASURL,
                NeuroctaneURL,
                FatLossStackURL,
                ProbioticsURL,
                EnzymesURL,
                TestBoostMaxURL,
                CollagenURL,
                AcvGummiesURL,
                MultivitaminURL,
            } = staticTestData.supplementTypesURL;

            switch (input) {
                case 'BurnEvolved':
                    cy.get(`[href="${BurnEvolvedURL}"]`).should('be.visible');
                    break;
                case 'HGHBoost':
                    cy.get(`[href="${HGHBoostURL}"]`).should('be.visible');
                    break;
                case 'BurnPm':
                    cy.get(`[href="${BurnPmURL}"]`).should('be.visible');
                    break;
                case 'PreWorkout':
                    cy.get(`[href="${PreWorkoutURL}"]`).should('be.visible');
                    break;
                case 'PostWorkout':
                    cy.get(`[href="${PostWorkoutURL}"]`).should('be.visible');
                    break;
                case 'Protein':
                    cy.get(`[href="${ProteinURL}"]`).should('be.visible');
                    break;
                case 'TurmericBlack':
                    cy.get(`[href="${TurmericBlackURL}"]`).should('be.visible');
                    break;
                case 'Greens':
                    cy.get(`[href="${GreensURL}"]`).should('be.visible');
                    break;
                case 'BCAAS':
                    cy.get(`[href="${BCAASURL}"]`).should('be.visible');
                    break;
                case 'Neuroctane':
                    cy.get(`[href="${NeuroctaneURL}"]`).should('be.visible');
                    break;
                case 'FatLossStack':
                    cy.get(`[href="${FatLossStackURL}"]`).should('be.visible');
                    break;
                case 'TestBoostMax':
                    cy.get(`[href="${TestBoostMaxURL}"]`).should('be.visible');
                    break;
                case 'Probiotics':
                    cy.get(`[href="${ProbioticsURL}"]`).should('be.visible');
                    break;
                case 'Enzymes':
                    cy.get(`[href="${EnzymesURL}"]`).should('be.visible');
                    break;
                case 'Collagen':
                    cy.get(`[href="${CollagenURL}"]`).should('be.visible');
                    break;
                case 'AcvGummies':
                    cy.get(`[href="${AcvGummiesURL}"]`).should('be.visible');
                    break;
                case 'Multivitamin':
                    cy.get(`[href="${MultivitaminURL}"]`).should('be.visible');
                    break;
                default:
                    throw new Error('Invalid selection');
            }
        });
    }
);

When('The user selects the {string} button', (buttonName: string) => {
    switch (buttonName) {
        case 'yes CDP':
            customCoachingPlansPageLocators.yesCDPButton().click();
            break;
        case 'Yes I Want Ripped In 90 Days':
            customCoachingPlansPageLocators.yesRippedButton().click();
            break;
        case 'diet plan':
            customCoachingPlansPageLocators.dietPlanButton().click();
            break;
        case 'yes burn':
            customCoachingPlansPageLocators.yesBurnButton().click();
            break;
        case 'add to order':
            customCoachingPlansPageLocators.addtoOrderButton().click();
            break;
        case 'claim membership offer':
            customCoachingPlansPageLocators
                .claimMembershipOfferButton()
                .click();
            break;
        case 'get my greens':
            customCoachingPlansPageLocators.getMyGreensNowButton().click();
            break;
        case 'claim annual pass':
            customCoachingPlansPageLocators.claimAnnualPassButton().click();
            break;
        case 'diet and training plan':
            customCoachingPlansPageLocators.dietAndTrainingPlanButton().click();
            break;
        default:
            throw new Error('Invalid button specified');
    }
});

Then('The user clears out the session data', () => {
    cy.clearAllSessionData();
    cy.clearAllLocalStorage();
    cy.clearCookies();
    cy.clearAllCookies();
    cy.window().then((win) => {
        win.sessionStorage.clear();
    });
    Cypress.session.clearAllSavedSessions();
    cy.clearAllSessionStorage({ log: true });
});

Then(
    'The user navigates to the {string} checkout form',
    (checkoutForm: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const leVshredUrl = Cypress.env('LE_VSHRED_URL');

            cy.log(`Navigate to the ${checkoutForm} checkout form`);
            if (checkoutForm === 'VS UCP') {
                cy.visit(
                    `${leVshredUrl}${staticTestData.offerLandingPage.checkoutUrl}`
                );
            } else {
                cy.visit(staticTestData.offerLandingPage.checkoutUrl);
            }
        });
    }
);

Given('The user navigates to VShred landing page', () => {
    cy.clearAllSessionData();
    cy.visit(Cypress.env('VS_ADMIN_URL'));
});

Given('The user browse All Programs', () => {
    cy.log('Check if current running window is a mobile viewport');
    cy.window().then((win) => {
        const width = win.innerWidth;
        if (width <= 786) {
            consumerHeaderFooterPageLocators.mobileMenuIcon().click();
            consumerSurveyPageLocators.vshredLandingPage.mobileMenuList
                .mobilePrograms()
                .click();
        } else {
            consumerSurveyPageLocators.vshredLandingPage.menuList
                .programs()
                .click();
        }
    });
    cy.url().should('contain', 'programs');
});

When('The user starts V Shred Quiz for {string}', (gender: string) => {
    switch (gender) {
        case 'Female':
        case 'Woman':
            consumerSurveyPageLocators.vshredLandingPage
                .femaleButtonQuiz()
                .click();
            Step(
                new Mocha.Context(),
                'The user starts new Survey GA Funnel for "Female"'
            );
            break;

        case 'Male':
        case 'Man':
            consumerSurveyPageLocators.vshredLandingPage
                .maleButtonQuiz()
                .click();
            Step(
                new Mocha.Context(),
                'The user starts new Survey GA Funnel for "Male"'
            );
            break;
        default:
            throw new Error('Invalid selection');
    }
});

When('The user selects VShred {string} Program', (programTitle: string) => {
    cy.selectVsProgram(programTitle);
});

When('has a dataLayer and loads GTM', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.visit(staticTestData.pages.home);
        cy.get('.product-name').should('be.visible');

        cy.window().then((window) => {
            const { dataLayer } = window;
            cy.log(dataLayer);
            assert.isDefined(window.dataLayer, 'window.dataLayer is defined');

            assert.isDefined(
                window.dataLayer.find(
                    (x: { event: string }) => x.event === 'gtm.js'
                ),
                'GTM is loaded'
            );
        });
    });
});

Then('Before - stub ga', () => {
    cy.logStep(`Before - stub ga`);

    Cypress.on('window:before:load', (win) => {
        /* eslint-disable no-param-reassign */
        win.ga = cy.stub().as('ga');
    });
});

When('Homepage has a pageview and ecommerce impression hit', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(`Homepage has a pageview and ecommerce impression hit`);

        cy.visit(staticTestData.pages.home);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000);

        cy.get('@ga')
            // ensure GA was created with our google analytics ID
            .should('be.calledWith', 'create', staticTestData.gaTrackerId)
            // and ensure that the initial pageview was set
            .and('be.calledWithMatch', /.+set/)
            // and make sure that there's ecommerce impression hit
            .and('be.calledWithMatch', /.+ec:addProduct/);
    });
});

Then('Go to product detail page, add to cart, go to checkout', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(`add to cart, go to checkout`);

        cy.visit(staticTestData.pages.home);
        consumerSurveyPageLocators
            .cartLocator()
            .contains(staticTestData.addToCart)
            .click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000);

        cy.window().then((window) => {
            const { dataLayer } = window;
            const str = JSON.stringify(dataLayer[2]);
            const strSplit = str.split(',');
            const holder = strSplit[0];
            const srtSplitTwo = holder.split(':');
            const eeAddToCart = srtSplitTwo[1]; // EEaddToCart
            expect(eeAddToCart).to.equal('"EEaddToCart"');
        });
    });
});

When('The user scrolls to the Video container page section', () => {
    consumerSurveyPageLocators.vshredLandingPage.videoContainerSection
        .videoTitles()
        .scrollIntoView()
        .should('be.visible');
});

When('The user clicks the video image {string}', (videoImage: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { videoUrl } = staticTestData.videoReference;
        switch (videoImage.toLowerCase()) {
            case 'hormone killing metabolism':
                consumerSurveyPageLocators.vshredLandingPage.videoContainerSection
                    .hormoneKillingMetabolismImage()
                    .click({ force: true });
                break;
            case 'shedding fat':
                consumerSurveyPageLocators.vshredLandingPage.videoContainerSection
                    .sheddingFatImage()
                    .click({ force: true });
                break;
            case '20 minutes':
                consumerSurveyPageLocators.vshredLandingPage.videoContainerSection
                    .setMetabolismAblazeImage()
                    .click({ force: true });
                break;
            case 'get diet & training':
                consumerSurveyPageLocators.vshredLandingPage.videoContainerSection
                    .getDietAndTrainingImage()
                    .click();
                break;
            default:
                throw new Error('Selected video link is not yet supported');
        }
        cy.url().should('include', videoUrl);
    });
});
Then('The user plays the vidalytics product video', () => {
    videoControlsLocators.vidalyticsPlayVideo().last().click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000);
    videoControlsLocators.vidalyticsPauseVideo().click({ force: true });
    cy.skipVideo();
});

Then('The user skips the product video', () => {
    cy.logStep('The user skips the product video');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000); // wait for the video to load
    cy.skipVideo();
});

Then('Verifies the video loads properly', () => {
    cy.get('body').then(($body) => {
        if ($body.find('button.watch-video:visible').length > 0) {
            videoControlsLocators.watchVideoButton().click();
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(10000);
        } else {
            Step(new Mocha.Context(), 'The user starts the video');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(10000);
            Step(new Mocha.Context(), 'The user pauses the video');
        }
        Step(new Mocha.Context(), 'The user skips the video');
    });
});

Then('The User verifies the Order Summary - {string}', (orderList: any) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const funnelOrders = staticTestData[`${orderList}`];
        const bundledProducts = staticTestData.surveyLandingPage.productBundle;
        const clientEmail = dynamicTestData.userEmail;

        consumerLandingPageLocators.orderConformation
            .clientEmail()
            .should('contain', clientEmail);

        funnelOrders.forEach((orderItem: any) => {
            consumerLandingPageLocators.orderConformation
                .orderItems(orderItem)
                .should('be.visible');
        });
        cy.wrap(bundledProducts).each((bundleItem: any) => {
            cy.contains(bundleItem).should('be.visible');
        });
    });
});

Then('The user fills out VS shipping order form', () => {
    cy.filloutVsShippingForm();
});

Then(
    /^Verifies CDP Questionnaire button is "(Visible|Not Visible)"$/,
    (cdpStatus: string) => {
        if (cdpStatus.toLowerCase() === 'not visible') {
            cy.logStep('Questionnaire Button is Not Visible');
        } else {
            cy.get('body').then(($body) => {
                if ($body.find('button#questionnaire:visible').length > 0) {
                    if ($body.find('h4.modal-title:visible').length > 0) {
                        consumerLandingPageLocators.orderConformation
                            .questionnaireButton()
                            .should('be.visible')
                            .and('be.enabled');
                    }
                }
            });
        }
    }
);

Given('The user starts on vshred {string} program page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.visit(
            `${
                Cypress.env('VS_ADMIN_URL') +
                staticTestData.surveyLandingPage.landingPage
            }`
        );
    });
});

Given(
    'The user starts on {string} {string} page',
    (programName: string, pageName: string) => {
        cy.logStep(`Navigating to ${pageName}`);

        cy.get('@staticTestData').then((staticTestData: any) => {
            const urls: Record<string, string> = {
                VShred: Cypress.env('VS_ADMIN_URL'),
                'LE VShred': `${Cypress.env('LE_VSHRED_URL')}${
                    staticTestData.LandingPage.fullurl
                }`,
                'LE VShredmd': `${'https://le.vshredmd.com/'}${staticTestData.LandingPage.fullurl}`,
            };

            // Default to staticTestData.LandingPage.fullurl if programName isn't in the list
            const targetUrl =
                urls[programName] || staticTestData.LandingPage.fullurl;

            cy.visit(targetUrl);
        });
    }
);

Then('The user begins the muscle building survey', () => {
    let clickCount = 0;
    const maxClicks = 4;

    const clickButtonIfVisible = () => {
        if (clickCount < maxClicks) {
            consumerSurveyPageLocators.snLandingPage.muscleBuildSurvey
                .BuildMuscleYes()
                .then(($button) => {
                    if ($button.is(':visible')) {
                        cy.wrap($button).click();
                        clickCount += 1; // Increment clickCount by 1
                        clickButtonIfVisible(); // Recursively call the function
                    }
                });
        }
    };

    clickButtonIfVisible();
});

When(
    /^The user is in the "(Male|Female)" "(Overweight|Soft|Slim|Skinny|Clean Bulk|Ripped In 90 Days 57|Ripped In 90 Days 67|Fat Loss|Get Toned)" funnel page$/,
    (gender: string, funnelName: string) => {
        cy.logStep(`Navigating to ${gender} ${funnelName}`);

        cy.clearAllSessionData();

        cy.get('@staticTestData').then((staticTestData: any) => {
            let funnelUrl = '';

            switch (funnelName.toLowerCase()) {
                case 'overweight':
                    funnelUrl = staticTestData.funnelUrls.Overweight;
                    break;
                case 'soft':
                    funnelUrl = staticTestData.funnelUrls.Soft;
                    break;
                case 'slim':
                    funnelUrl = staticTestData.funnelUrls.Slim;
                    break;
                case 'skinny':
                    funnelUrl = staticTestData.funnelUrls.Skinny;
                    break;
                case 'clean bulk':
                    funnelUrl = staticTestData.funnelUrls.CleanBulk;
                    break;
                case 'ripped in 90 days 57':
                    funnelUrl = staticTestData.funnelUrls.RippedIn90Days57;
                    break;
                case 'ripped in 90 days 67':
                    funnelUrl = staticTestData.funnelUrls.RippedIn90Days67;
                    break;
                case 'fat loss':
                    funnelUrl = staticTestData.funnelUrls.FatLoss;
                    break;
                case 'get toned':
                    funnelUrl = staticTestData.funnelUrls.GetToned;
                    break;
                default:
                    Error(`Invalid button ${funnelName}`);
            }
            cy.visit(`${Cypress.env('LE_VSHRED_URL')}${funnelUrl}`);
        });
        cy.url().then((checkoutUrl: any) => {
            const isProdServer =
                checkoutUrl.includes(`https://le.vshred.com`) ||
                checkoutUrl.includes(`https://vshred.com`) ||
                checkoutUrl.includes(`https://le.vshredmd.com`) ||
                checkoutUrl.includes(`https://sculptnation.com`);

            if (isProdServer) {
                cy.visit(`${checkoutUrl}&qa_test=VSQAT`);
            }
        });
    }
);

Then(
    /^The user fills in the fields on the survey page without entering "(data|name|email|phone|address|city|state|postal|card number|expiration month|expiration year|expiration date|cvv|card postal)"$/,
    (missingData: string) => {
        cy.url().then((checkoutUrl: any) => {
            if (checkoutUrl.includes('/checkout-fle?')) {
                cy.filloutFLEFormWithMissingValues(missingData);
            } else {
                cy.filloutFastCheckoutFormWithMissingValues(missingData);
            }
        });
    }
);

Then(
    /^Verify that "(all|no name|no email|no phone|no address|no city|no state|no postal|no card number|no expire month|no expire year|no expire date|no cvv|no payment postal)" error message displays$/,
    (error: string) => {
        cy.url().then((checkoutUrl: any) => {
            if (checkoutUrl.includes('/checkout-fle?')) {
                cy.checkFunnelErrorMessage(
                    error,
                    consumerLandingPageLocators.checkoutFle
                );
            } else {
                cy.checkFunnelErrorMessage(
                    error,
                    consumerLandingPageLocators.fastCheckoutV2
                );
            }
        });
    }
);

Then(
    'The user fills in the fields on the Secure Checkout page and places the order',
    () => {
        cy.logStep('Fillout SN Fast Checkout form');
        cy.generateRandomTestEmail().then((randomEmail) => {
            dynamicTestData.userEmail = randomEmail;
            dynamicTestData.userPassword = Math.floor(
                Math.random() * 9000000000 + 1000000000
            ).toString();
            cy.get('@staticTestData').then((staticTestData: any) => {
                const {
                    clientName,
                    phone,
                    streetAddress,
                    city,
                    state,
                    country,
                    postcode,
                    shippingOption,
                } = staticTestData;

                cy.url().then((checkoutUrl: any) => {
                    const isProdServer =
                        checkoutUrl.includes(`https://le.vshred.com`) ||
                        checkoutUrl.includes(`https://vshred.com`) ||
                        checkoutUrl.includes(`https://le.vshredmd.com`) ||
                        checkoutUrl.includes(`https://sculptnation.com`);

                    if (isProdServer) {
                        cy.visit(`${checkoutUrl}&qa_test=VSQAT`);
                    }
                });

                cy.intercept('GET', '/api/location-check/**').as('getState');
                cy.intercept('POST', '/api/cart/shipping-categories/*').as(
                    'postShipping'
                );
                cy.intercept('POST', '/api/cart/pay').as('orderPlaced');

                cy.logStep('Fill out contact and billing information');
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .clientName()
                    .type(clientName);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .emailAddress()
                    .type(randomEmail);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .phone()
                    .type(phone);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .addressLine1()
                    .type(streetAddress);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .country()
                    .select(country);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .city()
                    .type(city);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .state()
                    .select(state);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .postal()
                    .type(postcode);

                consumerLandingPageLocators.fastCheckoutV2
                    .nextStep1Btn()
                    .click();
                // cy.wait('@getState');

                cy.logStep('Fill in payment information');
                consumerLandingPageLocators.fastCheckoutV2.paymentInformation
                    .creditCardNumber()
                    .type(Cypress.env('CREDIT_CARD_NUMBER'));
                consumerLandingPageLocators.fastCheckoutV2.paymentInformation
                    .expirationMonth()
                    .type(Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'));
                consumerLandingPageLocators.fastCheckoutV2.paymentInformation
                    .expirationYear()
                    .type(Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'));
                consumerLandingPageLocators.fastCheckoutV2.paymentInformation
                    .securityCode()
                    .type(Cypress.env('CREDIT_CARD_CVV'));
                consumerLandingPageLocators.fastCheckoutV2.paymentInformation
                    .postalCode()
                    .type(postcode);
                consumerLandingPageLocators.fastCheckoutV2
                    .paymentNextBtn()
                    .click();

                cy.logStep('Select Shipping Method');
                if (shippingOption === 'FREE Shipping Special!') {
                    consumerLandingPageLocators.fastCheckoutV2.shippingMethod
                        .freeShippingSpecial()
                        .click();
                } else {
                    consumerLandingPageLocators.fastCheckoutV2.shippingMethod
                        .priorityFlatRate()
                        .click();
                }
                cy.logStep('Submit Order');
                consumerLandingPageLocators.fastCheckoutV2
                    .submitOrderBtnCC()
                    .click();
            });
        });
    }
);

Then(
    'The user fills in the fields on the SN Secure Checkout page and places the order',
    () => {
        cy.logStep('Fillout SN Fast Checkout form');
        cy.generateRandomTestEmail().then((randomEmail) => {
            dynamicTestData.userEmail = randomEmail;
            dynamicTestData.userPassword = Math.floor(
                Math.random() * 9000000000 + 1000000000
            ).toString();
            cy.get('@staticTestData').then((staticTestData: any) => {
                const {
                    clientName,
                    phone,
                    streetAddress,
                    city,
                    state,
                    country,
                    postcode,
                } = staticTestData;

                cy.url().then((checkoutUrl: any) => {
                    const isProdServer =
                        checkoutUrl.includes(`https://le.vshred.com`) ||
                        checkoutUrl.includes(`https://vshred.com`) ||
                        checkoutUrl.includes(`https://le.vshredmd.com`) ||
                        checkoutUrl.includes(`https://sculptnation.com`);

                    if (isProdServer) {
                        cy.visit(`${checkoutUrl}&qa_test=VSQAT`);
                    }
                    const isUatServer =
                        checkoutUrl.includes(`https://le-uat.vshred.com`) ||
                        checkoutUrl.includes(`https://uat.vshred.com/`) ||
                        checkoutUrl.includes(`https://le-uat.sculptnation.com`);

                    if (isUatServer) {
                        cy.visit(`${checkoutUrl}&qa_test=VSQAT`);
                    }
                });

                cy.intercept('GET', '/api/location-check/**').as('getState');
                cy.intercept('POST', '/api/cart/shipping-categories/*').as(
                    'postShipping'
                );
                cy.intercept('POST', '/api/cart/pay').as('orderPlaced');

                cy.logStep('Fill out contact and billing information');
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .clientName()
                    .type(clientName);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .emailAddress()
                    .type(randomEmail);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .phone()
                    .type(phone);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .addressLine1()
                    .type(streetAddress);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .country()
                    .select(country);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .city()
                    .type(city);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .state()
                    .select(state);
                consumerLandingPageLocators.fastCheckoutV2.contactInformation
                    .postal()
                    .type(postcode);

                consumerLandingPageLocators.fastCheckoutV2
                    .nextStep1Btn()
                    .click();
                cy.wait('@getState');

                cy.logStep('Fill in payment information');
                consumerLandingPageLocators.fastCheckoutV2.paymentInformation
                    .creditCardNumber()
                    .type(Cypress.env('CREDIT_CARD_NUMBER'));
                consumerLandingPageLocators.fastCheckoutV2.paymentInformation
                    .expirationMonth()
                    .type(Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'));
                consumerLandingPageLocators.fastCheckoutV2.paymentInformation
                    .expirationYear()
                    .type(Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'));
                consumerLandingPageLocators.fastCheckoutV2.paymentInformation
                    .securityCode()
                    .type(Cypress.env('CREDIT_CARD_CVV'));
                consumerLandingPageLocators.fastCheckoutV2.paymentInformation
                    .postalCode()
                    .type(postcode);
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(2000);
                consumerLandingPageLocators.fastCheckoutV2
                    .paymentNextBtn()
                    .click();

                cy.logStep('Submit Order');
                consumerLandingPageLocators.surveyOrderForm
                    .submitOrderButton()
                    .click();
            });
        });
    }
);

Then(
    'The user fills in the fields on a SN Secure Checkout page and places the order',
    () => {
        cy.logStep('Fillout SN Fast Checkout form');
        cy.generateRandomTestEmail().then((randomEmail) => {
            dynamicTestData.userEmail = randomEmail;
            dynamicTestData.userPassword = Math.floor(
                Math.random() * 9000000000 + 1000000000
            ).toString();
            cy.checkOrderForm(
                dynamicTestData.userEmail,
                dynamicTestData.userPassword
            );
        });
    }
);

Then('The user verifies the checkout form type and makes purchase', () => {
    cy.url().then((checkoutUrl: any) => {
        if (checkoutUrl.includes(`/sn-checkout?`)) {
            cy.logStep('Fill out Secure checkout form');
            Step(
                new Mocha.Context(),
                'The user fills in the fields on the Secure Checkout page and places the order'
            );
        } else if (checkoutUrl.includes(`/order-vs-nb?`)) {
            cy.logStep('Fill out SN checkout form');
            Step(
                new Mocha.Context(),
                'The user fills out the funnel order form'
            );
        }
    });
});

Then('The user clicks the add to order on the upsell upgrade page', () => {
    consumerLandingPageLocators.productPage
        .upgradeOfferButton()
        .scrollIntoView()
        .should('be.visible')
        .click();
});

When(
    'The Checkout Offer details displays - {string}',
    (bundleOfferTitle: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const matchOffer: any = Object.values(
                staticTestData.checkoutOffers
            ).find(
                (offer: any) =>
                    offer.offerTitle.toLowerCase() ===
                    bundleOfferTitle.toLowerCase()
            );
            cy.logStep('Match Found');
            if (matchOffer) {
                const { checkoutUrl, offerTitle, offerPrice } = matchOffer;
                const offerName = offerTitle.split(' and')[0];
                cy.log(matchOffer);
                cy.url().should('contain', checkoutUrl);
                cy.get('body').then(($mobileOrderSummary) => {
                    if (
                        $mobileOrderSummary
                            .text()
                            .includes('Show full order summary')
                    ) {
                        consumerLandingPageLocators
                            .mobileOrderSummaryButton()
                            .click();
                    }
                });
                cy.contains(new RegExp(offerName, 'i'))
                    .should('be.visible')
                    .then(() => {
                        cy.log(`Checkout Offer: ${offerTitle}`);
                        cy.contains(offerPrice.split(' USD')[0])
                            .should('be.visible')
                            .then(() => {
                                cy.log(`Offer Price: ${offerPrice}`);
                            });
                    });
            }
        });
    }
);

When('The user selects {string} option', (bottleOption: string) => {
    switch (bottleOption) {
        case '1 Bottle':
            consumerLandingPageLocators.verticalPackageButtons
                .oneBottle()
                .first()
                .parent()
                .click({ force: true });
            break;
        case '6 Bottles':
            consumerLandingPageLocators.verticalPackageButtons
                .sixBottles()
                .first()
                .parent()
                .click({ force: true });
            break;
        default:
            consumerLandingPageLocators.verticalPackageButtons
                .threeBottles()
                .first()
                .parent()
                .click({ force: true });
    }
    consumerLandingPageLocators.addToCartButton().first().click();
});

Then('The user verifies the next upsell is {string}', (productName: string) => {
    cy.url().should('contain', `/${productName}`);
});

When(
    'User select {string} to decline the {string} Special Offer',
    (declineText: string, offerName: string) => {
        cy.url().should('include', offerName.toLowerCase());
        cy.skipVideo();
        if (declineText.includes('No Thanks Pass')) {
            consumerLandingPageLocators.specialOfferProductPage
                .noThanksIllPassBerberine()
                .scrollIntoView()
                .should('be.visible')
                .click();
        } else if (declineText.includes(`No`)) {
            consumerLandingPageLocators.specialOfferProductPage
                .noThanksBerberine()
                .scrollIntoView()
                .should('be.visible')
                .click();
        } else {
            consumerLandingPageLocators.specialOfferProductPage
                .declineOfferLink()
                .scrollIntoView()
                .should('be.visible')
                .click();
        }
    }
);

When(
    'User select {string} to accept the {string} Special Offer',
    (acceptText: string, offerName: string) => {
        cy.url().should('include', offerName.toLowerCase());
        cy.skipVideo();
        if (acceptText.includes('Yes')) {
            consumerLandingPageLocators.specialOfferProductPage
                .YesGetFourMonthsBerberine()
                .scrollIntoView()
                .should('be.visible')
                .click();
        } else if (acceptText.includes(`Upgrade`)) {
            consumerLandingPageLocators.specialOfferProductPage
                .YesUpgrade()
                .scrollIntoView()
                .should('be.visible')
                .click();
        } else if (acceptText.includes(`Stock up`)) {
            consumerLandingPageLocators.specialOfferProductPage
                .StockUp()
                .scrollIntoView()
                .should('be.visible')
                .click();
        } else {
            consumerLandingPageLocators.specialOfferProductPage
                .StockUp()
                .scrollIntoView()
                .should('be.visible')
                .click();
        }
    }
);

Then('Validates the data on the berberine landing page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(
            `Verify the data on the product landing page for ${staticTestData.productLandingPage.productName}`
        );
        consumerLandingPageLocators.productPage.get53off().click();
        consumerLandingPageLocators.orderForm
            .price()
            .should(
                'contain',
                staticTestData.productLandingPage.oneBottlePrice
            );
    });
});

Then('Validates the data on the SculptNation Login page', () => {
    cy.logStep(
        `Verify the data on the landing page for SculptNation Login page`
    );
    cy.url().should('include', 'login');
    consumerLandingPageLocators.productPage
        .classHeader()
        .should('contain', 'Login');
});

Then('Fills out Adyen Checkout Page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(`Fills out Adyen Checkout form`);
        cy.adyenCheckout(
            staticTestData.email,
            staticTestData.fullName,
            staticTestData.address,
            staticTestData.city,
            staticTestData.postalCode,
            staticTestData.phone
        );
    });
});

Then('The user clicks the skyrocket my manhood button', () => {
    consumerLandingPageLocators.productPage.skyrocketMyManhoodButton().click();
});

Then('Connects to LE Blue Production Server', () => {
    const targetUrl = 'https://le.vshred.com/'; // Production URLs
    cy.visit(targetUrl);
    cy.request({
        method: 'GET',
        url: 'https://le.vshred.com/',
        headers: {
            'x-canary': 'blue',
            'User-Agent': 'Cypress/1.0 (Test Environment)',
        },
    }).then((response) => {
        // Basic validation (you can add more based on what you want to verify)
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property('x-server-name');
        expect(response.headers['x-server-name']).to.match(
            /^le-production-blue/
        );
        // log headers or body for inspection
        cy.log('Response Headers:', JSON.stringify(response.headers));
    });
});

Then('Connects to SN Blue Production Server', () => {
    const targetUrl = 'https://sculptnation.com/'; // Production URLs
    cy.visit(targetUrl);
    cy.request({
        method: 'GET',
        url: 'https://le.vshred.com/',
        headers: {
            'x-canary': 'blue',
            'User-Agent': 'Cypress/1.0 (Test Environment)',
        },
    }).then((response) => {
        // Basic validation (you can add more based on what you want to verify)
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property('x-server-name');
        expect(response.headers['x-server-name']).to.match(
            /^le-production-blue/
        );
        // log headers or body for inspection
        cy.log('Response Headers:', JSON.stringify(response.headers));
    });
});

Then('Connects to LE Orange Production Server', () => {
    const targetUrl = 'https://le.vshred.com/'; // Production URLs
    cy.visit(targetUrl);
    cy.request({
        method: 'GET',
        url: 'https://le.vshred.com/',
        headers: {
            'x-canary': 'orange',
            'User-Agent': 'Cypress/1.0 (Test Environment)',
        },
    }).then((response) => {
        // Basic validation (you can add more based on what you want to verify)
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property('x-server-name');
        expect(response.headers['x-server-name']).to.match(
            /^le-production-orange/
        );
        // log headers or body for inspection
        cy.log('Response Headers:', JSON.stringify(response.headers));
    });
});

Then('Connects to SN Orange Production Server', () => {
    const targetUrl = 'https://sculptnation.com/'; // Production URLs
    cy.visit(targetUrl);
    cy.request({
        method: 'GET',
        url: 'https://le.vshred.com/',
        headers: {
            'x-canary': 'orange',
            'User-Agent': 'Cypress/1.0 (Test Environment)',
        },
    }).then((response) => {
        // Basic validation (you can add more based on what you want to verify)
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property('x-server-name');
        expect(response.headers['x-server-name']).to.match(
            /^le-production-orange/
        );
        // log headers or body for inspection
        cy.log('Response Headers:', JSON.stringify(response.headers));
    });
});

Then('Connects to LE Green Production Server', () => {
    const targetUrl = 'https://le.vshred.com/'; // Production URLs
    cy.visit(targetUrl);
    cy.request({
        method: 'GET',
        url: 'https://le.vshred.com/',
        headers: {
            'x-canary': 'green',
            'User-Agent': 'Cypress/1.0 (Test Environment)',
        },
    }).then((response) => {
        // Basic validation (you can add more based on what you want to verify)
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property('x-server-name');
        expect(response.headers['x-server-name']).to.match(/^le-production/);
        // log headers or body for inspection
        cy.log('Response Headers:', JSON.stringify(response.headers));
    });
});

Then('Connects to SN Green Production Server', () => {
    const targetUrl = 'https://sculptnation.com/'; // Production URLs
    cy.visit(targetUrl);
    cy.request({
        method: 'GET',
        url: 'https://le.vshred.com/',
        headers: {
            'x-canary': 'green',
            'User-Agent': 'Cypress/1.0 (Test Environment)',
        },
    }).then((response) => {
        // Basic validation (you can add more based on what you want to verify)
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property('x-server-name');
        expect(response.headers['x-server-name']).to.match(/^le-production/);
        // log headers or body for inspection
        cy.log('Response Headers:', JSON.stringify(response.headers));
    });
});
