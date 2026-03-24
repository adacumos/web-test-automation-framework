/// <reference types="cypress" />
import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from '../../../testData';
import {
    consumerLandingPageLocators,
    vsSurveyPageLocators,
    vsOrdersPageLocators,
} from '../../../locator_libraries';

const trackingRequestsFB: any[] = []; // This array needs to be declared here to be accessible to all tests

Then(
    /^Verify GTM event: "(Quiz Completed|Initiate Checkout|Add To Cart|View Offer|Purchase)" exist$/,
    (eventLabel: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep(
                `Verify GTM event title: ${eventLabel} exist in Data Layer`
            );
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(5000); // Added explicit wait to ensure all pixel events are loaded
            cy.window().then((window) => {
                const { pixelDetail } = staticTestData;
                type EventLabel =
                    | 'Quiz Completed'
                    | 'Initiate Checkout'
                    | 'Add To Cart'
                    | 'View Offer'
                    | 'Purchase';

                const eventDetails: Record<EventLabel, { eventId: string }> = {
                    'Quiz Completed': pixelDetail.quizcompleted,
                    'Initiate Checkout': pixelDetail.startcheckout,
                    'Add To Cart': pixelDetail.addtocart,
                    'View Offer': pixelDetail.viewOffer,
                    Purchase: pixelDetail.purchase,
                };

                const currentEvent = eventDetails[eventLabel as EventLabel];
                if (!currentEvent) throw new Error('Event not yet supported');

                const gtmEvent = window.dataLayer.find(
                    (x: { event: string }) => x.event === currentEvent.eventId
                );

                expect(gtmEvent.event).to.eq(currentEvent.eventId);
                if (
                    eventLabel === 'Initiate Checkout' ||
                    eventLabel === 'Purchase'
                ) {
                    expect(gtmEvent.event_id).to.include(
                        `LE:SN:${eventLabel.replace(' ', '')}`
                    );
                }
                if (eventLabel === 'Quiz Completed') {
                    expect(gtmEvent.event_name).to.eq(eventLabel);
                }
            });
        });
    }
);

Then(
    /^Verify "(Internal|Kendago)" GTM tag for "([^"]*)" event is initiated - "([^"]*)"$/,
    (gtmOwner: string, event: string, offer: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep(`Verify ${gtmOwner} GTM event ${event} tag is created`);

            const verifyPixelEvent = (
                alias: string,
                labelTitle: string,
                notes?: string
            ) => {
                cy.wait(alias).then((pixelIntercept: any) => {
                    const { label, ref, tiba } = pixelIntercept.request.query;
                    const { statusCode } = pixelIntercept.response;
                    expect(label).to.eq(labelTitle);
                    expect(statusCode).to.eq(200);
                    expect(ref).to.contain(
                        staticTestData.surveyLandingPage.surveyUrl
                    );
                    if (notes) {
                        expect(tiba).to.contain(
                            staticTestData.pixelDetail.quizcompleted.tiba[notes]
                        );
                    }
                });
            };

            switch (`${gtmOwner} ${event}`) {
                case 'Internal VS Quiz':
                case 'Internal SN Quiz':
                    verifyPixelEvent(
                        '@quizcompletedGtmInternal',
                        staticTestData.pixelDetail.quizcompleted.gtm.internal,
                        offer
                    );
                    break;
                case 'Kendago VS Quiz':
                    verifyPixelEvent(
                        '@quizcompletedGtmKendago',
                        staticTestData.pixelDetail.quizcompleted.gtm.kendago,
                        offer
                    );
                    break;
                default:
                    throw new Error('Invalid GTM tag owner selected');
            }
        });
    }
);

Then(
    /^The User verifies "(Internal|Kendago)" "(GTM|Twitter)" tag for "([^"]*)" event is initiated$/,
    (pixelOwner: string, platform: string, event: string) => {
        cy.logStep(
            `Verify ${pixelOwner} ${platform} event ${event} tag is created`
        );
        cy.verifyPixelDetails(pixelOwner, platform, event);
    }
);

Then(
    'Verify the ID and Event {string} are present in any request for - {string}',
    (eventTitle: string, option: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep(
                `Verify the ID and Event are present in any request for ${option}`
            );
            switch (option) {
                case 'vsInternal':
                    cy.wait('@vsIntRequest').then((vsIntInterception: any) => {
                        cy.logStep(
                            `Verifying ID and Event in any request for ${option}`
                        );
                        const { id, ev } = vsIntInterception.request.query;
                        switch (eventTitle) {
                            case 'Page View':
                                expect(id).to.eq(
                                    staticTestData.vshredPixelDetail.internal
                                );
                                expect(ev).to.eq('PageView');
                                break;
                            case 'Add To Cart':
                                expect(id).to.eq(
                                    staticTestData.vshredPixelDetail.internal
                                );
                                expect(ev).to.eq('AddToCart');
                                break;
                            case 'Purchase':
                                expect(id).to.eq(
                                    staticTestData.vshredPixelDetail.internal
                                );
                                expect(ev).to.eq('Purchase');
                                break;
                            default:
                                throw new Error('event not yet supported');
                        }
                    });
                    break;
                case 'vsKendago':
                    cy.wait('@vsKenRequest').then((vsKenInterception: any) => {
                        cy.logStep(
                            `Verifying ID and Event in any request for ${option}`
                        );
                        const { id, ev } = vsKenInterception.request.query;
                        switch (eventTitle) {
                            case 'Page View':
                                expect(id).to.eq(
                                    staticTestData.vshredPixelDetail.kendago
                                );
                                expect(ev).to.eq('PageView');
                                break;
                            case 'Add To Cart':
                                expect(id).to.eq(
                                    staticTestData.vshredPixelDetail.kendago
                                );
                                expect(ev).to.eq('AddToCart');
                                break;
                            default:
                                throw new Error('event not yet supported');
                        }
                    });
                    break;
                case 'snInternal':
                    cy.wait('@snIntRequest').then((snIntInterception: any) => {
                        cy.logStep(
                            `Verifying ID and Event in any request for ${option}`
                        );
                        const { id, ev } = snIntInterception.request.query;
                        switch (eventTitle) {
                            case 'Page View':
                                expect(id).to.eq(
                                    staticTestData.sculptNationPixelDetail
                                        .internal
                                );
                                expect(ev).to.eq('PageView');
                                break;
                            case 'Add To Cart':
                                expect(id).to.eq(
                                    staticTestData.sculptNationPixelDetail
                                        .internal
                                );
                                expect(ev).to.eq('AddToCart');
                                break;
                            case 'Purchase':
                                expect(id).to.eq(
                                    staticTestData.sculptNationPixelDetail
                                        .internal
                                );
                                expect(ev).to.eq('Purchase');
                                break;
                            default:
                                throw new Error('event not yet supported');
                        }
                    });
                    break;
                case 'snKendago':
                    cy.wait('@snKenRequest').then((snKenInterception: any) => {
                        cy.logStep(
                            `Verifying ID and Event in any request for ${option}`
                        );
                        const { id, ev } = snKenInterception.request.query;
                        switch (eventTitle) {
                            case 'Page View':
                                expect(id).to.eq(
                                    staticTestData.sculptNationPixelDetail
                                        .kendago
                                );
                                expect(ev).to.eq('PageView');
                                break;
                            case 'Add To Cart':
                                expect(id).to.eq(
                                    staticTestData.sculptNationPixelDetail
                                        .kendago
                                );
                                expect(ev).to.eq('AddToCart');
                                break;
                            default:
                                throw new Error('event not yet supported');
                        }
                    });
                    break;
                default:
                    throw new Error('Invalid tracking option provided');
            }
        });
    }
);

Then('Verify Snapchat event {string} are triggered', (eventTitle: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (eventTitle) {
            case 'Page View':
                cy.wait('@snInternalPageView').then((request: any) => {
                    const { pid, ev } = request.request.query;
                    expect(ev).to.eq(staticTestData.event.pageview);
                    expect(pid).to.eq(staticTestData.snapchatID.internal);
                });
                cy.wait('@snKendagoPageView').then((request: any) => {
                    const { pid, ev } = request.request.query;
                    expect(ev).to.eq(staticTestData.event.pageview);
                    expect(pid).to.eq(staticTestData.snapchatID.kendago);
                });
                break;
            case 'Add To Cart':
                cy.wait('@snInternalAddtoCart').then((request: any) => {
                    const { pid, ev } = request.request.query;
                    expect(ev).to.eq(staticTestData.event.addtocart);
                    expect(pid).to.eq(staticTestData.snapchatID.internal);
                });
                break;
            case 'Start Checkout':
                cy.wait('@snInternalStartCheckout').then((request: any) => {
                    const { pid, ev } = request.request.query;
                    expect(ev).to.eq(staticTestData.event.startCheckout);
                    expect(pid).to.eq(staticTestData.snapchatID.internal);
                });
                cy.wait('@snKendagoStartCheckout').then((request: any) => {
                    const { pid, ev } = request.request.query;
                    expect(ev).to.eq(staticTestData.event.startCheckout);
                    expect(pid).to.eq(staticTestData.snapchatID.kendago);
                });
                break;
            case 'Quiz Completed':
                cy.wait('@snInternalQuiz').then((request: any) => {
                    const { pid, ev } = request.request.query;
                    expect(ev).to.eq(staticTestData.event.quizCompleted);
                    expect(pid).to.eq(staticTestData.snapchatID.internal);
                });
                cy.wait('@snKendagoQuiz').then((request: any) => {
                    const { pid, ev } = request.request.query;
                    expect(ev).to.eq(staticTestData.event.quizCompleted);
                    expect(pid).to.eq(staticTestData.snapchatID.kendago);
                });
                break;
            case 'Purchase':
                cy.wait('@snInternalPurchase').then((request: any) => {
                    const { pid, ev } = request.request.query;
                    expect(ev).to.eq(staticTestData.event.purchase);
                    expect(pid).to.eq(staticTestData.snapchatID.internal);
                });
                cy.wait('@snKendagoPurchase').then((request: any) => {
                    const { pid, ev, e_pr: epr } = request.request.query;
                    expect(ev).to.eq(staticTestData.event.purchase);
                    expect(pid).to.eq(staticTestData.snapchatID.kendago);
                    expect(epr).to.eq(staticTestData.event.amount);
                });
                break;
            default:
                throw new Error('Event not found');
        }
    });
});

Then(
    'Verify the ID and Event {string} are present in any request for - {string} for {string}',
    (eventTitle: string, option: string, platform: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep(
                `Verify the ID and Event are present in any request for ${option}`
            );
            if (platform === 'snapchat') {
                switch (option) {
                    case 'vsInternal':
                        cy.wait('@vsIntRequest').then(
                            (vsIntInterception: any) => {
                                cy.logStep(
                                    `Verifying ID and Event in any request for ${option}`
                                );
                                const { pid, ev } =
                                    vsIntInterception.request.query;
                                switch (eventTitle) {
                                    case 'Page View':
                                        expect(pid).to.eq(
                                            staticTestData.vshredPixelDetail
                                                .internal
                                        );
                                        expect(ev).to.eq('PAGE_VIEW');
                                        break;
                                    case 'Add To Cart':
                                        expect(pid).to.eq(
                                            staticTestData.vshredPixelDetail
                                                .internal
                                        );
                                        expect(ev).to.eq('START_CHECKOUT');
                                        break;
                                    default:
                                        throw new Error(
                                            'event not yet supported'
                                        );
                                }
                            }
                        );
                        break;
                    case 'vsKendago':
                        cy.wait('@vsKenRequest').then(
                            (vsKenInterception: any) => {
                                cy.logStep(
                                    `Verifying ID and Event in any request for ${option}`
                                );
                                const { pid, ev } =
                                    vsKenInterception.request.query;
                                switch (eventTitle) {
                                    case 'Page View':
                                        expect(pid).to.eq(
                                            staticTestData.vshredPixelDetail
                                                .kendago
                                        );
                                        expect(ev).to.eq('PAGE_VIEW');
                                        break;
                                    case 'Add To Cart':
                                        expect(pid).to.eq(
                                            staticTestData.vshredPixelDetail
                                                .kendago
                                        );
                                        expect(ev).to.eq('START_CHECKOUT');
                                        break;
                                    default:
                                        throw new Error(
                                            'event not yet supported'
                                        );
                                }
                            }
                        );
                        break;
                    default:
                        throw new Error('Invalid tracking option provided');
                }
            }
            if (platform === 'tiktok') {
                switch (option) {
                    case 'vsInternal':
                        cy.wait('@vsIntRequestTiktok').then(
                            (vsIntInterception: any) => {
                                cy.logStep(
                                    `Verifying ID and Event in any request for ${option}`
                                );
                                const { sdkid } =
                                    vsIntInterception.request.query;
                                switch (eventTitle) {
                                    case 'Page View':
                                        assert.exists(
                                            sdkid,
                                            'SDK ID should exist'
                                        );
                                        assert.equal(
                                            sdkid,
                                            staticTestData.vshredPixelDetail
                                                .internal,
                                            'SDK ID should match expected value'
                                        );
                                        break;
                                    case 'Add To Cart':
                                        expect(sdkid).to.eq(
                                            staticTestData.vshredPixelDetail
                                                .internal
                                        );
                                        break;
                                    default:
                                        throw new Error(
                                            'event not yet supported'
                                        );
                                }
                            }
                        );
                        break;
                    case 'snInternal':
                        cy.wait('@snIntRequestTiktok').then(
                            (snIntInterception: any) => {
                                cy.logStep(
                                    `Verifying ID and Event in any request for ${option}`
                                );
                                const { sdkid } =
                                    snIntInterception.request.query;
                                switch (eventTitle) {
                                    case 'Page View':
                                        assert.exists(
                                            sdkid,
                                            'SDK ID should exist'
                                        );
                                        assert.equal(
                                            sdkid,
                                            staticTestData
                                                .sculptNationPixelDetail
                                                .internal,
                                            'SDK ID should match expected value'
                                        );
                                        break;
                                    case 'Add To Cart':
                                        expect(sdkid).to.eq(
                                            staticTestData
                                                .sculptNationPixelDetail
                                                .internal
                                        );
                                        break;
                                    default:
                                        throw new Error(
                                            'event not yet supported'
                                        );
                                }
                            }
                        );
                        break;
                    case 'vsKendago':
                        cy.wait('@vsKenRequestTiktok').then(
                            (vsKenInterception: any) => {
                                cy.logStep(
                                    `Verifying ID and Event in any request for ${option}`
                                );
                                const { sdkid } =
                                    vsKenInterception.request.query;
                                switch (eventTitle) {
                                    case 'Page View':
                                        expect(sdkid).to.eq(
                                            staticTestData.vshredPixelDetail
                                                .kendago
                                        );
                                        break;
                                    case 'Add To Cart':
                                        expect(sdkid).to.eq(
                                            staticTestData.vshredPixelDetail
                                                .kendago
                                        );
                                        break;
                                    default:
                                        throw new Error(
                                            'event not yet supported'
                                        );
                                }
                            }
                        );
                        break;

                    default:
                        throw new Error('Invalid tracking option provided');
                }
            }
        });
    }
);

const trackingRequests: any[] = []; // This array needs to be declared here to be accessible to all tests
Then('The user begins tracking and adds {string} to cart', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(`Start Tracking`);
        cy.intercept('POST', staticTestData.tracking_url, (req) => {
            trackingRequests.push(req); // Store each request in the array
            req.reply(); // Continue with the request
        }).as('tracking_request'); // store the requests into this alias

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
    });
});

Then('Verify tiktok events and ID for - {string}', (option: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(
            `Verify the event and event ID in any request for ${option}`
        );

        cy.wait('@tracking_request').then(() => {
            // <====  accepts POST call. Generate GET call later if needed.
            // cy.logStep(`Number of tracking requests captured: ${trackingRequests.length}`); // LOG - Only use for debugging
            // cy.logStep(`Contents of Tracking Request: ${JSON.stringify(trackingRequests, null, 2)}`); // LOG - Only use for debugging
            //  ======   declare variables here  ======
            const { initiateCheckout } = staticTestData.event;
            const { addtocart } = staticTestData.event;
            const { internal } = staticTestData.tiktokID;
            const { kendago } = staticTestData.tiktokID;
            let event1Found = false; // ==> (containsEvent1) initiateCheckout
            let event2Found = false; // ==> (containsEvent2) addtocart
            let id1Found = false; // ==> (containsID1) internal
            let id2Found = false; // ==> (containsID2) kendago

            // ======   iterate over each request in the trackingRequests array  ======
            trackingRequests.forEach((request, index) => {
                cy.logStep(
                    `Contents of Tracking Request ${
                        index + 1
                    }: ${JSON.stringify(request, null, 2)}`
                );

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

                // Search for a specific ID in each request and assert if found - Internal
                const containsID1 = JSON.stringify(request).includes(internal);
                cy.logStep(
                    `Request ${
                        index + 1
                    } contains "${internal}": ${containsID1}`
                );
                if (containsID1) {
                    id1Found = true; // Set flag to true if found
                }

                // Search for a specific ID in each request and assert if found - Kendago
                const containsID2 = JSON.stringify(request).includes(kendago);
                cy.logStep(
                    `Request ${index + 1} contains "${kendago}": ${containsID2}`
                );
                if (containsID2) {
                    id2Found = true; // Set flag to true if found
                }
            });
            assert.isTrue(
                event1Found,
                `"${initiateCheckout}" should be found in at least one tracking request.`
            );
            assert.isTrue(
                event2Found,
                `"${addtocart}" should be found in at least one tracking request.`
            );
            assert.isTrue(
                id1Found,
                `"${internal}" should be found in at least one tracking request.`
            );
            assert.isTrue(
                id2Found,
                `"${kendago}" should be found in at least one tracking request.`
            );
        });
    });
});

Then('The user begins tracking and starts V Shred Survey', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        // ==== Begin VS Survey ====
        cy.logStep(`Initiate VS survey`);
        cy.logStep('Select age range');
        vsSurveyPageLocators.femaleaka1v3
            .range1820()
            .should('be.visible')
            .click(); // select age range
        cy.logStep('Select height');
        vsSurveyPageLocators.heightInchesSlider().invoke('val', 65); // select height
        vsSurveyPageLocators.femaleaka1v3.heightContinueButton().click();
        cy.logStep('Select weight');
        vsSurveyPageLocators
            .weightSlider()
            .invoke('val', 220)
            .click({ force: true });
        vsSurveyPageLocators.continueButton().click();
        cy.logStep('Select activity level');
        vsSurveyPageLocators.femaleaka1v3.lightlyActive().click(); // select activity level
        // ==== Pause VS Survey ====
        // == Start intercepting requests tracking ==
        cy.logStep(`Start Tracking`);
        cy.intercept('POST', staticTestData.tracking_url, (req) => {
            // <======= for POST (common for tiktok tests)
            trackingRequests.push(req); // Store each request in the array
            req.reply(); // Continue with the request
        }).as('tracking_request'); // store the requests into this alias
        cy.intercept('GET', staticTestData.tracking_url, (req) => {
            // <======== for Facebook
            trackingRequestsFB.push(req); // Store each request in the array
            req.reply(); // Continue with the request
        }).as('tracking_requestfb'); // store the requests into this alias
        // ==== Resume VS Survey ====
        cy.logStep('Select body description');
        vsSurveyPageLocators.femaleaka1v3.descriptionSoft().click(); // select body description
        vsSurveyPageLocators.femaleaka1v3.videoContainer().should('be.visible'); // assert video container is visible
    });
});

Then(
    'The user fills out Vshred form and begins tracking {string} for - {string}',
    (option: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep('Fill out vshred payment form');
            cy.generateRandomTestEmail().then((randomEmail) => {
                dynamicTestData.userEmail = randomEmail;
                cy.checkVsOrderForm(dynamicTestData.userEmail);
            });
            vsOrdersPageLocators.processPayment
                .creditCardNumber()
                .should('be.visible');
            cy.logStep(
                '============= Pause the steps and begin tracking =================='
            );
            cy.logStep(`Start Tracking`);
            // === declare variables ====
            const vsIntPixelId = staticTestData.vshredPixelDetail.internal;
            const vsKenPixelId = staticTestData.vshredPixelDetail.kendago;
            const snIntPixelId =
                staticTestData.sculptNationPixelDetail.internal;
            const snKenPixelId = staticTestData.sculptNationPixelDetail.kendago;

            // === intercept pixel ids ===
            switch (option) {
                case 'Internal': // ADD more platorms below when needed
                    cy.intercept(`**s?sdkid=${vsIntPixelId}**`).as(
                        'vsIntRequest'
                    ); // <--- tiktok
                    cy.intercept(`**s?sdkid=${snIntPixelId}**`).as(
                        'snIntRequest'
                    ); // <--- tiktok
                    cy.intercept(`**tr/?id=${vsIntPixelId}**`).as(
                        'vsIntRequestfb'
                    ); // <--- facebook
                    cy.intercept(`**tr/?id=${snIntPixelId}**`).as(
                        'snIntRequestfb'
                    ); // <--- facebook
                    break;
                case 'Kendago': // ADD more platorms below when needed
                    cy.intercept(`**s?sdkid=${vsKenPixelId}**`).as(
                        'vsKenRequest'
                    ); // <--- tiktok
                    cy.intercept(`**s?sdkid=${snKenPixelId}**`).as(
                        'snKenRequest'
                    ); // <--- tiktok
                    break;
                default:
                    throw new Error('Invalid tracking option provided');
            }
            cy.logStep('============= Resume steps ==================');
            cy.get('.btn-success').contains('Pay Now').click();
            cy.logStep(`Wait for the payment to complete`);
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(10000);
        });
    }
);

Then(
    'The user verifies Complete Payment from {string} for {string}',
    (pixelType: string, platform: string) => {
        cy.logStep(`start id check`);
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep(
                `Verify the ID and Event are present in any request for ${pixelType}`
            );
            if (platform === 'tiktok') {
                switch (pixelType) {
                    case 'Internal':
                        cy.wait('@vsIntRequest').then(
                            (vsIntInterception: any) => {
                                cy.logStep(
                                    `Verifying ID and Event in any request for ${pixelType}`
                                );
                                const { sdkid } =
                                    vsIntInterception.request.query;
                                assert.exists(sdkid, 'SDK ID should exist');
                                assert.equal(
                                    sdkid,
                                    staticTestData.vshredPixelDetail.internal,
                                    'SDK ID should match expected value'
                                );
                            }
                        );
                        break;
                    case 'Kendago':
                        cy.wait('@vsKenRequest').then(
                            (vsKenInterception: any) => {
                                // cy.logStep(`Full vsIntInterception: ${JSON.stringify(vsIntInterception, null, 2)}`); //--> leaving in for debugging
                                cy.logStep(
                                    `Verifying ID and Event in any request for ${pixelType}`
                                );
                                const { sdkid } =
                                    vsKenInterception.request.query;
                                assert.exists(sdkid, 'SDK ID should exist');
                                assert.equal(
                                    sdkid,
                                    staticTestData.vshredPixelDetail.kendago,
                                    'SDK ID should match expected value'
                                );
                            }
                        );
                        break;
                    default:
                        throw new Error('Invalid pixel type provided');
                }
            }
        });
    }
);
Then('The user purchases upsell', () => {
    //  ====  Locate the type of upsell page and perform actions  ====
    cy.get('body').then(($body) => {
        if ($body.find('.text-center .site-btn').length > 0) {
            // <=== Upgrade Upsell Page
            cy.logStep(`Click Yes! Upgrade My Order`);
            cy.get('.text-center .site-btn')
                .contains('Yes! Upgrade My Order')
                .should('be.visible')
                .click();
        } else {
            // <=== Subscribe/Single/Three/Six Bottle Upsell Page
            cy.logStep(`Click Subscribe Now`);
            cy.skipVideo();
            cy.get('.single-option .site-btn')
                .contains('SUBSCRIBE NOW')
                .should('be.visible')
                .click();
        }
    });

    // wait for event calls to complete
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);
});

Then(
    'The user starts tracking and purchases upsell for {string}',
    (platform: string) => {
        cy.logStep(`Start tracking requests in for Upsell`);
        cy.get('@staticTestData').then((staticTestData: any) => {
            //  ========== Start tracking requests for Platform ==========
            if (platform === 'facebook') {
                cy.intercept(staticTestData.tracking_url, (req) => {
                    // <======== for Facebook
                    trackingRequestsFB.push(req); // Store each request in the array
                    req.reply(); // Continue with the request
                }).as('tracking_requestfb'); // store the requests into this alias
            }
        });
        // ========== End tracking requests for Platform ==========

        //  ====  Locate the type of upsell page and perform actions  ====
        cy.get('body').then(($body) => {
            if ($body.find('.text-center .site-btn').length > 0) {
                // <=== Upgrade Upsell Page
                cy.logStep(`Click Yes! Upgrade My Order`);
                cy.get('.text-center .site-btn')
                    .contains('Yes! Upgrade My Order')
                    .should('be.visible')
                    .click();
            } else {
                // <=== Subscribe/Single/Three/Six Bottle Upsell Page
                cy.logStep(`Click Subscribe Now`);
                cy.skipVideo();
                cy.get('.single-option .site-btn')
                    .contains('SUBSCRIBE NOW')
                    .should('be.visible')
                    .click();
            }
        });

        // wait for event calls to complete
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(5000);
    }
);

Then('The user waits for the page element to load', () => {
    // Used to wait for the page elements to load before continuing with the test
    cy.get('@staticTestData').then((staticTestData: any) => {
        const element = staticTestData.waitElement;
        cy.logStep(`Waiting for element to load: ${element}`);
        cy.get(element).should('be.visible');
    });
});

Then('The user adds {string} to cart', () => {
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
