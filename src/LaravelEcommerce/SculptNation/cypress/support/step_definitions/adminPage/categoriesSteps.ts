/// <reference types="cypress" />

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { categoriesLocators, dashboardLocators } from '../../locator_libraries';

When(
    'The user Clicks on Categories under ECOMMERCE from the sidebar menu of the Admin Tool Dashboard',
    () => {
        categoriesLocators.sidebarMenuLocator().eq(0).click();
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.url().should('include', staticTestData.eCommCategoriesURL);
        });
    }
);

When(
    'The user Clicks on Categories under Shipping from the sidebar menu of the Admin Tool Dashboard',
    () => {
        categoriesLocators.sidebarMenuLocator().eq(1).click();
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.url().should('include', staticTestData.shippingCategoriesURL);
        });
    }
);

Then('The user Verifies the table is populated with entries', () => {
    dashboardLocators.tableRecords().then((row) => {
        dashboardLocators.tableRecords().should('have.length', row.length);
    });
});

Then('The user Verifies each table entry details are populated', () => {
    dashboardLocators.tableRecords().then((tableRows) => {
        dashboardLocators
            .tableRecords()
            .should('have.length', tableRows.length);
        /* eslint-disable no-unused-expressions, no-plusplus */
        for (let x = 0; tableRows.length > x; x++) {
            dashboardLocators
                .tableRecords()
                .eq(x)
                .find('td')
                .then((rowElement) => {
                    dashboardLocators
                        .tableRecords()
                        .eq(x)
                        .find('td')
                        .should('have.length', rowElement.length);
                    /* eslint-disable no-unused-expressions, no-plusplus */
                    for (let i = 0; rowElement.length > i; i++) {
                        /* eslint-disable no-unused-expressions, @typescript-eslint/no-unused-expressions */
                        expect(rowElement.eq(i)).to.be.visible;
                    }
                });
        }
    });
});

Then('The user Creates a new Category', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        categoriesLocators.createCategoryButton().click();
        categoriesLocators
            .categoryNameField()
            .type(staticTestData.newCategoryName);
        categoriesLocators.createSaveNewCategoryButton().click();
    });
});

Then('The user Verifies the newly created Category', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        categoriesLocators
            .spanLocator()
            .contains(staticTestData.newCategoryName)
            .should('be.visible');
    });
});

Then('The user Deletes the newly created Category', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        dashboardLocators.searchInput().type(staticTestData.newCategoryName);
    });
    categoriesLocators.viewNewCategory().click();
    categoriesLocators.deleteCategoryButtonModal().click();
    categoriesLocators.deleteCategoryButton().click();
});

Then(
    'The user Verifies the newly created Category is removed from the Categories list',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            categoriesLocators
                .spanLocator()
                .contains(staticTestData.newCategoryName)
                .should('not.exist');
        });
    }
);
