const consumerSurveyPageLocators = {
    cartLocator: () => cy.get('a'),
    womenButton: () => cy.findByRole('button', { name: /women/i }),
    menButton: () => cy.get('button.male'),
    yesButton: () => cy.findByRole('button', { name: /yes/i }),
    noButton: () => cy.findByRole('button', { name: /no/i }),
    notSureButton: () => cy.findByRole('button', { name: /not sure/i }),
    definitelyButton: () => cy.findByRole('button', { name: /definitely/i }),
    maybeButton: () => cy.findByRole('button', { name: /maybe/i }),
    lose20poundsGoal: () =>
        cy.findByRole('button', {
            name: /yes, i'd like to lose 20 to 50 pounds/i,
        }),
    loseWeightGoal: () =>
        cy.findByRole('button', {
            name: /yes, i'd like to lose enough weight so my clothes fit better and i'm\nmore attractive to the opposite sex/i,
        }),
    loseMidsectionGoal: () =>
        cy.findByRole('button', {
            name: /yes, i'd like to lose weight around my midsection/i,
        }),
    noGoalButton: () =>
        cy.findByRole('button', {
            name: /no, but i want to learn about dealing with my weight once and for all/i,
        }),
    less30DPeriod: () =>
        cy.findByRole('button', { name: /less than 30 days/i }),
    less60DPeriod: () =>
        cy.findByRole('button', { name: /less than 60 days/i }),
    noGoalPeriod: () =>
        cy.findByRole('button', {
            name: /it doesn't matter, i just want this weight off!/i,
        }),
    metabolicScoreCard: () => cy.get('div.questionnaire-card'),
    slowMetabolicScore: () => cy.findByRole('img', { name: /slow/i }),
    brokenMetabolicScore: () => cy.findByRole('img', { name: /broken/i }),
    stalledMetabolicScore: () => cy.findByRole('img', { name: /stalled/i }),

    watchPresentationButton: () =>
        cy.findByRole('button', { name: /watch presentation/i }),

    questionnaireText: (lineQuestion: string) =>
        cy.contains('h1.questionnaire-question-question', lineQuestion),
    vshredLandingPage: {
        menuList: {
            home: () => cy.get('a[href*="home"]').eq(0),
            programs: () =>
                cy.get('.menu-horizontal a[href*="programs"]').eq(0),
        },
        mobileMenuList: {
            mobileHome: () => cy.get('a[href*="/login?ref=home"]').eq(0),
            mobileLogin: () => cy.get('a[href*="/?ref=home"]').eq(0),
            mobilePrograms: () => cy.get('a[href*="programs?ref=home"]').eq(0),
        },
        maleButtonQuiz: () => cy.get('.hero__cta.male'),
        femaleButtonQuiz: () => cy.get('.hero__cta.female'),
        programs: {
            fatLossforHim: () => cy.get('a[href*="fat-loss-extreme?"]').eq(0),
            fatLossforHer: () => cy.get('a[href*="fat-loss-extreme-f?"]').eq(0),
            move: () => cy.get('a[href*="move?"]').eq(0),
            ripped90D: () => cy.get('a[href*="ripped-in-90-days?"]').eq(0),
            toned90D: () => cy.get('a[href*="toned-in-90-days/v1?"]').eq(0),
            vsAccelerator: () => cy.get('a[href*="vs-quiz-htc-direct?"]').eq(0),
            customDietPlan: () =>
                cy.get('a[href*="custom-diet-plan/reup?"]').eq(0),
            cleanBulk: () => cy.get('a[href*="clean-bulk-program?"]').eq(0),
            sixPackShred: () => cy.get('a[href*="six-pack-shred?"]').eq(0),
            bigArms: () => cy.get('a[href*="big-arms-program?"]').eq(0),
            bootyBuilder: () => cy.get('a[href*="the-booty-builder?"]').eq(0),
            recipeGuide: () => cy.get('a[href*="recipe-guide?"]').eq(0),
        },
        videoContainerSection: {
            videoTitles: () =>
                cy.findByText(/more ways to reach your fitness goals\.\.\./i),
            hormoneKillingMetabolismImage: () =>
                cy.get('img.videos__image[alt="3 hormones"]'),
            sheddingFatImage: () =>
                cy.get('img.videos__image[alt="shedding fat"]'),
            setMetabolismAblazeImage: () =>
                cy.get('img.videos__image[alt="20 minutes"]'),
            getDietAndTrainingImage: () =>
                cy.get('img.videos__image[alt="get-diet"]'),
            watchVideoLink: () => cy.contains('a', 'WATCH THE VIDEO'),
            takeTheQuizLink: () => cy.contains('a', 'TAKE THE QUIZ'),
        },
        vsProgramsPage: {
            addToOrderButton: () =>
                cy.contains(
                    'a.product-add-to-cart, a.site-btn, span',
                    /yes!|yes i want|buy now|instant access|everything for just|purchase/i
                ),
        },
    },
    snLandingPage: {
        muscleBuildSurvey: {
            BuildMuscleYes: () =>
                cy.contains(
                    '#survey-app .btn-primary',
                    /Yes/i
                ),
        },
    },
};
export default consumerSurveyPageLocators;
