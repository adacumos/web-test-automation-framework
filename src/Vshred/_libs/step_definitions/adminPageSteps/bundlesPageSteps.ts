/// <reference types="cypress" />

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { dashboardLocators } from '../../../Vshred_TrainerTool/cypress/support/locator_libraries';

Then('The Bundles pages are loaded successfully', () => {
    cy.verifyBundlePages();
});

When('The user searches and edit an existing bundle', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.searchBundle('Source', staticTestData.bundleSource);
        cy.searchBundle('Title', staticTestData.bundleTitle);
        cy.searchBundle('ID', staticTestData.bundleID);

        dashboardLocators.getRecord(staticTestData.bundleID).within(() => {
            dashboardLocators.viewButton().click();
        });

        cy.verifyBundleDetails(
            staticTestData.bundleID,
            staticTestData.bundleSource,
            staticTestData.bundleTitle,
            staticTestData.bundleDescription,
            staticTestData.bundlePrice
        );
        dashboardLocators.editButton().click();
        cy.editBundleDetails('Price', staticTestData.newBundlePrice);
    });
});
