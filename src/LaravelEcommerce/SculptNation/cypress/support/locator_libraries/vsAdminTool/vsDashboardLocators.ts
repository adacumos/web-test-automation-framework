const vsDashboardLocators = {
    selectMenu: (menu: string) =>
        cy.get(`a[href*="/admin/${menu.toLowerCase()}"]`),
    selectSubMenu: (submenu: string) => cy.contains('.nav-label', submenu),
    selectTrainerMenu: (menu: string) =>
        cy.get(`a[href*="/admin/trainers/${menu.toLowerCase()}"]`),
    getRecord: (value: string) => cy.contains('td', value),
    tableRecord: () => cy.get('table tbody>tr'),
    selectTab: (tabName: string) =>
        cy.findByRole('tab', { name: new RegExp(tabName.toLowerCase(), 'i') }),
    spinnerIcon: () => cy.get('.spinner--strech'),
    toastMessage: () => cy.get('p.toast-text'),
    logoutVsAdmin: () => cy.contains('.nav-link', 'Logout'),

    socialMediaIcons: {
        youtube: () => cy.get('.socicon-youtube'),
        facebook: () => cy.get('.socicon-facebook'),
        instagram: () => cy.get('.socicon-instagram'),
        linkedin: () => cy.get('.socicon-linkedin'),
        apple: () => cy.get('.socicon-apple'),
        pinterest: () => cy.get('.socicon-pinterest'),
        tiktok: () => cy.get('.social-list > :nth-child(7)'),
        x: () => cy.get('.social-list > :nth-child(8)'),
        google: () => cy.get('.social-list > :nth-child(9)'),
    },
    liveChat: () => cy.get('#gladlyChatDragHandle'),
    liveChatTextBox: () => cy.get('#gladlyTextBox'),
    vusButton: () => cy.get('.vsu__learn-cta'),
};
export default vsDashboardLocators;
