describe('Dropdown demo', ()=>{

    it('Dropdown suit',()=>{

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country').select('Nigeria').should('have.value','Nigeria')

    })

    it('Dropdown type',()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Iran').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Iran')
    })

    it('Auto Suggest Dropbox',()=>{

        cy.visit('https://www.wikipedia.org')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
    })
    it('Dynamic Dropbox',()=>{

        cy.visit('https://www.wikipedia.org')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
    })
    it.only('Auto Suggest Dropbox',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item-wrapper').each(($el,index,$list) =>{
             
            if($el.text()=='India')
            {
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')
    })

})