describe('Zero Delay', ()=>{

    it('ZeroDelay TestCase', ()=>{
    
        cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo')
        //cy.get("#user-message").type("Test automation in cypress")
        cy.get("#user-message").type("Test automation in cypress",{delay:0})
        
    })
})