import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { consumerLandingPageLocators } from '../../locator_libraries';

Then(
    'The user verifies the Super Simple Thirty Second Morning Habit videos and clicks it',
    () => {
        consumerLandingPageLocators.landingPage.superSimpleVideo().click();
    }
);

Then(
    'The user verifies the {string} video under, the More Ways To Reach Your Fitness Goals section',
    (input: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            switch (input) {
                case 'SuperSimple':
                    consumerLandingPageLocators.landingPage
                        .moreWaysVideos()
                        .contains(staticTestData.videoName)
                        .children('a')
                        .click();
                    break;
                case 'CanYou':
                    consumerLandingPageLocators.landingPage
                        .moreWaysVideos()
                        .contains(staticTestData.videoName)
                        .children('a')
                        .click();
                    break;
                case 'RestartYour':
                    consumerLandingPageLocators.landingPage
                        .moreWaysVideos()
                        .contains(staticTestData.videoName)
                        .children('a')
                        .click();
                    break;
                case 'TheseBatteries':
                    consumerLandingPageLocators.landingPage
                        .moreWaysVideos()
                        .contains(staticTestData.videoName)
                        .children('a')
                        .click();
                    break;
                default:
                    throw new Error('Invalid selection');
            }
        });
    }
);

Then('The user selects six Bottle Subscription for Burn Evolved', () => {
    consumerLandingPageLocators.sixBottleSubscription().find('a').eq(0).click();
});

Then('The user selects six Bottle Subscription for Burn PM', () => {
    consumerLandingPageLocators
        .sixBottleSubscription()
        .find('button')
        .eq(0)
        .click();
});

Then('The user selects six Bottle Purchase', () => {
    consumerLandingPageLocators.sixBottlePurchase().click();
});

Then('The user selects six Bottle Speed Up My Metabolism', () => {
    consumerLandingPageLocators.sixBottleSpeedMetabolism().click();
});

Then('The user Fills out the Order Form and submits the order', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.fillInLeOrderForm(
            staticTestData.name,
            staticTestData.shippingName,
            staticTestData.phoneNumber,
            staticTestData.shippingStreet,
            staticTestData.shippingState,
            staticTestData.shippingCity,
            staticTestData.shippingPostalCode,
            staticTestData.shippingCountry,
            staticTestData.shippingPhone,
            staticTestData.cardNumber,
            staticTestData.expirationDate,
            staticTestData.cvv
        );
    });
});

Then('The user lands on the {string} page', (input: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (input) {
            case 'rippedURL':
                cy.url().should('include', staticTestData.rippedURL);
                break;
            case 'testBoostURL':
                cy.url().should('include', staticTestData.testBoostURL);
                break;
            case 'testURL':
                cy.url().should('include', staticTestData.testURL);
                break;
            case 'hghURL':
                cy.url().should('include', staticTestData.hghURL);
                break;
            case 'burnEvolvedURL':
                cy.url().should('include', staticTestData.burnEvolvedURL);
                break;
            case 'burnPMURL':
                cy.url().should('include', staticTestData.burnPMURL);
                break;
            case 'creatineURL':
                cy.url().should('include', staticTestData.creatineURL);
                break;
            case 'specialOffer':
                cy.url().should('include', staticTestData.specialOffer);
                break;
            case 'turmericBlackURL':
                cy.url().should('include', staticTestData.turmericBlackURL);
                break;
            case 'turmericBlackOrderURL':
                cy.url().should(
                    'include',
                    staticTestData.turmericBlackOrderURL
                );
                break;
            case 'burnEvolvedTurmericURL':
                cy.url().should(
                    'include',
                    staticTestData.turmericBlackOrderURL
                );
                break;
            case 'greensURL':
                cy.url().should('include', staticTestData.greensURL);
                break;
            case 'greensOrderURL':
                cy.url().should('include', staticTestData.greensOrderURL);
                break;
            case 'greensCouponURL':
                cy.url().should('include', staticTestData.greensCouponURL);
                break;
            case 'burnCouponURL':
                cy.url().should('include', staticTestData.burnCouponURL);
                break;
            case 'cdpURL':
                cy.url().should('include', staticTestData.cdpURL);
                break;
            default:
                throw new Error('Invalid selection');
        }
    });
});

Then('The user lands on the Fat Loss Extreme page', () => {
    cy.url().should('include', '/sp/burn-evolved/burn');
});

Then('The user lands on the Burn Evolved page', () => {
    cy.url().should('include', '/sp/burn-evolved2/burn');
});

Then('The user lands on the Burn PM page', () => {
    cy.url().should('include', '/sp/burn-evolved/burn-pm');
});

Then('The user lands on the Turmeric Black page', () => {
    cy.url().should('include', '/sp/burn-evolved/turmeric');
});

Then('The user lands on the Enzymes page', () => {
    cy.url().should('include', '/sp/burn-evolved/enzymes');
});

Then('The user lands on the Custom Diet Plan page', () => {
    cy.url().should('include', '/sp/fat-loss-extreme/fl-cdp');
});

Then('The user selects the single upgrade option', () => {
    consumerLandingPageLocators.productPage.upgradeOrderButton().click();
});

Then('The user selects the single bottle option', () => {
    consumerLandingPageLocators.productPage.addBottleToCartButton().click();
});

Then('The user selects the single CDP upgrade option', () => {
    consumerLandingPageLocators.singleOptionSubscription().click();
});

Then('The user lands on the Order Confirmation page', () => {
    cy.url().should('include', '/member/purchases/');
});

Then('The user verfies Bundle and Price on the Order Confirmation Page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        consumerLandingPageLocators.orderConformation
            .lineItem()
            .contains(staticTestData.bundleName);

        consumerLandingPageLocators.orderConformation
            .lineItem()
            .contains(staticTestData.bundlePrice);
    });
});

Then(
    'The user verfies Fat Loss Extreme for Her on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .bundleContents()
                .contains(staticTestData.fatLossExtremeHer);
        });
    }
);

Then(
    'The user verfies Fat Loss Extreme for Him on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .bundleContents()
                .contains(staticTestData.fatLossExtremeHim);
        });
    }
);

Then(
    'The user verfies the Fat Loss Extreme for Him Program and Price on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.fatLossExtremeHim);

            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.fatLossExtremeHimPrice);
        });
    }
);

Then(
    'The user verfies the VSU - Monthly - 9.95 30 Days Free Program and Price on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.VSU);

            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.VSUPrice);
        });
    }
);

Then(
    'The user verfies Test Boost Max and Price on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .bundleContents()
                .contains(staticTestData.testBoostMax);

            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.threeBottlePrice);
        });
    }
);

Then(
    'The user verfies Ripped in 90 Days on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .bundleContents()
                .contains(staticTestData.ripped90Days);
        });
    }
);

Then('The user verfies Six Pack Shred on the Order Confirmation Page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        consumerLandingPageLocators.orderConformation
            .bundleContents()
            .contains(staticTestData.sixPackShred);
    });
});

Then('The user verfies the Recipe on the Order Confirmation Page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        consumerLandingPageLocators.orderConformation
            .bundleContents()
            .contains(staticTestData.recipeGuide);
    });
});

Then(
    'The user verfies The Big Arms Program on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .bundleContents()
                .contains(staticTestData.bigArmsProgram);
        });
    }
);

Then(
    'The user verfies The Booty Builder on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .bundleContents()
                .contains(staticTestData.theBootyBuilder);
        });
    }
);

Then(
    'The user verfies Burn Evolved and Price on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.burnEvolved);

            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.threeBottlePrice);
        });
    }
);

Then(
    'The user verfies Burn PM and Price on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.burnPM);

            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.sixBottlePrice);
        });
    }
);

Then(
    'The user verfies HGH Boost and Price on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.hghBoost);

            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.sixBottlePrice);
        });
    }
);

Then(
    'The user verfies Turmeric Black and Price on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.turmericBlack);

            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.sixBottlePrice);
        });
    }
);

Then(
    'The user verfies Enzymes and Price on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.enzymes);

            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.sixBottlePrice);
        });
    }
);

Then(
    'The user verfies Creatine and Price on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.creatine);

            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.sixBottlePrice);
        });
    }
);

Then(
    'The user verfies Custom Diet Plan and Price on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.customDietPlan);

            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.cdpPrice);
        });
    }
);

Then('The user verfies Sales Tax on the Order Confirmation Page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        consumerLandingPageLocators.orderConformation
            .lineItem()
            .contains(staticTestData.salesTax);

        consumerLandingPageLocators.orderConformation
            .lineItem()
            .contains(staticTestData.salesTaxTotal);
    });
});

Then('The user verfies the Order Total on the Order Confirmation Page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        consumerLandingPageLocators.orderConformation
            .lineItem()
            .contains(staticTestData.total);

        consumerLandingPageLocators.orderConformation
            .lineItem()
            .contains(staticTestData.orderTotal);
    });
});

Then(
    'The user verfies The Three Bottle Prices on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.threeBottlePriceLineItem);

            consumerLandingPageLocators.orderConformation
                .multiLineThreeBottlePrice()
                .should('have.length', 3);
        });
    }
);

Then(
    'The user verfies The Six Bottle Prices on the Order Confirmation Page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerLandingPageLocators.orderConformation
                .lineItem()
                .contains(staticTestData.sixBottlePrice);

            consumerLandingPageLocators.orderConformation
                .multiLineSixBottlePrice()
                .should('have.length', 3);
        });
    }
);

Then('The user verfies Greens and Price on the Order Confirmation Page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        consumerLandingPageLocators.orderConformation
            .lineItem()
            .contains(staticTestData.greens);

        consumerLandingPageLocators.orderConformation
            .lineItem()
            .contains(staticTestData.oneBottlePrice);
    });
});
