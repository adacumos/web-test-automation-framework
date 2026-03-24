import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    productsPageLocators,
} from '../../../Vshred_TrainerTool/cypress/support/locator_libraries';

When('The user searches and edit an existing product', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.searchProducts('Name', staticTestData.productName);
        cy.searchProducts('ID', staticTestData.productID);

        dashboardLocators.getRecord(staticTestData.productID).within(() => {
            dashboardLocators.viewButton().click();
        });

        cy.verifyProductDetails(
            staticTestData.productID,
            staticTestData.productName,
            staticTestData.productDefaultPrice,
            staticTestData.productCogs,
            staticTestData.productAbility
        );

        dashboardLocators.editButton().click();
        cy.editProductDetails('Price', staticTestData.newProductPrice);

        dashboardLocators.editButton().click();
        cy.editProductDetails('Name', staticTestData.newProductName);
    });
});

When(
    /^The user creates a New "(Digital|Physical)" Product$/,
    (productType: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep('Creating new Digital Product');
            if (productType === 'Digital') {
                cy.createNewProduct(
                    staticTestData.productTypeDigital.productID,
                    staticTestData.productTypeDigital.productName,
                    staticTestData.productTypeDigital.productDefaultPrice,
                    staticTestData.productTypeDigital.productCogs,
                    staticTestData.productTypeDigital.productPhysical,
                    staticTestData.productTypeDigital.productDescription,
                    staticTestData.productTypeDigital.productAbility
                );
            } else if (productType === 'Physical') {
                cy.createNewProduct(
                    staticTestData.productTypePhysical.productID,
                    staticTestData.productTypePhysical.productName,
                    staticTestData.productTypePhysical.productDefaultPrice,
                    staticTestData.productTypePhysical.productCogs,
                    staticTestData.productTypePhysical.productPhysical,
                    staticTestData.productTypePhysical.productDescription,
                    staticTestData.productTypePhysical.productAbility
                );
            } else {
                throw new Error('Invalid Product Type Entered');
            }
        });
    }
);

Then(
    /^The new "(Digital|Physical)" Product created is now active$/,
    (productType: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep(`Verify the new ${productType} Product is added`);
            dashboardLocators.navigateMenu('Products').click();
            if (productType === 'Digital') {
                cy.searchProducts(
                    'ID',
                    staticTestData.productTypeDigital.productID
                );
                dashboardLocators
                    .getRecord(staticTestData.productTypeDigital.productID)
                    .within(() => {
                        dashboardLocators.viewButton().click();
                    });

                cy.verifyProductDetails(
                    staticTestData.productTypeDigital.productID,
                    staticTestData.productTypeDigital.productName,
                    staticTestData.productTypeDigital.productDefaultPrice,
                    staticTestData.productTypeDigital.vproductCogs,
                    staticTestData.productTypeDigital.productAbility
                );
                productsPageLocators.viewProductsPage
                    .productPhysical()
                    .parent()
                    .next()
                    .should('contain.text', 'false');
            } else if (productType === 'Physical') {
                cy.searchProducts(
                    'ID',
                    staticTestData.productTypePhysical.productID
                );
                dashboardLocators
                    .getRecord(staticTestData.productTypePhysical.productID)
                    .within(() => {
                        dashboardLocators.viewButton().click();
                    });

                cy.verifyProductDetails(
                    staticTestData.productTypePhysical.productID,
                    staticTestData.productTypePhysical.productName,
                    staticTestData.productTypePhysical.productDefaultPrice,
                    staticTestData.productTypePhysical.vproductCogs,
                    staticTestData.productTypePhysical.productAbility
                );
                productsPageLocators.viewProductsPage
                    .productPhysical()
                    .parent()
                    .next()
                    .should('contain.text', 'true');
            } else {
                throw new Error('Invalid Product Type Selected');
            }
        });
    }
);
