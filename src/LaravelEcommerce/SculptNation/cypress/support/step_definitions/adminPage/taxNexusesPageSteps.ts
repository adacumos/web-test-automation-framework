/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    taxNexusesPageLocators,
} from '../../locator_libraries';

Then('The user creates a new Tax Nexuses', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        taxNexusesPageLocators.createTaxNexusesButton().click();
        taxNexusesPageLocators.stateField().select(staticTestData.State);
        taxNexusesPageLocators.countryField().select(staticTestData.Country);
        taxNexusesPageLocators.createTaxNexusesButton().click();
        dashboardLocators.successToast();
        /* eslint-disable cypress/no-unnecessary-waiting */
        cy.wait(3000); // Page elements are not loading in time for next line to execute, adding a small wait
        dashboardLocators.cmsLocator().eq(4).invoke('text').as('TaxNexusID');
    });
});

Then('The user Verifies the newly created Tax Nexuses', () => {
    cy.get<string>('@TaxNexusID').then((TaxNexusID) => {
        dashboardLocators.searchInput().type(TaxNexusID).type('{enter}');
    });
    taxNexusesPageLocators.viewTaxNexus().click();
});

Then('The user Deletes the newly created Tax Nexuses', () => {
    taxNexusesPageLocators.deleteButton().click();
    taxNexusesPageLocators.confirmDeleteButton().click();
    dashboardLocators.successToast();
});

Then('The user Verifies the newly created Tax Nexuses no longer exists', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.get<string>('@TaxNexusID').then((TaxNexusID) => {
            dashboardLocators.searchInput().type(TaxNexusID).type('{enter}');
            taxNexusesPageLocators
                .confirmTaxNexusDeleted()
                .contains(staticTestData.VerifyDeletedTaxNexusID);
        });
    });
});
