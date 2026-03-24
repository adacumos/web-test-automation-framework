const leOffersPageLocators = {
    cancelButton: () => cy.findByText(/cancel/i),
    updateContinueEditingButton: () =>
        cy.findByText(/update & continue editing/i),
    createAndAddAnotherButton: () =>
        cy.findByRole('button', { name: /create & add another/i }),

    offersLandingPage: {
        createOffer: () => cy.get('a.btn-primary[href*="/offers/new"]'),
        // table headers
        sortOfferID: () => cy.findByText(/id/i),
        sortOfferTitle: () => cy.findByText(/title/i),
        sortOfferSku: () => cy.findByText(/sku/i),
        offerCreatedby: () => cy.findByText(/created at/i),
        offerPlan: () => cy.findByText(/plan/i),
        // offers table rows
        trOfferID: (offerID: number) =>
            cy.findByRole('link', { name: `${offerID}` }),
    },

    offerDetailsPage: {
        offerDetailsHeader: () =>
            cy.findByRole('heading', { name: /offer details/i }),

        offerID: () => cy.findByRole('heading', { name: /id/i }),
        offerTitle: () => cy.findByRole('heading', { name: /title/i }),
        offerSku: () => cy.findByRole('heading', { name: /sku/i }),
        offerDescription: () =>
            cy.findByRole('heading', { name: /description/i }),
        offerCreatedAt: () => cy.findByRole('heading', { name: /created at/i }),
        offerUpdatedAt: () => cy.findByRole('heading', { name: /updated at/i }),
        offerPlan: () => cy.findByRole('heading', { name: /plan/i }),
        offerRoute: () => cy.findByRole('heading', { name: /route/i }),
        offerSalesFunnels: () => cy.contains('h4.text-80', 'Sales Funnels'),
    },

    // details page buttons
    deleteOfferButton: () =>
        leOffersPageLocators.offerDetailsPage
            .offerDetailsHeader()
            .next()
            .then((buttons) => {
                cy.wrap(buttons).find('button[data-testid=open-delete-modal]');
            }),

    editOfferButton: () =>
        leOffersPageLocators.offerDetailsPage
            .offerDetailsHeader()
            .next()
            .then((buttons) => {
                cy.wrap(buttons).find('a[data-testid=edit-resource]');
            }),

    viewOfferPrices: {
        createPriceButton: () => cy.get('a.btn-primary[href*="/prices/new"]'),
        offerAmount: () => cy.get('td span[via-resource=offers]'),

        priceDetailsAmount: () =>
            cy.contains('div h4', 'Amount').parent().next(),
        priceDetailsOfferLink: (title: string) =>
            cy.findByRole('link', { name: new RegExp(title, 'i') }),
    },

    editOfferPage: {
        offerTitle: () => cy.get('input[id=title]'),
        offerSku: () => cy.get('input[id=sku]'),
        offerDescription: () => cy.get('textarea[id=description]'),
        offerPlan: () => cy.findByTestId('plans-search-input'),
        offerRoute: () => cy.findByTestId('routes-search-input'),
        searchTextBox: () => cy.findByRole('textbox'),
        offerSalesFunnels: () => cy.findByRole('combobox'),
        addNewMedia: () => cy.findByText(/add new media/i),
        updateOfferButton: () => cy.contains('button span', 'Update Offer'),
    },

    updatePrice: {
        updateAmount: () => cy.get('input[id=amount]'),
        updatePriceButton: () => cy.contains('button span', 'Update Price'),
    },

    addOfferPage: {
        offerTitle: () => cy.get('input[id=title]'),
        offerSku: () => cy.get('input[id=sku]'),
        offerDescription: () => cy.get('textarea[id=description]'),
        offerPlan: () => cy.findByTestId('plans-search-input'),
        offerRoute: () => cy.findByTestId('routes-search-input'),
        searchTextBox: () => cy.findByRole('textbox'),
        offerSalesFunnels: () => cy.findByRole('combobox'),
        addNewMedia: () => cy.findByText(/add new media/i),

        // action buttons
        createOffer: () => cy.contains('button span', 'Create Offer'),
    },
    createNewPrice: {
        newAmount: () => cy.get('input[id=amount]'),
        offerTitle: () => cy.get('select[dusk="priceable-select"]'),
        createPriceButton: () =>
            cy.findByRole('button', { name: /create price/i }),
    },
    attachOffer: {
        offer: () => cy.get('select[data-testid="offers-select"]'),
        quantity: () => cy.findByRole('spinbutton', { name: /quantity/i }),
        attachOfferButton: () => cy.contains('button span', 'Attach Offer'),
    },

    tablRelations: {
        Orders: {
            orderOfferRelation: (offerTitle: string) =>
                cy.findByRole('cell', { name: new RegExp(offerTitle, 'i') }),
        },
        Discounts: {},
    },
    // temporary locator for order details
    orderOffersPage: {
        orderOffers: (offerTitle: string) =>
            cy.findByRole('link', { name: new RegExp(offerTitle, 'i') }),
        orderOfferID: () => cy.get('td:nth-child(2) a'),
    },
};
export default leOffersPageLocators;
