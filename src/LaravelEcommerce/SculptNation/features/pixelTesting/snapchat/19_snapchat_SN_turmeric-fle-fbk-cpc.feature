@ats-84 @pixelTests @gtm
Feature: LE-VS Snapchat Event Pixel Testing - Consolidated
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE-VS Survey and Purchase Snapchat Tag Pixel Testing - Turmeric Black
        Given The user navigates to "Turmeric Black" Sculptnation Survey page
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user select "One" bottles then Burn belly fat faster
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered
        Then The user verifies the checkout form type and makes purchase

    Scenario: LE-VS Survey and Purchase Snapchat Tag Pixel Testing - Turmeric Black
        Given The user navigates to "Turmeric Black" Sculptnation Survey page
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user select "Six" bottles then Burn belly fat faster
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered
        Then The user verifies the checkout form type and makes purchase
