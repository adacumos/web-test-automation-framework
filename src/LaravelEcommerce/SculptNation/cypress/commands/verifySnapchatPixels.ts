declare global {
    namespace Cypress {
        interface Chainable {
            verifySnapchatPixels: (
                platform: string,
                pixelOwner: string,
                event: string,
                purchaseValue?: string
            ) => void;
        }
    }
}

/**
 * Command used to validate snapchat known pixel reference
 * @param pixelOwner pixel owner -ie Internal or Kendago
 * @param event transaction event being monitored -ie addToCart
 * @example
 * cy.verifySnapchatPixels('Internal', 'GTM', 'VS Quiz')
 *
 */
export const verifySnapchatPixels = (
    platform: string,
    pixelOwner: string,
    event: string
): void => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const verifySnapchatEvent = (
            alias: string,
            pixelId: string,
            eventId: string
        ) => {
            cy.wait(alias).then((pixelIntercept: any) => {
                const { pid, ev } = pixelIntercept.request.query;
                expect(pid).to.eq(pixelId);
                expect(ev).to.eq(eventId);
            });
        };
        const platformShorthand: Record<string, string> = {
            Sculptnation: 'sn',
            Vshred: 'vs',
        };

        const supportedEvents: Record<string, string> = {
            quiz: 'Quiz',
            'page view': 'PageView',
            'add to cart': 'AddtoCart',
            'start checkout': 'StartCheckout',
            purchase: 'Purchase',
        };

        const eventKey = supportedEvents[event.toLowerCase()];
        if (!eventKey) {
            throw new Error('Event not yet supported');
        }

        const alias = `@${platformShorthand[platform]}${pixelOwner}${eventKey}`; // Construct alias to match trackSnapchatEvents.ts
        const pixelId =
            staticTestData.pixelId[platform.toLowerCase()][
                pixelOwner.toLowerCase()
            ];
        const eventId = staticTestData.event[eventKey.toLowerCase()];

        try {
            verifySnapchatEvent(alias, pixelId, eventId);
        } catch (error) {
            throw new Error(
                'Invalid Snapchat tag owner or configuration selected'
            );
        }
    });
};
