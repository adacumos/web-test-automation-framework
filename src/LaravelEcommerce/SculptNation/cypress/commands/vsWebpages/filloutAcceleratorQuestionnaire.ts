import { vsAcceleratorQuestionnairePageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutAcceleratorQuestionnaire: (userEmail: string) => void;
        }
    }
}
/**
 * command used to fillout VShred Accelerator Program Questionnaire
 * @param userEmail client record email
 * example:  filloutAcceleratorQuestionnaire('alice2024@google.com')
 */

export const filloutAcceleratorQuestionnaire = (userEmail: string): void => {
    cy.logStep('Fillout Accelerator Program Questionnaire Form');
    vsAcceleratorQuestionnairePageLocators
        .clientEmail()
        .should('contain.value', userEmail);
    vsAcceleratorQuestionnairePageLocators.birthDate().type('1991-10-05');
    vsAcceleratorQuestionnairePageLocators.country().type('US');
    vsAcceleratorQuestionnairePageLocators.state().clear().type('FL');
    vsAcceleratorQuestionnairePageLocators
        .startDate()
        .clear()
        .type('a week from now');
    vsAcceleratorQuestionnairePageLocators.timezone().clear().type('central');
    vsAcceleratorQuestionnairePageLocators.heightFeet().select('6');
    vsAcceleratorQuestionnairePageLocators.heightInches().select('1');
    vsAcceleratorQuestionnairePageLocators.weight().clear().type('230');
    vsAcceleratorQuestionnairePageLocators.weightUnit('KG').click();
    vsAcceleratorQuestionnairePageLocators.gender('female').click();
    vsAcceleratorQuestionnairePageLocators.activityLevel('Light').click();
    vsAcceleratorQuestionnairePageLocators.avgGymTime('None').click();
    vsAcceleratorQuestionnairePageLocators.dietPreference('Paleo').click();
    vsAcceleratorQuestionnairePageLocators.otherDietPreference().type('None');
    vsAcceleratorQuestionnairePageLocators.cookingPrep('Simple').click();
    vsAcceleratorQuestionnairePageLocators.dietStyle('Keto').click();
    vsAcceleratorQuestionnairePageLocators
        .favFoods()
        .clear()
        .type('Burgers, Fries, Salmon, Pasta, Huge Steak');

    vsAcceleratorQuestionnairePageLocators
        .eatFood()
        .clear()
        .type('Burgers, Pizza, Hotdogs');
    vsAcceleratorQuestionnairePageLocators.allergies('no').click();
    vsAcceleratorQuestionnairePageLocators
        .foodAllergies()
        .clear()
        .type('Peanuts');
    vsAcceleratorQuestionnairePageLocators
        .fitnessGoals('Improve Health')
        .click();
    vsAcceleratorQuestionnairePageLocators.phaseApproach('no').click();
    vsAcceleratorQuestionnairePageLocators
        .activityLength()
        .clear()
        .type('A long long time ago');
    vsAcceleratorQuestionnairePageLocators
        .timeAllowance()
        .clear()
        .type('Minimum possible');
    vsAcceleratorQuestionnairePageLocators
        .weeklyRoutine()
        .clear()
        .type('Eat, Work, Play, Sleep, Repeat...');
    vsAcceleratorQuestionnairePageLocators
        .accessGymType('gym facility')
        .click();
    vsAcceleratorQuestionnairePageLocators.favExercise().clear().type('Walk');
    vsAcceleratorQuestionnairePageLocators.favExercise().clear().type('Walk');
    vsAcceleratorQuestionnairePageLocators
        .workoutPreference('workout at the gym')
        .click();
    vsAcceleratorQuestionnairePageLocators
        .getSupportArea()
        .clear()
        .type('Train me...');
    vsAcceleratorQuestionnairePageLocators
        .hoursofSleep('Less than 6 hours')
        .click();
    vsAcceleratorQuestionnairePageLocators
        .stressFactors()
        .clear()
        .type('Work and balance');
    vsAcceleratorQuestionnairePageLocators.selfOverweight('no').click();
    vsAcceleratorQuestionnairePageLocators.alwaysOverweight('no').click();
    vsAcceleratorQuestionnairePageLocators.anyInjurries('yes').click();
    vsAcceleratorQuestionnairePageLocators
        .listInjuries()
        .clear()
        .type('sore knee');
    vsAcceleratorQuestionnairePageLocators
        .healthCondition()
        .clear()
        .type('generally healthy');
    vsAcceleratorQuestionnairePageLocators
        .supplementsTaken()
        .clear()
        .type('brain booster, vitamins and minerals');
    vsAcceleratorQuestionnairePageLocators
        .additionalComments()
        .clear()
        .type('Test Questionnaire Fillout: Accelerator Program Questionnaire');
    vsAcceleratorQuestionnairePageLocators.agreeCheckbox().click();
    vsAcceleratorQuestionnairePageLocators.submitQuestionnaire().click();
    vsAcceleratorQuestionnairePageLocators
        .responseBanner()
        .should('contain.text', 'Accelerator Questionnaire Submitted');
};
