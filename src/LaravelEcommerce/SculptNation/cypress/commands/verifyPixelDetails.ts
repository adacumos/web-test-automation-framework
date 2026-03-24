declare global {
    namespace Cypress {
        interface Chainable {
            verifyPixelDetails: (
                pixelOwner: string,
                platform: string,
                event: string,
                purchaseValue?: string
            ) => void;
        }
    }
}

/**
 * Command used to validate GTM event details to known pixel reference
 * @param pixelOwner pixel owner -ie Internal or Kendago
 * @param platform pixel platform -ie google, twitter
 * @param event transaction event being monitored -ie addToCart
 * @example
 * cy.verifyPixelDetails('Internal', 'GTM', 'VS Quiz')
 *
 */
export const verifyPixelDetails = (
    pixelOwner: string,
    platform: string,
    event: string
): void => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const verifyGtmEvent = (
            alias: string,
            labelTitle: string,
            purchaseValue?: string
        ) => {
            cy.wait(alias).then((pixelIntercept: any) => {
                const { label, value } = pixelIntercept.request.query;
                const { statusCode } = pixelIntercept.response;
                expect(label, `label id`).to.eq(labelTitle);
                expect(statusCode, `Query StatusCode`).to.be.oneOf([200, 302]);
                if (purchaseValue) {
                    expect(value, `Purchase amount`).to.eq(purchaseValue);
                }
            });
        };

        const verifyTwitterEvent = (alias: string, transId: string) => {
            cy.wait(alias).then((pixelIntercept: any) => {
                const { p_id: pId, txn_id: txnId } =
                    pixelIntercept.request.query;
                const { statusCode } = pixelIntercept.response;
                expect(pId).to.eq(platform);
                expect(txnId).to.eq(transId);
                expect(statusCode, `Query StatusCode`).to.eq(200);
            });
        };

        switch (platform.toLowerCase()) {
            case 'gtm':
                switch (`${pixelOwner} ${event}`) {
                    case 'Internal VS Quiz':
                    case 'Internal SN Quiz':
                        verifyGtmEvent(
                            '@quizcompletedGtmInternal',
                            staticTestData.pixelDetail.quizcompleted.gtm
                                .internal
                        );
                        break;
                    case 'Kendago VS Quiz':
                        verifyGtmEvent(
                            '@quizcompletedGtmKendago',
                            staticTestData.pixelDetail.quizcompleted.gtm.kendago
                        );
                        break;
                    case 'Internal VS Checkout':
                        verifyGtmEvent(
                            '@addtocartGtmInternal',
                            staticTestData.pixelDetail.addtocart.gtm.internal
                        );
                        break;
                    case 'Internal SN Checkout':
                        verifyGtmEvent(
                            '@addtocartGtmInternal',
                            staticTestData.pixelDetail.addtocart.gtm.internal
                        );
                        if (
                            staticTestData.pixelDetail.addtocart.gtm.internalvsl
                        ) {
                            verifyGtmEvent(
                                '@addtocartGtmInternalvsl',
                                staticTestData.pixelDetail.addtocart.gtm
                                    .internalvsl
                            );
                        }
                        break;
                    case 'Kendago VS Checkout':
                        verifyGtmEvent(
                            '@addtocartGtmKendago',
                            staticTestData.pixelDetail.addtocart.gtm.kendago
                        );
                        break;
                    case 'Internal VS Purchase':
                        verifyGtmEvent(
                            '@purchaseGtmInternal',
                            staticTestData.pixelDetail.purchase.gtm.internal
                        );
                        break;
                    case 'Kendago VS Purchase':
                        verifyGtmEvent(
                            '@purchaseGtmKendago',
                            staticTestData.pixelDetail.purchase.gtm.kendago
                        );
                        break;
                    case 'Internal SN Purchase':
                        verifyGtmEvent(
                            '@purchaseGtmInternal',
                            staticTestData.pixelDetail.purchase.gtm.internal,
                            staticTestData.pixelDetail.purchase.value
                        );
                        if (
                            staticTestData.pixelDetail.purchase.gtm.internalvsl
                        ) {
                            verifyGtmEvent(
                                '@purchaseGtmInternalvsl',
                                staticTestData.pixelDetail.purchase.gtm
                                    .internalvsl,
                                staticTestData.pixelDetail.purchase.value
                            );
                        }

                        break;
                    case 'Kendago SN Purchase':
                        verifyGtmEvent(
                            '@purchaseGtmKendago',
                            staticTestData.pixelDetail.purchase.gtm.kendago,
                            staticTestData.pixelDetail.purchase.value
                        );
                        break;
                    case 'Internal VS Upsell':
                        verifyGtmEvent(
                            '@upsellGtmInternal',
                            staticTestData.pixelDetail.upsell.gtm.internal
                        );
                        break;
                    default:
                        throw new Error('Invalid GTM tag owner selected');
                }
                break;
            case 'twitter':
                switch (`${pixelOwner} ${event}`) {
                    case 'Internal VS PageView':
                        verifyTwitterEvent(
                            '@pageviewTwitterInternal',
                            staticTestData.pixelDetail.pageview.twitter.internal
                        );
                        break;
                    case 'Kendago VS PageView':
                        verifyTwitterEvent(
                            '@pageviewTwitterKendago',
                            staticTestData.pixelDetail.pageview.twitter.kendago
                        );
                        break;
                    case 'Internal VS Quiz':
                    case 'Internal SN Quiz':
                        verifyTwitterEvent(
                            '@quizcompletedTwitterInternal',
                            staticTestData.pixelDetail.quizcompleted.twitter
                                .internal
                        );
                        break;
                    case 'Internal VS Checkout':
                    case 'Internal SN Checkout':
                        verifyTwitterEvent(
                            '@addtocartTwitterInternal',
                            staticTestData.pixelDetail.addtocart.twitter
                                .internal
                        );
                        break;
                    case 'Kendago VS Checkout':
                        verifyTwitterEvent(
                            '@addtocartTwitterKendago',
                            staticTestData.pixelDetail.addtocart.twitter.kendago
                        );
                        break;

                    case 'Internal VS Purchase':
                    case 'Internal SN Purchase':
                        verifyTwitterEvent(
                            '@purchaseTwitterInternal',
                            staticTestData.pixelDetail.purchase.twitter.internal
                        );
                        break;
                    case 'Kendago VS Purchase':
                        verifyTwitterEvent(
                            '@purchaseTwitterKendago',
                            staticTestData.pixelDetail.purchase.twitter.kendago
                        );
                        break;
                    case 'Internal SN Upsell':
                        verifyTwitterEvent(
                            '@upsellTwitterInternal',
                            staticTestData.pixelDetail.upsell.twitter.internal
                        );
                        break;
                    default:
                        throw new Error('Invalid Twitter tag owner selected');
                }
                break;

            default:
                throw new Error('Pixel Platform not yet supported');
        }
    });
};
