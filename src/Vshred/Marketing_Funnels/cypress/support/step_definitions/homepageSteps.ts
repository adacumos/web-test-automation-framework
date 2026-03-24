/// <reference types="cypress" />

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from 'Vshred/_libs/testData';
import {
    homePageLocators,
    userProfilePageLocators,
} from '../locator_libraries';

When('The user clicks on the {string} header link', (link: string) => {
    homePageLocators.headers.linkName(link).click();
});

Then(
    'The user selects a Program from the list and proceeds to the Order Form',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            homePageLocators.programs
                .programNameLink(staticTestData.programName)
                .click();
        });

        homePageLocators.programs.iWantFatLossExtremeForHimButton().click();
    }
);

Then('The user verifies the video on the homepage', () => {
    homePageLocators.threeHormonesLink().should('be.visible');
});

When('The user clicks on the video on the homepage', () => {
    homePageLocators.threeHormonesLink().click();
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.homepageVideoUrl);
    });
});

Then(/^The user clicks the Everything for just \$57 button$/, () => {
    cy.skipVideo();
    homePageLocators.everythingUpsellLink().click();
});

Then('The user verifies the {string} program URL', (url: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (url) {
            case 'Fat Loss Extreme':
                cy.url().should('include', staticTestData.fatLossExtremeUrl);
                break;
            default:
                throw new Error('Invalid URL specified');
        }
    });
});

When('The user fills out the Order Form and submits the order', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.generateRandomTestEmail().then((randomEmail) => {
            dynamicTestData.userEmail = randomEmail;

            cy.fillInVsOrderForm(
                staticTestData.name,
                randomEmail,
                staticTestData.phoneNumber,
                staticTestData.cardNumber,
                staticTestData.expirationDate,
                staticTestData.cvv,
                staticTestData.postalCode
            );
        });
    });
});

Then('The user lands on the Burn Evolved page and skips the video', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.burnEvolvedUrl);
    });
    cy.skipVideo();
});

When(
    'The user clicks on the Burn Evolved One bottle per month subscription',
    () => {
        homePageLocators.oneBottleSubscription().click();
    }
);

Then('The user fills out the supplement order shipping form', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1500); // Having to wait for the modal to load before trying to type into it.
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.fillInSupplementOrderForm(
            staticTestData.shippingName,
            staticTestData.shippingStreet,
            staticTestData.shippingCity,
            staticTestData.shippingState,
            staticTestData.shippingPostalCode,
            staticTestData.shippingCountry,
            staticTestData.shippingPhone
        );
    });
});

Then('The user lands on the BurnPM page and skips the video', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.burnPmUrl);
    });
    cy.skipVideo();
});

When('The user clicks the BurnPM One bottle per month subscription', () => {
    homePageLocators.oneBottleSubscription().click();
});

Then('The user lands on the Custom diet plan page and skips the video', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.customDietPlanUrl);
    });
    cy.skipVideo();
});

When(
    'The user clicks the I agree to the payment terms of this recurring product button',
    () => {
        homePageLocators
            .agreeToPaymentTermsOfRecurringProductCheckbox()
            .click();
    }
);

When('The user clicks the Custom Diet plan upsell button', () => {
    homePageLocators.cdpUpsell().click();
});

Then('The user lands on the VSU page and skips the video', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.vsuUrl);
    });
    cy.skipVideo();
});

When('The user clicks the Verify VSU upsell button', () => {
    homePageLocators.vsuUpsell().click();
});

Then('The user lands on the Greens page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('include', staticTestData.greensUrl);
    });
});

When('The user clicks the Greens upsell button', () => {
    homePageLocators.greensUpsell().click();
});

Then('The user lands on the Verify Order page', () => {
    cy.url().should('include', '/member/purchases/');
    homePageLocators.orderPageConfirmation().click();
});

When(
    'The user clicks on the review purchase button from the Verify Order page',
    () => {
        homePageLocators.hereButton().click();

        userProfilePageLocators.completeProfileModalCloseButton().click();
    }
);
