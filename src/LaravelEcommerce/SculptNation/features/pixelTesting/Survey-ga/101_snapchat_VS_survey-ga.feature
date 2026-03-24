@ats-77 @pixelTests @snapchat @surveygaPixel
Feature: LE-VS Snapchat Event Pixel Testing - Consolidated
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE-VS Survey and Purchase Snapchat Tag Pixel Testing - Fat Loss Extreme for Her - female - 20 more of fat
        Given The user navigates to V Shred Survey page with endpoint "survey-ga"
        When The user starts new Survey GA Funnel for "Woman"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Page View" event
        When The User describes self as "I have 20 lbs or more fat"
        Then Verify Snapchat event "Page View" are triggered
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user begins tracking Sculptnation "Purchase" event
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Add To Cart" are triggered
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then Verify Snapchat event "Purchase" are triggered

    Scenario: LE-VS Survey and Purchase Snapchat Tag Pixel Testing - Get Toned - female - soft
        Given The user navigates to V Shred Survey page with endpoint "survey-ga"
        When The user starts new Survey GA Funnel for "Woman"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Quiz Completed" event
        When The User describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then Verify Snapchat event "Quiz Completed" are triggered
        Then Verify Snapchat event "Page View" are triggered
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user begins tracking Sculptnation "Purchase" event
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Add To Cart" are triggered
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then Verify Snapchat event "Purchase" are triggered

    Scenario: LE-VS Survey and Purchase Snapchat Tag Pixel Testing - FatLoss Extreme for Him - male - not happy with my body
        Given The user navigates to V Shred Survey page with endpoint "survey-ga"
        When The user starts new Survey GA Funnel for "Man"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Quiz Completed" event
        When The User describes self as "I'm not happy with my body"
        Then Verify Snapchat event "Quiz Completed" are triggered
        Then Verify Snapchat event "Page View" are triggered
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user begins tracking Sculptnation "Purchase" event
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Add To Cart" are triggered
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then Verify Snapchat event "Purchase" are triggered

    Scenario: LE-VS Survey and Purchase Snapchat Tag Pixel Testing - Skinny Ripped
        Given The user navigates to V Shred Survey page with endpoint "survey-ga"
        When The user starts new Survey GA Funnel for "Man"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Quiz Completed" event
        When The User describes self as "I'm skinny fat"
        Then Verify Snapchat event "Quiz Completed" are triggered
        Then Verify Snapchat event "Page View" are triggered
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user begins tracking Sculptnation "Purchase" event
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Add To Cart" are triggered
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then Verify Snapchat event "Purchase" are triggered
