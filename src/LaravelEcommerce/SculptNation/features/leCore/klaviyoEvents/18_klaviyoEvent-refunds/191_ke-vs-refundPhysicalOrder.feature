@QA-2196 @klaviyoEvents @vsRefund
Feature: Klaviyo Event - Refund Order - VS Physical Order
    Background: Load test data
        Given The user loads the LE test data
        And Klaviyo Profile events are monitored
    Scenario: Klaviyo Event: Order Refunded - Physical Product
        When The user logs into the Vshred Admin Tool as "Sales" user
        When The user creates a new "Member" user
        Then The user clicks the New Order button on the User Information page
        Then The user adds shipping and billing address
        Then The user searches for "HGH Boost" and adds offer
        Then The user searches for "Test Boost Max 2.0" and adds offer
        Then The user places the order
        Then The user collects the Transaction Reference from the Payments tab and settles the payment for the order
        Then The user clicks the "Refund" button
        When When The refund modal opens the user will process a full refund
        Then Verify Profile Event "Order Refunded" is logged in Klaviyo
