

describe(' Css Locator', ()=>{

    it('Login 888', ()=>{

        const username = Cypress.env('username')
        const password = Cypress.env('password')

        cy.visit('http://www.888sport.com')
        cy.get('[data-testid="topMenuaCloginButton"]').click()
        cy.wait(2000)
        cy.get('input#rlLoginUsername').type(username, {log: false})
        cy.get('input#rlLoginPassword').type(password, {log: false}) 
        cy.get('button#rlLoginSubmit').click()
        cy.get('#onetrust-accept-btn-handler').click()
    })
})