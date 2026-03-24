/// <reference types="cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from 'LaravelEcommerce/SculptNation/cypress/support/testData';
import { surveyLocators } from '../locator_libraries';

Given('I visit base URL', () => {
    cy.visit('/');
});

Given('LE Vshred placeholder step smoke', () => {
    cy.logStep('This is step 1 - Visit the le.vshred.com homepage ');
    cy.visit('/');
});

Given('LE Vshred placeholder step non smoke', () => {
    cy.logStep('This is step 2 - [TBD] ');
    cy.log('this is just a message');
});

Given('The User visits {string} base URL', (surveyType: string) => {
    if (surveyType === 'surveyga') {
        cy.visit('/sp/survey/survey-ga');
    } else if (surveyType === 'survey') {
        cy.visit('/sp/survey/fbk-cpc-v3');
    } else if (surveyType === 'CDP') {
        cy.visit('sp/custom-diet-plan/reup');
    }
});

Then('The user checks {string} email', (emailSubject: string) => {
    cy.logStep(
        `Checking Order Confirmation Email for ${dynamicTestData.userEmail}`
    );

    let subject = '';

    if (emailSubject === 'Order Confirmation') {
        subject = 'Your V Shred order has been received!';
    }
    cy.checkEmail('vince@vshred.com', dynamicTestData.userEmail, subject);
});

Then(
    /^The user verifies (SurveyOrderAllNo|SurveyOrderSelectedYes|SurveyOrderAllYes|Survey Order All Yes Woman) email contents$/,
    (emailType: string) => {
        cy.logStep(`Verify contents for ${emailType} email`);
        cy.checkEmailContent(emailType, dynamicTestData.userEmail);
    }
);

When('The user clicks on the {string} button', (buttonName: string) => {
    switch (buttonName) {
        case 'yes CDP':
            surveyLocators.yesCDPButton().click();
            break;
        case 'diet plan':
            surveyLocators.dietPlanButton().click();
            break;
        case 'diet and training plan':
            surveyLocators.dietAndTrainingPlanButton().click();
            break;
        case 'yes burn':
            surveyLocators.yesBurnButton().click();
            break;
        case 'add to order':
            surveyLocators.addtoOrderButton().click();
            break;
        case 'claim membership offer':
            surveyLocators.claimMembershipOfferButton().click();
            break;
        case 'get my greens':
            surveyLocators.getMyGreensNowButton().click();
            break;
        case 'claim annual pass':
            surveyLocators.claimAnnualPassButton().click();
            break;
        default:
            throw new Error('Invalid button specified');
    }
});
