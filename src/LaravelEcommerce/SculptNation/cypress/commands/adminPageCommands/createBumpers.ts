import {
    dashboardLocators,
    leCheckoutFormsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createBumper: (recordValue: any) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create new Bumpers through LE Admin
 * @param templateName Bumper Template Name
 * example:  createBumpers('Bumpers','New Bumpers')
 */

export const createBumper = (recordValue: any): Cypress.Chainable<any> => {
    cy.logStep(`Verify New ${recordValue.bumperName} is unique`);
    dashboardLocators.searchInput().clear().type(recordValue.bumperName);
    dashboardLocators.noMatchedRecord('Bumper').should('be.visible');

    cy.logStep(`Creating New ${recordValue.bumperName}`);
    dashboardLocators.createResourceButton('bumpers').click();
    leCheckoutFormsPageLocators.bumperPage.createBumper
        .bumperNameInputBox()
        .clear()
        .type(recordValue.bumperName);
    leCheckoutFormsPageLocators.bumperPage.createBumper
        .addMediaButton()
        .selectFile(recordValue.filepath, { force: true });
    leCheckoutFormsPageLocators.bumperPage.createBumper
        .configureOffer()
        .select(recordValue.offer);
    leCheckoutFormsPageLocators.bumperPage.createBumper
        .configureTemplate()
        .select(recordValue.template);
    leCheckoutFormsPageLocators.bumperPage.createBumper
        .templateOption()
        .type('{backspace},{del}');
    leCheckoutFormsPageLocators.bumperPage.createBumper
        .templateOption()
        .type(recordValue.options, {
            parseSpecialCharSequences: false,
        });
    dashboardLocators.createButton().click();
    return dashboardLocators.successToast().should('be.visible');
};
