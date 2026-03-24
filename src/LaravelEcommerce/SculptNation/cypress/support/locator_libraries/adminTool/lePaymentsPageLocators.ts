const lePaymentsPageLocators = {
    paymentsLandingPage: {
        graphTitle: (graphTitle: string) => cy.contains('h3.mr-3', graphTitle),
        createPaymentButton: () =>
            cy.findByRole('link', { name: /create payment/i }),
        paymentID: () => cy.get('td:nth-child(1) a'),
        transactionReference: () => cy.get('td:nth-child(6) span'),
        nullTransactionReference: () => cy.get('td:nth-child(6) p'),
    },

    paymentsDetailsPage: {
        paymentDetailsHeader: () =>
            cy.findByRole('heading', { name: /payment details/i }),
        paymentID: () => cy.contains('h4.text-80', 'ID'),
        baseCurrencyAmount: () =>
            cy.contains('h4.text-80', 'Base Currency Amount'),
        baseCurrencyAmountRefunded: () =>
            cy.findByRole('heading', {
                name: /base currency amount refunded/i,
            }),
        baseCurrencyNetRevenue: () =>
            cy.findByRole('heading', { name: /base currency net revenue/i }),
        amount: () => cy.contains('h4.text-80', 'Amount'),
        amountRefunded: () => cy.contains('h4.text-80', 'Amount Refunded'),
        refundedReason: () =>
            cy.findByRole('heading', { name: /refund reason/i }),
        refundedExplanation: () =>
            cy.findByRole('heading', { name: /refund explanation/i }),
        netRevenue: () => cy.contains('h4.text-80', 'Net Revenue'),
        status: () => cy.contains('h4.text-80', 'Status'),
        gatewayStatus: () =>
            cy.findByRole('heading', { name: /gateway status/i }),
        transactionReference: () =>
            cy.findByRole('heading', { name: /transaction reference/i }),
        gateway: () => cy.get(':nth-child(13) h4'),
        order: () => cy.contains('h4.text-80', 'Order'),
        invoice: () => cy.findByRole('heading', { name: /invoice/i }),
        userPaymentMethod: () =>
            cy.findByRole('heading', { name: /user payment method/i }),
    },
    userPaymentMethodDetails: {
        paymentMethodDetailsHeader: () =>
            cy.findByRole('heading', { name: /user payment method details/i }),
        paymentMethodID: () => cy.findByRole('heading', { name: /id/i }),
        paymentGateway: () => cy.findByRole('heading', { name: /gateway/i }),
        userEmail: () => cy.contains('h4.text-80', 'User'),
    },
};

export default lePaymentsPageLocators;
