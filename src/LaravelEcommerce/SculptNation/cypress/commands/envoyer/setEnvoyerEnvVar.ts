declare global {
    namespace Cypress {
        interface Chainable {
            setEnvoyerEnvVar: (
                envVar: string,
                fromValue: string,
                toValue: string
            ) => void;
        }
    }
}
/**
 * Command used to update Envoyer environment variable value
 * @param envVar the environment variable
 * @param fromValue the original value
 * @param toValue the desired value
 * @example
 * cy.setEnvoyerEnvVar('KLAVIYO_ENABLED', 'true', 'false')
 *
 */

export const setEnvoyerEnvVar = (
    envVar: string,
    fromValue: string,
    toValue: string
): void => {
    const sshHost = Cypress.env('SSH_HOST');
    const sshUrl = Cypress.config().baseUrl;
    const sshUsername = Cypress.env('SSH_USERNAME');
    const sshPort = Cypress.env('SSH_PORT');
    const sshCmd = `sed -i 's|${envVar}=${fromValue}|${envVar}=${toValue}|g' .env`;

    cy.task('getSshKey').then((sshKeyPath: any) => {
        const sshInfo = {
            sshHost,
            sshUrl,
            sshUsername,
            sshPort,
            sshKeyPath,
            sshCmd,
        };
        cy.task('runSshCmd', sshInfo).then((result: any) => {
            cy.log(result);
        });
    });
};
