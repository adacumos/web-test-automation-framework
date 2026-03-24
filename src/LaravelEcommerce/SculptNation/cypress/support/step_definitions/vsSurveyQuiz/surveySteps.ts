import { Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    consumerLandingPageLocators,
    vsSurveyPageLocators,
} from '../../locator_libraries';

Then('The user clicks on the {string} label', (label: string) => {
    switch (label) {
        case 'No Thanks Burn':
            vsSurveyPageLocators.noThanksBurn().click();
            break;
        case 'No Thanks Greens':
            vsSurveyPageLocators.noThanksGreens().click();
            break;
        case 'No Thanks VSU':
            vsSurveyPageLocators.noThanksVSU().click();
            break;
        case 'No Thanks CDP':
            vsSurveyPageLocators.noThanksGreens().click();
            break;
        case 'No Thanks Recipe':
            vsSurveyPageLocators.noThanksRecipe().click();
            break;
        default:
            throw new Error(`Invalid ${label}`);
    }
});

Then(
    'The user clicks on {string} button {string}',
    (button: string, bottle: string) => {
        switch (button) {
            case 'add to order':
                if (bottle === 'sixbottles')
                    vsSurveyPageLocators.addtoOrdersSixBottles().click();
                else if (bottle === 'three bottles')
                    vsSurveyPageLocators.addtoOrdersThreeBottles().click();
                break;
            default:
                throw new Error(`Invalid ${button}`);
        }
    }
);

Then('The user clicks on {string} button', (button: string) => {
    switch (button) {
        case 'burn evolved upgrade':
            vsSurveyPageLocators.burnEvolvedUpgradeButton().click();
            break;
        case 'VSU upgrade':
            vsSurveyPageLocators.agreeCheckBox().click();
            vsSurveyPageLocators.VSUUpgradeYes().click();
            break;
        case 'VSU upgrade CA':
            vsSurveyPageLocators.VSUUpgradeYesCA().click();
            break;
        case 'cdp upgrade':
            vsSurveyPageLocators.cdpUpgradeButton().click();
            break;
        case 'add to cart':
            vsSurveyPageLocators.addtoCart().click();
            break;
        case 'yes CDP add to order':
            vsSurveyPageLocators.addtoCartCDP().click();
            break;
        case 'yes add to my order':
            vsSurveyPageLocators.yesaddtomyOrder().click();
            break;
        default:
            throw new Error(`Invalid ${button}`);
    }
});

Then('The user fills out the supplement order shipping form', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1500); // Having to wait for the modal to load before trying to type into it.

    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.fillInSupplementOrderFormSurvey(
            staticTestData.shippingFirstName,
            staticTestData.shippingLastName,
            staticTestData.shippingStreet,
            staticTestData.shippingCity,
            staticTestData.shippingState,
            staticTestData.shippingPostalCode
        );
    });
});

Then('The user starts VShred Hormone Quiz', () => {
    cy.hormoneQuiz();
});

Then('The user accepts the hormone quiz offer', () => {
    cy.skipVideo();
    consumerLandingPageLocators.productPage.addToOrderButton().click();
});
