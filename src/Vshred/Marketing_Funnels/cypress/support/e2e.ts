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
import 'cypress-real-events'; // eslint-disable-line import/no-unresolved

import {
    logStep,
    clearAllSessionData,
    iFrame,
    verifyVsEmail,
    loginToVsAdminTool,
    verifyVsEmailBulkOrders,
    loginToBrainTree,
    generateRandomTestEmail,
} from '../../../_libs/commands';

import {
    fillInVsOrderForm,
    fillInSupplementOrderForm,
    skipVideo,
    fillInVsOrderFormWithUpsell,
} from '../commands';

Cypress.Commands.addAll({
    generateRandomTestEmail,
    loginToVsAdminTool,
    logStep,
    iFrame,
    skipVideo,
    fillInVsOrderForm,
    fillInVsOrderFormWithUpsell,
    fillInSupplementOrderForm,
    verifyVsEmail,
    verifyVsEmailBulkOrders,
    loginToBrainTree,
    clearAllSessionData,
});

Cypress.on(
    'uncaught:exception',
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    (err, runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
);
