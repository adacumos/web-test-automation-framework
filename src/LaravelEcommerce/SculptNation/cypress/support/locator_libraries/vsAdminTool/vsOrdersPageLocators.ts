const vsOrdersPageLocators = {
    orderDetails: {
        refundButton: () => cy.findByRole('button', { name: /refund/i }),
        orderStatus: () => cy.get(':nth-child(5) > .text-right'),
    },
    cartDetails: {
        refundPriceDetails: () => cy.get('.card-body h3 span'),
    },
    planOrderPage: {
        addPlan: () => cy.get(':nth-child(3) > .btn'),
        searchPlan: () => cy.get('#__BVID__359'),
        searchOfferField: () =>
            cy.findByPlaceholderText(/search by title or description/i),
        addSpecificPlan: () =>
            cy.get('[aria-rowindex="1"] > [aria-colindex="6"] > .btn'),
        subscribeButton: () => cy.get('.actions > .btn'),
        radioButtonForCardToUse: () => cy.get('.custom-control'),
        submitTransaction: () => cy.get('#submitTransaction'),
        total: () => cy.get('.text-right'),
        firstOrderOnList: () => cy.get('[item-index="0"] > :nth-child(1)'),
        purchaseVsu: () => cy.get('div.text-center > .site-btn'),
    },
    filterRecord: {
        byOrderID: () => cy.get('#table-filter-order_id'),
        byCustomerName: () => cy.get('#table-filter-user_name'),
        byCustomerEmail: () => cy.get('#table-filter-user_email'),
        bySource: () => cy.get('select#__BVID__19'),
        byStatus: () => cy.get('select#__BVID__20'),
        bySiftStatus: () => cy.get('select#__BVID__21'),
        bySearchNameField: () => cy.get('#__BVID__113'),
        ByNameField: () =>
            cy.get(
                '#__BVID__114 > tbody > [aria-rowindex="1"] > [aria-colindex="2"]'
            ),
        ByPlanNameField: () =>
            cy
                .get('td[aria-colindex="1"][role="cell"]')
                .contains('BURN EVOLVED - 1 Bottle Monthly'),
        placeOrderButton: () => cy.get('.btn-success'),
        addOfferButton: () => cy.findAllByText(/add offer/i),
        buttonWithText: (text: string) =>
            cy.get('button.btn.btn-secondary').contains(text), // popular for subscription buttons (add, cancel, restore)
        addPlanModalButton: () => cy.findAllByText(/add plan/i).eq(3),
        statusOfFirstOrder: () => cy.get('.vuetable-td-status'),
        primaryButtonWithText: (text: string) =>
            cy.get('button.btn.btn-primary').contains(text), // popular for buttons (void, sync)
        primaryButton: () => cy.get('button.btn.btn-primary'),
        floatingButtonWithText: (text: string) =>
            cy.get('button.btn.float-right').contains(text),
        reasonForVoid: () => cy.get('.custom-select-sm'),
    },
    changeAddressWidget: {
        addShippingAddressButton: () =>
            cy.findByRole('button', {
                name: /add shipping address/i,
            }),
        newShippingAddress: () => cy.get(':nth-child(1) > .text-right > .btn'),
        okSaveAddress: () =>
            cy.get('#addAddressModal___BV_modal_footer_ > .btn-primary'),
        okFullSaveAddress: () =>
            cy.get('#manageAddressModal___BV_modal_footer_ > .btn-primary'),
        name: () => cy.get('#input_name'),
        phone: () => cy.get('#input_phone'),
        address: () => cy.get('#input_address_line_1'),
        address2: () => cy.get('#input_address_line_2'),
        city: () => cy.get('#input_city'),
        zip: () => cy.get('#input_zip'),
        useAddressButton: () =>
            cy.findByRole('button', {
                name: /use address/i,
            }),
        stateField: () =>
            cy.findByRole('combobox', {
                name: /state/i,
            }),
        countryField: () =>
            cy.findByRole('combobox', {
                name: /country/i,
            }),
    },
    newOrder: {
        addBillingAddressButton: () =>
            cy.findByRole('button', {
                name: /add billing address/i,
            }),
        manageAddressModal: () =>
            cy.get('#manageAddressModal___BV_modal_header_'),
        useAddressButton: () =>
            cy.findByRole('button', {
                name: /use address/i,
            }),
    },
    // Process payment
    processPayment: {
        newCard: () => cy.findByText(/new card/i),
        creditCardNumber: () =>
            cy
                .iFrame('#braintree-hosted-field-number')
                .find('#credit-card-number'),
        creditCardExpirationMonth: () =>
            cy
                .iFrame('#braintree-hosted-field-expirationMonth')
                .find('#expiration-month'),
        creditCardExpirationYear: () =>
            cy
                .iFrame('#braintree-hosted-field-expirationYear')
                .find('#expiration-year'),
        creditCardCvv: () =>
            cy.iFrame('#braintree-hosted-field-cvv').find('#cvv'),
        creditCardExpiration: () =>
            cy
                .iFrame('#braintree-hosted-field-expirationDate')
                .find('#expiration'),
        creditCardPostalCode: () =>
            cy
                .iFrame('#braintree-hosted-field-postalCode')
                .find('#postal-code'),
        processPaymentButton: () => cy.contains('span', 'Process Payment'),
        submitPaymentButton: () => cy.get('#submitTransaction'),
        toastMessage: () => cy.get('.toast-message'),
        toastErrorMessage: () => cy.get('.toast-error > .toast-message'),
        invalidCreditCardMessage: () =>
            cy.get(
                '[data-braintree-id="number-field-group"] > .braintree-form__field-error'
            ),
    },

    // payments tab
    payments: {
        payment_tab_title: () => cy.get('.col').contains('h2', 'Payments'),
        transactionReference: () => cy.get('tr :nth-child(1) > a'),
    },

    // refund modal
    refundModal: {
        refundModal: () => cy.get('#refundOrderModal___BV_modal_content_'),
        // productName: () => cy.get('.align-middle[aria-colindex="3"]'),
        productName: (productDesc: string) =>
            cy.findByRole('cell', {
                name: new RegExp(`${productDesc}`, 'i'),
            }),
        refundAllCheckbox: () =>
            cy.get('thead > tr > [aria-colindex="7"] > .custom-control'),
        refundReasonDropdown: () => cy.get('.custom-select'), // use the .select('Changed Mind'); function after dropdown. Example: cy.get('.custom-select').select('Changed Mind');
        refundButton: () =>
            cy.get('#refundOrderModal___BV_modal_footer_ .d-flex .btn-primary'),
        refundConfirmationModalContainer: () =>
            cy.get('refundConfirmationModal___BV_modal_content_'),
        confirmRefundButton: () => cy.contains('button', 'Yes'),
    },
};

export default vsOrdersPageLocators;
