
Feature: LE Move Landing page - VS Survey - Men - Ripped in 90 Days for $67.00
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Male VS Survey - "Ripped in 90 Days for $67.00" - Select All Funnels
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        Then The User "Subscribes" the "Burn Evolved" Funnel Offer
        And The user fills out the shipping order form
        Then The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        Then The User "Subscribes" the "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        When The user logs into the Admin Tool using an account with "admin" credentials
        Then The user searches the "Dynamic" test email
        Then The user clicks on the Order Id link in the Orders table
        Then The user collects the Transaction Reference from the Payments page and settles the payment for the order
        And The user sees the reference number on the Shipments page and sends the shipment for the order
        When The user clicks on the Shipment Id link in the Shipments table
        Then The user sees the shipment status as "awaiting_shipment" and sees "1" rows in the Fulfilment Logs section of the Shipment Details page
        Then The user verifies the shipment status is "Open" in Stord
        Then The user processes the shipment in Stord
        Then The user verifies the shipment status is "Shipped" in Stord
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user navigates to the Shipments page in the Admin Tool and searches for the Shipment Id
        And The user clicks on the Shipment Id link in the Shipments table
        Then The user sees the shipment status as "shipped" and sees "2" rows in the Fulfilment Logs section of the Shipment Details page
