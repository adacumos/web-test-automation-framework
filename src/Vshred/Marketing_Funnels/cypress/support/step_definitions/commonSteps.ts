/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from 'Vshred/_libs/testData';
import {
    homePageLocators,
    surveyQuizLocators,
    orderPageLocators,
    funnelPageLocators,
} from '../locator_libraries';

Then('The user verifies the URL after male selection', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.surveyURL);
    });
});

When('The user clicks on {string} option of the VS quiz', (button: string) => {
    switch (button) {
        case 'male':
            surveyQuizLocators.maleButton().click();
            break;
        case 'female':
            surveyQuizLocators.femaleButton().click();
            break;
        case 'age 18 to 20':
            surveyQuizLocators.age18to20Option().click();
            break;
        case 'age 20':
            surveyQuizLocators.age20ption().click();
            break;
        case 'age 30':
            surveyQuizLocators.age30ption().click();
            break;
        case 'age 40':
            surveyQuizLocators.age40Option().click();
            break;
        case 'age 50':
            surveyQuizLocators.age50Option().click();
            break;
        case 'age 60':
            surveyQuizLocators.age60Option().click();
            break;
        case 'lightly active Male':
            surveyQuizLocators.lightlyActiveOptionMale().click();
            break;
        case 'moderately active Male':
            surveyQuizLocators.moderatelyActiveOptionMale().click();
            break;
        case 'very active Male':
            surveyQuizLocators.veryActiveOptionMale().click();
            break;
        case 'lightly active Female':
            surveyQuizLocators.lightlyActiveOptionFemale().click();
            break;
        case 'moderately active Female':
            surveyQuizLocators.moderatelyActiveOptionFemale().click();
            break;
        case 'very active Female':
            surveyQuizLocators.veryActiveOptionFemale().click();
            break;
        case 'cant get bigger':
            surveyQuizLocators.cantBiggerOption().click();
            cy.skipVideo();
            break;
        case 'skinny':
            surveyQuizLocators.skinnyOption().click();
            cy.skipVideo();
            break;
        case 'happy':
            surveyQuizLocators.happyOption().click();
            cy.skipVideo();
            break;
        case 'not happy':
            surveyQuizLocators.unHappyOption().click();
            cy.skipVideo();
            break;
        case 'soft':
            surveyQuizLocators.imSoftOption().click();
            cy.skipVideo();
            break;
        case 'fat':
            surveyQuizLocators.fatOption().click();
            cy.skipVideo();
            break;
        case 'thin':
            surveyQuizLocators.thinOption().click();
            cy.skipVideo();
            break;
        default:
            throw new Error(`Invalid ${button}`);
    }
});

Then('The user verifies the URL after age 40 selection', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.surveyURL);
    });
});

Then('The user moves the height slider', () => {
    surveyQuizLocators.heightSlider().dblclick();
});

Then('The user clicks on height continue button', () => {
    surveyQuizLocators.continueButton().click();
});

Then('The user moves the weight slider', () => {
    surveyQuizLocators.weightSlider().dblclick();
});

Then('The user clicks on weight continue button', () => {
    surveyQuizLocators.continueButton().click();
});

Then(/^The user clicks the Everything for just \$87 button$/, () => {
    homePageLocators.everythingUpsellLink().click();
});

Then('The user verifies the URL after submitting order', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.vsuSplOfferUrl);
    });
    cy.skipVideo();
});

Then('The user verifies the {string} URL', (button: string) => {
    switch (button) {
        case 'burn':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnUrl);
            });
            cy.skipVideo();
            break;
        case 'burn upgrade':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnUrl);
            });
            break;
        case 'burnPM':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnPMUrl);
            });
            cy.log('hello');
            cy.skipVideo();
            break;
        case 'VSU':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.vsuSplOfferUrl);
            });
            cy.skipVideo();
            break;
        case 'special offer':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.splOfferUrl);
            });
            break;
        case 'greens':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.greensOfferUrl);
            });
            break;
        case 'successful order':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.purchaseURL);
            });
            break;
        default:
            throw new Error(`Invalid ${button}`);
    }
});

Then('The user clicks on {string} button', (button: string) => {
    switch (button) {
        case 'add to order':
            orderPageLocators.addtoOrder().click();
            break;
        case 'upgrade':
            funnelPageLocators.UpgradeYes().click();
            break;
        case 'VSU upgrade':
            funnelPageLocators.agreeCheckBox().click();
            funnelPageLocators.VSUUpgradeYes().click();
            break;
        case 'subscribe now':
            orderPageLocators.subscribeNow().click();
            break;
        case 'add to cart':
            orderPageLocators.addtoCart().click();
            break;
        case 'cdp upgrade':
            funnelPageLocators.cdpUpgradeYes().click();
            break;
        case 'greens upgrade':
            funnelPageLocators.greenUpgradeYes().click();
            break;
        default:
            throw new Error(`Invalid ${button}`);
    }
});

Then('The user declines the upsell', () => {
    surveyQuizLocators.declineUpsell().click();
});

Then('The user verifies the URL after declining upsell', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.customPlanMaleUrl);
    });
    cy.skipVideo();
});

Then('The user verifies the URL after clicking on upgrade button', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.splOfferUrl);
    });
});

Then('The user declines the burn upsell', () => {
    surveyQuizLocators.declineBurnUpsell().click();
});

Then('The user accepts the VSU upsell', () => {
    surveyQuizLocators.declineBurnUpsell().click();
});

Then('The user clicks on addtocart button', () => {
    surveyQuizLocators.vsuUpsell().click();
});

Then('The user verifies the URL after submitting supplement order', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.purchaseURL);
    });
});

Given('The user visits the base VShred URL', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.visit(staticTestData.baseURL);
    });
});

Then(
    'The user Fills out the Order Form with upsell and submits the order',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            dynamicTestData.userEmail =
                Cypress.env('EMAIL_BASE') +
                Cypress._.random(0, 1e9) +
                Cypress.env('EMAIL_DOMAIN');
            cy.fillInVsOrderFormWithUpsell(
                staticTestData.name,
                dynamicTestData.userEmail,
                staticTestData.phoneNumber,
                Cypress.env('CREDIT_CARD_NUMBER'),
                Cypress.env(
                    'CREDIT_CARD_EXPIRATION_MONTH' +
                        'CREDIT_CARD_EXPIRATION_YEAR'
                ),
                Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'),
                staticTestData.postalCode
            );
        });
    }
);
