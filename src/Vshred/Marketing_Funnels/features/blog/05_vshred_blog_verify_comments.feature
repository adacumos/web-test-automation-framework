# @blog
Feature: Blog comments functionality
    Scenario: The user checks that they can add comments on the blog articles
        Given The user visits the VShred blog page
        When The user selects the first blog article on the page
        Then The user adds a comment in the blog post comments section

    Scenario: Login as admin to approve the comment
        Given The administrator logs into the WP blog dashboard
        When The administrator navigates to the "Comments" section of the blog WP dashboard
        Then The administrator approves the latest comment from the Comments list of the blog WP dashboard

    Scenario: Go back to the blog as a user and see if the comment is published
        Given The user visits the VShred blog page
        When The user selects the previously viewed blog article on the page
        Then The user sees the previously added comment in the blog post comments section
