declare global {
    namespace Cypress {
        interface Chainable {
            interceptPixels: (event: string) => void;
        }
    }
}

/**
 * Command used to initiate cy.intercept() to known Vshred and Sculptnation pixel ID reference
 * @param type pixel event type
 * @example
 * cy.interceptPixels('quizcompleted')
 *
 */
export const interceptPixels = (event: string): void => {
    cy.logStep(event);
    cy.get('@staticTestData').then((staticTestData: any) => {
        const pixelData =
            staticTestData.pixelDetail?.[
                event.replace(/\s+/g, '').toLowerCase()
            ];

        if (!pixelData) {
            cy.log(`Event not found: ${event}`);
            return;
        }
        const platforms = ['gtm', 'twitter'];
        platforms.forEach((platform) => {
            const platformData = pixelData[platform];
            if (platformData) {
                Object.keys(platformData).forEach((key) => {
                    const value = platformData[key];
                    if (value) {
                        const alias = `${event}${
                            platform.charAt(0).toUpperCase() + platform.slice(1)
                        }${key.charAt(0).toUpperCase() + key.slice(1)}`;
                        cy.logStep(
                            `Intercepting event for ${alias} with value: ${value}`
                        );
                        cy.intercept(`**${value}**`).as(alias);
                        cy.log(alias);
                    }
                });
            }
        });
    });
};
