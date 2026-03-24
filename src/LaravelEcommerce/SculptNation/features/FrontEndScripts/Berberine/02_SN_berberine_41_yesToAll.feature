@FET-199 @frontend @FE-sprint-5
Feature: Create Order For Berberine with All upsell via SculptNation landing page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order Berberine with all upsell
        Given The user navigates to the SculptNation product landing page
        Then Validates the data on the berberine landing page
        And The user fills out the survey order form fast checkout
        And User select "Yes" to accept the "Berberine" Special Offer
        And User select "Stock up" to accept the "Burn2" Special Offer
        And User select "Upgrade" to accept the "Burn2" Special Offer
        And User select "Upgrade" to accept the "Turm" Special Offer
        And User select "Stock up" to accept the "Burn" Special Offer
        And User select "Upgrade" to accept the "Burn" Special Offer
        And Validates the data on the SculptNation Login page
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectAllFunnels"
