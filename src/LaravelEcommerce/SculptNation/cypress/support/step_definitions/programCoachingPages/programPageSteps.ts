import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { programPageLocators } from '../../locator_libraries';
import { dynamicTestData } from '../../testData';

Then('Verify the Metabolism-Boosting Shortcuts page', () => {
    programPageLocators.fourteenDayHomePage
        .titleBlock()
        .contains('Metabolism-Boosting Shortcuts');
    programPageLocators.fourteenDayHomePage
        .tickerSlide()
        .contains('14 Day Challenge Starts Soon!');
});

Then('Enter users name and email before signing up for free', () => {
    cy.generateRandomTestEmail().then((randomEmail) => {
        dynamicTestData.userEmail = randomEmail;
        cy.get('@staticTestData').then((staticTestData: any) => {
            programPageLocators.fourteenDayHomePage
                .nameInput()
                .type(`${staticTestData.name}`);
            programPageLocators.fourteenDayHomePage
                .emailInput()
                .type(`${dynamicTestData.userEmail}`);
            programPageLocators.fourteenDayHomePage.signUpButton().click();
        });
    });
});

Then(
    'User select the sign me up button without entering name and email',
    () => {
        programPageLocators.fourteenDayHomePage.signUpButton().click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(3000);
    }
);

Then('User verifies the thanks for joining page', () => {
    programPageLocators.fourteenDayHomePage
        .thanksForJoining()
        .contains('Thanks for Joining the');
    programPageLocators.fourteenDayHomePage
        .facebookGroupButton()
        .should('be.visible');
});

Then('Select facebook group button', () => {
    programPageLocators.fourteenDayHomePage.facebookGroupButton().click();
});
