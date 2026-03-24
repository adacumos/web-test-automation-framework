import {
    dashboardLocators,
    leCheckoutFormsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createBumperTemplate: (
                templateName: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create new Bumper Templates in LE Admin
 * @param templateName Bumper Template Name
 * example:  createCheckoutForm('Bumpers','New Bumpers')
 */

export const createBumperTemplate = (
    templateName: string
): Cypress.Chainable<any> => {
    cy.logStep(`Verify New ${templateName} is unique`);
    dashboardLocators.getRecord(templateName).should('not.have.length');

    cy.logStep(`Creating New ${templateName}`);
    leCheckoutFormsPageLocators.bumperTemplatePage
        .createBumperTemplateButton()
        .click();
    leCheckoutFormsPageLocators.bumperTemplatePage
        .templateInputBox()
        .clear()
        .type(templateName);
    dashboardLocators.createButton().click();
    return dashboardLocators.successToast().should('be.visible');
};
