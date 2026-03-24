const pagesPageLocators = {
    pagesPageTableLocator: () =>
        cy.get('[data-testid=resource-table]').find('a').eq(1),
    ID: () => cy.get('.text-90').eq(0),
    Source: () => cy.get('.text-90').eq(1),
    Name: () => cy.get('.text-90').eq(2),
    Title: () => cy.get('.text-90').eq(3),
    Author: () => cy.get('.text-90').eq(4),
    CreatedAt: () => cy.get('.text-90').eq(5),
    UpdatedAt: () => cy.get('.text-90').eq(6),
};

export default pagesPageLocators;
