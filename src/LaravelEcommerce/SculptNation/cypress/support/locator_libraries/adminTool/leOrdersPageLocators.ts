const leOrdersPageLocators = {
    cancelButton: () => cy.findByText(/cancel/i),
    updateContinueEditingButton: () =>
        cy.findByText(/update & continue editing/i),
    createAndAddAnotherButton: () =>
        cy.findByRole('button', { name: /create & add another/i }),

    tableHeader: (columnName: string) => cy.contains('th span', columnName),
    editOrderButton: () =>
        leOrdersPageLocators.ordersDetailsPage
            .orderDetailsHeader()
            .next()
            .then((buttons) => {
                cy.wrap(buttons).find('a[data-testid=edit-resource]');
            }),
    ordersLandingPage: {
        createNewOrderButton: () =>
            cy.findByRole('link', { name: /create order/i }),
        orderId: () => cy.get('td:nth-child(2) a'),

        refundOrderButton: () =>
            cy.findByRole('button', { name: /refund entire order/i }),
        searchOrder: () =>
            cy.get(
                '[dusk="orders-index-component"] [data-testid="search-input"]'
            ),
    },

    ordersDetailsPage: {
        orderDetailsHeader: () =>
            cy.findByRole('heading', { name: /order details/i }),
        orderID: () => cy.contains('h4.text-80', 'ID'),
        baseCurrencyAmount: () =>
            cy.findByRole('heading', { name: /base currency amount/i }),
        amount: () => cy.contains('h4.text-80', 'Amount'),
        refunded: () => cy.findByRole('heading', { name: /refunded/i }),
        baseCurrencySubtotal: () =>
            cy.findByRole('heading', { name: /base currency subtotal/i }),
        subtotal: () => cy.contains('h4.text-80', 'Subtotal'),
        cogsAmount: () => cy.findByRole('heading', { name: /cogs amount/i }),
        status: () => cy.contains('h4.text-80', 'Status'),
        checkoutDate: () =>
            cy.findByRole('heading', { name: /checked out at/i }),
        paidAtDate: () => cy.findByRole('heading', { name: /paid at/i }),
        user: () => cy.contains('h4.text-80', 'User'),
        shippingCategory: () =>
            cy.findByRole('heading', { name: /shipping category/i }),
        billingAddress: () =>
            cy.findByRole('heading', { name: /billing address/i }),
        shippingAddress: () =>
            cy.findByRole('heading', { name: /shipping address/i }),
        fraudulentFlag: () => cy.findByRole('heading', { name: /fraudulent/i }),
        siftStatusFlag: () =>
            cy.findByRole('heading', { name: /sift status/i }),
        created3PartyFlag: () =>
            cy.findByRole('heading', { name: /created on 3rd party site/i }),
    },

    ordersEditPlansPage: {
        // read-only
        baseCurrencyAmount: () =>
            cy.findByRole('spinbutton', { name: /base currency amount/i }),
        amount: () => cy.findByRole('spinbutton', { name: /amount/i }),
        refunded: () => cy.findByRole('spinbutton', { name: /refunded/i }),
        baseCurrencySubtotal: () =>
            cy.findByRole('spinbutton', { name: /base currency subtotal/i }),
        subtotal: () => cy.findByRole('spinbutton', { name: /subtotal/i }),

        // enabled for edit
        status: () => cy.findByRole('combobox', { name: /status/i }),
        user: () => cy.get('div[data-testid="users-search-input"]'),
        subscription: () =>
            cy.get('select[data-testid="subscriptions-select"]'),
        shippingCategory: () =>
            cy.get('div[data-testid="shipping-categories-search-input"]'),
        billingAddress: () => cy.get('select[select[dusk=billingAddress]'),
        shippingAddress: () => cy.get('select[dusk="shippingAddress"]'),

        updateOrderButton: () =>
            cy.findByRole('button', { name: /update order/i }),
    },
    orderOffers: {
        orderID: () => cy.get('tr:nth-child(1) > td:nth-child(2)'),
        offer: () => cy.get('tr:nth-child(1) > td:nth-child(3)'),
        appliedDiscount: () => cy.get('tr:nth-child(1) > td:nth-child(4)'),
        subscription: () => cy.get('tr:nth-child(1) > td:nth-child(5)'),
        baseCurrencyAmount: () => cy.get('tr:nth-child(1) > td:nth-child(6)'),
        amount: () => cy.get('tr:nth-child(1) > td:nth-child(7)'),
        discountedAmount: () => cy.get('tr:nth-child(1) > td:nth-child(8)'),
        taxAmount: () => cy.get('tr:nth-child(1) > td:nth-child(9)'),
        quantity: () => cy.get('tr:nth-child(1) > td:nth-child(10)'),
        type: () => cy.get('tr:nth-child(1) > td:nth-child(11)'),
        amountRefunded: () => cy.get('tr:nth-child(1) > td:nth-child(12)'),
        refundable: () => cy.get('tr:nth-child(1) > td:nth-child(13)'),
    },
    orderInvoices: {
        baseCurrencyAmount: () => cy.get('table td:nth-child(2) > span'),
        amount: () => cy.get('table td:nth-child(3) > span'),
        status: () => cy.get('table td:nth-child(4) > span'),
        paidAtDate: () => cy.get('table td:nth-child(6) span:nth-child(1)'),
        createdAtDate: () => cy.get('table td:nth-child(7) span:nth-child(1)'),
    },
    orderPayments: {
        paymentID: () => cy.get('div.payments [via-resource="orders"]').eq(0),
        amount: () => cy.get('div.payments [via-resource="orders"]').eq(1),
        amountRefunded: () =>
            cy.get('div.payments [via-resource="orders"]').eq(2),
        netRevenue: () => cy.get('div.payments [via-resource="orders"]').eq(3),
        status: () => cy.get('div.payments [via-resource="orders"]').eq(4),
        transactionReference: () =>
            cy.get('div.payments [via-resource="orders"]').eq(5),
        gateway: () => cy.get('div.payments [via-resource="orders"]').eq(6),
        createdAt: () => cy.get('div.payments [via-resource="orders"]').eq(7),
        orderId: () => cy.get('div.payments [via-resource="orders"]').eq(8),
    },
    orderShipments: {
        shipmentID: () => cy.get('table td:nth-child(1) a'),
        referenceNumber: () => cy.get('td:nth-child(3) div span'),
        shipmentStatus: () => cy.get('td:nth-child(5) div span').eq(2),
        shippingCategory: () =>
            cy.get('span a[href*="resources/shipping-categories"]'),
    },
};

export default leOrdersPageLocators;
