const pdpProductPrice = 'span[data-test="branded-price-whole-value"]'
const pdpAddToCartBtn = 'div[data-test="mms-cta-basket-wishlist"]'

class productDetail {

    static goToProductDetailPage(productId) {
        if (productId == "laptop") {
            cy.fixture('details').then((data) => {
                cy.visit(Cypress.config('baseUrl') + `nl/product/` + data.laptopProductId + `.html`).wait(5000)
            });
        }
    }

    static verifyProductPrice() {
        cy.get(pdpProductPrice).should('be.visible')
    }

    static verifyAddToCartButton() {
        cy.get(pdpAddToCartBtn).should('be.visible')

    }
}
export default productDetail
