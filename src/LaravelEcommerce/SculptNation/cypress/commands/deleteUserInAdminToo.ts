import {
    dashboardLocators,
    usersPageLocators,
} from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            deleteUserInAdminTool: () => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to delete a user in the SculptNation Admin Tool
 * @example
 * cy.createUserInAdminTool()
 *
 */
export const deleteUserInAdminTool = (): Cypress.Chainable<any> => {
    usersPageLocators.editUserInformation.deleteUserButton().click();
    usersPageLocators.editUserInformation.confirmUserDeleteButton().click();

    return dashboardLocators
        .successToast()
        .should('be.visible')
        .and('have.text', 'The user was deleted!');
};
