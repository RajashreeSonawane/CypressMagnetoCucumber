class customerDetail {
  enterData(email, firstname, lastname, company, street_address, city, postal_code, phone) {
    cy.wait(10000)
    cy.get("#customer-email-fieldset > .required > .control > #customer-email").type(email)
    cy.get("#customer-email-fieldset > .required > .control > #customer-email").clear()
    cy.wait(10000)
    cy.xpath("//input[@name='firstname']").type(firstname)
    cy.xpath("//input[@name='firstname']").clear()
    cy.wait(2000)
    cy.xpath("//input[@name='lastname']").type(lastname)
    cy.xpath("//input[@name='lastname']").clear()
    cy.wait(2000)
    cy.xpath("//input[@name='company']").type(company)
    cy.xpath("//input[@name='company']").clear()
    cy.wait(2000)
    cy.xpath("//input[@name='street[0]']").type(street_address)
    cy.xpath("//input[@name='street[0]']").clear()
    cy.wait(2000)
    cy.xpath("//input[@name='city']").type(city)
    cy.xpath("//input[@name='city']").clear()
    cy.wait(2000)
    cy.xpath("//input[@name='postcode']").type(postal_code)
    cy.xpath("//input[@name='postcode']").clear()
    cy.wait(5000)
    cy.get('select[name="country_id"]').select('India').should('have.value', 'IN')
    cy.wait(15000)
    cy.get('select[name="region_id"]').select('Andhra Pradesh')
    cy.wait(10000)
    cy.xpath("//input[@name='telephone']").type(phone)
    cy.xpath("//input[@name='telephone']").clear()
    cy.wait(2000)
    cy.xpath("//*[@id='label_carrier_flatrate_flatrate']").click({ force: true })
    cy.wait(2000)
    cy.get(".button").click()
  }
}
export default customerDetail



