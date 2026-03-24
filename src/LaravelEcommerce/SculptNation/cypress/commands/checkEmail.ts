declare global {
    namespace Cypress {
        interface Chainable {
            checkEmail: (
                fromEmail: string,
                toEmail: string,
                emailSubject: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to check emails from Mailtrap.
 * @param fromEmail sender's email address
 * @param toEmail receipient's email address
 * @param emailSubject email subject
 * @example
 * cy.checkEmail('support@sculptnation.com', 'tests@vshred.com', 'Your Sculptnation Order')
 *
 */

export const checkEmail = (
    fromEmail: string,
    toEmail: string,
    emailSubject: string
): Cypress.Chainable<any> => {
    const accountId = Cypress.env('MAILTRAP_ACCOUNT_ID'); // DevOps Account
    const inboxId = Cypress.env('MAILTRAP_INBOX_ID'); // Staging SN Inbox
    const token = Cypress.env('MAILTRAP_API_KEY');

    const options = {
        method: 'GET',
        url: `https://mailtrap.io/api/accounts/${accountId}/inboxes/${inboxId}/messages`,
        json: true,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    cy.request(options)
        .then((response) => {
            expect(response.status).to.eq(200);
            cy.wrap(
                response.body.filter(
                    (email: any) =>
                        email.from_email === fromEmail &&
                        email.to_email === toEmail &&
                        email.subject === emailSubject
                )
            );
        })
        .then((resp) => {
            cy.wrap(resp.status).as('requestStatus');
        });
    return cy.get('@requestStatus');
};
