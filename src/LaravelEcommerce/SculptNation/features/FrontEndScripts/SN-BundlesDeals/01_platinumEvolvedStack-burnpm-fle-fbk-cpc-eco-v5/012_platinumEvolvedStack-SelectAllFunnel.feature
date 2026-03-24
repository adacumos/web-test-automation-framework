@QA-1444 @lePageMove @leShort @reTest @frontend @FE-sprint-4
Feature: LE Move Landing page - Platinum Evolved Stack - Select ALL Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and Selects All Funnel Offers
        Given The user navigates to "Burn-PM" CMS Offer page
        When The user clicks the first buy now from the offer page
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The user "Selects All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectAllFunnels"
