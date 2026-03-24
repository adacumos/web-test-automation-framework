const taxNexusesPageLocators = {
    createTaxNexusesButton: () => cy.get('[dusk=create-button]'),
    stateField: () => cy.get('#state'),
    countryField: () => cy.get('#country'),
    viewTaxNexus: () => cy.get('[data-testid=tax-nexuses-items-0-view-button]'),
    deleteButton: () => cy.get('[data-testid=open-delete-modal]'),
    resourceTable: () => cy.get('[data-testid=resource-table]'),
    confirmDeleteButton: () => cy.get('[data-testid=confirm-button]'),
    confirmTaxNexusDeleted: () => cy.get('.text-80'),
};

export default taxNexusesPageLocators;
