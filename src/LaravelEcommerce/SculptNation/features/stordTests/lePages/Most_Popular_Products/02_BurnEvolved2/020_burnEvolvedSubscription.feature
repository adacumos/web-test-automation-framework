@shipments
Feature: Create Burn Evolved 2.0 orders via Sculptnation landing page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create subscription order from Most Popular Products page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Most Popular Products" section of the landing page
        Then The user clicks "Burn Evolved 2.0" bottle image 1 on the landing page
        And The user clicks Buy Now button from the product page
        And The user selects the Subscribe Now button under the One Bottle option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the Subscribe Now button under the One Bottle option on the "first" upsell page
        And The user clicks the Subscribe Now button under the One Bottle option on the "second" upsell page
        And The user clicks Add To Cart on the upsell page
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user searches the "Dynamic" test email
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
