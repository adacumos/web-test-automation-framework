declare global {
    namespace Cypress {
        interface Chainable {
            logStep: (message: string) => Chainable<any>;
        }
    }
}

/**
 * Log a message using the Cypress console.
 * @example
 * cy.logMessage('something')
 *
 */
export const logStep = (message: string): void => {
    cy.step(message);
};
