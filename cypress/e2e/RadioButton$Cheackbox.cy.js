describe('UI Element', ()=>{

    it('Checking Radio Buttons', ()=>{
    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('input[value="radio1"]').should('be.visible')
        cy.get('input[value="radio2"]').should('be.visible')
        cy.get('input[value="radio3"]').should('be.visible')

        cy.get('input[value="radio1"]').check().should('be.checked')
        cy.get('input[value="radio2"]').should('not.be.checked')
        cy.get('input[value="radio3"]').should('not.be.checked')
        })

})
it.skip('Checking Checkboxes', ()=>{
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
    cy.get('#checkBoxOption1').should('be.visible')
    cy.get('#checkBoxOption2').should('be.visible')
    cy.get('#checkBoxOption3').should('be.visible')

    cy.get('#checkBoxOption1').check().should('be.checked')
    cy.get('#checkBoxOption2').check().should('be.checked')
    cy.get('#checkBoxOption3').uncheck().should('not.be.checked')

    cy.get('input[type="checkbox"]').first().check()
    cy.get('input[type="checkbox"]').last().check()

    cy.get('input[type="checkbox"]').check(['option1' , 'option3'])
    //cy.get('input[value="radio1"]').check().should('be.checked')
    //cy.get('input#monday').uncheck().should('not.be.checked')

    //cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
    //cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')
    })

