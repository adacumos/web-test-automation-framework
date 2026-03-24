declare global {
    namespace Cypress {
        interface Chainable {
            getKlaviyoMetrics: () => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to get current Events / Metrics configured in Klaviyo
 * cy.getKlaviyoMetrics()
 *
 */
export const getKlaviyoMetrics = (): void => {
    const klaviyoToken = Cypress.env('KLAVIYO_TOKEN');
    const klaviyoUrl = Cypress.env('klaviyoUrl');
    const apiHeaders = {
        accept: 'application/json',
        revision: '2024-02-15',
        Authorization: `Klaviyo-API-Key ${klaviyoToken}`,
    };

    const filepath = 'cypress/fixtures/customData/klaviyoEvents.json';
    cy.writeFile(filepath, []);

    cy.request({
        method: 'GET',
        url: `${klaviyoUrl}/api/metrics/?fields[metric]=integration&fields[metric]=id,name`,
        headers: apiHeaders,
    }).then((eventResponse: any) => {
        const metrics = eventResponse.body.data.map(
            (item: { attributes: { name: string }; id: string }) => ({
                eventId: item.id,
                eventName: item.attributes.name,
            })
        );
        cy.readFile(filepath).then(() => {
            const eventData = { events: metrics };
            cy.writeFile(filepath, JSON.stringify(eventData, null, 2));
        });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000);
    });
};
