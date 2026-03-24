import { consumerLandingPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            filloutVsCheckoutFle: (clientEmail: string) => void;
        }
    }
}

/** *
 * Command to fill out the new Checkout FLE Order form
 * @example
 * @param clientEmail client user's email
 * @example cy.filloutVsCheckoutFle('janed.test@example.com')
 */

export const filloutVsCheckoutFle = (clientEmail: string): void => {
    cy.logStep('Fillout LE-VS Checkout FLE');
    cy.get('@staticTestData').then((staticTestData: any) => {
        const {
            clientName,
            phoneNumber,
            address,
            city,
            state,
            country,
            postalCode,
        } = staticTestData;

        cy.intercept('GET', '/api/location-check/**').as('getState');
        cy.intercept('POST', '/api/cart/pay').as('orderPlaced');
        cy.intercept('POST', '**/vsu/subscribe/**').as('braintreeCall');

        cy.logStep('Fillout contact details');

        cy.get('body').then((checkoutForm: any) => {
            if (checkoutForm.find('.scene_holder').length > 0) {
                cy.logStep('Filling out New checkout-fle');
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .fullName()
                    .type(clientName);
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .phone()
                    .type(phoneNumber, { force: true });
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .emailAddress()
                    .type(clientEmail);

                cy.logStep('Fillout payment information');
                cy.filloutPaymentInformation();

                cy.logStep('Fillout Billing Address Information');
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .addressLine1()
                    .type(address);
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .country()
                    .select(country);
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .state()
                    .select(state);
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .city()
                    .type(city);
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .postal()
                    .type(postalCode, { force: true });
                consumerLandingPageLocators.checkoutFle
                    .orderSummary()
                    .invoke('css', 'display', 'block');
                consumerLandingPageLocators.checkoutFle.continueBtn().click();
            } else {
                cy.logStep('Filling out  Old checkout-fle');
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .fullName()
                    .type(clientName);
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .emailAddress()
                    .type(clientEmail);
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .phone()
                    .type(phoneNumber);
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .addressLine1()
                    .type(address);
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .city()
                    .type(city);
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .state()
                    .select(state);
                consumerLandingPageLocators.checkoutFle.contactDetails
                    .postal()
                    .type(postalCode);
                consumerLandingPageLocators.checkoutFle.nextStep1Btn().click();
                cy.logStep('Fillout payment information');
                cy.filloutPaymentInformation();
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(2000);
                consumerLandingPageLocators.checkoutFle
                    .paymentNextBtn()
                    .should('be.visible')
                    .click();
            }
        });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000);
        cy.get('.loading').should('not.exist');
    });
};
