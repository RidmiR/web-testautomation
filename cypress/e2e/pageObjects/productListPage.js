const plpProductCard = 'div[data-test="mms-product-card"]'

class productList {

    static goToProductListPage(productCategory) {
        if (productCategory == "television") {
            cy.fixture('details').then((data) => {
                cy.visit(Cypress.config('baseUrl')+`/nl/category/` + data.televisionProductCategory + `.html`).wait(5000)
            });
        }
    }

    static verifyProductCard() {
        cy.get(plpProductCard).eq(1).should('be.visible')
    }
}
export default productList
