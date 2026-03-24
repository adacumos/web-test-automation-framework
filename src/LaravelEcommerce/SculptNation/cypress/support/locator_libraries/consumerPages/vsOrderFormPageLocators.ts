const vsOrderFormPageLocators = {
    contactInformation: {
        name: () => cy.findByRole('textbox', { name: /enter your name/i }),
        email: () => cy.findByRole('textbox', { name: /enter your email/i }),
        phoneNumber: () => cy.findByRole('textbox', { name: /phone number/i }),
        nextStep: () => cy.get('.next-step.button-one').eq(0),
    },
    paymentInformation: {
        creditCardNumber: () =>
            cy
                .iFrame('#braintree-hosted-field-number')
                .find('#credit-card-number'),
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
        nextStep: () => cy.get('.next-step.button-two').eq(0),
    },
    orderSummary: () => cy.get('#order-summary'),
    submitOrderButton: () => cy.findByRole('button', { name: /submit order/i }),
};
export default vsOrderFormPageLocators;
