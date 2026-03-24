const leCheckoutFormsPageLocators = {
    deleteResource: () => cy.get('button[data-testid="open-delete-modal"]'),
    bumperTemplatePage: {
        createBumperTemplateButton: () =>
            cy.findByRole('link', { name: /create bumper template/i }),
        templateInputBox: () =>
            cy.findByRole('combobox', { name: /template*/i }),
        viewDetails: {
            templateID: () => cy.findByRole('heading', { name: /id/i }),
            templateName: () => cy.findByRole('heading', { name: /template/i }),
        },
    },
    bumperPage: {
        createBumperButton: () =>
            cy.findByRole('link', { name: /create bumper/i }),
        viewDetails: {
            bumperID: () => cy.findByRole('heading', { name: /id/i }),
            bumperName: () => cy.findByRole('heading', { name: /name/i }),
            mediaGallery: () => cy.get('div.gallery-item-image'),
            bumperOffer: () => cy.findByRole('heading', { name: /offer/i }),
            bumperTemplate: () => cy.contains('h4.text-80', 'Template'),
            bumperOptions: () =>
                cy.findByRole('heading', { name: /template options/i }),
        },
        createBumper: {
            bumperNameInputBox: () =>
                cy.findByRole('combobox', { name: /name/i }),
            addMediaButton: () => cy.get('#__media__avatar'),
            configureOffer: () => cy.get('[data-testid="offers-select"]'),
            withTrashedOfferCheckbox: () =>
                cy.get('[dusk = "offers-with-trashed-checkbox"]'),
            configureTemplate: () =>
                cy.get('[data-testid="bumper-templates-select"]'),
            withTrashedTemplatesCheckbox: () =>
                cy.get('[dusk = "bumper-templates-with-trashed-checkbox"]'),
            templateOption: () => cy.get('.CodeMirror-line[role]'),
        },
    },
    carouselPage: {
        createCarouselButton: () =>
            cy.findByRole('link', { name: /create carousel/i }),

        viewDetails: {
            carouselID: () => cy.findByRole('heading', { name: /id/i }),
            carouselName: () => cy.findByRole('heading', { name: /name/i }),
            mediaGallery: () => cy.get('div.gallery-item-image'),
            description: () => cy.contains('h4.text-80', 'Description'),
        },
        createCarousel: {
            carouselNameInputBox: () =>
                cy.findByRole('combobox', { name: /name/i }),
            addMediaButton: () => cy.get('#__media__default'),
            description: () =>
                cy.findByRole('combobox', { name: /description/i }),
        },
    },

    reviewPage: {
        createReviewButton: () =>
            cy.findByRole('link', { name: /create review/i }),
        viewDetails: {
            reviewID: () => cy.findByRole('heading', { name: /id/i }),
            reviewName: () => cy.findByRole('heading', { name: /name/i }),
            reviewComment: () => cy.findByRole('heading', { name: /comment/i }),
            mediaGallery: () => cy.get('div.gallery-item-image'),
        },
        createReview: {
            reviewNameInputBox: () =>
                cy.findByRole('combobox', { name: /name/i }),
            commentInputBox: () =>
                cy.findByRole('combobox', { name: /comment/i }),
            addMediaButton: () => cy.get('#__media__avatar'),
            rating: () => cy.findByRole('spinbutton', { name: /rating*/i }),
        },
    },
};
export default leCheckoutFormsPageLocators;
