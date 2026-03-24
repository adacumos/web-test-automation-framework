@blog
Feature: Blog take quiz redirect
    Background: Load test data
        Given The user loads the VS test data

    Scenario: The user clicks on a quiz link from the blog
        Given The user visits the VShred blog page
        When The user clicks on the Take Quiz button on the VS blog page
        Then The user checks that they are taken to the quiz page
