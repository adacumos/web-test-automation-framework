import Jimp from 'jimp';

/* Script to create a .png image file.
 * Add this script as in the example below in the Cypress .config.ts file.
 * @example
 * on('task', {
 *     createPngFile;
 * });
 */
export const createPngFile = (filePathAndName: string): any => {
    const img = new Jimp(
        320,
        320,
        '#0D9CE3',
        (
            err: any,
            image: { write: (arg0: string, arg1: (err2: any) => void) => void }
        ) => {
            if (err) throw err;

            image.write(filePathAndName, (err2: any) => {
                if (err2) throw err2;
            });
        }
    );

    return img;
};
