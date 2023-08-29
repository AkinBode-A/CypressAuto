describe('My First Test', () =>{

    it('Verify Title Positive', () =>{
        cy.visit("http://www.888sport.com/football/")

        cy.title().should('eq','Football Betting & Football Odds › 888sport')
    })

    it('Verify Title Negative', () =>{
        
        cy.visit("http://www.888sport.com/football/")

        cy.title().should('eq','tennis Betting & Football Odds › 888sport')
    })







})