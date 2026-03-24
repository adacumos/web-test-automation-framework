const categoriesLocators = {
    sidebarMenuLocator: () => cy.get('a').contains('Categories'),
    categoryNameField: () => cy.get('#name'),
    createCategoryButton: () => cy.get('[dusk=create-button]'),
    createSaveNewCategoryButton: () =>
        cy.get('[dusk=create-and-add-another-button]'),
    deleteCategoryButton: () => cy.get('[data-testid=confirm-button]'),
    deleteCategoryButtonModal: () => cy.get('[data-testid=open-delete-modal]'),
    viewNewCategory: () =>
        cy.get('[data-testid=categories-items-0-view-button]'),
    spanLocator: () => cy.get('span'),
};

export default categoriesLocators;
