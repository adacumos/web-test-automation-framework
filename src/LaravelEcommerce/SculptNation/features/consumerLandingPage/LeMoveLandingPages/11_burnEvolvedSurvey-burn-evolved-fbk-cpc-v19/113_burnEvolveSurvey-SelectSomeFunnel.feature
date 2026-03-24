@QA-1987 @lePageMove @leLong @reTest
Feature: LE Move Landing page - LE Survey Burn Evolved - Select Some Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Respond to Men Survey and Purchase a Bottle then Selects Some Funnel Offers
        Given The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Men"
        Then The user watches the Product Presentation
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        When The User "Declines" the "Burn Evolved" Funnel Offer
        When The User "Upgrades" the "Burn PM" Funnel Offer
        When The User "Declines" the "Turmeric Black" Funnel Offer
        When The User "Declines" the "Enzymes" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "oneBottle-SelectedFunnelsOnly"

    Scenario: Respond to Women Survey and Purchase Six Bottle then Selects Some Funnel Offers
        Given The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Women"
        Then The user watches the Product Presentation
        When The user selects "Six Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        When The User "Upgrades" the "Burn Evolved" Funnel Offer
        When The User "Upgrades" the "Burn PM" Funnel Offer
        When The User "Declines" the "Turmeric Black" Funnel Offer
        When The User "Declines" the "Enzymes" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "sixBottle-SelectedFunnelsOnly"
