import { consumerSurveyPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            generateRandomSurveyResponse: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to generate ramdom selection to Sculptnation Survey Questionnaires
 * example:  generateRandomSurveyResponse()
 */

export const generateRandomSurveyResponse = (): Cypress.Chainable<any> => {
    cy.logStep('Random answer to Sculptnation Questionnaires');
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    for (let i = 0; i < 6; i++) {
        cy.get(`[data-index="${i}"] button`).then(($buttons) => {
            const randomIndex = Math.floor(Math.random() * $buttons.length);
            const randomResponse = $buttons[randomIndex];
            cy.wrap(randomResponse).click();
        });
    }
    return consumerSurveyPageLocators.metabolicScoreCard().should('be.visible');
};
