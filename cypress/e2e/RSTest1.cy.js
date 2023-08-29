describe('RS 1st Test Suite', ()=>{

it('RS 1st TestCase', ()=>{

    cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')

    cy.get('.search-keyword').type('ca')
    //cy.wait(2000)
    //cy.get('.product:visible').should('have.length',4)

    cy.get('.products').as('allproducts')
    cy.get('@allproducts').find('.product').should('have.length',4)

})





})