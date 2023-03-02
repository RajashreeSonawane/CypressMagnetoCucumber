class homeProduct {
   chooseProduct() {
      cy.get('#ui-id-4 > :nth-child(2)').realHover();
      cy.wait(5000)
      cy.get('#ui-id-9').realHover();
      cy.wait(5000)
      cy.get('#ui-id-13').click({ force: true })
      cy.get(':nth-child(7) > .product-item-info > .details > .name > .product-item-link').click()
   }
}
export default homeProduct

