/// <reference types="cypress" />
import { Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    coachingPageLocators,
    consumerLandingPageLocators,
} from '../../locator_libraries';

Then('Select Buy it now', () => {
    coachingPageLocators.pageSections.buyItNow().click();
});

Then('Select Add to cart', () => {
    coachingPageLocators.pageSections.addToCart().click();
});

Then('Verify chechout page', () => {
    consumerLandingPageLocators.orderForm.userEmail().should('be.visible');
});

Then('Verify cart page and select checkout', () => {
    coachingPageLocators.pageSections.checkoutButton().should('be.visible');
    coachingPageLocators.pageSections.checkoutButton().click();
});

Then('User select {string} from the home page', (coachingPlan: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        if (coachingPlan === 'Coaching Plans') {
            coachingPageLocators.pageSections.coachingPlans().click();
            coachingPageLocators.pageSections
                .title()
                .should('contain', staticTestData.coachingPlans);
        }
        if (coachingPlan === 'Home Page') {
            coachingPageLocators.pageSections.homePage().click();
            coachingPageLocators.pageSections
                .title()
                .should('contain', staticTestData.homePage);
        }
        if (coachingPlan === 'Plans') {
            coachingPageLocators.pageSections.plans().click();
            coachingPageLocators.pageSections
                .title()
                .should('contain', staticTestData.plans);
        }
    });
});

Then(
    'User select {string} the specific coaching plan',
    (coachingPlan: string) => {
        if (coachingPlan === 'Accelerator Plus') {
            coachingPageLocators.programBlocks.acceleratorPlus().click();
        }
        if (coachingPlan === 'Turbo 30') {
            coachingPageLocators.programBlocks.turbo30().click();
        }
        if (coachingPlan === 'Accelerator Renewal') {
            coachingPageLocators.programBlocks.acceleratorRenewal().click();
        }
    }
);

Then(
    'Verify the user is on the correct {string} coaching page',
    (coachingPlan: string) => {
        if (coachingPlan === 'Accelerator Plus') {
            coachingPageLocators.programBlocks
                .acceleratorPlusTitle()
                .should('be.visible');
        }
        if (coachingPlan === 'Turbo 30') {
            coachingPageLocators.programBlocks
                .turbo30Title()
                .should('be.visible');
        }
        if (coachingPlan === 'Accelerator Renewal') {
            coachingPageLocators.programBlocks
                .acceleratorRenewalTitle()
                .should('be.visible');
        }
        if (coachingPlan === 'Metabolic Rehab Program') {
            coachingPageLocators.programBlocks
                .metabolicRehabTitle()
                .should('be.visible');
        }
    }
);
