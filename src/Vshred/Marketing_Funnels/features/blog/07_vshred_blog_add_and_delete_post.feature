@blog
Feature: Add and delete post functionality
    Scenario: Login as admin to create a new post and views it
        Given The administrator logs into the WP blog dashboard
        When The administrator navigates to the "Posts" section of the blog WP dashboard
        Then The administrator adds a new post in the blog WP dashboard

    Scenario: The user checks that the new post is visible
        Given The user visits the VShred blog page
        Then The user "sees" the latest blog post added by the administrator in the posts list
        When The user selects the latest blog post added by the administrator
        Then The user sees the latest blog post added by the administrator

    Scenario: Login as admin to delete the new post
        Given The administrator logs into the WP blog dashboard
        When The administrator navigates to the "Posts" section of the blog WP dashboard
        Then The administrator deletes the latest post added on the blog WP dashboard

    Scenario: The user checks that the new post is no longer present
        Given The user visits the VShred blog page
        Then The user "does not see" the latest blog post added by the administrator in the posts list
