import { When, Then, Step } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    leShippingCategoriesPageLocators,
} from '../../locator_libraries';

When('The user creates a new Shipping Carrier', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const filepath = 'cypress/fixtures/customData/resourceValues.json';
        cy.writeFile(filepath, []);
        const { carrierPriority } = staticTestData.newCarrier;

        cy.logStep(`Create new Carrier`);
        cy.createNewCarrier(carrierPriority);
    });
});

Then('The new Carrier is available in Shipping Category selection', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { carrierName } = data[0];

        Step(
            new Mocha.Context(),
            'The user clicks on "Shipping-Categories" menu from the Admin Tool Dashboard'
        );

        leShippingCategoriesPageLocators.categoriesLandingPage
            .createCategoryButton()
            .click();
        leShippingCategoriesPageLocators.addEditShippingCategoryPage
            .shippingCarrier()
            .invoke('text')
            .should('deep.include', `${carrierName}`);
    });
});

Then('Delete Shipping Carrier Test Data', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { carrierName } = data[0];

        dashboardLocators.navigateMenu('Shipping-Carriers').click();
        dashboardLocators.loadingAnimation().should('not.be.visible');
        dashboardLocators.resourceTable().should('be.visible');
        dashboardLocators
            .getRecord(carrierName)
            .parents('tr')
            .within(() => {
                dashboardLocators.deleteButton().click();
            });
        dashboardLocators.confirmButton().click();
    });
});
