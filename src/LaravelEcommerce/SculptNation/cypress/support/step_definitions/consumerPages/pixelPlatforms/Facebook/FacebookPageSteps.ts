/// <reference types="cypress" />
import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { consumerLandingPageLocators } from '../../../../locator_libraries';

const trackingRequestsFB: any[] = []; // This array needs to be declared here to be accessible to all tests

Then('The user starts tracking for facebook', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(`Start Tracking`);
        const vsIntPixelId = staticTestData.vshredPixelDetail.internal;
        const vsKenPixelId = staticTestData.vshredPixelDetail.kendago;
        cy.intercept('GET', staticTestData.tracking_url, (req) => {
            trackingRequestsFB.push(req); // Store each request in the array
            req.reply(); // Continue with the request
        }).as('tracking_requestfb'); // store the requests into this alias
        cy.intercept(`**tr/?id=${vsIntPixelId}**`).as('vsIntRequest');
        cy.intercept(`**tr/?id=${vsKenPixelId}**`).as('vsKenRequest');
    });
});

Then('The user starts tracking and adds {string} to cart for facebook', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(`Start Tracking`);
        cy.intercept('GET', staticTestData.tracking_url, (req) => {
            trackingRequestsFB.push(req); // Store each request in the array
            req.reply(); // Continue with the request
        }).as('tracking_requestfb'); // store the requests into this alias

        // ==== Begin adding product to cart ====
        cy.logStep(`Add product to cart`);
        // Add product to cart
        consumerLandingPageLocators.productPage
            .addToCartThreeBottleButton()
            .should('be.visible')
            .click();
        // proceed to checkout
        consumerLandingPageLocators.cartPage
            .proceedToCheckoutButton()
            .should('be.visible')
            .click();
        // assert at checkout page
        cy.url().should('contain', 'checkout');
        // eslint-disable-next-line
        cy.wait(5000); // wait for initiateCheckout to be sent - Or else will fail.
    });
});

Then(
    'Verify facebook events and ID for event - {string} for {string}',
    (event: string, platform: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep(
                `Verify the event and event ID in any request for ${platform}`
            );
            // cy.logStep(`Number of tracking requests captured: ${trackingRequestsFB.length}`); // LOG - Only use for debugging
            // cy.logStep(`Contents of Tracking Request: ${JSON.stringify(trackingRequestsFB, null, 2)}`); // LOG - Only use for debugging

            cy.logStep(`Verify string in request`); // Some Facebook events trigger later after the page has loaded
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(5000);

            // add step that verifies string in request
            cy.logStep(`Verify string in request`);

            cy.wait('@tracking_requestfb').then(() => {
                //  ======   declare variables here  ======
                const { initiateCheckout } = staticTestData.event;
                const { addtocart } = staticTestData.event;
                const { purchase } = staticTestData.event;
                const { quizComplete } = staticTestData.event;
                const { upsell } = staticTestData.event;
                const { sninternal } = staticTestData.sculptNationPixelDetail;
                const { snkendago } = staticTestData.sculptNationPixelDetail;
                const { vsinternal } = staticTestData.vshredPixelDetail;
                const { vskendago } = staticTestData.vshredPixelDetail;
                let event1Found = false; // ==> (containsEvent1) initiateCheckout
                let event2Found = false; // ==> (containsEvent2) addtocart
                let event3Found = false; // ==> (containsEvent3) purchase
                let event4Found = false; // ==> (containsEvent4) quizComplete
                let event5Found = false; // ==> (containsEvent5) upsell
                let id1Found = false; // ==> (containsID1) internal
                let id2Found = false; // ==> (containsID2) kendago

                // ======   iterate over each request in the trackingRequests array  ======
                trackingRequestsFB.forEach((request, index) => {
                    cy.logStep(
                        `Contents of Tracking Request ${
                            index + 1
                        }: ${JSON.stringify(request, null, 2)}`
                    );

                    // ====  Search for a specific EVENT in each request  ====
                    // Search for a specific EVENT in each request and assert if found - initiateCheckout
                    const containsEvent1 =
                        JSON.stringify(request).includes(initiateCheckout);
                    cy.logStep(
                        `Request ${
                            index + 1
                        } contains "${initiateCheckout}": ${containsEvent1}`
                    );
                    if (containsEvent1) {
                        event1Found = true; // Set flag to true if found
                    }

                    // Search for a specific EVENT in each request and assert if found - addtocart
                    const containsEvent2 =
                        JSON.stringify(request).includes(addtocart);
                    cy.logStep(
                        `Request ${
                            index + 1
                        } contains "${addtocart}": ${containsEvent2}`
                    );
                    if (containsEvent2) {
                        event2Found = true; // Set flag to true if found
                    }

                    // Search for a specific EVENT in each request and assert if found - Purchase
                    const containsEvent3 =
                        JSON.stringify(request).includes(purchase);
                    cy.logStep(
                        `Request ${
                            index + 1
                        } contains "${purchase}": ${containsEvent3}`
                    );
                    if (containsEvent3) {
                        event3Found = true; // Set flag to true if found
                    }
                    // Search for a specific EVENT in each request and assert if found - Quiz Complete
                    const containsEvent4 =
                        JSON.stringify(request).includes(quizComplete);
                    cy.logStep(
                        `Request ${
                            index + 1
                        } contains "${quizComplete}": ${containsEvent4}`
                    );
                    if (containsEvent4) {
                        event4Found = true; // Set flag to true if found
                    }
                    // Search for a specific EVENT in each request and assert if found - Upsell
                    const containsEvent5 =
                        JSON.stringify(request).includes(upsell);
                    cy.logStep(
                        `Request ${
                            index + 1
                        } contains "${upsell}": ${containsEvent5}`
                    );
                    if (containsEvent5) {
                        event5Found = true; // Set flag to true if found
                    }

                    // ====  Search for a specific ID in each request  ====
                    // Search for a specific ID in each request and assert if found -  Vshred Internal
                    const containsVsIntID =
                        JSON.stringify(request).includes(vsinternal);
                    cy.logStep(
                        `Request ${
                            index + 1
                        } contains "${vsinternal}": ${containsVsIntID}`
                    );
                    if (containsVsIntID) {
                        id1Found = true; // Set flag to true if found
                    }

                    // Search for a specific ID in each request and assert if found - Vshred Kendago
                    const containsVsKenID =
                        JSON.stringify(request).includes(vskendago);
                    cy.logStep(
                        `Request ${
                            index + 1
                        } contains "${vskendago}": ${containsVsKenID}`
                    );
                    if (containsVsKenID) {
                        id2Found = true; // Set flag to true if found
                    }

                    // Search for a specific ID in each request and assert if found -  Sculptnation Internal
                    const containsSnIntID =
                        JSON.stringify(request).includes(sninternal);
                    cy.logStep(
                        `Request ${
                            index + 1
                        } contains "${sninternal}": ${containsSnIntID}`
                    );
                    if (containsSnIntID) {
                        id1Found = true; // Set flag to true if found
                    }

                    // Search for a specific ID in each request and assert if found - Sculptnation Kendago
                    const containsSnKenID =
                        JSON.stringify(request).includes(snkendago);
                    cy.logStep(
                        `Request ${
                            index + 1
                        } contains "${snkendago}": ${containsSnKenID}`
                    );
                    if (containsSnKenID) {
                        id2Found = true; // Set flag to true if found
                    }
                });

                // ====  Assert that the events and IDs were found  ====
                if (event === 'initiateCheckout') {
                    assert.isTrue(
                        event1Found,
                        `"${initiateCheckout}" should be found in at least one tracking request.`
                    );
                }
                if (event === 'addtocart') {
                    assert.isTrue(
                        event2Found,
                        `"${addtocart}" should be found in at least one tracking request.`
                    );
                }
                if (event === 'purchase') {
                    assert.isTrue(
                        event3Found,
                        `"${purchase}" should be found in at least one tracking request.`
                    );
                }
                if (event === 'quizComplete') {
                    assert.isTrue(
                        event4Found,
                        `"${quizComplete}" should be found in at least one tracking request.`
                    );
                }
                if (event === 'Upsell') {
                    assert.isTrue(
                        event5Found,
                        `"${upsell}" should be found in at least one tracking request.`
                    );
                }
                switch (platform) {
                    case 'Vshred':
                        assert.isTrue(
                            id1Found,
                            `"${vsinternal}" should be found in at least one tracking request.`
                        );
                        assert.isTrue(
                            id2Found,
                            `"${vskendago}" should be found in at least one tracking request.`
                        );
                        break;
                    case 'Sculptnation':
                        assert.isTrue(
                            id1Found,
                            `"${sninternal}" should be found in at least one tracking request.`
                        );
                        assert.isTrue(
                            id2Found,
                            `"${snkendago}" should be found in at least one tracking request.`
                        );
                        break;
                    default:
                        throw new Error('Invalid platform provided');
                }
            });
        });
    }
);
