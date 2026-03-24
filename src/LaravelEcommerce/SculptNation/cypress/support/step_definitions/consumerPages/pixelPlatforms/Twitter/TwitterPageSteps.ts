/// <reference types="cypress" />
import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { consumerLandingPageLocators } from '../../../../locator_libraries';


When(
    'The user begins tracking and navigates to V Shred Survey {string} - Twitter',
    (endpoint: string) => {
        cy.clearAllSessionData();
        cy.get('@staticTestData').then((staticTestData: any) => {
            // === declare variables ====
            const vsIntPixelId = staticTestData.vshredPixelDetail.internal;
            // const vsKenPixelId = staticTestData.vshredPixelDetail.kendago;
            let surveyUrl;

            // === intercept pixel ids ===
            cy.intercept(`**txn_id=${vsIntPixelId}**`).as(
                'vsIntRequestTwitter'
            );
            cy.interceptPixels('pageview');
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

Then('The user starts tracking for twitter event {string}', (event: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(`Start Tracking`);
        const vsIntPixelId = staticTestData.vshredPixelDetail.internal;
        const vsKenPixelId = staticTestData.vshredPixelDetail.kendago;
        cy.intercept(`**tr/?id=${vsIntPixelId}**`).as('vsIntRequest');
        cy.intercept(`**tr/?id=${vsKenPixelId}**`).as('vsKenRequest');

        switch (event) {
            case 'pageview':
                cy.interceptPixels('pageview');
                break;
            case 'quizcompleted':
                cy.interceptPixels('quizcompleted');
                break;
            case 'addtocart':
                cy.interceptPixels('addtocart');
                break;
            case 'purchase':
                cy.interceptPixels('purchase');
                break;
            default:
                throw new Error('Invalid event provided');
        }
    });
});

// Then('The user starts tracking and adds {string} to cart for twitter', () => { <--------------------reserve for future use
//     cy.get('@staticTestData').then((staticTestData: any) => {
//         cy.logStep(`Start Tracking`);
//         cy.intercept('GET', staticTestData.tracking_url, (req) => {
//             trackingRequestsFB.push(req); // Store each request in the array
//             req.reply(); // Continue with the request
//         }).as('tracking_requestfb'); // store the requests into this alias

//         // ==== Begin adding product to cart ====
//         cy.logStep(`Add product to cart`);
//         // Add product to cart
//         consumerLandingPageLocators.productPage
//             .addToCartThreeBottleButton()
//             .should('be.visible')
//             .click();
//         // proceed to checkout
//         consumerLandingPageLocators.cartPage
//             .proceedToCheckoutButton()
//             .should('be.visible')
//             .click();
//         // assert at checkout page
//         cy.url().should('contain', 'checkout');
//         // eslint-disable-next-line
//         cy.wait(5000); // wait for initiateCheckout to be sent - Or else will fail.
//     });
// });
