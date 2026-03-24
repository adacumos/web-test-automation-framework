import { vsSurveyPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            hormoneQuiz: () => void;
        }
    }
}

export const hormoneQuiz = (): void => {
    cy.logStep(`Initiate VS hormone quiz`);
    vsSurveyPageLocators.hormoneQuiz.startQuiz().should('be.visible').click();

    const ageIndex = Math.floor(Math.random() * (99 - 18 + 1)) + 18;
    vsSurveyPageLocators.hormoneQuiz.age().click().type(ageIndex.toString());
    vsSurveyPageLocators.hormoneQuiz.nextButton().click();

    vsSurveyPageLocators.hormoneQuiz.container3().within(() => {
        vsSurveyPageLocators.hormoneQuiz
            .symptoms()
            .should('be.visible')
            .then(($elements) => {
                const randomIndex = Math.floor(
                    Math.random() * $elements.length
                );
                cy.wrap($elements[randomIndex]).click();
            });
    });
    vsSurveyPageLocators.hormoneQuiz
        .nextButton()
        .should('be.visible')
        .click({ force: true });

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // need to add this wait when there is only a next on the page
    vsSurveyPageLocators.hormoneQuiz.quizContainer().then(() => {
        vsSurveyPageLocators.hormoneQuiz
            .nextButton()
            .should('be.visible')
            .click();
    });

    vsSurveyPageLocators.hormoneQuiz.container5().within(() => {
        vsSurveyPageLocators.hormoneQuiz
            .menopause()
            .should('have.length.greaterThan', 0)
            .each(($el) => {
                cy.wrap($el).should('be.visible');
            })
            .then(($elements) => {
                const randomIndex = Math.floor(
                    Math.random() * $elements.length
                );
                cy.wrap($elements[randomIndex])
                    .scrollIntoView()
                    .should('be.visible')
                    .click({ force: true });
            });
    });
    vsSurveyPageLocators.hormoneQuiz
        .nextButton()
        .should('be.visible')
        .click({ force: true });

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // need to add this wait when there is only a next on the page
    vsSurveyPageLocators.hormoneQuiz.container6().within(() => {
        vsSurveyPageLocators.hormoneQuiz
            .bodySymptoms()
            .should('have.length.greaterThan', 0)
            .then(($elements) => {
                const randomIndex = Math.floor(
                    Math.random() * $elements.length
                );
                cy.wrap($elements[randomIndex]).click();
            });
    });
    vsSurveyPageLocators.hormoneQuiz.nextButton().should('be.visible').click();

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // need to add this wait when there is only a next on the page
    vsSurveyPageLocators.hormoneQuiz.container7().within(() => {
        vsSurveyPageLocators.hormoneQuiz
            .currentDiet()
            .should('have.length.greaterThan', 0)
            .then(($elements) => {
                const randomIndex = Math.floor(
                    Math.random() * $elements.length
                );
                cy.wrap($elements[randomIndex]).click();
            });
    });
    vsSurveyPageLocators.hormoneQuiz.nextButton().should('be.visible').click();

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // need to add this wait when there is only a next on the page
    vsSurveyPageLocators.hormoneQuiz.quizContainer().then(() => {
        vsSurveyPageLocators.hormoneQuiz
            .nextButton()
            .should('be.visible')
            .click();
    });

    vsSurveyPageLocators.hormoneQuiz.container9().within(() => {
        vsSurveyPageLocators.hormoneQuiz
            .digestive()
            .should('have.length.greaterThan', 0)
            .then(($elements) => {
                const randomIndex = Math.floor(
                    Math.random() * $elements.length
                );
                cy.wrap($elements[randomIndex]).click();
            });
    });
    vsSurveyPageLocators.hormoneQuiz.nextButton().should('be.visible').click();

    vsSurveyPageLocators.hormoneQuiz.container10().within(() => {
        vsSurveyPageLocators.hormoneQuiz
            .exercise()
            .should('have.length.greaterThan', 0)
            .then(($elements) => {
                const randomIndex = Math.floor(
                    Math.random() * $elements.length
                );
                cy.wrap($elements[randomIndex]).click();
            });
    });
    vsSurveyPageLocators.hormoneQuiz.nextButton().should('be.visible').click();

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // need to add this wait when there is only a next on the page
    vsSurveyPageLocators.hormoneQuiz
        .nextButton()
        .should('be.visible')
        .should('have.length.greaterThan', 0)
        .click();

    cy.get('@staticTestData').then((staticTestData: any) => {
        vsSurveyPageLocators.hormoneQuiz
            .heightFt()
            .should('be.visible')
            .should('have.length.greaterThan', 0)
            .click()
            .type(staticTestData.heightFt);
        vsSurveyPageLocators.hormoneQuiz
            .heightIn()
            .should('be.visible')
            .click()
            .type(staticTestData.heightIn);
        vsSurveyPageLocators.hormoneQuiz
            .nextButton()
            .should('be.visible')
            .click();

        vsSurveyPageLocators.hormoneQuiz
            .weight()
            .should('be.visible')
            .click()
            .type(staticTestData.weight);
        vsSurveyPageLocators.hormoneQuiz
            .nextButton()
            .should('be.visible')
            .click();

        vsSurveyPageLocators.hormoneQuiz
            .goalWeight()
            .should('be.visible')
            .click()
            .type(staticTestData.goalWeight);
        vsSurveyPageLocators.hormoneQuiz
            .nextButton()
            .should('be.visible')
            .click();
    });
    vsSurveyPageLocators.hormoneQuiz.excessWeight().then(($elements) => {
        const randomIndex = Math.floor(Math.random() * $elements.length);
        cy.wrap($elements[randomIndex]).click();
    });
    vsSurveyPageLocators.hormoneQuiz.nextButton().should('be.visible').click();

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000); // need to add this wait when there is only a next on the page
    vsSurveyPageLocators.hormoneQuiz.quizContainer().then(() => {
        vsSurveyPageLocators.hormoneQuiz
            .nextButton()
            .should('be.visible')
            .click();
    });
};
