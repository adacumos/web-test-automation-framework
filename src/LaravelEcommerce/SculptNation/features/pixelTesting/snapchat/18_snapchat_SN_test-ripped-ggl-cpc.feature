@ats-84 @pixelTests @gtm
Feature: LE-VS Snapchat Event Pixel Testing - Consolidated
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE-VS Survey and Purchase Snapchat Tag Pixel Testing - Test Boost Max - no to all upsells
        Given The user navigates to "TestBoost Max" Sculptnation Survey page
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user select "Three" bottles then Skyrocket my manhood
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered
        Then The user fills in the fields on the Secure Checkout page and places the order
        Then The user begins tracking Sculptnation "Purchase" event
        And The user dismisses the "Test Boost Max" offer
        And The User "Declines" the "Test Boost Max" Funnel Offer
        And The User "Declines" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer

    Scenario: LE-VS Survey and Purchase Snapchat Tag Pixel Testing - Test Boost Max - y/n to upsells
        Given The user navigates to "TestBoost Max" Sculptnation Survey page
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user select "One" bottles then Skyrocket my manhood
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered
        Then The user fills in the fields on the Secure Checkout page and places the order
        Then The user begins tracking Sculptnation "Purchase" event
        And The user dismisses the "Test Boost Max" offer
        And The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User "Subscribes" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
