import { consumerLandingPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutFLEFormWithMissingValues: (missingData: string) => void;
        }
    }
}

const fillContactInfo = (staticTestData: any, missingData?: string) => {
    const contact = consumerLandingPageLocators.checkoutFle.contactDetails;
    const { billingInfo } = staticTestData;

    if (missingData !== 'name') contact.fullName().type(billingInfo.name);
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
    const payment = consumerLandingPageLocators.checkoutFle.paymentInformation;
    const creditCard = Cypress.env();

    if (missingData !== 'card number')
        payment.creditCardNumber().type(creditCard.CREDIT_CARD_NUMBER);
    if (missingData !== 'expiration date')
        payment.expirationDate().type(`${Cypress.env(
            'CREDIT_CARD_EXPIRATION_MONTH'
        )}
                                ${String(
                                    Cypress.env('CREDIT_CARD_EXPIRATION_YEAR')
                                )}`);
    if (missingData !== 'cvv')
        payment.securityCode().type(creditCard.CREDIT_CARD_CVV);
    if (missingData !== 'card postal')
        payment.postalCode().type(staticTestData.billingInfo.postal);
};

export const filloutFLEFormWithMissingValues = (missingData: string): void => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        if (missingData === 'data') {
            consumerLandingPageLocators.checkoutFle.continueBtn().click();
            return;
        }

        fillContactInfo(staticTestData, missingData);

        if (
            [
                'card number',
                'expiration month',
                'expiration date',
                'cvv',
                'card postal',
            ].includes(missingData)
        ) {
            fillPaymentInfo(staticTestData, missingData);
        }
        consumerLandingPageLocators.checkoutFle.continueBtn().click();
    });
};
