import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When(
    /^The user navigates to Subscription's "(Plans|Users)" resource links$/,
    (resourceLink: string) => {
        cy.navigateToSubscriptionResource(resourceLink);
    }
);

Then(
    /^The Subscription details are synced with "(Plans|Users)" resource$/,
    (resourceName: string) => {
        cy.validateSubscriptionResource(`${resourceName}`);
        cy.reload();
    }
);
