import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    lePlansPageLocators,
    usersPageLocators,
} from '../../locator_libraries';

When('The user edits an existing Plan', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { planUnderTest, planSlug, intervalLength, trialPeriod } =
            staticTestData.editPlans;
        const filepath = 'cypress/fixtures/customData/resourceValues.json';
        cy.writeFile(filepath, []);

        cy.logStep('Pull up an existing Plan resource to edit');
        dashboardLocators.searchInput().clear().type(planUnderTest);
        dashboardLocators
            .getRecord(planUnderTest)
            .parents('tr')
            .within(() => {
                dashboardLocators.viewButton().click();
            });

        cy.logStep('Save current resource values for reference');
        cy.getResourceValues('Plans');

        cy.logStep('Editing existing Plans fields');
        lePlansPageLocators.plansDetailsPage.editPlanButton().click();
        cy.editResourceDetails('Plans', 'Slug', `${planSlug}`);
        cy.editResourceDetails('Plans', 'IntervalLength', `${intervalLength}`);
        cy.editResourceDetails('Plans', 'TrialPeriod', `${trialPeriod}`);
        dashboardLocators.updateButton().click();
        cy.reload();
    });
});

When('The user adds the Offer linked to the updated Plan', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { offerSku } = data[0];

        cy.log('Searching Offer linked to the updated Plan');
        cy.searchAndAddOffer(offerSku);
    });
});

Then('The Subscription created reflects the linked Plan details', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { intervalLength } = staticTestData.editPlans;
        const computedDate: Date = new Date(
            new Date().setMonth(new Date().getMonth() + intervalLength)
        );
        const renewalDate = computedDate.toISOString().split('T')[0];
        const [year, month] = renewalDate.split('-');
        const formattedRenewalDate = `${year}-${month}`;
        const filepath = 'cypress/fixtures/customData/resourceValues.json';
        cy.readFile(filepath).then((data) => {
            const { offerTitle } = data[0];
            dashboardLocators
                .selectTab('Subscriptions')
                .click()
                .then(() => {
                    usersPageLocators.subscriptions
                        .offer()
                        .should('contain.text', `${offerTitle}`);
                    usersPageLocators.subscriptions
                        .renewsAt()
                        .should('contain.text', `${formattedRenewalDate}`);
                });
        });
    });
});

Then('Reverts the changes made to Plans test data', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { planSlug } = staticTestData.editPlans;
        const filepath = 'cypress/fixtures/customData/resourceValues.json';

        cy.readFile(filepath).then((data) => {
            const originalPlanSlug = data[0].planSlug;
            const originalInterval = data[0].intervalLength;
            const originalTrialPeriod = data[0].trialPeriod;

            dashboardLocators.searchInput().type(planSlug);
            dashboardLocators
                .getRecord(planSlug)
                .parent()
                .within(() => {
                    dashboardLocators.editButton().click();
                });

            cy.reload();
            cy.editResourceDetails('Plans', 'Slug', `${originalPlanSlug}`);
            cy.editResourceDetails(
                'Plans',
                'IntervalLength',
                `${originalInterval}`
            );
            cy.editResourceDetails(
                'Plans',
                'TrialPeriod',
                `${originalTrialPeriod}`
            );
            dashboardLocators.updateButton().click();
            dashboardLocators.successToast().should('be.visible');
        });
    });
});

When('The user creates a New Plan', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const filepath = 'cypress/fixtures/customData/resourceValues.json';
        cy.writeFile(filepath, []);
        const { intervalLength } = staticTestData.createNewPlan;
        const offerDetails = {
            offerTitle: staticTestData.createNewPlan.offerDetails.offerTitle,
            offerSku: staticTestData.createNewPlan.offerDetails.offerSku,
            offerPrice: staticTestData.createNewPlan.offerDetails.offerPrice,
        };
        const productDetails = {
            productName:
                staticTestData.createNewPlan.productDetails.productName,
            productQuantity:
                staticTestData.createNewPlan.productDetails.productQuantity,
        };
        cy.createNewLePlan(intervalLength, offerDetails, productDetails);
    });
});

When(
    'The user can search and add the new Offer linked to the new Plan created',
    () => {
        const filepath = 'cypress/fixtures/customData/resourceValues.json';
        cy.readFile(filepath).then((data) => {
            const { offerSku, offerPrice } = data[0];

            cy.logStep('Search New Offer');
            usersPageLocators.newOrder.addOfferButton().click();
            usersPageLocators.addOfferWidget.searchOfferField().type(offerSku);
            usersPageLocators.addOfferWidget
                .offerSuggestion(offerSku)
                .parent()
                .within(() => {
                    usersPageLocators.addOfferWidget
                        .price()
                        .should('contain', offerPrice);
                });
            dashboardLocators.cancelButton().click();
        });
    }
);

Then('Delete Test Plan Offer Created', () => {
    cy.deletePlansTestData();
});
