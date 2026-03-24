/// <reference types="cypress" />

import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit base URL', () => {
    cy.visit('/');
});
