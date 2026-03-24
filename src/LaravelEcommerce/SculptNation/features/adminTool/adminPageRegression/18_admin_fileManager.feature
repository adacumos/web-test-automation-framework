@QA-1737 @MD @adminTool
Feature: LE Admin Page Regression - File Manager
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create New Folder and Upload a File
        Given The user navigates to "Filemanager" sidebar menu
        When The user "Creates" a Folder
        And The user "Opens" a Folder
        Then The user "Uploads" a File
        And The user "Previews" a File

    Scenario: Deletes an uploaded File
        Given The user navigates to "Filemanager" sidebar menu
        And The user "Opens" a Folder
        Then The user "Deletes" a File

    Scenario: Renames an uploaded File
        Given The user navigates to "Filemanager" sidebar menu
        And The user "Opens" a Folder
        When The user "Uploads" a File
        Then The user "Renames" a File

    Scenario: Deletes a Folder
        Given The user navigates to "Filemanager" sidebar menu
        Then The user "Deletes" a Folder
