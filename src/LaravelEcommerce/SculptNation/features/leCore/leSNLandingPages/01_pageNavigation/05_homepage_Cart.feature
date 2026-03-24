@GIT @leCore @homepage @lePage @clientPages
Feature: SculptNation Cart Page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Zero Cart Item
        Given The user navigates to the SculptNation homepage
        When The user clicks the "Cart" header icon
        Then The "Cart" page is loaded with the expected page sections

    Scenario: Non-Zero Cart Item
        Given The user navigates to the SculptNation homepage
        When The user navigates to "Weight Loss Fat Burning" section of the landing page
        Then The user clicks "Burn PM" bottle image 2 on the landing page
        And The user clicks Buy Now button from the product page
        And The user selects the Subscribe Now button under the One Bottle option and checks that the Cart data is correct
        When The user Continues Shopping and adds another product
        And The user adds "One Bottle" of product "Pre Workout" to cart
        And The user adds "Six Bottle" of product "HGH Boost" to cart
        And The user adds "Three Bottle" of product "Greens" to cart
        When The user applies a "valid" coupon code
        Then The cart total amount is updated

