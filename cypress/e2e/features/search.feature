Feature: Search

    Background: Navigate to the home page
        Given I open website

    Scenario: search with product category
        And I click on Search bar
        Then I search a product category
        Then I verify product category overview
        