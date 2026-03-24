import { dynamicTestData } from '../support/testData';

declare global {
    namespace Cypress {
        interface Chainable {
            checkOrderEmailContents: (emailType: string) => void;
        }
    }
}

/**
 * Command to verify Order Confirmation email contents from MailTrap
 * @param emailType type of email i.e. Vshred or Sculptnaton
 * @example
 * cy.checkOrderEmailContents('VShred')
 */

export const checkOrderEmailContents = (emailType: string): void => {
    const fromEmail =
        emailType === 'VShred'
            ? 'vince@vshred.com'
            : 'support@sculptnation.com';
    const emailSubject =
        emailType === 'VShred'
            ? 'Your V Shred order has been received!'
            : 'Your Sculpt Nation order has been received!';

    cy.getEmailData(fromEmail, dynamicTestData.userEmail, emailSubject).then(
        (emailContent: any) => {
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(20000); // Added wait to ensure confirmation order emails exists on Mailtrap before proceeding with verification

            cy.get('@staticTestData').then((staticTestData: any) => {
                const { orderList } = staticTestData;

                /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
                for (let x = 0; x < orderList.length; x++) {
                    const orderItem =
                        staticTestData[`${staticTestData.orderList[x]}`];
                    emailContent.forEach((html: any) => {
                        cy.logStep(
                            `Verify product ${orderItem.offerName} matches on the email`
                        );
                        cy.getEmailContent(
                            html[x].html_path,
                            orderItem.offerName
                        );
                        cy.logStep(
                            `Verify quantity ${orderItem.orderQuantity} matches on the email`
                        );
                        cy.getEmailContent(
                            html[x].html_path,
                            orderItem.orderQuantity
                        );
                        cy.logStep(
                            `Verify price ${orderItem.baseCurrencyAmount} matches on the email`
                        );
                        cy.getEmailContent(
                            html[x].html_path,
                            orderItem.baseCurrencyAmount
                        );
                    });
                }
            });
        }
    );
};
