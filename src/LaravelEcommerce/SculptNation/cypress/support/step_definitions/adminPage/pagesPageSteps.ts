/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { dashboardLocators, pagesPageLocators } from '../../locator_libraries';

Then('The user sees the Pages listed on the Pages page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.PagesURL);
    });
    dashboardLocators.tableRecords().should('have.length', 25);
});

Then(
    'The user clicks on the {string} ID on the Pages page',
    (menuItem: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            switch (menuItem) {
                case 'First':
                    dashboardLocators
                        .tableRecords()
                        .find('td>div>a')
                        .eq(0)
                        .click();
                    break;
                case 'Second':
                    dashboardLocators
                        .tableRecords()
                        .find('td>div>a')
                        .eq(5)
                        .click();
                    break;
                case 'Third':
                    dashboardLocators
                        .tableRecords()
                        .find('td>div>a')
                        .eq(8)
                        .click();
                    break;
                default:
                    throw new Error(
                        'Selected ID is not yet available for automation test'
                    );
            }
            cy.url().should('include', staticTestData.PagesLinkURL);
        });
    }
);

Then('The user Verifies the Page Details fields are populated', () => {
    pagesPageLocators.ID().should('be.visible');
    pagesPageLocators.Source().should('be.visible');
    pagesPageLocators.Name().should('be.visible');
    pagesPageLocators.Title().should('be.visible');
    pagesPageLocators.Author().should('be.visible');
    pagesPageLocators.CreatedAt().should('be.visible');
    pagesPageLocators.UpdatedAt().should('be.visible');
});

Then(
    'The user Verfies the Routes section is visable and Verifies the existance of the SLUG link',
    () => {
        pagesPageLocators.pagesPageTableLocator().should('be.visible');
    }
);

Then(
    'The user clicks the Slug link and Verifies the page loads and have correct url',
    () => {
        pagesPageLocators
            .pagesPageTableLocator()
            .invoke('removeAttr', 'target')
            .click();
        cy.url().should('contain', Cypress.config().baseUrl);
        cy.go('back');
        pagesPageLocators.pagesPageTableLocator().each((page) => {
            cy.request(page.prop('href')).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
        // });
    }
);
