import { When, Then, Step } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from '../../testData';
import {
    dashboardLocators,
    processOrderPageLocators,
} from '../../locator_libraries';

When('The user navigates to {string} sidebar menu', (menu: string) => {
    Step(
        new Mocha.Context(),
        'The user logs into the Admin Tool using an account with "admin" credentials'
    );
    dashboardLocators.sidebarMenu(menu).click();
});

When('Generate random username and password', () => {
    dynamicTestData.userPassword = Math.floor(
        Math.random() * 100000000
    ).toString();

    cy.generateRandomTestEmail().then((randomEmail) => {
        dynamicTestData.userEmail = randomEmail;
    });
});

When('The user creates a new user through the Process Order page', () => {
    processOrderPageLocators.createUserButton().click();

    Step(new Mocha.Context(), 'Generate random username and password');
    cy.get('@staticTestData').then((staticTestData: any) => {
        const userDetails = {
            firstName: staticTestData.firstName,
            lastName: staticTestData.lastName,
            email: dynamicTestData.userEmail,
            password: dynamicTestData.userPassword,
        };
        cy.createUserViaiFrame(userDetails);
    });
});

When('Searches a user through the Process Order page', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { email } = data[0];
        const username = email.split('@')[0];
        /* eslint-disable cypress/no-unnecessary-waiting */
        cy.wait(3000);
        processOrderPageLocators
            .searchUserInput()
            .clear()
            .type(username, { delay: 50 });
    });
});

Then('Creates an order through the Process Order page', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { email } = data[0];
        dashboardLocators
            .getRecord(email)
            .parents('tr')
            .within(() => {
                processOrderPageLocators.createOrderButton().click();
            });
        Step(
            new Mocha.Context(),
            'The user adds a new shipping and billing address on the New Order page'
        );
        Step(
            new Mocha.Context(),
            'The user searches and adds an offer using the Add Offer widget'
        );
        Step(
            new Mocha.Context(),
            'The user selects the shipping option in the Offers section'
        );
        Step(
            new Mocha.Context(),
            'The user processes the payment using a "valid" credit card'
        );
        Step(
            new Mocha.Context(),
            'The user clicks the "Back To User" button on the New Order page'
        );
    });
});

Then('View All Orders through the Process Order page', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { email } = data[0];
        dashboardLocators
            .getRecord(email)
            .parents('tr')
            .within(() => {
                processOrderPageLocators.viewAllOrderButton().click();
            });
        Step(new Mocha.Context(), 'The user sees the Recent Orders page');
        Step(
            new Mocha.Context(),
            'The user clicks the "Customer Name" button on the Recent Orders page'
        );
        Step(
            new Mocha.Context(),
            'The user sees the offer and the total amount in the Orders table'
        );
        Step(
            new Mocha.Context(),
            'The user clicks on the Order Id link in the Orders table'
        );
    });
});
