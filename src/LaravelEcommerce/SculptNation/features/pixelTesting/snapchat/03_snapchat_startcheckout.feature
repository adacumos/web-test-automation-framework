@QA-2607 @QA-2718 @pixelTests @snapchat
Feature: Vshred Snapchat Pixel Testing - Start Checkout
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Snapchat - Vshred Product - Start Checkout
        When The user navigates to "Burn PM" product page
        Then The user begins tracking Sculptnation "Start Checkout" event
        Then The user adds "BurnPM" to cart
        Then The user fills in the fields on the Checkout page and places the order
        Then Verify Snapchat event "Start Checkout" are triggered

    Scenario: Snapchat - Vshred Survey survey-ga - Start Checkout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "survey-ga"
        And The user starts new Survey GA Funnel for "Man"
        Then The user begins tracking Sculptnation "Start Checkout" event
        When The User describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        Then Verify Snapchat event "Start Checkout" are triggered

    Scenario: Snapchat - Vshred Survey survey-ga# - Start Checkout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "survey-ga#"
        And The user starts new Survey GA Funnel for "Man"
        Then The user begins tracking Sculptnation "Start Checkout" event
        When The User describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        Then Verify Snapchat event "Start Checkout" are triggered

    Scenario: Snapchat - Vshred Survey flbtv5 - Start Checkout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "flbtv5"
        And The user skips the product video
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user begins tracking Sculptnation "Start Checkout" event
        Then The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        Then Verify Snapchat event "Start Checkout" are triggered

    Scenario: Snapchat - Vshred Survey fbkcpcv3 - Start Checkout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpcv3"
        When The user starts V Shred survey for "Male"
        And The Male user describes self as "I'm skinny fat"
        Then The user begins tracking Sculptnation "Start Checkout" event
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        Then Verify Snapchat event "Start Checkout" are triggered

    Scenario: Snapchat - Vshred Survey fbkcpcv5 - Start Checkout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpcv5"
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        Then The user begins tracking Sculptnation "Start Checkout" event
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills in the fields on the Checkout page and places the order
        Then Verify Snapchat event "Start Checkout" are triggered

    Scenario: Snapchat - Vshred Survey surveyaka1v13 - Start Checkout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "surveyaka1v13"
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        Then The user begins tracking Sculptnation "Start Checkout" event
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        Then Verify Snapchat event "Start Checkout" are triggered

    Scenario: Snapchat - Vshred Survey fbkcpc - Start Checkout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpc"
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        Then The user begins tracking Sculptnation "Start Checkout" event
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        Then Verify Snapchat event "Start Checkout" are triggered

    Scenario: Snapchat - Vshred Survey aka1# - Start Checkout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "aka1#"
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        Then The user begins tracking Sculptnation "Start Checkout" event
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        Then Verify Snapchat event "Start Checkout" are triggered

    Scenario: Snapchat - Vshred Survey fbkcpcv2 - Start Checkout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpcv2"
        When The user starts V Shred survey for "Female"
        Then The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user begins tracking Sculptnation "Start Checkout" event
        Then The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then Verify Snapchat event "Start Checkout" are triggered

    Scenario: Snapchat - SculptNation Product - Start Checkout
        When The user navigates to SN "Burn PM" product page
        Then The user begins tracking Sculptnation "Start Checkout" event
        Then The user adds "BurnPM" to cart
        Then The user fills in the fields on the Checkout page and places the order
        Then Verify Snapchat event "Start Checkout" are triggered
