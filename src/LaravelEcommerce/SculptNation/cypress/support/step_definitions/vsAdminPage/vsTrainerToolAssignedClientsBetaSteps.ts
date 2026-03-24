/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { vsTrainerToolAssignedClientBetaLocators } from '../../locator_libraries';

Then('The user selects an active customer record with assigned trainer', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { name } = staticTestData.trainerInfo;

        vsTrainerToolAssignedClientBetaLocators.filterRecord
            .byTrainer()
            .click()
            .type(`${name}{enter}`);
        vsTrainerToolAssignedClientBetaLocators
            .getRecord(name)
            .should('have.length.gte', 1);
    });
});
