import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { videoControlsLocators } from '../../locator_libraries';

Then('The user verifies the video loaded on the page', () => {
    videoControlsLocators.notStartedVideo().should('be.visible');
});

Then('The user starts the video', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1500);
    videoControlsLocators.startStopControler().click({ force: true });
    videoControlsLocators.playingVideo().should('be.visible');
});

Then('The user pauses the video', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1500);
    videoControlsLocators.startStopControler().click({ force: true });
    videoControlsLocators.pausedVideo().should('be.visible');
});

Then('The user Resizes the browser to mobile view', () => {
    videoControlsLocators.resizeBrowserMobile();
});

Then('The user Resizes the browser to desktop view', () => {
    videoControlsLocators.resizeBrowserDesktop();
});

Then('The user Resizes the browser to {string}', (mobileView: string) => {
    switch (mobileView) {
        case 'iPhone12 pro max':
            videoControlsLocators.resizeBrowseriPhone12ProMax();
            break;
        case 'iPhone5':
            videoControlsLocators.resizeBrowseriPhone5();
            break;
        case 'iPhone4':
            videoControlsLocators.resizeBrowseriPhone4();
            break;
        case 'iPhone XR':
            videoControlsLocators.resizeBrowseriPhoneXR();
            break;
        case 'iPhone 15':
            videoControlsLocators.resizeBrowseriPhone15();
            break;
        case 'Samsung Galaxy S10 Lite':
            videoControlsLocators.resizeBrowserSamsungGalaxyS10Lite();
            break;
        case 'Samsung Galaxy S6':
            videoControlsLocators.resizeBrowserSamsungGalaxyS6();
            break;
        case 'Samsung S10':
            videoControlsLocators.resizeBrowserSamsungS10();
            break;
        case 'Samsung S24':
            videoControlsLocators.resizeBrowserSamsungS24Ultra();
            break;
        case 'Tablet':
            videoControlsLocators.resizeBrowserTablet();
            break;
        case 'iPad 10':
            videoControlsLocators.resizeBrowseriPad10();
            break;
        default:
            throw new Error(`Invalid ${mobileView}`);
    }
});
