import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from 'Vshred/_libs/testData';
import { dashboardLocators } from 'LaravelEcommerce/_libs/commands';
import surveyLocators from '../locator_libraries/surveyLocators';

When('The user clicks on the {string} option', (button: string) => {
    switch (button) {
        case 'Man':
            surveyLocators.manButton().click();
            break;
        case 'Male':
            surveyLocators.maleOption().click();
            break;
        case 'Female':
            surveyLocators.femaleOption().click();
            break;
        case 'Woman':
            surveyLocators.womanButton().click();
            break;
        case 'age 18 to 20':
            surveyLocators.age1820Option().click();
            break;
        case 'age 20':
            surveyLocators.age20Option().click();
            break;
        case 'age 30':
            surveyLocators.age30Option().click();
            break;
        case 'age 40':
            surveyLocators.age40Option().click();
            break;
        case 'age 40 woman':
            surveyLocators.age40WomanOption().click();
                break;         
        case 'age 50':
            surveyLocators.age50Option().click();
            break;
        case 'age 60':
            surveyLocators.age60Option().click();
            break;
        case 'lightly active':
            surveyLocators.lightlyActiveOption().click();
            break;
        case 'lightly active woman':
            surveyLocators.lightlyActiveWomanOption().click();
            break;       
        case 'moderately active':
            surveyLocators.moderatelyActiveOption().click();
            break;
        case 'very active':
            surveyLocators.veryActiveOption().click();
            break;
        case 'cant get bigger':
            surveyLocators.cantBiggerOption().click();
            cy.skipVideo();
            break;
        case 'skinny':
            surveyLocators.skinnyOption().click();
            cy.skipVideo();
            break;
        case 'skinny woman':
                surveyLocators.skinnyWomanOption().click();
                cy.skipVideo();
                break;         
        case 'happy':
            surveyLocators.happyOption().click();
            cy.skipVideo();
            break;
        case 'not happy':
            surveyLocators.unHappyOption().click();
            cy.skipVideo();
            break;
        default:
            throw new Error(`Invalid ${button}`);
    }
});

Then('The user verifies the {string} after gender selection', (url: string) => {
    switch (url) {
        case 'surveygaURL':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.surveyURL);
            });
            break;
        case 'surveyURL':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.surveyURL);
            });
            break;
        default:
            throw new Error(`Invalid ${url}`);
    }
});

Then('The user verifies the {string} after age 40 selection', (url: string) => {
    switch (url) {
        case 'surveygaURL':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.surveyURL);
            });
            break;
        case 'surveyURL':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.surveyURL);
            });
            break;
        default:
            throw new Error(`Invalid ${url}`);
    }
});

Then('The user moves the {string} height slider', (button: string) => {
    switch (button) {
        case 'surveygaURL':
            surveyLocators.heightSlider().invoke('val', 50);
            break;
        case 'surveyURL':
            surveyLocators.surveyHeightSlider().dblclick({ force: true });
            break;
        default:
            throw new Error(`Invalid ${button}`);
    }
});

Then('The user clicks on height continue button', () => {
    surveyLocators.heightContinueButton().click();
});

Then('The user moves the {string} weight slider', (button: string) => {
    switch (button) {
        case 'surveygaURL':
            surveyLocators.weightSlider().invoke('val', 50);
            break;
        case 'surveyURL':
            surveyLocators.surveyWeightSlider().dblclick({ force: true });
            break;
        default:
            throw new Error(`Invalid ${button}`);
    }
});

Then('The user clicks on weight continue button', () => {
    surveyLocators.weightContinueButton().click();
});

Then(/^The user clicks the Everything for just \$57 button$/, () => {
    cy.skipVideo();
    surveyLocators.everythingUpsellLink().click();
});

Then('The user clicks on the {string} label', (label: string) => {
    switch (label) {
        case 'No Thanks Burn':
            surveyLocators.noThanksBurn().click();
            break;
        case 'No Thanks Greens':
            surveyLocators.noThanksGreens().click();
            break;
        case 'No Thanks VSU':
            surveyLocators.noThanksVSU().click();
            break;
        default:
            throw new Error(`Invalid ${label}`);
    }
});

Then(
    /^The user fills out the Order Form with (upsell|cdpupsell) and submits the order$/,
    (upsellType: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            dynamicTestData.userEmail =
                Cypress.env('EMAIL_BASE') +
                Cypress._.random(0, 1e9) +
                Cypress.env('EMAIL_DOMAIN');
            cy.fillInSurveyFormWithUpsell(
                staticTestData.name,
                dynamicTestData.userEmail,
                staticTestData.phoneNumber,
                Cypress.env('CREDIT_CARD_NUMBER'),
                Cypress.env('CREDIT_CARD_EXPIRATION_MONTH'),
                Cypress.env('CREDIT_CARD_EXPIRATION_YEAR'),
                Cypress.env('CREDIT_CARD_CVV'),
                staticTestData.postalCode,
                upsellType
            );
        });
    }
);

Then('The user verifies the {string} URL', (button: string) => {
    switch (button) {
        case 'burn':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnUrl);
            });
            cy.skipVideo();
            break;
        case 'burn woman':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnWomanUrl);
            });
            cy.skipVideo();
            break;
        case 'burn v3':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnv3Url);
            });
            cy.skipVideo();
            break;
        case 'burn v5':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnv5Url);
            });
            break;
        case 'burn-us':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnUSUrl);
            });
            cy.skipVideo();
            break;

        case 'burnPM':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnPMUrl);
            });
            cy.skipVideo();
            break;
        case 'burnPM woman':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.burnPMWomanUrl);
            });
            cy.skipVideo();
            break;

        case 'VSU':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.vsuSplOfferUrl);
            });
            cy.skipVideo();
            break;
        case 'VSU woman':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.vsuSplOfferWomanUrl);
            });
            cy.skipVideo();
            break;


        case 'custom plan':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.customPlanMaleUrl);
            });
            cy.skipVideo();
            break;
        case 'special offer':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.splOfferUrl);
            });
            break;

        case 'successful order':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.purchaseURL);
            });
            break;

        case 'CDP':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.surveyLandingPage.surveyUrl);
            });
            break;
        case 'CDP Packages':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.CDPPackagesURL);
            });
            break;
        case 'greens':
            cy.get('@staticTestData').then((staticTestData: any) => {
                cy.url().should('include', staticTestData.greensUrl);
            });
            break;

        default:
            throw new Error(`Invalid ${button}`);
    }
});

Then(
    'The user clicks on {string} button {string}',
    (button: string, bottle: string) => {
        switch (button) {
            case 'add to order':
                if (bottle === 'sixbottles')
                    surveyLocators.addtoOrdersSixBottles().click();
                else surveyLocators.addtoOrdersThreeBottles().click();
                break;
            default:
                throw new Error(`Invalid ${button}`);
        }
    }
);

Then('The user clicks on {string} button', (button: string) => {
    switch (button) {
        case 'burn evolved upgrade':
            surveyLocators.burnEvolvedUpgradeButton().click();
            break;
        case 'VSU upgrade':
            surveyLocators.agreeCheckBox().click();
            surveyLocators.VSUUpgradeYes().click();
            break;
        case 'no thanks':
            surveyLocators.noThanks().click();
            break;
        case 'add to cart':
            surveyLocators.addtoCart().click();
            break;
        default:
            throw new Error(`Invalid ${button}`);
    }
});

Then('The user logs in with valid credentials', () => {
    surveyLocators.usernameTextbox().type(Cypress.env('ADMIN_USER'));
    surveyLocators.passwordTextbox().type(Cypress.env('ADMIN_PASSWORD'));
    surveyLocators.loginButton().click();
});

Then('The user logs in with valid credentials', () => {
    surveyLocators.usernameTextbox().type(Cypress.env('ADMIN_USER'));
    surveyLocators.passwordTextbox().type(Cypress.env('ADMIN_PASSWORD'));
    surveyLocators.loginButton().click();
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

Then('The user verifies the {string} upsell order', (upsell: string) => {
    switch (upsell) {
        case 'Ripped 90':
            dashboardLocators
                .searchInput()
                .type(`${dynamicTestData.userEmail}{enter}`);

            surveyLocators.greensItem().should('be.visible');
            surveyLocators.vsuItem().should('be.visible');
            surveyLocators.burnPMItem().should('be.visible');
            surveyLocators.burnEvolvedUpgradeItem().should('be.visible');
            surveyLocators.burnEvolvedItem().should('be.visible');
            surveyLocators.ripped90Item().should('be.visible');
            surveyLocators.cdpItem().should('be.visible');
            break;
        case 'Ripped 90 All Upsell':
            dashboardLocators
                .searchInput()
                .type(`${dynamicTestData.userEmail}{enter}`);
            /* eslint-disable cypress/no-unnecessary-waiting */
            cy.wait(2000); // Locading the order details is taking time

            surveyLocators.greensItem().should('be.visible');
            surveyLocators.vsuItem().should('be.visible');
            surveyLocators.burnPMItem().should('be.visible');
            surveyLocators.burnEvolvedUpgradeItem().should('be.visible');
            surveyLocators.burnEvolvedItem().should('be.visible');
            surveyLocators.ripped90Item().should('be.visible');
            surveyLocators.cdpItem().should('be.visible');
            break;
        case 'Toned 90 All Upsell':
            dashboardLocators
                    .searchInput()
                    .type(`${dynamicTestData.userEmail}{enter}`);
                /* eslint-disable cypress/no-unnecessary-waiting */
            cy.wait(2000); // Locading the order details is taking time
    
            surveyLocators.greensItem().should('be.visible');
            surveyLocators.vsuItem().should('be.visible');
            surveyLocators.burnPMItem().should('be.visible'); 
            surveyLocators.burnEvolvedItem().should('be.visible');
            surveyLocators.tonedIn90Days().should('be.visible');
            surveyLocators.cdpItem().should('be.visible');
            break;
        case 'Ripped 90 Selected Upsell':
            dashboardLocators
                .searchInput()
                .type(`${dynamicTestData.userEmail}{enter}`);

            surveyLocators.vsuItem().should('be.visible');
            surveyLocators.ripped90Item().should('be.visible');
            surveyLocators.cdpItem().should('be.visible');
            break;
        case 'Toned 90 Selected Upsell':
            dashboardLocators
                    .searchInput()
                    .type(`${dynamicTestData.userEmail}{enter}`);
    
            surveyLocators.vsuItem().should('be.visible');
            surveyLocators.tonedIn90Days().should('be.visible');
                surveyLocators.cdpItem().should('be.visible');
            break;
            
        case 'Ripped 90 No Upsell':
            dashboardLocators
                .searchInput()
                .type(`${dynamicTestData.userEmail}{enter}`);

            /* eslint-disable cypress/no-unnecessary-waiting */
            cy.wait(2000); // Locading the order details is taking time

            surveyLocators.ripped90Item().should('be.visible');
            surveyLocators.cdpItem().should('be.visible');
            break;
            case 'Tonned 90 No Upsell':
                dashboardLocators
                    .searchInput()
                    .type(`${dynamicTestData.userEmail}{enter}`);
    
                /* eslint-disable cypress/no-unnecessary-waiting */
                cy.wait(2000); // Locading the order details is taking time
    
                surveyLocators.tonedIn90Days().should('be.visible');
                surveyLocators.cdpItem().should('be.visible');
                break;
        case 'cdp vsu trail':
            dashboardLocators
                .searchInput()
                .type(`${dynamicTestData.userEmail}{enter}`);
    
            /* eslint-disable cypress/no-unnecessary-waiting */
            cy.wait(2000); // Locading the order details is taking time
    
            surveyLocators.greensHghBoostItem().should('be.visible');
            surveyLocators.vsuFreeTrailItem().should('be.visible');
            surveyLocators.burnAcceleratorItem().should('be.visible');
            surveyLocators.burnStackItem().should('be.visible');
            surveyLocators.SilverCdpItem().should('be.visible');
            break;   
        case 'cdp vsu trail training plan':
            dashboardLocators
                .searchInput()
                .type(`${dynamicTestData.userEmail}{enter}`);
        
            /* eslint-disable cypress/no-unnecessary-waiting */
            cy.wait(2000); // Locading the order details is taking time
        
            surveyLocators.greensHghBoostItem().should('be.visible');
            surveyLocators.vsuFreeTrailItem().should('be.visible');
            surveyLocators.burnAcceleratorItem().should('be.visible');
            surveyLocators.burnStackItem().should('be.visible');
            surveyLocators.SilverDietAndTrainingItem().should('be.visible');
            break; 
        case 'cdp vsu membership training plan':
                dashboardLocators
                    .searchInput()
                    .type(`${dynamicTestData.userEmail}{enter}`);
            
                /* eslint-disable cypress/no-unnecessary-waiting */
                cy.wait(2000); // Locading the order details is taking time
            
                surveyLocators.greensHghBoostItem().should('be.visible');
                surveyLocators.vsuMembershipItem().should('be.visible');
                surveyLocators.burnAcceleratorItem().should('be.visible');
                surveyLocators.burnStackItem().should('be.visible');
                surveyLocators.SilverDietAndTrainingItem().should('be.visible');
                break; 
                   
        case 'cdp vsu membership':
            dashboardLocators
                .searchInput()
                .type(`${dynamicTestData.userEmail}{enter}`);
        
            /* eslint-disable cypress/no-unnecessary-waiting */
            cy.wait(2000); // Locading the order details is taking time
        
            surveyLocators.greensHghBoostItem().should('be.visible');
            surveyLocators.vsuMembershipItem().should('be.visible');
            surveyLocators.burnAcceleratorItem().should('be.visible');
            surveyLocators.burnStackItem().should('be.visible');
            surveyLocators.SilverCdpItem().should('be.visible');
            break;          
        default:
            throw new Error(`Invalid ${upsell}`);
    }
});

When(
    'The user clicks on the {string} menu from the Admin Tool Dashboard',
    (menu: string) => {
        dashboardLocators.navigateMenu(menu).click();
    }
);
