declare global {
    namespace Cypress {
        interface Chainable {
            verifyVsEmail: (
                fromEmail: string,
                toEmail: string,
                emailSubject: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to verify emails using mailtrap
 *
 * @param fromEmail sender's email address
 * @param toEmail receipient's email address
 * @param emailSubject email subject
 *
 * @example
 * cy.verifyVsEmail('vince@vshred.com', 'automation-8f61be@inbox.mailtrap.io', 'Your V Shred order has been received!')
 *
 */
export const verifyVsEmail = (
    fromEmail: string,
    toEmail: string,
    emailSubject: string
): Cypress.Chainable<any> => {
    const accountId = Cypress.env('MAILTRAP_ACCOUNT_ID');
    const inboxId = Cypress.env('MAILTRAP_INBOX_ID');
    const token = Cypress.env('MAILTRAP_API_KEY');
    const options = {
        method: 'GET',
        url: `https://mailtrap.io/api/accounts/${accountId}/inboxes/${inboxId}/messages`,
        json: true,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    cy.logStep('Wait for the email to arrive');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(30000);

    return cy.request(options).then((response) => {
        expect(response.status).to.eq(200);

        cy.wrap(
            response.body.filter(
                (email: any) =>
                    email.from_email === fromEmail &&
                    email.to_email === toEmail &&
                    email.subject === emailSubject
            )
        ).should('have.length', 1);
    });
};
