const vsSurveyOrderFormPageLocators = {
    contactInformation: {
        name: () => cy.get('input[placeholder="Enter Your Name"]'),
        email: () => cy.get('input[placeholder="Enter Your Email"]'),
        phoneNumber: () => cy.get('input[placeholder= "Phone Number"]'),
        addressLine1: () => cy.get('input[placeholder= "Address Line 1"]'),
        addressLine2: () => cy.get('input[placeholder= "Address Line 2"]'),
        city: () => cy.get('input[placeholder= "City"]'),
        country: (countryCode: string) =>
            cy.get('.input-country > select').select(countryCode),
        state: () => cy.get('.input-state > select'),
        stateText: () => cy.get('input[placeholder= "State/Province"]'),
        postalCode: () => cy.get('input[placeholder= "Postal Code"]'),
        nextStep: () => cy.get('button.next').eq(0),
    },
    paymentInformation: {
        creditCardNumber: () =>
            cy
                .iFrame('#braintree-hosted-field-number')
                .find('#credit-card-number'),
        expirationMonth: () =>
            cy
                .iFrame('#braintree-hosted-field-expirationMonth')
                .find('#expiration-month'),
        expirationYear: () =>
            cy
                .iFrame('#braintree-hosted-field-expirationYear')
                .find('#expiration-year'),
        expirationDate: () =>
            cy
                .iFrame('#braintree-hosted-field-expirationDate')
                .find('#expiration'),
        securityCode: () =>
            cy.iFrame('#braintree-hosted-field-cvv').find('#cvv'),
        postalCode: () =>
            cy
                .iFrame('#braintree-hosted-field-postalCode')
                .find('#postal-code'),
        cdpUpsell: () => cy.get('label[for="checkbox"]'),
        nextStep: () => cy.get('button.next').eq(1),
    },
    // Adyen Checkout
    adyenPaymentContainer: {
        creditCardNumber: () =>
            cy
                .iFrame('[title="Iframe for card number"]')
                .find('input[id*=encryptedCardNumber]'),
        expirationDate: () =>
            cy
                .iFrame('[title="Iframe for expiry date"]')
                .find('input[id*=encryptedExpiryDate]'),
        securityCode: () =>
            cy
                .iFrame('[title="Iframe for security code"]')
                .find('input[id*=encryptedSecurityCode]'),
        nextStep: () => cy.get('.next').eq(1),
        payNowButton: () =>
            cy.findByRole('button', { name: /pay now|submit order/i }),
    },
    upsellCheckbox: () => cy.get('label[for="checkbox"]'),
    orderSummary: () => cy.get('.order-summary'),
    salesTax: () => cy.get('.cart-grid').eq(2),
    upsellItem: (orderItem: string) => cy.contains(`${orderItem}`),
    submitOrderButton: () => cy.contains('button', /submit/i),
};
export default vsSurveyOrderFormPageLocators;
