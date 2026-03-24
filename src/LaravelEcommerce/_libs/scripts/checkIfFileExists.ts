import * as fs from 'fs';

/* Script to check if a file exists.
 * Add this script as in the example below in the Cypress .config.ts file.
 * @example
 * on('task', {
 *     checkIfFileExists;
 * });
 */
export const checkIfFileExists = (filePathAndName: string): boolean => {
    if (!fs.existsSync(filePathAndName)) {
        console.log('File not found.');
        return false;
    }

    console.log('File exists');

    return true;
};
