Feature: Login
    Background: Navigate to the home page
        Given I open website
        
    Scenario: Valid User Login
        When Login with "validUser" credentials
        Then User should be able to login successfully
        When User logs out of Application
        Then User should get logout