/// <reference types="cypress" />

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { dashboardLocators } from '../../../Vshred_TrainerTool/cypress/support/locator_libraries';

When('The user search and edit an existing Offer', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.searchOffers('Name', staticTestData.offerName);
        cy.searchOffers('Source', staticTestData.offerSearchSource);
        cy.searchOffers('ID', staticTestData.offerID);

        dashboardLocators.getRecord(staticTestData.offerID).within(() => {
            dashboardLocators.viewButton().click();
        });

        cy.verifyOfferDetails(
            staticTestData.offerID,
            staticTestData.offerSource,
            staticTestData.offerName,
            staticTestData.offerPrice,
            staticTestData.offerProduct
        );
        dashboardLocators.editButton().click();
        cy.editOfferDetails('Price', staticTestData.newOfferPrice);
    });
});

When('The user creates a New Offer', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep('Creating new Offer');
        cy.createNewOffer(
            staticTestData.offerID,
            staticTestData.offerPrice,
            staticTestData.offerPurchLimit,
            staticTestData.offerQuantity,
            staticTestData.offerProduct
        );
    });
});

Then('The new Offer is available in Offers list', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        dashboardLocators.navigateMenu('Offers').click();
        cy.logStep('Verify new Offer is added');
        cy.searchOffers('ID', staticTestData.newOfferID);
        dashboardLocators.getRecord(staticTestData.newOfferID).within(() => {
            dashboardLocators.viewButton().click();
        });

        cy.verifyOfferDetails(
            staticTestData.newOfferID,
            staticTestData.newOfferSource,
            staticTestData.newOfferName,
            staticTestData.newOfferPrice,
            staticTestData.newOfferProduct
        );
    });
});
