@QA-2324 @trainerTool @ttBeta @clientPurchase @levsSmoke
Feature:  E2E: Purchase Custom Diet Plan V Shred Landing Quiz
    Background: Load test data
        Given The user loads the LE test data
    Scenario: VShred Landing Quiz for Female - CDP Bumper
        Given The user navigates to VShred landing page
        When The user starts V Shred Quiz for "Female"
        And The User describes self as "I have 20 lbs or more fat"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Selects" Checkout Upsell Offer
        And The user verifies the next funnel upsell is "Burn Evolved"
        Then The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 3B Upsell" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        Then The User "Subscribes" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdpBumper"
        Then Verifies the CDP membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        Given The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        When A Trainer is assigned to the client user
        Then The user searches client record in Trainer Tool Assigned Plans page
        Given The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        Then The user searches client record in Trainer Tool Assigned Plans page
        When The user uploads a custom plan to client record
