const routesLocators = {
    editRouteButton: () => cy.get('[dusk=edit-resource-button]'),
    slugField: () => cy.get('[dusk=slug]'),
    routeEditButton: () => cy.get('[dusk=300-edit-button]'),
};

export default routesLocators;
