const quietLogisticsLocators = {
    // Login form
    usernameInputField: () => cy.get('#ctl00_PageContent_txtUsername'),
    passwordInputField: () => cy.get('#ctl00_PageContent_txtPassword'),
    loginButton: () =>
        cy.findByRole('button', {
            name: /submit/i,
        }),

    cancelButton: () => cy.findByRole('button', { name: /cancel/i }),
    clientTesting: () => cy.get('#ID-11'),
    goButton: () =>
        cy.findByRole('button', {
            name: /go/i,
        }),
    searchField: () => cy.get('#ctl00_DetailPageContent_txtSONO'),
    findButton: () =>
        cy.findByRole('button', {
            name: /find/i,
        }),
    soNumber: () => cy.get('tbody > tr:nth-child(2) > td:nth-child(1) > a'),
    soStatus: () => cy.get('tr:nth-child(2) > td:nth-child(3)'),
    pickButton: () =>
        cy.findByRole('button', {
            name: /pick\.\.\./i,
        }),
    setAllPickQtyToOrderQtyButton: () =>
        cy.findByRole('button', {
            name: /set all pick qty to order qty/i,
        }),
    qtyValue: () =>
        cy.get(
            '#ctl00_DetailPageContent_GridView1 > tbody > tr:nth-child(2) > td:nth-child(5)'
        ),
    completeOrderAndShipButton: () =>
        cy.findByRole('button', {
            name: /complete order and ship/i,
        }),
    statusMessage: () => cy.get('#ctl00_DetailPageContent_Message'),
    backButton: () =>
        cy.findByRole('button', {
            name: /back/i,
        }),
    sendSOResultButton: () =>
        cy.findByRole('button', {
            name: /send soresult/i,
        }),
};

export default quietLogisticsLocators;
