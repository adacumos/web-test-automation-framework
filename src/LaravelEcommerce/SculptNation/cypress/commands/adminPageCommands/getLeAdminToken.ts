declare global {
    namespace Cypress {
        interface Chainable {
            getLeAdminToken: (userEmail: string) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to query LE New Admin user tokens for 2FA Login
 * @param userEmail the user's email
 * cy.getLeAdminToken('user_email@domain.com')
 *
 */
export const getLeAdminToken = (userEmail: string): Cypress.Chainable<any> => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.writeFile(filepath, []);

    let userId: string;
    let tokenId: string;
    const userTable = {
        host: Cypress.env('DB_HOST'),
        port: Cypress.env('DB_PORT'),
        database: Cypress.env('DB_DB'),
        user: Cypress.env('DB_USER'),
        password: Cypress.env('DB_PASSWORD'),
        query: '',
        params: '',
    };
    const update2fa = {
        host: Cypress.env('DB_HOST'),
        port: Cypress.env('DB_PORT'),
        database: Cypress.env('DB_DB'),
        user: Cypress.env('DB_USER'),
        password: Cypress.env('DB_PASSWORD'),
        query: '',
        params: '',
    };
    const user2faTable = {
        host: Cypress.env('DB_HOST'),
        port: Cypress.env('DB_PORT'),
        database: Cypress.env('DB_DB'),
        user: Cypress.env('DB_USER'),
        password: Cypress.env('DB_PASSWORD'),
        query: '',
        params: '',
    };
    cy.get('@staticTestData').then((staticTestData: any) => {
        userTable.query = staticTestData.tableQuery.usersQuery;
        userTable.params = userEmail;
        cy.logStep('Capture UserID');
        cy.task('runSQLCmd', userTable).then((response: any) => {
            const result = JSON.parse(response);
            result.forEach((dataValue: any) => {
                userId = dataValue.id;
            });
            cy.logStep('Enable 2FA');
            update2fa.query = staticTestData.tableQuery.enable2fa;
            update2fa.params = userId;
            cy.task('runSQLCmd', update2fa);

            cy.logStep('Capture 2FA token');
            user2faTable.query = staticTestData.tableQuery.user2faQuery;
            user2faTable.params = userId;
            cy.task('runSQLCmd', user2faTable).then((dataset: any) => {
                const user2fa = JSON.parse(dataset);
                user2fa.forEach((record: any) => {
                    tokenId = record.google2fa_secret;
                });
                cy.readFile(filepath).then((data) => {
                    data.push({
                        userEmail: `${userEmail}`,
                        userId: `${userId}`,
                        tokenId: `${tokenId}`,
                    });
                    cy.writeFile(filepath, JSON.stringify(data, null, 2));
                });
            });
        });
    });

    return cy.logStep('LE User Token saved');
};
