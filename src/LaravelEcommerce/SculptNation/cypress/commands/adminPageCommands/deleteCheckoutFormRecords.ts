import {
    dashboardLocators,
    leCheckoutFormsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            deleteCheckoutFormRecords: (
                checkoutForm: string,
                recordValue: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to delete Discounts test data created
 * @param checkoutForm Checkout form to be deleted
 * @param recordValue Form name
 * example:  deleteCheckoutFormRecords('bumper','BumperName')
 */

export const deleteCheckoutFormRecords = (
    checkoutForm: string,
    recordValue: string
): Cypress.Chainable<any> => {
    cy.logStep(`Deleting Checkout Form ${checkoutForm} - ${recordValue}`);

    switch (checkoutForm) {
        case 'Bumper-Templates':
        case 'Reviews':
            dashboardLocators
                .getRecord(recordValue)
                .should('be.be.visible')
                .parents('tr')
                .within(() => {
                    dashboardLocators.viewButton().click();
                });
            leCheckoutFormsPageLocators.deleteResource().click();
            dashboardLocators.confirmButton().click();
            break;
        case 'Bumpers':
        case 'Carousels':
            dashboardLocators.searchInput().clear().type(recordValue);
            dashboardLocators
                .getRecord(recordValue)
                .should('be.visible')
                .parents('tr')
                .within(() => {
                    dashboardLocators.viewButton().click();
                });
            leCheckoutFormsPageLocators.deleteResource().click();
            dashboardLocators.confirmButton().click();
            break;
        default:
            throw new Error('Checkout form is not available');
    }

    return dashboardLocators.successToast().should('be.visible');
};
