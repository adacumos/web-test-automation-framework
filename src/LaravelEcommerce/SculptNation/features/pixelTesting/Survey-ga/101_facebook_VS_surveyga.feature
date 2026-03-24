@QA-2592 @pixelTests @facebook @surveygaPixel ing
Feature: V Shred Facebook Pixel Testing - Upsell
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Facebook - Vshred Survey survey-ga pixel testing - male - not happy with my body
        When The user begins tracking and navigates to V Shred Survey "survey-ga" - "Facebook"
        And The user starts new Survey GA Funnel for "Man"
        And The user starts tracking for facebook
        When The User describes self as "I'm happy with my body, but"
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"
        And The user starts tracking for facebook
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify facebook events and ID for event - "InitiateCheckout" for "Vshred"
        Then Verify facebook events and ID for event - "addtocart" for "Vshred"
        Then The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        And The user skips the product video
        And The user starts tracking for facebook
        When The user selects "Three Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify facebook events and ID for event - "Upsell" for "Vshred"
        Then Verify facebook events and ID for event - "purchase" for "Vshred"

    Scenario: Facebook - Vshred Survey survey-ga pixel testing - male - skinny fat
        When The user begins tracking and navigates to V Shred Survey "survey-ga" - "Facebook"
        And The user starts new Survey GA Funnel for "Man"
        And The user starts tracking for facebook
        When The User describes self as "I'm skinny fat"
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"
        And The user starts tracking for facebook
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify facebook events and ID for event - "InitiateCheckout" for "Vshred"
        Then Verify facebook events and ID for event - "addtocart" for "Vshred"
        Then The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        And The user skips the product video
        And The user starts tracking for facebook
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify facebook events and ID for event - "Upsell" for "Vshred"
        Then Verify facebook events and ID for event - "purchase" for "Vshred"

    Scenario: Facebook - Vshred Survey survey-ga female - soft
        When The user begins tracking and navigates to V Shred Survey "survey-ga" - "Facebook"
        When The user starts new Survey GA Funnel for "Woman"
        And The user starts tracking for facebook
        When The User describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"
        And The user starts tracking for facebook
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify facebook events and ID for event - "InitiateCheckout" for "Vshred"
        Then Verify facebook events and ID for event - "addtocart" for "Vshred"
        Then The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        And The user skips the product video
        And The user starts tracking for facebook
        When The user clicks the "Declines" button on the "first" upsell page
        Then Verify facebook events and ID for event - "Upsell" for "Vshred"
        Then Verify facebook events and ID for event - "purchase" for "Vshred"

    Scenario: Facebook - Vshred Survey survey-ga pixel testing - female - 20 more of fat
        When The user begins tracking and navigates to V Shred Survey "survey-ga" - "Facebook"
        When The user starts new Survey GA Funnel for "Woman"
        And The user starts tracking for facebook
        And The User describes self as "I have 20 lbs or more fat"
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"
        And The user starts tracking for facebook
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify facebook events and ID for event - "InitiateCheckout" for "Vshred"
        Then Verify facebook events and ID for event - "addtocart" for "Vshred"
        Then The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        And The user skips the product video
        And The user starts tracking for facebook
        And The User "Subscribes" the "Burn Evolved" Funnel Offer
        Then Verify facebook events and ID for event - "Upsell" for "Vshred"
        Then Verify facebook events and ID for event - "purchase" for "Vshred"
