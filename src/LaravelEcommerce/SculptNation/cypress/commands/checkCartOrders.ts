import { consumerLandingPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            checkCartOrders: (buttonName: string, orderOption: string) => void;
        }
    }
}

/**
 * Command to check orders are correct on the cart page
 * @param buttonName
 * @param orderOption
 * @example
 * cy.checkCartOrders('Add to Cart', 'Six Bottles')
 */
export const checkCartOrders = (
    buttonName: string,
    orderOption: string
): void => {
    cy.logStep('Verify the cart data');
    cy.get('@staticTestData').then((staticTestData: any) => {
        switch (orderOption.toLowerCase()) {
            case 'one bottle':
                if (buttonName === 'Speed Up My Metabolism') {
                    consumerLandingPageLocators.productPage
                        .speedUpMyMetabolismOneBottleButton()
                        .click();
                } else if (buttonName === 'Sky Rocket My Manhood') {
                    consumerLandingPageLocators.productPage
                        .skyrocketMyManhoodOneBottleButton()
                        .click();
                } else {
                    consumerLandingPageLocators.productPage
                        .addToCartOneBottleButton()
                        .click();
                }

                consumerLandingPageLocators.cartPage
                    .productName()
                    .invoke('text')
                    .then((name) => {
                        expect(name.trim()).to.eq(
                            staticTestData.oneBottle.cartDetails.productName
                        );
                    });
                consumerLandingPageLocators.cartPage
                    .productPricePerItem()
                    .should(
                        'have.text',
                        staticTestData.oneBottle.cartDetails.subtotal
                    );
                consumerLandingPageLocators.cartPage
                    .productQuantity()
                    .find(':selected')
                    .then((qty) => {
                        expect(qty.text()).to.eq(
                            staticTestData.oneBottle.cartDetails.quantity
                        );
                    });
                consumerLandingPageLocators.cartPage
                    .subtotal()
                    .should(
                        'have.text',
                        staticTestData.oneBottle.cartDetails.subtotal
                    );
                consumerLandingPageLocators.cartPage
                    .cartTotalPrice()
                    .should(
                        'have.text',
                        staticTestData.oneBottle.cartDetails.subtotal
                    );

                break;
            case 'one tub':
                consumerLandingPageLocators.productPage
                    .addToCartOneTubButton()
                    .click();
                consumerLandingPageLocators.cartPage
                    .productName()
                    .invoke('text')
                    .then((name) => {
                        expect(name.trim()).to.eq(
                            staticTestData.oneBottle.cartDetails.productName
                        );
                    });
                consumerLandingPageLocators.cartPage
                    .productPricePerItem()
                    .should(
                        'have.text',
                        staticTestData.oneBottle.cartDetails.subtotal
                    );
                consumerLandingPageLocators.cartPage
                    .productQuantity()
                    .find(':selected')
                    .then((qty) => {
                        expect(qty.text()).to.eq(
                            staticTestData.oneBottle.cartDetails.quantity
                        );
                    });
                consumerLandingPageLocators.cartPage
                    .subtotal()
                    .should(
                        'have.text',
                        staticTestData.oneBottle.cartDetails.subtotal
                    );
                consumerLandingPageLocators.cartPage
                    .cartTotalPrice()
                    .should(
                        'have.text',
                        staticTestData.oneBottle.cartDetails.subtotal
                    );
                break;

            case 'six bottles':
                if (
                    staticTestData.productLandingPage.productName ===
                    'APPLE CIDER VINEGAR GUMMIES'
                ) {
                    consumerLandingPageLocators.productPage
                        .addToCartThreeBottleButton()
                        .click();
                } else if (buttonName === 'Speed Up My Metabolism') {
                    consumerLandingPageLocators.productPage
                        .speedUpMyMetabolismSixBottleButton()
                        .click();
                } else if (buttonName === 'Sky Rocket My Manhood') {
                    consumerLandingPageLocators.productPage
                        .skyrocketMyManhoodSixBottleButton()
                        .click();
                } else {
                    consumerLandingPageLocators.productPage
                        .addToCartSixBottleButton()
                        .click();
                }

                consumerLandingPageLocators.cartPage
                    .productName()
                    .invoke('text')
                    .then((name) => {
                        expect(name.trim()).to.eq(
                            staticTestData.sixBottle.cartDetails.productName
                        );
                    });
                consumerLandingPageLocators.cartPage
                    .productPricePerItem()
                    .should(
                        'have.text',
                        staticTestData.sixBottle.cartDetails.subtotal
                    );
                consumerLandingPageLocators.cartPage
                    .productQuantity()
                    .find(':selected')
                    .then((qty) => {
                        expect(qty.text()).to.eq(
                            staticTestData.sixBottle.cartDetails.quantity
                        );
                    });
                consumerLandingPageLocators.cartPage
                    .subtotal()
                    .should(
                        'have.text',
                        staticTestData.sixBottle.cartDetails.subtotal
                    );
                consumerLandingPageLocators.cartPage
                    .cartTotalPrice()
                    .should(
                        'have.text',
                        staticTestData.sixBottle.cartDetails.subtotal
                    );

                break;
            case 'six tub':
                consumerLandingPageLocators.productPage
                    .addToCartSixTubButton()
                    .click();
                consumerLandingPageLocators.cartPage
                    .productName()
                    .invoke('text')
                    .then((name) => {
                        expect(name.trim()).to.eq(
                            staticTestData.sixBottle.cartDetails.productName
                        );
                    });
                consumerLandingPageLocators.cartPage
                    .productPricePerItem()
                    .should(
                        'have.text',
                        staticTestData.sixBottle.cartDetails.subtotal
                    );
                consumerLandingPageLocators.cartPage
                    .productQuantity()
                    .find(':selected')
                    .then((qty) => {
                        expect(qty.text()).to.eq(
                            staticTestData.sixBottle.cartDetails.quantity
                        );
                    });
                consumerLandingPageLocators.cartPage
                    .subtotal()
                    .should(
                        'have.text',
                        staticTestData.sixBottle.cartDetails.subtotal
                    );
                consumerLandingPageLocators.cartPage
                    .cartTotalPrice()
                    .should(
                        'have.text',
                        staticTestData.sixBottle.cartDetails.subtotal
                    );
                break;

            case 'three bottles':
                if (
                    staticTestData.productLandingPage.productName ===
                        'APPLE CIDER VINEGAR GUMMIES' ||
                    staticTestData.productLandingPage.productName ===
                        'FAT LOSS STACK' ||
                    staticTestData.productLandingPage.productName ===
                        'MULSCLE BUILDING STACK'
                ) {
                    consumerLandingPageLocators.productPage
                        .addToCartSixBottleButton()
                        .click();
                } else if (buttonName === 'Speed Up My Metabolism') {
                    consumerLandingPageLocators.productPage
                        .speedUpMyMetabolismThreeBottleButton()
                        .click();
                } else if (buttonName === 'Sky Rocket My Manhood') {
                    consumerLandingPageLocators.productPage
                        .skyrocketMyManhoodThreeBottleButton()
                        .click();
                } else {
                    consumerLandingPageLocators.productPage
                        .addToCartThreeBottleButton()
                        .click();
                }

                consumerLandingPageLocators.cartPage
                    .productName()
                    .invoke('text')
                    .then((name) => {
                        expect(name.trim()).to.eq(
                            staticTestData.threeBottle.cartDetails.productName
                        );
                    });
                consumerLandingPageLocators.cartPage
                    .productPricePerItem()
                    .should(
                        'have.text',
                        staticTestData.threeBottle.cartDetails.subtotal
                    );
                consumerLandingPageLocators.cartPage
                    .productQuantity()
                    .find(':selected')
                    .then((qty) => {
                        expect(qty.text()).to.eq(
                            staticTestData.threeBottle.cartDetails.quantity
                        );
                    });
                consumerLandingPageLocators.cartPage
                    .subtotal()
                    .should(
                        'have.text',
                        staticTestData.threeBottle.cartDetails.subtotal
                    );
                consumerLandingPageLocators.cartPage
                    .cartTotalPrice()
                    .should(
                        'have.text',
                        staticTestData.threeBottle.cartDetails.subtotal
                    );

                break;
            case 'three tub':
                consumerLandingPageLocators.productPage
                    .addToCartThreeTubButton()
                    .click();
                consumerLandingPageLocators.cartPage
                    .productName()
                    .invoke('text')
                    .then((name) => {
                        expect(name.trim()).to.eq(
                            staticTestData.threeBottle.cartDetails.productName
                        );
                    });
                consumerLandingPageLocators.cartPage
                    .productPricePerItem()
                    .should(
                        'have.text',
                        staticTestData.threeBottle.cartDetails.subtotal
                    );
                consumerLandingPageLocators.cartPage
                    .productQuantity()
                    .find(':selected')
                    .then((qty) => {
                        expect(qty.text()).to.eq(
                            staticTestData.threeBottle.cartDetails.quantity
                        );
                    });
                consumerLandingPageLocators.cartPage
                    .subtotal()
                    .should(
                        'have.text',
                        staticTestData.threeBottle.cartDetails.subtotal
                    );
                consumerLandingPageLocators.cartPage
                    .cartTotalPrice()
                    .should(
                        'have.text',
                        staticTestData.threeBottle.cartDetails.subtotal
                    );

                break;

            default:
                throw new Error(`Invalid ${orderOption} `);
        }
    });
};
