declare global {
    namespace Cypress {
        interface Chainable {
            generateRandomTestEmail: () => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to generate a random test email.
 * @example cy.generateRandomTestEmail()
 *
 */
export const generateRandomTestEmail = (): Cypress.Chainable<any> =>
    Cypress.env('EMAIL_BASE') +
    Cypress._.random(0, 1e9) +
    Cypress.env('EMAIL_DOMAIN');
