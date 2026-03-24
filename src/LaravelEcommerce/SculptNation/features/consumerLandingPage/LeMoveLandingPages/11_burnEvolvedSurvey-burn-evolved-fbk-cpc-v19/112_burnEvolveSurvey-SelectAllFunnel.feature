@QA-1987 @lePageMove @leLong @reTest
Feature: LE Move Landing page - LE Survey Burn Evolved - Select All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Respond to Men Survey and Purchase a Bottle then Selects All Funnel Offers
        Given The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Men"
        Then The user watches the Product Presentation
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user "Selects All" Funnel Offers
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "oneBottle-SelectAllFunnels"

    Scenario: Respond to Women Survey and Purchase a Bottle then Selects All Funnel Offers
        Given The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Women"
        Then The user watches the Product Presentation
        When The user selects "Six Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user "Selects All" Funnel Offers
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "sixBottle-SelectAllFunnels"

    Scenario: Respond to Men Survey and Purchase a Bottle then Selects All Funnel Offers
        Given The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Men"
        Then The user watches the Product Presentation
        When The user selects "Three Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user "Selects All" Funnel Offers
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "threeBottle-SelectAllFunnels"
