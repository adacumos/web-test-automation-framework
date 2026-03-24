import {
    dashboardLocators,
    leCheckoutFormsPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            createCarousel: (recordValue: any) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to create new Carousel through LE Admin
 * @param recordValue Carousel Record value
 * example:  createCarousel('Bumpers','New Bumpers')
 */

export const createCarousel = (recordValue: any): Cypress.Chainable<any> => {
    cy.logStep(`Verify New ${recordValue.carouselName} is unique`);
    dashboardLocators.searchInput().clear().type(recordValue.carouselName);
    dashboardLocators.noMatchedRecord('Carousel').should('be.visible');

    cy.logStep(`Creating New ${recordValue.carouselName}`);
    dashboardLocators.createResourceButton('carousels').click();
    leCheckoutFormsPageLocators.carouselPage.createCarousel
        .carouselNameInputBox()
        .clear()
        .type(recordValue.carouselName);
    leCheckoutFormsPageLocators.carouselPage.createCarousel
        .addMediaButton()
        .selectFile(recordValue.filepath, { force: true });
    leCheckoutFormsPageLocators.carouselPage.createCarousel
        .description()
        .clear()
        .type(recordValue.description);
    dashboardLocators.createButton().click();
    return dashboardLocators.successToast().should('be.visible');
};
