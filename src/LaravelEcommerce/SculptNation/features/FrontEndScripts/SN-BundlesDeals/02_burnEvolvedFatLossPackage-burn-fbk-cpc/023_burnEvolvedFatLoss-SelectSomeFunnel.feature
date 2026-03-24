@QA-1449 @lePageMove @leShort @reTest @frontend @FE-sprint-5
Feature: LE Move Landing page - Burn Evolved Fatloss Package - 1 Bottle Select Some Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select One Bottle Package and Selects Some Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        Then The user select "One" bottles then Speed up my metabolism
        Then The user fills out the funnel order form
        And The user Opts in to select Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "oneBottle-SelectedFunnelsOnly"
        When The password is reset to default value
        Then The user logs out of Admin Tool
        When The client user logs into the SculptNation Account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "oneBottle-SelectedFunnelsOnly"

    Scenario: Select Six Bottle Package and Selects Some Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        Then The user select "Six" bottles then Speed up my metabolism
        Then The user fills out the funnel order form
        And The user Opts in to select Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "sixBottle-SelectedFunnelsOnly"

    Scenario: Select Three Bottle Package and Selects Some Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        Then The user select "Three" bottles then Speed up my metabolism
        Then The user fills out the funnel order form
        And The user Opts in to select Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "threeBottle-SelectedFunnelsOnly"
