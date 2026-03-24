const surveyFunnelLocators = {
    genderSurveyLink: () =>
        cy
            .get('.videos__text')
            .contains('GET THE DIET AND TRAINING SPECIFICALLY')
            .children('a'),
};

export default surveyFunnelLocators;
