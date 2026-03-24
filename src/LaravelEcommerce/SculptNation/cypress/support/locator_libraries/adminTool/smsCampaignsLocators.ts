const smsCampaignsLocators = {
    nameField: () => cy.get('[dusk=name]'),
    vendorField: () => cy.get('[dusk=vendor]'),
    endpointField: () => cy.get('[dusk=endpoint]'),
    viewSMSCampaign: () =>
        cy.get('[data-testid=sms-campaigns-items-0-view-button]'),
    deleteButton: () => cy.get('[data-testid=open-delete-modal]'),
    confirmDeleteButton: () => cy.get('[data-testid=confirm-button]'),
    confirmSMSCampaignDeleted: () => cy.get('.text-80'),
};

export default smsCampaignsLocators;
