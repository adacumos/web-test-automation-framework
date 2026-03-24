import {
    dashboardLocators,
    permissionsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createNewPermission: (
                permissionName: string,
                guardName: string,
                addRoles: string[]
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create new Permission through LE Admin
 *
 * @param permissionName Permission Name
 * @param guardName Permission guard reference
 * @param addRoles array of roles the new permission will be enabled
 * example:  createNewPermission('add comment','nova','["Sales Agent","Customer Service", "Admin"]')
 */

export const createNewPermission = (
    permissionName: string,
    guardName: string,
    addRoles: string[]
): Cypress.Chainable<any> => {
    cy.logStep('Verify New Permission to be created do not exist');
    dashboardLocators.searchInput().clear().type(`${permissionName} {enter}`);
    dashboardLocators.noMatchedRecord('Permission').should('be.visible');

    cy.logStep('Creating New Permission');
    permissionsPageLocators.permissionsLandingPage
        .createNewPermission()
        .click();
    permissionsPageLocators.addEditPermissionPage
        .permissionName()
        .clear()
        .type(`${permissionName}`);
    permissionsPageLocators.addEditPermissionPage
        .guardName()
        .select(`${guardName}`);
    addRoles.forEach((li) => {
        permissionsPageLocators.addEditPermissionPage.enableRole(li).click();
    });

    permissionsPageLocators.addEditPermissionPage
        .createPermissionButton()
        .click();
    dashboardLocators.successToast().should('be.visible');
    return permissionsPageLocators.permissionDetailsPage
        .permissionDetailsHeader(permissionName)
        .should('be.visible');
};
