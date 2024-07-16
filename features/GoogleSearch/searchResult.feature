Feature: Google search
    Scenario: search from the search bar produces correct links
        Given a browser is open and at google home page
        When user enters "cucumber" in search bar
        Then links related to "cucumber" shows up as result