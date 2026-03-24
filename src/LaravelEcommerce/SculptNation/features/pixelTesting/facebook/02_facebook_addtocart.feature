@QA-2589 @QA-2594 @pixelTests @facebook
Feature: SculptNation Facebook Pixel Testing - Add to Cart / InitiateCheckout
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Facebook - Vshred Internal / Kendago Product- survey-ga - Add to Cart - InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey "survey-ga" - "Facebook"
        And The user starts new Survey GA Funnel for "Man"
        And The user starts tracking for facebook
        When The User describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify facebook events and ID for event - "InitiateCheckout" for "Vshred"
        Then Verify facebook events and ID for event - "addtocart" for "Vshred"

    Scenario: Facebook - Vshred Internal / Kendago Product- Add to Cart - survey-ga# - InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey "survey-ga#" - "Facebook"
        And The user starts new Survey GA Funnel for "Man"
        And The user starts tracking for facebook
        When The User describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify facebook events and ID for event - "InitiateCheckout" for "Vshred"
        Then Verify facebook events and ID for event - "addtocart" for "Vshred"

    Scenario: Facebook - Vshred Internal / Kendago Product- Add to Cart - fbkcpcv5 - InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv5" - "Facebook"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for facebook
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify facebook events and ID for event - "addtocart" for "Vshred"

    Scenario: Facebook - Vshred Internal / Kendago Product- Add to Cart - surveyaka1v13 - InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey "surveyaka1v13" - "Facebook"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for facebook
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify facebook events and ID for event - "addtocart" for "Vshred"

    Scenario: Facebook - Vshred Internal / Kendago Product- Add to Cart - fbkcpc InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey "fbkcpc" - "Facebook"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for facebook
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify facebook events and ID for event - "addtocart" for "Vshred"

    Scenario: Facebook - Vshred Internal / Kendago Product- Add to Cart - aka1# - InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey "aka1#" - "Facebook"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for facebook
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify facebook events and ID for event - "addtocart" for "Vshred"

    Scenario: Facebook - Vshred Internal / Kendago Product- Add to Cart - fbkcpcv2 - InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv2" - "Facebook"
        When The user starts V Shred survey for "Female"
        And The user starts tracking for facebook
        And The user finishes the V Shred survey and skips video
        Then Verify facebook events and ID for event - "addtocart" for "Vshred"

    Scenario: Facebook - Vshred Internal / Kendago Product- Add to Cart - fbkcpcv3 - InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv3" - "Facebook"
        When The user starts V Shred survey for "Male"
        And The user starts tracking for facebook
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify facebook events and ID for event - "addtocart" for "Vshred"

    Scenario: Facebook - Vshred Internal / Kendago Product- Add to Cart - flbtv5 InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey "flbtv5" - "Facebook"
        And The user starts tracking for facebook
        And The user skips the product video
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify facebook events and ID for event - "addtocart" for "Vshred"

    Scenario: Facebook - Vshred & SculptNation Internal / Kendago Product- Add to Cart
        When The user navigates to SN "Burn PM" product page
        Then The user starts tracking and adds "BurnPM" to cart for facebook
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago burnpmflefbkcpcecov5 - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "burnpmflefbkcpcecov5" - "Facebook"
        And The user starts tracking for facebook
        When The user clicks "Buy Now" from the offer page
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago burnfbkcpc - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "burnfbkcpc" - "Facebook"
        And The user starts tracking for facebook
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago tbmtrfbkcpcecobb - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "tbmtrfbkcpcecobb" - "Facebook"
        And The user starts tracking for facebook
        When The user selects "4 Bottles" package and clicks "Buy Now" button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago tumericflefbkcpc - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "tumericflefbkcpc" - "Facebook"
        And The user starts tracking for facebook
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedgglcpc - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "testrippedgglcpc" - "Facebook"
        And The user starts tracking for facebook
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago tumericflefbkcpcv3 - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "tumericflefbkcpcv3" - "Facebook"
        And The user starts tracking for facebook
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedfbkcpceconbb - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "testrippedfbkcpceconbb" - "Facebook"
        And The user starts tracking for facebook
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago burnfilefbkcpcv4 - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "burnfilefbkcpcv4" - "Facebook"
        And The user starts tracking for facebook
        And The user skips the product video
        When The user choose "3 Bottles" package and clicks "Speed Up My Metabolism" button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago specialofferecofbkcpc - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "specialofferecofbkcpc" - "Facebook"
        And The user starts tracking for facebook
        When The user selects the "ULTIMATE" Special Offer and clicks "Buy Now" button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago burnevolvedfbkcpcv19 - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "burnEvolvedfbkcpcv19" - "Facebook"
        When The user starts Sculptnation survey for "Women"
        Then The user watches the Product Presentation
        And The user starts tracking for facebook
        When The user selects "Six Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedfbkcpceco - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "testrippedfbkcpceco" - "Facebook"
        And The user starts tracking for facebook
        Then The user clicks "Buy Now" from the offer page
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedfbkcpc - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "testrippedfbkcpc" - "Facebook"
        And The user starts tracking for facebook
        And The user selects the one bottle Add To Cart button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago burnga - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "burnga" - "Facebook"
        And The user starts tracking for facebook
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago fbkcpcv1 - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "fbkcpcv1" - "Facebook"
        Then The user begins the muscle building survey
        And The user starts tracking for facebook
        And The user skips the product video
        When The user selects "Six Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    # Scenario: Facebook - Sculptnation Internal/kendago testrippedfbkcpceconbbv2 - Add to Cart
    #     When The user begins tracking and navigates to Sculptnation page "testrippedfbkcpceconbbv2" - "Facebook"
    #     And The user starts tracking for facebook
    #     And The user selects the one bottle Add To Cart button
    #     Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"  <---- Opens different Window

    Scenario: Facebook - Sculptnation Internal/kendago burnpmflegglshopbndcpc - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "burnpmflegglshopbndcpc" - "Facebook"
        And The user starts tracking for facebook
        When The user clicks "add to cart" button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"

    Scenario: Facebook - Sculptnation Internal/kendago femaleGT - Add to Cart
        When The user begins tracking and navigates to Sculptnation page "femaleGT" - "Facebook"
        And The user starts tracking for facebook
        And The user skips the product video
        Then The user clicks YES! button
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"
