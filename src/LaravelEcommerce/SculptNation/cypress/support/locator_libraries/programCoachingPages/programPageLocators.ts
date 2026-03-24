const programPageLocators = {
    fourteenDayHomePage: {
        titleBlock: () => cy.get('#headline'),
        tickerSlide: () => cy.get('#ticker'),

        signUpButton: () => cy.get('.button-green.mx-auto').eq(0),
        inputContainer: () => cy.get(':nth-child(9) > .container'),

        nameInput: () => cy.get('#name').eq(0),
        emailInput: () => cy.get('#email').eq(0),

        thanksForJoining: () => cy.get('#hero > .container'),
        facebookGroupButton: () =>
            cy.get('#whathappens > .container > .button-blue'),
    },
};

export default programPageLocators;
