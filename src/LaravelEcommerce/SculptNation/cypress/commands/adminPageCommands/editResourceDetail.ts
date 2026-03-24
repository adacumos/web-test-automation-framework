import {
    discountsPageLocators,
    lePlansPageLocators,
    usersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            editResourceDetails: (
                resourceType: string,
                resourceField: string,
                newValue: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to edit resource values
 * @param editResourceDetails type of resource data
 * @param resourceField resource' field to be edited
 * @param newValue new value to be saved
 * example:  editResourceDetails('Discounts')
 */

export const editResourceDetails = (
    resourceType: string,
    resourceField: string,
    newValue: string
): Cypress.Chainable<any> => {
    cy.logStep(
        `Updating ${resourceType}'s resource field ${resourceField} with ${newValue}`
    );
    switch (resourceType) {
        case 'Discounts': {
            const currentDate: Date = new Date(); // today's date
            const dateTime: Date = new Date(`${newValue}`);
            const futureDate: Date = new Date(
                new Date().setDate(currentDate.getDate() + 30)
            );
            switch (resourceField) {
                case 'Title':
                    discountsPageLocators.addEditDiscountPage
                        .discountTitle()
                        .clear()
                        .type(`${newValue}`);
                    break;
                case 'Type':
                    discountsPageLocators.addEditDiscountPage
                        .discountType()
                        .select(`${newValue}`);
                    break;
                case 'Rate':
                    discountsPageLocators.addEditDiscountPage
                        .discountRate()
                        .clear()
                        .type(`${newValue}`);
                    break;
                case 'CouponCode':
                    discountsPageLocators.addEditDiscountPage
                        .discountCouponCode()
                        .clear()
                        .type(`${newValue}`);
                    break;
                case 'StartsAt':
                    if (dateTime > currentDate) {
                        discountsPageLocators.addEditDiscountPage
                            .discountStarts()
                            .parent()
                            .click()
                            .type(`${newValue}`)
                            .then(() => {
                                discountsPageLocators.addEditDiscountPage
                                    .discountRate()
                                    // .startsAtLabel()
                                    .click();
                            });
                        // set Ends At date
                        discountsPageLocators.addEditDiscountPage
                            .discountEnds()
                            .parent()
                            .click()
                            .type(`${futureDate.toLocaleDateString()}`)
                            .then(() => {
                                discountsPageLocators.addEditDiscountPage
                                    .discountRate()
                                    // .endsAtLabel()
                                    .click();
                            });
                    } else {
                        discountsPageLocators.addEditDiscountPage
                            .discountStarts()
                            .parent()
                            .click()
                            .type(`${currentDate.toLocaleDateString()}`)
                            .then(() => {
                                discountsPageLocators.addEditDiscountPage
                                    .discountRate()
                                    // .startsAtLabel()
                                    .click();
                            });
                        // set Ends At date
                        discountsPageLocators.addEditDiscountPage
                            .discountEnds()
                            .parent()
                            .click()
                            .type(`${futureDate.toLocaleDateString()}`)
                            .then(() => {
                                discountsPageLocators.addEditDiscountPage
                                    .discountRate()
                                    // .endsAtLabel()
                                    .click();
                            });
                    }
                    break;
                case 'EndsAt':
                    if (dateTime > currentDate) {
                        discountsPageLocators.addEditDiscountPage
                            .discountStarts()
                            .clear()
                            .type(`${newValue}`);

                        // set Ends At date
                        discountsPageLocators.addEditDiscountPage
                            .discountEnds()
                            .clear()
                            .type(`${futureDate.toLocaleDateString()}`);
                    } else {
                        discountsPageLocators.addEditDiscountPage
                            .discountStarts()
                            .clear()
                            .type(`${currentDate.toLocaleDateString()}`);

                        // set Ends At date
                        discountsPageLocators.addEditDiscountPage
                            .discountEnds()
                            .clear()
                            .type(`${futureDate.toLocaleDateString()}`);
                    }
                    break;
                default:
                    throw new Error(
                        'Selected resource Field is not yet supported'
                    );
            }
            cy.logStep('Setting discount period validity');
            discountsPageLocators.addEditDiscountPage
                .discountStarts()
                .parent()
                .click()
                .type(`${currentDate}`)
                .then(() => {
                    discountsPageLocators.addEditDiscountPage
                        .discountRate()
                        .click();
                });
            discountsPageLocators.addEditDiscountPage
                .discountEnds()
                .parent()
                .click()
                .type(`${futureDate.toLocaleDateString()}`)
                .then(() => {
                    discountsPageLocators.addEditDiscountPage
                        .discountRate()
                        .click();
                });
            cy.logStep('Enable discount available to Admin users');
            discountsPageLocators.addEditDiscountPage
                .discountAvailableToAdmin()
                .click();
            break;
        }
        case 'Plans': {
            switch (resourceField) {
                case 'Slug':
                    lePlansPageLocators.addEditPlansPage
                        .planSlug()
                        .clear()
                        .type(`${newValue}`);
                    break;
                case 'Interval':
                    lePlansPageLocators.addEditPlansPage
                        .planInterval()
                        .select(`${newValue}`);
                    break;
                case 'IntervalLength':
                    lePlansPageLocators.addEditPlansPage
                        .planIntervalLength()
                        .clear()
                        .type(`${newValue}`);
                    break;
                case 'TrialPeriod':
                    if (newValue !== '-') {
                        lePlansPageLocators.addEditPlansPage
                            .planTrialPeriodDays()
                            .clear()
                            .type(`${newValue}`);
                    } else {
                        lePlansPageLocators.addEditPlansPage
                            .planTrialPeriodDays()
                            .click();
                    }
                    break;
                default:
                    throw new Error(
                        'Selected resource Field is not yet supported'
                    );
            }
            break;
        }
        case 'Users': {
            switch (resourceField) {
                case 'FirstName':
                    usersPageLocators.newUserForm
                        .firstNameInputField()
                        .clear()
                        .type(`${newValue}`);
                    break;
                case 'LastName':
                    usersPageLocators.newUserForm
                        .lastNameInputField()
                        .clear()
                        .type(`${newValue}`);
                    break;
                case 'Email':
                    usersPageLocators.newUserForm
                        .emailInputField()
                        .clear()
                        .type(`${newValue}`);
                    break;
                case 'Password':
                    usersPageLocators.newUserForm
                        .passwordInputField()
                        .clear()
                        .type(`${newValue}`);

                    usersPageLocators.newUserForm
                        .confirmPasswordInputField()
                        .clear()
                        .type(`${newValue}`);
                    break;

                default:
                    throw new Error(
                        'Selected resource Field is not yet supported'
                    );
            }
            break;
        }
        default:
            throw new Error('Selected Data Type Not Yet Supported');
    }

    return cy.logStep('Resouce Values Saved');
};
