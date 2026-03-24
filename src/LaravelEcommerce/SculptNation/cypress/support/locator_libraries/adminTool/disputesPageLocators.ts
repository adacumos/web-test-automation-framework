const disputesPageLocators = {
    createDisputeButton: () => cy.get('[dusk=create-button]').eq(0),
    keyField: () => cy.get('[dusk=key-value-key-0]'),
    valueField: () => cy.get('[dusk=key-value-value-0]'),
    paymentDropdownSelector: () =>
        cy.get('[data-testid=payments-search-input]'),
    paymentSelector: () => cy.get('[dusk=payments-search-input-result-0]'),
    viewDisputeButton: () =>
        cy.get('[data-testid=disputes-items-0-view-button]'),
    deleteButton: () => cy.get('[data-testid=open-delete-modal]'),
    confirmDeleteButton: () => cy.get('[data-testid=confirm-button]'),
    emptyTableSelector: () => cy.get('h3'),
};

export default disputesPageLocators;
