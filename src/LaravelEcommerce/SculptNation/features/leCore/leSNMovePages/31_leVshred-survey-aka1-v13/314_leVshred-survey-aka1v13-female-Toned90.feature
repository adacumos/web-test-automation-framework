@QA-2378 @leMove @clientPurchase
Feature: LE Move Landing page - vs ./survey-aka1-v13
    Background: Load test data
        Given The user loads the LE test data

    @mobileView
    Scenario: Woman VS survey-aka1-v13-Toned 90 Skip All Funnel Offers
        Given The user Resizes the browser to "Samsung S24"
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        When The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The user Resizes the browser to desktop view
        Then The Orders are sync in the Admin Tool - "skipAllFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"

    Scenario: Woman VS survey-aka1-v13-Toned 90 Select Some Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The user selects One-time delivery price check box under the One Bottle option
        And The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        When The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"

    Scenario: Woman VS survey-aka1-v13-Toned 90 Select All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The user selects One-time delivery price check box under the One Bottle option
        Then The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        And The User Selects "One Bottle" of "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectAllFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"
