import {
    dashboardLocators,
    permissionsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            addRoles: (
                permissionName: string,
                Roles: string[]
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to add Roles to Permission
 * @param permissionName Permission Name title
 * @param Roles Roles list to be added to a Permission
 * cy.addRoles('view any user',['Sales Agent', 'Trainer'])
 *
 */
export const addRoles = (
    permissionName: string,
    Roles: string[]
): Cypress.Chainable<any> => {
    dashboardLocators.searchInput().clear().type(`${permissionName}`);
    dashboardLocators
        .getRecord(`${permissionName}`)
        .parent()
        .within(() => {
            dashboardLocators.editButton().click();
        });

    cy.logStep(`Adding Roles to a Permission: ${permissionName}`);
    Roles.forEach((li) => {
        permissionsPageLocators.addEditPermissionPage.enableRole(li).click();
    });
    permissionsPageLocators.addEditPermissionPage
        .updatePermissionButton()
        .click();

    return dashboardLocators.successToast().should('be.visible');
};
