import { vsSurveyPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            randomVsSurveyResponse: (gender: string) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to generate ramdom selection to Sculptnation Survey Questionnaires
 * @param gender User Gender selection
 * example:  randomVsSurveyResponse('Male')
 */

export const randomVsSurveyResponse = (
    gender: string
): Cypress.Chainable<any> => {
    cy.logStep(`Initiate VS ${gender} survey`);
    const ageIndex = Math.floor(Math.random() * 6);
    const activityIndex = Math.floor(Math.random() * 3);
    const metabolismIndex = Math.floor(Math.random() * 5);
    const ageRange: any = Object.values(vsSurveyPageLocators.ageRange)[
        ageIndex
    ];
    const womanAgeRange: any = Object.values(
        vsSurveyPageLocators.femaleAgeRange
    )[ageIndex];
    const manAgeRange: any = Object.values(vsSurveyPageLocators.maleAgeRange)[
        ageIndex
    ];
    const activityLevel: any = Object.values(
        vsSurveyPageLocators.activityLevel
    )[activityIndex];

    const maleActivityLeveV13: any = Object.values(
        vsSurveyPageLocators.maleActivityV13
    )[activityIndex];
    const femaleActivityLevelV13: any = Object.values(
        vsSurveyPageLocators.femaleActivityv13
    )[activityIndex];
    const maleBodyType: any = Object.values(vsSurveyPageLocators.maleBodyType)[
        activityIndex
    ];
    const femaleBodyType: any = Object.values(
        vsSurveyPageLocators.femaleBodyType
    )[activityIndex];
    const cravingsType: any = Object.values(vsSurveyPageLocators.cravingsType)[
        activityIndex
    ];
    const metabolismSignals: any = Object.values(
        vsSurveyPageLocators.metabolismSignal
    )[metabolismIndex];

    switch (gender) {
        case 'Female':
            cy.url().then((surveyUrl) => {
                if (
                    !surveyUrl.includes('/sp/survey/fbk-cpc-v2') &&
                    !surveyUrl.includes(
                        '/sp/survey/survey-aka1-v3?g=female&ref=home'
                    )
                ) {
                    vsSurveyPageLocators.femaleGender().click();
                }
            });
            ageRange().click();
            vsSurveyPageLocators.impericalHeight().click();
            vsSurveyPageLocators
                .heightInchesSlider()
                .filter(':visible')
                .then(($range) => {
                    cy.wrap($range).invoke('val', 65).trigger('input');
                    cy.wrap($range).trigger('change');
                });
            vsSurveyPageLocators
                .continueButton()
                .filter(':visible')
                .last()
                .click({ force: true });
            vsSurveyPageLocators
                .weightSlider()
                .filter(':visible')
                .then(($range) => {
                    cy.wrap($range).invoke('val', 220).trigger('input');
                    cy.wrap($range).trigger('change');
                });
            vsSurveyPageLocators
                .continueButton()
                .filter(':visible')
                .last()
                .click();
            activityLevel().filter(':visible').last().click();
            break;

        case 'Male':
            vsSurveyPageLocators.maleGender().click();
            ageRange().click();
            vsSurveyPageLocators.impericalHeight().click();
            vsSurveyPageLocators
                .heightInchesSlider()
                .filter(':visible')
                .then(($range) => {
                    cy.wrap($range).invoke('val', 73).trigger('input');
                    cy.wrap($range).trigger('change');
                });
            vsSurveyPageLocators
                .continueButton()
                .filter(':visible')
                .last()
                .click({ force: true });
            vsSurveyPageLocators
                .weightSlider()
                .filter(':visible')
                .then(($range) => {
                    cy.wrap($range).invoke('val', 273).trigger('input');
                    cy.wrap($range).trigger('change');
                });
            vsSurveyPageLocators
                .continueButton()
                .filter(':visible')
                .last()
                .click();
            activityLevel().filter(':visible').last().click();
            break;

        case 'Woman':
            vsSurveyPageLocators.womanGender().click();
            womanAgeRange().click();
            cy.get('body').then((surveyHeader) => {
                if (
                    surveyHeader
                        .text()
                        .includes('Do you tend to store more fat')
                ) {
                    femaleBodyType().click();
                    femaleActivityLevelV13().click();
                    vsSurveyPageLocators.wantSeeButton().eq(2).click();
                    cravingsType().eq(3).click({ force: true });
                    vsSurveyPageLocators.wantSeeButton().eq(3).click();
                    metabolismSignals().filter(':visible').last().click();
                }
            });
            vsSurveyPageLocators.impericalHeight().click();
            vsSurveyPageLocators
                .heightInchesSlider()
                .filter(':visible')
                .invoke('val', 65)
                .click();
            vsSurveyPageLocators.continueButton().filter(':visible').click();
            vsSurveyPageLocators
                .weightSlider()
                .filter(':visible')
                .invoke('val', 220)
                .click();
            vsSurveyPageLocators
                .continueButton()
                .filter(':visible')
                .click({ force: true });
            cy.get('body').then((surveyHeader) => {
                if (surveyHeader.text().includes('What is your Goal Weight')) {
                    vsSurveyPageLocators
                        .goalWeightSlider()
                        .invoke('val', 273)
                        .click();
                    vsSurveyPageLocators.continueButton().eq(3).click();
                    vsSurveyPageLocators.wantSeeButton().eq(5).click();
                } else {
                    activityLevel().filter(':visible').last().click();
                }
            });
            break;

        case 'Man':
            vsSurveyPageLocators.manGender().click();
            manAgeRange().click();
            cy.get('body').then((surveyHeader) => {
                if (
                    surveyHeader
                        .text()
                        .includes('Do you tend to store more fat')
                ) {
                    maleBodyType().click();
                    maleActivityLeveV13().click();
                    vsSurveyPageLocators.wantSeeButton().eq(0).click();
                    cravingsType().eq(1).click({ force: true });
                    vsSurveyPageLocators.wantSeeButton().eq(1).click();
                    metabolismSignals().filter(':visible').last().click();
                }
            });
            vsSurveyPageLocators.impericalHeight().click();
            vsSurveyPageLocators
                .heightInchesSlider()
                .filter(':visible')
                .invoke('val', 73)
                .click();
            vsSurveyPageLocators.continueButton().filter(':visible').click();
            vsSurveyPageLocators
                .weightSlider()
                .filter(':visible')
                .invoke('val', 273)
                .click();
            vsSurveyPageLocators.continueButton().filter(':visible').click();
            cy.get('body').then((surveyHeader) => {
                if (surveyHeader.text().includes('What is your Goal Weight')) {
                    vsSurveyPageLocators
                        .goalWeightSlider()
                        .invoke('val', 273)
                        .click();
                    vsSurveyPageLocators.continueButton().eq(3).click();
                    vsSurveyPageLocators.wantSeeButton().eq(4).click();
                } else {
                    activityLevel().filter(':visible').last().click();
                }
            });
            break;
        default:
            throw new Error('Invalid selection');
    }
    return cy.logStep('Select Which best desribes the User');
};
