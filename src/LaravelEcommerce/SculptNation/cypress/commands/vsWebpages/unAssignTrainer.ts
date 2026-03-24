import {
    vsDashboardLocators,
    vsTrainerToolAssignedPlansLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            unAssignTrainer: (
                userEmail: string,
                trainerUser: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to unassign a Trainer to a client record
 * @param userEmail client record email
 * @param trainerUser trainer to be assigned
 * example:  unAssignTrainer('alice2024@google.com', 'Carrie Moss')
 */

export const unAssignTrainer = (
    userEmail: string,
    trainerUser: string
): Cypress.Chainable<any> => {
    cy.logStep(`Un-Assigning ${trainerUser} to client user ${userEmail}`);
    vsDashboardLocators
        .getRecord(userEmail)
        .should('be.visible')
        .parent()
        .within(() => {
            vsTrainerToolAssignedPlansLocators.unassignTrainerButton().click();
        });
    cy.contains('button', 'Yes').click();
    return vsDashboardLocators
        .toastMessage()
        .should('be.visible')
        .and('contain.text', 'Successfully removed trainer access to client');
};
