import { usersPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            deleteVsUserViaAdminTool: (
                userEmail: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to delete a user in VShred Admin Tool
 *
 * @example
 * cy.deleteVsUserViaAdminTool()
 *
 */
export const deleteVsUserViaAdminTool = (
    userEmail: string
): Cypress.Chainable<any> => {
    cy.logStep('Click Delete button and confirm');
    usersPageLocators.editUserForm.deleteButton().click(); // Cypress auto accepts confirmations

    cy.logStep('Check successful user deletion');
    return usersPageLocators.userDetails
        .userDeletedMessage(userEmail)
        .should('be.visible');
};
