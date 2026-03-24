const vsNewSurveyPageLocators = {
    womanGender: () => cy.get('.question-type-multiple > div > :nth-child(1)'),
    manGender: () => cy.get('.question-type-multiple > div > :nth-child(2)'),
    maleGender: () => cy.get('.gender-question-button.male'),
    femaleGender: () => cy.get('.gender-question-button.female'),
    continueButton: () => cy.contains('a, button', /continue/i),
    nextButton: () => cy.contains('a, button', /next/i),
    wantSeeButton: () => cy.get('a[test-id*="continue"]'),
    showSurveyResults: () =>
        cy.contains('a .btn-primary', 'Show Me My Results'),
    ageInput: () => cy.get('input.age'),
    heightFeet: () => cy.get('.height-wrapper input').eq(0),
    heightInch: () => cy.get('.height-wrapper input').eq(1),
    currentWeightInput: () => cy.get('input.weight'),
    goalWeightInput: () => cy.get('input.weight'),
    ageRange: {
        ageTeens: () => cy.findByRole('img', { name: /teens/i }),
        age20s: () => cy.findByRole('img', { name: /20s/i }),
        age30s: () => cy.findByRole('img', { name: /30s/i }),
        age40s: () => cy.findByRole('img', { name: /40s/i }),
        age50s: () => cy.findByRole('img', { name: /50s/i }),
        age60s: () => cy.findByRole('img', { name: /60s/i }),
    },
    femaleAgeRange: {
        femaleTeens: () =>
            cy.get('.question-option img[test-id="teensButtonFemale"]'),
        female20s: () =>
            cy.get('.question-option img[test-id="20sButtonFemale"]'),
        female30s: () =>
            cy.get('.question-option img[test-id="30sButtonFemale"]'),
        female40s: () =>
            cy.get('.question-option img[test-id="40sButtonFemale"]'),
        female50s: () =>
            cy.get('.question-option img[test-id="50sButtonFemale"]'),
        female60s: () =>
            cy.get('.question-option img[test-id="60sButtonFemale"]'),
    },
    maleAgeRange: {
        maleTeens: () =>
            cy.get('.question-option img[test-id="teensButtonMale"]'),
        male20s: () => cy.get('.question-option img[test-id="20sButtonMale"]'),
        male30s: () => cy.get('.question-option img[test-id="30sButtonMale"]'),
        male40s: () => cy.get('.question-option img[test-id="40sButtonMale"]'),
        male50s: () => cy.get('.question-option img[test-id="50sButtonMale"]'),
        male60s: () => cy.get('.question-option img[test-id="60sButtonMale"]'),
    },
    impericalHeight: () => cy.findByText(/imperial/i),
    metricHeight: () => cy.findByText(/mertric/i),
    heightInchesSlider: () => cy.get('input[type="range"]'),
    heightMetersSlider: () => cy.get('input#centimeters'),
    weightSlider: () => cy.get('input[type="range"]'),
    goalWeightSlider: () => cy.get('input#goalWeight'),

    maleBodyType: {
        upperBody: () => cy.get('img[alt *="upper"]').eq(0),
        midSection: () => cy.get('img[alt *="midsection"]').eq(0),
        hipsOrLegs: () => cy.get('img[alt *="hipslegs"]').eq(0),
    },
    femaleBodyType: {
        upperBody: () => cy.get('img[alt *="female upper"]').eq(0),
        midSection: () => cy.get('img[alt *="female midsection"]').eq(0),
        hipsOrLegs: () => cy.get('img[alt *="female hipslegs"]').eq(0),
    },
    cravingsType: {
        sweetFoods: () => cy.get('img[alt ="sweet foods"]'),
        saltyFoods: () => cy.get('img[alt ="salty foods"]'),
        sweetAndSaltFoods: () => cy.get('img[alt ="sweet & salty foods"]'),
    },
    metabolismSignal: {
        energyDrop: () => cy.get('img[alt = "energy drop"]'),
        gainWeight: () => cy.get('img[alt = "gain weight"]'),
        metabolism: () => cy.get('img[alt = "metabolism"]').eq(1),
        allAbove: () => cy.get('img[alt = "all above"]'),
        noneAbove: () => cy.get('img[alt = "none above"]'),
    },

    activityLevel: {
        lightlyActive: () =>
            cy.get('.question-option[data-answer-context="light"]'),
        moderatelyActive: () =>
            cy.get('.question-option[data-answer-context="moderate"]'),
        veryActive: () =>
            cy.get('.question-option[data-answer-context="very"]'),
        neverActive: () =>
            cy.get('.question-option[data-answer-context="never"]'),
    },
    activityLevelWoman: {
        lightlyActive: () => cy.get('a[test-id*="activityLightFemale"]'),
        moderatelyActive: () => cy.get('a[test-id*="activityModerateFemale"]'),
        veryActive: () => cy.get('a[test-id*="activityVeryFemale"]'),
    },
    maleActivityV13: {
        lightlyActive: () => cy.findByRole('img', { name: /male lightly/i }),
        moderatelyActive: () =>
            cy.findByRole('img', { name: /male moderately active/i }),
        veryActive: () => cy.findByRole('img', { name: /male very active/i }),
    },
    femaleActivityv13: {
        lightlyActive: () => cy.findByRole('img', { name: /female lightly/i }),
        moderatelyActive: () =>
            cy.findByRole('img', { name: /female moderately active/i }),
        veryActive: () => cy.findByRole('img', { name: /female very active/i }),
    },
    maleHardGainer: () => cy.get('[data-answer-context="clean-bulk"]'),
    maleSkinnyFat: () => cy.get('[data-answer-context="skinny-fat"]'),
    maleGetRipped: () => cy.get('[data-answer-context="get-ripped"]'),
    maleFatLoss: () => cy.get('[data-answer-context="fat-loss"]'),

    femaleGetToned: () => cy.get('[data-answer-context="get-toned"]'),
    femaleFatLoss: () => cy.get('[data-answer-context="fat-loss"]'),
    femaleSkinnyFat: () => cy.get('[data-answer-context="skinny-fat"]'),

    emailCustomPlanButton: () => cy.get('#email-submit'),

    surveyFl: {
        womenTextGender: () => cy.get('button[aria-label="female"]'),
        manTextGender: () => cy.get('button[aria-label="male"]'),

        AgeRange: {
            ageRangeage18s: () =>
                cy.get(
                    'body > main > div > div.main > div > div > div > div > div.questions > div:nth-child(2) > div.options > button:nth-child(1)'
                ),
            ageRangeage20s: () =>
                cy.get(
                    'body > main > div > div.main > div > div > div > div > div.questions > div:nth-child(2) > div.options > button:nth-child(2)'
                ),
            ageRangeage30s: () =>
                cy.get(
                    'body > main > div > div.main > div > div > div > div > div.questions > div:nth-child(2) > div.options > button:nth-child(3)'
                ),
            ageRangeage40s: () =>
                cy.get(
                    'body > main > div > div.main > div > div > div > div > div.questions > div:nth-child(2) > div.options > button:nth-child(4)'
                ),
            ageRangeage50s: () =>
                cy.get(
                    'body > main > div > div.main > div > div > div > div > div.questions > div:nth-child(2) > div.options > button:nth-child(5)'
                ),
            ageRangeage60s: () =>
                cy.get(
                    'body > main > div > div.main > div > div > div > div > div.questions > div:nth-child(2) > div.options > button:nth-child(6)'
                ),
        },
        continueButton: () =>
            cy.get('[data-question="3"] > .slider-wrapper > .option'),
        continueButtonWeight: () =>
            cy.get('[data-question="4"] > .slider-wrapper > .option'),

        activeLevel: {
            light: () => cy.get('button[data-answer="light"]'),
            moderate: () => cy.get('button[data-answer="moderate"]'),
            very: () => cy.get('button[data-answer="very"]'),
        },
    },
};
export default vsNewSurveyPageLocators;
