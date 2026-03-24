@blog
Feature: Blog search functionality
    Scenario: The user searches for an article on the blog using the search functionality
        Given The user visits the VShred blog page
        When The user searches for the "abs" keyword on the VS blog page
        Then The user sees blog posts containing the word "abs"
