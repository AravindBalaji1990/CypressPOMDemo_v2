import home from "../../pages/home"

describe('template spec', () => {
  before(function() {
    // executes prior each test within it block
    cy.log("BeforeEach hook")
 })
  
  it('passes check for url', () => {
    home.visit()
  })

  it("should search for a product", () => {
    home.visit()
    cy.fixture('searchdata').then(function(testdata){
      home.searchInput(testdata.data)
      home.getSearchButton().click()
  }) 
  })
})