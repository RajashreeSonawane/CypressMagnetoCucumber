class orderSummary {
  verifyOrder(Product_name, Product_quantity, Product_price) {
    cy.get('.opc-block-summary'),
      cy.wait(5000)
    cy.get('.block > .title').click(),
      cy.wait(5000)
    cy.get('.product-item-name')
      .should('contain.text', Product_name)
      .should('be.visible')
    cy.wait(5000)
    cy.get('.details-qty')
      .should('contain.text', Product_quantity)
      .should('be.visible')
    cy.wait(5000)
    cy.get('.cart-price > .price')
      .should('contain.text', Product_price)
      .should('be.visible')
  }
}
export default orderSummary