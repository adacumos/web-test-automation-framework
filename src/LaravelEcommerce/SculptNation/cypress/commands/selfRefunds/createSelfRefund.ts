import { consumerAccountPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createSelfRefund: (
                refundAmount: string,
                refundReason: string,
                conditions: string,
                options?: string
            ) => void;
        }
    }
}

/**
 *
 * @param refundAmount The estimated refunded amount from test data
 * @param refundReason The refund reason from test data
 * @param conditions Conditions on the order being refunded
 * @param options Optional parameter
 * @example cy.createSelfRefund('$49.00','mistaken_purchase','no prior refund')
 */

export const createSelfRefund = (
    refundAmount: string,
    refundReason: string,
    conditions: string,
    options?: string
): void => {
    cy.logStep('Navigate to Orders');
    cy.visit('/my-account/orders');

    switch (conditions) {
        case 'no prior refund':
            consumerAccountPageLocators.requestsButtons(0).click();
            consumerAccountPageLocators.requestsButtons(0).within(() => {
                consumerAccountPageLocators.refundMenuItem(0).click();
            });

            /* eslint-disable cypress/no-unnecessary-waiting */
            cy.wait(2000);

            consumerAccountPageLocators.refundDialog
                .card()
                .eq(1)
                .should('be.visible')
                .within(() => {
                    // Click the checkbox
                    consumerAccountPageLocators.refundDialog
                        .checkBox()
                        .click({ force: true });

                    // Validate estimated refund amount
                    consumerAccountPageLocators.refundDialog
                        .refundAmount()
                        .invoke('text')
                        .then((amount) => {
                            expect(amount.trim()).to.eq(
                                `Estimated Refund: ${refundAmount}`
                            );
                        });

                    if (
                        typeof options !== 'undefined' &&
                        options === 'cancellation'
                    ) {
                        // Click cancel subsciption checkbox
                        consumerAccountPageLocators.refundDialog
                            .cancelSubscriptionCheckBox()
                            .click({ force: true });
                    }
                });

            // Select refund reason
            consumerAccountPageLocators.refundDialog
                .refundReason()
                .select(`${refundReason}`)
                .should('have.value', `${refundReason}`);

            // Click refund button
            consumerAccountPageLocators.refundDialog.refundButton().click();

            // Confimation Message
            consumerAccountPageLocators.refundDialog
                .confirmationText()
                .should('be.visible');

            // Click OK Button
            consumerAccountPageLocators.refundDialog.okButton().click();
            break;
        case 'prior refund not on this order':
            consumerAccountPageLocators.requestsButtons(0).click();
            consumerAccountPageLocators.requestsButtons(0).within(() => {
                consumerAccountPageLocators.refundMenuItem(0).click();
            });

            /* eslint-disable cypress/no-unnecessary-waiting */
            cy.wait(2000);

            consumerAccountPageLocators.refundDialog
                .card()
                .eq(1)
                .should('be.visible')
                .within(() => {
                    // Click the checkbox
                    consumerAccountPageLocators.refundDialog
                        .checkBox()
                        .should('be.disabled');

                    // Validate estimated refund amount
                    consumerAccountPageLocators.refundDialog
                        .refundAmount()
                        .invoke('text')
                        .then((amount) => {
                            expect(amount.trim()).to.eq(
                                `Estimated Refund: ${refundAmount}Product has already been refunded`
                            );
                        });
                });

            // Select refund reason
            consumerAccountPageLocators.refundDialog
                .refundReason()
                .should('be.disabled');

            // Click Cancel Button
            consumerAccountPageLocators.refundDialog.cancelButton().click();

            break;
        case 'prior refund on this order':
            consumerAccountPageLocators.requestsButtons(0).click();
            consumerAccountPageLocators.requestsButtons(0).within(() => {
                consumerAccountPageLocators.refundMenuItem(0).click();
            });
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
                                `Total Refund: ${refundAmount}Product has already been refunded`
                            );
                        });
                });

            // Verify return reason is disabled
            consumerAccountPageLocators.refundDialog
                .refundReason()
                .should('be.disabled');

            // Click Cancel
            consumerAccountPageLocators.returnDialog.cancelButton().click();
            break;
        default:
            throw new Error('Invalid option specified');
    }
};
