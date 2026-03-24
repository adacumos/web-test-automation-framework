/// <reference types="cypress" />

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    rolesPageLocators,
    usersPageLocators,
} from '../../locator_libraries';
import { dynamicTestData } from '../../testData';

When('The user adds permission an existing Roles', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { roleName, addPermissions } = staticTestData.editRoles;

        cy.logStep('Adding permissions to a Role');
        cy.addPermissions(`${roleName}`, addPermissions);
        cy.log('Permissions added');
    });
});

Then('The new role permission is enabled', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { addPermissions } = staticTestData.editRoles;

        cy.logStep('Verifying added permission are enabled');
        cy.reload();
        addPermissions.forEach((li: string) => {
            rolesPageLocators.roleDetailsPage
                .viewPermission(li)
                .should('be.visible')
                .siblings()
                .should('have.attr', 'aria-labelledby', 'check-circle');
        });
    });
});

Then('The role permission updates are reverted', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { roleName, addPermissions } = staticTestData.editRoles;

        cy.intercept('**api/roles/filters').as('rolesPageFilter');
        cy.logStep('Reverting permissions added into a Role');
        dashboardLocators.menuButton('Roles').click();
        cy.wait('@rolesPageFilter');
        cy.addPermissions(`${roleName}`, addPermissions);
        cy.log('Permissions reverted');
    });
});

When('The user creates a new Role', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { roleName, roleGuard, rolePermissions } =
            staticTestData.createNewRoles;

        cy.createNewRole(roleName, roleGuard, rolePermissions);
    });
});

Then('The new Role can be attached to any user', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { roleName } = staticTestData.createNewRoles;
        const { userFirstName, userLastName } = staticTestData.newUser;
        dynamicTestData.userPassword = Math.floor(
            Math.random() * 100000000
        ).toString();

        dashboardLocators.menuButton('Users').click();

        usersPageLocators.createNewUserButton().click();

        cy.intercept('**api/roles/relate**').as('rolesRelate');

        cy.generateRandomTestEmail().then((randomEmail) => {
            dynamicTestData.userEmail = randomEmail;
            cy.createUserInAdminTool(
                userFirstName,
                userLastName,
                dynamicTestData.userEmail,
                dynamicTestData.userPassword
            );
        });

        cy.wait('@rolesRelate');

        cy.attachResource('Users', 'Roles', roleName);
    });
});
Then('The Roles test data are deleted', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { roleName } = staticTestData.createNewRoles;

        cy.logStep('Delete test user created');
        cy.deleteUserInAdminTool();

        cy.logStep('Deleting test role created');
        dashboardLocators.menuButton('Roles').click();
        cy.reload();

        dashboardLocators.searchInput().clear().type(roleName);
        dashboardLocators
            .getRecord(roleName)
            .parent()
            .within(() => {
                dashboardLocators.viewButton().click();
            });
        rolesPageLocators.roleDetailsPage
            .deleteRoleButton()
            .click()
            .then(() => {
                dashboardLocators.confirmButton().click();
            });
    });
});

Then(
    /^The user attaches the "(Admin|Customer Service|Developer|Manages Discounts|Marketer|Media Buyer|Sales Agent|Sales Manager|Sales Supervisor|Social Media|Quality Engineer|Trainer|View Myself Only|Admin Myself Only)" role to the user$/,
    (option: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { admin } = staticTestData.roleNameList;
            const { customerService } = staticTestData.roleNameList;
            const { developer } = staticTestData.roleNameList;
            const { managesDiscounts } = staticTestData.roleNameList;
            const { marketer } = staticTestData.roleNameList;
            const { mediaBuyer } = staticTestData.roleNameList;
            const { salesAgent } = staticTestData.roleNameList;
            const { salesManager } = staticTestData.roleNameList;
            const { salesSupervisor } = staticTestData.roleNameList;
            const { socialMedia } = staticTestData.roleNameList;
            const { qualityEngineer } = staticTestData.roleNameList;
            const { trainer } = staticTestData.roleNameList;
            const { viewMyselfOnly } = staticTestData.roleNameList;
            const { adminMyselfOnly } = staticTestData.roleNameList;

            switch (option) {
                case 'Admin':
                    cy.attachResource('Users', 'Roles', admin);
                    break;
                case 'Customer Service':
                    cy.attachResource('Users', 'Roles', customerService);
                    break;
                case 'Developer':
                    cy.attachResource('Users', 'Roles', developer);
                    break;
                case 'Manages Discounts':
                    cy.attachResource('Users', 'Roles', managesDiscounts);
                    break;
                case 'Marketer':
                    cy.attachResource('Users', 'Roles', marketer);
                    break;
                case 'Media Buyer':
                    cy.attachResource('Users', 'Roles', mediaBuyer);
                    break;
                case 'Sales Agent':
                    cy.attachResource('Users', 'Roles', salesAgent);
                    break;
                case 'Sales Manager':
                    cy.attachResource('Users', 'Roles', salesManager);
                    break;
                case 'Sales Supervisor':
                    cy.attachResource('Users', 'Roles', salesSupervisor);
                    break;
                case 'Social Media':
                    cy.attachResource('Users', 'Roles', socialMedia);
                    break;
                case 'Quality Engineer':
                    cy.attachResource('Users', 'Roles', qualityEngineer);
                    break;
                case 'Trainer':
                    cy.attachResource('Users', 'Roles', trainer);
                    break;
                case 'View Myself Only':
                    cy.attachResource('Users', 'Roles', viewMyselfOnly);
                    break;
                case 'Admin Myself Only':
                    cy.attachResource('Users', 'Roles', adminMyselfOnly);
                    break;
                default:
                    throw new Error('Invalid role specified');
            }
        });
    }
);

Then(
    /^The user verifies the "(Admin|Customer Service|Developer|Manages Discounts|Marketer|Media Buyer|Sales Agent|Sales Manager|Sales Supervisor|Social Media|Quality Engineer|Trainer|View Myself Only|Admin Myself Only)" role of the user$/,
    (option: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { admin } = staticTestData.roleNameList;
            const { customerService } = staticTestData.roleNameList;
            const { developer } = staticTestData.roleNameList;
            const { managesDiscounts } = staticTestData.roleNameList;
            const { marketer } = staticTestData.roleNameList;
            const { mediaBuyer } = staticTestData.roleNameList;
            const { salesAgent } = staticTestData.roleNameList;
            const { salesManager } = staticTestData.roleNameList;
            const { salesSupervisor } = staticTestData.roleNameList;
            const { socialMedia } = staticTestData.roleNameList;
            const { qualityEngineer } = staticTestData.roleNameList;
            const { trainer } = staticTestData.roleNameList;
            const { viewMyselfOnly } = staticTestData.roleNameList;
            const { adminMyselfOnly } = staticTestData.roleNameList;

            switch (option) {
                case 'Admin':
                    rolesPageLocators.verifyRole().contains(admin);
                    break;
                case 'Customer Service':
                    rolesPageLocators.verifyRole().contains(customerService);
                    break;
                case 'Developer':
                    rolesPageLocators.verifyRole().contains(developer);
                    break;
                case 'Manages Discounts':
                    rolesPageLocators.verifyRole().contains(managesDiscounts);
                    break;
                case 'Marketer':
                    rolesPageLocators.verifyRole().contains(marketer);
                    break;
                case 'Media Buyer':
                    rolesPageLocators.verifyRole().contains(mediaBuyer);
                    break;
                case 'Sales Agent':
                    rolesPageLocators.verifyRole().contains(salesAgent);
                    break;
                case 'Sales Manager':
                    rolesPageLocators.verifyRole().contains(salesManager);
                    break;
                case 'Sales Supervisor':
                    rolesPageLocators.verifyRole().contains(salesSupervisor);
                    break;
                case 'Social Media':
                    rolesPageLocators.verifyRole().contains(socialMedia);
                    break;
                case 'Quality Engineer':
                    rolesPageLocators.verifyRole().contains(qualityEngineer);
                    break;
                case 'Trainer':
                    rolesPageLocators.verifyRole().contains(trainer);
                    break;
                case 'View Myself Only':
                    rolesPageLocators.verifyRole().contains(viewMyselfOnly);
                    break;
                case 'Admin Myself Only':
                    rolesPageLocators.verifyRole().contains(adminMyselfOnly);
                    break;
                default:
                    throw new Error('Invalid role specified');
            }
        });
    }
);

Then(
    'Verify user do not have access to {string} admin resource page',
    (resourcePage: string) => {
        cy.logStep(
            `Verify admin user do not have access to ${resourcePage} admin resource page`
        );
        cy.get('@staticTestData').then((staticTestData: any) => {
            const pageurl = staticTestData.resourcePageUrl;
            cy.visit(`/nova/resources/${pageurl}`);
            cy.url().should('include', '/nova/403');
            cy.get('body').then((body) => {
                body.text().includes('403');
            });

            cy.visit(`/nova/`);
        });
    }
);
