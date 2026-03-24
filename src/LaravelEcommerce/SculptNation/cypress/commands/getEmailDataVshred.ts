declare global {
    namespace Cypress {
        interface Chainable {
            getEmailDataVshred: (
                fromEmail: string,
                toEmail: string,
                emailSubject: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to get email data from Mailtrap.
 * @param fromEmail sender's email address
 * @param toEmail receipient's email address
 * @param emailSubject email subject
 * @example
 * cy.getEmailData('support@sculptnation.com', 'tests@vshred.com', 'Your Sculptnation Order')
 *
 */

export const getEmailDataVshred = (
    fromEmail: string,
    toEmail: string,
    emailSubject: string,
): Cypress.Chainable<any> => {
    const accountId = Cypress.env('MAILTRAP_ACCOUNT_ID'); // DevOps Account
    const inboxId = Cypress.env('MAILTRAP_TESTING_INBOX_ID'); // Testing SN Inbox
    const token = Cypress.env('MAILTRAP_API_KEY');
    
    const options = {
        method: 'GET',
        url: `https://mailtrap.io/api/accounts/${accountId}/inboxes/${inboxId}/messages`,
        json: true,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const emailData: any = [];
    cy.request(options).then((response) => {
        expect(response.status).to.eq(200);

        cy.wrap(
            response.body.filter(
                (email: any) =>
                    email.from_email === fromEmail &&
                    email.to_email === toEmail &&
                    email.subject === emailSubject
            )
        ).then(() => {
            emailData.push(response.body);
        });
    });

    return cy.wrap(emailData);
};
