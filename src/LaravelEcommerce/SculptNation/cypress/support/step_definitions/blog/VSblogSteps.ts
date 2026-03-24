/// <reference types="cypress" />
import { Then } from '@badeball/cypress-cucumber-preprocessor';
import VSblogLocators from '../../locator_libraries/blog/VSblogLocators';

Then('Verify the Foodie Club page', () => {
    VSblogLocators.titleText().contains(/VSHRED FOODIES CLUB/i);
    VSblogLocators.video().should('be.visible');
});

Then('Select the give me access to join the foodie club', () => {
    VSblogLocators.button().click();
});
