const processOrderPageLocators = {
    // page buttons
    createUserButton: () => cy.contains('a.btn-primary', 'Create User'),
    findUserButton: () => cy.contains('a.btn-primary', 'Find User'),
    viewAllOrderButton: () =>
        cy.findByRole('button', { name: /view all orders/i }),
    createOrderButton: () => cy.findByRole('button', { name: /create order/i }),

    pageHeader: () => cy.findAllByRole('heading', { name: /find customer/i }),
    searchUserInput: () =>
        cy.get('input[placeholder="Search by Name or Email"]'),

    userInformationIframe: {
        firstName: () =>
            cy.iFrame('[src*="/resources/users/new?"]').find('#first_name'),
        lastName: () =>
            cy.iFrame('[src*="/resources/users/new?"]').find('#last_name'),
        email: () => cy.iFrame('[src*="/resources/users/new?"]').find('#email'),
        password: () =>
            cy.iFrame('[src*="/resources/users/new?"]').find('#password'),
        confirmPassword: () =>
            cy
                .iFrame('[src*="/resources/users/new?"]')
                .find('#password_confirmation'),
        createUserButton: () =>
            cy
                .iFrame('[src*="/resources/users/new?"]')
                .find('button[dusk="create-button"]'),
        successToast: () =>
            cy
                .iFrame('[src*="/resources/users/new?"]')
                .find('.toasted.nova.success'),
    },
    userDetailsIframe: {
        userID: () =>
            cy
                .iFrame('[src*="/resources/users/new?"]')
                .contains('h4.text-80', 'ID'),
        firstName: () =>
            cy
                .iFrame('[src*="/resources/users/new?"]')
                .contains('h4.text-80', 'First Name'),
        lastName: () =>
            cy
                .iFrame('[src*="/resources/users/new?"]')
                .contains('h4.text-80', 'Last Name'),
        email: () =>
            cy
                .iFrame('[src*="/resources/users/new?"]')
                .contains('h4.text-80', 'Email'),
    },
};
export default processOrderPageLocators;
