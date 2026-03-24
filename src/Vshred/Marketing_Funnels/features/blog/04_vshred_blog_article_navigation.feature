@blog
Feature: Blog article navigation
    Scenario: The user checks the article navigation functionalities
        Given The user visits the VShred blog page
        When The user clicks the "Older Posts" navigation button on the blog page
        Then The user is taken to page 2 of the blog
        When The user clicks the "Older Posts" navigation button on the blog page
        Then The user is taken to page 3 of the blog
        When The user clicks the "Newer Posts" navigation button on the blog page
        Then The user is taken to page 2 of the blog
        When The user clicks the "Newer Posts" navigation button on the blog page
        Then The user is taken to the first page of the blog





