/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import vshredmdLocators from '../../locator_libraries/vshredMd/vshredmdLocator';
import consumerLandingPageLocators from '../../locator_libraries/consumerPages/consumerLandingPageLocators';

Then('The user subscribes to the bottle and verifies cart on vshredmd', () => {
    cy.skipVideo();
    vshredmdLocators.subscribeNowButton().click();
    cy.get('@staticTestData').then((staticTestData: any) => {
        vshredmdLocators.cartPage
            .cartItem()
            .should(
                'have.text',
                `${staticTestData.cartInfo.subscription.productName}`
            );
        vshredmdLocators.cartPage
            .price()
            .should(
                'have.text',
                `${staticTestData.cartInfo.subscription.price}`
            );
    });
});

Then(
    'The user clicks the Add To Cart button on vshredmd under the {string} bottle option',
    (cartNumber: string) => {
        cy.logStep(`Clicks the add to cart under the bottle`);
        cy.skipVideo();
        cy.get('@staticTestData').then((staticTestData: any) => {
            if (cartNumber === 'One') {
                vshredmdLocators.oneBottle().click();
                vshredmdLocators.addToCart().eq(0).click();
                vshredmdLocators.cartPage
                    .cartItem()
                    .should(
                        'have.text',
                        `${staticTestData.cartInfo.one.productName}`
                    );
            }
            if (cartNumber === 'Three') {
                vshredmdLocators.addToCart().eq(1).click();
                vshredmdLocators.cartPage
                    .cartItem()
                    .should(
                        'have.text',
                        `${staticTestData.cartInfo.three.productName}`
                    );
            }
            if (cartNumber === 'Six') {
                vshredmdLocators.addToCart().eq(2).click();
                vshredmdLocators.cartPage
                    .cartItem()
                    .should(
                        'have.text',
                        `${staticTestData.cartInfo.six.productName}`
                    );
            }
        });
    }
);

Then('The user verifies vshredmd Thank You Page', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);

    vshredmdLocators
        .thankYouTitle()
        .should('be.visible')
        .should('contain.text', 'Thank You For Your Order!');
    vshredmdLocators
        .thankYouText()
        .should('be.visible')
        .should('contain.text', 'Your product is on its way and will land');
});

Then('The user verifies nr funnel page', () => {
    cy.skipVideo();
    vshredmdLocators.upgrade().should('be.visible');
});

Then(
    /^The User "(One|Three|Six|Subscribes|Declines)" the vshredmd "([^"]*)" Funnel Offer$/,
    (selectOption: string) => {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(3000);

        cy.interceptPixels('purchase');
        cy.fixture(`customData/productOfferList.json`).as('offerList');
        cy.skipVideo();

        switch (selectOption) {
            case 'Declines':
                consumerLandingPageLocators.productPage
                    .declineLink()
                    .invoke('css', 'display', 'block')
                    .scrollIntoView()
                    .should('be.visible')
                    .click({ force: true });
                break;
            case 'One':
                vshredmdLocators.oneBottle().click();
                vshredmdLocators
                    .addToCart()
                    .eq(0)
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
                break;
            case 'Three':
                vshredmdLocators
                    .addToCart()
                    .eq(1)
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
                break;
            case 'Six':
                vshredmdLocators
                    .addToCart()
                    .eq(2)
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
                break;
            case 'Subscribes':
                vshredmdLocators
                    .subscribeNowButton()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
                break;
            default:
                throw new Error('Invalid Selection');
        }
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(5000);
    }
);
