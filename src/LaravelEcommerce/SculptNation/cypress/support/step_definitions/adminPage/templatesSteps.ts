/// <reference types="cypress" />

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { dashboardLocators, templatesLocators } from '../../locator_libraries';

When(
    'The user fills the {string} for the fields in the template page',
    (input: string) => {
        switch (input) {
            case 'Template name':
                templatesLocators.templateField().type('TestTemplate');
                break;
            case 'Updated template name':
                templatesLocators.templateField().type('1');
                break;
            default:
                throw new Error('Invalid button specified');
        }
    }
);

When(
    'The user clicks on the {string} template button in the template page',
    (option: string) => {
        switch (option) {
            case 'Create':
                dashboardLocators.createButton().click();
                break;
            case 'Update':
                dashboardLocators.updateButton().click();
                break;
            default:
                throw new Error('Invalid button specified');
        }
    }
);

Then('The user verifies the {string} template', (template: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (template) {
            case 'Created':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.createdTemplate)
                    .should('be.visible');
                break;
            case 'Updated':
                dashboardLocators
                    .cmsLocator()
                    .contains(staticTestData.updatedTemplate)
                    .should('be.visible');
                break;
            case 'Deleted':
                templatesLocators.updatedTemplate().should('not.be.visible');
                break;
            default:
                throw new Error('Invalid button specified');
        }
    });
});

// When('The user click on the {string} template icon', (action: string) => {
//     switch (action) {
//         case 'Edit':
//             dashboardLocators.editButtonDashboard().click();
//             break;
//         case 'Delete':
//             templatesLocators.templateDeleteIcon().click();
//             break;
//         default:
//             throw new Error('Invalid button specified');
//     }
// });

When('The user clicks on the confirm delete button', () => {
    templatesLocators.templatesConfirmDeleteButton().click();
});

Then('The user Verifies the Templates URL in Templates page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.templatesURL);
    });
});

When(
    'The user clicks on the Templates button from the sidebar menu of the Admin Tool Dashboard',
    () => {
        templatesLocators.templatesMenuButton().click();
    }
);
When('The user clicks on the Edit template icon', () => {
    dashboardLocators.editButtonDashboard().click();
});
When('The user clicks on the Delete template icon', () => {
    templatesLocators.templateDeleteIcon().click();
});
