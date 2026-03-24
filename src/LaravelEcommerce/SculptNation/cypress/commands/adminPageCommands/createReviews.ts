import {
    dashboardLocators,
    leCheckoutFormsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createReviews: (recordValue: any) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create new Reviews through LE Admin
 * @param recordValue Carousel Record value
 * example:  createReviews('Reviews','New Reviews')
 */

export const createReviews = (recordValue: any): Cypress.Chainable<any> => {
    cy.logStep(`Verify New ${recordValue.name} is unique`);
    dashboardLocators.getRecord(recordValue.name).should('not.have.length');

    cy.logStep(`Creating New ${recordValue.name}`);
    leCheckoutFormsPageLocators.reviewPage.createReviewButton().click();
    leCheckoutFormsPageLocators.reviewPage.createReview
        .reviewNameInputBox()
        .clear()
        .type(recordValue.reviewName);
    leCheckoutFormsPageLocators.reviewPage.createReview
        .commentInputBox()
        .clear()
        .type(recordValue.comment);
    leCheckoutFormsPageLocators.reviewPage.createReview
        .addMediaButton()
        .selectFile(recordValue.filepath, { force: true });
    leCheckoutFormsPageLocators.reviewPage.createReview
        .rating()
        .type(recordValue.rating);
    dashboardLocators.createButton().click();
    return dashboardLocators.successToast().should('be.visible');
};
