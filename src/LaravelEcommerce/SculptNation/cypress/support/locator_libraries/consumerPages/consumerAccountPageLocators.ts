const consumerAccountPageLocators = {
    recentOrdersButton: () =>
        cy.findByRole('link', {
            name: /recent orders/i,
        }),
    shippingAndBillingLink: () =>
        cy.findByRole('link', { name: /shipping and billing addresses/i }),
    editAccoutDetails: () =>
        cy.findByRole('link', {
            name: /edit your password and account details/i,
        }),
    subscriptionsButton: () =>
        cy.findByRole('link', { name: /subscriptions/i }),
    welcomeContent: () => cy.get('.account-content'),
    dashboardMenuButton: () => cy.findByRole('link', { name: /dashboard/i }),
    myAccountMenu: (menu: string) =>
        cy.get(`.nav-container a[href*="${menu.toLowerCase()}"]`),

    logoutMenuButton: () => cy.contains('span.side-bar__link', 'Logout'),
    confirmLogoutButton: () => cy.findByRole('button', { name: /ok/i }),
    cancelLogoutButton: () => cy.findByRole('button', { name: /cancel/i }),
    tableRecords: () => cy.get('.base-table>tr'),
    orderIdLink: (orderNumber: string) =>
        cy.get(`a[href*='${orderNumber}']`).eq(0),
    orderIdStatus: () => cy.get('td:nth-child(3)'),
    viewButton: () => cy.findByRole('button', { name: /view/i }),
    logoutDropdownButton: () => cy.get('.dropdown-right'),
    logoutButton: () => cy.get('a').contains('Logout'),

    // Self-Refund
    requestsButton: (index: number) =>
        cy.findByRole('button', { name: /requests/i }).eq(index),
    requestsButtons: (index: number) => cy.get('#requests').eq(index),
    refundMenuItem: (index: number) =>
        cy.findByRole('menuitem', { name: /refund/i }).eq(index),
    returnMenuItem: (index: number) =>
        cy.findByRole('menuitem', { name: /return/i }).eq(index),

    refundDialog: {
        card: () => cy.get('.card-body'),
        refundAmount: () => cy.get('p > div > div > label > div'),
        checkBox: () => cy.get('p > div > div > input[type="checkbox"]'),
        cancelSubscriptionCheckBox: () =>
            cy.get('div > div > div > input[type="checkbox"]'),
        refundReason: () => cy.findByRole('combobox'),
        refundButton: () => cy.findByRole('button', { name: /refund/i }),
        confirmationText: () =>
            cy.findByText('Your refund has been successfully processed!'),
        okButton: () => cy.findByRole('button', { name: /Ok/i }),
        cancelButton: () => cy.findByRole('button', { name: /cancel/i }),
    },

    returnDialog: {
        card: () => cy.get('.card-body'),
        totalRefund: () => cy.get('p > div > div > label > div'),
        checkBox: () => cy.get('p > div > div > input[type="checkbox"]'),
        returnReason: () => cy.findByRole('combobox'),
        refundedText: () => cy.findByText('Product has already been refunded'),
        returnButton: () =>
            cy.findByRole('button', { name: /initiate return/i }),
        refundButton: () => cy.findByRole('button', { name: /take refund/i }),
        cancelButton: () => cy.findByRole('button', { name: /cancel/i }),
    },

    initiateReturnDialog: {
        checkBox: () => cy.get('#__BVID__225'),
        returnReason: () => cy.findByRole('combobox'),
        returnButton: () => cy.findByRole('button', { name: /return/i }),
    },
    // Orders page
    ordersPage: {
        itemtOrderRow: (index: number) =>
            cy.get(`table > tr:nth-child(${index + 1})`),
        orderDate: () => cy.contains('tr>td', 'Placed on').next(),
        orderStatus: () => cy.contains('tr>td', 'Status').next(),
        orderItem: (productName: string) =>
            cy.contains('td>span', `${productName}`),
        orderTotal: () =>
            cy.contains(':nth-child(4) :nth-child(5) th', 'Total (USD)').next(),
    },

    // Subscriptions page
    subscriptionsPage: {
        header: () => cy.contains('h2', 'Subscriptions'),
        subscriptionRow: (index: number) =>
            cy.get(`table > tr:nth-child(${index + 1})`),
        viewButton: () =>
            cy.findByRole('button', {
                name: /view/i,
            }),
        subscriptionNumber: () =>
            cy.get('.account-content h2:nth-child(1)').eq(0),
        subscriptionTotal: {
            productNameAndPriceRow: () =>
                cy.get(' table:nth-child(4) > tr:nth-child(2)'),
        },
        cancelButton: () =>
            cy.findByRole('button', {
                name: /cancel/i,
            }),
        cancelConfirmationButton: () =>
            cy.findByRole('button', {
                name: /ok/i,
            }),
        subscriptionCancellationSuccessMessage: (number: string) =>
            cy.findByText(
                new RegExp(
                    `subscription ${number} was cancelled successfully.`,
                    'i'
                )
            ),
        subscriptionStatus: () => cy.contains('tr>td', 'Status').next(),
        startDate: () => cy.contains('tr>td', 'Start Date').next(),
        nextPaymentDate: () => cy.contains('tr>td', 'Next Billing Date').next(),
        orderItem: (productName: string) =>
            cy.contains('tr>td', `${productName}`),
        orderTotal: () =>
            cy.contains(':nth-child(4) :nth-child(5) th', 'Total (USD)').next(),
    },

    // Addresses page
    addressesPage: {
        billingAddress: () =>
            cy.findByRole('heading', { name: /billing address/i }),
        billingAddressDetails: () => cy.get('div:nth-child(1) > address'),

        shippingAddress: () =>
            cy.findByRole('heading', { name: /shipping address/i }),
        shippingAddressDetails: () => cy.get('div:nth-child(2) > address'),

        editAddressLink: (addressType: string) =>
            cy.get(`.title a[href*="/${addressType}"]`),
    },

    // Accounts Details page
    accountDetailsPage: {
        firstName: () => cy.findByRole('textbox', { name: /first name/i }),
        lastName: () => cy.findByRole('textbox', { name: /last name/i }),
        email: () => cy.findByRole('textbox', { name: /email/i }),
        countryCode: () => cy.get('input.country-selector__input'),
        phoneGroup: () =>
            cy.get('#sms-phone-number-group').should('be.visible'),
        phoneNumber: () => cy.get('#sms'),
        smsOptIn: (value: boolean) =>
            cy.get(`input[name=sms-opt-in][value=${value}]`),

        // password change
        currentPassword: () => cy.findByLabelText(/current password/i),
        newPassword: () => cy.get('#new-password'),
        confirmPassword: () => cy.findByLabelText(/confirm new password/i),
        saveChangesButton: () =>
            cy.findByRole('button', { name: /save changes/i }),
    },

    // Update Payment page
    updatePaymentPage: {
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

        updatePaymentButton: () =>
            cy.findByRole('button', { name: /update payment/i }),
    },
    vsMemberAccountPage: {
        menuList: (menuItem: string) => cy.contains(menuItem),
        stopImpersonatingLink: () =>
            cy.findByRole('link', { name: /stop impersonating/i }),
        memberProfileLink: () => cy.findByRole('link', { name: /profile/i }),
        adminDashboardLink: () =>
            cy.findByRole('link', { name: /admin dashboard/i }),
        productImage: {
            supplementGuideImage: () => cy.get('img[src*="supplement-guide"]'),
            vsuImage: () => cy.get('img[src*="VSU"]'),
            customPlanImage: () => cy.get('img[src*="custom-plan.jpg"]'),
            customTrainingPlanImage: () =>
                cy.get('img[src*="custom-diet-and-training-plan"]'),
            sixPackShredImage: () => cy.get('img[src*="six-pack-shred"]'),
            fatLossExtremeHimImage: () =>
                cy.get('img[src*="fat-loss-extreme"]'),
            bigArmsImage: () => cy.get('img[src*="big-arms-program"]'),
            cleanBulkImage: () => cy.get('img[src*="clean-bulk-program"]'),
            ripped90DImage: () => cy.get('img[src*="ripped-in-90-days"]'),
            bootyBuilderImage: () => cy.get('img[src*="the-booty-builder"]'),
            toned90DImage: () => cy.get('img[src*="toned-in90-days"]'),
            fatLossExtremeHerImage: () =>
                cy.get('img[src*="fat-loss-extreme-f"]'),
            recipeGuideImage: () =>
                cy.get('img[src*="happy-gut-recipe-guide"]'),
        },

        filloutCustomPlanQuestionnaireButton: () =>
            cy.findByRole('button', {
                name: /fill out custom plan coaching questionnaire|fill out custom plan questionnaire/i,
            }),
        filloutAcceleratorProgramQuestionnaireButton: () =>
            cy.findByRole('button', {
                name: /fill out vshred accelerator questionnaire|fill out vshred accelerator questionnaire/i,
            }),

        memberProfile: {
            editProfileButton: () =>
                cy.findByRole('link', { name: /edit profile/i }),
            questionnaireButton: () => cy.get('#questionnaire'),
            profileForm: () => cy.get('#account-profile > form > div'),
            memberName: () => cy.findByRole('textbox', { name: /name*/i }),
            memberEmail: () => cy.findByRole('textbox', { name: /email*/i }),
            memberGender: () => cy.findByRole('combobox', { name: /gender*/i }),
            birthDate: () => cy.get('#profile-birthday'),
            heightFeet: () => cy.get('#height_1'),
            heightInch: () => cy.get('#height_2'),
            weight: () => cy.get('#profile-weight'),
            fitnessActivity: (activity: string) =>
                cy.get(`input[name=activity][id=${activity}]`),
            fitnessGoal: () =>
                cy.get('input[name=condition_goal][id=fat-loss]'),
            saveProfileButton: () =>
                cy.findByRole('button', { name: /save profile/i }),

            closeMessageBox: () =>
                cy.get('.modal-container.modal-active .modal-close-cross'),
            completeMemberProfileBanner: () =>
                cy.findByRole('heading', {
                    name: /please complete your profile/i,
                }),
            getConnectedwithCoachBanner: () =>
                cy.findByRole('heading', {
                    name: /get connected with a coach!/i,
                }),
            purchasesLink: () => cy.findByRole('link', { name: /purchases/i }),
            logoutProfileLink: () => cy.findByRole('link', { name: /logout/i }),
        },
        toastMessage: () => cy.get('.toast-message'),
        memberPrograms: {
            customPlan: () => cy.get('img[src*="custom-plan"]'),
            dietAndTrainingPlan: () =>
                cy.get('img[src*="custom-diet-and-training-plan"]'),
            acceleratorPlan: () => cy.get('img[src*="accelerator-program"]'),
            eliteProgram: () => cy.get('img[src*="elite-program"]'),
        },
    },
};

export default consumerAccountPageLocators;
