@QA-1444 @lePageMove @leShort @frontend @FE-sprint-4
Feature: LE Move Landing page - Platinum Evolved Stack - Select Some Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and Selects Some Funnel Offers
        Given The user navigates to "Burn-PM" CMS Offer page
        When The user clicks the first buy now from the offer page
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The user Opts in to select Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectedFunnelsOnly"
        When The password is reset to default value
        Then The user logs out of Admin Tool
        When The client user logs into the SculptNation Account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "selectedFunnelsOnly"
