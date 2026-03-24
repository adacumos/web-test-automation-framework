/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from 'Vshred/_libs/testData';
import {
    userPageLocators,
    cleanBulkBundleLocators,
    homePageLocators,
    vsuLocators,
} from '../../locator_libraries';

Then('The user verifies the existence of {string}', (button: string) => {
    switch (button) {
        case 'clean bulk bundle':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.scrollTo('bottom');
                cy.contains(staticTestData.cleanBulkBundleLabel).should(
                    'be.visible'
                );
                cy.contains(staticTestData.cleanBulkBundlePrice).should(
                    'be.visible'
                );
                cy.contains(staticTestData.cleanBulkProgramLabel).should(
                    'be.visible'
                );
                homePageLocators.sixPackShredLabel().should('be.visible');
                homePageLocators.bigArmsProgramLabel().should('be.visible');
                homePageLocators.receipeGuideLabel().should('be.visible');
            });
            break;
        case 'Ripped In 90 Days Bundle':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.scrollTo('bottom');
                cy.contains(staticTestData.rippedBundleLabel).should(
                    'be.visible'
                );
                cy.contains(staticTestData.rippedBundlePrice).should(
                    'be.visible'
                );
                cy.contains(staticTestData.rippedIn90DaysLabel).should(
                    'be.visible'
                );
                homePageLocators.sixPackShredLabel().should('be.visible');
                homePageLocators.bigArmsProgramLabel().should('be.visible');
                homePageLocators.receipeGuideLabel().should('be.visible');
            });
            break;
        case 'Ripped In 90 Days 57 Bundle':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.scrollTo('bottom');
                cy.contains(staticTestData.ripped57BundleLabel).should(
                    'be.visible'
                );
                cy.contains(staticTestData.ripped57BundleLabel).should(
                    'be.visible'
                );
                cy.contains(staticTestData.rippedIn90DaysLabel).should(
                    'be.visible'
                );
                homePageLocators.sixPackShredLabel().should('be.visible');
                homePageLocators.bigArmsProgramLabel().should('be.visible');
                homePageLocators.receipeGuideLabel().should('be.visible');
            });
            break;
        case 'Fat Loss Extreme for Him Bundle':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.scrollTo('bottom');
                cy.contains(staticTestData.fatLossBundleLabel).should(
                    'be.visible'
                );
                cy.contains(staticTestData.fatLossBundlePrice).should(
                    'be.visible'
                );
                cy.contains(staticTestData.fatLossLabel).should('be.visible');
                homePageLocators.sixPackShredLabel().should('be.visible');
                homePageLocators.bigArmsProgramLabel().should('be.visible');
                homePageLocators.receipeGuideLabel().should('be.visible');
            });
            break;
        case 'Toned In 90 Days bundle':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.scrollTo('bottom');
                cy.contains(staticTestData.tonedBundleLabel).should(
                    'be.visible'
                );
                cy.contains(staticTestData.tonedBundlePrice).should(
                    'be.visible'
                );
                cy.contains(staticTestData.tonedProgramLabel).should(
                    'be.visible'
                );
                homePageLocators.sixPackShredLabel().should('be.visible');
                homePageLocators.receipeGuideLabel().should('be.visible');
                homePageLocators
                    .bootyBuilderProgramLabel()
                    .should('be.visible');
            });
            break;
        case 'Fat Loss Extreme for Her bundle':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.scrollTo('bottom');
                cy.contains(staticTestData.fatBundleLabel).should('be.visible');
                cy.contains(staticTestData.fatBundlePrice).should('be.visible');
                cy.contains(staticTestData.fatProgramLabel).should(
                    'be.visible'
                );
                homePageLocators.sixPackShredLabel().should('be.visible');
                homePageLocators.receipeGuideLabel().should('be.visible');
                homePageLocators
                    .bootyBuilderProgramLabel()
                    .should('be.visible');
            });
            break;
        case 'custom diet plan':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.contains(staticTestData.customDietPlanLabel).should(
                    'be.visible'
                );
                cy.contains(staticTestData.customDietPlanPrice).should(
                    'be.visible'
                );
            });
            break;
        case 'custom diet Ripped':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.contains(staticTestData.customDietPlanLabel).should(
                    'be.visible'
                );
                cy.contains(staticTestData.customDietPlanRippedPrice).should(
                    'be.visible'
                );
            });
            break;
        case 'burn evolved':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.contains(staticTestData.burnEvolvedLabel).should(
                    'be.visible'
                );
                cy.contains(staticTestData.burnEvolvedPrice).should(
                    'be.visible'
                );
                cy.contains(staticTestData.burnEvolvedMonthlyLabel).should(
                    'be.visible'
                );
                cy.contains(staticTestData.burnEvolvedMonthlyPrice).should(
                    'be.visible'
                );
            });
            break;
        case 'greens':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.contains(staticTestData.greensPrice).should('be.visible');
                cy.contains(staticTestData.greensLabel).should('be.visible');
            });
            break;
        case 'burn PM':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.contains(staticTestData.burnPMMonthlyLabel).should(
                    'be.visible'
                );
                cy.contains(staticTestData.burnPMMonthlyPrice).should(
                    'be.visible'
                );
            });
            break;
        case 'sales tax':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.contains(staticTestData.salesTaxLabel).should('be.visible');
                cy.contains(staticTestData.salesTaxPrice).should('be.visible');
            });
            break;
        case 'ripped bundle order total':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.contains(staticTestData.salesTaxLabel).should('be.visible');
                cy.contains(staticTestData.salesTaxPrice).should('be.visible');
            });
            break;
        case 'ripped bundle 399 order total':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.contains(staticTestData.totalLabel).should('be.visible');
                cy.contains(staticTestData.totalPrice399).should('be.visible');
            });
            break;
        case 'clean bundle Order total':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.contains(staticTestData.totalLabel).should('be.visible');
                cy.contains(staticTestData.totalPrice193).should('be.visible');
            });
            break;
        case 'Order total':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.contains(staticTestData.totalLabel).should('be.visible');
                cy.contains(staticTestData.totalPrice).should('be.visible');
            });
            break;
        case 'Toned Order total':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.contains(staticTestData.totalLabel).should('be.visible');
                cy.contains(staticTestData.tonedTotal).should('be.visible');
            });
            break;
        case 'Fat Order total':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.contains(staticTestData.fatProgramLabel).should(
                    'be.visible'
                );
                cy.contains(staticTestData.fatProgramLabel).should(
                    'be.visible'
                );
            });
            break;
        case 'VSU':
            vsuLocators.vsuLabel().should('be.visible');
            vsuLocators.vsuPrice().should('be.visible');
            break;
        default:
            throw new Error(`Invalid ${button}`);
    }
});

Then('The user verifies the purchased programs in purchases', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cleanBulkBundleLocators.hereLabel().click();
        cy.get('.modal-close').first().click();
        cleanBulkBundleLocators.editProfile().click();
        cy.get('.modal-close').first().click();
        cleanBulkBundleLocators.purchasesOptions().click();
        cy.contains(staticTestData.customDietPlanLabel).should('be.visible');
        cy.contains(staticTestData.customDietPlanPrice).should('be.visible');
        cy.contains(staticTestData.greensPrice).should('be.visible');
        cy.contains(staticTestData.greensLabel).should('be.visible');
        cy.contains(staticTestData.cleanBulkBundleLabel).should('be.visible');
        cy.contains(staticTestData.cleanBulkBundlePrice).should('be.visible');
    });
});

Then(
    'The user verifies the {string} purchase in VShred Admin Tool',
    (button: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            userPageLocators.userOption().click();
            userPageLocators
                .emailTextbox()
                .type(`${dynamicTestData.userEmail}{enter}`);
            userPageLocators.viewButton().click();
            userPageLocators.purchasesTab().click();
            switch (button) {
                case 'toned':
                    cy.contains(staticTestData.tonedBundleLabel).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.tonedBundlePrice).should(
                        'be.visible'
                    );
                    userPageLocators
                        .customDietPlanLabelAdmin()
                        .should('be.visible');
                    cy.contains(staticTestData.customDietPlanPrice).should(
                        'be.visible'
                    );
                    userPageLocators.subscriptionsTab().click();
                    userPageLocators.vsuSubscription().should('be.visible');
                    break;
                case 'clean bulk':
                    cy.contains(staticTestData.greensPrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.greensLabel).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.cleanBulkBundleLabel).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.cleanBulkBundlePrice).should(
                        'be.visible'
                    );
                    userPageLocators
                        .customDietPlanLabelAdmin()
                        .should('be.visible');
                    cy.contains(staticTestData.customDietPlanPrice).should(
                        'be.visible'
                    );
                    userPageLocators.subscriptionsTab().click();
                    userPageLocators.vsuSubscription().should('be.visible');
                    break;
                case 'ripped':
                    cy.contains(staticTestData.greensPrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.greensLabel).should(
                        'be.visible'
                    );
                    userPageLocators
                        .customDietPlanLabelAdmin()
                        .should('be.visible');
                    cy.contains(staticTestData.customDietPlanPrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.rippedBundlePrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.rippedBundleLabel).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.burnEvolvedLabel).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.burnEvolvedPrice).should(
                        'be.visible'
                    );
                    userPageLocators.subscriptionsTab().click();
                    userPageLocators.vsuSubscription().should('be.visible');
                    userPageLocators
                        .burnEvolvedSubscription()
                        .should('be.visible');
                    userPageLocators.burnPMSubscription().should('be.visible');
                    break;
                case 'ripped 57':
                    cy.contains(staticTestData.greensPrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.greensLabel).should(
                        'be.visible'
                    );
                    userPageLocators
                        .customDietPlanLabelAdmin()
                        .should('be.visible');
                    cy.contains(staticTestData.customDietPlanPrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.ripped57BundlePrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.ripped57BundleLabel).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.burnEvolvedLabel).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.burnEvolvedPrice).should(
                        'be.visible'
                    );
                    userPageLocators.subscriptionsTab().click();
                    userPageLocators.vsuSubscription().should('be.visible');
                    userPageLocators
                        .burnEvolvedSubscription()
                        .should('be.visible');
                    userPageLocators.burnPMSubscription().should('be.visible');
                    break;
                case 'fat him':
                    cy.contains(staticTestData.greensPrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.greensLabel).should(
                        'be.visible'
                    );
                    userPageLocators
                        .customDietPlanLabelAdmin()
                        .should('be.visible');
                    cy.contains(staticTestData.customDietPlanPrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.burnEvolvedLabel).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.burnEvolvedPrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.burnPMLabel).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.burnPMPrice).should(
                        'be.visible'
                    );
                    cy.get('td.th-name')
                        .contains(staticTestData.fatLossLabel)
                        .should('be.visible');
                    cy.contains(staticTestData.fatLossBundlePrice).should(
                        'be.visible'
                    );
                    userPageLocators.subscriptionsTab().click();
                    userPageLocators.vsuSubscription().should('be.visible');
                    userPageLocators
                        .burnEvolvedSubscription()
                        .should('be.visible');
                    userPageLocators.burnPMSubscription().should('be.visible');
                    break;
                case 'fat her':
                    cy.contains(staticTestData.fatBundleLabel).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.fatBundlePrice).should(
                        'be.visible'
                    );
                    cy.contains(staticTestData.burnEvolvedSmLabel).should(
                        'be.visible'
                    );
                    cy.get('.th-amount')
                        .contains(staticTestData.burnEvolvedPrice)
                        .should('be.visible');
                    cy.contains(staticTestData.burnPMLabel).should(
                        'be.visible'
                    );
                    cy.get('.th-amount')
                        .contains(staticTestData.burnPMPrice)
                        .should('be.visible');
                    cy.get('.th-amount')
                        .contains(staticTestData.greensPrice)
                        .should('be.visible');
                    cy.contains(staticTestData.greensLabel).should(
                        'be.visible'
                    );
                    userPageLocators
                        .customDietPlanLabelAdmin()
                        .should('be.visible');
                    cy.get('.th-amount')
                        .contains(staticTestData.customDietPlanPrice)
                        .should('be.visible');
                    userPageLocators.subscriptionsTab().click();
                    userPageLocators.vsuSubscription().should('be.visible');
                    break;
                default:
                    throw new Error(`Invalid ${button}`);
            }
        });
    }
);
