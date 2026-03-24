@QA-2613 @pixelTests @gtm
Feature: LE-VS Snapchat Event Pixel Testing - Consolidated
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE-VS Survey and Purchase Snapchat Tag Pixel Testing
        When The user navigates to V Shred Survey page with endpoint "survey-ga"
        And The user starts new Survey GA Funnel for "Woman"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Quiz Completed" event
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Quiz Completed" are triggered
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user begins tracking Sculptnation "Start Checkout" event
        Then The user begins tracking Sculptnation "Purchase" event
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Add To Cart" are triggered
        Then Verify Snapchat event "Start Checkout" are triggered
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then Verify Snapchat event "Purchase" are triggered

    Scenario: LE-VS Survey and Purchase Snapchat Tag Pixel Testing
        When The user navigates to V Shred Survey page with endpoint "survey-ga#"
        And The user starts new Survey GA Funnel for "Woman"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Quiz Completed" event
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Quiz Completed" are triggered
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user begins tracking Sculptnation "Start Checkout" event
        Then The user begins tracking Sculptnation "Purchase" event
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Add To Cart" are triggered
        Then Verify Snapchat event "Start Checkout" are triggered
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then Verify Snapchat event "Purchase" are triggered

    Scenario: Snapchat - Vshred Survey fbkcpcv5 - Quiz Complete
        When The user navigates to V Shred Survey page with endpoint "fbkcpc"
        When The user starts V Shred survey for "Man"
        Then The user begins tracking Sculptnation "Quiz Completed" event
        And The Male user describes self as "I'm skinny fat"
        Then Verify Snapchat event "Quiz Completed" are triggered
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user begins tracking Sculptnation "Start Checkout" event
        Then The user begins tracking Sculptnation "Purchase" event
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Add To Cart" are triggered
        Then Verify Snapchat event "Start Checkout" are triggered
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then Verify Snapchat event "Purchase" are triggered
