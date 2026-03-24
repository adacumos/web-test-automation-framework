import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { dashboardLocators } from '../../locator_libraries';

When('The User creates a new Checkout Form - {string}', (formName: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { templateName } = staticTestData.createNewForm.bumperTemplates;
        const { carouselName, filePath, description } =
            staticTestData.createNewForm.carousels;
        const { reviewName, comment, rating } =
            staticTestData.createNewForm.reviews;
        const { bumperName, bumperOffer, bumperTemplate, templateOptions } =
            staticTestData.createNewForm.bumpers;
        const optionString = JSON.stringify(templateOptions);

        dashboardLocators.navigateMenu(formName).click();
        cy.logStep(`Create new ${formName}`);

        switch (formName) {
            case 'Bumper-Templates':
                cy.createBumperTemplate(templateName);
                break;
            case 'Bumpers':
                cy.createBumper({
                    bumperName,
                    filepath: filePath,
                    offer: bumperOffer,
                    template: bumperTemplate,
                    options: optionString,
                });
                break;
            case 'Carousels':
                cy.createCarousel({
                    carouselName,
                    filepath: filePath,
                    description,
                });
                break;
            case 'Reviews':
                cy.createReviews({
                    reviewName,
                    comment,
                    filepath: filePath,
                    rating,
                });
                break;
            default:
                throw new Error('Selected Checkout Form is not valid');
        }
    });
});

Then('Delete Checkout Form {string} Test Data', (formName: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { templateName } = staticTestData.createNewForm.bumperTemplates;
        const { carouselName } = staticTestData.createNewForm.carousels;
        const { bumperName } = staticTestData.createNewForm.bumpers;
        const { reviewName } = staticTestData.createNewForm.reviews;

        dashboardLocators.navigateMenu(formName).click();
        switch (formName) {
            case 'Bumper-Templates':
                cy.deleteCheckoutFormRecords(formName, templateName);
                break;
            case 'Bumpers':
                cy.deleteCheckoutFormRecords(formName, bumperName);
                break;
            case 'Carousels':
                cy.deleteCheckoutFormRecords(formName, carouselName);
                break;
            case 'Reviews':
                cy.deleteCheckoutFormRecords(formName, reviewName);
                break;
            default:
                throw new Error('Invalid Checkout out form selected');
        }
    });
});
