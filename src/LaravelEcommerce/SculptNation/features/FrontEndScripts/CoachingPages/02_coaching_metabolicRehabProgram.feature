@FET-826 @klaviyoEvents @FE-sprint-7 @frontend
Feature: Metabolic Rehab Program - coaching.vshred.com/products
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Metabolic Rehab Program - Buy it now
        Given The user starts on "VShred Coaching" "Metabolic Rehab Program" page
        Then Verify the user is on the correct "Metabolic Rehab Program" coaching page
        Then Select Buy it now
        Then Verify chechout page

    Scenario: Metabolic Rehab Program - Buy it now
        Given The user starts on "VShred Coaching" "Metabolic Rehab Program" page
        Then Verify the user is on the correct "Metabolic Rehab Program" coaching page
        Then Select Add to cart
        Then Verify cart page and select checkout
        Then Verify chechout page

