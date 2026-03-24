@vsPrograms @clientPurchase @cdp @QA-2515 @vsBeta
Feature:  E2E: Fat Loss Extreme for Him plus VSU and checkout
    Background: Load test data
        Given The user loads the LE test data
    Scenario: VShred Programs: Fat Loss Extreme - VSU
        Given The user starts on vshred "Fat Loss" program page
        When The user clicks "Yes I Want Fat Loss Extreme" button
        Then The user verifies the Checkout form Order details
        Then The user fills out the funnel order form
        And The user clicks on "VSU upgrade" button
        And The user dismisses the "CDP" offer with link
        And The User "Declines" the "Greens" Funnel Offer
        Then The user verfies the Order Total on the Order Confirmation Page
        Then The user verfies Sales Tax on the Order Confirmation Page
        Then The user verfies the Fat Loss Extreme for Him Program and Price on the Order Confirmation Page
        Then The user verfies the VSU - Monthly - 9.95 30 Days Free Program and Price on the Order Confirmation Page
        Then The user checks "Order Confirmation" email
