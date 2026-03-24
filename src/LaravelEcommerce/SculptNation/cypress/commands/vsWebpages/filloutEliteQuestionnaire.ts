import { vsEliteQuestionnairePageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutEliteQuestionnaire: (userEmail: string) => void;
        }
    }
}
/**
 * command used to fillout VShred Elite Program Questionnaire
 * @param userEmail client record email
 * example:  filloutEliteQuestionnaire('alice2024@google.com')
 */

export const filloutEliteQuestionnaire = (userEmail: string): void => {
    cy.logStep('Fillout Elite Program Questionnaire Form');
    vsEliteQuestionnairePageLocators
        .clientEmail()
        .should('contain.value', userEmail);
    vsEliteQuestionnairePageLocators.birthDate().type('1995-07-05');
    vsEliteQuestionnairePageLocators.country().type('US');
    vsEliteQuestionnairePageLocators.state().clear().type('NV');
    vsEliteQuestionnairePageLocators
        .startDate()
        .clear()
        .type('a week from now');
    vsEliteQuestionnairePageLocators.timezone().clear().type('pacific');
    vsEliteQuestionnairePageLocators.heightFeet().select('5');
    vsEliteQuestionnairePageLocators.heightInches().select('11');
    vsEliteQuestionnairePageLocators.weight().clear().type('200');
    vsEliteQuestionnairePageLocators.weightUnit('LB').click();
    vsEliteQuestionnairePageLocators.gender('male').click();
    vsEliteQuestionnairePageLocators.activityLevel('Moderate').click();
    vsEliteQuestionnairePageLocators.avgGymTime('1-3 Days Per Week').click();
    vsEliteQuestionnairePageLocators.dietPreference('Vegetarian').click();
    vsEliteQuestionnairePageLocators.otherDietPreference().type('None');
    vsEliteQuestionnairePageLocators.cookingPrep('Simple').click();
    vsEliteQuestionnairePageLocators
        .dietStyle('Trainer Recommendation')
        .click();
    vsEliteQuestionnairePageLocators
        .favFoods()
        .clear()
        .type('Burgers, Fries, Salmon, Pasta, Huge Steak');

    vsEliteQuestionnairePageLocators
        .eatFood()
        .clear()
        .type('Burgers, Pizza, Hotdogs');
    vsEliteQuestionnairePageLocators.allergies('no').click();
    vsEliteQuestionnairePageLocators.foodAllergies().clear().type('Peanuts');
    vsEliteQuestionnairePageLocators.fitnessGoals('Improve Health').click();
    vsEliteQuestionnairePageLocators.phaseApproach('no').click();
    vsEliteQuestionnairePageLocators
        .activityLength()
        .clear()
        .type('A long long time ago');
    vsEliteQuestionnairePageLocators
        .timeAllowance()
        .clear()
        .type('Minimum possible');
    vsEliteQuestionnairePageLocators
        .weeklyRoutine()
        .clear()
        .type('Eat, Work, Play, Sleep, Repeat...');
    vsEliteQuestionnairePageLocators.accessGymType('home gym').click();
    vsEliteQuestionnairePageLocators.favExercise().clear().type('Walk');
    vsEliteQuestionnairePageLocators
        .workoutPreference('workout at the gym')
        .click();
    vsEliteQuestionnairePageLocators
        .getSupportArea()
        .clear()
        .type('Train me...');
    vsEliteQuestionnairePageLocators.hoursofSleep('Less than 6 hours').click();
    vsEliteQuestionnairePageLocators
        .stressFactors()
        .clear()
        .type('Work and balance');
    vsEliteQuestionnairePageLocators.selfOverweight('no').click();
    vsEliteQuestionnairePageLocators.alwaysOverweight('no').click();
    vsEliteQuestionnairePageLocators.anyInjurries('yes').click();
    vsEliteQuestionnairePageLocators.listInjuries().clear().type('sore knee');
    vsEliteQuestionnairePageLocators
        .healthCondition()
        .clear()
        .type('generally healthy');
    vsEliteQuestionnairePageLocators
        .supplementsTaken()
        .clear()
        .type('brain booster, vitamins and minerals');
    vsEliteQuestionnairePageLocators
        .additionalComments()
        .clear()
        .type('Test Questionnaire Fillout: Elite Program Questionnaire');
    vsEliteQuestionnairePageLocators.agreeCheckbox().click();
    vsEliteQuestionnairePageLocators.submitQuestionnaire().click();
    vsEliteQuestionnairePageLocators
        .responseBanner()
        .should('contain.text', 'Elite Questionnaire Submitted');
};
