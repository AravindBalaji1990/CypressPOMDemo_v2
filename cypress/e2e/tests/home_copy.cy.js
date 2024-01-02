import home from "../../pages/home"

describe('template spec', () => {
  
  before(function() {

    // executes prior each test within it block
    cy.log("before hook")
    cy.visit("https://ecommerce-playground.lambdatest.io")
 })

 after(function(){
    // executes prior each test within it block
    cy.log("after hook")
 })
  
  it('passes check for url', () => {
    home.visit()
    cy.screenshot("homepage_check")
  })

  it("should search for a product", () => {
    home.visit()
    cy.fixture('searchdata').then(function(testdata){
      home.searchInput(testdata.data)
      home.getSearchButton().click()
  }) 
  cy.screenshot("search_check")
  })
})