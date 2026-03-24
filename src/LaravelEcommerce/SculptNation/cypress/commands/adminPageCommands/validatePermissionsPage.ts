import {
    dashboardLocators,
    permissionsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validatePermissionsPages: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Permissions Pages
 * cy.validatePermissionsPages()
 *
 */
export const validatePermissionsPages = (): Cypress.Chainable<any> => {
    cy.logStep('Verify Permissions Landing page');
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { permissionName } = staticTestData.viewPermission;
        const rolesList: string[] = staticTestData.viewPermission.viewRoles;
        const addRole: string[] = staticTestData.editPermission.addRoles;
        permissionsPageLocators.permissionsLandingPage
            .createNewPermission()
            .should('be.visible');
        dashboardLocators.tableRecords().should('have.length.at.least', 25);

        cy.logStep('Searching Permissions');
        dashboardLocators
            .searchInput()
            .should('be.enabled')
            .clear()
            .type(`${permissionName}`);
        dashboardLocators.tableRecords().should('have.length', 1);
        dashboardLocators
            .getRecord(`${permissionName}`)
            .parent()
            .within(() => {
                dashboardLocators.editButton().should('be.visible');
                dashboardLocators.deleteButton().should('be.visible');
                dashboardLocators.viewButton().should('be.visible').click();
            });

        cy.logStep('Verify Permissions Details page');
        permissionsPageLocators.permissionDetailsPage
            .permissionDetailsHeader(`${permissionName}`)
            .should('be.visible');
        permissionsPageLocators.permissionDetailsPage
            .permissionName()
            .parent()
            .next()
            .should('contain.text', `${permissionName}`);

        permissionsPageLocators.permissionDetailsPage
            .permissionGuardName()
            .should('be.visible');

        rolesList.forEach((li) => {
            permissionsPageLocators.permissionDetailsPage
                .viewRoles(li)
                .should('be.visible')
                .siblings()
                .should('have.attr', 'aria-labelledby', 'check-circle');
        });

        cy.logStep('Verify Permissions Edit page');
        permissionsPageLocators.permissionDetailsPage
            .editPermissionButton()
            .click();
        permissionsPageLocators.addEditPermissionPage
            .permissionUpdateHeader(`${permissionName}`)
            .should('be.visible');

        addRole.forEach((li) => {
            permissionsPageLocators.addEditPermissionPage
                .enableRole(li)
                .should('be.visible');
        });

        permissionsPageLocators.addEditPermissionPage
            .updatePermissionButton()
            .should('be.visible');
        permissionsPageLocators.cancelButton().should('be.visible').click();

        cy.logStep('Verify Permission Create New Page');
        dashboardLocators.menuButton('Permissions').click();
        permissionsPageLocators.permissionsLandingPage
            .createNewPermission()
            .click();
        permissionsPageLocators.addEditPermissionPage
            .createPermissionButton()
            .should('be.visible');
        permissionsPageLocators.addEditPermissionPage
            .rolesList()
            .should('be.visible');

        permissionsPageLocators.addEditPermissionPage
            .createPermissionButton()
            .should('be.visible');
        permissionsPageLocators.cancelButton().should('be.visible').click();
    });

    return dashboardLocators.pageHeader('Permission').should('be.visible');
};
