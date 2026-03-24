@blog
Feature: Blog cateogy filters

    Scenario: The user filters articles based on one of the categories available using the dropdown
        Given The user visits the VShred blog page
        Then The user "does not see" the article labeled "What Should I Do For HIIT Cardio?" on the blog page
        When The user selects "HIIT" from the blog article categories dropdown list
        Then The user "sees" the article labeled "What Should I Do For HIIT Cardio?" on the blog page

    Scenario: The user filters articles based on one of the categories available using the quicklinks on the right hand side
        Given The user visits the VShred blog page
        Then The user "does not see" the article labeled "What Are Supersets and Circuits?" on the blog page
        When The user selects "Body Workouts" from the blog article categories quicklinks
        Then The user "sees" the article labeled "What Are Supersets and Circuits?" on the blog page
