import vsCustomQuestionnairePageLocators from '../../support/locator_libraries/consumerPages/vsCustomQuestionnairePageLocators';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutCustomQuestionnaire: (userEmail: string) => void;
        }
    }
}
/**
 * command used to fillout VShred Custom Questionnaire
 * @param userEmail client record email
 * example:  filloutCustomQuestionnaire('alice2024@google.com')
 */

export const filloutCustomQuestionnaire = (userEmail: string): void => {
    cy.logStep('Fillout Custom Questionnaire Form');
    vsCustomQuestionnairePageLocators
        .clientEmail()
        .should('contain.value', userEmail);
    vsCustomQuestionnairePageLocators.ageValue().clear().type('38');
    vsCustomQuestionnairePageLocators.country().type('US');
    vsCustomQuestionnairePageLocators.state().type('FL');
    vsCustomQuestionnairePageLocators.heightFeet().select('6');
    vsCustomQuestionnairePageLocators.heightInches().select('1');
    vsCustomQuestionnairePageLocators.weight().type('230');
    vsCustomQuestionnairePageLocators.weightUnit('KG').click();
    vsCustomQuestionnairePageLocators.gender('female').click();
    vsCustomQuestionnairePageLocators.activityLevel('Heavy').click();
    vsCustomQuestionnairePageLocators.avgGymTime('None').click();
    vsCustomQuestionnairePageLocators.dietPreference('Paleo').click();
    vsCustomQuestionnairePageLocators.otherDietPreference().type('None');
    vsCustomQuestionnairePageLocators.dietStyle('Keto').click();
    vsCustomQuestionnairePageLocators
        .favFoods()
        .clear()
        .type('Burgers, Fries, Salmon, Pasta, Huge Steak');

    vsCustomQuestionnairePageLocators
        .eatFood()
        .clear()
        .type('Burgers, Pizza, Hotdogs');
    vsCustomQuestionnairePageLocators.allergies('no').click();
    vsCustomQuestionnairePageLocators.foodAllergies().clear().type('Peanuts');
    vsCustomQuestionnairePageLocators.fitnessGoals('Improve Health').click();
    vsCustomQuestionnairePageLocators
        .activityLength()
        .clear()
        .type('A long long time ago');
    vsCustomQuestionnairePageLocators
        .timeAllowance()
        .clear()
        .type('Minimum possible');
    vsCustomQuestionnairePageLocators
        .weeklyRoutine()
        .clear()
        .type('Eat, Work, Play, Sleep, Repeat...');
    vsCustomQuestionnairePageLocators.favExercise().clear().type('Walk');
    vsCustomQuestionnairePageLocators
        .leastFavExercise()
        .clear()
        .type('Crunches, Plank');
    vsCustomQuestionnairePageLocators.accessGymType('neither').click();
    vsCustomQuestionnairePageLocators.gymEquipment('Barbells').click();
    vsCustomQuestionnairePageLocators.gymEquipment('Dumbbells').click();
    vsCustomQuestionnairePageLocators
        .getSupportArea()
        .clear()
        .type('Train me...');
    vsCustomQuestionnairePageLocators.hoursofSleep('Less than 6 hours').click();
    vsCustomQuestionnairePageLocators.selfOverweight('no').click();
    vsCustomQuestionnairePageLocators.alwaysOverweight('no').click();
    vsCustomQuestionnairePageLocators.anyInjurries('yes').click();
    vsCustomQuestionnairePageLocators.listInjuries().clear().type('sore knee');
    vsCustomQuestionnairePageLocators
        .healthCondition()
        .clear()
        .type('generally healthy');
    vsCustomQuestionnairePageLocators
        .supplementsTaken()
        .clear()
        .type('brain booster, vitamins and minerals');
    vsCustomQuestionnairePageLocators
        .additionalComments()
        .clear()
        .type(
            'Test Questionnaire Fillout: Custom Diet and Training Plan Questionnaire'
        );
    vsCustomQuestionnairePageLocators.referralSource().clear().type('Facebook');
    vsCustomQuestionnairePageLocators.agreeCheckbox().click();
    vsCustomQuestionnairePageLocators.submitQuestionnaire().click();
    vsCustomQuestionnairePageLocators
        .responseBanner()
        .should('contain.text', 'Questionnaire Submitted');
};
