/// <reference types="cypress" />

import { Then, Step } from '@badeball/cypress-cucumber-preprocessor';
import {
    vsDashboardLocators,
    vsUsersPageLocators,
    vsOrdersPageLocators,
} from '../../locator_libraries';
import { dynamicTestData } from '../../testData';

Then('The user creates a new {string} user', (userType: string) => {
    cy.logStep(`Create a new user with a ${userType} roles`);
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.writeFile(filepath, []);

    Step(
        new Mocha.Context(),
        'The user navigates to "Users" menu of the VS Admin Tool'
    );
    vsUsersPageLocators.createUserButton().click();
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { name, gender, role, leader, utm, coupon } =
            staticTestData.vsUserInfo[userType];
        const random = Cypress._.random(0, 999);

        dynamicTestData.userPassword = Math.floor(
            Math.random() * 100000000
        ).toString();

        cy.generateRandomTestEmail().then((randomEmail) => {
            dynamicTestData.userEmail = randomEmail;
            const userName = `${name}${random}`;

            vsUsersPageLocators.createUserDialog.nameField().type(userName);
            vsUsersPageLocators.createUserDialog
                .emailField()
                .type(dynamicTestData.userEmail);
            vsUsersPageLocators.createUserDialog
                .passwordField()
                .type(dynamicTestData.userPassword, { log: false });
            vsUsersPageLocators.createUserDialog
                .confirmPasswordField()
                .type(dynamicTestData.userPassword, { log: false });
            if (userType === 'Trainer') {
                vsUsersPageLocators.createUserDialog.roleSelect().select(role);
                vsUsersPageLocators.createUserDialog
                    .genderSelect()
                    .select(gender);
                vsUsersPageLocators.createUserDialog
                    .leaderSelect()
                    .click()
                    .type(`${leader}{enter}`);
                vsUsersPageLocators.createUserDialog
                    .utmField()
                    .type(`${utm}${random}`);
                vsUsersPageLocators.createUserDialog
                    .couponField()
                    .type(`${coupon}${random}`);
            }
            cy.readFile(filepath).then((data) => {
                data.push({
                    newUserEmail: `${dynamicTestData.userEmail}`,
                    newUserName: `${userName}`,
                    newUserPassword: dynamicTestData.userPassword,
                });
                cy.writeFile(filepath, JSON.stringify(data, null, 2));
            });
        });
        vsUsersPageLocators.createUserDialog.saveButton().click();
    });
});

Then('Add user abilities as a Trainer Manager', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const abilities = staticTestData.trainerMgrAbilities;

        vsDashboardLocators.selectTab('Edit').click();
        abilities.forEach((ability: string) => {
            vsUsersPageLocators.editTab
                .abilityDropdown()
                .type(`${ability}{enter}`);
        });
        vsUsersPageLocators.editTab.updateButton().click();
    });
});

Then('The user creates new Order in VS Admin', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { offerSku, offerTitle } = staticTestData.addOffer;

        cy.addOfferVsAdmin(offerSku, offerTitle);
    });
});

Then(
    'The user clicks the New Order button on the User Information page',
    () => {
        vsUsersPageLocators.viewTab.newOrderButton().should('be.visible');
        vsUsersPageLocators.viewTab.newOrderButton().click();
        cy.url().should('include', '/process-order/');
    }
);

Then('The user searches a client record', () => {
    const clientEmail = dynamicTestData.userEmail;
    Step(
        new Mocha.Context(),
        'The user navigates to "Users" menu of the VS Admin Tool'
    );
    cy.url().should('include', 'admin/users');
    vsUsersPageLocators.filterRecord
        .byEmail()
        .clear()
        .type(`${clientEmail}{enter}`);
    vsDashboardLocators
        .getRecord(clientEmail)
        .should('be.visible')
        .parents('tr')
        .within(() => {
            vsUsersPageLocators.viewButton().click();
        });
});

Then('The user navigates to the {string} tab', (tabName: string) => {
    vsDashboardLocators.selectTab(tabName).click();
});

Then('The user cancels the VS subscription', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        vsOrdersPageLocators.filterRecord
            .buttonWithText(staticTestData.subscriptionButtonText.Cancel) // verify cancel button and click
            .should('be.visible')
            .click();
        vsOrdersPageLocators.filterRecord
            .buttonWithText(staticTestData.subscriptionButtonText.Restore) // verify restore button is visible
            .should('be.visible');
    });
});

Then('The user voids the order', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        vsOrdersPageLocators.filterRecord
            .primaryButtonWithText(staticTestData.voidButtonText.Void) // verify void button and click
            .should('be.visible')
            .click();
        vsOrdersPageLocators.filterRecord
            .reasonForVoid()
            .should('be.visible')
            .select(staticTestData.voidButtonText.ReasonForVoid);
        vsOrdersPageLocators.filterRecord
            .floatingButtonWithText(staticTestData.voidButtonText.Void)
            .should('be.visible')
            .click();
        vsOrdersPageLocators.filterRecord
            .primaryButton() // verify void button is not displayed anymore
            .should('have.length', 1);
        vsOrdersPageLocators.processPayment.toastMessage().should('be.visible');
    });
});
