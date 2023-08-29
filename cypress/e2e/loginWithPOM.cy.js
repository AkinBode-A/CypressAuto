import Login from "../PageObject/loginPage";

describe ('POM', () => {

    it('LoginTest', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
    })

    it('Login with POM', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        const In = new Login();
        In.setUserName('Admin')
        In.setPassword('admin123')
        In.clickSubmit();
        In.verifyLogin();
        
        
    })

    it.only('Login with POM and Fixture', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('LoginPage').then((data) =>{

            const In = new Login();
            In.setUserName(data.username)
            In.setPassword(data.password)
            In.clickSubmit();
            In.verifyLogin();

        })
        
        
        
    })


})