const homePageLocators = {
    navigationMenu: () => cy.findByRole('navigation'),
    navigationMenuItemLink: (menuItem: string) =>
        cy.findByRole('link', { name: new RegExp(menuItem, 'i') }), // accessible within navigationMenu
};

export default homePageLocators;
