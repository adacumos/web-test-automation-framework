import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When(
    /^The user navigates to Payment's "(Orders|User-Payment-Methods|Users)" resource links$/,
    (resourceName: string) => {
        cy.navigateToPaymentResource(resourceName);
    }
);
Then(
    /^The Payment details are synced with "(Orders|User-Payment-Methods|Users)" resource$/,
    (resourceName: string) => {
        cy.validatePaymentResource(`${resourceName}`);
    }
);
