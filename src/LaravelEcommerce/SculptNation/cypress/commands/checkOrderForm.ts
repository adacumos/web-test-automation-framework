import { Step } from '@badeball/cypress-cucumber-preprocessor';
import { consumerLandingPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            checkOrderForm: (clientEmail: string, userPassword: string) => void;
        }
    }
}

export const checkOrderForm = (
    clientEmail: string,
    userPassword: string
): void => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.interceptPixels('purchase');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(5000); // Added wait to ensure confirmation order emails exists on Mailtrap before proceeding with verification
        cy.url().then((checkoutUrl: any) => {
            const isProdServer =
                checkoutUrl.includes(`https://le.vshred.com`) ||
                checkoutUrl.includes(`https://vshred.com`) ||
                checkoutUrl.includes(`https://le.vshredmd.com`) ||
                checkoutUrl.includes(`https://sculptnation.com`);

            if (isProdServer) {
                cy.visit(`${checkoutUrl}&qa_test=VSQAT`);
            }

            if (checkoutUrl.includes(`/checkout-vs/`)) {
                cy.logStep('LE VS-like Checkout Form v4');
                cy.fillInFunnelOrderForm(
                    staticTestData.clientName,
                    // dynamicTestData.userEmail,
                    clientEmail,
                    staticTestData.streetAddress,
                    staticTestData.city,
                    staticTestData.state,
                    staticTestData.postcode,
                    staticTestData.country,
                    staticTestData.phone1
                );
            } else if (
                checkoutUrl.includes(`/vshred-order?`) ||
                checkoutUrl.includes(`/order-vs-nb?`) ||
                checkoutUrl.includes(`/order-vs`)
            ) {
                cy.logStep('VS UCP checkout form');
                cy.filloutVsUcpCheckout(
                    staticTestData.firstName,
                    staticTestData.lastName,
                    clientEmail,
                    staticTestData.streetAddress,
                    staticTestData.city,
                    staticTestData.state,
                    staticTestData.postcode,
                    staticTestData.phone
                );
                consumerLandingPageLocators.checkoutFormV4.paymentInformation
                    .payNowButton()
                    .click();
                cy.wait('@orderPlaced');
            } else if (checkoutUrl.includes(`/order-form/`)) {
                cy.logStep('VS Order Form');
                cy.filloutVsOrderForm(
                    staticTestData.clientName,
                    clientEmail,
                    staticTestData.phoneNumber,
                    staticTestData.surveyLandingPage.productDescription
                );
            } else if (checkoutUrl.includes('/checkout?')) {
                cy.filloutSecureCheckoutForm(clientEmail);
            } else if (checkoutUrl.includes(`/checkout-v3`)) {
                cy.logStep('LE Checkout Form v3');
                cy.filloutCheckoutV3(
                    clientEmail,
                    userPassword,
                    staticTestData.firstName,
                    staticTestData.lastName,
                    staticTestData.streetAddress,
                    staticTestData.city,
                    staticTestData.postcode,
                    staticTestData.phone
                );
            } else if (checkoutUrl.includes(`/checkout-v4`)) {
                cy.logStep('LE Checkout Form v4');
                cy.filloutLEcheckoutForm(
                    clientEmail,
                    userPassword,
                    staticTestData.firstName,
                    staticTestData.lastName,
                    staticTestData.streetAddress,
                    staticTestData.city,
                    staticTestData.postcode,
                    staticTestData.phone
                );
            } else if (
                checkoutUrl.includes(`/sn-checkout-fb`) ||
                checkoutUrl.includes(`/checkout-bogo`)
            ) {
                cy.logStep('sn-checkout-fb Checkout Form');
                cy.filloutSnCheckoutFb(
                    clientEmail,
                    staticTestData.clientName,
                    staticTestData.streetAddress,
                    staticTestData.city,
                    staticTestData.postcode,
                    staticTestData.state,
                    staticTestData.country
                );
            } else if (checkoutUrl.includes(`/sn-checkout?`)) {
                cy.logStep('LE Fast Checkout v2');
                cy.filloutFastCheckoutForm(clientEmail);
            } else if (checkoutUrl.includes(`/checkout-paypal`)) {
                cy.logStep('PayPal Checkout Form');
                if (typeof staticTestData.shippingFirstName === 'undefined') {
                    cy.filloutPayPalForm(
                        clientEmail,
                        staticTestData.billingFirstName,
                        staticTestData.billingLastName,
                        staticTestData.billingAddress,
                        staticTestData.billingCity,
                        staticTestData.billingZipCode,
                        staticTestData.billingCountry,
                        staticTestData.billingPhone
                    );
                } else {
                    cy.filloutPayPalForm(
                        clientEmail,
                        staticTestData.billingFirstName,
                        staticTestData.billingLastName,
                        staticTestData.billingAddress,
                        staticTestData.billingCity,
                        staticTestData.billingZipCode,
                        staticTestData.billingCountry,
                        staticTestData.billingPhone,
                        staticTestData.shippingFirstName,
                        staticTestData.shippingLastName,
                        staticTestData.shippingAddress,
                        staticTestData.shippingCity,
                        staticTestData.shippingZipCode,
                        staticTestData.shippingCountry,
                        staticTestData.shippingPhone
                    );
                }
            } else {
                cy.logStep('LE Checkout Form');

                Step(
                    new Mocha.Context(),
                    'The user fills in the fields on the Checkout page and places the order'
                );
            }
        });
    });
};
