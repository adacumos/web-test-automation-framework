const blogPageLocators = {
    searchInput: () => cy.findByPlaceholderText(/search …/i),

    // social media icons
    socialMedia: {
        youTube: () =>
            cy.get(
                'div.sidebar-area > section:nth-child(2) > div > div > a:nth-child(1)'
            ),
        pintrest: () =>
            cy.get(
                'div.sidebar-area > section:nth-child(2) > div > div > a:nth-child(2)'
            ),
        facebook: () =>
            cy.get(
                'div.sidebar-area > section:nth-child(2) > div > div > a:nth-child(3)'
            ),
        instagram: () =>
            cy.get(
                'div.sidebar-area > section:nth-child(2) > div > div > a:nth-child(4)'
            ),
    },

    takeQuizButton: () =>
        cy.findByRole('link', {
            name: /take the quiz/i,
        }),
    supplementLinks: {
        femaleSupplementGuide: () =>
            cy.findByRole('heading', {
                name: /female supplement guide/i,
            }),
        maleSupplementGuide: () => cy.get('#male-supplementguid-2'),
    },

    categoriesDropdownButton: () =>
        cy.get('.menu-main-container.category-menu'),
    categoriesDropdownList: () =>
        cy.get('.menu-main-container.category-menu li a'),

    filteredArticlesList: () => cy.get('.content-boxed'),

    blogArticles: () => cy.get('article > div > h5 > a'),

    navigation: {
        olderPostsButton: () =>
            cy.findByRole('link', {
                name: /older posts/i,
            }),
        newerPostsButton: () =>
            cy.findByRole('link', {
                name: /newer posts/i,
            }),
    },

    commentsSection: {
        commentField: () => cy.get('#comment'),
        commentAuthor: () => cy.get('#author'),
        commentAuthorEmail: () => cy.get('#email'),
        commentAuthorSite: () => cy.get('#url'),
        submitCommentButton: () => cy.get('#submit'),
        postedComment: () => cy.get('.comment'),
    },

    adminPortal: {
        loginForm: {
            userNameInput: () =>
                cy.findByRole('textbox', {
                    name: /username or email address/i,
                }),
            passwordInput: () => cy.get('#user_pass'),
            logInButton: () =>
                cy.findByRole('button', {
                    name: /log in/i,
                }),
        },
        commentsPage: {
            commentsList: () => cy.get('#the-comment-list tr'),
        },
        postsPage: {
            addNewPostButton: () => cy.contains('Add New'),
            postTitleInput: () =>
                cy.findByRole('textbox', {
                    name: /add title/i,
                }),
            postContentInput: () => cy.iFrame('#content_ifr').find('p'),
            publishButton: () => cy.contains('button', 'Publish'),
            publishConfirm: () => cy.get('#publish'),
            viewPostButton: () => cy.contains('a', 'View Post'),
            trashButton: () =>
                cy.findByRole('link', {
                    name: /move “test” to the trash/i,
                }),
            postsList: () => cy.get('#the-list tr'),
        },
    },
};

export default blogPageLocators;
