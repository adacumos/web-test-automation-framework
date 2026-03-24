/// <reference types="cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { dynamicTestData } from 'Vshred/_libs/testData';
import { blogPageLocators, surveyQuizLocators } from '../locator_libraries';

Given('The user visits the VShred blog page', () => {
    cy.clearAllSessionData();
    if (Cypress.env('USE_DEV_BLOG') === true) {
        cy.logStep('Navigating to Dev Env Blog URL');
        cy.visit(Cypress.env('devBlogURL'));
    } else {
        cy.logStep('Navigating to Staging Env Blog URL');
        cy.visit('blog');
    }
});

Given('The administrator logs into the WP blog dashboard', () => {
    cy.clearAllSessionData();
    if (Cypress.env('USE_DEV_BLOG') === true) {
        cy.logStep('Navigating to the Admin Dev Env Blog URL');
        cy.visit(`${Cypress.env('devBlogURL')}wp-admin/`);
    } else {
        cy.logStep('Navigating to Staging Env Blog URL');
        cy.visit('blog/wp-admin/');
    }

    /* eslint-disable cypress/no-unnecessary-waiting */
    cy.wait(2000);

    blogPageLocators.adminPortal.loginForm
        .userNameInput()
        .type(Cypress.env('BLOG_ADMIN_USERNAME'));
    blogPageLocators.adminPortal.loginForm
        .passwordInput()
        .type(Cypress.env('BLOG_ADMIN_PASSWORD'));
    blogPageLocators.adminPortal.loginForm.logInButton().click();
});

When(
    'The administrator navigates to the {string} section of the blog WP dashboard',
    (section: string) => {
        cy.contains(section).click();
    }
);

Then(
    'The administrator deletes the latest post added on the blog WP dashboard',
    () => {
        blogPageLocators.adminPortal.postsPage
            .postsList()
            .eq(0)
            .scrollIntoView()
            .then((comment) => {
                cy.wrap(comment).should(
                    'contain.text',
                    dynamicTestData.blogPostTitle
                );
                cy.wrap(comment).realHover().contains('Trash').click();
            });
    }
);

Then('The administrator adds a new post in the blog WP dashboard', () => {
    dynamicTestData.blogPostTitle = `Test Post title ${Cypress._.random(
        0,
        1e9
    )}`;
    dynamicTestData.blogPostContent = `Test Post content ${Cypress._.random(
        0,
        1e9
    )}`;

    blogPageLocators.adminPortal.postsPage.addNewPostButton().click();
    blogPageLocators.adminPortal.postsPage
        .postTitleInput()
        .type(dynamicTestData.blogPostTitle);
    blogPageLocators.adminPortal.postsPage
        .postContentInput()
        .type(dynamicTestData.blogPostContent);

    /* eslint-disable cypress/no-unnecessary-waiting */
    cy.wait(2000);

    blogPageLocators.adminPortal.postsPage.publishConfirm().click();
    blogPageLocators.adminPortal.postsPage.viewPostButton().click();

    cy.contains('h1', dynamicTestData.blogPostTitle).should('be.visible');
    cy.contains(
        new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    );
    cy.contains('p', dynamicTestData.blogPostContent).should('be.visible');
});

Then(
    'The administrator approves the latest comment from the Comments list of the blog WP dashboard',
    () => {
        /* eslint-disable cypress/no-unnecessary-waiting */
        cy.wait(3000);

        blogPageLocators.adminPortal.commentsPage
            .commentsList()
            .eq(0)
            .scrollIntoView()
            .then((comment) => {
                cy.wrap(comment).should(
                    'contain.text',
                    dynamicTestData.blogCommentMessage
                );
                cy.wrap(comment).should(
                    'contain.text',
                    dynamicTestData.blogCommentAuthor
                );
                cy.wrap(comment).realHover().contains('Approve').click();
            });
    }
);

When('The user selects the first blog article on the page', () => {
    blogPageLocators
        .blogArticles()
        .eq(0)
        .then((blogTitle: any) => {
            dynamicTestData.blogPostTitle = blogTitle.text();
            cy.wrap(blogTitle).click();
        });
});

When('The user selects the previously viewed blog article on the page', () => {
    cy.contains(dynamicTestData.blogPostTitle).click();
});

When('The user selects the latest blog post added by the administrator', () => {
    blogPageLocators
        .blogArticles()
        .contains(dynamicTestData.blogPostTitle)
        .click();
});

Then(
    /^The user "(sees|does not see)" the latest blog post added by the administrator in the posts list$/,
    (status: string) => {
        if (status === 'sees') {
            blogPageLocators
                .blogArticles()
                .should('contain.text', dynamicTestData.blogPostTitle);
        } else if (status === 'does not see') {
            blogPageLocators
                .blogArticles()
                .should('not.contain.text', dynamicTestData.blogPostTitle);
        } else {
            throw new Error('Status is not specified correctly');
        }
    }
);

Then('The user sees the latest blog post added by the administrator', () => {
    cy.contains('h1', dynamicTestData.blogPostTitle).should('be.visible');
    cy.contains(
        new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    );
    cy.contains('p', dynamicTestData.blogPostContent).should('be.visible');
});

Then('The user adds a comment in the blog post comments section', () => {
    cy.logStep('Add a test comment to a blog post');

    dynamicTestData.blogCommentMessage = `Test comment ${Cypress._.random(
        0,
        1e9
    )}`;
    dynamicTestData.blogCommentAuthor = `Test name ${Cypress._.random(0, 1e9)}`;
    dynamicTestData.blogCommentEmail = `test_email${Cypress._.random(
        0,
        1e9
    )}@vshred.com`;
    dynamicTestData.blogCommentSite = 'http://www.test-site.com';

    blogPageLocators.commentsSection
        .commentField()
        .type(dynamicTestData.blogCommentMessage);
    blogPageLocators.commentsSection
        .commentAuthor()
        .type(dynamicTestData.blogCommentAuthor);
    blogPageLocators.commentsSection
        .commentAuthorEmail()
        .type(dynamicTestData.blogCommentEmail);
    blogPageLocators.commentsSection
        .commentAuthorSite()
        .type(dynamicTestData.blogCommentSite);

    blogPageLocators.commentsSection.submitCommentButton().click();

    /* eslint-disable cypress/no-unnecessary-waiting */
    cy.wait(5000);
});

Then(
    'The user sees the previously added comment in the blog post comments section',
    () => {
        blogPageLocators.commentsSection
            .postedComment()
            .last()
            .should('be.visible')
            .then((commentContent) => {
                cy.wrap(commentContent).should(
                    'contain.text',
                    dynamicTestData.blogCommentMessage
                );
                cy.wrap(commentContent).should(
                    'contain.text',
                    dynamicTestData.blogCommentAuthor
                );
                cy.wrap(commentContent).should(
                    'contain.text',
                    new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })
                );
            });
    }
);

When(
    'The user clicks the {string} navigation button on the blog page',
    (navigationButton: string) => {
        switch (navigationButton) {
            case 'Older Posts':
                blogPageLocators.navigation.olderPostsButton().click();
                break;
            case 'Newer Posts':
                blogPageLocators.navigation.newerPostsButton().click();
                break;
            default:
                throw new Error('Invalid navigation button specified');
        }
    }
);

Then('The user is taken to page {int} of the blog', (pageNumber: number) => {
    cy.url().should('include', `/page/${pageNumber}/`);
});

Then('The user is taken to the first page of the blog', () => {
    cy.url().should('not.include', `/page/`);
});

When(
    'The user searches for the {string} keyword on the VS blog page',
    (keyword: string) => {
        blogPageLocators.searchInput().type(`${keyword}{enter}`);
    }
);

Then(
    'The user sees blog posts containing the word {string}',
    (keyword: string) => {
        cy.contains('0 results found').should('not.exist');

        cy.contains('No search results found').should('not.exist');

        blogPageLocators.filteredArticlesList().each((blogEntry: any) => {
            cy.wrap(blogEntry).contains(keyword, {
                matchCase: false,
            });
        });
    }
);

Then(
    /^The user "(sees|does not see)" the article labeled "([^"]*)" on the blog page$/,
    (state: string, articleTitle: string) => {
        switch (state) {
            case 'sees':
                cy.contains(articleTitle).should('be.visible');
                break;
            case 'does not see':
                cy.contains(articleTitle).should('not.exist');
                break;
            default:
                throw new Error('Invalid state specified');
        }
    }
);

When(
    'The user selects {string} from the blog article categories dropdown list',
    (categoryName: string) => {
        blogPageLocators.categoriesDropdownButton().realHover();

        blogPageLocators
            .categoriesDropdownList()
            .contains(categoryName)
            .click();
    }
);

When(
    'The user selects {string} from the blog article categories quicklinks',
    (categoryName: string) => {
        cy.contains('#menu-blog-menu li a', categoryName).click();
    }
);

When('The user clicks on the Take Quiz button on the VS blog page', () => {
    blogPageLocators.takeQuizButton().invoke('removeAttr', 'target').click();
});

Then('The user checks that they are taken to the quiz page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        cy.url().should('contain', staticTestData.surveyURL);
        surveyQuizLocators.surveyTitle().should('be.visible');
    });
});

Then('The user verifies the social media links on the VS blog page', () => {
    cy.get('@staticTestData').then((staticTestData: any) => {
        blogPageLocators.socialMedia.pintrest().then((link: any) => {
            cy.wrap(link).should(
                'have.prop',
                'href',
                staticTestData.pintrestLink
            );
            cy.request(link.prop('href')).its('status').should('eq', 200);
        });

        blogPageLocators.socialMedia.facebook().then((link: any) => {
            cy.wrap(link).should(
                'have.prop',
                'href',
                staticTestData.facebookLink
            );
            cy.request(link.prop('href')).its('status').should('eq', 200);
        });

        blogPageLocators.socialMedia.instagram().then((link) => {
            cy.wrap(link).should(
                'have.prop',
                'href',
                staticTestData.instagramLink
            );
            cy.request(link.prop('href')).its('status').should('eq', 200);
        });

        blogPageLocators.socialMedia.youTube().then((link) => {
            cy.wrap(link).should(
                'have.prop',
                'href',
                staticTestData.youTubeLink
            );
            cy.request(link.prop('href')).its('status').should('eq', 200);
        });
    });
});

Then(
    'The user verifies the male and female supplement links on the VS blog page',
    () => {
        cy.get('@staticTestData').then((staticTestData: any) => {
            blogPageLocators.supplementLinks
                .maleSupplementGuide()
                .then((maleGuide: any) => {
                    cy.wrap(maleGuide)
                        .find('a')
                        .should(
                            'have.prop',
                            'href',
                            staticTestData.maleSupplementGuide
                        );
                });
            blogPageLocators.supplementLinks
                .femaleSupplementGuide()
                .then((femaleGuide: any) => {
                    cy.wrap(femaleGuide)
                        .parent()
                        .find('a')
                        .should(
                            'have.prop',
                            'href',
                            staticTestData.femaleSupplementGuide
                        );
                });
        });
    }
);
