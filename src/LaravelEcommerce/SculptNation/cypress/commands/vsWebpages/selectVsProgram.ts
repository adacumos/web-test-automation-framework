import { consumerSurveyPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            selectVsProgram: (programTitle: string) => void;
        }
    }
}

/**
 * Command used select V Shred Weight loss program
 * @param programTitle Program Title
 * @example
 * cy.selectVsProgram('programTitle')
 *
 */
export const selectVsProgram = (programTitle: string): void => {
    switch (programTitle.toLowerCase()) {
        case 'fat loss for him':
            consumerSurveyPageLocators.vshredLandingPage.programs
                .fatLossforHim()
                .click({ force: true });
            cy.url().should('contain', 'https://le'); // url should be redirected to le.vshred domain
            cy.url().should('contain', 'fat-loss-extreme?');
            break;
        case 'ripped in 90':
            consumerSurveyPageLocators.vshredLandingPage.programs
                .ripped90D()
                .click({ force: true });
            cy.url().should('contain', 'https://le'); // url should be redirected to le.vshred domain
            cy.url().should('contain', 'ripped-in-90-days?');
            break;
        case 'fat loss for her':
            consumerSurveyPageLocators.vshredLandingPage.programs
                .fatLossforHer()
                .click({ force: true });
            cy.url().should('contain', 'https://le'); // url should be redirected to le.vshred domain
            cy.url().should('contain', 'fat-loss-extreme-f?');
            break;
        case 'move: at home':
            consumerSurveyPageLocators.vshredLandingPage.programs
                .move()
                .click({ force: true });
            cy.url().should('contain', 'https://le'); // url should be redirected to le.vshred domain
            cy.url().should('contain', 'move?');
            break;
        case 'toned in 90':
            consumerSurveyPageLocators.vshredLandingPage.programs
                .toned90D()
                .click({ force: true });
            cy.url().should('contain', 'https://le'); // url should be redirected to le.vshred domain
            cy.url().should('contain', 'toned-in-90-days/v1?');
            break;
        case 'v shred accelerator':
            consumerSurveyPageLocators.vshredLandingPage.programs
                .vsAccelerator()
                .click({ force: true });
            break;
        case 'custom diet plan':
            consumerSurveyPageLocators.vshredLandingPage.programs
                .customDietPlan()
                .click({ force: true });
            break;
        case 'clean bulk':
            consumerSurveyPageLocators.vshredLandingPage.programs
                .cleanBulk()
                .click({ force: true });
            break;
        case 'six pack shred':
            consumerSurveyPageLocators.vshredLandingPage.programs
                .sixPackShred()
                .last()
                .click({ force: true });
            break;
        case 'big arms':
            consumerSurveyPageLocators.vshredLandingPage.programs
                .bigArms()
                .click({ force: true });
            break;
        case 'booty builder':
            consumerSurveyPageLocators.vshredLandingPage.programs
                .bootyBuilder()
                .click({ force: true });
            break;
        case 'recipe guide':
            consumerSurveyPageLocators.vshredLandingPage.programs
                .recipeGuide()
                .click({ force: true });
            break;
        default:
            throw new Error('Invalid Program Selected');
    }
    cy.url().then((productUrl) => {
        // Redirect the a production url to a testing server per defined LE_VSHRED_URL
        if (productUrl.includes('https://le.vshred.com')) {
            const leVshredUrl = Cypress.env('LE_VSHRED_URL');
            const redirectTestUrl = productUrl.replace(
                'https://le.vshred.com',
                `${leVshredUrl}`
            );
            cy.visit(redirectTestUrl);
        }
    });
    cy.skipVideo();
    consumerSurveyPageLocators.vshredLandingPage.vsProgramsPage
        .addToOrderButton()
        .click();
};
