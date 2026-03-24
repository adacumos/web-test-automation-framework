const getTheDietLocators = {
    getTheDietLink: () =>
        cy
            .get('.videos__text')
            .contains('GET THE DIET AND TRAINING SPECIFICALLY')
            .children('a'),
};

export default getTheDietLocators;
