/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from '../../testData';

Then(
    'The user verifies the existence of {string} order email',
    (button: string) => {
        switch (button) {
            case 'clean bulk':
                cy.get('@staticTestData').then((staticTestData: any) => {
                    cy.verifyVsEmailBulkOrders(
                        staticTestData.fromEmail,
                        dynamicTestData.userEmail,
                        staticTestData.orderandLoginConfirmationEmailSubject
                    );
                });
                // QA-1644: Temporiry skip CDP Welcome Email validation
                // cy.get('@staticTestData').then((staticTestData: any) => {
                //     cy.verifyVsEmailBulkOrders(
                //     staticTestData.fromEmail1,
                //     dynamicTestData.userEmail,
                //     staticTestData.welcomeEmailSubject);
                // });
                cy.get('@staticTestData').then((staticTestData: any) => {
                    cy.verifyVsEmailBulkOrders(
                        staticTestData.fromEmail,
                        dynamicTestData.userEmail,
                        staticTestData.orderConfirmationEmailSubject
                    );
                });
                break;
            case 'ripped':
                // QA-1644: Temporiry skip CDP Welcome Email validation
                // cy.get('@staticTestData').then((staticTestData: any) => {
                //     cy.verifyVsEmailBulkOrders(
                //     staticTestData.fromEmail1,
                //     dynamicTestData.userEmail,
                //     staticTestData.welcomeEmailSubject);
                // });
                cy.get('@staticTestData').then((staticTestData: any) => {
                    cy.verifyVsEmailBulkOrders(
                        staticTestData.fromEmail,
                        dynamicTestData.userEmail,
                        staticTestData.subscriptionEmailSubject
                    );
                });
                cy.get('@staticTestData').then((staticTestData: any) => {
                    cy.verifyVsEmailBulkOrders(
                        staticTestData.fromEmail,
                        dynamicTestData.userEmail,
                        staticTestData.orderandLoginConfirmationEmailSubject
                    );
                });
                cy.get('@staticTestData').then((staticTestData: any) => {
                    cy.verifyVsEmailBulkOrders(
                        staticTestData.fromEmail,
                        dynamicTestData.userEmail,
                        staticTestData.trailEmailSubject
                    );
                });
                cy.get('@staticTestData').then((staticTestData: any) => {
                    cy.verifyVsEmailBulkOrders(
                        staticTestData.fromEmail,
                        dynamicTestData.userEmail,
                        staticTestData.orderConfirmationEmailSubject
                    );
                });
                break;
            default:
                throw new Error(`Invalid ${button}`);
        }
    }
);
