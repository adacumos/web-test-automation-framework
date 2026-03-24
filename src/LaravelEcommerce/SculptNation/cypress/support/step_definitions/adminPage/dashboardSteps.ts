/// <reference types="cypress" />

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { dashboardLocators } from '../../locator_libraries';

When(
    'The user clicks on the {string} button from the sidebar menu of the Admin Tool Dashboard',
    (menuItem: string) => {
        cy.logStep(`Click on ${menuItem}`);
        dashboardLocators.menuButton(menuItem).click();
    }
);

Then('The {string} pages are loaded', (menuItem: string) => {
    cy.logStep(`Opening ${menuItem} page for regression`);
    switch (menuItem) {
        case 'Offers':
            cy.validateOfferPages();
            break;
        case 'Products':
            cy.validateProductsPages();
            break;
        case 'Roles':
            cy.validateRolesPages();
            break;
        case 'Permissions':
            cy.validatePermissionsPages();
            break;
        case 'Dashboard':
            cy.validateDashboardPage();
            break;
        default:
            throw new Error(
                'Selected menu item is not yet available for automation test'
            );
    }
});

Then('The Finance {string} pages are loaded', (menuItem: string) => {
    switch (menuItem) {
        case 'Discounts':
            cy.validateDiscountsPages();
            break;
        case 'Plans':
            cy.validatePlansPages();
            break;
        case 'Orders':
            cy.validateOrdersPages();
            break;
        case 'Subscriptions':
            cy.validateSubscriptionsPages();
            break;
        case 'Payments':
            cy.validatePaymentsPages();
            break;
        default:
            throw new Error(
                'Selected Finance menu item is not yet available for automation test'
            );
    }
});

Then('The Shipping {string} pages are loaded', (menuItem: string) => {
    switch (menuItem) {
        case 'Shipments':
            cy.validateShipmentsPages();
            break;
        case 'Categories':
            cy.validateShippingCategoriesPages();
            break;
        case 'Carriers':
            cy.validateShippingCarriersPages();
            break;
        case 'Fulfillment-Logs':
            cy.validateShippingFulfillmentLogsPages();
            break;

        default:
            throw new Error(
                'Selected Shipping menu item is not yet available for automation test'
            );
    }
});

Then(
    'The user sees a toast message with the text {string}',
    (toastMessage: string) => {
        dashboardLocators
            .successToast()
            .should('be.visible')
            .and('have.text', toastMessage);
    }
);

When(
    'The user captures the {string} resource details',
    (resourceName: string) => {
        const filepath = 'cypress/fixtures/customData/resourceValues.json';
        cy.writeFile(filepath, []);

        cy.logStep('Capture Resource values for reference');
        cy.getResourceValues(`${resourceName}`);
    }
);

When(
    'The user changes the {string} Chart point value to {string}',
    (panelName: string, dropdownValue: string) => {
        dashboardLocators
            .dashboardCardPanel()
            .contains(panelName)
            .parents('.px-3.mb-6')
            .within(() => {
                dashboardLocators.cardPanelDropdown().select(dropdownValue);
                dashboardLocators
                    .chartPoints()
                    .should('have.length', dropdownValue);
            });
    }
);

Then('The Checkout Forms {string} pages are loaded', (menuItem: string) => {
    cy.validateCheckoutFormPages(menuItem);
});
