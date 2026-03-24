import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    leProductsPageLocators,
} from '../../locator_libraries';

When(
    /^The user edits the "(Name|Type|Description)" of an existing Product$/,
    (editField: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { productSku } = staticTestData.editProduct;

            cy.logStep(`Searching Product ${productSku}`);
            dashboardLocators.searchInput().clear().type(`${productSku}`);
            dashboardLocators.tableRecords().should('have.length.at.least', 1);
            dashboardLocators
                .getRecord(`${productSku}`)
                .parent()
                .within(() => {
                    dashboardLocators.viewButton().click();
                });

            leProductsPageLocators.productDetailsPage
                .productSku()
                .parent()
                .next()
                .should('contain.text', `${productSku}`);
            cy.editLeProducts(`${editField}`);
        });
    }
);

Then('The updated Product details is reflected in related tables', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { editName } = staticTestData.editProduct;

        cy.logStep('Checking updates are reflected in related tables');

        dashboardLocators.selectTab('Offers').click();
        dashboardLocators
            .resourceTableRecord('Offers')
            .eq(0)
            .within(() => {
                dashboardLocators.viewButton().click();
            });
        dashboardLocators.selectTab('Products').click();
        dashboardLocators.searchInput().type(`${editName}{enter}`);
        dashboardLocators.resourceTableRecord('Products').then((tr) => {
            cy.wrap(tr).contains('td', `${editName}`).should('be.visible');
        });
    });
});

Then('Restores default values of the Products test date', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { productSku } = staticTestData.editProduct;

        cy.logStep(`Searching Product ${productSku}`);
        dashboardLocators.searchInput().clear().type(`${productSku}`);
        dashboardLocators
            .getRecord(`${productSku}`)
            .parent()
            .within(() => {
                dashboardLocators.viewButton().click();
            });

        cy.logStep(`Reverting the updates made to original state`);
        cy.restoreProductsTestData();
    });
});

When('The user creates a new Product', () => {
    cy.logStep('Creating a new Product');
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.writeFile(filepath, []);

    cy.get('@staticTestData').then((staticTestData: any) => {
        const { productName, productDescription, productType } =
            staticTestData.createNewProduct;
        /* eslint-disable cypress/no-unnecessary-waiting */
        cy.wait(1000); // The page is loading too quicking and I keep running into DOM error as resources are not available
        cy.createNewLeProduct(productName, productDescription, productType);
    });
});

Then(
    /^The "(Product|Offer|Price)" table can be attached to "(Offers|Categories)" resource$/,
    (resourceTable: string, referenceTable: string) => {
        cy.logStep(
            `Attaching an existing ${referenceTable} resource to a newly created Product`
        );
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { attachOffer } = staticTestData.createNewProduct;
            cy.attachResource(resourceTable, referenceTable, attachOffer);
        });
    }
);

Then('Delete New Test Product Created', () => {
    cy.logStep('Deleting Product test data');
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    cy.readFile(filepath).then((data) => {
        const { productSku } = data[0];
        dashboardLocators.navigateMenu('Products').click();
        dashboardLocators.resourceTable().should('be.visible');
        dashboardLocators
            .getRecord(productSku)
            .parents('tr')
            .within(() => {
                dashboardLocators.deleteButton().click();
            });
        dashboardLocators.confirmButton().click();
    });
});
