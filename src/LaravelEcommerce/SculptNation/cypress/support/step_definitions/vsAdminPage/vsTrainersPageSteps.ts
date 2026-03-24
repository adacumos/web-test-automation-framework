/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    vsTrainersPageLocators,
    vsTrainerToolUnassignedPlansLocators,
} from '../../locator_libraries';

Then(
    /^The user verifies the Trainer exists on the "(Active Trainers|Suspended Trainers|Unassigned Plans Beta)" page$/,
    (pageType: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { name } = staticTestData.vsUserInfo.Trainer;
            switch (pageType) {
                case 'Active Trainers':
                    vsTrainersPageLocators.filterRecord
                        .byName()
                        .clear()
                        .type(`${name}{enter}`);
                    vsTrainersPageLocators
                        .getRecord(name)
                        .should('have.length.at.least', 1);
                    break;
                case 'Suspended Trainers':
                    vsTrainersPageLocators.filterRecord
                        .byName()
                        .clear()
                        .type(`${name}{enter}`);
                    vsTrainersPageLocators
                        .getRecord(name)
                        .should('have.length.at.least', 1);
                    break;
                case 'Unassigned Plans Beta':
                    vsTrainerToolUnassignedPlansLocators
                        .trainerList()
                        .eq(0)
                        .type(name)
                        .should('have.length.at.least', 1);
                    vsTrainerToolUnassignedPlansLocators
                        .multipleClient()
                        .eq(0)
                        .type(name)
                        .should('have.length.at.least', 1);
                    break;
                default:
                    throw new Error('Page selected is not available');
            }
        });
    }
);

Then(
    /^The user verifies the Trainer does not exists on the "(Active Trainers|Suspended Trainers|Unassigned Plans Beta)" page$/,
    (pageType: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { name } = staticTestData.vsUserInfo.Trainer;
            switch (pageType) {
                case 'Active Trainers':
                    vsTrainersPageLocators.filterRecord
                        .byName()
                        .clear()
                        .type(`${name}{enter}`);
                    vsTrainersPageLocators
                        .noDataAvailable()
                        .should('be.visible');
                    break;
                case 'Suspended Trainers':
                    vsTrainersPageLocators.filterRecord
                        .byName()
                        .clear()
                        .type(`${name}{enter}`);
                    vsTrainersPageLocators
                        .noDataAvailable()
                        .should('be.visible');
                    break;
                case 'Unassigned Plans Beta':
                    vsTrainerToolUnassignedPlansLocators
                        .trainerList()
                        .eq(0)
                        .type(name)
                        .should('not.have.length', 1);
                    break;
                default:
                    throw new Error('Page selected is not available');
            }
        });
    }
);

Then(
    /^The user selects "(25|50|100|1000)" on the record count selection$/,
    (recordCount: number) => {
        vsTrainersPageLocators.recordCount().select(`${recordCount} rows`);
    }
);

Then(
    'The user verifies the page returns {int} records listed',
    (recordCount: number) => {
        vsTrainersPageLocators
            .getRecords()
            .should('have.length.lte', recordCount);
    }
);

Then(
    /^The user clicks the "(Name|Email|UTM Content Key|Coupon Code)" header column on the page and verifies the list are sorted$/,
    (columnName: string) => {
        switch (columnName) {
            case 'Name':
                vsTrainersPageLocators.sortRecord
                    .byName()
                    .click()
                    .then((th: any) => {
                        cy.wrap(th)
                            .find('.sort-icon.fa.fa-chevron-up')
                            .should('exist');
                    });
                break;
            case 'Email':
                vsTrainersPageLocators.sortRecord
                    .byEmail()
                    .click()
                    .then((th: any) => {
                        cy.wrap(th)
                            .find('.sort-icon.fa.fa-chevron-up')
                            .should('exist');
                    });
                break;
            case 'UTM Content Key':
                vsTrainersPageLocators.sortRecord
                    .byUTMKey()
                    .click()
                    .then((th: any) => {
                        cy.wrap(th)
                            .find('.sort-icon.fa.fa-chevron-up')
                            .should('exist');
                    });
                break;
            case 'Coupon Code':
                vsTrainersPageLocators.sortRecord
                    .byCouponCode()
                    .click()
                    .then((th: any) => {
                        cy.wrap(th)
                            .find('.sort-icon.fa.fa-chevron-up')
                            .should('exist');
                    });
                break;
            default:
                throw new Error(
                    `The column header ${columnName} selected is invalid`
                );
        }
    }
);

Then(
    'The user filters the list by typing {string} on the Name header column and verifies the list is filtered',
    (filterValue: string) => {
        vsTrainersPageLocators.filterRecord
            .byName()
            .type(`${filterValue}{enter}`);
        vsTrainersPageLocators
            .getRecord(filterValue)
            .should('have.length.at.least', 1);
    }
);

Then('The user suspends the trainor from the list of Active Trainers', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { name } = staticTestData.vsUserInfo.Trainer;

        vsTrainersPageLocators.filterRecord.byName().type(`${name}{enter}`);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000);
        vsTrainersPageLocators.suspendButton().eq(0).click();
        vsTrainersPageLocators.suspendDialog().within(() => {
            vsTrainersPageLocators.suspendDialogButton().click();
        });
    });
});

Then(
    'The user reinstates the trainer from the list of Suspended Trainers',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { name } = staticTestData.vsUserInfo.Trainer;

            vsTrainersPageLocators.filterRecord
                .byName()
                .clear()
                .type(`${name}{enter}`);
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(2000);
            vsTrainersPageLocators.reinstateButton().eq(0).click();
            vsTrainersPageLocators.reinstateDialog().within(() => {
                vsTrainersPageLocators.reinstateDialogButton().click();
            });
        });
    }
);
