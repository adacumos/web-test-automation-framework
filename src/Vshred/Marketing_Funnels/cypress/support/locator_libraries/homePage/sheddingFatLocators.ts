const sheddingFatLocators = {
    sheddingFatLink: () =>
        cy
            .get('.videos__text')
            .contains('SHEDDING FAT WHILE HAVING FUN')
            .children('a'),
    sixBottleSubscription: () => {
        cy.get('[data-one-time-price="32.50"]').find('button');
    },
};

export default sheddingFatLocators;
