import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    discountsPageLocators,
    usersPageLocators,
} from '../../locator_libraries';

When('The user edits an existing Discount', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { rate } = staticTestData.editDiscount;
        const filepath = 'cypress/fixtures/customData/resourceValues.json';

        cy.writeFile(filepath, []);

        cy.logStep('Pull up an existing Discount resource to edit');
        dashboardLocators
            .tableRecords()
            .eq(Math.floor(Math.random() * 10))
            .within(() => {
                dashboardLocators.viewButton().click();
            });

        cy.logStep('Save current resource values for reference');
        cy.getResourceValues('Discounts');

        cy.logStep('Editing existing discount resource');
        discountsPageLocators.discountsDetailsPage.editDiscountButton().click();
        cy.editResourceDetails('Discounts', 'Rate', `${rate}`);
        dashboardLocators.updateButton().click();
        cy.reload();
    });
});

When('Creates a new Discount', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const filepath = 'cypress/fixtures/customData/resourceValues.json';
        cy.writeFile(filepath, []);
        const { type, rate, startsAt, endsAt } =
            staticTestData.createPercentageDiscount;

        cy.logStep('Creating percentage Discounts');
        cy.createNewDiscount(type, rate, startsAt, endsAt);
    });
});

Then(
    'The user searches an offer and apply the edited Discount resource',
    () => {
        const filepath = 'cypress/fixtures/customData/resourceValues.json';
        cy.readFile(filepath).then((data) => {
            cy.get('@staticTestData').then((staticTestData: any) => {
                const { offerTitle, offerPrice } = staticTestData.orderDetails;
                const { discountAmount } = staticTestData.editDiscount;
                const { couponCode } = data[0];

                cy.searchAndAddOffer(offerTitle);
                cy.logStep('Check product price');
                usersPageLocators.newOrder
                    .offersSectionItemPrice(offerTitle, offerPrice)
                    .should('be.visible');
                cy.logStep('Apply new Discount');
                usersPageLocators.newOrder.addDiscountButton().click();
                usersPageLocators.addDiscountWidget
                    .couponCode(couponCode)
                    .parent()
                    .within(() => {
                        usersPageLocators.addDiscountWidget.addButton().click();
                    });

                usersPageLocators.newOrder
                    .discountSectionCode(couponCode)
                    .should('be.visible');
                usersPageLocators.newOrder
                    .discountSectionAmount(discountAmount)
                    .should('be.visible');
            });
        });
    }
);

Then('The user searches an offer and apply the new Discount', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const filepath = 'cypress/fixtures/customData/resourceValues.json';
        cy.readFile(filepath).then((data) => {
            const { couponCode } = data[0];
            const { offerTitle, offerPrice } = staticTestData.orderDetails;
            const { discountAmount } = staticTestData.createPercentageDiscount;

            cy.searchAndAddOffer(offerTitle);
            cy.logStep('Check product price');
            usersPageLocators.newOrder
                .offersSectionItemPrice(offerTitle, offerPrice)
                .should('be.visible');
            cy.logStep('Apply new Discount');
            usersPageLocators.newOrder.addDiscountButton().click();
            usersPageLocators.addDiscountWidget
                .couponCode(couponCode)
                .parent()
                .within(() => {
                    usersPageLocators.addDiscountWidget.addButton().click();
                });

            usersPageLocators.newOrder
                .discountSectionCode(couponCode)
                .should('be.visible');
            usersPageLocators.newOrder
                .discountSectionAmount(discountAmount)
                .should('be.visible');
        });
    });
});

Then('The Discounted Order Offer details is displayed', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { offerTitle } = staticTestData.orderDetails;
        const { discountAmount } = staticTestData.editDiscount;

        dashboardLocators
            .getRecord(offerTitle)
            .should('be.visible')
            .parents('tr')
            .within(() => {
                cy.contains('td', discountAmount).should('be.visible');
            });
    });
});

Then('Reverts the changes made to Discount test data', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';

    cy.readFile(filepath).then((data) => {
        const title = data[0].discountTitle;
        const rate = data[0].discountRate;

        dashboardLocators.searchInput().type(title);
        dashboardLocators
            .getRecord(title)
            .parent()
            .within(() => {
                dashboardLocators.editButton().click();
            });

        cy.editResourceDetails('Discounts', 'Rate', rate);
        dashboardLocators.updateButton().click();
        cy.reload();
    });
});

Then('Delete New Test Discount Created', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { discountID } = data[0];

        dashboardLocators.navigateMenu('Discounts').click();
        dashboardLocators.resourceTable().should('be.visible');
        dashboardLocators
            .getRecord(discountID)
            .parents('tr')
            .within(() => {
                dashboardLocators.deleteButton().click();
            });
        dashboardLocators.confirmButton().click();
    });
});
