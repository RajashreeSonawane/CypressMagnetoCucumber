import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import homeProduct from '../Pages/homeProduct';
import addtoProduct from '../Pages/addtoProduct';
import customerDetail from '../Pages/customerDetail';
import orderSummary from '../Pages/orderSummary';
let productTestg
before(function () {
      cy.fixture('product').then(function (productTest) {
            productTestg = productTest
            cy.log(productTest.Product_name)
      })
})
Given("user navigate to automation website", function () {
      cy.visit("https://magento.softwaretestingboard.com")
});
When("choose magneto product", function () {
      const home = new homeProduct();
      home.chooseProduct()
});
When("select magneto product", function () {
      const addproduct = new addtoProduct()
      addproduct.addtoCart()
});
When("filling customer data", (datatable) => {
      const customer = new customerDetail()
      datatable.hashes().forEach((element) => {
            customer.enterData(element.email, element.firstname, element.lastname, element.company, element.street_address, element.city, element.postal_code, element.phone)
      })
});
Then("verify order summary", function () {
      const order = new orderSummary()
      cy.log(productTestg.Product_name)
      order.verifyOrder(productTestg.Product_name, productTestg.Product_quantity, productTestg.Product_price)
})