declare global {
    namespace Cypress {
        interface Chainable {
            checkFunnelErrorMessage: (
                errorType: string,
                checkoutPage: any
            ) => void;
        }
    }
}

/** *
 * Command to check error message from Survey-GA checkout form
 * @example
 * @param errorType error type
 * @param checkoutPage we pass the page of the checkout
 * @example cy.checkFunnelErrorMessage('no name', consumerLandingPageLocators.fastCheckoutV2)
 */

export const checkFunnelErrorMessage = (
    errorType: string,
    checkoutPage: any
): void => {
    const errorMappings: { [key: string]: () => Cypress.Chainable<any> } = {
        'no name': checkoutPage.errorMessages.noNameError,
        'no email': checkoutPage.errorMessages.noEmailError,
        'no phone': checkoutPage.errorMessages.noPhoneError,
        'no address': checkoutPage.errorMessages.noAddressError,
        'no city': checkoutPage.errorMessages.noCityError,
        'no state': checkoutPage.errorMessages.noStateError,
        'no postal': checkoutPage.errorMessages.noPostalError,
        'no card number': checkoutPage.errorMessages.noCCNumberError,
        'no expire month': checkoutPage.errorMessages.noCCExpireMonthError,
        'no expire year': checkoutPage.errorMessages.noCCExpireYearError,
        'no expire date': checkoutPage.errorMessages.noCCExpireDateError,
        'no cvv': checkoutPage.errorMessages.noCCCVVError,
        'no payment postal': checkoutPage.errorMessages.noCCPostalError,
    };

    const allErrorKeys: string[] = [
        'no name',
        'no email',
        'no phone',
        'no address',
        'no city',
        'no state',
        'no postal',
    ];

    if (errorType === 'all') {
        allErrorKeys.forEach((key) => {
            if (errorMappings[key]) {
                errorMappings[key]().should('be.visible');
            }
        });
    } else if (errorType in errorMappings) {
        if (errorMappings[errorType]) {
            errorMappings[errorType]().should('be.visible');
        }
    } else {
        throw new Error(`Invalid error type: ${errorType}`);
    }
};
