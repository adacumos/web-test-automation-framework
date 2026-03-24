import { vsNewSurveyPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            randomNewVsSurveyResponse: (gender: string) => void;
        }
    }
}
/**
 * command used to generate ramdom selection to NEW LE-VS Survey Questionnaires
 * @param gender User Gender selection
 * example:  randomNewVsSurveyResponse('Male')
 */

export const randomNewVsSurveyResponse = (gender: string): void => {
    cy.logStep(`Initiate VS ${gender} survey`);
    const ageIndex = Math.floor(Math.random() * 6);
    let activityIndex = Math.floor(Math.random() * 3);
    const metabolismIndex = Math.floor(Math.random() * 5);

    const womanAgeRange = Object.values(vsNewSurveyPageLocators.femaleAgeRange)[
        ageIndex
    ];
    const manAgeRange = Object.values(vsNewSurveyPageLocators.maleAgeRange)[
        ageIndex
    ];
    const activityLevel = Object.values(vsNewSurveyPageLocators.activityLevel)[
        activityIndex
    ];

    const maleActivityLeveV13 = Object.values(
        vsNewSurveyPageLocators.maleActivityV13
    )[activityIndex];
    const femaleActivityLevelV13 = Object.values(
        vsNewSurveyPageLocators.femaleActivityv13
    )[activityIndex];
    const maleBodyType = Object.values(vsNewSurveyPageLocators.maleBodyType)[
        activityIndex
    ];
    const femaleBodyType = Object.values(
        vsNewSurveyPageLocators.femaleBodyType
    )[activityIndex];
    const cravingsType = Object.values(vsNewSurveyPageLocators.cravingsType)[
        activityIndex
    ];
    const metabolismSignals = Object.values(
        vsNewSurveyPageLocators.metabolismSignal
    )[metabolismIndex];

    switch (gender) {
        case 'Woman':
        case 'Female':
            cy.get('body').then(($body) => {
                if ($body.find('.gender-question-button').length > 0) {
                    activityIndex = Math.floor(Math.random() * 4);
                    vsNewSurveyPageLocators.femaleGender().click();
                    vsNewSurveyPageLocators.ageInput().type('38');
                    vsNewSurveyPageLocators.nextButton().click();
                    vsNewSurveyPageLocators.heightFeet().type('5');
                    vsNewSurveyPageLocators.heightInch().type('6');
                    vsNewSurveyPageLocators.nextButton().click();
                    vsNewSurveyPageLocators.currentWeightInput().type('200');
                    vsNewSurveyPageLocators.nextButton().click();
                    if ($body.find('input.weight').length > 0) {
                        vsNewSurveyPageLocators.goalWeightInput().type('150');
                        vsNewSurveyPageLocators.nextButton().click();
                    }
                } else {
                    vsNewSurveyPageLocators.womanGender().click();
                    womanAgeRange().click();
                    cy.get('body').then((surveyHeader) => {
                        if (
                            surveyHeader
                                .text()
                                .includes('Do you tend to store more fat')
                        ) {
                            femaleBodyType().click();
                            femaleActivityLevelV13().click();
                            vsNewSurveyPageLocators
                                .wantSeeButton()
                                .eq(2)
                                .click();
                            cravingsType().eq(3).click({ force: true });
                            vsNewSurveyPageLocators
                                .wantSeeButton()
                                .eq(3)
                                .click();
                            metabolismSignals().eq(1).click();
                        }
                    });
                    vsNewSurveyPageLocators.impericalHeight().click();
                    vsNewSurveyPageLocators
                        .heightInchesSlider()
                        .invoke('val', 70)
                        .click();
                    vsNewSurveyPageLocators.continueButton().click();
                    vsNewSurveyPageLocators
                        .weightSlider()
                        .invoke('val', 220)
                        .click();
                    vsNewSurveyPageLocators.continueButton().click();
                    cy.get('body').then((surveyHeader) => {
                        if (
                            surveyHeader
                                .text()
                                .includes('What is your Goal Weight')
                        ) {
                            vsNewSurveyPageLocators
                                .goalWeightSlider()
                                .invoke('val', 273)
                                .click();
                            vsNewSurveyPageLocators.continueButton().click();
                            vsNewSurveyPageLocators
                                .wantSeeButton()
                                .eq(5)
                                .click();
                        }
                    });
                }
                activityLevel()
                    .eq(0)
                    .click()
                    .then(() => {
                        if ($body.find('button.continue').length > 0) {
                            vsNewSurveyPageLocators.nextButton().click();
                        }
                    });
            });
            break;

        case 'Man':
        case 'Male':
            cy.get('body').then(($body) => {
                if ($body.find('.gender-question-button').length > 0) {
                    vsNewSurveyPageLocators.maleGender().click();
                    vsNewSurveyPageLocators.ageInput().type('42');
                    vsNewSurveyPageLocators.nextButton().click();
                    vsNewSurveyPageLocators.heightFeet().type('6');
                    vsNewSurveyPageLocators.heightInch().type('1');
                    vsNewSurveyPageLocators.nextButton().click();
                    vsNewSurveyPageLocators.currentWeightInput().type('320');
                    vsNewSurveyPageLocators.nextButton().click();
                    if ($body.find('input.weight').length > 0) {
                        vsNewSurveyPageLocators.goalWeightInput().type('220');
                        vsNewSurveyPageLocators.nextButton().click();
                    }
                } else {
                    vsNewSurveyPageLocators.manGender().click();
                    manAgeRange().click();
                    cy.get('body').then((surveyHeader) => {
                        if (
                            surveyHeader
                                .text()
                                .includes('Do you tend to store more fat')
                        ) {
                            maleBodyType().click();
                            maleActivityLeveV13().click();
                            vsNewSurveyPageLocators
                                .wantSeeButton()
                                .eq(0)
                                .click();
                            cravingsType().eq(1).click({ force: true });
                            vsNewSurveyPageLocators
                                .wantSeeButton()
                                .eq(1)
                                .click();
                            metabolismSignals().eq(0).click();
                        }
                    });
                    vsNewSurveyPageLocators.impericalHeight().click();
                    vsNewSurveyPageLocators
                        .heightInchesSlider()
                        .invoke('val', 88)
                        .click();
                    vsNewSurveyPageLocators.continueButton().click();
                    vsNewSurveyPageLocators
                        .weightSlider()
                        .invoke('val', 273)
                        .click();
                    vsNewSurveyPageLocators.continueButton().click();
                    cy.get('body').then((surveyHeader) => {
                        if (
                            surveyHeader
                                .text()
                                .includes('What is your Goal Weight')
                        ) {
                            vsNewSurveyPageLocators
                                .goalWeightSlider()
                                .invoke('val', 273)
                                .click();
                            vsNewSurveyPageLocators.continueButton().click();
                            vsNewSurveyPageLocators
                                .wantSeeButton()
                                .eq(4)
                                .click();
                        }
                    });
                }
                activityLevel()
                    .eq(0)
                    .click()
                    .then(() => {
                        if ($body.find('button.continue').length > 0) {
                            vsNewSurveyPageLocators.nextButton().click();
                        }
                    });
            });
            break;
        default:
            throw new Error('Invalid selection');
    }
};
