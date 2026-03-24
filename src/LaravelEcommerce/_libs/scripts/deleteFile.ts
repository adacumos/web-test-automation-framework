import * as fs from 'fs';

/* Script to delete a file.
 * Add this script as in the example below in the Cypress .config.ts file.
 * @example
 * on('task', {
 *     deleteFile;
 * });
 */
export const deleteFile = (filePathAndName: string): any => {
    if (fs.existsSync(filePathAndName)) {
        console.log('File found, deleting it.');
        fs.unlinkSync(filePathAndName);
        return null;
    }

    return null;
};
