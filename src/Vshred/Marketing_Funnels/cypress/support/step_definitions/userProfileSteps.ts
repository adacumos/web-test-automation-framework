import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { userProfilePageLocators } from '../locator_libraries';

Then('The user validates the VS purchases made', () => {
    userProfilePageLocators.menu.purchasesLink().click();

    cy.get('@staticTestData').then((staticTestData: any) => {
        Object.entries(staticTestData.orders).forEach(([key, value]: any) => {
            cy.logStep(`Verifying purchase: ${key}: ${value}`);
            cy.contains(value).should('be.visible');
        });
    });
});
