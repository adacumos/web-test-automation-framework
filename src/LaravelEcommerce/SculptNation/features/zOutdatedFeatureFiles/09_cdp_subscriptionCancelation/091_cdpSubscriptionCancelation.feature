
Feature: E2E CDP Subscription Cancelation through LE Admin
    Background: Load test data
        Given The user loads the LE test data

    Scenario: CDP Subscription Cancelation through LE Admin
        Given The user navigates to V Shred Survey page
        Then The user logs into the Admin Tool using an account with "admin" credentials
        When The user creates a new test user in the Admin Tool
        Then The user navigates to the New Order page
        When The user searches and adds a "Silver Custom Diet Plan" offer
        And The user adds a new shipping and billing address on the New Order page
        Then The user processes the payment using a "valid" credit card
        When The user clicks the "Back To User" button on the New Order page
        Then The user sees the Recent Orders page
        When The user clicks the "Customer Name" button on the Recent Orders page
        Then The Offer purchased is listed in the User Orders table - "silverSubscription"
        And The Subscription offer is listed in the User Subscriptions table
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "silverSubscription"
        Then Verifies the CDP membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        Given The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        Then The user logs into the Admin Tool using an account with "admin" credentials
        And The user searches the "dynamic" test email
        And The Subscription offer is listed in the User Subscriptions table
        Then The user cancels the subscription
