@Production @green @survey-ga @man @survey-ga-green @negative
Feature: Survey-GA Male Negative Tests
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Survey-GA Male Overweight No Data
        When The user is in the "Male" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "data"
        Then Verify that "all" error message displays

    Scenario: Survey-GA Male Overweight No Name
        When The user is in the "Male" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "name"
        Then Verify that "no name" error message displays

    Scenario: Survey-GA Male Overweight No Email
        When The user is in the "Male" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "email"
        Then Verify that "no email" error message displays

    Scenario: Survey-GA Male Overweight No Phone
        When The user is in the "Male" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "phone"
        Then Verify that "no phone" error message displays

    Scenario: Survey-GA Male Overweight No Address
        When The user is in the "Male" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "address"
        Then Verify that "no address" error message displays

    Scenario: Survey-GA Male Overweight No City
        When The user is in the "Male" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "city"
        Then Verify that "no city" error message displays

    Scenario: Survey-GA Male Overweight No State
        When The user is in the "Male" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "state"
        Then Verify that "no state" error message displays

    Scenario: Survey-GA Male Overweight No Postal Code
        When The user is in the "Male" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "postal"
        Then Verify that "no postal" error message displays

    Scenario: Survey-GA Male Overweight No Credit Card Number
        When The user is in the "Male" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "card number"
        Then Verify that "no card number" error message displays

    Scenario: Survey-GA Male Overweight No Credit Card Expiration Month
        When The user is in the "Male" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "expiration month"
        Then Verify that "no expire month" error message displays

    Scenario: Survey-GA Male Overweight No Credit Card Expiration Year
        When The user is in the "Male" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "expiration year"
        Then Verify that "no expire year" error message displays

    Scenario: Survey-GA Male Overweight No CVV
        When The user is in the "Male" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "cvv"
        Then Verify that "no cvv" error message displays

    Scenario: Survey-GA Male Overweight No Payment Postal Code
        When The user is in the "Male" "Overweight" funnel page
        Then The user fills in the fields on the survey page without entering "card postal"
        Then Verify that "no payment postal" error message displays

    Scenario: Survey-GA Male Soft No Data
        When The user is in the "Male" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "data"
        Then Verify that "all" error message displays

    Scenario: Survey-GA Male Soft No Name
        When The user is in the "Male" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "name"
        Then Verify that "no name" error message displays

    Scenario: Survey-GA Male Soft No Email
        When The user is in the "Male" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "email"
        Then Verify that "no email" error message displays

    Scenario: Survey-GA Male Soft No Phone
        When The user is in the "Male" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "phone"
        Then Verify that "no phone" error message displays

    Scenario: Survey-GA Male Soft No Address
        When The user is in the "Male" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "address"
        Then Verify that "no address" error message displays

    Scenario: Survey-GA Male Soft No City
        When The user is in the "Male" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "city"
        Then Verify that "no city" error message displays

    Scenario: Survey-GA Male Soft No State
        When The user is in the "Male" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "state"
        Then Verify that "no state" error message displays

    Scenario: Survey-GA Male Soft No Postal Code
        When The user is in the "Male" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "postal"
        Then Verify that "no postal" error message displays

    Scenario: Survey-GA Male Soft No Credit Card Number
        When The user is in the "Male" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "card number"
        Then Verify that "no card number" error message displays

    Scenario: Survey-GA Male Soft No Credit Card Expiration Month
        When The user is in the "Male" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "expiration month"
        Then Verify that "no expire month" error message displays

    Scenario: Survey-GA Male Soft No Credit Card Expiration Year
        When The user is in the "Male" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "expiration year"
        Then Verify that "no expire year" error message displays

    Scenario: Survey-GA Male Soft No CVV
        When The user is in the "Male" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "cvv"
        Then Verify that "no cvv" error message displays

    Scenario: Survey-GA Male Soft No Payment Postal Code
        When The user is in the "Male" "Soft" funnel page
        Then The user fills in the fields on the survey page without entering "card postal"
        Then Verify that "no payment postal" error message displays

    Scenario: Survey-GA Male Slim No Data
        When The user is in the "Male" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "data"
        Then Verify that "all" error message displays

    Scenario: Survey-GA Male Slim No Name
        When The user is in the "Male" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "name"
        Then Verify that "no name" error message displays

    Scenario: Survey-GA Male Slim No Email
        When The user is in the "Male" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "email"
        Then Verify that "no email" error message displays

    Scenario: Survey-GA Male Slim No Phone
        When The user is in the "Male" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "phone"
        Then Verify that "no phone" error message displays

    Scenario: Survey-GA Male Slim No Address
        When The user is in the "Male" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "address"
        Then Verify that "no address" error message displays

    Scenario: Survey-GA Male Slim No City
        When The user is in the "Male" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "city"
        Then Verify that "no city" error message displays

    Scenario: Survey-GA Male Slim No State
        When The user is in the "Male" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "state"
        Then Verify that "no state" error message displays

    Scenario: Survey-GA Male Slim No Postal Code
        When The user is in the "Male" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "postal"
        Then Verify that "no postal" error message displays

    Scenario: Survey-GA Male Slim No Credit Card Number
        When The user is in the "Male" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "card number"
        Then Verify that "no card number" error message displays

    Scenario: Survey-GA Male Slim No Credit Card Expiration Month
        When The user is in the "Male" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "expiration month"
        Then Verify that "no expire month" error message displays

    Scenario: Survey-GA Male Slim No Credit Card Expiration Year
        When The user is in the "Male" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "expiration year"
        Then Verify that "no expire year" error message displays

    Scenario: Survey-GA Male Slim No CVV
        When The user is in the "Male" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "cvv"
        Then Verify that "no cvv" error message displays

    Scenario: Survey-GA Male Slim No Payment Postal Code
        When The user is in the "Male" "Slim" funnel page
        Then The user fills in the fields on the survey page without entering "card postal"
        Then Verify that "no payment postal" error message displays

    Scenario: Survey-GA Male Skinny No Data
        When The user is in the "Male" "Skinny" funnel page
        Then The user fills in the fields on the survey page without entering "data"
        Then Verify that "all" error message displays

    Scenario: Survey-GA Male Skinny No Name
        When The user is in the "Male" "Skinny" funnel page
        Then The user fills in the fields on the survey page without entering "name"
        Then Verify that "no name" error message displays

    Scenario: Survey-GA Male Skinny No Email
        When The user is in the "Male" "Skinny" funnel page
        Then The user fills in the fields on the survey page without entering "email"
        Then Verify that "no email" error message displays

    Scenario: Survey-GA Male Skinny No Phone
        When The user is in the "Male" "Skinny" funnel page
        Then The user fills in the fields on the survey page without entering "phone"
        Then Verify that "no phone" error message displays

    Scenario: Survey-GA Male Skinny No Address
        When The user is in the "Male" "Skinny" funnel page
        Then The user fills in the fields on the survey page without entering "address"
        Then Verify that "no address" error message displays

    Scenario: Survey-GA Male Skinny No City
        When The user is in the "Male" "Skinny" funnel page
        Then The user fills in the fields on the survey page without entering "city"
        Then Verify that "no city" error message displays

    Scenario: Survey-GA Male Skinny No State
        When The user is in the "Male" "Skinny" funnel page
        Then The user fills in the fields on the survey page without entering "state"
        Then Verify that "no state" error message displays

    Scenario: Survey-GA Male Skinny No Postal Code
        When The user is in the "Male" "Skinny" funnel page
        Then The user fills in the fields on the survey page without entering "postal"
        Then Verify that "no postal" error message displays

    Scenario: Survey-GA Male Skinny No Credit Card Number
        When The user is in the "Male" "Skinny" funnel page
        Then The user fills in the fields on the survey page without entering "card number"
        Then Verify that "no card number" error message displays

    Scenario: Survey-GA Male Skinny No Credit Card Expiration Month
        When The user is in the "Male" "Skinny" funnel page
        Then The user fills in the fields on the survey page without entering "expiration month"
        Then Verify that "no expire month" error message displays

    Scenario: Survey-GA Male Skinny No Credit Card Expiration Year
        When The user is in the "Male" "Skinny" funnel page
        Then The user fills in the fields on the survey page without entering "expiration year"
        Then Verify that "no expire year" error message displays

    Scenario: Survey-GA Male Skinny No CVV
        When The user is in the "Male" "Skinny" funnel page
        Then The user fills in the fields on the survey page without entering "cvv"
        Then Verify that "no cvv" error message displays

    Scenario: Survey-GA Male Skinny No Payment Postal Code
        When The user is in the "Male" "Skinny" funnel page
        Then The user fills in the fields on the survey page without entering "card postal"
        Then Verify that "no payment postal" error message displays
