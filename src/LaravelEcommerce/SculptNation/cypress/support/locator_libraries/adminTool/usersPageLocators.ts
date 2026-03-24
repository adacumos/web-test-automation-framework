const usersPageLocators = {
    createNewUserButton: () => cy.findByRole('link', { name: /create user/i }),
    loadingAnimation: () => cy.get('svg.text-60.mx-auto.block'),
    editResourceButton: () => cy.get('[dusk="edit-resource-button"]'),
    topMenuSearch: () => cy.get('[dusk="global-search"]'),
    menuSearchResult: (result: string) => cy.findByText(result),

    // User Information - new user form
    newUserForm: {
        firstNameInputField: () =>
            cy.findByRole('combobox', {
                name: /first name/i,
            }),
        lastNameInputField: () =>
            cy.findByRole('combobox', {
                name: /last name/i,
            }),
        emailInputField: () =>
            cy.findByRole('combobox', {
                name: /email/i,
            }),
        passwordInputField: () =>
            cy.findAllByPlaceholderText(/password/i).eq(0),
        confirmPasswordInputField: () =>
            cy.findAllByPlaceholderText(/confirm password/i).eq(0),
        addNewMediaButton: () => cy.findByText(/add new media/i),
        cancelButton: () => cy.findByText(/cancel/i),
        createUserButton: () =>
            cy.findByRole('button', {
                name: /create user/i,
            }),
        createAndAddAnotherButton: () => cy.findByText(/create & add another/i),
        updateUserButton: () => cy.get('[dusk="update-button"]'),
    },
    leCoreNewUserForm: {
        firstName: () => cy.findByRole('textbox', { name: /first name\*/i }),
        lastName: () => cy.findByRole('textbox', { name: /last name\*/i }),
        email: () => cy.findByRole('textbox', { name: /email\*/i }),
        password: () => cy.findByLabelText(/password\*/i),
        confirmPassword: () => cy.findByLabelText(/confirm password/i),
        actionMenu: () => cy.get('.flex.items-center.gap-1').eq(4),
        deleteResource: () => cy.findByText(/delete resource/i),
        alertDialog: () => cy.findByRole('alertdialog'),
        deleteButton: () => cy.findByRole('button', { name: /delete/i }),
    },

    // User Information - edit user information
    editUserInformation: {
        detailsTab: () =>
            cy.findByRole('button', {
                name: /details/i,
            }),
        deleteUserButton: () => cy.findAllByTestId('open-delete-modal').eq(0),
        forceDeleteUserButton: () =>
            cy.findAllByTestId('open-force-delete-modal').eq(0),
        cancelUserDeleteButton: () => cy.findAllByTestId('cancel-button').eq(0),
        confirmUserDeleteButton: () =>
            cy.findAllByTestId('confirm-button').eq(0),
        detailsSection: () => 'div[label=Details]',
        userInformation: (info: string) => cy.contains('.text-90', info),
        userDetails: (detail: string) => cy.findByText(detail),
        processOrderForUserButton: () =>
            cy.findByText(/process order for user/i),
        helpTextError: () => cy.get('.help-text.error-text'),
    },

    // Recent Orders
    recentOrders: {
        recentOrdersHeading: (fullUserName: string) =>
            cy.findByRole('heading', {
                name: new RegExp(`recent orders for ${fullUserName}`, 'i'),
            }),
        recentCartsHeading: (fullUserName: string) =>
            cy.findByRole('heading', {
                name: new RegExp(`recent carts for ${fullUserName}`, 'i'),
            }),
        newOrderButton: () =>
            cy.findByRole('button', {
                name: /new order/i,
            }),
        userNameLink: () => cy.get('div.flex > h1 > a'),
    },

    // Recent Table
    ordersTable: {
        rows: (number: number) =>
            cy.get(
                `div[label="Orders"] table > tbody > tr:nth-child(${number})`
            ),
        totalAmount: () => cy.get('td:nth-child(3) > span'),
        offers: () => cy.get('td:nth-child(10) > div > div'),
        orderItems: (orderItem: string) =>
            cy.get('td:nth-child(10) > div > div').contains(orderItem),
        orderIdLink: () => cy.get('td:nth-child(2) > div > a'),
    },

    // Orders section
    ordersSection: {
        tab: (tabName: string) =>
            cy.findByRole('button', {
                name: tabName,
            }),
        filterData: () => cy.get('div[label=Orders] .filter-menu-dropdown'),
        includeTestData: () => cy.get('select[dusk*="Include Test Data"]'),
    },

    // Details page elements (i.e. Order, Shipment, etc.)
    detailsPages: {
        fieldName: (fieldName: string) =>
            cy.contains('div[class*="flex border-b border-40"]', fieldName),
        fieldValue: () => cy.get('p.text-90'),
        tab: (tabName: string) =>
            cy.findByRole('button', {
                name: tabName,
            }),
        actionSelectButton: () => cy.findAllByTestId('action-select').eq(0),
        actionConfirmButton: () => cy.findAllByTestId('action-confirm').eq(0),
    },

    // Fulfillment Logs elements
    fulfillmentLogs: {
        rows: () =>
            cy.get('div[dusk=fulfillment-logs-index-component] tbody tr'),
        fulfillmentLogId: () => cy.get('td:nth-child(1) > div > a'),
        noErrorsStatus: () => cy.findByText(/false/i),
        payloadContent: () =>
            cy.get('.CodeMirror.cm-s-dracula.CodeMirror-wrap').eq(1),
        responseContent: () =>
            cy.get('.CodeMirror.cm-s-dracula.CodeMirror-wrap').eq(2),
    },

    // Order Offers
    orderOffers: {
        row: (number: number) =>
            cy.get(
                `div[label="Order Offers"] table > tbody > tr:nth-child(${number})`
            ),
        table: () => cy.get(`div[label="Order Offers"] table > tbody`),
        offerName: () => cy.get('td:nth-child(3) > div'),
        baseCurrencyTotalAmount: () => cy.get('td:nth-child(6)'),
        amount: () => cy.get('td:nth-child(7)'),
        discountedAmount: () => cy.get('td:nth-child(8)'),
        taxAmount: () => cy.get('td:nth-child(9)'),
        quantity: () => cy.get('td:nth-child(10)'),
        type: () => cy.get('td:nth-child(11)'),
        amountRefunded: () => cy.get('td:nth-child(12)'),
        refundable: () => cy.get('td:nth-child(13)'),
        refundOrderItemButton: () =>
            cy.findByRole('button', {
                name: /refund order item/i,
            }),
        refundOrderItemDropDown: () =>
            cy.get('select[dusk="inline-action-select"]').eq(0),
    },

    // Invoices
    invoices: {
        row: (number: number) =>
            cy.get(
                `div[label="Invoices"] table > tbody > tr:nth-child(${number})`
            ),
        baseCurrencyTotalAmount: () =>
            cy.get(
                'div.default-search.invoices > div > div > div.card > div.relative > div.overflow-hidden.overflow-x-auto.relative > table > tbody > tr > td:nth-child(2) > span'
            ),
        orderRow: () => cy.get('[via-resource="orders"]').eq(1),
        amount: () => cy.get('td:nth-child(3) span'),
        status: () => cy.get('td:nth-child(4) span'),
    },

    // Payments
    payments: {
        row: (number: number) =>
            cy.get(
                `div[label="Payments"] table > tbody > tr:nth-child(${number})`
            ),
        paymentsId: () => cy.get('td:nth-child(1) div'),
        amount: () => cy.get('td:nth-child(2) span'),
        amountRefunded: () => cy.get('td:nth-child(3) span'),
        netRevenue: () => cy.get('td:nth-child(4) span'),
        status: () => cy.get('td:nth-child(5) span'),
        transactionReference: () => cy.get('td:nth-child(6) span'),
    },

    paymentLogs: {
        row: (number: number) =>
            cy.get(
                `div[label="Payment Logs"] table > tbody > tr:nth-child(${number})`
            ),
        baseCurrencyAmount: () => cy.get('td:nth-child(2) span'),
        amount: () => cy.get('td:nth-child(3) span'),
        status: () => cy.get('td:nth-child(4) span'),
        gateway: () => cy.get('td:nth-child(5) span'),
        gatewayStatus: () => cy.get('td:nth-child(6) span'),
    },

    // Subscriptions
    subscriptions: {
        table: () => cy.get('div[label="Subscriptions"] table'),
        row: (number: number) =>
            cy.get(
                `div[label="Subscriptions"] table > tbody > tr:nth-child(${number})`
            ),
        initialStatus: () => cy.get('td:nth-child(3) span'),
        updatedStatus: () =>
            cy.get('div[label="Subscriptions"] td:nth-child(3) span'),
        renewsAt: () => cy.get('td:nth-child(4) span:nth-child(1)'),
        offer: () => cy.get('td:nth-child(6) span a'),
        cancelSubscriptionMenu: () => cy.get('select').eq(2),
        cancelSubscriptionButton: () =>
            cy.findByRole('button', {
                name: /cancel subscription/i,
            }),
        subscriptionCancellationConfirmationButton: () =>
            cy.findByText(/run action/i),
    },

    // Shipments
    shipments: {
        row: (number: number) =>
            cy.get(
                `div[label="Shipments"] table > tbody > tr:nth-child(${number})`
            ),
        shipmentId: () => cy.get('td:nth-child(2) div').eq(0),
        referenceNumber: () => cy.get('td:nth-child(3) span').eq(0),
        trackingNumber: () => cy.get('td:nth-child(4)'),
        status: () => cy.get('td:nth-child(6) span'),
        shipmentIdUnderOrders: () => cy.get('.text-left > .no-underline'),
    },

    // New Order
    newOrder: {
        backToUserButton: () =>
            cy.findByRole('button', {
                name: /back to user/i,
            }),
        processPaymentButton: () =>
            cy.findByRole('button', {
                name: /process payment/i,
            }),
        orderDetailsHeading: () =>
            cy.findByRole('heading', {
                name: /order details/i,
            }),
        offersHeading: () =>
            cy.findByRole('heading', {
                name: /offers/i,
            }),
        addShippingAddressButton: () =>
            cy.findByRole('button', {
                name: /add shipping address/i,
            }),
        addBillingAddressButton: () =>
            cy.findByRole('button', {
                name: /add billing address/i,
            }),
        findUserButton: () => cy.findByRole('button', { name: /find user/i }),
        addOfferButton: () =>
            cy.findByRole('button', {
                name: /add offer/i,
            }),
        offersSectionItem: (itemName: string) =>
            cy.findByRole('cell', {
                name: new RegExp(`${itemName}`, 'i'),
            }),
        offersSectionItemQuantity: () => cy.get('td:nth-child(1) select'),
        offersSectionItemPrice: (itemName: string, price: string) =>
            cy
                .findByRole('cell', {
                    name: itemName,
                })
                .parent()
                .within(() => {
                    cy.findByRole('cell', {
                        name: price,
                    });
                }),
        discountSectionCode: (couponCode: string) =>
            cy.contains(
                '.order-cart-container :nth-child(4) tr:nth-child(1) > :nth-child(1)',
                couponCode
            ),
        discountSectionAmount: (discountAmount: string) =>
            cy.contains(
                '.order-cart-container :nth-child(4) tr:nth-child(1) > :nth-child(3)',
                `-${discountAmount}`
            ),
        shippingOption: () => cy.get('td:nth-child(2) > select'),
        taxes: () =>
            cy
                .findByRole('cell', {
                    name: /tax:/i,
                })
                .parent()
                .within(() => {
                    cy.get('td:nth-child(2) strong');
                }),
        addDiscountButton: () =>
            cy.findByRole('button', {
                name: /add discount/i,
            }),
        paymentsHeading: () =>
            cy.findByRole('heading', {
                name: /payments/i,
            }),
        shipmentsHeading: () =>
            cy.findByRole('heading', {
                name: /shipments/i,
            }),
    },

    leCoreNewOrder: {
        createOrderButton: () => cy.findByText(/create order/i),
    },

    // Change Address widget
    changeAddressWidget: {
        loadingAnimation: () => cy.get('.mx-auto.block'),
        addNewShippingAddress: () => cy.findByText(/add new shipping address/i),
        addNewBillingAddress: () => cy.findByText(/add new billing address/i),
        addNewAddress: () => cy.findByText(/add new addres/i),
        saveAddressButton: () =>
            cy.findByRole('button', {
                name: /save address/i,
            }),
        cancelChangeAddressButton: () =>
            cy.findByRole('button', {
                name: /cancel/i,
            }),
        sameShippingAndBillingCheckmark: () =>
            cy.findByRole('checkbox', {
                name: /shipping & billing addresses are the same/i,
            }),
        addressCard: () => cy.get("div[class*='break-words address']"),
        createAddressButton: () =>
            cy.findByRole('button', {
                name: /create address/i,
            }),
        cancelCreateAddressButton: () => cy.findByText(/cancel/i),
        isPrimaryBillingCheckbox: () =>
            cy.findByRole('checkbox', {
                name: /is primary billing/i,
            }),
        isPrimaryShippingCheckbox: () =>
            cy.findByRole('checkbox', {
                name: /is primary shipping/i,
            }),
        firstNameField: () =>
            cy.findByRole('combobox', {
                name: /first name/i,
            }),
        lastNameField: () =>
            cy.findByRole('combobox', {
                name: /last name/i,
            }),
        companyNameField: () =>
            cy.findByRole('combobox', {
                name: /company name/i,
            }),
        phoneNumberField: () =>
            cy.findByRole('combobox', {
                name: /phone number/i,
            }),
        addressField: () => cy.findByPlaceholderText('Address'),
        address2Field: () =>
            cy.findByRole('combobox', {
                name: /address \(line 2\)/i,
            }),
        cityField: () =>
            cy.findByRole('combobox', {
                name: /city/i,
            }),
        stateField: () =>
            cy.findByRole('combobox', {
                name: /state/i,
            }),
        countryField: () =>
            cy.findByRole('combobox', {
                name: /country/i,
            }),
        postalCodeField: () =>
            cy.findByRole('combobox', {
                name: /postal code/i,
            }),
        userField: () => cy.get('[data-testid=users-select]'),
        createAddress: () =>
            cy.findByRole('button', {
                name: /create address/i,
            }),
    },

    // Add Offer widget
    addOfferWidget: {
        searchOfferField: () => cy.findByPlaceholderText(/search for offer/i),
        offerSuggestion: (offerName: string) =>
            cy.findByRole('cell', {
                name: offerName,
            }),
        addButton: () =>
            cy.findByRole('button', {
                name: /add/i,
            }),
        price: () => cy.get('td:nth-child(4)'),
    },
    // Add Discount widget
    addDiscountWidget: {
        couponCode: (code: string) => cy.contains('td', code),
        addButton: () =>
            cy.findByRole('button', {
                name: /add/i,
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
        processPaymentButton: () => cy.contains('span', 'Process Payment'),
    },

    // Refund Order widget
    refundOrderWidget: {
        refundHeading: (refundType: string) =>
            cy.findByRole('heading', {
                name: new RegExp(
                    `refund ${
                        refundType.includes('Entire')
                            ? 'entire order'
                            : 'order item'
                    }`,
                    'i'
                ),
            }),
        refundAmount: () =>
            cy.findByRole('spinbutton', {
                name: /refund amount/i,
            }),
        refundReason: () =>
            cy.findByRole('combobox', {
                name: /refund reason/i,
            }),
        refundShipping: () =>
            cy.findByRole('checkbox', {
                name: /refund shipping/i,
            }),
        runActionButton: () => cy.findByText(/run action/i),
        cancelButton: () =>
            cy.findByRole('button', {
                name: /cancel/i,
            }),
    },
    attachRole: {
        userEmail: (email: string) => cy.findByText(new RegExp(email, 'i')),
        roles: (roleName: string) =>
            cy.get(`select[data-testid=roles-select]`).select(roleName),
        attachRoleButton: () => cy.contains('button span', 'Attach Role'),
    },
};

export default usersPageLocators;
