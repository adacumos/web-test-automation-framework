import {
    vsDashboardLocators,
    vsTrainerToolUnassignedPlansLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            assignTrainer: (userEmail: string, trainerUser: string) => void;
        }
    }
}
/**
 * command used to assign a Trainer to a client record
 * @param userEmail client record email
 * @param trainerUser trainer to be assigned
 * example:  assignTrainer('alice2024@google.com', 'Carrie Moss')
 */

export const assignTrainer = (userEmail: string, trainerUser: string): void => {
    cy.intercept('**/api/trainers/unassigned-beta?**').as('unassignedPlans');

    cy.logStep(`Assigning ${trainerUser} to client user ${userEmail}`);
    vsDashboardLocators
        .getRecord(userEmail)
        .eq(0)
        .should('be.visible')
        .parent()
        .within(() => {
            vsTrainerToolUnassignedPlansLocators
                .trainerList()
                .click()
                .get('.multiselect__input')
                .type(`${trainerUser}{enter}`, { delay: 200 });
        });
    cy.wait('@unassignedPlans');
    vsDashboardLocators.toastMessage().should('be.visible');
};
