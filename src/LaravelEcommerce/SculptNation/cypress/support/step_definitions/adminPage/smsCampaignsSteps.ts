import { Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    dashboardLocators,
    smsCampaignsLocators,
} from '../../locator_libraries';

Then('The user creates a new SMS Campaign', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        dashboardLocators.createButton().click();
        const { Name } = staticTestData.createNewSmsCampaign;
        const { Vendor } = staticTestData.createNewSmsCampaign;
        const { Endpoint } = staticTestData.createNewSmsCampaign;
        smsCampaignsLocators.nameField().clear().type(`${Name}`);
        smsCampaignsLocators.vendorField().clear().type(`${Vendor}`);
        smsCampaignsLocators.endpointField().clear().type(`${Endpoint}`);
        dashboardLocators.createButton().click();
        dashboardLocators.successToast();
        /* eslint-disable cypress/no-unnecessary-waiting */
        cy.wait(3000); // Page elements are not loading in time for next line to execute, adding a small wait
        dashboardLocators.cmsLocator().eq(4).invoke('text').as('SmsCampaignID');
    });
});

Then('The user Verifies the newly created SMS Campaign', () => {
    cy.get<string>('@SmsCampaignID').then((SmsCampaignID) => {
        cy.wait(20000);
        dashboardLocators.searchInput().type(SmsCampaignID).type('{enter}');
    });
    smsCampaignsLocators.viewSMSCampaign().click();
});

Then('The user Deletes the newly created SMS Campaign', () => {
    smsCampaignsLocators.deleteButton().click();
    smsCampaignsLocators.confirmDeleteButton().click();
    dashboardLocators.successToast();
});

Then(
    'The user Verifies the newly created SMS Campaign no longer exists',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            cy.get<string>('@SmsCampaignID').then((SmsCampaignID) => {
                dashboardLocators
                    .searchInput()
                    .type(SmsCampaignID)
                    .type('{enter}');
                smsCampaignsLocators
                    .confirmSMSCampaignDeleted()
                    .contains(staticTestData.VerifyDeletedTaxNexusID);
            });
        });
    }
);
