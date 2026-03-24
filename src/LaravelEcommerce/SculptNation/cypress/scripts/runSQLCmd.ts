import PGP from 'pg-promise';

/* Script to query Postgress SQL.
 * Add this script as in the example below in the Cypress .config.ts file.
 * @example
 * on('task', {
 *     runSQLCmd(dbInformation);
 * });
 */

interface DBInformation {
    host: string;
    port: number;
    database: string;
    user: string;
    password: any;
    query: string;
    params: any;
}

export const runSQLCmd = async (dbInformation: DBInformation): Promise<any> => {
    let queryResult: any;

    const pgp = PGP();

    const db = pgp({
        host: dbInformation.host,
        port: dbInformation.port,
        database: dbInformation.database,
        user: dbInformation.user,
        password: dbInformation.password,
        max: 30,
        allowExitOnIdle: true,
    });

    await db
        .any(dbInformation.query, dbInformation.params)
        .then((result: any) => {
            queryResult = result;
        })
        .catch((error: any) => {
            console.log('ERROR', error);
            queryResult = error;
        })
        .finally(pgp.end);

    return JSON.stringify(queryResult);
};
