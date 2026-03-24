/// <reference types="cypress" />

// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-plugin-steps';
import '@testing-library/cypress/add-commands';

import {
    loginToAdminTool,
    checkEmail,
    checkEmailContent,
    getEmailData,
    getEmailContent,
    skipVideo,
} from 'LaravelEcommerce/SculptNation/cypress/commands';

import { logStep } from '../../../_libs/commands';

import {
    fillInSurveyFormWithUpsell,
    fillInSupplementOrderFormSurvey,
    iFrame,
    clearAllSessionData,
} from '../commands';

Cypress.Commands.addAll({ logStep });

Cypress.Commands.addAll({
    fillInSurveyFormWithUpsell,
    fillInSupplementOrderFormSurvey,
    skipVideo,
    iFrame,
    clearAllSessionData,
    loginToAdminTool,
    checkEmail,
    checkEmailContent,
    getEmailData,
    getEmailContent,
});

Cypress.on(
    'uncaught:exception',
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    (err, runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
);
