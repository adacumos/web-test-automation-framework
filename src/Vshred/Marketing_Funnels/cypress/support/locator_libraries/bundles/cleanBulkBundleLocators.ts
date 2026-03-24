const cleanBulkBundleLocators = {
    hereLabel: () => cy.contains('HERE'),
    editProfile: () => cy.contains('Edit Profile'),
    purchasesOptions: () => cy.contains('Purchases'),
};

export default cleanBulkBundleLocators;
