@FET-826 @klaviyoEvents @FE-sprint-7 @frontend
Feature: Metabolic Rehab Program - coaching.vshred.com/products
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Metabolic Rehab Program - Coaching Plans
        Given The user starts on "VShred Coaching" "Catalog" page
        Then User select "Coaching Plans" from the home page
        Then User select "Turbo 30" the specific coaching plan
        Then Verify the user is on the correct "Turbo 30" coaching page
        Then Select Add to cart
        Then Verify cart page and select checkout
        Then Verify chechout page

    Scenario: Metabolic Rehab Program - Home Page
        Given The user starts on "VShred Coaching" "Catalog" page
        Then User select "Home Page" from the home page
        Then User select "Accelerator Plus" the specific coaching plan
        Then Verify the user is on the correct "Accelerator Plus" coaching page
        Then Select Add to cart
        Then Verify cart page and select checkout
        Then Verify chechout page

    Scenario: Metabolic Rehab Program - Plans
        Given The user starts on "VShred Coaching" "Catalog" page
        Then User select "Plans" from the home page
        Then User select "Accelerator Renewal" the specific coaching plan
        Then Verify the user is on the correct "Accelerator Renewal" coaching page
        Then Select Add to cart
        Then Verify cart page and select checkout
        Then Verify chechout page

