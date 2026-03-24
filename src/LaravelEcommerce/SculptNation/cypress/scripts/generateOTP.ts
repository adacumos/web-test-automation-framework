// eslint-disable-next-line @typescript-eslint/no-var-requires
const otplib = require('otplib');

/* Script to generate a One Time Password.
 * Add this script as in the example below in the Cypress .config.ts file.
 * @example
 * on('task', {
 *     generateOTP;
 * });
 */
export const generateOTP = (secret: string): any =>
    otplib.authenticator.generate(secret);
