@ATS-580 @pixelTests @snapchat
Feature: SN Snapchat Event Pixel Testing - Consolidated /sp/test-bosst-max/quiz-vsl
    Background: Load test data
        Given The user loads the LE test data

    Scenario: SN Pixel Testing - test-boost-max/quiz-vsl
        Given The user navigates to the SculptNation homepage
        When Begin tracking "Sculptnation" Snapchat events
        And The user navigates to "Test Boost Max" Sculptnation Survey page
        When The user selects "3 Bottles" option
        Then Verify "Sculptnation" Snapchat "Internal" event:"Add To Cart" is triggered
        Then Verify "Sculptnation" Snapchat "Kendago" event:"Start Checkout" is triggered
        When The user fills out the funnel order form
        Then Verify "Sculptnation" Snapchat "Internal" event:"Purchase" is triggered
        Then Verify "Sculptnation" Snapchat "Kendago" event:"Purchase" is triggered
        When The User "Upgrades" the "Test Boost Max" Funnel Offer
        Then Verify "Sculptnation" Snapchat "Internal" event:"Purchase" is triggered
