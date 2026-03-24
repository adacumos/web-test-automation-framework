/// <reference types="cypress" />

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import bundlesPageLocators from '../../../Vshred_TrainerTool/cypress/support/locator_libraries/adminTool/bundlesPageLocators';
import {
    dashboardLocators,
    offersPageLocators,
} from '../../../Vshred_TrainerTool/cypress/support/locator_libraries';

When('The user navigates to {string} page', (menu: string) => {
    cy.logStep(`Navigate to ${menu} page`);
    dashboardLocators.navigateMenu(`${menu}`).click();
});

Then('The {string} pages are loaded successfully', (vsMenu: string) => {
    cy.logStep(`Load ${vsMenu} Pages`);
    cy.verifyVsPage(vsMenu);
});

Then(
    'The updated {string} is reloaded with the updated values',
    (table: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep(`Verify ${table} details is updated`);
            switch (table) {
                case 'Offers':
                    cy.verifyOfferDetails(
                        staticTestData.offerID,
                        staticTestData.offerSource,
                        staticTestData.offerName,
                        staticTestData.newOfferPrice,
                        staticTestData.offerProduct
                    );
                    break;
                case 'Bundles':
                    cy.verifyBundleDetails(
                        staticTestData.bundleID,
                        staticTestData.bundleSource,
                        staticTestData.bundleTitle,
                        staticTestData.bundleDescription,
                        staticTestData.newBundlePrice
                    );
                    break;
                case 'Products':
                    cy.verifyProductDetails(
                        staticTestData.productID,
                        staticTestData.newProductName,
                        staticTestData.newProductPrice,
                        staticTestData.productCogs,
                        staticTestData.productAbility
                    );
                    break;
                default:
                    throw new Error('Invalid option selected');
            }
        });
    }
);

Then('Revert {string} changes to original state', (table: string) => {
    cy.logStep(`Reverting changes made to ${table}`);
    dashboardLocators.editButton().click();
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (table) {
            case 'Offers':
                cy.editOfferDetails('Price', staticTestData.offerPrice);
                break;
            case 'Bundles':
                cy.editBundleDetails('Price', staticTestData.bundlePrice);
                break;
            case 'Products':
                cy.editProductDetails(
                    'Price',
                    staticTestData.productDefaultPrice
                );
                dashboardLocators.editButton().click();
                cy.editProductDetails('Name', staticTestData.productName);
                break;
            default:
                throw new Error('Invalid option selected');
        }
    });
});

Then('The new {string} created is now active', (table: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(`Verifying new ${table}' is created`);
        dashboardLocators.navigateMenu(`${table}`).click();
        switch (table) {
            case 'Offers':
                offersPageLocators.offersLandingPage
                    .filterOfferId()
                    .clear()
                    .type(`${staticTestData.offerID} {enter}`);
                dashboardLocators
                    .getRecord(`${staticTestData.offerID}`)
                    .should('be.visible');
                break;
            case 'Bundles':
                bundlesPageLocators.bundlesLandingPage
                    .filterBundleId()
                    .clear()
                    .type(`${staticTestData.bundleID} { enter }`);
                dashboardLocators
                    .getRecord(`${staticTestData.bundleID}`)
                    .should('be.visible');
                break;
            default:
                throw new Error('Invalid option selected');
        }
    });
});

Then('Deletes the {string} test data', (table: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const tableRef = table.toLowerCase();
        switch (table) {
            case 'Offers':
                cy.deleteVsPageTestData(tableRef, staticTestData.offerID);
                break;
            case 'Products':
                cy.deleteVsPageTestData(
                    tableRef,
                    staticTestData.productTypeDigital.productID
                );
                cy.deleteVsPageTestData(
                    tableRef,
                    staticTestData.productTypePhysical.productID
                );
                break;
            default:
                throw new Error('Option selected is not yet supported');
        }
    });
});
