import { consumerAccountPageLocators } from '../../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            completeVsMemberProfile: (
                userEmail: string
            ) => Cypress.Chainable<any>;
        }
    }
}
/**
 * command used to fillout and complete the VS Member Profile
 * @param userEmail client record email
 * example:  completeVsMemberProfile('alice2024@google.com')
 */

export const completeVsMemberProfile = (
    userEmail: string
): Cypress.Chainable<any> => {
    cy.url().then(($url) => {
        if (!$url.includes('/member/profile')) {
            consumerAccountPageLocators.vsMemberAccountPage.memberProfile
                .editProfileButton()
                .click();
        }
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000); // expected delays in showing the banner;
        // eslint-disable-next-line cypress/no-force
        cy.get('body').click(100, 100, { force: true });

        consumerAccountPageLocators.vsMemberAccountPage.memberProfile
            .memberEmail()
            .should('contain.value', userEmail);
        consumerAccountPageLocators.vsMemberAccountPage.memberProfile
            .memberGender()
            .select('Female');

        consumerAccountPageLocators.vsMemberAccountPage.memberProfile
            .profileForm()
            .should('be.visible')
            .then(($body) => {
                if ($body.text().includes('Height')) {
                    consumerAccountPageLocators.vsMemberAccountPage.memberProfile
                        .birthDate()
                        .type('1995-01-05');
                    consumerAccountPageLocators.vsMemberAccountPage.memberProfile
                        .heightFeet()
                        .invoke('val', 5);
                    consumerAccountPageLocators.vsMemberAccountPage.memberProfile
                        .heightInch()
                        .invoke('val', 10);
                    consumerAccountPageLocators.vsMemberAccountPage.memberProfile
                        .weight()
                        .type('235');
                    consumerAccountPageLocators.vsMemberAccountPage.memberProfile
                        .fitnessActivity('light')
                        .click();
                    consumerAccountPageLocators.vsMemberAccountPage.memberProfile
                        .fitnessGoal()
                        .click();
                }
                consumerAccountPageLocators.vsMemberAccountPage.memberProfile
                    .saveProfileButton()
                    .click();
            });
    });

    return consumerAccountPageLocators.vsMemberAccountPage
        .toastMessage()
        .should('contain', 'Profile updated');
};
