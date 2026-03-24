const twentyMinutesLocators = {
    twentyMinutesLink: () =>
        cy
            .get('.videos__text')
            .contains('20-MINUTES TO SET YOUR METABOLISM')
            .children('a'),
};

export default twentyMinutesLocators;
