/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
declare global {
    namespace Cypress {
        interface Chainable {
            skipVideo: () => void;
        }
    }
}

/**
 * Command used to skip a video in the SculptNation funnel.
 * @example
 * cy.skipVideo()
 *
 */
export const skipVideo = (): void => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.window({ timeout: 60000 }).then((win) => {
        win.document
            .querySelectorAll<HTMLElement>('.page-contents-lazy')
            .forEach((le) => {
                le.style.display = 'block';
                le.style.visibility = 'visible';
                le.style.opacity = '1';
            });

        win.document
            .querySelectorAll<HTMLElement>('.after-banner')
            .forEach((le) => {
                le.style.display = 'block';
                le.style.visibility = 'visible';
                le.style.opacity = '1';
            });
        win.document
            .querySelectorAll<HTMLElement>('[data-vsl-content]')
            .forEach((le) => {
                le.style.display = 'block';
                le.style.visibility = 'visible';
                le.style.opacity = '1';
            });
    });
};
