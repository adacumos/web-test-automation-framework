const consumerLandingPageLocators = {
    // Generic elements
    loader: () => cy.get('.loader'),
    jwVideo: () => cy.get('div.jw-wrapper.jw-reset'),

    landingPage: {
        videoContainer: () => cy.get('.paused-overlay'),
        superSimpleVideo: () =>
            cy
                .get('.videos__text')
                .contains('SUPER SIMPLE 30-SECOND MORNING HABIT')
                .children('a'),
        moreWaysVideos: () => cy.get('.videos__text'),
    },
    sixBottleSubscription: () => cy.get('[data-one-time-price="32.50"]'),
    sixBottlePurchase: () => cy.get('[data-price="195"]').eq(0),
    sixBottleSpeedMetabolism: () =>
        cy.get('[data-one-time-price="44"]').find('button').eq(0),
    singleOptionSubscription: () => cy.findByText(/Click Here/i),
    addToCartButton: () => cy.get('a[data-dd-action-name="Add To Cart"]'),

    surveyOrderForm: {
        name: () => cy.findByPlaceholderText('Enter Your Name'),
        name2: () => cy.findByPlaceholderText('Name'),
        email: () => cy.findByPlaceholderText('Enter Your Email'),
        phone: () => cy.findByPlaceholderText('Phone Number'),
        nextStepOne: () => cy.get('.next-step.button-one', { timeout: 5000 }),
        nextStepTwo: () => cy.get('.next-step.button-two', { timeout: 500 }),
        nextStepThree: () =>
            cy.get('.next-step.button-three', { timeout: 500 }),
        shippingName: () => cy.get('input[placeholder=Name]'),
        shippingAddress1: () => cy.get('input[placeholder="Address Line 1"]'),
        shippingAddress2: () => cy.get('input[placeholder="Address Line 2"]'),
        shippingCity: () => cy.get('input[placeholder=City]'),
        shippingState: () => cy.get('.input-for-state select'),
        shippingPostalCode: () =>
            cy.get('input[placeholder="Zip or Postal Code"]'),
        shippingCountry: () => cy.get('.input-for-country select'),
        shippingPhoneNumber: () => cy.get('input[placeholder="Phone Number"]'),
        creditCardNumber: () =>
            cy
                .iFrame('#braintree-hosted-field-number')
                .find('#credit-card-number'),
        expirationMonth: () =>
            cy
                .iFrame('#braintree-hosted-field-expirationMonth')
                .find('#expiration-month'),
        expirationYear: () =>
            cy
                .iFrame('#braintree-hosted-field-expirationYear')
                .find('#expiration-year'),
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
        cdpUpsell: () => cy.get('label[for="checkbox"]'),
        submitOrderButton: () => cy.contains('button', /submit/i),
    },

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
        nextStepTwo: () => cy.get('.button-two', { timeout: 5000 }).eq(0),
        nextStepThree: () =>
            cy.get('[test-id="next-step-button-two"]', { timeout: 5000 }),
        submitOrder: () => cy.get('[id=submit-order]', { timeout: 5000 }),
        price: () => cy.get('.item-line-price-fix'),
    },
    oneBottleSubscription: () =>
        cy.get('[data-one-time-price="32.50"]').find('button'),
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
    // Product page
    productPage: {
        productName: () => cy.get('h1.product-name'),
        originalPrice: () => cy.get('.price-original'),
        discountedPrice: () => cy.get('.price-discounted'),
        buyNowButton: () =>
            cy.findByRole('link', {
                name: /buy now/i,
            }),
        buyNow: () => cy.contains('buy now'),
        buyNowForUltimateBurn: () =>
            cy
                .get(
                    ':nth-child(5) > .packages11__totalContainer > :nth-child(3)'
                )
                .find(
                    ' > .packages11__item--footer > .packages11__item--footer__cta > div'
                ),
        get53off: () => cy.findAllByText(/Get 53% Off Today/i).eq(0),
        classHeader: () => cy.get('.card-header'),
        bottlePrices: (index: number) =>
            cy
                .get('div.current-price')
                .eq(index)
                .find('.price > span:nth-child(1)'),
        autoRefillCheckbox: () =>
            cy.findByText(/autorefill price – best value!/i),
        oneTimeDeliveryCheckbox: () =>
            cy.findAllByText(/one-time delivery price/i).eq(0),
        subscribeNowButton: () => cy.contains('Subscribe Now'),
        addBottleToCartButton: () => cy.get('button').contains('ADD TO CART'),
        addToCartButton: () => cy.findByText(/add to cart/i),
        addToCartOneBottleButton: () => cy.findAllByText(/add to cart/i).eq(0),
        addToCartSixBottleButton: () => cy.findAllByText(/add to cart/i).eq(0),
        addToCartThreeBottleButton: () =>
            cy.findAllByText(/add to cart/i).eq(1),
        dismissOfferButton: () => cy.get('a.red'),
        upgradeOrderButton: () =>
            cy.findAllByText(/yes! upgrade my order/i).eq(0),
        selectFlavorDropdown: () => cy.get('.custom-select.custom-select-lg'),
        lePageMoveSpeedUpMyMetabolismOneBottleButton: () =>
            cy.findAllByText(/speed up my metabolism/i).eq(0),
        lePageMoveMyMetabolismSixBottleButton: () =>
            cy.findAllByText(/speed up my metabolism/i).eq(1),
        lePageMoveMyMetabolismThreeBottleButton: () =>
            cy.findAllByText(/speed up my metabolism/i).eq(2),
        speedUpMyMetabolismOneBottleButton: () =>
            cy.findAllByText(/speed up my metabolism/i).eq(0),
        speedUpMyMetabolismSixBottleButton: () =>
            cy.findAllByText(/speed up my metabolism/i).eq(0),
        speedUpMyMetabolismThreeBottleButton: () =>
            cy.findAllByText(/speed up my metabolism/i).eq(1),
        skyrocketMyManhoodOneBottleButton: () =>
            cy.findAllByText(/skyrocket my manhood/i).eq(0),
        skyrocketMyManhoodSixBottleButton: () =>
            cy.findAllByText(/skyrocket my manhood/i).eq(0),
        skyrocketMyManhoodThreeBottleButton: () =>
            cy.findAllByText(/skyrocket my manhood/i).eq(1),
        addToCartOneTubButton: () => cy.findAllByText(/add to cart/i).eq(0),
        addToCartSixTubButton: () => cy.findAllByText(/add to cart/i).eq(1),
        addToCartThreeTubButton: () => cy.findAllByText(/add to cart/i).eq(2),
        declineLink: () =>
            cy.contains(
                'a, .decline, u',
                /no thanks|i decline this offer|I understand/i
            ),
        upgradeOfferButton: () =>
            cy.contains(
                '.scroll, button.site-btn, a.site-btn',
                /add to my order|add to order|add to cart|click here|upgrade My Order|yes!|claim membership|now!|yes, I want this/i
            ),
        subscribeOfferButton: () =>
            cy.contains('button.site-btn, a.site-btn', /subscribe now/i),
        oneBottleHeader: () => cy.contains('h3', /one bottle|1 bottle/i),
        twoBottleHeader: () => cy.contains('h3', /2 bottles/i),
        threeBottleHeader: () => cy.contains('h3', /three bottle|3 bottles/i),
        fourBottleHeader: () => cy.contains('h3', /4 bottles/i),
        sixBottleHeader: () => cy.contains('h3', /six bottle|6 bottles/i),
        bundleContainer: () => cy.get('#end_hero > .container > .optionsv2'),
        oneBunddle: () => cy.findByText(/1 bottle/i),
        threeBunddle: () => cy.findByText(/3 bottles/i),
        sixBunddle: () => cy.findByText(/6 bottles/i),
        addToOrderButton: () =>
            cy.contains(
                'button.site-btn, a.site-btn, span, .last, #subfooter a',
                /add to order|add to cart|buy now|upgrade My Order|Speed Up My Metabolism|burn belly fat faster|skyrocket my manhood|yes!|everything|purchase|yes|get this deal|YES! I Want Instant Access For Only|Claim Offer Now/i
            ),
        addToOrder: () =>
            cy.contains(
                /add to order|add to cart|buy now|upgrade My Order|Speed Up My Metabolism|burn belly fat faster|skyrocket my manhood|yes!|everything|purchase|yes|get this deal/i
            ),
        addToOrderButton2:
            '/add to order|add to cart|buy now|upgrade My Order|Speed Up My Metabolism|burn belly fat faster|skyrocket my manhood|yes!|everything|purchase|yes|get this deal/i',
        everythingForJust67Button: () =>
            cy.findByText(/everything for just \$67.00/i),
        everythingForJust87Button: () =>
            cy.findByText(/everything for just \$87.00/i),

        claimOfferNowButtonOnFemaleFl: () =>
            cy.get('#hero > div > div.content > div > a'),
        claimOfferNowButton: () =>
            cy.contains('span,.container', /claim offer now/i),
        claimOfferNowButton2: () => cy.contains('a', /claim offer now/i),

        yes: () => cy.contains('span', /YES!/i),
        yesUpgradeMyOrderButton: () =>
            cy.get('.top-call-to-action-area > div > .site-btn'),
        getInstantAccessButton: () => cy.get('.countdown__special'),
        everythingForJust57Button: () =>
            cy.findByText(/everything for just \$57.00/i),
        agreeToPaymentTerms: () =>
            cy.findByText(
                /i agree to the payment terms of this recurring product./i
            ),
        vusPageAcceptButton: () => cy.get('div.text-center > .site-btn'),
        yesIWantToStartMyFreeMonthButton: () =>
            cy.findByRole('button', {
                name: /yes! i want to start my free month!/i,
            }),
        surveyAddProductToCart: () => cy.get('.product-add-to-cart'),
        skyrocketMyManhoodButton: () =>
            cy.get('a[data-dd-action-name="Add To Cart"]').eq(0),
    },
    mobileOrderSummaryButton: () =>
        cy.get('button.mobile-order-summary__action'),
    // new Product Page
    newProductPage: {
        subscribeOfferButton: () =>
            cy.contains('button.site-btn, a.site-btn', /subscribe now/i),
        subscriptionRadioButton: () =>
            cy.get('button[data-toggle-trigger=subscription]'),
        oneTimeDeliveryCheckbox: () =>
            cy.findAllByText(/one-time delivery price/i),
        oneBottleHeader: () => cy.contains('h4.package__title', /1 bottle/i),
        threeBottleHeader: () => cy.contains('h4.package__title', /3 bottles/i),
        sixBottleHeader: () => cy.contains('h4.package__title', /6 bottles/i),
        selectPackage: (packageOption: string) =>
            cy.contains('h4.package__title', new RegExp(packageOption, 'i')),
        clickOrderButton: (buttonName: string) =>
            cy.contains('a.package__cta', new RegExp(buttonName, 'i')),
    },

    verticalPackageButtons: {
        oneBottle: () => cy.get('label input[value=oneBottle]'),
        sixBottles: () => cy.get('label input[value=sixBottles]'),
        threeBottles: () => cy.get('label input[value=threeBottles]'),
    },
    // special Package
    specialOfferProductPage: {
        trailPackHeader: () =>
            cy.contains('.packages11__item--header__title', 'TRIAL PACK'),
        holidayStackHeader: () =>
            cy.contains('.packages11__item--header__title', 'HOLIDAY FAT'),
        ultimateBurnHeader: () =>
            cy.contains('.packages11__item--header__title', 'ULTIMATE BURN'),
        selectPackage: (packageOption: string) =>
            cy.contains(
                '.packages11__item--header__title',
                new RegExp(packageOption, 'i')
            ),
        buyNowButton: (buttonName: string) =>
            cy.contains('a div', new RegExp(buttonName, 'i')),

        declineOfferLink: () => cy.contains('a', /i decline this offer/i),
        noThanksIllPassBerberine: () =>
            cy
                .findAllByText(
                    /No Thanks - I'll Pass On My FREE Additional 4-Month Supply/i
                )
                .eq(0),
        noThanksBerberine: () => cy.findAllByText(/No Thanks/i).eq(0),
        YesGetFourMonthsBerberine: () =>
            cy.findAllByText(/YES - GET 4 MONTHS' EXTRA FOR FREE/i).eq(0),
        YesUpgrade: () => cy.contains('button', /UPGRADE MY ORDER/i).eq(0),
        StockUp: () => cy.contains('button', /STOCK UP ON/i).eq(0),
    },

    // Cart page
    cartPage: {
        productName: () =>
            cy.get(
                'tr.cart-items-table__row.d-none.d-md-table-row > td:nth-child(3)'
            ),
        productPricePerItem: () =>
            cy.get(
                'tr.cart-items-table__row.d-none.d-md-table-row > td:nth-child(4)'
            ),
        productQuantity: () =>
            cy.get(
                'tr.cart-items-table__row.d-none.d-md-table-row > td:nth-child(5) select'
            ),
        subtotal: () =>
            cy.get(
                'tr.cart-items-table__row.d-none.d-md-table-row > td:nth-child(6)'
            ),
        cartTotalPrice: () =>
            cy.get('table.table > tbody > tr:nth-child(3) > td > h5 > strong'),
        proceedToCheckoutButton: () =>
            cy.findByRole('link', {
                name: /proceed to checkout/i,
            }),
        continueShoppingButton: () =>
            cy.findByRole('link', {
                name: /continue shopping/i,
            }),
        // discount codes and table updates
        couponCode: () => cy.findByRole('textbox', { name: /coupon code/i }),
        applyCouponButton: () =>
            cy.findByRole('button', { name: /apply coupon/i }),
        successDiscountText: () => cy.contains('.text-success', 'Code applied'),
        invalidDiscountText: () =>
            cy.contains(
                '.text-danger',
                'The code you entered is invalid or expired.'
            ),
        couponCodeLabel: (couponCode: string) =>
            cy.contains('table.table > tbody th', `${couponCode}`),
        cartTotalLabel: () =>
            cy.contains('table.table > tbody th', 'Total (USD)'),
    },

    // Checkout Form V3
    checkoutV3: {
        contactInformation: {
            emailAddress: () =>
                cy.findByRole('textbox', { name: /email address/i }),
            password: () => cy.findByPlaceholderText(/create a password/i),
        },
        billingInformation: {
            firstName: () => cy.findByRole('textbox', { name: /first name/i }),
            lastName: () => cy.findByRole('textbox', { name: /last name/i }),
            addressOne: () =>
                cy.findByRole('textbox', { name: /address line 1/i }),
            addressTwo: () =>
                cy.findByRole('textbox', { name: /address line 2/i }),
            city: () => cy.findByRole('textbox', { name: /city/i }),
            postCode: () => cy.findByRole('textbox', { name: /zip code/i }),
            state: () => cy.findByRole('combobox', { name: /state/i }),
            phone: () => cy.findByRole('textbox', { name: /phone/i }),
        },
        paymentInformation: {
            creditCardNumber: () =>
                cy
                    .iFrame('#braintree-hosted-field-number')
                    .find('#credit-card-number'),
            cardHolderName: () =>
                cy
                    .iFrame('#braintree-hosted-field-cardholderName')
                    .find('#cardholder-name'),
            expirationDate: () =>
                cy
                    .iFrame('#braintree-hosted-field-expirationDate')
                    .find('#expiration'),
            securtyCode: () =>
                cy.iFrame('#braintree-hosted-field-cvv').find('#cvv'),
        },
        payNowButton: () => cy.findByRole('button', { name: /pay now/i }),
        continueToShippingButton: () => cy.findByText(/continue to shipping/i),
        continueToPaymentButton: () => cy.findByText(/continue to payment/i),
        submitOrderButton: () => cy.findByText(/submit order/i),
    },

    // Checkout page
    checkoutPage: {
        billingDetails: {
            emailAddress: () =>
                cy.findByRole('textbox', {
                    name: /email address/i,
                }),
            firstName: () =>
                cy.findByRole('textbox', {
                    name: /first name/i,
                }),
            lastName: () =>
                cy.findByRole('textbox', {
                    name: /last name/i,
                }),
            country: () =>
                cy.findByRole('combobox', {
                    name: /country/i,
                }),
            streetAddress: () =>
                cy.findByRole('textbox', {
                    name: /street address/i,
                }),
            city: () =>
                cy.findByRole('textbox', {
                    name: /town \/ city/i,
                }),
            state: () =>
                cy.findByRole('combobox', {
                    name: /state/i,
                }),
            postCode: () =>
                cy.findByRole('textbox', {
                    name: /postcode \/ zip/i,
                }),
            phone: () => cy.get('#phone-number'),
            password: () => cy.findByLabelText(/create password/i),
            shipping: () => cy.get('.mb-2'),
            alertMessage: () => cy.get('.form-alert__error'),
            shipFormTitle: () =>
                cy.contains(
                    'h4.modal-title',
                    /Tell Us Where To Ship Your Supplements/i
                ),
        },
        paymentInformation: {
            salesTax: () =>
                cy.get(
                    'table.base-table.bg-light > tbody > tr:nth-child(4) > td:nth-child(2)'
                ),
            creditCardNumber: () =>
                cy
                    .iFrame('#braintree-hosted-field-number')
                    .find('#credit-card-number'),
            expirationMonth: () =>
                cy
                    .iFrame('#braintree-hosted-field-expirationMonth')
                    .find('#expiration-month'),
            expirationYear: () =>
                cy
                    .iFrame('#braintree-hosted-field-expirationYear')
                    .find('#expiration-year'),
            securtyCode: () =>
                cy.iFrame('#braintree-hosted-field-cvv').find('#cvv'),
            placeOrderButton: () => cy.findByText(/place order/i),
        },
    },

    pageImage: {
        image: (imageName: string) =>
            cy.findAllByAltText(new RegExp(imageName, 'i')),
    },

    pageText: {
        text: (pageText: string) => cy.findByText(new RegExp(pageText, 'i')),
        product: (productText: string) => cy.contains(productText),
    },

    landingPageButtons: {
        arrowLeftButton: () => cy.get('.stories__arrow.left'),
        arrowRightButton: () => cy.get('.stories__arrow.right'),
    },
    orderConformation: {
        productTitle: () => cy.get('.item-line-title'),
        cartProductTitle: () => cy.get('.d-none > :nth-child(3)'),
        price: () => cy.get('.item-line-price-fix > strong'),
        cartPrice: () => cy.get('[style="min-width: 100px;"]'),
        clientEmail: () => cy.get('td[test-id=email]'),
        questionnaireButton: () => cy.get('button#questionnaire'),
        orderItems: (itemName: string) => cy.contains('span.h5', itemName),
        orderAmount: (itemAmount: string) => cy.contains('span.h5', itemAmount),
        bundleItems: (bundleItem: string) => cy.contains('li', bundleItem),
        lineItem: () => cy.get('span'),
        bundleContents: () => cy.get('li'),
        multiLineSixBottlePrice: () =>
            cy.get('span:visible:contains("$288.00")'),
        multiLineThreeBottlePrice: () =>
            cy.get('span:visible:contains("$195.00")'),
        test: () => cy.get('span').should('be.visible').contains('$288.00'),
        errorMessage: () => cy.get('.error > span'),
    },

    // Checkout PayPal - V4
    checkoutPayPal: {
        payPalPaymentOption: () => cy.findByRole('radio', { name: /paypal/i }),
        blackListContent: () => cy.get('.blacklist__content'),
        billingInformation: {
            billingAddressForm: () => cy.get('.address-form').eq(0),
            country: () => cy.get('select[id="country"]'),
            firstName: () => cy.findByRole('textbox', { name: /first name/i }),
            lastName: () => cy.findByRole('textbox', { name: /last name/i }),
            emailAddress: () =>
                cy.findByRole('textbox', { name: /email address/i }),
            company: () =>
                cy.findByRole('textbox', {
                    name: /company name \(optional\)/i,
                }),
            address: () =>
                cy.findByRole('textbox', { name: /address line 1/i }),
            city: () => cy.findByRole('textbox', { name: /city/i }),
            zipCode: () => cy.findByRole('textbox', { name: /zip code/i }),
            state: () => cy.findByRole('combobox', { name: /state/i }),
            phone: () => cy.findByRole('textbox', { name: /phone/i }),
        },
        shippingInformation: {
            shippingCheckBox: () =>
                cy.findByText(/shipping is the same as billing/i),
            shippingAddressForm: () => cy.get('.address-form').eq(1),
            country: () => cy.get('select[id="country"]'),
            firstName: () => cy.get('#first_name'),
            lastName: () => cy.get('#last_name'),
            company: () => cy.get('#company_name'),
            address: () => cy.get('#address'),
            city: () => cy.get('#city'),
            zipCode: () => cy.get('#postal_code'),
            state: () => cy.get('#state'),
            phone: () => cy.get('#phone_number'),
        },
        paymentInformation: {
            creditCardRadio: () =>
                cy.findByRole('radio', { name: /credit card/i }),
            payPalRadio: () => cy.findByRole('radio', { name: /paypal/i }),
            creditCardNumber: () =>
                cy
                    .iFrame('#braintree-hosted-field-number')
                    .find('#credit-card-number'),
            creditCardName: () =>
                cy
                    .iFrame('#braintree-hosted-field-cardholderName')
                    .find('#cardholder-name'),
            creditCardExpiration: () =>
                cy
                    .iFrame('#braintree-hosted-field-expirationDate')
                    .find('#expiration'),
            creditCardCVV: () =>
                cy.iFrame('#braintree-hosted-field-cvv').find('#cvv'),
        },
        payNow: () => cy.findByRole('button', { name: /pay now/i }),
    },

    // Checkout Form page - V4
    checkoutFormV4: {
        contactInformation: {
            emailAddress: () =>
                cy.findByRole('textbox', {
                    name: /email address/i,
                }),
            password: () => cy.get('input[placeholder="Create a password"]'),
            userPassword: () => cy.get('#password'),
        },
        shippingInformation: {
            firstName: () =>
                cy.findByRole('textbox', {
                    name: /first name/i,
                }),
            lastName: () =>
                cy.findByRole('textbox', {
                    name: /last name/i,
                }),
            addressLine1: () =>
                cy.findByRole('textbox', { name: /address line 1/i }),
            addressLine2: () =>
                cy.findByRole('textbox', { name: /address line 2/i }),
            city: () => cy.findByRole('textbox', { name: /city/i }),
            zipcode: () =>
                cy.findByRole('textbox', {
                    name: /zip code/i,
                }),
            postalCode: () => cy.get('#postal_code'),
            country: () =>
                cy.findByRole('combobox', {
                    name: /country/i,
                }),
            state: () =>
                cy.findByRole('combobox', {
                    name: /state/i,
                }),
            phone: () => cy.contains(/phone|phone number/i),
            phoneNumber: () => cy.get('.input-phone-number'),
        },
        paymentInformation: {
            creditCardNumber: () =>
                cy
                    .iFrame('#braintree-hosted-field-number')
                    .find('#credit-card-number'),
            cardHolderName: () =>
                cy
                    .iFrame('#braintree-hosted-field-cardholderName')
                    .find('#cardholder-name'),
            expirationDate: () =>
                cy
                    .iFrame('#braintree-hosted-field-expirationDate')
                    .find('#expiration'),
            expirationMonth: () =>
                cy
                    .iFrame('#braintree-hosted-field-expirationMonth')
                    .find('#expiration-month'),
            expirationYear: () =>
                cy
                    .iFrame('#braintree-hosted-field-expirationYear')
                    .find('#expiration-year'),
            securtyCode: () =>
                cy.iFrame('#braintree-hosted-field-cvv').find('#cvv'),
            payNowButton: () =>
                cy.findByRole('button', { name: /pay now|submit order/i }),
        },
        bumperOffer: {
            specialOfferCheckbox: () => cy.get('div .checkbox__check'),
            addToOrderButton: () =>
                cy.findByRole('button', { name: /add to order/i }),
            payNowButton: () =>
                cy.findByRole('button', { name: /pay now|submit order/i }),
        },
    },
    // Fast Checkout V2
    fastCheckoutV2: {
        contactInformation: {
            clientName: () => cy.get('input[autocomplete="name"]'),

            emailAddress: () => cy.get('input[autocomplete="email"]'),
            password: () => cy.get('input[placeholder="Create a password"]'),
            phone: () => cy.get('input[autocomplete="tel"]'),
            addressLine1: () => cy.get('input[autocomplete="address-line1"]'),
            country: () => cy.get('select[autocomplete="country"]'),
            city: () => cy.get('input[autocomplete="address-level2"]'),
            state: () => cy.get('select[autocomplete="address-level1"]'),
            postal: () => cy.get('input[autocomplete="postal-code"]'),
        },
        paymentInformation: {
            creditCardRadio: () =>
                cy.findByRole('radio', { name: /credit card/i }),
            payPalRadio: () => cy.findByRole('radio', { name: /paypal/i }),
            creditCardNumber: () =>
                cy
                    .iFrame('#braintree-hosted-field-number')
                    .find('#credit-card-number'),
            expirationMonth: () =>
                cy
                    .iFrame('#braintree-hosted-field-expirationMonth')
                    .find('#expiration-month'),
            expirationYear: () =>
                cy
                    .iFrame('#braintree-hosted-field-expirationYear')
                    .find('#expiration-year'),
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
        },
        shippingMethod: {
            priorityFlatRate: () =>
                cy.contains('.shipping-option-info span', 'Priority Flat Rate'),
            freeShippingSpecial: () =>
                cy.contains(
                    '.shipping-option-info span',
                    'FREE Shipping Special!'
                ),
        },
        orderSummary: {
            orderItem: () => cy.get('.cart-grid'),
            itemPrice: (amount: string) => cy.contains(amount),
            shippingItem: () => cy.contains('.cart-grid', 'Shipping'),
            salesTaxItem: () => cy.contains('.cart-grid', 'Sales Tax'),
            totalOrderAmount: () => cy.contains('.cart-grid', 'Total'),
        },
        nextStep1Btn: () =>
            cy.contains(
                'button[data-dd-action-name="Step 1 Next"],button.next',
                /next step/i
            ),
        paymentNextBtn: () =>
            cy.contains(
                'button[data-dd-action-name="Payment Next"], .payment button.next',
                /next step/i
            ),
        secondNextBtn: () => cy.get('.field-column > .next'),
        submitOrderBtnCC: () => cy.get('#btn_area > .next'),
        loadingAnimation: () => cy.get('.loading'),

        // Error Messages
        errorMessages: {
            noNameError: () => cy.findByText(/Please enter your name/i),
            noEmailError: () =>
                cy.findByText(/Please Enter a Valid Email Address/i),
            noPhoneError: () => cy.findByText(/Invalid phone number/i),
            noAddressError: () => cy.findByText(/Invalid Address/i),
            noCityError: () => cy.findByText(/Invalid City/i),
            noStateError: () =>
                cy.findByText('Invalid State / Province / Region'),
            noPostalError: () => cy.findByText(/Invalid Zip or Postal Code/i),
            noCCNumberError: () => cy.findByText(/Credit card number invalid/i),
            noCCExpireMonthError: () => cy.contains('Expiration date invalid'),
            noCCExpireYearError: () => cy.get('.invalid-feedback').eq(2),
            noCCCVVError: () => cy.findByText(/Security code invalid/i),
            noCCPostalError: () => cy.findByText(/Postal code invalid/i),
        },
    },
    // LE-VS Secure Checkout
    secureCheckoutV2: {
        contactInformation: {
            clientName: () => cy.get('input[autocomplete="name"]'),
            emailAddress: () => cy.get('input[autocomplete="email"]'),
            password: () => cy.get('input[placeholder="Create a password"]'),
            phone: () => cy.get('input[autocomplete="tel"]'),
            addressLine1: () => cy.get('input[autocomplete="address-line1"]'),
            country: () => cy.get('select[autocomplete="country"]'),
            city: () => cy.get('input[autocomplete="address-level2"]'),
            state: () => cy.get('select[autocomplete="address-level1"]'),
            postal: () => cy.get('input[autocomplete="postal-code"]'),
        },
        paymentInformation: {
            creditCardRadio: () =>
                cy.findByRole('radio', { name: /credit card/i }),
            payPalRadio: () => cy.findByRole('radio', { name: /paypal/i }),
            creditCardNumber: () =>
                cy
                    .iFrame('#braintree-hosted-field-number')
                    .find('#credit-card-number'),
            expirationMonth: () =>
                cy
                    .iFrame('#braintree-hosted-field-expirationMonth')
                    .find('#expiration-month'),
            expirationYear: () =>
                cy
                    .iFrame('#braintree-hosted-field-expirationYear')
                    .find('#expiration-year'),
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
        },
        orderSummary: {
            orderItem: () => cy.get('.cart-grid'),
            orderItemPrice: () => cy.get('span'),
        },
        nextStep1Btn: () => cy.get('button.next').eq(0),
        paymentNextBtn: () => cy.get('.payment button.next'),
        submitOrderBtn: () => cy.contains('button.next', 'SUBMIT'),
        loadingAnimation: () => cy.get('.loading'),
    },
    checkoutFle: {
        contactDetails: {
            fullName: () => cy.get('#fullname,.input-name'),
            phone: () => cy.get('#tel,.input-phone'),
            phoneCountry: () => cy.get('#tel_1'),
            emailAddress: () => cy.get('#email, .input-email'),
            addressLine1: () => cy.get('#billing_address, .input-address'),
            addressLine2: () => cy.get('#billing_address_2'),
            country: () => cy.get('#billing_country, .input-country'),
            city: () => cy.get('#billing_city, .input-city'),
            state: () => cy.get('#billing_state, .input-state>select'),
            postal: () => cy.get('#billing_zip, .input-zip'),
        },
        paymentInformation: {
            cardPayment: () => cy.get('button.credit'),
            payPalPayment: () => cy.get('button.paypal'),
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
        },
        shippingInformation: {
            sameShipAddressCheckbox: () => cy.get('#shipping_same'),
        },
        orderSummary: () => cy.get('#order_summary'),
        continueBtn: () => cy.contains('button.lg', 'Continue'),
        bumperCheckbox: () => cy.get('.toggle_bumper, #checkbox'),
        placeOrderBtn: () =>
            cy.contains('button, button.lg', /Place Your Order|Submit/i),
        loadingAnimation: () => cy.get('.loading'),
        nextStep1Btn: () => cy.get('button.next').eq(0),
        paymentNextBtn: () => cy.get('.payment button.next'),
        submitOrderBtn: () => cy.contains('button', /Place Your Order|Submit/i),
        errorMessages: {
            noNameError: () => cy.findByText(/Please enter your full name/i),
            noEmailError: () =>
                cy.findByText(/Please enter your email address/i),
            noAddressError: () =>
                cy.findByText(/Please enter your billing address/i),
            noPostalError: () =>
                cy.findByText(/Please enter your zip or postal code/i),
            noCityError: () => cy.findByText(/Please enter your city/i),
            noStateError: () =>
                cy.findByText('Please enter your state / province / region'),
            noCCNumberError: () => cy.findByText(/Enter a valid card number./i),
            noCCExpireDateError: () =>
                cy.contains('Enter a valid expiration date (MM/YYYY).'),
            noCCCVVError: () => cy.findByText(/CVV should be 3-4 digits./i),
            noCCPostalError: () => cy.findByText(/Enter a valid postal code./i),
        },
    },

    // Adyen Checkout
    adyenCheckout: {
        contactInformation: {
            firstName: () => cy.get('[placeholder="Enter Your Name"]'),
            emailAddress: () => cy.get('[placeholder="Enter Your Email"]'),
            phone: () => cy.get('[placeholder="Phone Number"]'),
            addressLine1: () => cy.get('[placeholder="Address Line 1"]'),
            country: () => cy.get('.input-country'),
            city: () => cy.get('[placeholder="City"]'),
            state: () =>
                cy.get('[autocomplete="address-level1"]').select('Nevada'),
            postalCode: () => cy.get('[placeholder="Postal Code"]'),
        },
        paymentInformation: {
            ccNoIframe: () => cy.get('.adyen-checkout__field--cardNumber'),
            creditCardNumber: () =>
                cy
                    .iFrame('[title="Iframe for card number"]')
                    .find('input[id*=encryptedCardNumber]'),
            expirationDate: () =>
                cy
                    .iFrame('[title="Iframe for expiry date"]')
                    .find('input[id*=encryptedExpiryDate]'),
            securityCode: () =>
                cy
                    .iFrame('[title="Iframe for security code"]')
                    .find('input[id*=encryptedSecurityCode]'),
            nextStep: () => cy.get('.next').eq(1),
            payNowButton: () =>
                cy.findByRole('button', { name: /pay now|submit order/i }),
        },
    },
};

export default consumerLandingPageLocators;
