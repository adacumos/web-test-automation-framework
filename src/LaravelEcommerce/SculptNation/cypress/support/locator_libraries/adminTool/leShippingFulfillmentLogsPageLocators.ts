const leShippingFulfillmentLogsPageLocators = {
    fulfillmentLogsLandingPage: {
        fulfillmentLogID: () => cy.get('td:nth-child(2) a'),
    },

    fulfillmentLogDetailsPage: {
        fulfillmentLogDetailsHeader: (fulfillmentLogID: string) =>
            cy.findByRole('heading', {
                name: new RegExp(
                    `Fulfillment Log Details: ${fulfillmentLogID}`,
                    'i'
                ),
            }),
        fulfillmentLogID: () => cy.findByRole('heading', { name: /id/i }),
        service: () => cy.findByRole('heading', { name: /service/i }),
        hasErrors: () => cy.findByRole('heading', { name: /has errors/i }),
        payload: () => cy.findByRole('heading', { name: /payload/i }),
        response: () => cy.findByRole('heading', { name: /response/i }),
        logAttribute: (attributeName: string) =>
            cy.contains('span.cm-attribute', `${attributeName}`),
    },
};
export default leShippingFulfillmentLogsPageLocators;
