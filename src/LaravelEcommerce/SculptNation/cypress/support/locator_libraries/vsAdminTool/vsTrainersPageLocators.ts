const vsTrainersPageLocators = {
    filterRecord: {
        byName: () => cy.get('#table-filter-trainer_name'),
        byEmail: () => cy.get('#table-filter-email'),
        byUTMKey: () => cy.get('#table-filter-utm_content_key'),
        byCouponCode: () => cy.get('#table-filter-coupon_code'),
    },
    sortRecord: {
        byName: () => cy.get('thead > tr > th[id="_name"]'),
        byEmail: () => cy.get('thead > tr > th[id="_email"]'),
        byUTMKey: () => cy.get('thead > tr > th[id="_utm_content_key"]'),
        byCouponCode: () => cy.get('thead > tr > th[id="_coupon_code"]'),
    },
    getRecord: (value: string) => cy.contains('td', value),
    noDataAvailable: () => cy.findByText(/No Data Available/),
    getRecords: () => cy.get('tbody > tr'),
    recordCount: () =>
        cy.get(
            '.row-count-dropdown.float-right.custom-select.custom-select-sm'
        ),
    suspendButton: () => cy.get('button[title="Suspend"]'),
    suspendDialog: () => cy.get('#suspend-trainer___BV_modal_content_'),
    suspendDialogButton: () => cy.findByRole('button', { name: /Suspend/ }),
    cancelDialogButton: () => cy.findByRole('button', { name: /Cancel/ }),
    reinstateButton: () => cy.get('button[title="Reinstate"]'),
    reinstateDialog: () => cy.get('#reinstate-trainer___BV_modal_content_'),
    reinstateDialogButton: () => cy.findByRole('button', { name: /Reinstate/ }),
};

export default vsTrainersPageLocators;
