/// <reference types="cypress" />
import { Then } from '@badeball/cypress-cucumber-preprocessor';


Then('The user starts tracking for Tiktok', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep(`Start Tracking`);
        const vsIntPixelId = staticTestData.vshredPixelDetail.internal;
        const vsKenPixelId = staticTestData.vshredPixelDetail.kendago;
        const snIntPixelId = staticTestData.sculptNationPixelDetail.internal;
        const snKenPixelId = staticTestData.sculptNationPixelDetail.kendago;
        // === intercept pixel ids ===
        cy.intercept(`**s?sdkid=${vsIntPixelId}**`).as('vsIntRequest');
        cy.intercept(`**s?sdkid=${snIntPixelId}**`).as('snIntRequest');
        cy.intercept(`**s?sdkid=${vsKenPixelId}**`).as('vsKenRequest');
        cy.intercept(`**s?sdkid=${snKenPixelId}**`).as('snKenRequest');
    });
});