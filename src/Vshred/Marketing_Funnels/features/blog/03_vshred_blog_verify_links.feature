@blog
Feature: Verify all links are working
    Background: Load test data
        Given The user loads the VS test data

    Scenario: The user checks the links for YouTube, Pintrest, Instagram and Facebook are working
        Given The user visits the VShred blog page
        Then The user verifies the social media links on the VS blog page
        And The user verifies the male and female supplement links on the VS blog page
