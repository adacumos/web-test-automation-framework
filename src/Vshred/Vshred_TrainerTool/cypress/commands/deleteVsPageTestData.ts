declare global {
    namespace Cypress {
        interface Chainable {
            deleteVsPageTestData: (
                table: string,
                dataReference: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/** Command used to delete a test data used in regression VShred tables
 *
 * @param table - vstable record will be deleted
 * @param dataReference - record to be deleted
 *
 * cy.deleteVsPageTestData('offers','sku_9piuu43iuu')
 *
 */
export const deleteVsPageTestData = (
    table: string,
    dataReference: string
): Cypress.Chainable<any> => {
    cy.logStep('Deleting Test Data used during regression tests');

    const deleteRecord = {
        dbHost: Cypress.env('DB_HOST'),
        dbUser: Cypress.env('DB_USER'),
        dbPassword: Cypress.env('DB_PASSWORD'),
        dbName: Cypress.env('DB_NAME'),
        query: `delete from ${table} where id = '${dataReference}'`,
    };

    const queryDeletedRecord = {
        dbHost: Cypress.env('DB_HOST'),
        dbUser: Cypress.env('DB_USER'),
        dbPassword: Cypress.env('DB_PASSWORD'),
        dbName: Cypress.env('DB_NAME'),
        query: `select * from ${table} where id = '${dataReference}'`,
    };

    return cy.task('runMySqlQuery', deleteRecord).then(() => {
        cy.task('runMySqlQuery', queryDeletedRecord).then((result) => {
            expect(result).to.have.lengthOf(0);
            cy.logStep(
                `Test data used for ${table}: ID:"${dataReference}" was deleted`
            );
        });
    });
};
