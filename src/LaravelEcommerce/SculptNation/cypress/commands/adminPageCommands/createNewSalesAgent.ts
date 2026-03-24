import {
    dashboardLocators,
    agentListLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createNewSalesAgent: (
                firstName: string,
                lastName: string,
                email: string,
                password: string,
                confirmPassword: string,
                agency: string,
                callCenterUserName: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create a new Sales Agent through LE Admin
 *
 * @param firstName Agent first name
 * @param lastName Agent last name
 * @param email Agent email
 * @param password Agent password
 * @param confirmPassword Agent password
 * @param agency Agency name
 * @param callCenterUserName Call center username
 * example:  createNewSalesAgent('Test','Agent', 'test@mail.com', 'password1234', 'TestAgency', 'AgentUserName')
 */

export const createNewSalesAgent = (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    agency: string,
    callCenterUserName: string
): Cypress.Chainable<any> => {
    cy.logStep('Creating Sales Agent');

    agentListLocators.firstNameField().type(firstName);
    agentListLocators.lastNameField().type(lastName);
    agentListLocators.emailField().type(email);
    agentListLocators.passwordField().type(password, { log: false });
    agentListLocators
        .confirmPasswordField()
        .type(confirmPassword, { log: false });
    agentListLocators.agencyField().type(agency);
    agentListLocators.callCenterUserNameField().type(callCenterUserName);
    return dashboardLocators.createButton().click();
};
