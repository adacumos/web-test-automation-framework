declare global {
    namespace Cypress {
        interface Chainable {
            generatePngImageForSecurityInjection: (
                name: string
            ) => Chainable<any>;
        }
    }
}

/**
 * Uses the createPngFile script to generate a blue, 320x320 png file to be used for security injection testing.
 * @example
 * cy.generatePngImageForSecurityInjection('myTestImage')
 *
 */
export const generatePngImageForSecurityInjection = (
    name: string
): Cypress.Chainable<any> => {
    const path = `cypress/fixtures/testGeneratedImages/${name}.png`;
    return cy.task('createPngFile', path);
};
