@QA-2596 @QA-2591 @pixelTests @facebook
Feature: SculptNation Facebook Pixel Testing - Purchase
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Facebook - Vshred Product - Purchase
        When The user navigates to "Burn PM" product page
        Then The user starts tracking and adds "BurnPM" to cart for facebook
        Then The user fills in the fields on the Checkout page and places the order
        Then Verify facebook events and ID for event - "purchase" for "Vshred"

    Scenario: Facebook - Vshred Survey flbtv5 - Purchase
        When The user begins tracking and navigates to V Shred Survey "flbtv5" - "Facebook"
        And The user skips the product video
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user starts tracking for facebook
        Then The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        Then Verify facebook events and ID for event - "purchase" for "Vshred"

    Scenario: Facebook - Vshred Survey survey-ga - Purchase
        When The user begins tracking and navigates to V Shred Survey "survey-ga" - "Facebook"
        And The user starts new Survey GA Funnel for "Man"
        And The user starts tracking for facebook
        When The User describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        Then Verify facebook events and ID for event - "purchase" for "Vshred"

    Scenario: Facebook - Vshred Survey survey-ga# - Purchase
        When The user begins tracking and navigates to V Shred Survey "survey-ga#" - "Facebook"
        And The user starts new Survey GA Funnel for "Man"
        And The user starts tracking for facebook
        When The User describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        Then Verify facebook events and ID for event - "purchase" for "Vshred"

    Scenario: Facebook - Vshred Survey fbkcpcv3 - Purchase
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv3" - "Facebook"
        When The user starts V Shred survey for "Male"
        And The Male user describes self as "I'm skinny fat"
        And The user starts tracking for facebook
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        Then Verify facebook events and ID for event - "purchase" for "Vshred"

    Scenario: Facebook - Vshred Survey fbkcpcv5 - Purchase
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv5" - "Facebook"
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        And The user starts tracking for facebook
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills in the fields on the Checkout page and places the order
        Then Verify facebook events and ID for event - "purchase" for "Vshred"

    Scenario: Facebook - Vshred Survey surveyaka1v13 - Purchase
        When The user begins tracking and navigates to V Shred Survey "surveyaka1v13" - "Facebook"
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        And The user starts tracking for facebook
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        Then Verify facebook events and ID for event - "purchase" for "Vshred"

    Scenario: Facebook - Vshred Survey fbkcpc - Purchase
        When The user begins tracking and navigates to V Shred Survey "fbkcpc" - "Facebook"
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        And The user starts tracking for facebook
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        Then Verify facebook events and ID for event - "purchase" for "Vshred"

    Scenario: Facebook - Vshred Survey aka1# - Purchase
        When The user begins tracking and navigates to V Shred Survey "aka1#" - "Facebook"
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        And The user starts tracking for facebook
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        Then Verify facebook events and ID for event - "purchase" for "Vshred"

    Scenario: Facebook - Vshred Survey fbkcpcv2 - Purchase
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv2" - "Facebook"
        When The user starts V Shred survey for "Female"
        Then The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user starts tracking for facebook
        Then The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then Verify facebook events and ID for event - "purchase" for "Vshred"

    Scenario: Facebook - SculptNation Product - Purchase
        When The user navigates to SN "Burn PM" product page
        Then The user starts tracking and adds "BurnPM" to cart for facebook
        Then The user fills in the fields on the Checkout page and places the order
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago burnpmflefbkcpcecov5 - Purchase
        When The user begins tracking and navigates to Sculptnation page "burnpmflefbkcpcecov5" - "Facebook"
        And The user starts tracking for facebook
        When The user clicks "Buy Now" from the offer page
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago burnfbkcpc - Purchase
        When The user begins tracking and navigates to Sculptnation page "burnfbkcpc" - "Facebook"
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        And The user starts tracking for facebook
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago tbmtrfbkcpcecobb - Purchase
        When The user begins tracking and navigates to Sculptnation page "tbmtrfbkcpcecobb" - "Facebook"
        And The user skips the product video
        And The user starts tracking for facebook
        When The user selects "4 Bottles" package and clicks "Buy Now" button
        And The user starts tracking for facebook
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago tumericflefbkcpc - Purchase
        When The user begins tracking and navigates to Sculptnation page "tumericflefbkcpc" - "Facebook"
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        And The user starts tracking for facebook
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedgglcpc - Purchase
        When The user begins tracking and navigates to Sculptnation page "testrippedgglcpc" - "Facebook"
        And The user skips the product video
        And The user starts tracking for facebook
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago tumericflefbkcpcv3 - Purchase
        When The user begins tracking and navigates to Sculptnation page "tumericflefbkcpcv3" - "Facebook"
        And The user skips the product video
        And The user starts tracking for facebook
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedfbkcpceconbb - Purchase
        When The user begins tracking and navigates to Sculptnation page "testrippedfbkcpceconbb" - "Facebook"
        And The user skips the product video
        And The user starts tracking for facebook
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago burnfilefbkcpcv4 - Purchase
        When The user begins tracking and navigates to Sculptnation page "burnfilefbkcpcv4" - "Facebook"
        And The user skips the product video
        When The user choose "3 Bottles" package and clicks "Speed Up My Metabolism" button
        And The user starts tracking for facebook
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago specialofferecofbkcpc - Purchase
        When The user begins tracking and navigates to Sculptnation page "specialofferecofbkcpc" - "Facebook"
        When The user selects the "ULTIMATE" Special Offer and clicks "Buy Now" button
        And The user starts tracking for facebook
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago burnevolvedfbkcpcv19 - Purchase
        When The user begins tracking and navigates to Sculptnation page "burnEvolvedfbkcpcv19" - "Facebook"
        When The user starts Sculptnation survey for "Women"
        Then The user watches the Product Presentation
        When The user selects "Six Bottle" package and clicks "Speed Up My Metabolism" button
        And The user starts tracking for facebook
        Then The user verifies the checkout form type and makes purchase
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedfbkcpceco - Purchase
        When The user begins tracking and navigates to Sculptnation page "testrippedfbkcpceco" - "Facebook"
        Then The user clicks "Buy Now" from the offer page
        And The user starts tracking for facebook
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedfbkcpc - Purchase
        When The user begins tracking and navigates to Sculptnation page "testrippedfbkcpc" - "Facebook"
        And The user selects the one bottle Add To Cart button
        And The user starts tracking for facebook
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago burnga - Purchase
        When The user begins tracking and navigates to Sculptnation page "burnga" - "Facebook"
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        And The user starts tracking for facebook
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago fbkcpcv1 - Purchase
        When The user begins tracking and navigates to Sculptnation page "fbkcpcv1" - "Facebook"
        Then The user begins the muscle building survey
        And The user skips the product video
        When The user selects "Six Bottle" package and clicks "Speed Up My Metabolism" button
        And The user starts tracking for facebook
        Then The user fills in the fields on the Secure Checkout page and places the order
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    # Scenario: Facebook - Sculptnation Internal/kendago testrippedfbkcpceconbbv2 - Add to Cart
    #     When The user begins tracking and navigates to Sculptnation page "testrippedfbkcpceconbbv2" - "Facebook"
    #     And The user starts tracking for facebook
    #     And The user selects the one bottle Add To Cart button
    #     Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"  <---- Opens different Window (broken)

    Scenario: Facebook - Sculptnation Internal/kendago burnpmflegglshopbndcpc - Purchase
        When The user begins tracking and navigates to Sculptnation page "burnpmflegglshopbndcpc" - "Facebook"
        When The user clicks "add to cart" button
        And The user starts tracking for facebook
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago femaleGT - Purchase
        When The user begins tracking and navigates to Sculptnation page "femaleGT" - "Facebook"
        And The user skips the product video
        Then The user clicks YES! button
        And The user starts tracking for facebook
        Then The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"
