const surveyQuizLocators = {
    // Survey Quiz elements
    surveyTitle: () =>
        cy.findByRole('heading', {
            name: /new free quiz reveals a diet & exercise to get fit easy & fast/i,
        }),
    femaleButton: () => cy.get('[aria-label="Woman"]'),
    maleButton: () => cy.get('[aria-label="Man"]'),
    age18to20Option: () => cy.findByRole('img', { name: /teens/i }),
    age20ption: () => cy.findByRole('img', { name: /20s/i }),
    age30ption: () => cy.findByRole('img', { name: /30s/i }),
    age40Option: () => cy.findByRole('img', { name: /40s/i }),
    age50Option: () => cy.findByRole('img', { name: /50s/i }),
    age60Option: () => cy.findByRole('img', { name: /60s/i }),
    heightSlider: () =>
        cy.get(
            ':nth-child(7) > .form-group > .slider > .slider-track > .slider-track-high'
        ),
    continueButton: () => cy.findByRole('link', { name: /continue/i }),
    weightSlider: () =>
        cy.get(
            '#pageWeight > .well > .row > .col-md-10 > .imperial > .form-group > .slider > .slider-track > .slider-track-high'
        ),
    lightlyActiveOptionMale: () => cy.get('[test-id="activityLightMale"]'),
    moderatelyActiveOptionMale: () =>
        cy.get('[test-id="activityModerateMale"]'),
    veryActiveOptionMale: () => cy.get('[test-id="activityVeryMale"]'),
    lightlyActiveOptionFemale: () => cy.get('[test-id="activityLightFemale"]'),
    moderatelyActiveOptionFemale: () =>
        cy.get('[test-id="activityModerateFemale"]'),
    veryActiveOptionFemale: () => cy.get('[test-id="activityVeryFemale"]'),
    cantBiggerOption: () => cy.get('[test-id="maleHardGainer"]'),
    skinnyOption: () => cy.get('[test-id="maleSkinnyFat"]'),
    happyOption: () => cy.get('[test-id="maleGetRipped"]'),
    unHappyOption: () => cy.get('[test-id="maleFatLoss"]'),
    imSoftOption: () => cy.get('[test-id="femaleGetToned"]'),
    fatOption: () => cy.get('[test-id="femaleFatLoss"]'),
    thinOption: () => cy.get('[test-id="femaleSkinnyFat"]'),
    vsuUpsell: () => cy.get('#checkbox'),
    declineUpsell: () =>
        cy.findByRole('link', {
            name: /\(no thanks\. i know this is my only opportunity to get access to this free 1 month trial and i don’t care that i’m missing out\. i understand that if i leave this page and decline this special offer, the v shred university members free trial likely won’t be available ever again\. i want to pass on this forever\)\./i,
        }),
    declineBurnUpsell: () =>
        cy.findByRole('link', {
            name: /No Thanks, I am perfectly happy waiting to see how things go/i,
        }),
};

export default surveyQuizLocators;
