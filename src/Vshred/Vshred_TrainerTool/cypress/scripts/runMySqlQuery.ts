import mysql from 'mysql2';

/* Script to connect to the MySQL database and run a query.
 * Add this script as in the example below in the Cypress .config.ts file.
 * @example
 * on('task', {
 *     runMySqlQuery;
 * });
 */

interface DbInformation {
    dbHost: string;
    dbUser: string;
    dbPassword: string;
    dbName: string;
    query: string;
}

export const runMySqlQuery = (dbInformation: DbInformation): any => {
    const connection = mysql.createConnection({
        host: dbInformation.dbHost,
        user: dbInformation.dbUser,
        password: dbInformation.dbPassword,
        database: dbInformation.dbName,
    });
    // start connection to db
    connection.connect();
    // exec query + disconnect to db as a Promise
    return new Promise((resolve, reject) => {
        connection.query(dbInformation.query, (error, results) => {
            if (error) {
                return reject(error);
            }

            connection.end();

            return resolve(results);
        });
    });
};
