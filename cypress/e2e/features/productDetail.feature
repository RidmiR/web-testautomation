Feature: ProductDetail

    Background: Navigate to the home page
        Given I open website

    Scenario: I verify all elements on product Detail Page
        When Navigate to product detail page with "laptop"
        And I verify product price
        And I verify Add to cart button
        