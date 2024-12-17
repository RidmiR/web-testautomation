Feature: ProductList

    Background: Navigate to the home page
        Given I open website

    Scenario: PLP funtionality Check
        When Navigate to "television" product listing page
        And Verify product cards are visible
