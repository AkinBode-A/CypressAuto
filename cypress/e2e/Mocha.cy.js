beforeEach(function () {
    cy.log('---Before Suites----')
})
afterEach(function () {
    cy.log('---After Suites----')
})
before(function () {
    cy.log('---Before first testcase----')
})
after(function () {
    cy.log('---After last testcase----')
})
describe('Test Suite 1', ()=>{
    
    beforeEach(function () {
        cy.log('---Before each testcase----')
    })
    
    it('Test Suit 1 - TC1', ()=>{
        cy.log('This is my 1st suite 1 TC')
    })
    it('Test Suit 1 - TC1', ()=>{
        cy.log('This is my 1st suite 2 TC')
    })
})
describe('Test Suite 2', ()=>{

    it('Test Suit 2 - TC1', ()=>{
        cy.log('This is my 2nd suite 1 TC')
    })
    it('Test Suit 2 - TC2', ()=>{
        cy.log('This is my 2nd suite 2 TC')
    })
})
