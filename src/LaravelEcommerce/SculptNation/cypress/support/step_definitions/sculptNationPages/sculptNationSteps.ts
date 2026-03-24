/// <reference types="cypress" />
import { Then } from '@badeball/cypress-cucumber-preprocessor';
import sculptNationLocators from '../../locator_libraries/sculptNation/sculptNationLocators';

Then('The user select buy now and verifies checkout page', () => {
    sculptNationLocators.buyNow().click();
});

Then('The user select Choose your package', () => {
    sculptNationLocators.chooseYourPackage().click();
    sculptNationLocators.buyNow().click();
});

Then(
    'The user select {string} bottles then Speed up my metabolism',
    (numBottles: string) => {
        if (numBottles === 'One') {
            sculptNationLocators.speedUpMyMetabolism.oneBottle().click();
            sculptNationLocators.speedUpMyMetabolism
                .speedUpMyMetabloism()
                .click();
        }
        if (numBottles === 'Three') {
            sculptNationLocators.speedUpMyMetabolism.threeBottle().click();
            sculptNationLocators.speedUpMyMetabolism
                .speedUpMyMetabloism()
                .click();
        }
        if (numBottles === 'Six') {
            sculptNationLocators.speedUpMyMetabolism.sixBottle().click();
            sculptNationLocators.speedUpMyMetabolism
                .speedUpMyMetabloism()
                .click();
        }
    }
);

Then('Validates the data on the acv landing page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(
            `Verify the data on the product landing page for ${staticTestData.productLandingPage.productName}`
        );
        sculptNationLocators
            .productName()
            .should('contain', staticTestData.productLandingPage.productName);
        sculptNationLocators
            .productDiscount()
            .should(
                'contain',
                staticTestData.productLandingPage.oneBottlePrice
            );
    });
});

Then(
    'The user select {string} number of bottles by qty',
    (numBottles: string) => {
        if (numBottles === '1') {
            sculptNationLocators.speedUpMyMetabolism.oneBottle().click();
        }
        if (numBottles === '3') {
            sculptNationLocators.speedUpMyMetabolism.threeBottle().click();
        }
        if (numBottles === '6') {
            sculptNationLocators.speedUpMyMetabolism.sixBottle().click();
        }
    }
);

Then(
    'The user select the {string} number of bottles by qty then continue to checkout',
    (numBottles: string) => {
        if (numBottles === '1') {
            sculptNationLocators.speedUpMyMetabolism.bottleOne().click();
            sculptNationLocators.speedUpMyMetabolism
                .speedUpMyMetabloismFullElement()
                .click();
        }
        if (numBottles === '3') {
            sculptNationLocators.speedUpMyMetabolism.bottleThree().click();
            sculptNationLocators.speedUpMyMetabolism
                .speedUpMyMetabloismFullElement()
                .click();
        }
        if (numBottles === '6') {
            sculptNationLocators.speedUpMyMetabolism.bottleSix().click();
            sculptNationLocators.speedUpMyMetabolism
                .speedUpMyMetabloismFullElement()
                .click();
        }
    }
);

Then(
    'The user selects {string} to continue to the checkout page',
    (nextText: string) => {
        if (nextText === 'Speed up my metabolism') {
            sculptNationLocators.speedUpMyMetabolism
                .speedUpMyMetabloism()
                .click();
        }
        if (nextText === 'Skyrocket my manhood') {
            sculptNationLocators.skyrocketMyManhood1().click();
        }
        if (nextText === 'Burn belly fat faster') {
            sculptNationLocators.burnBellyFatFaster1().click();
        }
    }
);

Then(
    'The user select {string} bottles then Skyrocket my manhood',
    (numBottles: string) => {
        if (numBottles === 'One') {
            sculptNationLocators.skyrocketMyManhood1().click();
        }
        if (numBottles === 'Three') {
            sculptNationLocators.skyrocketMyManhood3().click();
        }
        if (numBottles === 'Six') {
            sculptNationLocators.skyrocketMyManhood6().click();
        }
    }
);

Then(
    'The user select {string} bottles then Burn belly fat faster',
    (numBottles: string) => {
        if (numBottles === 'One') {
            sculptNationLocators.burnBellyFatFaster1().click();
        }
        if (numBottles === 'Three') {
            sculptNationLocators.burnBellyFatFaster3().click();
        }
        if (numBottles === 'Six') {
            sculptNationLocators.burnBellyFatFaster6().click();
        }
    }
);

Then(
    'The user fills out {string} to the test boost max quiz',
    (answerToAll: string) => {
        if (answerToAll === 'yes') {
            sculptNationLocators.quiz.yesButton().click();
            sculptNationLocators.quiz.yesButton().click();
            sculptNationLocators.quiz.yesButton().click();
            sculptNationLocators.quiz.yesButton().click();
        } else if (answerToAll === 'no') {
            sculptNationLocators.quiz.noButton().click();
            sculptNationLocators.quiz.noButton().click();
            sculptNationLocators.quiz.noButton().click();
            sculptNationLocators.quiz.noButton().click();
        } else {
            sculptNationLocators.quiz.yesButton().click();
            sculptNationLocators.quiz.noButton().click();
            sculptNationLocators.quiz.yesButton().click();
            sculptNationLocators.quiz.noButton().click();
        }
    }
);

Then('The user skips the video', () => {
    cy.skipVideo();
});

Then('Checks the links on the {string} homepage', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const baseURL = staticTestData.LandingPage.homepage;

        const linksToCheck = [
              '/',
       '/burn-fb?utm_source=storepage-sculpt&utm_medium=banner-sculpthome&utm_campaign=sculptnation&utm_content=sculpt-store-burn-banner031720&utm_term=63723396',
       'https://go.vshred.team/vs-quiz?utm_source=storepage-sn&utm_medium=banner&utm_campaign=MetabolicAssessment-Home',
       '/products/burn-evolved?utm_source=vshred&utm_medium=member-portal&utm_campaign=move&utm_content=BurnDesktop',
       '/products/burn-pm',
       '/products/testboost-max',
       '/products/turmeric-black',
       '/products/multi-collagen',
       '/products',
       '/products/fat-loss-stack',
       '/products/muscle-building-stack',
       '/products/greens',
       '/supplement-guide-for-men',
       '/supplement-guide-for-women',
       '/products/apple-cider-vinegar-gummies',
       '/products/hgh-boost',
       '/products/protein',
       '/products/creatine',
       '/products/pre-workout',
       '/products/bcaas',
       '/products/post-workout-fruit-punch',
       '/products/neuroctane',
       '/products/enzymes',
       '/products/probiotics',
       '/sp/burn-evolved/burn-fbk-cpc',
       '/sp/test-boost-max/fbk-cpc',
       '/sp/turmeric-black/turmeric-fle-fbk-cpc',
       'https://le.vshred.com/greens-fbk-cpc',
       'https://le.vshred.com/sp/custom-diet-plan/reup',
       '/full',
       '/about-us',
       '/privacy-policy',
       '/shipping-and-returns',
       '/our-press',
       '/contact-us',
       '/reviews',
       '/terms-and-conditions',
       '/privacy-policy',
       '/accessibility',
       '/testimonial-support',
       '/personal-information',
       'https://www.facebook.com/sculptnation/',
       'https://www.instagram.com/sculptnation/',
       '/contact-us',
       'https://vshredthreads.com/',
        '/cart',
        '/login',
   ];

cy.visit(baseURL);
 cy.log(`Links to check count: ${linksToCheck.length}`);
        cy.log('Links array:', linksToCheck);

        cy.wrap(linksToCheck).each((link: string, index) => { // Explicitly type 'link' as string to resolve the error
            // Log the 'link' value at the very beginning of the iteration
            cy.log(`Processing link at index ${index}: '${link}' (Type: ${typeof link})`);

            // Add a guard to ensure 'link' is a string before calling .startsWith()
            if (typeof link !== 'string' || link === null) {
                cy.log(`Skipping invalid link (not a string or null) at index ${index}: ${link}`);
                return; // Skip this iteration if link is not a valid string
            }

            let fullUrl;
            if (link.startsWith('/') && link.length > 1) { // Relative path (e.g., /about-us, but not just '/')
                fullUrl = `${baseURL}${link}`;
            } else if (link === '/') { // Homepage
                fullUrl = baseURL;
            } else { // Absolute URL
                fullUrl = link;
            }

            // Skip social media links for cy.request if you want to focus only on the domain
            // You might want to remove this if you genuinely want to test external links
            if (fullUrl.includes('facebook.com') ||
                fullUrl.includes('twitter.com') ||
                fullUrl.includes('instagram.com') ||
                fullUrl.includes('youtube.com')) {
                cy.log(`Skipping external social media link: ${fullUrl}`);
                return; // Skip to the next iteration
            }

            cy.request({
                method: 'GET',
                url: fullUrl,
                failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
            }).then((response) => {
                // Log the status for clarity in the Cypress test runner
                cy.log(`Checked ${fullUrl} - Status: ${response.status}`);
                expect(response.status).to.eq(200, `Expected 200 OK for ${fullUrl}`);
            });
        });


    });
});
