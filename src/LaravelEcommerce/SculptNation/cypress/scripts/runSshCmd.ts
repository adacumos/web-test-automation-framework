import { NodeSSH } from 'node-ssh';

/* Script to connect via SSH to a .
 * Add this script as in the example below in the Cypress .config.ts file.
 * @example
 * on('task', {
 *     runMySqlQuery;
 * });
 */

interface SSHInformation {
    sshHost: string;
    sshUrl: string;
    sshUsername: string;
    sshPort: number;
    sshKeyPath: string;
    sshCmd: string;
}

export const runSshCmd = (sshInformation: SSHInformation): any =>
    new Promise((resolve, reject) => {
        const ssh = new NodeSSH();

        const sshOutput = {
            stderr: '',
            stdout: '',
        };

        ssh.connect({
            host: sshInformation.sshHost,
            username: sshInformation.sshUsername,
            privateKeyPath: sshInformation.sshKeyPath,
            port: sshInformation.sshPort,
            readyTimeout: 20000,
            debug: console.log,
        })
            .then(() => {
                if (!ssh.isConnected()) {
                    reject(new Error('ssh connection not set'));
                } else {
                    ssh.execCommand(sshInformation.sshCmd, {
                        cwd: `/home/forge/${sshInformation.sshUrl.replace(
                            /^http(s?):\/\//i,
                            ''
                        )}/current`,
                    }).then((result) => {
                        sshOutput.stderr = result.stderr;
                        sshOutput.stdout = result.stdout;
                        resolve(sshOutput);
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    });
