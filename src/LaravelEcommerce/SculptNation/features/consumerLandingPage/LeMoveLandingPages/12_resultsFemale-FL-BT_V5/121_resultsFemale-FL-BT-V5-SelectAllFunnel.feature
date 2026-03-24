@QA-1843 @lePageMove @leLong @reTest
Feature: Funnel Testing for Fat Loss Extreme for Her $57 Bundle Selects All Funnel
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and selects all funnel upsells
        Given The user navigates to V Shred Survey page
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The user clicks the "Subscribe Now" button on the "first" upsell page
        Then The user fills out the shipping order form
        And The user verifies the next funnel upsell is "Burn PM"
        And The user clicks the "Subscribe Now" button on the "second" upsell page
        And The user verifies the next funnel upsell is "VSU"
        And The user clicks on "VSU upgrade" button
        And The user clicks Add To Cart on the upsell page
        Then The Orders are sync in the Admin Tool - "selectAllFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"
        Then The user checks "Order Confirmation" email
# Then The user verfies the contents of "VShred" Order Confirmation emails
