@QA-2213 @klaviyoSmoke @klaviyoEvents @levsSmoke
Feature: Klaviyo Event - Six Pack Shred - /sp/six-pack-shred
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Sx Pack Shred - /sp/six-pack-shred
        Given Klaviyo Profile events are monitored
        When The user navigates to V Shred Survey page
        And The user clicks "Purchase Six-Pack Shred Now" button
        Then The user navigates to the "VS UCP" checkout form
        And The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
