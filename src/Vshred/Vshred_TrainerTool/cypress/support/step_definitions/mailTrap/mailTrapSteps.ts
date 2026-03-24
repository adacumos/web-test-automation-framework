/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from '../../../../../_libs/testData';

Then('The user verifies the VShred order confirmation email', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.verifyVsEmail(
            staticTestData.fromEmail,
            dynamicTestData.userEmail,
            staticTestData.orderConfirmationEmailSubject
        );
    });
});
