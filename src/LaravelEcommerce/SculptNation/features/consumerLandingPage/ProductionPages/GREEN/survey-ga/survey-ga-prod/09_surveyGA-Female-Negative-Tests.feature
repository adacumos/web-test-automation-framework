@Production @green @survey-ga @woman @survey-ga-green @negative

Feature: Survey-GA Female Negative Tests
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Survey-GA Female Overweight No Data
        When The user is in the "Female" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "data"
        Then Verify that "all" error message displays

    Scenario: Survey-GA Female Overweight No Name
        When The user is in the "Female" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "name"
        Then Verify that "no name" error message displays

    Scenario: Survey-GA Female Overweight No Email
        When The user is in the "Female" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "email"
        Then Verify that "no email" error message displays

    Scenario: Survey-GA Female Overweight No Address
        When The user is in the "Female" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "address"
        Then Verify that "no address" error message displays

    Scenario: Survey-GA Female Overweight No City
        When The user is in the "Female" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "city"
        Then Verify that "no city" error message displays

    Scenario: Survey-GA Female Overweight No State
        When The user is in the "Female" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "state"
        Then Verify that "no state" error message displays

    Scenario: Survey-GA Female Overweight No Postal Code
        When The user is in the "Female" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "postal"
        Then Verify that "no postal" error message displays

    Scenario: Survey-GA Female Overweight No Credit Card Number
        When The user is in the "Female" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "card number"
        Then Verify that "no card number" error message displays

    Scenario: Survey-GA Female Overweight No Credit Card Expiration Month
        When The user is in the "Female" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "expiration date"
        Then Verify that "no expire date" error message displays

    Scenario: Survey-GA Female Overweight No CVV
        When The user is in the "Female" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "cvv"
        Then Verify that "no cvv" error message displays

    Scenario: Survey-GA Female Overweight No Payment Postal Code
        When The user is in the "Female" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "card postal"
        Then Verify that "no payment postal" error message displays

    Scenario: Survey-GA Female Soft No Data
        When The user is in the "Female" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "data"
        Then Verify that "all" error message displays
    Scenario: Survey-GA Female Soft No Name
        When The user is in the "Female" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "name"
        Then Verify that "no name" error message displays

    Scenario: Survey-GA Female Soft No Email
        When The user is in the "Female" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "email"
        Then Verify that "no email" error message displays

    Scenario: Survey-GA Female Soft No Phone
        When The user is in the "Female" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "phone"
        Then Verify that "no phone" error message displays

    Scenario: Survey-GA Female Soft No Address
        When The user is in the "Female" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "address"
        Then Verify that "no address" error message displays

    Scenario: Survey-GA Female Soft No City
        When The user is in the "Female" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "city"
        Then Verify that "no city" error message displays

    Scenario: Survey-GA Female Soft No State
        When The user is in the "Female" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "state"
        Then Verify that "no state" error message displays

    Scenario: Survey-GA Female Soft No Postal Code
        When The user is in the "Female" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "postal"
        Then Verify that "no postal" error message displays

    Scenario: Survey-GA Female Soft No Credit Card Number
        When The user is in the "Female" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "card number"
        Then Verify that "no card number" error message displays

    Scenario: Survey-GA Female Soft No Credit Card Expiration Month
        When The user is in the "Female" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "expiration month"
        Then Verify that "no expire month" error message displays

    Scenario: Survey-GA Female Soft No Credit Card Expiration Year
        When The user is in the "Female" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "expiration year"
        Then Verify that "no expire year" error message displays

    Scenario: Survey-GA Female Soft No CVV
        When The user is in the "Female" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "cvv"
        Then Verify that "no cvv" error message displays

    Scenario: Survey-GA Female Soft No Payment Postal Code
        When The user is in the "Female" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "card postal"
        Then Verify that "no payment postal" error message displays

    Scenario: Survey-GA Female Slim No Data
        When The user is in the "Female" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "data"
        Then Verify that "all" error message displays

    Scenario: Survey-GA Female Slim No Name
        When The user is in the "Female" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "name"
        Then Verify that "no name" error message displays

    Scenario: Survey-GA Female Slim No Email
        When The user is in the "Female" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "email"
        Then Verify that "no email" error message displays

    Scenario: Survey-GA Female Slim No Phone
        When The user is in the "Female" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "phone"
        Then Verify that "no phone" error message displays

    Scenario: Survey-GA Female Slim No Address
        When The user is in the "Female" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "address"
        Then Verify that "no address" error message displays

    Scenario: Survey-GA Female Slim No City
        When The user is in the "Female" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "city"
        Then Verify that "no city" error message displays

    Scenario: Survey-GA Female Slim No State
        When The user is in the "Female" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "state"
        Then Verify that "no state" error message displays

    Scenario: Survey-GA Female Slim No Postal Code
        When The user is in the "Female" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "postal"
        Then Verify that "no postal" error message displays

    Scenario: Survey-GA Female Slim No Credit Card Number
        When The user is in the "Female" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "card number"
        Then Verify that "no card number" error message displays

    Scenario: Survey-GA Female Slim No Credit Card Expiration Month
        When The user is in the "Female" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "expiration month"
        Then Verify that "no expire month" error message displays

    Scenario: Survey-GA Female Slim No Credit Card Expiration Year
        When The user is in the "Female" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "expiration year"
        Then Verify that "no expire year" error message displays

    Scenario: Survey-GA Female Slim No CVV
        When The user is in the "Female" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "cvv"
        Then Verify that "no cvv" error message displays

    Scenario: Survey-GA Female Slim No Payment Postal Code
        When The user is in the "Female" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "card postal"
        Then Verify that "no payment postal" error message displays
