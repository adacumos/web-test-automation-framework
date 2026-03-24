const homePageLocators = {
    videoContainer: () => cy.get('.video-container'),

    // Headers
    headers: {
        linkName: (linkName: string) =>
            cy.findByRole('navigation').within(() => {
                cy.findByRole('link', {
                    name: linkName,
                });
            }),
    },

    programs: {
        programNameLink: (name: string) =>
            cy.get(`img[alt="${name.toLowerCase()}"]`).eq(0),
        iWantFatLossExtremeForHimButton: () =>
            cy.findByRole('link', {
                name: /yes i want fat loss extreme/i,
            }),
    },

    navigationMenu: () => cy.findByRole('navigation'),
    navigationMenuItemLink: (menuItem: string) =>
        cy.findByRole('link', { name: new RegExp(menuItem, 'i') }), // accessible within navigationMenu

    threeHormonesLink: () =>
        cy
            .get('.videos__text')
            .contains('3 Hormones Killing Your Metabolism')
            .children('a'),
    upsellLink: (upsellLink: string) =>
        cy.findByRole('link', { name: new RegExp(upsellLink, 'i') }),
    everythingUpsellLink: () => cy.findByText(/Everything for just/i),

    // Order form
    orderForm: {
        heading: () => cy.get('h2'),
        userName: () => cy.get('#name'),
        userEmail: () => cy.get('#email'),
        userPhone: () => cy.get('#phone'),
        nextStepOne: () =>
            cy.get('[test-id="next-step-button-one"]', { timeout: 5000 }),
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
        nextStepTwo: () => cy.get('[test-id="next-step-button-two"]'),
        submitOrder: () => cy.get('[id=submit-order]', { timeout: 5000 }),
        cdpUpsell: () => cy.get('[test-id=bumper-checkbox]'),
    },

    oneBottleSubscription: () =>
        cy.findByRole('button', {
            name: /subscribe now/i,
        }),

    // Supplement order form
    supplementOrderForm: {
        shippingName: () => cy.get('#shipping_name'),
        shippingStreet: () => cy.get('#shipping_street1'),
        shippingCity: () => cy.get('#shipping_city'),
        shippingState: () => cy.get('#shipping_state_us'),
        shippingPostalCode: () => cy.get('#shipping_postal_code'),
        shippingCountry: () => cy.get('#shipping_country'),
        shippingPhone: () => cy.get('#shipping_phone'),
        saveAddress: () => cy.contains('Save address'),
    },

    agreeToPaymentTermsOfRecurringProductCheckbox: () =>
        cy.findByText(
            /i agree to the payment terms of this recurring product/i
        ),
    cdpUpsell: () => cy.get('div > button').last(),
    vsuUpsell: () => cy.contains('button', 'Yes!'),
    greensUpsell: () => cy.contains('button', 'ADD TO CART'),
    orderPageConfirmation: () => cy.get('h2').contains('order'),
    hereButton: () =>
        cy.findByRole('link', {
            name: /here/i,
        }),
    sixPackShredLabel: () => cy.contains('Six-Pack Shred'),
    receipeGuideLabel: () => cy.contains('Recipe Guide'),
    bigArmsProgramLabel: () => cy.contains('Big Arms Program'),
    bootyBuilderProgramLabel: () => cy.contains('The Booty Builder'),

    // generic locator, no need for a function
    orderConfirmationRow: '.row',
};

export default homePageLocators;
