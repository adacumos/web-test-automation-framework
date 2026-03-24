import { consumerLandingPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutFastCheckoutFormWithMissingValues: (
                missingData: string
            ) => void;
        }
    }
}

const fillContactInfo = (staticTestData: any, missingData?: string) => {
    const contact =
        consumerLandingPageLocators.fastCheckoutV2.contactInformation;
    const { billingInfo } = staticTestData;

    if (missingData !== 'name') contact.clientName().type(billingInfo.name);
    if (missingData !== 'email') contact.emailAddress().type(billingInfo.email);
    if (missingData !== 'phone') contact.phone().type(billingInfo.phone);
    if (missingData !== 'address')
        contact.addressLine1().type(billingInfo.address);
    if (missingData !== 'city') contact.city().type(billingInfo.city);
    if (missingData !== 'state') contact.state().select(billingInfo.state);
    if (missingData !== 'postal') contact.postal().type(billingInfo.postal);
    contact.country().select(billingInfo.country);
};

const fillPaymentInfo = (staticTestData: any, missingData?: string) => {
    const payment =
        consumerLandingPageLocators.fastCheckoutV2.paymentInformation;
    const creditCard = Cypress.env();

    if (missingData !== 'card number')
        payment.creditCardNumber().type(creditCard.CREDIT_CARD_NUMBER);
    if (missingData !== 'expiration month')
        payment.expirationMonth().type(creditCard.CREDIT_CARD_EXPIRATION_MONTH);
    if (missingData !== 'expiration year')
        payment.expirationYear().type(creditCard.CREDIT_CARD_EXPIRATION_YEAR);
    if (missingData !== 'cvv')
        payment.securityCode().type(creditCard.CREDIT_CARD_CVV);
    if (missingData !== 'card postal')
        payment.postalCode().type(staticTestData.billingInfo.postal);
};

export const filloutFastCheckoutFormWithMissingValues = (
    missingData: string
): void => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        if (missingData === 'data') {
            consumerLandingPageLocators.fastCheckoutV2.nextStep1Btn().click();
            return;
        }

        fillContactInfo(staticTestData, missingData);
        consumerLandingPageLocators.fastCheckoutV2.nextStep1Btn().click();

        if (
            [
                'card number',
                'expiration month',
                'expiration year',
                'cvv',
                'card postal',
            ].includes(missingData)
        ) {
            /* eslint-disable cypress/no-unnecessary-waiting */
            cy.wait(2000);
            fillPaymentInfo(staticTestData, missingData);
            consumerLandingPageLocators.fastCheckoutV2.paymentNextBtn().click();
            /* eslint-disable cypress/no-unnecessary-waiting */
            cy.wait(2000);
        }
    });
};
