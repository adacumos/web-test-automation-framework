/// <reference types="cypress" />

import { Then, When, Step } from '@badeball/cypress-cucumber-preprocessor';
import { consumerAccountPageLocators } from '../../locator_libraries';
import { dynamicTestData } from '../../testData';

Then(
    'The user validates the data on the SculptNation Account Orders page for the {string} items bought',
    (orderCount: string) => {
        cy.logStep('Click the Recent Orders button');

        consumerAccountPageLocators.recentOrdersButton().click();
        if (orderCount === 'three') {
            cy.get('@staticTestData').then((staticTestData: any) => {
                consumerAccountPageLocators.ordersPage
                    .itemtOrderRow(1)
                    .should(
                        'contain.text',
                        staticTestData.orderDetails.firstItemOrderStatus
                    )
                    .and(
                        'contain.text',
                        staticTestData.orderDetails.firstItemOrderTotal
                    );
                consumerAccountPageLocators.ordersPage
                    .itemtOrderRow(2)
                    .should(
                        'contain.text',
                        staticTestData.orderDetails.secondItemOrderStatus
                    )
                    .and(
                        'contain.text',
                        staticTestData.orderDetails.secondItemOrderTotal
                    );

                consumerAccountPageLocators.ordersPage
                    .itemtOrderRow(3)
                    .should(
                        'contain.text',
                        staticTestData.orderDetails.thirdItemOrderStatus
                    )
                    .and(
                        'contain.text',
                        staticTestData.orderDetails.thirdItemOrderTotal
                    );
            });
        } else {
            cy.get('@staticTestData').then((staticTestData: any) => {
                consumerAccountPageLocators.ordersPage
                    .itemtOrderRow(1)
                    .should(
                        'contain.text',
                        staticTestData.orderDetails.firstItemOrderStatus
                    )
                    .and(
                        'contain.text',
                        staticTestData.orderDetails.firstItemOrderTotal
                    );
                consumerAccountPageLocators.ordersPage
                    .itemtOrderRow(2)
                    .should(
                        'contain.text',
                        staticTestData.orderDetails.secondItemOrderStatus
                    )
                    .and(
                        'contain.text',
                        staticTestData.orderDetails.secondItemOrderTotal
                    );
                consumerAccountPageLocators.ordersPage
                    .itemtOrderRow(3)
                    .should(
                        'contain.text',
                        staticTestData.orderDetails.thirdItemOrderStatus
                    )
                    .and(
                        'contain.text',
                        staticTestData.orderDetails.thirdItemOrderTotal
                    );
                consumerAccountPageLocators.ordersPage
                    .itemtOrderRow(4)
                    .should(
                        'contain.text',
                        staticTestData.orderDetails.fourthItemOrderStatus
                    )
                    .and(
                        'contain.text',
                        staticTestData.orderDetails.fourthItemOrderTotal
                    );
            });
        }
    }
);

// Then(
//     'The user validates the data on the SculptNation Account Orders page for the three items bought',
//     () => {
//         cy.logStep('Click the Recent Orders button');

//         consumerAccountPageLocators.recentOrdersButton().click();

//         cy.get('@staticTestData').then((staticTestData: any) => {
//             consumerAccountPageLocators.ordersPage
//                 .itemtOrderRow(1)
//                 .should('contain.text', staticTestData.firstItemOrderStatus)
//                 .and('contain.text', staticTestData.firstItemOrderTotal);
//             consumerAccountPageLocators.ordersPage
//                 .itemtOrderRow(2)
//                 .should('contain.text', staticTestData.secondItemOrderStatus)
//                 .and('contain.text', staticTestData.secondItemOrderTotal);

//             consumerAccountPageLocators.ordersPage
//                 .itemtOrderRow(3)
//                 .should('contain.text', staticTestData.thirdItemOrderStatus)
//                 .and('contain.text', staticTestData.thirdItemOrderTotal);
//         });
//     }
// );

// Then(
//     'The user validates the data on the SculptNation Account Orders page for the four items bought',
//     () => {
//         cy.logStep('Click the Recent Orders button');

//         consumerAccountPageLocators.recentOrdersButton().click();

//         cy.get('@staticTestData').then((staticTestData: any) => {
//             consumerAccountPageLocators.ordersPage
//                 .itemtOrderRow(1)
//                 .should('contain.text', staticTestData.firstItemOrderStatus)
//                 .and('contain.text', staticTestData.firstItemOrderTotal);
//             consumerAccountPageLocators.ordersPage
//                 .itemtOrderRow(2)
//                 .should('contain.text', staticTestData.secondItemOrderStatus)
//                 .and('contain.text', staticTestData.secondItemOrderTotal);
//             consumerAccountPageLocators.ordersPage
//                 .itemtOrderRow(3)
//                 .should('contain.text', staticTestData.thirdItemOrderStatus)
//                 .and('contain.text', staticTestData.thirdItemOrderTotal);
//             consumerAccountPageLocators.ordersPage
//                 .itemtOrderRow(4)
//                 .should('contain.text', staticTestData.fourthItemOrderStatus)
//                 .and('contain.text', staticTestData.fourthItemOrderTotal);
//         });
//     }
// );

Then(
    'The user validates the three subscriptions data on the SculptNation Account Subscriptions page',
    () => {
        cy.logStep('Check the Subscriptions section');
        consumerAccountPageLocators.subscriptionsButton().click();

        cy.get('@staticTestData').then((staticTestData: any) => {
            consumerAccountPageLocators.subscriptionsPage
                .subscriptionRow(1)
                .should(
                    'contain.text',
                    staticTestData.orderDetails.firstSubscriptionName
                )
                .and(
                    'contain.text',
                    staticTestData.orderDetails.firstSubscriptionPricePerMonth
                );
            consumerAccountPageLocators.subscriptionsPage
                .subscriptionRow(2)
                .should(
                    'contain.text',
                    staticTestData.orderDetails.secondSubscriptionName
                )
                .and(
                    'contain.text',
                    staticTestData.orderDetails.secondSubscriptionPricePerMonth
                );
            consumerAccountPageLocators.subscriptionsPage
                .subscriptionRow(3)
                .should(
                    'contain.text',
                    staticTestData.orderDetails.thirdSubscriptionName
                )
                .and(
                    'contain.text',
                    staticTestData.orderDetails.thirdSubscriptionPricePerMonth
                );
        });
    }
);

Then(
    'The user cancels the subscription for the first product and validates its cancelled status',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.log(
                `Select the first subscription for ${staticTestData.firstSubscriptionName}`
            );

            consumerAccountPageLocators.subscriptionsPage
                .subscriptionRow(1)
                .first()
                .within(() => {
                    consumerAccountPageLocators.subscriptionsPage
                        .viewButton()
                        .click();
                });

            consumerAccountPageLocators.subscriptionsPage
                .header()
                .should('not.exist');

            consumerAccountPageLocators.subscriptionsPage
                .subscriptionNumber()
                .invoke('text')
                .then((subscriptionNumber) => {
                    cy.log(
                        `Check that the correct subscription page for ${staticTestData.orderDetails.firstSubscriptionName} is loaded`
                    );
                    consumerAccountPageLocators.subscriptionsPage.subscriptionTotal
                        .productNameAndPriceRow()
                        .should(
                            'contain.text',
                            staticTestData.orderDetails.firstSubscriptionName
                        )
                        .and(
                            'contain.text',
                            staticTestData.orderDetails
                                .firstSubscriptionPricePerMonth
                        );

                    cy.log('Cancel the subscription');
                    consumerAccountPageLocators.subscriptionsPage
                        .cancelButton()
                        .click();
                    consumerAccountPageLocators.subscriptionsPage
                        .cancelConfirmationButton()
                        .click();
                    consumerAccountPageLocators.subscriptionsPage
                        .subscriptionCancellationSuccessMessage(
                            subscriptionNumber.split(' ')[1]
                        )
                        .should('be.visible');

                    consumerAccountPageLocators.refundDialog.okButton().click();

                    cy.logStep(
                        `Check that the first subscription for ${staticTestData.orderDetails.firstSubscriptionName} has been cancelled`
                    );
                    consumerAccountPageLocators.subscriptionsButton().click();
                    consumerAccountPageLocators.subscriptionsPage
                        .subscriptionRow(1)
                        .should('contain.text', 'cancelled');
                });
        });
    }
);

Then(
    'The user validates the {string} orders on the SculptNation Account Orders page',
    (orderType: string) => {
        cy.logStep('Click the Recent Orders button');
        consumerAccountPageLocators.recentOrdersButton().click();
        cy.checkAccountOrders(orderType);
    }
);

Then(
    'The user validates the subscription orders on the SculptNation Account Subscriptions page',
    () => {
        cy.logStep('Check the Subscriptions section');
        consumerAccountPageLocators.subscriptionsButton().click();

        cy.get('@staticTestData').then((staticTestData: any) => {
            if (
                Object.prototype.hasOwnProperty.call(
                    staticTestData.subscription.orderDetails,
                    'firstSubscriptionName'
                )
            ) {
                consumerAccountPageLocators.subscriptionsPage
                    .subscriptionRow(1)
                    .should(
                        'contain.text',
                        staticTestData.subscription.orderDetails
                            .firstSubscriptionName
                    )
                    .and(
                        'contain.text',
                        staticTestData.subscription.orderDetails
                            .firstSubscriptionPricePerMonth
                    );
            }
            if (
                Object.prototype.hasOwnProperty.call(
                    staticTestData.subscription.orderDetails,
                    'secondSubscriptionName'
                )
            ) {
                consumerAccountPageLocators.subscriptionsPage
                    .subscriptionRow(2)
                    .should(
                        'contain.text',
                        staticTestData.subscription.orderDetails
                            .secondSubscriptionName
                    )
                    .and(
                        'contain.text',
                        staticTestData.subscription.orderDetails
                            .secondSubscriptionPricePerMonth
                    );
            }
            if (
                Object.prototype.hasOwnProperty.call(
                    staticTestData.subscription,
                    'thirdSubscriptionName'
                )
            ) {
                consumerAccountPageLocators.subscriptionsPage
                    .subscriptionRow(3)
                    .should(
                        'contain.text',
                        staticTestData.subscription.orderDetails
                            .thirdSubscriptionName
                    )
                    .and(
                        'contain.text',
                        staticTestData.subscription.orderDetails
                            .thirdSubscriptionPricePerMonth
                    );
            }
        });
    }
);

When(
    /^The user Views the "(Order|Subscription)" details$/,
    (orderType: string) => {
        cy.viewOrderDetails(orderType);
    }
);

When(
    /^The user navigates to MyAccount "(Dashboard|Orders|Subscriptions|Addresses|Account-Details|Update-Payment|Logout)" page$/,
    (menuTitle: string) => {
        if (menuTitle === 'Dashboard') {
            consumerAccountPageLocators.dashboardMenuButton().click();
            cy.url().should('contain', '/my-account/');
        } else if (menuTitle === 'Logout') {
            consumerAccountPageLocators.logoutMenuButton().click();
            consumerAccountPageLocators.confirmLogoutButton().click();
        } else {
            consumerAccountPageLocators.myAccountMenu(menuTitle).click();
            cy.url().should(
                'contain',
                `/my-account/${menuTitle.toLowerCase()}`
            );
        }
    }
);

Then(
    /^The user's "(Addresses|Account-Details)" record is validated$/,
    (accountDetail: string) => {
        cy.log(accountDetail);
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.logStep('Verifying expected Customer Account details');
            switch (accountDetail) {
                case 'Addresses':
                    consumerAccountPageLocators.addressesPage
                        .billingAddressDetails()
                        .should('contain.text', staticTestData.streetAddress)
                        .and('contain.text', staticTestData.state)
                        .and('contain.text', staticTestData.city)
                        .and('contain.text', staticTestData.postcode)
                        .and('contain.text', staticTestData.phone)
                        .and('contain.text', staticTestData.country);
                    break;

                case 'Account-Details':
                    consumerAccountPageLocators.accountDetailsPage
                        .firstName()
                        .should('have.value', staticTestData.firstName);
                    consumerAccountPageLocators.accountDetailsPage
                        .lastName()
                        .should('have.value', staticTestData.lastName);
                    consumerAccountPageLocators.accountDetailsPage
                        .email()
                        .should('have.value', dynamicTestData.userEmail);
                    break;

                default:
                    throw new Error('Invalid menu selected');
            }
        });
    }
);

When(`The user can update the account's First and Lastname details`, () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.updateAccountDetails(
            'FirstName',
            staticTestData.editUserDetails.firstName
        );
        cy.updateAccountDetails(
            'LastName',
            staticTestData.editUserDetails.lastName
        );

        cy.logStep('Saving changes');
        consumerAccountPageLocators.accountDetailsPage
            .saveChangesButton()
            .click();
        consumerAccountPageLocators.logoutMenuButton().click();
        consumerAccountPageLocators.confirmLogoutButton().click();
    });
});

When(`The user can update the account's Contact Details`, () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.updateAccountDetails(
            'PhoneNumber',
            staticTestData.editUserDetails.phoneNumber
        );

        cy.logStep('Saving changes');
        consumerAccountPageLocators.accountDetailsPage
            .saveChangesButton()
            .click();
    });
});

When(`The user can update the account's Password details`, () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.updateAccountDetails(
            'PhoneNumber',
            staticTestData.editUserDetails.phoneNumber
        );
        cy.updateUserPassword(
            dynamicTestData.userPassword,
            staticTestData.editUserDetails.newPassword
        );
        /* eslint-disable cypress/no-unnecessary-waiting */
        cy.wait(2000); // need to wait for couple of seconds to update table
    });
});

Then('The user can successfully login with the updated password', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.loginToSculptNationAccount(
            dynamicTestData.userEmail,
            staticTestData.editUserDetails.newPassword
        );
        cy.url().should('include', '/my-account');
        consumerAccountPageLocators.logoutMenuButton().click();
        consumerAccountPageLocators.confirmLogoutButton().click();
    });
});

When('The user can update the credit card details', () => {
    cy.logStep('Updating payment details');
    cy.updateAccountDetails('Payment');
    consumerAccountPageLocators.logoutMenuButton().click();
    consumerAccountPageLocators.confirmLogoutButton().click();
});

When(
    'The user Views Orders created through the Funnel - {string}',
    (orderList: string) => {
        cy.viewFunnelOrderDetails(orderList);
    }
);

Then('The user fills out the Custom Plan Questionnaire', () => {
    const clientEmail = dynamicTestData.userEmail;
    cy.url().then(($url) => {
        if ($url.includes('/member/profile')) {
            Step(
                new Mocha.Context(),
                'The user completes the V Shred Member Profile'
            );
        }
        consumerAccountPageLocators.vsMemberAccountPage
            .filloutCustomPlanQuestionnaireButton()
            .click();
        cy.url().should(
            'include',
            'forms/custom-diet-training-plan-questionnaire'
        );
        cy.filloutCustomQuestionnaire(clientEmail);
        consumerAccountPageLocators.vsMemberAccountPage.memberProfile
            .closeMessageBox()
            .eq(0)
            .click({ force: true });
    });
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(20000); // expected delays in creating record in trainer tool unassigned plans table;
});

When('The user completes the V Shred Member Profile', () => {
    const clientEmail = dynamicTestData.userEmail;
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000); // expected delays in showing the banner;
    consumerAccountPageLocators.vsMemberAccountPage.memberProfile
        .completeMemberProfileBanner()
        .then(($banner) => {
            if ($banner.length) {
                consumerAccountPageLocators.vsMemberAccountPage.memberProfile
                    .closeMessageBox()
                    .click();
            }
        });
    cy.completeVsMemberProfile(clientEmail);
});

When('The user logs out from V Shred Member Profile', () => {
    cy.url().then(($url) => {
        if (!$url.includes('/member/profile')) {
            consumerAccountPageLocators.vsMemberAccountPage.memberProfile
                .editProfileButton()
                .click();
        }

        consumerAccountPageLocators.vsMemberAccountPage.memberProfile
            .logoutProfileLink()
            .click();
        cy.url().should('include', Cypress.env('vshredUrl'));
    });
});

When('The user stops impersonating client record', () => {
    consumerAccountPageLocators.vsMemberAccountPage.menuList('Admin').click();
    consumerAccountPageLocators.vsMemberAccountPage
        .stopImpersonatingLink()
        .click();
    cy.url().should('include', '/admin/users');
});

When('The user navigates to VS Member Profile page', () => {
    cy.contains('ul a', /my stuff/i).click();
});

Then('The user fills out the Accelerator Program Questionnaire', () => {
    const clientEmail = dynamicTestData.userEmail;
    cy.url().then(($url) => {
        if ($url.includes('/member/profile')) {
            Step(
                new Mocha.Context(),
                'The user completes the V Shred Member Profile'
            );
        }
        consumerAccountPageLocators.vsMemberAccountPage.memberPrograms
            .acceleratorPlan()
            .click();
        cy.url().should('include', 'forms/vshred-accelerator-questionnaire');
        cy.filloutAcceleratorQuestionnaire(clientEmail);
        consumerAccountPageLocators.vsMemberAccountPage.memberProfile
            .closeMessageBox()
            .eq(0)
            .click({ force: true });
    });
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000); // expected delays in updating record in trainer tool page;
});

Then('The user fills out the Elite Program Questionnaire', () => {
    const clientEmail = dynamicTestData.userEmail;

    cy.url().then(($url) => {
        if ($url.includes('/member/profile')) {
            Step(
                new Mocha.Context(),
                'The user completes the V Shred Member Profile'
            );
        }
        consumerAccountPageLocators.vsMemberAccountPage.memberPrograms
            .eliteProgram()
            .click();
        cy.url().should('include', 'forms/vshred-elite-questionnaire');
        cy.filloutEliteQuestionnaire(clientEmail);
        consumerAccountPageLocators.vsMemberAccountPage.memberProfile
            .closeMessageBox()
            .eq(0)
            .click({ force: true });
    });
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000); // expected delays in updating record in trainer tool page;
});

Then(
    'The client user verifies order item status is {string}',
    (orderStatus: string) => {
        consumerAccountPageLocators
            .orderIdLink(dynamicTestData.orderItemId)
            .parents('tr')
            .within(() => {
                consumerAccountPageLocators
                    .orderIdStatus()
                    .should('contain', orderStatus);

                // temporarily disable this validation per Prod bug ticket FET-98
                // consumerAccountPageLocators.viewButton().click();
            });
        // consumerAccountPageLocators.ordersPage
        //     .orderStatus()
        //     .should('contain', orderStatus);
    }
);
