import {
    dashboardLocators,
    rolesPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createNewRole: (
                roleName: string,
                roleGuard: string,
                rolePermissions: string[]
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create new Roles through LE Admin
 *
 * @param roleName Role Name
 * @param roleGuard Role application reference
 * @param rolePermissions array of permissions attached to a role
 * example:  createNewRole('QA Engineer','nova','["allow login to nova admin panel", "view any user","impersonate any user"]')
 */

export const createNewRole = (
    roleName: string,
    roleGuard: string,
    rolePermissions: string[]
): Cypress.Chainable<any> => {
    cy.logStep('Verify New Role to be created do not exist');
    dashboardLocators.searchInput().clear().type(`${roleName} {enter}`);
    dashboardLocators.noMatchedRecord('Role').should('be.visible');

    cy.logStep('Creating New Role');
    rolesPageLocators.rolesLandingPage.createNewRole().click();
    rolesPageLocators.addEditRolePage.roleName().clear().type(`${roleName}`);
    rolesPageLocators.addEditRolePage.guardName().select(`${roleGuard}`);
    rolePermissions.forEach((li) => {
        rolesPageLocators.addEditRolePage.enablePermission(li).click();
    });
    rolesPageLocators.addEditRolePage.createRoleButton().click();
    dashboardLocators.successToast().should('be.visible');
    return rolesPageLocators.roleDetailsPage
        .roleDetailsHeader(roleName)
        .should('be.visible');
};
