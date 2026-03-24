declare global {
    namespace Cypress {
        interface Chainable {
            checkEmailContent: (
                emailType: string,
                userEmail?: string
                // orderId?: string
            ) => void;
        }
    }
}

/**
 * Command to verify Order, Refund and Shipment email content from MailTrap
 * @param emailType type of email
 * @param userEmail optional parameter
 * @param orderId optional parameter
 * @example
 * cy.checkEmailContent('Order')
 */

export const checkEmailContent = (
    emailType: string,
    userEmail?: string
): void => {
    cy.logStep(`Verify ${emailType} in MailTrap for email ${userEmail}`);
    switch (emailType) {
        case 'Sales Tax':
            if (typeof userEmail !== 'undefined') {
                cy.getEmailData(
                    'support@sculptnation.com',
                    userEmail,
                    'Your Sculpt Nation order has been received!'
                ).then((emailData: any) => {
                    cy.get('@staticTestData').then((staticTestData: any) => {
                        emailData.forEach((html: any) => {
                            cy.getEmailContent(
                                html[0].html_path,
                                emailType,
                                staticTestData.state
                            );
                        });
                    });
                });
            }
            break;
        case 'Order':
            if (typeof userEmail !== 'undefined') {
                cy.getEmailData(
                    'support@sculptnation.com',
                    userEmail,
                    'Your Sculpt Nation order has been received!'
                ).then((emailData: any) => {
                    cy.get('@staticTestData').then((staticTestData: any) => {
                        if (
                            Object.prototype.hasOwnProperty.call(
                                staticTestData.subscription,
                                'firstSubscriptionName'
                            )
                        ) {
                            emailData.forEach((html: any) => {
                                cy.logStep(
                                    `Verify product name ${staticTestData.subscription.firstSubscriptionName} matches the email`
                                );
                                cy.getEmailContent(
                                    html[0].html_path,
                                    staticTestData.subscription
                                        .firstSubscriptionName
                                );
                                cy.logStep(
                                    `Verify order quantity ${staticTestData.subscription.firstItemOrderQuantity} matches the email`
                                );
                                cy.getEmailContent(
                                    html[0].html_path,
                                    staticTestData.subscription
                                        .firstItemOrderQuantity
                                );
                                cy.logStep(
                                    `Verify order price ${staticTestData.subscription.firstItemOrderPrice} matches the email`
                                );
                                cy.getEmailContent(
                                    html[0].html_path,
                                    staticTestData.subscription
                                        .firstItemOrderPrice
                                );
                                cy.logStep(
                                    `Verify shipping price ${staticTestData.subscription.firstItemOrderShipping} matches the email`
                                );
                                cy.getEmailContent(
                                    html[0].html_path,
                                    staticTestData.subscription
                                        .firstItemOrderShipping
                                );
                                cy.logStep(
                                    `Verify order subtotal ${staticTestData.subscription.firstItemOrderSubtotal} matches the email`
                                );
                                cy.getEmailContent(
                                    html[0].html_path,
                                    staticTestData.subscription
                                        .firstItemOrderSubtotal
                                );
                                cy.logStep(
                                    `Verify sales tax ${staticTestData.subscription.salesTax} matches the email`
                                );
                                cy.getEmailContent(
                                    html[0].html_path,
                                    staticTestData.subscription.salesTax
                                );
                                cy.logStep(
                                    `Verify order total price ${staticTestData.subscription.firstItemOrderTotal} matches the email`
                                );
                                cy.getEmailContent(
                                    html[0].html_path,
                                    staticTestData.subscription
                                        .firstItemOrderTotal
                                );
                            });
                        }
                        if (
                            Object.prototype.hasOwnProperty.call(
                                staticTestData.subscription,
                                'secondSubscriptionName'
                            )
                        ) {
                            emailData.forEach((html: any) => {
                                cy.logStep(
                                    `Verify product name ${staticTestData.subscription.secondSubscriptionName} matches the email`
                                );
                                cy.getEmailContent(
                                    html[1].html_path,
                                    staticTestData.subscription
                                        .secondSubscriptionName
                                );
                                cy.logStep(
                                    `Verify order quantity ${staticTestData.subscription.secondItemOrderQuantity} matches the email`
                                );
                                cy.getEmailContent(
                                    html[1].html_path,
                                    staticTestData.subscription
                                        .secondItemOrderQuantity
                                );
                                cy.logStep(
                                    `Verify order price ${staticTestData.subscription.secondItemOrderPrice} matches the email`
                                );
                                cy.getEmailContent(
                                    html[1].html_path,
                                    staticTestData.subscription
                                        .secondItemOrderPrice
                                );
                                cy.logStep(
                                    `Verify shipping price ${staticTestData.subscription.secondItemOrderShipping} matches the email`
                                );
                                cy.getEmailContent(
                                    html[1].html_path,
                                    staticTestData.subscription
                                        .secondItemOrderShipping
                                );
                                cy.logStep(
                                    `Verify order subtotal ${staticTestData.subscription.secondItemOrderSubtotal} matches the email`
                                );
                                cy.getEmailContent(
                                    html[1].html_path,
                                    staticTestData.subscription
                                        .secondItemOrderSubtotal
                                );
                                cy.logStep(
                                    `Verify sales tax ${staticTestData.subscription.salesTax} matches the email`
                                );
                                cy.getEmailContent(
                                    html[1].html_path,
                                    staticTestData.subscription.salesTax
                                );
                                cy.logStep(
                                    `Verify order total price ${staticTestData.subscription.secondItemOrderTotal} matches the email`
                                );
                                cy.getEmailContent(
                                    html[1].html_path,
                                    staticTestData.subscription
                                        .secondItemOrderTotal
                                );
                            });
                        }
                        if (
                            Object.prototype.hasOwnProperty.call(
                                staticTestData.subscription,
                                'thirdSubscriptionName'
                            )
                        ) {
                            emailData.forEach((html: any) => {
                                cy.logStep(
                                    `Verify product name ${staticTestData.subscription.thirdSubscriptionName} matches the email`
                                );
                                cy.getEmailContent(
                                    html[2].html_path,
                                    staticTestData.subscription
                                        .thirdSubscriptionName
                                );
                                cy.logStep(
                                    `Verify order quantity ${staticTestData.subscription.thirdItemOrderQuantity} matches the email`
                                );
                                cy.getEmailContent(
                                    html[2].html_path,
                                    staticTestData.subscription
                                        .thirdItemOrderQuantity
                                );
                                cy.logStep(
                                    `Verify order price ${staticTestData.subscription.thirdItemOrderPrice} matches the email`
                                );
                                cy.getEmailContent(
                                    html[2].html_path,
                                    staticTestData.subscription
                                        .thirdItemOrderPrice
                                );
                                cy.logStep(
                                    `Verify shipping price ${staticTestData.subscription.thirdItemOrderShipping} matches the email`
                                );
                                cy.getEmailContent(
                                    html[2].html_path,
                                    staticTestData.subscription
                                        .thirdItemOrderShipping
                                );
                                cy.logStep(
                                    `Verify order subtotal ${staticTestData.subscription.thirdItemOrderSubtotal} matches the email`
                                );
                                cy.getEmailContent(
                                    html[2].html_path,
                                    staticTestData.subscription
                                        .thirdItemOrderSubtotal
                                );
                                cy.logStep(
                                    `Verify sales tax ${staticTestData.subscription.salesTax} matches the email`
                                );
                                cy.getEmailContent(
                                    html[2].html_path,
                                    staticTestData.subscription.salesTax
                                );
                                cy.logStep(
                                    `Verify order total price ${staticTestData.subscription.thirdItemOrderTotal} matches the email`
                                );
                                cy.getEmailContent(
                                    html[2].html_path,
                                    staticTestData.subscription
                                        .thirdItemOrderTotal
                                );
                            });
                        }
                    });
                });
            }
            break;
        case 'Refund':
            if (typeof userEmail !== 'undefined') {
                cy.getEmailData(
                    'support@sculptnation.com',
                    userEmail,
                    'Your Sculpt Nation order has been refunded'
                ).then((emailData: any) => {
                    cy.get('@staticTestData').then((staticTestData: any) => {
                        emailData.forEach((html: any) => {
                            cy.logStep(
                                `Verify email title Order Refunded matches the email`
                            );
                            cy.getEmailContent(
                                html[0].html_path,
                                'Order Refunded'
                            );
                            cy.logStep(
                                `Verify product name ${staticTestData.productName} matches the email`
                            );
                            cy.getEmailContent(
                                html[0].html_path,
                                staticTestData.productName
                            );
                            cy.logStep(
                                `Verify order price ${staticTestData.productPrice} matches the email`
                            );
                            cy.getEmailContent(
                                html[0].html_path,
                                staticTestData.productPrice
                            );
                            cy.logStep(
                                `Verify order subtotal ${staticTestData.baseCurrencySubtotal} matches the email`
                            );
                            cy.getEmailContent(
                                html[0].html_path,
                                staticTestData.baseCurrencySubtotal
                            );
                            cy.logStep(
                                `Verify shipping price ${staticTestData.shippingCost} matches the email`
                            );
                            cy.getEmailContent(
                                html[0].html_path,
                                staticTestData.shippingCost
                            );
                            cy.logStep(
                                `Verify sales tax ${staticTestData.productTax} matches the email`
                            );
                            cy.getEmailContent(
                                html[0].html_path,
                                staticTestData.productTax
                            );
                            cy.logStep(
                                `Verify refunded amount ${staticTestData.refundAmount} matches the email`
                            );
                            cy.getEmailContent(
                                html[0].html_path,
                                `-${staticTestData.refundAmount}`
                            );
                            cy.logStep(
                                `Verify total amount ${staticTestData.refundAmount} matches the email`
                            );
                            cy.getEmailContent(
                                html[0].html_path,
                                staticTestData.refundTotal
                            );
                        });
                    });
                });
            }
            break;
        case 'Subscription':
            if (typeof userEmail !== 'undefined') {
                cy.getEmailData(
                    'support@sculptnation.com',
                    userEmail,
                    'SculptNation Confirmation: Your Subscription is Cancelled'
                ).then((emailData: any) => {
                    cy.get('@staticTestData').then((staticTestData: any) => {
                        emailData.forEach((html: any) => {
                            cy.logStep(
                                `Verify email title Your Subscription is Cancelled matches the email`
                            );
                            cy.getEmailContent(
                                html[0].html_path,
                                'Your Subscription is Cancelled'
                            );
                            cy.logStep(
                                `Verify product name ${staticTestData.productName} matches the email`
                            );
                            cy.getEmailContent(
                                html[0].html_path,
                                staticTestData.productName
                            );
                        });
                    });
                });
            }
            break;
        case 'Shipping':
            break;
        default:
            throw new Error(`Invalid ${emailType}`);
    }
};
