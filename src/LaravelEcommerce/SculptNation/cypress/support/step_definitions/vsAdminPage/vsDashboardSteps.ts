/// <reference types="cypress" />

import { When, Then, Step } from '@badeball/cypress-cucumber-preprocessor';
import {
    vsDashboardLocators,
    vsUsersPageLocators,
} from '../../locator_libraries';
import { dynamicTestData } from '../../testData';

When(
    'The user navigates to {string} menu of the VS Admin Tool',
    (menuItem: string) => {
        cy.logStep(`Click on ${menuItem}`);
        vsDashboardLocators.selectMenu(menuItem).click();
    }
);

Then(
    'The client purchases are sync in VS admin tool - {string}',
    (orderList: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            // Skip 'Ultimate Recipe' validation in VS Admin - QA-2579'
            const funnelOrders = staticTestData[orderList].filter(
                (orderItem: string) =>
                    orderItem !== 'Ultimate Fat Loss Recipes Collection'
            );
            const clientEmail = dynamicTestData.userEmail;

            Step(
                new Mocha.Context(),
                'The user navigates to "Users" menu of the VS Admin Tool'
            );
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(20000); // expected delays with syncing orders from LE to VS

            cy.url().should('include', 'admin/users');
            vsUsersPageLocators.filterRecord
                .byEmail()
                .clear()
                .type(`${clientEmail}{enter}`);
            vsDashboardLocators
                .getRecord(clientEmail)
                .should('be.visible')
                .parents('tr')
                .within(() => {
                    vsUsersPageLocators.viewButton().click();
                });
            vsDashboardLocators.selectTab('Purchases').click();
            funnelOrders.forEach((orderItem: any) => {
                const orderElement =
                    vsUsersPageLocators.purchasesTab.orderItem(orderItem);
                if (orderElement) {
                    orderElement.should('be.visible');
                }
            });
        });
    }
);

When(
    'The user navigates to {string} - {string} menu',
    (menu: string, menuItem: string) => {
        vsDashboardLocators.selectSubMenu(`${menu}`).click();
        cy.logStep(`Click on ${menuItem}`);
        switch (menuItem) {
            case 'Unassigned Plans':
            case 'Unassigned Plans Beta':
                vsDashboardLocators
                    .selectTrainerMenu('unassigned-beta')
                    .click();
                cy.url().should('include', 'unassigned-beta');
                break;
            case 'Assigned Clients':
            case 'Assigned Clients Beta':
                vsDashboardLocators.selectTrainerMenu('clients-beta').click();
                cy.url().should('include', 'clients-beta');
                break;
            case 'Active Trainers':
                vsDashboardLocators.selectTrainerMenu('team').click();
                cy.url().should('include', 'team');
                break;
            case 'Suspended Trainers':
                vsDashboardLocators.selectTrainerMenu('suspended').click();
                cy.url().should('include', 'suspended');
                break;
            default:
                throw new Error('Trainer Menu selected is not available');
        }
    }
);

Then('Verifies the CDP membership is added to client profile', () => {
    const clientEmail = dynamicTestData.userEmail;

    vsDashboardLocators.selectTab('View').click();
    vsUsersPageLocators.viewTab
        .clientEmail()
        .contains(clientEmail)
        .should('be.visible');
    vsUsersPageLocators.viewTab
        .membershipAbility()
        .contains(/Custom Diet Plan|Custom Training and Diet Plan/);
});

Then('The user impersonates the Client record', () => {
    vsDashboardLocators.selectTab('Edit').click();
    vsUsersPageLocators.editTab.impersonateButton().click();
});

When('The user logs out of VS Admin Tool', () => {
    vsDashboardLocators.logoutVsAdmin().click();
});

When('The client user upsells to an Accelerator Program', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { offerSku, offerTitle } = staticTestData.upSellOffer;
        const clientEmail = dynamicTestData.userEmail;

        Step(
            new Mocha.Context(),
            'The user navigates to "Users" menu of the VS Admin Tool'
        );

        cy.url().should('include', 'admin/users');
        vsUsersPageLocators.filterRecord
            .byEmail()
            .clear()
            .type(`${clientEmail}{enter}`);
        vsDashboardLocators
            .getRecord(clientEmail)
            .should('be.visible')
            .parents('tr')
            .within(() => {
                vsUsersPageLocators.viewButton().click();
            });

        // Create new Order through VS Admin
        cy.addOfferVsAdmin(offerSku, offerTitle);
    });
});

Then(
    'Verifies the {string} membership is added to client profile',
    (membership: string) => {
        const clientEmail = dynamicTestData.userEmail;

        vsDashboardLocators.selectTab('View').click();
        vsUsersPageLocators.viewTab
            .clientEmail()
            .contains(clientEmail)
            .should('be.visible');
        switch (membership.toLowerCase()) {
            case 'cdp':
                vsUsersPageLocators.viewTab
                    .membershipAbility()
                    .contains(/Custom Diet Plan|Custom Training and Diet Plan/);
                break;
            case 'accelerator':
                vsUsersPageLocators.viewTab
                    .membershipAbility()
                    .contains(/Vshred Accelerator Program/i);
                break;
            case 'elite':
                vsUsersPageLocators.viewTab
                    .membershipAbility()
                    .contains(/Vshred Elite Program/i);
                break;
            default:
                throw new Error('Membership type not found');
        }
    }
);

Then('Verifies the refunded order item is sync in VS Admin', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        const { orderItem } = staticTestData.orderTransaction;
        const clientEmail = dynamicTestData.userEmail;

        Step(
            new Mocha.Context(),
            'The user navigates to "Users" menu of the VS Admin Tool'
        );
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(10000); // expected delays with syncing orders from LE to VS
        cy.url().should('include', 'admin/users');
        vsUsersPageLocators.filterRecord
            .byEmail()
            .clear()
            .type(`${clientEmail}{enter}`);
        vsDashboardLocators
            .getRecord(clientEmail)
            .should('be.visible')
            .parents('tr')
            .within(() => {
                vsUsersPageLocators.viewButton().click();
            });
        vsDashboardLocators.selectTab('Purchases').click();
        vsUsersPageLocators.purchasesTab
            .orderItem(orderItem)
            .should('be.visible')
            .parents('tr')
            .within(() => {
                vsUsersPageLocators.purchasesTab
                    .orderItemStatus()
                    .invoke('text')
                    .then((status) => {
                        expect(status.trim()).to.equal('Returned');
                    });
            });
    });
});

Then(
    'User select the {string} social media icon and verify',
    (socialMediaIcon: string) => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            if (socialMediaIcon.includes('Youtube')) {
                vsDashboardLocators.socialMediaIcons
                    .youtube()
                    .should('be.visible')
                    .invoke('attr', 'href')
                    .then((url = staticTestData.SocialMediaLinks.youtube) => {
                        cy.visit(url as string);
                    });
                cy.url().should(
                    'include',
                    staticTestData.SocialMediaLinks.youtube
                );
            }
            if (socialMediaIcon.includes(`Facebook`)) {
                vsDashboardLocators.socialMediaIcons
                    .facebook()
                    .should('be.visible');
            }
            if (socialMediaIcon.includes(`Instagram`)) {
                vsDashboardLocators.socialMediaIcons
                    .instagram()
                    .should('be.visible')
                    .invoke('attr', 'href')
                    .then((url = staticTestData.SocialMediaLinks.instagram) => {
                        cy.visit(url as string);
                    });
                cy.url().should(
                    'include',
                    staticTestData.SocialMediaLinks.instagram
                );
            }
            if (socialMediaIcon.includes(`Linkedin`)) {
                vsDashboardLocators.socialMediaIcons
                    .linkedin()
                    .should('be.visible')
                    .invoke('attr', 'href')
                    .then((url = staticTestData.SocialMediaLinks.linkedin) => {
                        cy.visit(url as string);
                    });
                cy.url().should(
                    'include',
                    staticTestData.SocialMediaLinks.linkedin
                );
            }
            if (socialMediaIcon.includes(`Apple`)) {
                vsDashboardLocators.socialMediaIcons
                    .apple()
                    .should('be.visible');
            }
            if (socialMediaIcon.includes(`Pinterest`)) {
                vsDashboardLocators.socialMediaIcons
                    .pinterest()
                    .should('be.visible')
                    .invoke('attr', 'href')
                    .then((url = staticTestData.SocialMediaLinks.pinterest) => {
                        cy.visit(url as string);
                    });
                cy.url().should(
                    'include',
                    staticTestData.SocialMediaLinks.pinterest
                );
            }
            if (socialMediaIcon.includes(`Tiktok`)) {
                vsDashboardLocators.socialMediaIcons
                    .tiktok()
                    .should('be.visible')
                    .invoke('attr', 'href')
                    .then((url = staticTestData.SocialMediaLinks.tiktok) => {
                        cy.visit(url as string);
                    });
                cy.url().should(
                    'include',
                    staticTestData.SocialMediaLinks.tiktok
                );
            }
            if (socialMediaIcon.includes(`X`)) {
                vsDashboardLocators.socialMediaIcons
                    .x()
                    .should('be.visible')
                    .invoke('attr', 'href')
                    .then((url = staticTestData.SocialMediaLinks.x) => {
                        cy.visit(url as string);
                    });
                cy.url().should('include', staticTestData.SocialMediaLinks.x);
            }
            if (socialMediaIcon.includes(`Google`)) {
                vsDashboardLocators.socialMediaIcons
                    .google()
                    .should('be.visible')
                    .invoke('attr', 'href')
                    .then((url = staticTestData.SocialMediaLinks.google) => {
                        cy.visit(url as string);
                    });
                cy.url().should(
                    'include',
                    staticTestData.SocialMediaLinks.google
                );
            }
        });
    }
);

Then('The user selects and verifies the live chat feature', () => {
    vsDashboardLocators.liveChat().click();
    vsDashboardLocators.liveChatTextBox().should('be.visible');
});

Then('The user selects VSU from home page', () => {
    vsDashboardLocators.vusButton().click();
});
