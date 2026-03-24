@QA-2260
Feature: Selected Upsell-Yes LE Move Ripped Page

Background: Load test data
        Given The user loads the VS test data
  
Scenario: Selected Upsell-Yes LE Move Rippped In 90 Days Page 
        Given The user navigates to V Shred Survey page
        Then The user verifies the "Ripped" URL
        And The user selects the "Yes I Want Ripped In 90 Days" button
        And The user verifies the Checkout form Order details
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The user clicks on the "No Thanks Greens" label
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "Ripped Bundle"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "Ripped Bundle"
