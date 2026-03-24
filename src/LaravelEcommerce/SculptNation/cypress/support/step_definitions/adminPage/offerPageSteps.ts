import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    leOffersPageLocators,
    usersPageLocators,
} from '../../locator_libraries';

When('The user edits and existing Offer', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { offerSku, offerPrice, editPrice } = staticTestData.editOffer;

        cy.logStep(`Searching offer ${offerSku}`);
        dashboardLocators.searchInput().clear().type(`${offerSku}`);
        dashboardLocators.tableRecords().should('have.length', 1);
        dashboardLocators
            .getRecord(`${offerSku}`)
            .parent()
            .within(() => {
                dashboardLocators.viewButton().click();
            });
        leOffersPageLocators.offerDetailsPage
            .offerSku()
            .parent()
            .next()
            .should('contain.text', `${offerSku}`);
        dashboardLocators.selectTab('Prices').click();
        dashboardLocators
            .getRecord(`${offerPrice}`)
            .should('be.visible')
            .parent()
            .within(() => {
                dashboardLocators.editButton().click();
            });

        cy.logStep(`Updating offer from from ${offerPrice} to ${editPrice}}`);
        leOffersPageLocators.updatePrice
            .updateAmount()
            .clear()
            .type(`${editPrice}`);
        leOffersPageLocators.updatePrice.updatePriceButton().click();
        leOffersPageLocators.viewOfferPrices
            .priceDetailsAmount()
            .should('contain.text', `${editPrice}`);
    });
});

When('The user searches and adds the updated offer', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.searchAndAddOffer(staticTestData.editOffer.offerTitle);

        cy.logStep('Verify the New Offer Price is displayed');
        usersPageLocators.newOrder
            .offersSectionItemPrice(
                staticTestData.editOffer.offerTitle,
                staticTestData.editOffer.editPrice
            )
            .should('be.visible');
    });
});

Then('Order displays the updated Offers details', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.logStep('Verifying Order Details returns the updated Offer price');
        usersPageLocators.orderOffers.row(1).within(() => {
            usersPageLocators.orderOffers
                .offerName()
                .invoke('text')
                .then((text) => {
                    expect(text.trim()).to.equal(
                        staticTestData.editOffer.offerTitle
                    );
                });
            cy.logStep('Check Base Currency Amount');
            usersPageLocators.orderOffers
                .baseCurrencyTotalAmount()
                .should('have.text', staticTestData.editOffer.editPrice);
        });
    });
});

Then('Reverts the price update made to the Offer testdata', () => {
    cy.logStep('Revert Offer to original state');
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { offerSku, offerPrice } = staticTestData.editOffer;

        dashboardLocators.searchInput().clear().type(`${offerSku}`);
        dashboardLocators
            .getRecord(`${offerSku}`)
            .parent()
            .within(() => {
                dashboardLocators.viewButton().click();
            });

        dashboardLocators.selectTab('Prices').click();
        leOffersPageLocators.viewOfferPrices
            .offerAmount()
            .parents('tr')
            .within(() => {
                dashboardLocators.editButton().click();
            });

        cy.logStep(`Reverting Offer to original state`);
        leOffersPageLocators.updatePrice
            .updateAmount()
            .clear()
            .type(`${offerPrice}`);
        leOffersPageLocators.updatePrice.updatePriceButton().click();
        leOffersPageLocators.viewOfferPrices
            .priceDetailsAmount()
            .should('contain.text', `${offerPrice}`);
    });
});

When('The user creates a new Offer', () => {
    cy.logStep('Creating a new Offer');
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.writeFile(filepath, []);
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { offerTitle, offerDescription, offerPrice } =
            staticTestData.createNewOffer;

        cy.createNewLeOffer(offerTitle, offerDescription, offerPrice);
    });
});

Then('The new Offer created is available for purchase', () => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { offerTitle, offerSku, offerPrice } = data[0];
        cy.searchAndAddOffer(offerSku);
        cy.logStep('Verify the New Offer Price is displayed');
        usersPageLocators.newOrder
            .offersSectionItemPrice(offerTitle, offerPrice)
            .should('be.visible');
    });
});

Then('Delete New Test Offer Created', () => {
    cy.logStep('Force Delete Test Offer Created');
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { offerSku, offerTitle } = staticTestData.createNewOffer;

        cy.deleteOffersTestData(offerSku, offerTitle);
    });
});
