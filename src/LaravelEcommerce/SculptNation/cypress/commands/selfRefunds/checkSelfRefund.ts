import { consumerAccountPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            checkSelfRefund: (totalRefund: string) => void;
        }
    }
}

/**
 *
 * @param totalRefund The total amount refunded from the test data
 * @example cy.checkSelfRefund(('($53.10)')
 */
export const checkSelfRefund = (totalRefund: string): void => {
    cy.reload();
    consumerAccountPageLocators.requestsButton(0).click();
    consumerAccountPageLocators.refundMenuItem(0).click();
    /* eslint-disable cypress/no-unnecessary-waiting */
    cy.wait(2000);
    consumerAccountPageLocators.refundDialog
        .card()
        .eq(1)
        .should('be.visible')
        .within(() => {
            // Verify that the checkbox is disabled
            consumerAccountPageLocators.refundDialog
                .checkBox()
                .should('be.disabled');

            // Verify total refund amount
            consumerAccountPageLocators.refundDialog
                .refundAmount()
                .invoke('text')
                .then((amount) => {
                    expect(amount.trim()).to.eq(
                        `Total Refund: ${totalRefund}Product has already been refunded`
                    );
                });
        });

    // Verify return reason is disabled
    consumerAccountPageLocators.refundDialog
        .refundReason()
        .should('be.disabled');

    // Click Cancel
    consumerAccountPageLocators.returnDialog.cancelButton().click();
};
