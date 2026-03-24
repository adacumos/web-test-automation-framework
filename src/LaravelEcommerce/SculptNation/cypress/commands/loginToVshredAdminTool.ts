import { loginPageLocators } from '../support/locator_libraries';

declare global {
    namespace Cypress {
        interface Chainable {
            loginToVshredAdminTool: (
                userType: string
            ) => Cypress.Chainable<any>;
        }
    }
}

/**
 * Command used to login to the SculptNation Admin Tool using the provided credentials.
 * @param userType the user Role
 * @example
 * cy.loginToVshredAdminTool('trainer')
 *
 */
export const loginToVshredAdminTool = (
    userType: string
): Cypress.Chainable<any> => {
    const vshredUrl = Cypress.env('VS_ADMIN_URL');
    const vsAdminUser = Cypress.env('VS_ADMIN_USER');
    const trainerMgrUser = Cypress.env('VS_TRAINER_USER');
    const vsSalesUser = Cypress.env('VS_CSREP_USER');
    const adminPassw = Cypress.env('VS_PASSWORD');
    // need to add a VS_UAT_TRAINER_USER and UAT_ADMIN_PASSWORD into "cypress.env,json" that will log into VS prod
    const uatVsTrainer = Cypress.env('VS_UAT_TRAINER_USER');
    const uatAdminPassw = Cypress.env('UAT_ADMIN_PASSWORD');

    cy.clearAllSessionData();
    cy.visit(`${vshredUrl}/login`);

    cy.url().then((checkoutPageUrl: any) => {
        const isUatProdServer =
            checkoutPageUrl.includes(`https://vshred.com`) ||
            checkoutPageUrl.includes(`https://le.vshred.com`) ||
            checkoutPageUrl.includes(`https://le.vshredmd.com`) ||
            checkoutPageUrl.includes(`https://uat.vshred.com`);

        if (isUatProdServer) {
            loginPageLocators.vsEmailInputField().clear().type(uatVsTrainer);
            loginPageLocators.passwordInputField().clear().type(uatAdminPassw);
        } else {
            switch (userType.toLowerCase()) {
                case 'admin':
                    loginPageLocators
                        .vsEmailInputField()
                        .clear()
                        .type(vsAdminUser);
                    loginPageLocators
                        .passwordInputField()
                        .clear()
                        .type(adminPassw);
                    break;
                case 'trainer manager':
                case 'trainer':
                    loginPageLocators
                        .vsEmailInputField()
                        .clear()
                        .type(trainerMgrUser);
                    loginPageLocators
                        .passwordInputField()
                        .clear()
                        .type(adminPassw);
                    break;
                case 'assigned trainer':
                    cy.get('@staticTestData').then((staticTestData: any) => {
                        const { assignedTrainerUser } =
                            staticTestData.trainerData;
                        loginPageLocators
                            .vsEmailInputField()
                            .clear()
                            .type(assignedTrainerUser);
                        loginPageLocators
                            .passwordInputField()
                            .clear()
                            .type(adminPassw);
                    });
                    break;
                case 'sales':
                    loginPageLocators
                        .vsEmailInputField()
                        .clear()
                        .type(vsSalesUser);
                    loginPageLocators
                        .passwordInputField()
                        .clear()
                        .type(adminPassw);
                    break;
                default:
                    throw new Error('Selected user type is not yet supported');
            }
        }
    });
    loginPageLocators.loginButton().click();

    return cy.logStep(`${userType} is logged in successfully`);
};
