const templatesLocators = {
    templatesLinks: () => cy.get('a').contains('166'),
    createTemplateButton: () =>
        cy.findByRole('link', { name: /create template/i }),
    templateField: () => cy.get('[dusk=template]'),
    templateDeleteIcon: () => cy.findByRole('button', { name: /delete/i }),
    templatesConfirmDeleteButton: () =>
        cy.get('button[data-testid*=confirm-button]'),
    updatedTemplate: () => cy.findByText(/TestTemplate1/i),
    templatesMenuButton: () => cy.get('[dusk=page-templates-resource-link]'),
};

export default templatesLocators;
