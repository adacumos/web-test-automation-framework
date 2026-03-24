declare global {
    namespace Cypress {
        interface Chainable {
            trackSnapchatEvents: (pixelOwner: string) => void;
        }
    }
}

/**
 * Command used to start tracking Identified Snapchat Pixel Events
 * @param pixelOwner pixel owner -ie Internal or Kendago
 * cy.trackSnapchatEvents('Sculptnation')
 *
 */
export const trackSnapchatEvents = (pixelOwner: string): void => {
    cy.clearAllSessionData();
    cy.get('@staticTestData').then((staticTestData: any) => {
        const pixelIds: any = {
            Sculptnation: {
                internal: staticTestData.pixelId.sculptnation.internal,
                kendago: staticTestData.pixelId.sculptnation.kendago,
            },
            Vshred: {
                internal: staticTestData.pixelId.vshred.internal,
                kendago: staticTestData.pixelId.vshred.kendago,
            },
        };
        const { pageview, addtocart, startcheckout, quizCompleted, purchase } =
            staticTestData.event;

        const interceptsMap = [
            {
                eventName: 'PageView',
                eventCode: pageview,
                aliasPrefix: 'PageView',
            },
            {
                eventName: 'AddtoCart',
                eventCode: addtocart,
                aliasPrefix: 'AddtoCart',
            },
            {
                eventName: 'StartCheckout',
                eventCode: startcheckout,
                aliasPrefix: 'StartCheckout',
            },
            {
                eventName: 'Quiz',
                eventCode: quizCompleted,
                aliasPrefix: 'Quiz',
            },
            {
                eventName: 'Purchase',
                eventCode: purchase,
                aliasPrefix: 'Purchase',
            },
        ];

        const setupIntercepts = (owner: string) => {
            const { internal, kendago } = pixelIds[owner];
            interceptsMap.forEach(({ eventCode, aliasPrefix }) => {
                cy.intercept(`**p?pid=${internal}&ev=${eventCode}**`).as(
                    `${
                        owner === 'Sculptnation' ? 'sn' : 'vs'
                    }Internal${aliasPrefix}`
                );
                cy.intercept(`**p?pid=${kendago}&ev=${eventCode}**`).as(
                    `${
                        owner === 'Sculptnation' ? 'sn' : 'vs'
                    }Kendago${aliasPrefix}`
                );
            });
        };

        switch (pixelOwner) {
            case 'Sculptnation':
            case 'Vshred':
                setupIntercepts(pixelOwner);
                break;
            default:
                throw new Error('Invalid Pixel Owner');
        }
    });
};
