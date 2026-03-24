@pixelTests @twitter
Feature: LE-VS Twitter Pixel Event Testing - Purchase
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Twitter - Vshred Survey flbtv5 - Purchase
        When The user begins tracking and navigates to V Shred Survey "flbtv5" - "Twitter"
        And The user skips the product video
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The user starts tracking for twitter event "purchase"
        And The User "Selects" Checkout Upsell Offer
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated

    Scenario: Twitter - Vshred Survey survey-ga - Purchase
        When The user begins tracking and navigates to V Shred Survey "survey-ga" - "Twitter"
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated

    Scenario: Twitter - Vshred Survey survey-ga# - Purchase
        When The user begins tracking and navigates to V Shred Survey "survey-ga#" - "Twitter"
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpcv3 - Purchase
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv3" - "Twitter"
        When The user starts V Shred survey for "Male"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpcv5 - Purchase
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv5" - "Twitter"
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user starts tracking for twitter event "purchase"
        Then The user fills in the fields on the Checkout page and places the order
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated

    Scenario: Twitter - Vshred Survey surveyaka1v13 - Purchase
        When The user begins tracking and navigates to V Shred Survey "surveyaka1v13" - "Twitter"
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpc - Purchase
        When The user begins tracking and navigates to V Shred Survey "fbkcpc" - "Twitter"
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The user starts tracking for twitter event "purchase"
        And The User "Selects" the CDP Bumper Offer and submits the order
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated

    Scenario: Twitter - Vshred Survey aka1# - Purchase
        When The user begins tracking and navigates to V Shred Survey "aka1#" - "Twitter"
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The user starts tracking for twitter event "purchase"
        And The User "Selects" the CDP Bumper Offer and submits the order
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpcv2 - Purchase
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv2" - "Twitter"
        When The user starts V Shred survey for "Female"
        Then The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The user starts tracking for twitter event "purchase"
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated

    Scenario: Twitter - Vshred Survey femalefl - Purchase
        When The user begins tracking and navigates to V Shred Survey "femalefl" - "Twitter"
        When The user starts V Shred survey for "Female"
        Then The user skips the video
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The user starts tracking for twitter event "purchase"
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated
