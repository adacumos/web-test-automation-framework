import {
    dashboardLocators,
    fileManagerPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            executeFolderAction: (
                folderAction: string,
                folderNname: string,
                newFoldername?: any
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to execute actions to a folder
 * @param folderAction action to be executed on a folder
 * @param folderNname folder name to be worked on
 * @param newFoldername optional field for rename action
 * example:  executeFolderAction('Create','TestFile')
 */

export const executeFolderAction = (
    folderAction: string,
    folderName: string,
    newFoldername?: any
): Cypress.Chainable<any> => {
    cy.logStep(`Running ${folderAction} on ${folderName} folder`);

    switch (folderAction) {
        case 'Creates':
            fileManagerPageLocators.createFolderButton().click();
            fileManagerPageLocators.createFolder().clear().type(folderName);
            fileManagerPageLocators.createButton().click();
            break;

        case 'Opens':
            fileManagerPageLocators.viewFolder(folderName).click();
            break;

        case 'Renames':
            fileManagerPageLocators
                .viewFolder(folderName)
                .should('be.visible')
                .siblings('div.actions-grid')
                .within((folder) => {
                    cy.wrap(folder).invoke('show');
                    fileManagerPageLocators
                        .renameFile()
                        .should('be.visible')
                        .click();
                });
            fileManagerPageLocators
                .renameFileTextInput()
                .clear()
                .type(newFoldername);
            dashboardLocators.confirmButton().click();

            fileManagerPageLocators
                .viewFolder(newFoldername)
                .should('be.visible');
            dashboardLocators
                .successToast()
                .should('contain', 'Renamed successfully');
            break;

        case 'Deletes':
            fileManagerPageLocators
                .viewFolder(folderName)
                .should('be.visible')
                .siblings('div.actions-grid')
                .within((folder) => {
                    cy.wrap(folder).invoke('show');
                    fileManagerPageLocators
                        .deleteFile()
                        .should('be.visible')
                        .click();
                });
            cy.contains(
                'p',
                'Remember: The folder and all his contents will be delete from your storage'
            ).should('be.visible');
            dashboardLocators.confirmButton().click();
            dashboardLocators
                .successToast()
                .should('contain', 'Deleted successfully');
            break;

        default:
            throw new Error('Selected file action is not supported');
    }

    return cy.logStep(`${folderAction} executed`);
};
