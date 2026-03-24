import { When } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from '../../testData';

When('Klaviyo Profile events are monitored', () => {
    cy.getKlaviyoMetrics();
});
When(
    /^Verify Profile Event "(Plan Purchased|Ordered Product|Subscription Cancelled|Order Refunded|Trainer Assigned|Custom Plan Uploaded|Trainer Unassigned)" is logged in Klaviyo$/,
    (eventTitle: string) => {
        const clientEmail = dynamicTestData.userEmail;
        const filepath = 'cypress/fixtures/customData/klaviyoEvents.json';
        cy.readFile(filepath).then((resourceData: any) => {
            cy.logStep(`Searching for event: ${eventTitle}`);

            const matchEvent = resourceData.events.find(
                (item: any) => item.eventName === eventTitle
            );

            if (matchEvent) {
                const { eventId } = matchEvent;
                cy.log(`Event Found: ${eventTitle}, eventId: ${eventId}`);
                cy.checkKlaviyoEvents(clientEmail, eventTitle, eventId);
            } else {
                throw new Error(
                    `${eventTitle} event not found or not yet supported`
                );
            }
        });
    }
);
