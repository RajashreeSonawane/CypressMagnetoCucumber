class addtoProduct {
  addtoCart() {
    cy.wait(2000)
    cy.get("#option-label-size-143-item-167").click()
    cy.wait(2000)
    cy.get("#option-label-color-93-item-58").click({ force: true })
    cy.wait(2000)
    cy.get("#product-addtocart-button").click({ force: true })
    cy.wait(10000)
    cy.xpath('//a[@class="action showcart"]').click({ force: true })
    cy.xpath('//*[@id="top-cart-btn-checkout"]').realClick()
    cy.wait(15000)
  }
}
export default addtoProduct
