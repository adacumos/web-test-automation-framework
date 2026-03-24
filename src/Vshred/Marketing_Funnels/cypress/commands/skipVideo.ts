/* eslint-disable no-param-reassign */

import { homePageLocators } from '../support/locator_libraries';

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
    homePageLocators.videoContainer().should('be.visible');

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
