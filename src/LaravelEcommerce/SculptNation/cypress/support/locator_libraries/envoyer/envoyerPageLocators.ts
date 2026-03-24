const envoyerPageLocators = {
    loginPage: {
        emailTextBox: () => cy.get('input[type="email"]'),
        passwordTextBox: () => cy.get('input[type="password"]'),
        continueButton: () => cy.findByRole('button', { name: /continue/i }),
        tokenTextBox: () => cy.findByRole('textbox', { name: /token/i }),
        verifyButton: () => cy.findByRole('button', { name: /verify/i }),
    },
    dashboardPage: {
        testEnvLink: (envName: string) =>
            cy.findByRole('heading', { name: envName }),
        deployDialog: () => cy.get('#modal-deploy-project'),
        deployButton: () => cy.findByRole('button', { name: /deploy/i }),
        branchText: () => cy.findByText(/a different branch/i),
    },
};

export default envoyerPageLocators;
