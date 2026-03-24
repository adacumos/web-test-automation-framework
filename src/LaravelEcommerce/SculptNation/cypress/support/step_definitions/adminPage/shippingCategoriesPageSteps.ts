import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    leOrdersPageLocators,
    usersPageLocators,
} from '../../locator_libraries';

When('The user selects the saved shipping option', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { categoryName, price } = data[0];
        usersPageLocators.newOrder
            .shippingOption()
            .select(`${categoryName} - ${price} - expected`);
    });
});

Then('The selected Shipping category is displayed', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { categoryName, price } = data[0];
        leOrdersPageLocators.ordersDetailsPage
            .shippingCategory()
            .parent()
            .next()
            .should('contain', categoryName)
            .click();
        dashboardLocators.selectTab('Order Offers').click();
        dashboardLocators.getRecord(price).should('be.visible');
    });
});
