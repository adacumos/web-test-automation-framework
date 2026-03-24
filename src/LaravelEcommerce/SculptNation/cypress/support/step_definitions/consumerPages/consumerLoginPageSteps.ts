/// <reference types="cypress" />

import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from '../../testData';
import { consumerAccountPageLocators } from '../../locator_libraries';

Given('The user logs into the SculptNation account', () => {
    const loginUser = dynamicTestData.userEmail;
    const loginPassword = dynamicTestData.userPassword;
    cy.loginToSculptNationAccount(loginUser, loginPassword);

    cy.logStep('Check log in success');
    cy.url().should('include', '/my-account');
    consumerAccountPageLocators.welcomeContent().should('be.visible');
});

Given('The client user logs into the SculptNation Account', () => {
    const defaultPassword = Cypress.env('VS_PASSWORD');
    cy.loginToSculptNationAccount(dynamicTestData.userEmail, defaultPassword);

    cy.logStep('Check log in success');
    cy.url().should('include', '/my-account');
    consumerAccountPageLocators.welcomeContent().should('be.visible');
});

Then('The admin user logs into the SculptNation account', () => {
    const loginUser = dynamicTestData.userEmail;
    const loginPassword = dynamicTestData.userPassword;
    cy.loginToSculptNationAccount(loginUser, loginPassword);

    cy.logStep('Check log in success');
    cy.url().should('include', '/my-account');
    consumerAccountPageLocators.welcomeContent().should('be.visible');
});
