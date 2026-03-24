import {
    dashboardLocators,
    rolesPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            validateRolesPages: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to regress LE Admin Roles Pages
 * cy.validateRolesPages()
 *
 */
export const validateRolesPages = (): Cypress.Chainable<any> => {
    cy.logStep('Verify Roles Landing page');
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { roleName } = staticTestData;
        const permissionList: string[] = staticTestData.permissions;
        const addPermission: string[] = staticTestData.editRoles.addPermissions;
        rolesPageLocators.rolesLandingPage.createNewRole().should('be.visible');
        dashboardLocators.tableRecords().should('have.length.at.least', 10);

        cy.logStep('Searching Roles');
        dashboardLocators
            .searchInput()
            .should('be.enabled')
            .clear()
            .type(`${roleName}`);
        dashboardLocators.tableRecords().should('have.length', 1);
        dashboardLocators
            .getRecord(`${roleName}`)
            .parent()
            .within(() => {
                dashboardLocators.editButton().should('be.visible');
                dashboardLocators.deleteButton().should('be.visible');
                dashboardLocators.viewButton().should('be.visible').click();
            });

        cy.logStep('Verify Roles Details page');
        rolesPageLocators.roleDetailsPage
            .roleDetailsHeader(`${roleName}`)
            .should('be.visible');
        rolesPageLocators.roleDetailsPage
            .roleName()
            .parent()
            .next()
            .should('contain.text', `${roleName}`);

        rolesPageLocators.roleDetailsPage.roleGuardName().should('be.visible');

        permissionList.forEach((li) => {
            rolesPageLocators.roleDetailsPage
                .viewPermission(li)
                .should('be.visible')
                .siblings()
                .should('have.attr', 'aria-labelledby', 'check-circle');
        });

        cy.logStep('Verify Roles Edit page');
        rolesPageLocators.roleDetailsPage.editRoleButton().click();
        rolesPageLocators.addEditRolePage
            .roleUpdateHeader(`${roleName}`)
            .should('be.visible');

        addPermission.forEach((li) => {
            rolesPageLocators.addEditRolePage
                .enablePermission(li)
                .should('be.visible');
        });

        rolesPageLocators.addEditRolePage
            .updateRoleButton()
            .should('be.visible');
        rolesPageLocators.cancelButton().should('be.visible').click();

        cy.logStep('Verify Roles Create New Page');
        dashboardLocators.menuButton('Roles').click();
        rolesPageLocators.rolesLandingPage.createNewRole().click();
        rolesPageLocators.addEditRolePage
            .createNewRoleHeader()
            .should('be.visible');
        rolesPageLocators.addEditRolePage.permissionList().should('be.visible');

        rolesPageLocators.addEditRolePage
            .createRoleButton()
            .should('be.visible');
        rolesPageLocators.cancelButton().should('be.visible').click();
    });

    return dashboardLocators.pageHeader('Roles').should('be.visible');
};
