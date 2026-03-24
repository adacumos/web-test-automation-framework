import {
    dashboardLocators,
    rolesPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            addPermissions: (
                roleName: string,
                Permission: string[]
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to add permission to a Role
 * @param roleName Role title
 * @param addPermission: Permissions list to be added to a role
 * cy.addRolePermissions('Sales Agent', ['view any user','create any user'])
 *
 */
export const addPermissions = (
    roleName: string,
    Permission: string[]
): Cypress.Chainable<any> => {
    dashboardLocators.searchInput().clear().type(`${roleName}`);
    dashboardLocators
        .getRecord(`${roleName}`)
        .parent()
        .within(() => {
            dashboardLocators.editButton().click();
        });

    cy.logStep(`Adding Permission to Role: ${roleName}`);
    Permission.forEach((li) => {
        rolesPageLocators.addEditRolePage.enablePermission(li).click();
    });
    rolesPageLocators.addEditRolePage.updateRoleButton().click();

    return dashboardLocators.successToast().should('be.visible');
};
