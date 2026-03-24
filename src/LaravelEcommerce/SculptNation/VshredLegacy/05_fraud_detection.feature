@vsPrograms @clientPurchase @cdp @QA-2521 @vsBeta
Feature:  E2E: Fraud detection using Toned In 90 Days and verify blocked status in admin tool
    Background: Load test data
        Given The user loads the LE test data
    Scenario: VShred Programs: Toned In 90 Days as a blocked order
        Given The user starts on vshred "Toned In 90 Days" program page
        When The user skips video and clicks "Purchase Toned In 90 Days" button
        Then The user verifies the Checkout form Order details
        Then The user fills out the survey order form with specific fraud email
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the error message is displayed on the order summary page
        Then The user logs into the Vshred Admin Tool as "Admin" user
        When The user navigates to "Orders" menu of the VS Admin Tool
        Then The user searches for an order
        Then The user verifies the status of order
