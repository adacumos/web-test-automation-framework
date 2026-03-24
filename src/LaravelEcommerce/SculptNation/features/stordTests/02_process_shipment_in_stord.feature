Feature: Test Feature to process shipment in Stord
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Sample scenario to process shipment in Stord
        When The user navigates to the SculptNation homepage
        Then The user verifies the status of shipping reference number "STLE-7KML-EIEY" in Stord is "Open"
        And The user processes the shipment of shipping reference number "STLE-7KML-EIEY" in Stord
        And The user verifies the status of shipping reference number "STLE-7KML-EIEY" in Stord is "Shipped"
