@QA-2324 @trainerTool @vsPrograms @clientPurchase @cdp @levsSmoke
Feature:  E2E: Purchase Custom Diet Plan as a Bumper to Digital purchase
    Background: Load test data
        Given The user loads the LE test data
    Scenario: VShred Programs: Fatloss Extreme for Her - CDP Bumper
        Given The user navigates to VShred landing page
        When The user selects VShred "Fat Loss for Her" Program
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        And The user clicks on "VSU upgrade" button
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "cdpBumper"
        Then The user clears out the session data
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdpBumper"
        Then Verifies the CDP membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        Given The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        Then The user searches client record in Trainer Tool Unassigned Plans page

    @mobileView
    Scenario: VShred Programs: Fatloss Extreme for Her - CDP Funnel
        Given The user Resizes the browser to "Samsung S10"
        And The user navigates to VShred landing page
        When The user selects VShred "Fat Loss for Her" Program
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The user Resizes the browser to desktop view
        Then The Orders are sync in the Admin Tool - "cdpFunnel"
        Then The user clears out the session data
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdpFunnel"
        Then Verifies the CDP membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        Given The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        When A Trainer is assigned to the client user
        Then The user searches client record in Trainer Tool Assigned Plans page
        Given The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        Then The user searches client record in Trainer Tool Assigned Plans page
        When The user uploads a custom plan to client record
