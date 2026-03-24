import { When } from '@badeball/cypress-cucumber-preprocessor';

When(
    /^The user "(Creates|Opens|Renames|Deletes)" a Folder$/,
    (folderAction: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { folderName, newFolderName } = staticTestData.fileReference;
            if (folderAction === 'Renames') {
                cy.executeFolderAction(folderAction, folderName, newFolderName);
            } else {
                cy.executeFolderAction(folderAction, folderName);
            }
        });
    }
);

When(
    /^The user "(Uploads|Previews|Deletes|Renames)" a File$/,
    (fileAction: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { fileName, newFilename } = staticTestData.fileReference;
            if (fileAction === 'Renames') {
                cy.executeFileAction(fileAction, fileName, newFilename);
            } else {
                cy.executeFileAction(fileAction, fileName);
            }
        });
    }
);
