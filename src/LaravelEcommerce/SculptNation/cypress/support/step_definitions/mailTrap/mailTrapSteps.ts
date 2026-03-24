/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from '../../testData';

Then('The user checks {string} email', (emailSubject: string) => {
    cy.logStep(
        `Checking Order Confirmation Email for ${dynamicTestData.userEmail}`
    );

    let subject = '';

    if (emailSubject === 'Order Confirmation') {
        subject = 'Your Sculpt Nation order has been received!';
    } else if (emailSubject === 'Shipment Confirmation') {
        subject = 'Your Sculpt Nation order has been Shipped!';
    } else {
        subject = 'SculptNation Confirmation: Your Subscription is Cancelled';
    }

    cy.checkEmail(
        'support@sculptnation.com',
        dynamicTestData.userEmail,
        subject
    );
});

Then(
    /^The user verifies (Order|Refund|Shipment|Subscription|Sales Tax) email contents$/,
    (emailType: string) => {
        cy.logStep(`Verify contents for ${emailType} email`);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(10000);
        cy.checkEmailContent(emailType, dynamicTestData.userEmail);
    }
);

Then(
    'The user verfies the contents of {string} Order Confirmation emails',
    (emailType: string) => {
        cy.logStep(
            `Verify contents of ${emailType} order confirmation emails `
        );
        cy.checkOrderEmailContents(emailType);
    }
);
