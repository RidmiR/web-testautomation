import { When, Then } from "cypress-cucumber-preprocessor/steps";
import loginModal from '../pageObjects/loginModal'

Given("I open website", () => {
    cy.visit(Cypress.config('baseUrl'));
    loginModal.acceptSiteCookies()
})

When("Login with {string} credentials", (user) => {
    loginModal.openUserMenu()
    loginModal.clickLoginBtn()
    if (user === 'validUser') {
        loginModal.enterUserDetails(user)
    }
    loginModal.clickLoginBtnInLoginModal()
})

Then("User should be able to login successfully", () => {
    loginModal.openUserMenu()
    loginModal.userMenuItems()
})

When("User logs out of Application", () => {
    loginModal.clickLogoutBtn()
})

Then("User should get logout", () => {
    loginModal.getUserRegisterBtn()
})
