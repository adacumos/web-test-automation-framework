import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { dashboardLocators } from '../../locator_libraries';

When('The user creates a new Gtin', () => {
    cy.logStep('Creating a new Gtin');
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { gtinsType, productName, gtinsValue } =
            staticTestData.createNewGtin;
        /* eslint-disable cypress/no-unnecessary-waiting */
        cy.wait(20000);
        cy.createNewGtin(gtinsType, gtinsValue, productName);
    });
});

Then('The user Verifies the newly created Gtin', () => {
    cy.logStep('Verifying new Gtin');
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { gtinsValue } = staticTestData.createNewGtin;
        /* eslint-disable cypress/no-unnecessary-waiting */
        cy.wait(15000); // page is loading too slow getting items is disabled only happeing on searching....
        dashboardLocators.headerSearch().clear().type(`${gtinsValue} {enter}`);
        cy.url().should('include', staticTestData.gtinsURL);
    });
});

Then('The user Deletes the New {string} created', (input: string) => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { productName } = staticTestData.createNewProduct;
        const { gtinsValue } = staticTestData.createNewGtin;
        switch (input) {
            case 'Product':
                // const { productName } = staticTestData.createNewProduct;
                cy.deleteProductsTestDataNoTrashed(`${productName}`);
                break;
            case 'Gtin':
                // const { gtinsValue } = staticTestData.createNewGtin;
                cy.deleteGtinsTestData(`${gtinsValue}`);
                break;
            default:
                throw new Error('Invalid button specified');
        }
    });
});

Then(
    'The user verifies the {string} created in previous steps no longer exist',
    (input: string) => {
        cy.logStep(`Searching for items created in previous steps`);
        cy.get('@staticTestData').then((staticTestData: any) => {
            const { gtinsValue } = staticTestData.createNewGtin;
            const { productName } = staticTestData.createNewProduct;
            switch (input) {
                case 'Product':
                    // const { productName } = staticTestData.createNewProduct;
                    /* eslint-disable cypress/no-unnecessary-waiting */
                    cy.wait(1500); // page is loading too slow getting items is disabled only happeing on searching....
                    dashboardLocators
                        .searchInput()
                        .clear()
                        .type(`${productName} {enter}`);
                    cy.get('h3').contains(
                        'No product matched the given criteria.'
                    );
                    break;
                case 'Gtin':
                    // const { gtinsValue } = staticTestData.createNewGtin;
                    /* eslint-disable cypress/no-unnecessary-waiting */
                    cy.wait(1500); // page is loading too slow getting items is disabled only happeing on searching....
                    dashboardLocators
                        .searchInput()
                        .clear()
                        .type(`${gtinsValue} {enter}`);
                    cy.get('h3').contains(
                        'No gtin matched the given criteria.'
                    );
                    break;
                default:
                    throw new Error('Invalid button specified');
            }
        });
    }
);
