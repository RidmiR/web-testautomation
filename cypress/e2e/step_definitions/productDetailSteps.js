import { When, And } from "cypress-cucumber-preprocessor/steps";
import productDetail from '../pageObjects/productDetailPage'
import loginModal from '../pageObjects/loginModal'

Given("I open website", () => {
    cy.visit(Cypress.config('baseUrl'));
    loginModal.acceptSiteCookies()
})

When("Navigate to product detail page with {string}", (productId) => {
    productDetail.goToProductDetailPage(productId)
})

And("I verify product price", () => {
    productDetail.verifyProductPrice
})

And("I verify Add to cart button", () => {
    productDetail.verifyAddToCartButton
})


