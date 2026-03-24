const vsCustomQuestionnairePageLocators = {
    firstName: () => cy.get('input[name=first_name]'),
    lastName: () => cy.get('input[name=last_name]'),
    clientEmail: () => cy.get('input[name=email]'),
    ageValue: () => cy.get('input[name=Age]'),
    birthDate: () => cy.get('input[name=birthday]'),
    country: () => cy.get('input[name=Country]'),
    state: () => cy.get('input[name=State]'),
    heightFeet: () => cy.get('select[name=height_feet]'),
    heightInches: () => cy.get('select[name=height_inches]'),
    weight: () => cy.get('input[name=weight]'),
    weightUnit: (unit: string) =>
        cy.get(`input[name=weight_unit][value=${unit}]`),
    gender: (gender: string) => cy.get(`input[name=gender][value=${gender}]`),
    activityLevel: (activityLevel: string) =>
        cy
            .get(`input[name=daily_activity_level][value*=${activityLevel}]`)
            .next(),
    avgGymTime: (gymTime: string) =>
        cy.get(`input[name=average_gym_time][value*=${gymTime}]`).next(),

    dietPreference: (dietPref: string) =>
        cy.get(`input[name="dietary_preferences"][value=${dietPref}]`),

    otherDietPreference: () => cy.get('input[name=other_dietary_prefs]'),

    dietStyle: (dietStyle: string) =>
        cy
            .get(`input[name=diet_style_preferences][value="${dietStyle}"]`)
            .next(),

    cookingPrep: (cookPrep: string) =>
        cy
            .get(`input[name=simple_or_complex_recipe][value=${cookPrep}]`)
            .next(),

    favFoods: () => cy.get('textarea[name=favorite_foods]'),
    leastFavFood: () => cy.get('textarea[name=least_favorite_foods]'),
    eatFood: () => cy.get('textarea[name=food_you_wont_eat]'),
    allergies: (answer: string) =>
        cy.get(`input[name="has_food_allergies"][value="${answer}"]`),
    foodAllergies: () => cy.get('input[name=food_allergies'),
    fitnessGoals: (fitnessGoals: string) =>
        cy.get(`input[name=fitness_goals][value="${fitnessGoals}"]`).next(),
    bodyPartImprovement: () => cy.get('textarea[name=body_part_improvement]'),
    activelyWeightLifting: (answer: string) =>
        cy.get(`input[name*="currently_active"][value="${answer}"]`),
    activityLength: () => cy.get('input[name=activity_length]'),
    timeAllowance: () => cy.get('input[name=time_allowance]'),
    weeklyRoutine: () => cy.get('textarea[name=weekly_routine]'),
    whyInactive: () => cy.get('textarea[name=why_inactive]'),
    favExercise: () => cy.get('textarea[name=favorite_exercises]'),
    leastFavExercise: () => cy.get('textarea[name=least_favorite_exercises]'),
    accessGymType: (gymAccess: string) =>
        cy.get(`input[name*="acess_gym"][value="${gymAccess}"]`),
    gymEquipment: (equipment: string) =>
        cy.get(`input[name*="equipment_access"][value="${equipment}"]`),
    getSupportArea: () => cy.get('textarea[name=important_support_area]'),
    hoursofSleep: (sleepHours: string) =>
        cy.get(`input[name=hours_sleep][value="${sleepHours}"]`),
    stressLevel: () => cy.get('select[name=stress_level]'),
    stressFactors: () => cy.get('textarea[name=stress_factors]'),
    overweight: (answer: string) =>
        cy.get(`input[name=family_overweight][value=${answer}]`).next(),
    selfOverweight: (answer: string) =>
        cy.get(`input[name=self_overweight][value=${answer}]`).next(),
    alwaysOverweight: (answer: string) =>
        cy.get(`input[name=always_overweight][value=${answer}]`).next(),
    anyInjurries: (answer: string) =>
        cy.get(`input[name="any_injuries"][value="${answer}"]`),
    listInjuries: () => cy.get('input[name=injuries_list]'),
    healthCondition: () => cy.get('textarea[name=health_conditions]'),
    supplementsTaken: () => cy.get('textarea[name=supplements_taken]'),
    additionalComments: () => cy.get('textarea[name=additional_comments]'),
    referralSource: () => cy.get('input[name=referral_source]'),
    decidingFactor: () => cy.get('textarea[name=deciding_factor]'),
    agreeCheckbox: () =>
        cy.get('.col-12 > .cdp-field > .checkbox-container > .checkmark'),

    // Submit Questionnaire
    submitQuestionnaire: () => cy.get('.cdp-form-submit-button'),
    responseBanner: () => cy.get('.modal-active .wpb_wrapper h2'),
};
export default vsCustomQuestionnairePageLocators;
