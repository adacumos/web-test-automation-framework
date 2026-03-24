const surveyLocators = {
    manButton: () => cy.get("div[class*='col-6 col-md-4 mx-auto']"),
    maleOption: () => cy.findAllByText(/male/i).eq(0),
    femaleOption: () => cy.findAllByText(/female/i).eq(0),
    womanButton: () =>
        cy.get("div[class*='col-6 col-md-4 offset-md-2 mx-auto']"),
    age1820Option: () => cy.get('[test-id="teensButtonMale"]'),
    age20Option: () => cy.get('[test-id="20sButtonMale"]'),
    age30Option: () => cy.get('[test-id="30sButtonMale"]'),
    age40Option: () => cy.get('[test-id="40sButtonMale"]'),
    age40WomanOption: () => cy.get('[test-id="40sButtonFemale"]'),
    age50Option: () => cy.get('[test-id="50sButtonMale"]'),
    age60Option: () => cy.get('[test-id="60sButtonMale"]'),
    heightSlider: () => cy.get('[test-id="inchesSlider"]'),
    surveyHeightSlider: () => cy.get('[id="inches"]'),
    heightContinueButton: () => cy.get('[test-id="heightContinueButton"]'),
    weightSlider: () => cy.get('[test-id="imperialWeightSlider"]'),
    surveyWeightSlider: () => cy.get('[id="weight"]'),
    weightContinueButton: () => cy.findByRole('link', { name: /continue/i }),
    lightlyActiveOption: () => cy.get('[test-id="activityLightMale"]'),
    lightlyActiveWomanOption: () => cy.get('[test-id="activityLightFemale"]'),
    moderatelyActiveOption: () => cy.get('[test-id="activityModerateMale"]'),
    veryActiveOption: () => cy.get('[test-id="activityVeryMale"]'),
    cantBiggerOption: () => cy.get('[test-id="maleHardGainer"]'),
    skinnyOption: () => cy.get('[test-id="maleSkinnyFat"]'),
    skinnyWomanOption: () => cy.get('[test-id="femaleSkinnyFat"]'),
    happyOption: () => cy.get('[test-id="maleGetRipped"]'),
    unHappyOption: () => cy.get('[test-id="maleFatLoss"]'),
    everythingUpsellLink: () =>
        cy.findByRole('link', { name: /everything for just \$57\.00/i }),
    addtoOrdersSixBottles: () => cy.findAllByText(/add to order/i).eq(0),
    addtoOrdersThreeBottles: () => cy.findAllByText(/add to order/i).eq(1),
    burnEvolvedUpgradeButton: () =>
        cy.findByRole('button', { name: /yes! upgrade my order/i }),
    agreeCheckBox: () =>
        cy.findByText(
            /i agree to the payment terms of this recurring product\./i
        ),
    VSUUpgradeYes: () =>
        cy.findByRole('button', {
            name: /yes! i want to start my free month!/i,
        }),
    noThanks: () =>
        cy.findByText(
            /no thanks\. i understand that this is my only opportunity to get a custom plan at this price\. i’m ok with missing out, even at today’s huge discount\. i understand that after declining this offer, this steep discount will never be made available to me again\. i will pass on this offer forever\./i
        ),
    addtoCart: () => cy.findByText(/add to cart/i),
    greensItem: () => cy.contains('GREENS REGULAR - DISCOUNTED'),
    vsuItem: () => cy.contains('VSU - Monthly 9.95 (30-Day Trial)'),
    burnPMItem: () => cy.contains('BURN PM - Six Bottle'),
    burnEvolvedItem: () => cy.contains('BURN EVOLVED 2.0 - 6 bottles'),
    tonedIn90Days: () => cy.contains('Toned In 90 Days $57'),
    cdpItem: () => cy.findByRole('cell', { name: /Custom Diet Plan/i }),
    ripped90Item: () => cy.contains('Ripped In 90 Days $57 Bundle'),
    greensHghBoostItem:() => cy.contains('Greens Strawberry (3) + HGH Boost (FREE)'),
    vsuFreeTrailItem:() => cy.contains('VSU All-Access Monthly - $9.95 (7-Day Free Trial)'),
    vsuMembershipItem:() => cy.contains('VSU All-Access Annual Membership - $97'),
    burnAcceleratorItem:() => cy.contains('BURN ACCELERATOR STACK'),
    burnStackItem:() => cy.contains('Burn Stack: Burn Evolved 2.0 (3) + Burn PM (3) (FREE)'),
    SilverCdpItem: () => cy.contains('Silver Custom Diet Plan (4 Week Re-up)'),
    SilverDietAndTrainingItem: () => cy.contains('Silver Plus 4 Week Diet and Training - $97'),

    burnEvolvedUpgradeItem: () =>
        cy.contains('BURN EVOLVED 2.0 - 6-Bottle Upgrade'),
    shippingFirstNameTextBox: () =>
        cy.findByRole('textbox', { name: /first name/i }),
    shippingLastNameTextBox: () =>
        cy.findByRole('textbox', { name: /last name/i }),
    ShippingStreetAddressTextBox: () =>
        cy.findByRole('textbox', { name: /street address/i }),
    shippingcityTextBox: () =>
        cy.findByRole('textbox', { name: /town \/ city/i }),
    shippingStateTextBox: () => cy.findByRole('combobox', { name: /state/i }),
    shippingZipTextBox: () =>
        cy.findByRole('textbox', { name: /postcode \/ zip/i }),
    shippingSaveAddressButton: () => cy.findByText(/save address/i),
    noThanksBurn: () =>
        cy.findByText(
            /no thanks, i am perfectly happy waiting to see how things go/i
        ),
    noThanksGreens: () =>
        cy.findByText(
            /no thanks, i’d rather take my chances with sub-optimal fat burning and immune defense support/i
        ),

    noThanksVSU: () =>
        cy.findByText(
            /(No thanks. I know this is my ONLY opportunity to get access to this free 1 month trial and I don’t care that I’m missing out. I understand that if I leave this page and decline this special offer, the V Shred University Members free trial likely won’t be available ever again. I want to pass on this forever)./i
        ),
    usernameTextbox: () =>
        cy.findByRole('textbox', { name: /username or email address/i }),

    passwordTextbox: () => cy.findByLabelText(/password/i),

    loginButton: () => cy.findByRole('button', { name: /log in/i }),

    // le move page
    yesCDPButton: () =>
        cy.findAllByText(/YES! GET MY CUSTOM PLAN NOW! >>/i).eq(0),
    dietAndTrainingPlanButton: () => cy.findByText(/GET MY DIET & TRAINING PLAN!/i),
    dietPlanButton: () => cy.findByText(/GET MY DIET PLAN!/i),
    yesBurnButton: () => cy.get("button[class*='scroll packages19__cta']"),
    addtoOrderButton: () =>cy.get("button[class*='site-btn scroll pkg7__cta']"),
    claimMembershipOfferButton: () => cy.contains('Claim Membership Offer >>'),
    claimAnnualPassButton: () => cy.contains('Claim ANNUAL PASS >>'),
    getMyGreensNowButton: () =>cy.get("button[class*='site-btn scroll packages23__contentItem1-contentButton']"),

    // Order form
    orderForm: {
        heading: () => cy.get('h2'),
        userName: () => cy.findByRole('textbox', { name: /enter your name/i }),
        userEmail: () =>
            cy.findByRole('textbox', { name: /enter your email/i }),
        userPhone: () => cy.findByRole('textbox', { name: /phone number/i }),
        nextStepOne: () => cy.get("span[class*='next-step button-one']"),
        creditCardNumber: () =>
            cy
                .iFrame('#braintree-hosted-field-number')
                .find('#credit-card-number'),
        expirationMonth: () =>
            cy
                .iFrame('#braintree-hosted-field-expirationMonth')
                .find('#expiration-month'),

        expirationYear: () =>
            cy
                .iFrame('#braintree-hosted-field-expirationYear')
                .find('#expiration-year'),

        securityCode: () =>
            cy.iFrame('#braintree-hosted-field-cvv').find('#cvv'),
        postalCode: () =>
            cy
                .iFrame('#braintree-hosted-field-postalCode')
                .find('#postal-code'),
        nextStepTwo: () => cy.get("span[class*='next-step button-two']"),
        submitOrder: () => cy.get('[id=submit-order]', { timeout: 5000 }),
        cdpUpsell: () =>
            cy.findByText(
                /let us guarantee the weight you lose will stay off \.\.\. for good!\(8\/10 of new clients choose this option\)/i
            ),
    },
};

export default surveyLocators;
