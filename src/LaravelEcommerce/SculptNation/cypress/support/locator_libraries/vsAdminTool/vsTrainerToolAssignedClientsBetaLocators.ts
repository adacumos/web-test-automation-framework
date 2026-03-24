const vsTrainerToolAssignedClientBetaLocators = {
    filterRecord: {
        byName: () => cy.get('input[id="table-filter-customer_name"]'),
        byEmail: () => cy.get('input[id="table-filter-email"]'),
        byPlanName: () => cy.get('select[id="__BVID__17"]'),
        byStatus: () => cy.get('select[id="__BVID__18"]'),
        byTrainer: () => cy.get('.multiselect__tags'),
    },
    getRecord: (value: string) => cy.contains('td', value),
};

export default vsTrainerToolAssignedClientBetaLocators;
