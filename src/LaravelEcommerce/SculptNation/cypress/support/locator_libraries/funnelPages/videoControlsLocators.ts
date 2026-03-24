const videoControlsLocators = {
    notStartedVideo: () => cy.get('.jw-state-idle'),
    startStopControler: () => cy.get('.jw-video'),
    pausedVideo: () => cy.get('.jw-state-paused'),
    playingVideo: () => cy.get('.jw-state-playing'),
    resizeBrowserMobile: () => cy.viewport('iphone-8'),
    resizeBrowserDesktop: () => cy.viewport(1920, 1080),
    resizeBrowseriPhone12ProMax: () => cy.viewport(428, 926),
    resizeBrowseriPhone5: () => cy.viewport('iphone-5'),
    resizeBrowseriPhone4: () => cy.viewport('iphone-4'),
    resizeBrowseriPhoneXR: () => cy.viewport('iphone-xr'),
    resizeBrowseriPhone15: () => cy.viewport(430, 932),
    resizeBrowserSamsungS10: () => cy.viewport('samsung-s10'),
    resizeBrowserTablet: () => cy.viewport(800, 1280),
    resizeBrowseriPad10: () => cy.viewport(810, 1080),
    resizeBrowserSamsungGalaxyS10Lite: () => cy.viewport(360, 800),
    resizeBrowserSamsungGalaxyS6: () => cy.viewport(360, 640),
    resizeBrowserSamsungS24Ultra: () => cy.viewport(360, 800),
    watchVideoButton: () => cy.get('button.watch-video'),
    vidalyticsPlayVideo: () =>
        cy.get('.AutoPlayBox__icon, .ResumePlay__button'),
    vidalyticsPauseVideo: () =>
        cy.get('button[data-vid-testid*="big-pause-button"]'),
};

export default videoControlsLocators;
