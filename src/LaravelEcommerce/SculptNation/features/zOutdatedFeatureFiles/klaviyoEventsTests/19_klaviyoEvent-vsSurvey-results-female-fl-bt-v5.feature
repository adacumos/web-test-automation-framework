@QA-2213
Feature: Klaviyo Event - VS Female Survey Results - sp/suvery/results-female-fl-bt-v5
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - VS Female Survey - /survey/results-female-fl-bt-v5
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The user clicks the "Subscribe Now" button on the "first" upsell page
        Then The user fills out the shipping order form
        And The user verifies the next funnel upsell is "Burn PM"
        And The user dismisses the "Burn PM" offer
        And The user verifies the next funnel upsell is "VSU"
        And The user dismisses the "VSU" offer
        And The user clicks Add To Cart on the upsell page
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
        Then The user checks "Order Confirmation" email
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
