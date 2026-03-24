/// <reference types="cypress" />

import { When, Then, Step } from '@badeball/cypress-cucumber-preprocessor';
import {
    vsDashboardLocators,
    vsTrainerToolAssignedPlansLocators,
} from '../../locator_libraries';
import { dynamicTestData } from '../../testData';

When('The Assigned Clients filter options are reset', () => {
    cy.intercept('**/api/trainers/**/assigned-beta?**').as('assignedClient');

    cy.logStep('Clear all search filters');
    vsTrainerToolAssignedPlansLocators.filterRecord
        .byName()
        .clear()
        .type('{enter}');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // expected delay in updating the TT table records
    vsTrainerToolAssignedPlansLocators.filterRecord
        .byEmail()
        .clear()
        .type('{enter}');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // expected delay in updating the TT table records
    vsTrainerToolAssignedPlansLocators.filterRecord.byStatus().select('All');
    vsTrainerToolAssignedPlansLocators.filterRecord
        .byUploadStatus()
        .select('All');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // expected delay in updating the TT table records
    cy.wait('@assignedClient');
});

Then(
    'The user searches client record in Trainer Tool Assigned Plans page',
    () => {
        const clientEmail = dynamicTestData.userEmail;

        Step(
            new Mocha.Context(),
            'The user navigates to "Trainer Tool" - "Assigned Clients" menu'
        );
        Step(
            new Mocha.Context(),
            'The Assigned Clients filter options are reset'
        );
        cy.logStep('Search client record by Email');
        vsTrainerToolAssignedPlansLocators.filterRecord
            .byEmail()
            .clear()
            .type(`${clientEmail}{enter}`);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(5000); // expected delay in updating the TT table records
        vsDashboardLocators
            .tableRecord()
            .should('not.have.length.greaterThan', 1);
        vsDashboardLocators.getRecord(clientEmail).should('exist');
    }
);

When('The user uploads a custom plan to client record', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { filepath } = staticTestData.trainerData;
        const clientEmail = dynamicTestData.userEmail;
        vsTrainerToolAssignedPlansLocators
            .uploadButton()
            .click({ force: true });
        vsTrainerToolAssignedPlansLocators
            .uploadFile()
            .selectFile(filepath, { force: true });
        vsTrainerToolAssignedPlansLocators.uploadAndSendButton().click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000); // accounts for observed delay in updating the record
        vsTrainerToolAssignedPlansLocators.filterRecord
            .byEmail()
            .clear()
            .type(`${clientEmail}{enter}`);

        cy.logStep(`Verify Upload Plan Status changes to "Uploaded"`);
        vsTrainerToolAssignedPlansLocators
            .uploadedButton()
            .should('be.visible');
    });
});

Then(
    'Verify the Refunded CDP status is synced with VS Admin - Trainer Tool - {string} page',
    (trainerPage: string) => {
        const clientEmail = dynamicTestData.userEmail;

        Step(
            new Mocha.Context(),
            'The user logs into the Vshred Admin Tool as "Trainer Manager" user'
        );

        switch (trainerPage.toLowerCase()) {
            case 'assigned clients':
            case 'assigned clients-beta':
                Step(
                    new Mocha.Context(),
                    'The user searches client record in Trainer Tool Assigned Plans page'
                );

                break;
            case 'unassigned plans':
            case 'unassigned plans-beta':
                Step(
                    new Mocha.Context(),
                    'The user searches client record in Trainer Tool Unassigned Plans page'
                );
                break;
            default:
                throw new Error(
                    'Trainer Tool page selected is not yet supported'
                );
        }

        vsDashboardLocators
            .getRecord(clientEmail)
            .parents('tr')
            .within(() => {
                vsTrainerToolAssignedPlansLocators
                    .planStatus()
                    .contains(/refunded/i);
            });
    }
);
When('The Trainer is unassigned from the client user', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { assignedTrainer } = staticTestData.trainerData;
        const clientEmail = dynamicTestData.userEmail;

        Step(
            new Mocha.Context(),
            'The user searches client record in Trainer Tool Assigned Plans page'
        );

        cy.unAssignTrainer(clientEmail, assignedTrainer);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(5000); // expected delays in moving record to another table
    });
});

Then(
    'The most recent custom plan purchased is reflected in Trainer Tool page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { offerTitle } = staticTestData.upSellOffer;

            vsTrainerToolAssignedPlansLocators
                .planName()
                .should(($planName) => {
                    const offerName = $planName.text().trim();
                    return expect(
                        offerTitle.some((title: any) =>
                            offerName.includes(title)
                        )
                    ).to.be.true;
                })
                .then(($el) => {
                    cy.wrap($el)
                        .parents('tr')
                        .within(() => {
                            vsTrainerToolAssignedPlansLocators
                                .uploadButton()
                                .should('contain.text', 'Upload');
                        });
                });
        });
    }
);

Then('The selected Trainer User is assigned to client record', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { newAssignedTrainer } = staticTestData.trainerData;
        vsTrainerToolAssignedPlansLocators
            .assignedTrainer()
            .should('contain.text', newAssignedTrainer);
    });
});

Then('Multiple client records are assigned to the new Trainer', () => {
    Step(
        new Mocha.Context(),
        'The user navigates to "Trainer Tool" - "Assigned Clients" menu'
    );
    vsDashboardLocators.tableRecord().should('have.length.at.least', 1);
});
