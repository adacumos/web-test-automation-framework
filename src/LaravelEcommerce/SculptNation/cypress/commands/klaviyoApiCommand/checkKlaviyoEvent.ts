declare global {
    namespace Cypress {
        interface Chainable {
            checkKlaviyoEvents: (
                clientEmail: string,
                eventTitle: string,
                eventId: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to verify expected klaviyo events are triggered
 * @param clientEmail user client email address
 * @param eventTitle monitored event Title
 * @param eventId klaviyo metric ID
 * cy.checkKlaviyoEvents('alison.berk@mail.com','Plan Purchased','Y2z3AE')
 *
 */
export const checkKlaviyoEvents = (
    clientEmail: string,
    eventTitle: string,
    eventId: string
): void => {
    const encodedEmail = clientEmail.replace(/\+/g, '%2B');
    const klaviyoToken = Cypress.env('KLAVIYO_TOKEN');
    const klaviyoUrl = Cypress.env('klaviyoUrl');
    const apiHeaders = {
        accept: 'application/json',
        revision: '2024-02-15',
        Authorization: `Klaviyo-API-Key ${klaviyoToken}`,
    };

    let profileId: string;
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(60000); // expected delays in logging profile events in Klaviyo
    cy.request({
        method: 'GET',
        url: `${klaviyoUrl}/api/profiles/?filter=equals(email,"${encodedEmail}")&fields[profile]=email,first_name,last_name`,
        headers: apiHeaders,
    }).then((profiles) => {
        expect(profiles.status).to.eq(200);
        profileId = profiles.body.data[0].id;

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(60000); // expected delays in logging events in Klaviyo

        cy.request({
            method: 'GET',
            url: `${klaviyoUrl}/api/events/?filter=equals(profile_id,"${profileId}"),equals(metric_id,"${eventId}")`,
            headers: apiHeaders,
        }).then((eventResponse: any) => {
            if (
                eventResponse &&
                eventResponse.body &&
                eventResponse.body.data
            ) {
                const item = eventResponse.body.data[0];
                if (item && item.relationships && item.relationships.metric) {
                    expect(eventResponse.status).to.eq(200);
                    if (item.relationships.metric.data.id === eventId) {
                        cy.get('@staticTestData').then(
                            (staticTestData: any) => {
                                switch (eventTitle) {
                                    case 'Plan Purchased': {
                                        cy.logStep(
                                            'Verifying Subscription Plan purchased is logged in Klaviyo'
                                        );
                                        const planPurchased =
                                            staticTestData.klaviyoEventSummary
                                                .purchasedPlan;
                                        const planNames =
                                            eventResponse.body.data.map(
                                                (plansEvent: any) =>
                                                    plansEvent.attributes
                                                        .event_properties
                                                        .planName
                                            );

                                        planPurchased.forEach(
                                            (planName: any) => {
                                                expect(planNames).to.include(
                                                    planName
                                                );
                                            }
                                        );
                                        break;
                                    }
                                    case 'Trainer Assigned':
                                    case 'Custom Plan Uploaded':
                                    case 'Trainer Unassigned': {
                                        cy.logStep(
                                            'Verifying Trainer Details are logged in Klaviyo'
                                        );
                                        const assignedTrainers =
                                            staticTestData.klaviyoEventSummary
                                                .trainerDetails;
                                        const trainerNames =
                                            eventResponse.body.data.map(
                                                (trainerEvent: any) =>
                                                    trainerEvent.attributes
                                                        .event_properties
                                                        .trainer_name
                                            );

                                        assignedTrainers.forEach(
                                            (trainers: any) => {
                                                expect(trainerNames).to.include(
                                                    trainers
                                                );
                                            }
                                        );
                                        break;
                                    }
                                    case 'Ordered Product': {
                                        cy.logStep(
                                            'Verifying each ordered Product is logged in Klaviyo'
                                        );
                                        const orderItems =
                                            staticTestData.klaviyoEventSummary
                                                .orderSummary;
                                        const productNames =
                                            eventResponse.body.data.map(
                                                (orderEvent: any) =>
                                                    orderEvent.attributes
                                                        .event_properties
                                                        .productName
                                            );
                                        orderItems.forEach(
                                            (productName: any) => {
                                                const klaviyoProdName =
                                                    productNames.some(
                                                        (name: string) =>
                                                            name.includes(
                                                                productName
                                                            )
                                                    );
                                                assert.isTrue(
                                                    klaviyoProdName,
                                                    `Ordered Product ${productName} is logged in Klaviyo`
                                                );
                                            }
                                        );
                                        break;
                                    }
                                    case 'Subscription Cancelled': {
                                        cy.logStep(
                                            'Verifying Canceled Subscriptions are logged in Klaviyo'
                                        );
                                        const canceledSubscriptionItems =
                                            staticTestData.klaviyoEventSummary
                                                .canceledSubscription;
                                        const canceledProducts =
                                            eventResponse.body.data.map(
                                                (canceledEvent: any) =>
                                                    canceledEvent.attributes
                                                        .event_properties
                                                        .productName
                                            );

                                        canceledSubscriptionItems.forEach(
                                            (canceledProductName: any) => {
                                                expect(
                                                    canceledProducts
                                                ).to.include(
                                                    canceledProductName
                                                );
                                            }
                                        );
                                        break;
                                    }
                                    case 'Order Refunded': {
                                        cy.logStep(
                                            'Verifying Product Refunded Products are logged in Klaviyo'
                                        );
                                        const refundedItems =
                                            staticTestData.klaviyoEventSummary
                                                .refundedOrder;
                                        const refundedProducts =
                                            eventResponse.body.data.map(
                                                (refundEvent: any) =>
                                                    refundEvent.attributes
                                                        .event_properties
                                                        .refundedItems[0].name
                                            );

                                        refundedItems.forEach(
                                            (refundedProductName: any) => {
                                                expect(
                                                    refundedProducts
                                                ).to.include(
                                                    refundedProductName
                                                );
                                            }
                                        );
                                        break;
                                    }
                                    default: {
                                        cy.logStep(
                                            'Event Logged under client Record - No details'
                                        );
                                    }
                                }
                            }
                        );
                        cy.logStep('Event Logged under client Record');
                    }
                } else {
                    throw new Error(
                        'Expected Event NOT Found in client Profile'
                    );
                }
            }
        });
    });
};
