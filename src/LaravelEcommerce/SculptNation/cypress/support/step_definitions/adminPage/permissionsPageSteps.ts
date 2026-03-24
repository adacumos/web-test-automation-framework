import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    permissionsPageLocators,
    rolesPageLocators,
} from '../../locator_libraries';

When('The user adds roles an existing Permission', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { permissionName, addRoles } = staticTestData.editPermission;

        cy.logStep('Adding Roles to a Permission');
        cy.addRoles(`${permissionName}`, addRoles);
    });
});

Then('The permission is enabled to the Role', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { permissionName, addRoles } = staticTestData.editPermission;

        cy.logStep('Verifying permissions includes the selected Roles');
        dashboardLocators.menuButton('Permissions').click();
        dashboardLocators.searchInput().clear().type(`${permissionName}`);
        dashboardLocators
            .getRecord(`${permissionName}`)
            .parent()
            .within(() => {
                dashboardLocators.viewButton().click();
            });
        permissionsPageLocators.permissionDetailsPage
            .permissionDetailsHeader(`${permissionName}`)
            .should('be.visible');

        addRoles.forEach((roles: string) => {
            permissionsPageLocators.permissionDetailsPage
                .viewRoles(roles)
                .should('be.visible')
                .siblings()
                .should('have.attr', 'aria-labelledby', 'check-circle');
        });
    });
});

Then('The permission updates are reverted', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { permissionName, addRoles } = staticTestData.editPermission;

        cy.intercept('**api/permissions/filters').as('permissionPageFilter');
        cy.logStep('Reversing changes to Permission test data');
        dashboardLocators.menuButton('Permissions').click();
        cy.wait('@permissionPageFilter');
        cy.addRoles(`${permissionName}`, addRoles);
    });
});

When('The user creates a new Permission', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { permissionName, guardName, addRoles } =
            staticTestData.createNewPermission;

        cy.createNewPermission(permissionName, guardName, addRoles);
    });
});

Then('The new Permission are attached to the Role', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { permissionName, addRoles } = staticTestData.createNewPermission;

        cy.logStep('Verifying new permission is added into the Role');
        addRoles.forEach((li: string) => {
            dashboardLocators.menuButton('Roles').click();
            cy.reload();
            dashboardLocators.searchInput().clear().type(li);
            dashboardLocators
                .getRecord(li)
                .parent()
                .within(() => {
                    dashboardLocators.viewButton().click();
                });
            rolesPageLocators.roleDetailsPage
                .roleDetailsHeader(li)
                .should('be.visible');
            rolesPageLocators.roleDetailsPage
                .viewPermission(permissionName)
                .should('be.visible')
                .siblings()
                .should('have.attr', 'aria-labelledby', 'check-circle');
        });
    });
});

Then('The Permission test data are deleted', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { permissionName } = staticTestData.createNewPermission;

        cy.logStep('Delete new permission test data created');
        dashboardLocators.menuButton('Permissions').click();
        cy.reload();
        dashboardLocators.searchInput().clear().type(permissionName);
        dashboardLocators.tableRecords().should('have.length', 1);
        dashboardLocators
            .getRecord(permissionName)
            .parent()
            .within(() => {
                dashboardLocators.deleteButton().click();
            });
        dashboardLocators.confirmButton().click();
        cy.reload();
    });
});
