declare global {
    namespace Cypress {
        interface Chainable {
            getEmailContent: (
                url: string,
                searchString: any,
                state?: string
            ) => void;
        }
    }
}

/**
 * Command to search for a string from a Mailtrap email.
 * @param url html path from Mailtrap data
 * @param searchString text to search for
 * @param state optional parameter
 * @example
 * cy.getEmailContents('/api/accounts/account_id/inboxes/inbox_id/messages/message_id/body.html', 'Burm PM - Monthly')
 */

export const getEmailContent = (
    url: string,
    searchString: any,
    state?: string
): void => {
    const token = Cypress.env('MAILTRAP_API_KEY');

    const options = {
        method: 'GET',
        url: `https://mailtrap.io${url}`,
        json: false,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    if (searchString === 'Sales Tax') {
        if (typeof state !== 'undefined') {
            if (state === 'NY' || state === 'CT') {
                cy.request(options)
                    .its('body', { log: false })
                    .then((email) => {
                        expect(email).to.not.contain(searchString);
                    });
            } else {
                cy.request(options)
                    .its('body', { log: false })
                    .then((email) => {
                        expect(email).to.contain(searchString);
                    });
            }
        }
    } else {
        cy.request(options)
            .its('body', { log: false })
            .then((email) => {
                expect(email).to.contain(searchString);
            });
    }
};
