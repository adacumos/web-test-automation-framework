const vsSurveyPageLocators = {
    femaleGender: () => cy.contains('a.button, .q2-option', /female/i),
    maleGender: () => cy.contains('a.button, .q2-option', /male/i),
    womanGender: () => cy.get('a[onclick*="selectGender(\'female\')"]'),
    manGender: () => cy.get('a[onclick*="selectGender(\'male\')"]'),
    continueButton: () => cy.get('a.btn-primary, button, .button, button.next'),
    manGender1: () => cy.get("div[class*='col-6 col-md-4 mx-auto']"),
    womanGender1: () =>
        cy.get("div[class*='col-6 col-md-4 offset-md-2 mx-auto']"),
    wantSeeButton: () => cy.get('a[test-id*="continue"]'),
    showSurveyResults: () =>
        cy.contains('a .btn-primary', 'Show Me My Results'),

    ageRange: {
        ageTeens: () => cy.findByRole('img', { name: /teen/i }),
        age20s: () => cy.findByRole('img', { name: /20/i }),
        age30s: () => cy.findByRole('img', { name: /30/i }),
        age40s: () => cy.findByRole('img', { name: /40/i }),
        age50s: () => cy.findByRole('img', { name: /50/i }),
        age60s: () => cy.findByRole('img', { name: /60/i }),
    },
    femaleAgeRange: {
        femaleTeens: () =>
            cy.findByRole('img', { name: /teens female|teens icon/i }),
        female20s: () => cy.findByRole('img', { name: /20s female|20s icon/i }),
        female30s: () => cy.findByRole('img', { name: /30s female|30s icon/i }),
        female40s: () => cy.findByRole('img', { name: /40s female|40s icon/i }),
        female50s: () => cy.findByRole('img', { name: /50s female|50s icon/i }),
        female60s: () => cy.findByRole('img', { name: /60s female|60s icon/i }),
    },
    maleAgeRange: {
        maleTeens: () =>
            cy.findByRole('img', { name: /teen male|teens icon/i }),
        male20s: () => cy.findByRole('img', { name: /20s male|20s icon/i }),
        male30s: () => cy.findByRole('img', { name: /30s male|30s icon/i }),
        male40s: () => cy.findByRole('img', { name: /40smale|40s icon/i }),
        male50s: () => cy.findByRole('img', { name: /50s male|50s icon/i }),
        male60s: () => cy.findByRole('img', { name: /60s male|60s icon/i }),
    },
    impericalHeight: () => cy.findByText(/imperial/i),
    metricHeight: () => cy.findByText(/mertric/i),
    heightInchesSlider: () => cy.get('input#inches, input[type=range]'),
    heightMetersSlider: () => cy.get('input#centimeters'),
    weightSlider: () =>
        cy.get('input#weight, .q-type-weight input[type=range]'),
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
            cy.get('a[test-id*="activityLight"], img[alt="Ligthtly Active"]'),
        moderatelyActive: () =>
            cy.get('a[test-id*="activityLight"], img[alt="Moderate Active"]'),
        veryActive: () =>
            cy.get('a[test-id*="activityVery"], img[alt="Very Active"]'),
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
    femaleaka1v3: {
        range1820: () => cy.get('[test-id="teensButtonFemale"]'),
        impericalHeight: () => cy.findByText(/imperial/i),
        heightContinueButton: () => cy.get('[test-id="heightContinueButton"]'),
        lightlyActive: () => cy.get('[test-id="activityLightFemale"]'),
        descriptionSoft: () => cy.get('[test-id="femaleGetToned"]'),
        videoContainer: () => cy.get('.video-container'),
    },
    maleHardGainer: () =>
        cy.get('a[test-id=maleHardGainer],img[alt="Clean Bulk"]'),
    maleSkinnyFat: () =>
        cy.get('a[test-id=maleSkinnyFat],img[alt="Skinny Fat"]'),
    maleGetRipped: () =>
        cy.get('a[test-id=maleGetRipped],img[alt="Get Ripped"]'),
    maleFatLoss: () =>
        cy.get('a[test-id=maleFatLoss], img[alt="Fat Loss Extreme"]'),

    femaleGetToned: () =>
        cy.get('a[test-id=femaleGetToned], img[alt="Get Toned"]'),
    femaleFatLoss: () =>
        cy.get('a[test-id=femaleFatLoss], img[alt="Fat Loss Extreme"]'),
    femaleSkinnyFat: () =>
        cy.get('a[test-id=femaleSkinnyFat], img[alt="Skinny Fat"]'),

    addtoOrdersSixBottles: () => cy.findAllByText(/add to order/i).eq(0),
    addtoOrdersThreeBottles: () => cy.findAllByText(/add to order/i).eq(1),
    addtoCart: () => cy.findByText(/add to cart/i),
    yesaddtomyOrder: () => cy.findByText(/yes! add to to my order/i),
    addtoCartCDP: () =>
        cy.findByText(
            /Yes! Add the 4-Week Custom Diet To My Order So I Can Burn Fat 4X’s Faster/i
        ),

    VSUUpgradeYes: () =>
        cy.findByRole('button', {
            name: /yes! i want to start my free month!/i,
        }),
    VSUUpgradeYesCA: () => cy.get('a').contains('Claim My FREE 30 Day Trial'),
    cdpUpgradeButton: () => cy.get("button[class*='site-btn scroll']"),
    burnEvolvedUpgradeButton: () =>
        cy.findByRole('button', { name: /yes! upgrade my order/i }),
    agreeCheckBox: () =>
        cy.findByText(
            /i agree to the payment terms of this recurring product\./i
        ),

    noThanksBurn: () => cy.get("div[class*='container text-center']"),
    noThanksGreens: () => cy.get("div a[class*='red']"),
    noThanksVSU: () => cy.get("div[class*='text-center downsell']"),
    noThanksRecipe: () =>
        cy.findByText(/No thanks. I don't want this amazing\./i),

    greensItem: () => cy.contains('GREENS REGULAR - DISCOUNTED'),
    vsuItem: () => cy.contains('VSU - Monthly 9.95 (30-Day Trial)'),
    burnPMItem: () => cy.contains('BURN PM - Six Bottle'),
    burnEvolvedItem: () => cy.contains('BURN EVOLVED 2.0 - 6 bottles'),
    burnEvolvedUpgradeItem: () =>
        cy.contains('BURN EVOLVED 2.0 - 6-Bottle Upgrade'),
    tonedIn90Days: () => cy.contains('Toned In 90 Days $57'),
    cdpItem: () => cy.findByRole('cell', { name: /Custom Diet Plan/i }),
    ripped90Item: () => cy.contains('Ripped In 90 Days $57 Bundle'),
    greensHghBoostItem: () =>
        cy.contains('Greens Strawberry (3) + HGH Boost (FREE)'),
    vsuFreeTrailItem: () =>
        cy.contains('VSU All-Access Monthly - $9.95 (7-Day Free Trial)'),
    vsuMembershipItem: () =>
        cy.contains('VSU All-Access Annual Membership - $97'),
    burnAcceleratorItem: () => cy.contains('BURN ACCELERATOR STACK'),
    burnStackItem: () =>
        cy.contains('Burn Stack: Burn Evolved 2.0 (3) + Burn PM (3) (FREE)'),
    SilverCdpItem: () => cy.contains('Silver Custom Diet Plan (4 Week Re-up)'),
    SilverDietAndTrainingItem: () =>
        cy.contains('Silver Plus 4 Week Diet and Training - $97'),

    hormoneQuiz: {
        container3: () => cy.get('[data-step="3"]'),
        container5: () => cy.get('[data-step="5"]'),
        container6: () => cy.get('[data-step="6"]'),
        container7: () => cy.get('[data-step="7"]'),
        container9: () => cy.get('[data-step="9"]'),
        container10: () => cy.get('[data-step="10"]'),
        quizContainer: () => cy.get('.quiz-steps-container'),
        startQuiz: () => cy.findByText(/start quiz/i),
        nextButton: () =>
            cy
                .get('form.quiz-step:not(.hidden)')
                .find('[data-quiz-button]')
                .contains('NEXT'),
        age: () => cy.get('#age'),
        symptoms: () =>
            cy.get(
                '[data-value^="hot-flashes"], [data-value^="stubborn-weight-gain"], [data-value^="sugar-cravings"], [data-value^="brain-fog"], [data-step="5"]'
            ),
        menopause: () =>
            cy.get(
                '[data-value^="hormonal-imbalance"], [data-value^="perimenopause"], [data-value^="menopause"], [data-value^="post-menopause"], [data-step="5"]'
            ),
        bodySymptoms: () =>
            cy.get(
                '[data-value^="thinning-hair"], [data-value^="aching-joints"], [data-value^="super-dry-skin"], [data-value^="fatigue"], [data-step="6"]'
            ),
        currentDiet: () =>
            cy.get(
                '[data-value^="salad"], [data-value^="keto"], [data-value^="low-fat"], [data-value^="low-carb"], [data-value^="vegan"], [data-step="7"]'
            ),
        digestive: () =>
            cy.get(
                '[data-value^="gas-bloating"], [data-value^="food-intolerances"], [data-value^="food-allergies"], [data-value^="frequent-constipation"], [data-step="9"]'
            ),
        exercise: () =>
            cy.get(
                '[data-value^="light"], [data-value^="moderate"], [data-value^="very"], [data-step="10"]'
            ),
        heightFt: () => cy.get('#height-ft'),
        heightIn: () => cy.get('#height-in'),
        weight: () => cy.get('#weight-lb'),
        goalWeight: () => cy.get('#weight-goal-lb'),
        excessWeight: () =>
            cy.get(
                '[data-value^="belly"], [data-value^="thighs"], [data-value^="all"]'
            ),
    },
};
export default vsSurveyPageLocators;
