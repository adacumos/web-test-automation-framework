@smoke
Feature: 20 Minutes To Set Your Metabolism
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Move at home funnel
        Given The user visits the base VShred URL
        Then The User verifies the video on the homepage - 20 minutes to set your metabolism
        When The user clicks on the video on the homepage
        Then The user clicks the Everything for just $57 button
        And The user verifies the "Fat Loss Extreme" program URL
        When The user fills out the Order Form and submits the order
        Then The user lands on the Burn Evolved page and skips the video
        When The user clicks on the Burn Evolved One bottle per month subscription
        Then The user fills out the supplement order shipping form
        And The user lands on the BurnPM page and skips the video
        Then The user clicks the BurnPM One bottle per month subscription
        Then The user lands on the Custom diet plan page and skips the video
        When The user clicks the Custom Diet plan upsell button
        Then The user lands on the VSU page and skips the video
        When The user clicks the Verify VSU upsell button
        Then The user lands on the Greens page
        When The user clicks the Greens upsell button
        Then The user lands on the Verify Order page
