const VSblogLocators = {
    titleText: () => cy.get('.mb-4'),
    video: () => cy.get('#widget2'),
    button: () => cy.findAllByText(/yes! give me access/i).eq(0),
};

export default VSblogLocators;
