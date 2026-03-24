import { consumerAccountPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            updateUserPassword: (
                currentPassword: string,
                newPassword: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to update Password through the Customer Accounts webpage
 * @param currentPassword current client user password
 * @param newPassword newPassword client user password
 * example:  updateUserPassword('Orders')
 */

export const updateUserPassword = (
    currentPassword: string,
    newPassword: string
): Cypress.Chainable<any> => {
    consumerAccountPageLocators.accountDetailsPage
        .currentPassword()
        .clear()
        .type(currentPassword);
    consumerAccountPageLocators.accountDetailsPage
        .newPassword()
        .clear()
        .type(newPassword);
    consumerAccountPageLocators.accountDetailsPage
        .confirmPassword()
        .clear()
        .type(newPassword);

    consumerAccountPageLocators.accountDetailsPage.saveChangesButton().click();

    return cy
        .contains(
            '.form-alert__success',
            'Account details changed successfully'
        )
        .should('be.visible');
};
