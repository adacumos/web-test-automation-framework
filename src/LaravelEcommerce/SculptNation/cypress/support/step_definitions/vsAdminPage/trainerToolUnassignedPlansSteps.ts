/// <reference types="cypress" />

import { When, Then, Step } from '@badeball/cypress-cucumber-preprocessor';
import {
    vsDashboardLocators,
    vsTrainerToolUnassignedPlansLocators,
} from '../../locator_libraries';
import { dynamicTestData } from '../../testData';

Then('The Unassigned Plans filter options are reset', () => {
    cy.intercept('**/api/trainers/unassigned-beta?**').as('unassignedPlans');

    cy.logStep('Clear all search filters');
    vsTrainerToolUnassignedPlansLocators.filterRecord.byStatus().select('All');
    vsTrainerToolUnassignedPlansLocators.filterRecord
        .byPlan()
        .clear()
        .type('{enter}');
    vsTrainerToolUnassignedPlansLocators.filterRecord
        .byName()
        .clear()
        .type('{enter}');
    cy.wait('@unassignedPlans');
});

When(
    'The user searches client record in Trainer Tool Unassigned Plans page',
    () => {
        const clientEmail = dynamicTestData.userEmail;
        Step(
            new Mocha.Context(),
            'The user navigates to "Trainer Tool" - "Unassigned Plans" menu'
        );
        Step(
            new Mocha.Context(),
            'The Unassigned Plans filter options are reset'
        );
        cy.logStep('Search client record by Email');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(60000); // account for delays in creating the record in unassigned plans beta
        vsTrainerToolUnassignedPlansLocators.filterRecord
            .byEmail()
            .clear()
            .type(`${clientEmail}{enter}`);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(5000); // expected delays in refreshing table record
        vsDashboardLocators.getRecord(clientEmail).should('exist');
    }
);

When('A Trainer is assigned to the client user', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { assignedTrainer } = staticTestData.trainerData;
        const clientEmail = dynamicTestData.userEmail;

        Step(
            new Mocha.Context(),
            'The user searches client record in Trainer Tool Unassigned Plans page'
        );

        cy.assignTrainer(clientEmail, assignedTrainer);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(5000); // expected delays in moving record to another table
    });
});

Then('Assign a trainer to Unassigned Plans Beta', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { name } = staticTestData.vsUserInfo.Trainer;
        cy.intercept('**/api/trainers/unassigned-beta?**').as(
            'unassignedPlans'
        );
        vsDashboardLocators
            .getRecord('automation-')
            .should('be.visible')
            .parent()
            .within(() => {
                vsTrainerToolUnassignedPlansLocators
                    .trainerList()
                    .click()
                    .get('.multiselect__input')
                    .type(`${name}{enter}`, { delay: 200 });
            });
        cy.wait('@unassignedPlans');
        return vsDashboardLocators
            .toastMessage()
            .should('be.visible')
            .and('contain.text', 'Successfully assigned trainer to client');
    });
});

When('The client user is assigned to a New Trainer', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { newAssignedTrainer } = staticTestData.trainerData;
        const clientEmail = dynamicTestData.userEmail;

        Step(
            new Mocha.Context(),
            'The user navigates to "Trainer Tool" - "Unassigned Plans" menu'
        );
        Step(
            new Mocha.Context(),
            'The user searches client record in Trainer Tool Unassigned Plans page'
        );

        cy.assignTrainer(clientEmail, newAssignedTrainer);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(5000); // expected delays in moving record to another table

        Step(
            new Mocha.Context(),
            'The user searches client record in Trainer Tool Assigned Plans page'
        );

        Step(
            new Mocha.Context(),
            'The selected Trainer User is assigned to client record'
        );
    });
});

When(
    'The Trainer Manager assigns multiple clients records to a new Trainer',
    () => {
        const filepath = 'cypress/fixtures/customData/resourceValues.json';
        cy.readFile(filepath).then((data) => {
            const trainerName = data[0].newUserName;

            cy.logStep('Selecting first and last records in table');
            vsTrainerToolUnassignedPlansLocators
                .recordCheckbox()
                .first()
                .click();
            vsTrainerToolUnassignedPlansLocators
                .recordCheckbox()
                .last()
                .click();

            cy.logStep('Assign an active Trainer');
            vsTrainerToolUnassignedPlansLocators
                .multipleClient()
                .type(`${trainerName}{enter}`)
                .then(($input) => {
                    cy.wrap($input).should('contain.text', trainerName);
                });
            vsTrainerToolUnassignedPlansLocators.asssignTrainerButton().click();
            return vsDashboardLocators
                .toastMessage()
                .should('be.visible')
                .and('contain.text', 'Successfully assigned trainer to client');
        });
    }
);
