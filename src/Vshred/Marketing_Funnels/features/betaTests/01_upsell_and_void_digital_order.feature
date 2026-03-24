@QA-1437
Feature: Upsell and then void a digital order
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Verify order creation with Custom Diet Plan upsell via the landing page and then void the order
        Given The user visits the base VShred URL
        When The user clicks on the "Programs" header link
        Then The user selects a Program from the list and proceeds to the Order Form
        And The user verifies the "Fat Loss Extreme" program URL
        When The user fills out the Order Form and submits the order
        Then The user lands on the VSU page and skips the video
        When The user clicks the I agree to the payment terms of this recurring product button
        When The user clicks the Verify VSU upsell button
        Then The user lands on the Custom diet plan page and skips the video
        And The user clicks the Custom Diet plan upsell button
        Then The user lands on the Greens page
        When The user clicks the Greens upsell button
        Then The user fills out the supplement order shipping form
        And The user lands on the Verify Order page
        When The user clicks on the review purchase button from the Verify Order page
        Then The user validates the VS purchases made
        Given The user logs into the VShred Admin Tool using an "admin" account
        When The user navigates to "Users" page
        And The user searches for the recently created user email and opens the Information page
        And When The user navigates to the "Purchases" tab
# WIP, up to this point for this PR so we can solve the common steps conflicts
