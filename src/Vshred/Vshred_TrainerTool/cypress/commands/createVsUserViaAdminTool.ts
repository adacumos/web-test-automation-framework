import {
    dashboardLocators,
    usersPageLocators,
} from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createVsUserViaAdminTool: (
                name: string,
                email: string,
                phone: string,
                password: string,
                role: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to create a user in VShred Admin Tool
 *
 * @param name the user's name
 * @param email the user's email
 * @param phone the user's phone
 * @param password the user's password
 * @param role the user's role
 * @example
 * cy.createVsUserViaAdminTool('automation tester', 'automation_tester@domain.com', '(100) 111-1111', 'xxxx', 'member')
 *
 */
export const createVsUserViaAdminTool = (
    name: string,
    email: string,
    phone: string,
    password: string,
    role: string
): Cypress.Chainable<any> => {
    cy.logStep('Navigate to users page');
    dashboardLocators.navigationMenuItemLink('users').click();

    cy.logStep('Click the Create User button');
    usersPageLocators.createUserButton().click();

    cy.logStep('Fill in valid user data on the Create User form and Save');
    usersPageLocators.createUserForm.nameField().type(name);
    usersPageLocators.createUserForm.emailField().type(email);
    usersPageLocators.createUserForm.phoneField().type(phone);
    usersPageLocators.createUserForm
        .passwordField()
        .type(password, { log: false });
    usersPageLocators.createUserForm
        .passwordConfirmationField()
        .type(password, { log: false });
    usersPageLocators.createUserForm
        .createUserModal()
        .within(() =>
            usersPageLocators.createUserForm.roleField().select(role)
        );

    return usersPageLocators.createUserForm.saveButton().click();
};
