@QA-2260
Feature: Selected Upsell-Yes LE Move Ripped Page

Background: Load test data
        Given The user loads the VS test data
  
Scenario: Selected Upsell-Yes LE Move Rippped In 90 Days Page 
        Given The user navigates to V Shred Survey page
        And The user selects the "Yes I Want Ripped In 90 Days" button
        And The user verifies the Checkout form Order details
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "VSU"
        And The user clicks on "VSU upgrade" button
        And The user clicks on "add to cart" button
        And The user fills out the supplement order shipping form
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "RippedBundle"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "RippedBundle"
