const fileManagerPageLocators = {
    createFolderButton: () =>
        cy.findByRole('button', { name: /create folder/i }),
    uploadButton: () => cy.get('.manual_upload input[type="file"]'),
    refreshButton: () => cy.get('.justify-start > button:nth-child(1)'),
    listViewButton: () => cy.get('button:nth-child(4)'),
    selectMultipleFolderButton: () => cy.get('button:nth-child(5)'),

    // folder actions
    goUpFolder: () => cy.get('.mb-3 [data-key="folder_back"]'),
    createFolder: () => cy.get('input[placeholder="Write a folder name"]'),
    createButton: () => cy.get('button[data-testid="confirm-button"]'),

    // file actions
    viewFolder: (folderName: string) => cy.contains('.mb-3 div', folderName),
    deleteFile: () => cy.get('.cursor-pointer svg[aria-labelledby="delete"]'),
    renameFile: () => cy.get('.cursor-pointer svg[aria-labelledby="edit"]'),
    renameFileTextInput: () => cy.findByRole('textbox'),

    filePreview: {
        previewBox: () => cy.get('div.box-preview'),
        fileName: () => cy.contains('span.title', 'Name').next(),
        fileType: () => cy.contains('span.title', 'Mime Type').next(),
        copyUrl: () => cy.findByRole('button', { name: /copy/i }),
        closePreview: () => cy.findByRole('button', { name: /x/i }),
        removeFile: () => cy.findByRole('button', { name: /remove file/i }),
    },
};
export default fileManagerPageLocators;
