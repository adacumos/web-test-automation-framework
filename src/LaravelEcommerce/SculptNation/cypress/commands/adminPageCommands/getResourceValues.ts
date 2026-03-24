import {
    dashboardLocators,
    discountsPageLocators,
    leOrderOffersPageLocators,
    leOrdersPageLocators,
    lePaymentsPageLocators,
    lePlansPageLocators,
    leSubscriptionsPageLocators,
    leShipmentsPageLocators,
    leShippingCategoriesPageLocators,
    leShippingFulfillmentLogsPageLocators,
    usersPageLocators,
    processOrderPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            getResourceValues: (resourceType: string) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to capture record values and saves a Dynamic test data
 * @param resourceType type of resource data
 * example:  getRecordValues('Discounts')
 */

export const getResourceValues = (
    resourceType: string
): Cypress.Chainable<any> => {
    const filepath = 'cypress/fixtures/customData/resourceValues.json';
    switch (resourceType) {
        case 'Discounts': {
            let discountTitle: string;
            let discountType: string;
            let discountRate: string;
            let discountCode: string;
            discountsPageLocators.discountsDetailsPage
                .discountTitle()
                .parent()
                .next()
                .then(($value: any) => {
                    discountTitle = $value.text().trim();
                });
            discountsPageLocators.discountsDetailsPage
                .discountType()
                .parent()
                .next()
                .then(($value: any) => {
                    discountType = $value.text().trim();
                });
            discountsPageLocators.discountsDetailsPage
                .discountRate()
                .parent()
                .next()
                .then(($value: any) => {
                    discountRate = $value.text().trim();
                });
            discountsPageLocators.discountsDetailsPage
                .discountCouponCode()
                .parent()
                .next()
                .then(($value: any) => {
                    discountCode = $value.text().trim();
                });

            cy.readFile(filepath).then((data) => {
                data.push({
                    discountTitle: `${discountTitle}`,
                    discountType: `${discountType}`,
                    discountRate: `${discountRate}`,
                    couponCode: `${discountCode}`,
                });
                cy.writeFile(filepath, JSON.stringify(data, null, 2));
                cy.logStep('Saving Selected Discount Rsource Values');
            });
            break;
        }
        case 'Plans': {
            let planID: string;
            let planSlug: string;
            let planInterval: string;
            let intervalLength: string;
            let trialPeriod: string;
            let offerSku: string;
            let offerTitle: string;

            lePlansPageLocators.plansDetailsPage
                .planID()
                .parent()
                .next()
                .then(($value: any) => {
                    planID = $value.text().trim();
                });
            lePlansPageLocators.plansDetailsPage
                .planSlug()
                .parent()
                .next()
                .then(($value: any) => {
                    planSlug = $value.text().trim();
                });
            lePlansPageLocators.plansDetailsPage
                .planInterval()
                .parent()
                .next()
                .then(($value: any) => {
                    planInterval = $value.text().trim();
                });
            lePlansPageLocators.plansDetailsPage
                .planIntervalLength()
                .parent()
                .next()
                .then(($value: any) => {
                    intervalLength = $value.text().trim();
                });
            lePlansPageLocators.plansDetailsPage
                .planTrialPeriodDays()
                .parent()
                .next()
                .then(($value: any) => {
                    trialPeriod = $value.text().trim();
                });
            dashboardLocators.selectTab('Offer').click();
            lePlansPageLocators.planOffer.offerSku().then(($value: any) => {
                offerSku = $value.text().trim();
            });
            lePlansPageLocators.planOffer.offerTitle().then(($value: any) => {
                offerTitle = $value.text().trim();
            });
            cy.readFile(filepath).then((data) => {
                data.push({
                    planID: `${planID}`,
                    planSlug: `${planSlug}`,
                    planIDInterval: `${planInterval}`,
                    intervalLength: `${intervalLength}`,
                    trialPeriod: `${trialPeriod}`,
                    offerTitle: `${offerTitle}`,
                    offerSku: `${offerSku}`,
                });
                cy.writeFile(filepath, JSON.stringify(data, null, 2));
                cy.logStep('Saving Selected Plan Resource Values');
            });
            break;
        }
        case 'Orders': {
            let orderID: string;
            let baseCurrencyAmount: string;
            let baseCurrencySubtotal: string;
            let paidAtDate: string;
            let shippingCategory: string;

            dashboardLocators.selectTab('Details').click();
            leOrdersPageLocators.ordersDetailsPage
                .orderDetailsHeader()
                .should('be.visible');
            leOrdersPageLocators.ordersDetailsPage
                .orderID()
                .parent()
                .next()
                .then(($value: any) => {
                    orderID = $value.text().trim();
                });
            leOrdersPageLocators.ordersDetailsPage
                .baseCurrencyAmount()
                .parent()
                .next()
                .then(($value: any) => {
                    baseCurrencyAmount = $value.text().trim();
                });
            leOrdersPageLocators.ordersDetailsPage
                .baseCurrencySubtotal()
                .parent()
                .next()
                .then(($value: any) => {
                    baseCurrencySubtotal = $value.text().trim();
                });
            leOrdersPageLocators.ordersDetailsPage
                .paidAtDate()
                .parent()
                .next()
                .then(($value: any) => {
                    paidAtDate = $value.text().trim().substr(0, 10);
                });
            leOrdersPageLocators.ordersDetailsPage
                .shippingCategory()
                .parent()
                .next()
                .then(($value: any) => {
                    shippingCategory = $value.text().trim();
                });
            cy.readFile(filepath).then((data) => {
                data.push({
                    orderID: `${orderID}`,
                    baseCurrencyAmount: `${baseCurrencyAmount}`,
                    baseCurrencySubtotal: `${baseCurrencySubtotal}`,
                    paidAtDate: `${paidAtDate}`,
                    shippingCategory: `${shippingCategory}`,
                });
                cy.writeFile(filepath, JSON.stringify(data, null, 2));
                cy.logStep('Saving Selected Order Resource Values');
            });
            break;
        }
        case 'Subscriptions': {
            let subscriptionID: string;
            let subscriptionStatus: string;
            let user: string;
            let orderID: string;
            let offer: string;
            let plan: string;
            let startsAt: string;
            let renewsAt: string;

            leSubscriptionsPageLocators.subscriptionDetailsPage
                .subscriptionDetailsHeader()
                .should('be.visible');
            leSubscriptionsPageLocators.subscriptionDetailsPage
                .subscriptionID()
                .parent()
                .next()
                .then(($value: any) => {
                    subscriptionID = $value.text().trim();
                });
            leSubscriptionsPageLocators.subscriptionDetailsPage
                .subscriptionStatus()
                .parent()
                .next()
                .then(($value: any) => {
                    subscriptionStatus = $value.text().trim();
                });
            leSubscriptionsPageLocators.subscriptionDetailsPage
                .user()
                .parent()
                .next()
                .then(($value: any) => {
                    user = $value.text().trim();
                });
            leSubscriptionsPageLocators.subscriptionDetailsPage
                .originatingOrder()
                .parent()
                .next()
                .then(($value: any) => {
                    const orderPosition = '|';
                    orderID = $value
                        .text()
                        .trim()
                        .substr(
                            0,
                            $value.text().trim().indexOf(orderPosition) - 1
                        );
                });
            leSubscriptionsPageLocators.subscriptionDetailsPage
                .subscriptionOffer()
                .parent()
                .next()
                .then(($value: any) => {
                    offer = $value.text().trim();
                });
            leSubscriptionsPageLocators.subscriptionDetailsPage
                .subscriptionPlan()
                .parent()
                .next()
                .then(($value: any) => {
                    plan = $value.text().trim().substr(6);
                });
            leSubscriptionsPageLocators.subscriptionDetailsPage
                .startsAt()
                .parent()
                .next()
                .then(($value: any) => {
                    startsAt = $value.text().trim().substr(0, 10);
                });
            leSubscriptionsPageLocators.subscriptionDetailsPage
                .renewsAt()
                .parent()
                .next()
                .then(($value: any) => {
                    renewsAt = $value.text().trim().substr(0, 10);
                });
            cy.readFile(filepath).then((data) => {
                data.push({
                    subscriptionID: `${subscriptionID}`,
                    subscriptionStatus: `${subscriptionStatus}`,
                    user: `${user}`,
                    orderID: `${orderID}`,
                    offer: `${offer}`,
                    plan: `${plan}`,
                    startsAt: `${startsAt}`,
                    renewsAt: `${renewsAt}`,
                });
                cy.writeFile(filepath, JSON.stringify(data, null, 2));
                cy.logStep('Saving Selected Subscription Resource Values');
            });
            break;
        }
        case 'Payments': {
            let paymentID: string;
            let baseCurrencyAmount: string;
            let amount: string;
            let orderID: string;
            let transactionReference: string;
            let gateway: string;
            let userPaymentMethod: string;
            let userEmail: string;

            lePaymentsPageLocators.paymentsDetailsPage
                .paymentDetailsHeader()
                .should('be.visible');
            lePaymentsPageLocators.paymentsDetailsPage
                .paymentID()
                .parent()
                .next()
                .then(($value: any) => {
                    paymentID = $value.text().trim();
                });
            lePaymentsPageLocators.paymentsDetailsPage
                .baseCurrencyAmount()
                .parent()
                .next()
                .then(($value: any) => {
                    baseCurrencyAmount = $value.text().trim();
                });
            lePaymentsPageLocators.paymentsDetailsPage
                .amount()
                .parent()
                .next()
                .then(($value: any) => {
                    amount = $value.text().trim();
                });
            lePaymentsPageLocators.paymentsDetailsPage
                .order()
                .parent()
                .next()
                .then(($value: any) => {
                    const orderPosition = '|';
                    orderID = $value
                        .text()
                        .trim()
                        .substr(
                            0,
                            $value.text().trim().indexOf(orderPosition) - 1
                        );
                });
            lePaymentsPageLocators.paymentsDetailsPage
                .gateway()
                .parent()
                .next()
                .then(($value: any) => {
                    gateway = $value.text().trim();
                });
            lePaymentsPageLocators.paymentsDetailsPage
                .transactionReference()
                .parent()
                .next()
                .then(($value: any) => {
                    transactionReference = $value.text().trim();
                });
            lePaymentsPageLocators.paymentsDetailsPage
                .userPaymentMethod()
                .parent()
                .next()
                .then(($value: any) => {
                    userPaymentMethod = $value.text().trim();
                });
            // get user reference
            dashboardLocators.selectTab('User').click();
            dashboardLocators
                .resourceTableRecord('Users')
                .eq(0)
                .within(() => {
                    cy.get('td:nth-child(4) span').then(($value: any) => {
                        userEmail = $value.text().trim();
                    });
                });

            cy.readFile(filepath).then((data) => {
                data.push({
                    paymentID: `${paymentID}`,
                    baseCurrencyAmount: `${baseCurrencyAmount}`,
                    amount: `${amount}`,
                    orderID: `${orderID}`,
                    gateway: `${gateway}`,
                    transactionReference: `${transactionReference}`,
                    userPaymentMethod: `${userPaymentMethod}`,
                    userEmail: `${userEmail}`,
                });
                cy.writeFile(filepath, JSON.stringify(data, null, 2));
                cy.logStep('Saving Selected Payment Resource Values');
            });
            break;
        }
        case 'Shipments': {
            let shipmentID: string;
            let referenceNumber: string;
            let trackingNumber: string;
            let status: string;
            let userEmail: string;
            let orderID: string;

            leShipmentsPageLocators.shipmentsDetailsPage
                .shipmentID()
                .parent()
                .next()
                .then(($value: any) => {
                    shipmentID = $value.text().trim();
                });
            leShipmentsPageLocators.shipmentsDetailsPage
                .referenceNumber()
                .parent()
                .next()
                .then(($value: any) => {
                    referenceNumber = $value.text().trim();
                });
            leShipmentsPageLocators.shipmentsDetailsPage
                .trackingNumber()
                .parent()
                .next()
                .then(($value: any) => {
                    trackingNumber = $value.text().trim();
                });
            leShipmentsPageLocators.shipmentsDetailsPage
                .status()
                .parent()
                .next()
                .then(($value: any) => {
                    status = $value.text().trim();
                });
            leShipmentsPageLocators.shipmentsDetailsPage
                .user()
                .parent()
                .next()
                .then(($value: any) => {
                    userEmail = $value.text().trim();
                });
            leOrderOffersPageLocators.orderOffersLandingPage
                .linkedResource('Orders')
                .then(($value: any) => {
                    const orderPosition = '|';
                    orderID = $value
                        .text()
                        .trim()
                        .substr(
                            0,
                            $value.text().trim().indexOf(orderPosition) - 1
                        );
                });

            cy.readFile(filepath).then((data) => {
                data.push({
                    shipmentID: `${shipmentID}`,
                    referenceNumber: `${referenceNumber}`,
                    trackingNumber: `${trackingNumber}`,
                    status: `${status}`,
                    userEmail: `${userEmail}`,
                    orderID: `${orderID}`,
                });
                cy.writeFile(filepath, JSON.stringify(data, null, 2));
                cy.logStep('Saving Selected Shipment Resource Values');
            });
            break;
        }
        case 'Shipping-Categories': {
            let categoryID: string;
            let categoryName: string;
            let detail: string;
            let strategy: string;
            let categoryClass: string;
            let carrier: string;
            let serviceLevel: string;
            let price: string;

            leShippingCategoriesPageLocators.categoriesDetailsPage
                .categoryID()
                .parent()
                .next()
                .then(($value: any) => {
                    categoryID = $value.text().trim();
                });
            leShippingCategoriesPageLocators.categoriesDetailsPage
                .categoryName()
                .parent()
                .next()
                .then(($value: any) => {
                    categoryName = $value.text().trim();
                });
            leShippingCategoriesPageLocators.categoriesDetailsPage
                .detail()
                .parent()
                .next()
                .then(($value: any) => {
                    detail = $value.text().trim();
                });
            leShippingCategoriesPageLocators.categoriesDetailsPage
                .strategy()
                .parent()
                .next()
                .then(($value: any) => {
                    strategy = $value.text().trim();
                });
            leShippingCategoriesPageLocators.categoriesDetailsPage
                .categoryClass()
                .parent()
                .next()
                .then(($value: any) => {
                    categoryClass = $value.text().trim();
                });
            leShippingCategoriesPageLocators.categoriesDetailsPage
                .carrier()
                .parent()
                .next()
                .then(($value: any) => {
                    carrier = $value.text().trim();
                });
            leShippingCategoriesPageLocators.categoriesDetailsPage
                .serviceLevel()
                .parent()
                .next()
                .then(($value: any) => {
                    serviceLevel = $value.text().trim();
                });

            leShippingCategoriesPageLocators.prices
                .priceID()
                .parents('tr')
                .within(() => {
                    leShippingCategoriesPageLocators.prices
                        .priceAmount()
                        .then(($value: any) => {
                            price = $value.text().trim();
                        });
                });

            cy.readFile(filepath).then((data) => {
                data.push({
                    categoryID: `${categoryID}`,
                    categoryName: `${categoryName}`,
                    detail: `${detail}`,
                    strategy: `${strategy}`,
                    categoryClass: `${categoryClass}`,
                    carrier: `${carrier}`,
                    serviceLevel: `${serviceLevel}`,
                    price: `${price}`,
                });
                cy.writeFile(filepath, JSON.stringify(data, null, 2));
                cy.logStep('Saving Selected Shipment Resource Values');
            });
            break;
        }
        case 'Fulfillment-Logs': {
            let fulfillmentID: string;
            let service: string;
            let hasErrors: string;
            let referenceNumber: string;

            leShippingFulfillmentLogsPageLocators.fulfillmentLogDetailsPage
                .fulfillmentLogID()
                .parent()
                .next()
                .then(($value: any) => {
                    fulfillmentID = $value.text().trim();
                });
            leShippingFulfillmentLogsPageLocators.fulfillmentLogDetailsPage
                .service()
                .parent()
                .next()
                .then(($value: any) => {
                    service = $value.text().trim();
                });
            leShippingFulfillmentLogsPageLocators.fulfillmentLogDetailsPage
                .hasErrors()
                .parent()
                .next()
                .then(($value: any) => {
                    hasErrors = $value.text().trim();
                });
            leShippingFulfillmentLogsPageLocators.fulfillmentLogDetailsPage
                .logAttribute('OrderNumber')
                .next()
                .then(($value) => {
                    referenceNumber = $value
                        .text()
                        .trim()
                        .replace(/"/, '')
                        .replace(/"$/, '');
                });

            cy.readFile(filepath).then((data) => {
                data.push({
                    fulfillmentID: `${fulfillmentID}`,
                    service: `${service}`,
                    hasErrors: `${hasErrors}`,
                    referenceNumber: `${referenceNumber}`,
                });
                cy.writeFile(filepath, JSON.stringify(data, null, 2));
                cy.logStep(
                    'Saving Selected Shipping Fulfillment Logs Resource Values'
                );
            });
            break;
        }
        case 'Users': {
            let userID: string;
            let firstName: string;
            let lastName: string;
            let email: string;

            usersPageLocators.detailsPages.fieldName('ID').then((field) => {
                cy.wrap(field)
                    .find('div p.text-90')
                    .then(($value: any) => {
                        userID = $value.text().trim();
                    });
            });
            usersPageLocators.detailsPages
                .fieldName('First Name')
                .then((field) => {
                    cy.wrap(field)
                        .find('div p.text-90')
                        .then(($value: any) => {
                            firstName = $value.text().trim();
                        });
                });
            usersPageLocators.detailsPages
                .fieldName('Last Name')
                .then((field) => {
                    cy.wrap(field)
                        .find('div p.text-90')
                        .then(($value: any) => {
                            lastName = $value.text().trim();
                        });
                });
            usersPageLocators.detailsPages.fieldName('Email').then((field) => {
                cy.wrap(field)
                    .find('div p.text-90')
                    .then(($value: any) => {
                        email = $value.text().trim();
                    });
            });

            cy.readFile(filepath).then((data) => {
                data.push({
                    userID: `${userID}`,
                    firstName: `${firstName}`,
                    lastName: `${lastName}`,
                    email: `${email}`,
                });
                cy.writeFile(filepath, JSON.stringify(data, null, 2));
                cy.logStep('Saving Selected Discount Rsource Values');
            });
            break;
        }
        case 'iFrame-User': {
            let userID: string;
            let email: string;
            let firstName: string;
            let lastName: string;

            processOrderPageLocators.userDetailsIframe
                .userID()
                .parent()
                .next()
                .then(($value: any) => {
                    userID = $value.text().trim();
                });
            processOrderPageLocators.userDetailsIframe
                .firstName()
                .parent()
                .next()
                .then(($value: any) => {
                    firstName = $value.text().trim();
                });
            processOrderPageLocators.userDetailsIframe
                .lastName()
                .parent()
                .next()
                .then(($value: any) => {
                    lastName = $value.text().trim();
                });

            processOrderPageLocators.userDetailsIframe
                .email()
                .parent()
                .next()
                .then(($value: any) => {
                    email = $value.text().trim();
                });
            cy.readFile(filepath).then((data) => {
                data.push({
                    userID: `${userID}`,
                    email: `${email}`,
                    firstName: `${firstName}`,
                    lastName: `${lastName}`,
                });
                cy.writeFile(filepath, JSON.stringify(data, null, 2));
            });
            break;
        }
        default:
            throw new Error('Selected Data Type Not Yet Supported');
    }
    return cy.logStep('Resouce Values Saved');
};
