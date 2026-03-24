import { consumerAccountPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            updateAccountDetails: (
                updateDetail: string,
                updateValue?: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to update Client record through the LE My Account page
 * @param updateDetail field to be updated
 * @param udpateValue new value. optional parameter for Payments that uses specific set of data
 * cy.updateAccountDetails('Name','Anita)
 */
export const updateAccountDetails = (
    updateDetail: string,
    updateValue: string | undefined
): Cypress.Chainable<any> => {
    cy.logStep(`Updating ${updateDetail} user account details`);
    if (updateValue !== undefined) {
        consumerAccountPageLocators.accountDetailsPage
            .phoneGroup()
            .should('be.visible');
        switch (updateDetail) {
            case 'FirstName':
                consumerAccountPageLocators.accountDetailsPage
                    .firstName()
                    .clear()
                    .type(updateValue);
                break;
            case 'LastName':
                consumerAccountPageLocators.accountDetailsPage
                    .lastName()
                    .clear()
                    .type(updateValue);
                break;
            case 'email':
                consumerAccountPageLocators.accountDetailsPage
                    .email()
                    .clear()
                    .type(updateValue);
                break;
            case 'PhoneNumber':
                consumerAccountPageLocators.accountDetailsPage
                    .phoneNumber()
                    .clear()
                    .type(updateValue);
                break;
            default:
                throw new Error('Selected Account field is invalid');
        }
    } else if (updateDetail === 'Payment') {
        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerAccountPageLocators.updatePaymentPage
                .creditCardNumber()
                .clear()
                .type(staticTestData.newCardDetails.cardNumber);
            consumerAccountPageLocators.updatePaymentPage
                .creditCardExpirationMonth()
                .clear()
                .type(staticTestData.newCardDetails.expirationMonth);
            consumerAccountPageLocators.updatePaymentPage
                .creditCardExpirationYear()
                .clear()
                .type(staticTestData.newCardDetails.expirationYear);
            consumerAccountPageLocators.updatePaymentPage
                .creditCardCvv()
                .clear()
                .type(staticTestData.newCardDetails.cvv);

            consumerAccountPageLocators.updatePaymentPage
                .updatePaymentButton()
                .click();
        });
    }

    return cy.log('Selected field updated');
};
