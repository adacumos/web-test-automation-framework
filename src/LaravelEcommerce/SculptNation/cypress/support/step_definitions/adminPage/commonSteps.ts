/// <reference types="cypress" />

import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    templatesLocators,
    agentListLocators,
    salesFunnelsLocators,
} from '../../locator_libraries';

Then('The user clicks on the {string} links', (link: string) => {
    switch (link) {
        case 'Redirects':
            dashboardLocators.redirectsLinks().click();
            break; //  Once there are more than one redirect we can itterate through here.
        case 'Templates':
            templatesLocators.templatesLinks().click();
            break;
        case 'Routes':
            dashboardLocators.routeLinks().click();
            break;
        default:
            throw new Error('Invalid button specified');
    }
});

When('The user enters the {string} in the search textbox', (option: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (option) {
            case 'template id':
                dashboardLocators.searchInput().type(staticTestData.templateID);
                break;
            case 'route id':
                dashboardLocators.searchInput().type(staticTestData.routeID);
                break;
            case 'agent id':
                dashboardLocators.searchInput().type(staticTestData.agencyID);
                break;
            case 'message id':
                dashboardLocators.searchInput().type(staticTestData.messageID);
                break;
            case 'list id':
                dashboardLocators.searchInput().type(staticTestData.listID);
                break;
            case 'connection id':
                dashboardLocators
                    .searchInput()
                    .type(staticTestData.connectionID);
                break;
            case 'order id':
                dashboardLocators.searchInput().type(staticTestData.orderID);
                break;
            default:
                throw new Error('Invalid button specified');
        }
    });
});

When('The user clicks on the {string} button', (buttonName: string) => {
    switch (buttonName) {
        case 'create template':
            templatesLocators.createTemplateButton().click();
            break;
        case 'create sales agent':
            agentListLocators.createAgentListButton().click();
            break;
        case 'Create Funnel':
            salesFunnelsLocators.createFunnelButton().click();
            break;
        case 'Create Confirmation':
            dashboardLocators.createButton().click();
            break;
        case 'Create Message':
            dashboardLocators.createButton().click();
            break;
        case 'Create Connection':
            dashboardLocators.createButton().click();
            break;
        case 'Create Return':
            dashboardLocators.createButton().click();
            break;
        default:
            throw new Error('Invalid button specified');
    }
});

Then(
    'The user verifies the table and table headers in {string} page',
    (option: string) => {
        switch (option) {
            case 'Sales Funnels':
                cy.get('@staticTestData').then((staticTestData: any) => {
                    salesFunnelsLocators.tableBody().should('be.visible');
                    const headerNames: string[] =
                        staticTestData.adminPage.tableHeader;
                    cy.logStep('Verify Expected table columns are visible');
                    headerNames.forEach((header) => {
                        salesFunnelsLocators
                            .tableHeaderSales(header)
                            .scrollIntoView()
                            .should('be.visible');
                    });
                });
                break;
            default:
                throw new Error('Invalid button specified');
        }
    }
);

Then('The user Verifies all {string} Details fields', (option: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (option) {
            case 'Redirect':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.numberOne)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.shop)
                    .should('be.visible');
                dashboardLocators.redirectsSuccess().should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.products)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.timeStamp)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.timeStamp)
                    .should('be.visible');
                break;
            case 'template id':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.templateID)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.templateName)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.createdAt)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.updatedAt)
                    .should('be.visible');
                break;
            case 'route id':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.routeID)
                    .should('be.visible');
                break;
            case 'Sales Funnel':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.funnelName)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.route)
                    .should('be.visible');
                break;
            case 'message id':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.messageID)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.messageName)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.messageBody)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.messageSentCount)
                    .should('be.visible');
                break;
            case 'list id':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.listID)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.listName)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.listReference)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.createdAt)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.updatedAt)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.marketingProvider)
                    .should('be.visible');
                break;
            case 'connection id':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.connectionID)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.marketingList)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.marketable)
                    .should('be.visible');
                break;
            case 'order id':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.orderID)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.order)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.reason)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.status)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.baseCurrencyAmount)
                    .should('be.visible');
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.amount)
                    .should('be.visible');
                break;
            default:
                throw new Error('Invalid button specified');
        }
    });
});
