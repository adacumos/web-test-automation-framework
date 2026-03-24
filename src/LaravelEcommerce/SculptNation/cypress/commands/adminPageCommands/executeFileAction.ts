import {
    dashboardLocators,
    fileManagerPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            executeFileAction: (
                fileAction: string,
                filename: string,
                newFilename?: any
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to execute actions to a file
 * @param fileAction action to be executed on the file
 * @param fileName filename to be worked on
 * @param newFilename optional field for rename action
 * example:  executeFileAction('Delete','TestFile.pdf')
 */

export const executeFileAction = (
    fileAction: string,
    fileName: string,
    newFilename?: any
): Cypress.Chainable<any> => {
    cy.logStep(`Running ${fileAction} on ${fileName} file`);
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { filepath, fileType } = staticTestData.fileReference;
        switch (fileAction) {
            case 'Uploads':
                fileManagerPageLocators
                    .uploadButton()
                    .selectFile(filepath, { force: true });
                fileManagerPageLocators
                    .viewFolder(fileName)
                    .should('be.visible');
                fileManagerPageLocators.refreshButton().click();
                break;
            case 'Previews':
                fileManagerPageLocators.viewFolder(fileName).click();
                fileManagerPageLocators.filePreview
                    .previewBox()
                    .should('be.visible');
                fileManagerPageLocators.filePreview
                    .fileName()
                    .should('contain.text', `${fileName}`);
                fileManagerPageLocators.filePreview
                    .fileType()
                    .should('contain.text', `${fileType}`);
                fileManagerPageLocators.filePreview.closePreview().click();
                break;

            case 'Renames':
                fileManagerPageLocators
                    .viewFolder(fileName)
                    .siblings('div.actions-grid')
                    .within((file) => {
                        cy.wrap(file).invoke('show');
                        fileManagerPageLocators
                            .renameFile()
                            .should('be.visible')
                            .click();
                    });
                fileManagerPageLocators
                    .renameFileTextInput()
                    .clear()
                    .type(newFilename);
                dashboardLocators.confirmButton().click();

                fileManagerPageLocators
                    .viewFolder(newFilename)
                    .should('be.visible');
                dashboardLocators
                    .successToast()
                    .should('contain', 'Renamed successfully');
                break;

            case 'Deletes':
                fileManagerPageLocators
                    .viewFolder(fileName)
                    .siblings('div.actions-grid')
                    .within((file) => {
                        cy.wrap(file).invoke('show');
                        fileManagerPageLocators
                            .deleteFile()
                            .should('be.visible')
                            .click();
                    });
                cy.contains(
                    'p',
                    'Remember: The file will be delete from your storage'
                ).should('be.visible');
                dashboardLocators.confirmButton().click();
                dashboardLocators
                    .successToast()
                    .should('contain', 'Deleted successfully');
                break;

            default:
                throw new Error('Selected file action is not supported');
        }
    });
    return cy.logStep(`${fileAction} executed`);
};
