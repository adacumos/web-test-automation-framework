import { vsNewSurveyPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            surveyGaRefreshPageTests: (gender: string) => void;
        }
    }
}
/**
 * command used to run survey ga page refresh tests
 * @param gender User Gender selection
 * example:  surveyGaRefreshPageTests('Male')
 */
let reloadCount = 0;

const maxReloads = 3; // Set a limit to avoid infinite reloads

export const surveyGaRefreshPageTests = (gender: string): void => {
    cy.logStep(`Initiate VS ${gender} survey`);
    reloadCount = 0; // Reset reload count for each test run

    let activityIndex = Math.floor(Math.random() * 3);
    const activityLevel = Object.values(vsNewSurveyPageLocators.activityLevel)[
        activityIndex
    ];

    // Helper function to randomly reload
    function stepWithReload(stepFn: any) {
        if (Math.random() < 0.6 && reloadCount < maxReloads) {
            reloadCount += 1;
            cy.reload();
            cy.url().should('include', '/sp/survey/survey-ga');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(1000);
            cy.then(() => {
                surveyGaRefreshPageTests(gender); // Recursive call to restart the survey
            });
        } else {
            stepFn();
        }
    }

    switch (gender) {
        case 'Woman':
        case 'Female':
            cy.get('body').then(($body) => {
                const goalWeightInputExists =
                    $body.find('input.weight').length > 0;
                const activityLevelNxtButton =
                    $body.find('button.continue').length > 0;
                activityIndex = Math.floor(Math.random() * 4);
                vsNewSurveyPageLocators.femaleGender().click();
                vsNewSurveyPageLocators
                    .ageInput()
                    .type(Math.floor(Math.random() * 40 + 20).toString());
                vsNewSurveyPageLocators.nextButton().click();

                stepWithReload(() => {
                    vsNewSurveyPageLocators
                        .heightFeet()
                        .type(Math.floor(Math.random() * 3 + 5).toString());
                    vsNewSurveyPageLocators
                        .heightInch()
                        .type(Math.floor(Math.random() * 4 + 4).toString());
                    vsNewSurveyPageLocators.nextButton().click();
                    vsNewSurveyPageLocators
                        .currentWeightInput()
                        .type(Math.floor(Math.random() * 80 + 120).toString());
                    vsNewSurveyPageLocators.nextButton().click();
                    if (goalWeightInputExists) {
                        stepWithReload(() => {
                            vsNewSurveyPageLocators
                                .goalWeightInput()
                                .type(
                                    Math.floor(
                                        Math.random() * 80 + 120
                                    ).toString()
                                );
                            vsNewSurveyPageLocators.nextButton().click();
                        });
                    }

                    activityLevel()
                        .eq(0)
                        .click()
                        .then(() => {
                            if (activityLevelNxtButton) {
                                vsNewSurveyPageLocators.nextButton().click();
                            }
                        });
                });
            });
            break;

        case 'Man':
        case 'Male':
            cy.get('body').then(($body) => {
                const goalWeightInputExists =
                    $body.find('input.weight').length > 0;
                const activityLevelNxtButton =
                    $body.find('button.continue').length > 0;
                vsNewSurveyPageLocators.maleGender().click();
                vsNewSurveyPageLocators
                    .ageInput()
                    .type(Math.floor(Math.random() * 50 + 20).toString());
                vsNewSurveyPageLocators.nextButton().click();

                stepWithReload(() => {
                    vsNewSurveyPageLocators
                        .heightFeet()
                        .type(Math.floor(Math.random() * 4 + 5).toString());
                    vsNewSurveyPageLocators
                        .heightInch()
                        .type(Math.floor(Math.random() * 4 + 4).toString());
                    vsNewSurveyPageLocators.nextButton().click();
                    vsNewSurveyPageLocators
                        .currentWeightInput()
                        .type(Math.floor(Math.random() * 80 + 120).toString());
                    vsNewSurveyPageLocators.nextButton().click();
                    if (goalWeightInputExists) {
                        vsNewSurveyPageLocators
                            .goalWeightInput()
                            .type(
                                Math.floor(Math.random() * 80 + 120).toString()
                            );
                        vsNewSurveyPageLocators.nextButton().click();
                    }

                    activityLevel()
                        .eq(0)
                        .click()
                        .then(() => {
                            if (activityLevelNxtButton) {
                                vsNewSurveyPageLocators.nextButton().click();
                            }
                        });
                });
            });
            break;
        default:
            throw new Error('Invalid selection');
    }
    if (reloadCount >= maxReloads) {
        cy.log('Max reloads reached. Ending test.');
        cy.randomNewVsSurveyResponse(gender);
    }
};
