const userProfilePageLocators = {
    completeProfileModalCloseButton: () => cy.get('.modal-close').first(),
    menu: {
        purchasesLink: () =>
            cy.findByRole('link', {
                name: /purchases/i,
            }),
    },

    logout: () =>
        cy.findByRole('link', {
            name: /logout/i,
        }),
};

export default userProfilePageLocators;
