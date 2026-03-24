Feature: Test Feature to cancel shipment in Stord


    Scenario: Sample scenario to cancel shipment in Stord
        When The user navigates to the SculptNation homepage
        Then The user verifies the status of shipping reference number "STLE-57OT-BGJW" in Stord is "Open"
        And The user cancels the shipment of shipping reference number "STLE-57OT-BGJW" in Stord
        And The user verifies the status of shipping reference number "STLE-57OT-BGJW" in Stord is "Canceled"
