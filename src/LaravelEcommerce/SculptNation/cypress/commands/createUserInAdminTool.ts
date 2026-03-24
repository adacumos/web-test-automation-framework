import { usersPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createUserInAdminTool: (
                userFirstName: string,
                userLastName: string,
                userEmail: string,
                userPassword: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to create a new user in the SculptNation Admin Tool
 * @param userFirstName the user's first name
 * @param userLastName the user's last name
 * @param userEmail the user's email
 * @param userPassword the user's password
 * @example
 * cy.createUserInAdminTool('test', 'tester', 'user_email@domain.com', '1234')
 *
 */
export const createUserInAdminTool = (
    userFirstName: string,
    userLastName: string,
    userEmail: string,
    userPassword: string
): Cypress.Chainable<any> => {
    usersPageLocators.newUserForm.firstNameInputField().type(userFirstName);
    usersPageLocators.newUserForm.lastNameInputField().type(userLastName);
    usersPageLocators.newUserForm.emailInputField().type(userEmail);
    usersPageLocators.newUserForm
        .passwordInputField()
        .type(userPassword, { log: false });
    usersPageLocators.newUserForm
        .confirmPasswordInputField()
        .type(userPassword, { log: false });

    return usersPageLocators.newUserForm.createUserButton().click();
};
