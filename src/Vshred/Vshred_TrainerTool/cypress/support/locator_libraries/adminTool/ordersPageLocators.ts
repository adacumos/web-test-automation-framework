const ordersPageLocators = {
    // Orders Table
    orders: {
        orderRow: (orderId: string) =>
            cy
                .findByRole('link', {
                    name: new RegExp(orderId, 'i'),
                })
                .parent()
                .parent()
                .parent(),
        orderId: (id: string) =>
            cy.findByRole('link', {
                name: new RegExp(id, 'i'),
            }),
        customerName: (customerName: string) =>
            cy.findByRole('link', {
                name: customerName,
            }), // accesible within orderRow
        customerEmail: (customerEmail: string) =>
            cy.findByRole('cell', {
                name: customerEmail,
            }), // accesible within orderRow
        customerPhone: (customerPhone: string) =>
            cy.findByRole('cell', {
                name: customerPhone,
            }), // accesible within orderRow
        totalAmount: (totalAmount: string) =>
            cy.findByRole('cell', {
                name: totalAmount,
            }), // accesible within orderRow
        refundedAmount: (refundedAmount: string) =>
            cy.findByRole('cell', {
                name: refundedAmount,
            }), // accesible within orderRow
        createdBy: (createdBy: string) =>
            cy.findByRole('link', {
                name: createdBy,
            }), // accesible within orderRow
        orderStatus: (orderStatus: string) =>
            cy.findByRole('cell', {
                name: orderStatus,
            }), // accesible within orderRow
    },
    // Order details
    orderDetailsSection: {
        heading: () => cy.findByRole('heading', { name: /order details/i }),
        // Order Details Fields
        addressField: (addressFieldValue: string) =>
            cy.findByText(addressFieldValue),
        orderId: () => cy.get('.card-body > :nth-child(2) > .text-right'),
        // Order Details Info Messages
        noShippingAddressMessage: () =>
            cy.findByText(/no shipping address found/i),
        noBillingAddressMessage: () =>
            cy.findByText(/no billing address found/i),
        noCouponMessage: () => cy.findByText(/no coupon applied/i),
        // Order details Buttons
        addShippingAddressButton: () =>
            cy.findByRole('button', { name: /add shipping address/i }),
        editShippingAddressButton: () =>
            cy.findByRole('button', { name: /edit shipping address/i }),
        addBillingAddressButton: () =>
            cy.findByRole('button', { name: /add billing address/i }),
        editBillingAddressButton: () =>
            cy.findByRole('button', { name: /edit billing address/i }),
        addCouponButton: () => cy.findByRole('button', { name: /add coupon/i }),
    },

    // Order details -> Order cart
    orderCartSection: {
        heading: () => cy.findByRole('heading', { name: /order cart/i }),
        // Order cart Table
        orderRow: (offerName: string) =>
            cy
                .findByRole('cell', {
                    name: offerName,
                })
                .parent(),
        offerName: (offerName: string) =>
            cy.findByRole('cell', {
                name: offerName,
            }),
        offerPrice: (offerPrice: string) =>
            cy.findByRole('cell', {
                name: offerPrice,
            }), // accesible within orderRow
        offerQuantity: () => cy.findByRole('combobox'), // accesible within orderRow
        // Order cart Buttons
        addOfferButton: () => cy.findByRole('button', { name: /add offer/i }),
        placeOrderButton: () =>
            cy.findByRole('button', { name: /place order/i }),
        // User's subscription cart buttons
    },
    usersSubscriptionCart: {
        addNewPlanButton: () =>
            cy.findByRole('button', {
                name: /add plan/i,
            }),
        searchPlanInputField: () => cy.findByRole('textbox'),
        addPlanWidgetButton: () =>
            cy.findByRole('button', {
                name: /add plan/i,
            }),
        planName: (planName: string) =>
            cy.findByRole('cell', {
                name: planName,
            }),
        planRow: (planName: string) =>
            cy
                .findByRole('cell', {
                    name: planName,
                })
                .parent(),
        planPrice: (planPrice: string) =>
            cy.findByRole('cell', {
                name: planPrice,
            }),
        subscribeButton: () =>
            cy.findByRole('button', {
                name: /subscribe/i,
            }),
    },

    // Order details -> Payments
    paymentsSection: {
        heading: () => cy.findByRole('heading', { name: /payments/i }),
        // Payments Table
        paymentId: () => cy.get('[aria-colindex="1"] > a'),
        paymentAmount: (amount: string) =>
            cy.findByRole('cell', {
                name: amount,
            }),
        paymentStatus: (status: string) =>
            cy.findByRole('cell', { name: new RegExp(status, 'i') }),
    },

    // Section cards
    // Static locator, no need for it to be a function
    cardBody: '.card-body',

    // Order details -> User's Active Subscriptions
    subscriptionsSection: {
        heading: () =>
            cy.findByRole('heading', { name: /user's active subscriptions/i }),
        // Subscriptions Table
        subscriptionId: () => cy.get('[aria-colindex="1"] span'),
        subscriptionAmount: (amount: string) =>
            cy.findByRole('cell', {
                name: amount,
            }),
        subscriptionStatus: () => cy.get('[aria-colindex="4"] span'),
        cancelSubscriptionButton: () =>
            cy.findByRole('button', {
                name: /cancel/i,
            }),
        restoreSubscriptionButton: () =>
            cy.findByRole('button', {
                name: /restore/i,
            }),
    },

    // Order details -> Refunds
    refundsSection: {
        heading: () => cy.findByRole('heading', { name: /refunds/i }),
    },

    // Order details -> Add Offer
    addOfferWidget: {
        // Add Offer Tabs
        navigationTab: (tabName: string) =>
            cy.findByRole('tab', { name: new RegExp(tabName, 'i') }),
        // Add Offer Fields
        searchOfferField: () =>
            cy.findByPlaceholderText(/search by name or sku/i),
        searchBundleField: () =>
            cy.findByPlaceholderText(/search by title or description/i),
        // Offers Table
        offerRow: (offerName: string) =>
            cy
                .findByRole('cell', {
                    name: offerName,
                })
                .parent(),
        offerName: (offerName: string) =>
            cy.findByRole('cell', {
                name: offerName,
            }),
        // Add Offer Buttons
        addOfferButton: () => cy.findByRole('button', { name: /add offer/i }), // accesible within offerRow
        addBundleButton: () => cy.findByRole('button', { name: /add bundle/i }), // accesible within offerRow
        confirmButton: () => cy.findByRole('button', { name: /ok/i }),
        cancelButton: () => cy.findByRole('button', { name: /cancel/i }),
    },
    // Order details -> Add Address
    addAddressWidget: {
        addAddressModal: () =>
            cy.findByRole('dialog', {
                name: /add address/i,
            }),
        // Add Address Fields
        nameField: () => cy.findByRole('textbox', { name: /name/i }),
        phoneField: () => cy.findByRole('textbox', { name: /phone/i }),
        addressField: () => cy.findByPlaceholderText('Enter address'),
        address2Field: () => cy.findByRole('textbox', { name: /address 2/i }),
        countryField: () => cy.findByRole('combobox', { name: /country/i }),
        stateField: () => cy.findByRole('combobox', { name: /state/i }),
        cityField: () => cy.findByRole('textbox', { name: /city/i }),
        zipCodeField: () => cy.findByRole('textbox', { name: /zip code/i }),
        // Add Address Buttons
        confirmButton: () => cy.findByRole('button', { name: /ok/i }), // accesible within addAddressModal
        cancelButton: () => cy.findByRole('button', { name: /cancel/i }), // accesible within addAddressModal
    },
    // Order details -> Manage Addresses
    manageAddressWidget: {
        // Addresses Table
        addressRow: (addressName: string) =>
            cy
                .findByRole('cell', {
                    name: addressName,
                })
                .parent(),
        addressName: (addressName: string) =>
            cy.findByRole('cell', {
                name: addressName,
            }),
        addressField: (addressFieldValue: string) =>
            cy.findByRole('cell', {
                name: addressFieldValue,
            }), // accesible within addressRow
        // Manage Addresses Buttons
        newAddressButton: () =>
            cy.findByRole('button', { name: /new address/i }),
        confirmButton: () => cy.findByRole('button', { name: /ok/i }),
        cancelButton: () => cy.findByRole('button', { name: /cancel/i }),
        useAddressButton: () =>
            cy.findByRole('button', { name: /use address/i }), // accessible within addressRow
        editAddressButton: () =>
            cy.findByRole('button', { name: /edit address/i }), // accessible within addressRow
    },
    // Order details -> Process Payment
    processPaymentWidget: {
        cardNumber: () =>
            cy
                .iFrame('#braintree-hosted-field-number')
                .find('#credit-card-number'),
        cardExpirationDate: () =>
            cy
                .iFrame('#braintree-hosted-field-expirationDate')
                .find('#expiration'),
        cardCvv: () => cy.iFrame('#braintree-hosted-field-cvv').find('#cvv'),
        cardPostalCode: () =>
            cy
                .iFrame('#braintree-hosted-field-postalCode')
                .find('#postal-code'),
        submitPaymentButton: () =>
            cy.findByRole('button', { name: /submit payment/i }),
        cancelPaymentButton: () => cy.findByRole('button', { name: /cancel/i }),
    },
};

export default ordersPageLocators;
