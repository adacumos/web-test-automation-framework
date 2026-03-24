import {
    dashboardLocators,
    leOffersPageLocators,
    usersPageLocators,
} from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            attachResource: (
                resourceTable: string,
                referenceTable: string,
                resourceValue: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * Command used to attach resource to another Table
 * @param resourceTable main resource table that will be referenced
 * @param referenceTable reference table to be added
 * @param resourceValue resource value to be added
 * cy.attachResource('Product','Offers','POST WORKOUT')
 */
export const attachResource = (
    resourceTable: string,
    referenceTable: string,
    resourceValue: string
): Cypress.Chainable<any> => {
    cy.logStep(`Attaching new ${referenceTable} resouce to ${resourceTable}`);

    switch (referenceTable) {
        case 'Offers':
            dashboardLocators.selectTab('Offers').click();
            dashboardLocators.attachResourceButton('Offers').click();
            leOffersPageLocators.attachOffer.offer().select(`${resourceValue}`);
            leOffersPageLocators.attachOffer.quantity().clear().type('1');
            leOffersPageLocators.attachOffer.attachOfferButton().click();
            dashboardLocators.trashedResourceFilter('Offers').click();
            dashboardLocators.selectTrashedOption().select('With Trashed');
            dashboardLocators.resourceTableRecord('offers').then((tr) => {
                cy.wrap(tr)
                    .contains('td', `${resourceValue}`)
                    .should('be.visible');
            });
            break;
        case 'Categories':
            dashboardLocators.selectTab('Categories').click();
            dashboardLocators.attachResourceButton('Categories').click();
            break;
        case 'Roles':
            dashboardLocators.selectTab('Roles');
            dashboardLocators.attachResourceButton('Roles').click();
            usersPageLocators.attachRole.roles(`${resourceValue}`);
            usersPageLocators.attachRole.attachRoleButton().click();
            dashboardLocators.selectTab('Roles');
            dashboardLocators
                .getRecord(`${resourceValue}`)
                .should('be.visible');
            break;
        default:
            throw new Error('Selected Product field is invalid or inactive');
    }
    return dashboardLocators.defaultDetailsTab().should('be.visible');
};
