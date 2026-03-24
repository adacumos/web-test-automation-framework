declare global {
    namespace Cypress {
        interface Chainable {
            clearAllSessionData: () => Chainable<any>;
        }
    }
}

/**
 * Command used to clear all the session data of the browser before running a new test.
 * This clears: all cookies, all local storage, all session storage.
 * @example
 * cy.clearSessionData()
 *
 */
export const clearAllSessionData = (): void => {
    cy.clearCookies();
    cy.window().then((win) => {
        win.sessionStorage.clear();
    });

    Cypress.session.clearAllSavedSessions();
    cy.clearLocalStorage();
};
