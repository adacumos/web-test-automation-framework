@QA-3038 @surveyPages @mobileView
Feature: LE Survey Burn Evolved - fbk-cpc-v19
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Sculptnation Survey - Women - 6 Bottle Package
        Given The user Resizes the browser to "iPad 10"
        And The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Women"
        Then The user watches the Product Presentation
        When The user selects "6 Bottles" option
        And The Checkout Offer details displays - "BURN EVOLVED 2.0 (6) + Fat Loss Extreme"

    Scenario: Sculptnation Survey - Women - 3 Bottle Package
        Given The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Women"
        Then The user watches the Product Presentation
        When The user selects "3 Bottles" option
        And The Checkout Offer details displays - "BURN EVOLVED 2.0 (3) + Fat Loss Extreme"

    Scenario: Sculptnation Survey - Men - 1 Bottle Package
        Given The user Resizes the browser to "Samsung S24"
        And The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Men"
        Then The user watches the Product Presentation
        When The user selects "1 Bottle" option
        And The Checkout Offer details displays - "BURN EVOLVED 2.0 + Fat Loss Extreme"
