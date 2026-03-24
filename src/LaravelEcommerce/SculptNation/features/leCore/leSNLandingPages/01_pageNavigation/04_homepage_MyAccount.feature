@QA-1503 @Login @leCore @homepage @lePage @clientPages
Feature: Sculptnation My Account Pages
    Background: Load test data
        Given The user loads the LE test data
    Scenario: Purchase Items to create User Account
        Given The user navigates to the SculptNation homepage
        When The user navigates to "Weight Loss Fat Burning" section of the landing page
        Then The user clicks "Burn PM" bottle image 2 on the landing page
        And The user clicks Buy Now button from the product page
        And The user selects the Subscribe Now button under the One Bottle option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the Subscribe Now button under the One Bottle option on the "first" upsell page
        And The user clicks the Subscribe Now button under the One Bottle option on the "second" upsell page

    Scenario: Login as a new Client user
        Given The user navigates to the SculptNation homepage
        When The user clicks the "My-Account" header menu
        Then The "My-Account" page is loaded with the expected page sections
        And The user logs into the SculptNation account
        Then The user validates the "subscription" orders on the SculptNation Account Orders page
        And The user Views the "Order" details
        Then The user validates the subscription orders on the SculptNation Account Subscriptions page
        And The user Views the "Subscription" details
        When The user navigates to MyAccount "Addresses" page
        Then The user's "Addresses" record is validated
        When The user navigates to MyAccount "Account-Details" page
        Then The user's "Account-Details" record is validated

    Scenario: Client user updates the Payment Details
        Given The user navigates to the SculptNation homepage
        And The user logs into the SculptNation account
        When The user navigates to MyAccount "Update-Payment" page
        Then The user can update the credit card details

    Scenario: Client user updates the Account Name Details
        Given The user navigates to the SculptNation homepage
        And The user logs into the SculptNation account
        When The user navigates to MyAccount "Account-Details" page
        Then The user can update the account's First and Lastname details

    Scenario: Client user updates the Account Contact Details
        Given The user navigates to the SculptNation homepage
        And The user logs into the SculptNation account
        When The user navigates to MyAccount "Account-Details" page
        Then The user can update the account's Contact Details

    Scenario: Client user updates the Login Credentials
        Given The user navigates to the SculptNation homepage
        And The user logs into the SculptNation account
        When The user navigates to MyAccount "Account-Details" page
        And The user can update the account's Password details
        Then The user can successfully login with the updated password

    Scenario: Login as an Admin user
        Given The user navigates to the SculptNation homepage
        Then The admin user logs into the SculptNation account
