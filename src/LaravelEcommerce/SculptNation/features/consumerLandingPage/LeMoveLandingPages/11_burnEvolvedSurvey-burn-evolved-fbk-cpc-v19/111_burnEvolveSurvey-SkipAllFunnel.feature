@QA-1987 @lePageMove @leLong @reTest
Feature: LE Move Landing page - LE Survey Burn Evolved - Skips All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Respond to Women Survey and Purchase a Bottle then Skips All Funnel Offers
        Given The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Women"
        Then The user watches the Product Presentation
        Then The user select "One" bottles then Speed up my metabolism
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        When The user logs into the SculptNation account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "oneBottle-skipAllFunnels"
        Then The user checks "Order Confirmation" email

    Scenario: Respond to Men Survey and Purchase Six Bottles then Skips All Funnel Offers
        Given The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Men"
        Then The user watches the Product Presentation
        Then The user select "Six" bottles then Speed up my metabolism
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "sixBottle-skipAllFunnels"

    Scenario: Respond to Women Survey and Purchase Three Bottles then Skips All Funnel Offers
        Given The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Women"
        Then The user watches the Product Presentation
        Then The user select "Three" bottles then Speed up my metabolism
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "threeBottle-skipAllFunnels"
