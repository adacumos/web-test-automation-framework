const vsTrainerToolUnassignedPlansLocators = {
    filterRecord: {
        byName: () => cy.get('#table-filter-customer_name'),
        byEmail: () => cy.get('#table-filter-email'),
        byPlan: () => cy.get('#table-filter-plan_name'),
        byGender: () => cy.get('#__BVID__21'),
        byType: () => cy.get('#__BVID__23'),
        byStatus: () => cy.get('#__BVID__24'),
        byFormSubmissionDate: () => cy.get('th:nth-child(8) .btn'),
        byPurchaseDate: () => cy.get('th:nth-child(9) .btn'),
    },
    recordCheckbox: () => cy.get('.vuetable-td-component-checkbox input'),

    trainerList: () => cy.get('.vuetable-slot .multiselect__placeholder'),
    multipleClient: () => cy.get('th:nth-child(2) div.multiselect__tags'),
    asssignTrainerButton: () => cy.get('button').contains('Assign'),
};
export default vsTrainerToolUnassignedPlansLocators;
