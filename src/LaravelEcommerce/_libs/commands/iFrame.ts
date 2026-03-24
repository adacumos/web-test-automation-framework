declare global {
    namespace Cypress {
        interface Chainable {
            iFrame: (iframeSelector: string) => Chainable<any>;
        }
    }
}

/**
 * Log a message using the Cypress console.
 * @example
 * cy.iFrame('iframeSelector')
 *
 */
export const iFrame = (iframeSelector: string): void => {
    cy.get(iframeSelector)
        .its('0.contentDocument.body')
        .should('not.be.empty', { timeout: 15000 })
        .then((body) => cy.wrap(body));
};
