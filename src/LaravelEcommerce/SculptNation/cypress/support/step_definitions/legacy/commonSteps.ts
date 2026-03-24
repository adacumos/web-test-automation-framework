/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from 'LaravelEcommerce/_libs/commands/support/testData';
import { legacyPageLocators } from '../../locator_libraries';

When(
    'The user fills out invalid credit card Order Form information and submits the order',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.generateRandomTestEmail().then((randomEmail) => {
                dynamicTestData.userEmail = randomEmail;

                cy.logStep(staticTestData.cardNumber);
                cy.logStep(staticTestData.expirationDate);
                cy.logStep(staticTestData.cvv);
                cy.logStep(staticTestData.postalCode);

                cy.fillInLeOrderFormInvalidCreditCard(
                    staticTestData.name,
                    staticTestData.postalCode,
                    staticTestData.cardNumber,
                    staticTestData.expirationDate,
                    staticTestData.cvv
                );
            });
        });
    }
);

Then('The user verifies the invalid credit card message', () => {
    legacyPageLocators.fatLossExtremeForHer
        .invalidCreditCardMessage()
        .should('be.visible');
    // assert error message text is visible
    legacyPageLocators.fatLossExtremeForHer.invalidCreditCardMessage().should('contain', 'This card number is not valid.');
});

When('the user was not able to proceed to the submit order section', () => {
    legacyPageLocators.submitOrderButton().should('not.be.visible');
});

Given('The user visits the legacy VShred Fatloss Extreme for {string} URL', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.visit(`${Cypress.env('VS_ADMIN_URL') +  staticTestData.surveyLandingPage.landingPage}`);
    });
});

Given('The user clicks the legacy Fatloss Extreme buy button', () => {
    legacyPageLocators.fatLossExtremeForHer.buyButton().click();
});

Then('The user verifies Thank You Page and goes to the Order Confirmation Page', () => {
    legacyPageLocators.thankYouPage.thankYouTitle().should('be.visible').and('contain', 'Thank you for your order!')
    legacyPageLocators.thankYouPage.hereButton().should('be.visible').and('contain', 'HERE').click();
    legacyPageLocators.thankYouPage.modalCloseCross().first().should('be.visible').click();

});

Then('The user is on the profile page and clicks on the purchases link', () => {
    legacyPageLocators.profilePage.urlShouldIncludeProfile();
    legacyPageLocators.profilePage.purchasesLink().click();
    legacyPageLocators.profilePage.accountPurchasesShouldBeVisible();
});

Then('The User verifies the Order Summary', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const productTitles = staticTestData.productTitles || [];
        const physicalProductTitles = staticTestData.physicalProductTitles || [];

        legacyPageLocators.profilePage.purchasesOrderTable().each(($el, index) => {
            const expectedTitle = productTitles[index];
            const expectedPhysicalProductTitle = physicalProductTitles[index];

            if (expectedTitle) {
                cy.wrap($el).should('contain', expectedTitle);
            }

            if (expectedPhysicalProductTitle) {
                cy.wrap($el).should('contain', expectedPhysicalProductTitle);
            }
        });
    });
});