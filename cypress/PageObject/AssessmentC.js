class Ass1
{

    CusLogin="button[ng-click='customer()']"
    Login= "button[type='submit']"
    nameMessage="span[class='fontBig ng-binding']"
    Currency="strong[class='ng-binding']"
    Deposit="button[ng-click='deposit()']"
    DepositOrWithdrawlAmount="input[placeholder='amount']"
    Transaction="button[ng-click='transactions()']"
    Back="button[ng-click='back()']"
    Withdrawl="button[ng-click='withdrawl()']"
    

    customerLogin()
     {
        cy.get(this.CusLogin).click();
     }

     submit()
     {
        cy.get(this.Login).click();
     }

     loginName()
     {
        cy.get(this.nameMessage).should('have.text','Harry Potter');
     }

     currency()
     {
        cy.get(this.Currency).last().should('have.text','Dollar')
     }

     deposit()
     {
        cy.get(this.Deposit).click();
     }

     depositOrWithdrawlAmount(amount)
     {
        cy.get(this.DepositOrWithdrawlAmount).type(amount)
     }

     message()
     {
        cy.get(this.Message).should
     }

     transaction()
     {
        cy.get(this.Transaction).click();
     }

     backBtn()
     {
        cy.get(this.Back).click();
     }
     
     withdrawl()
     {
        cy.get(this.Withdrawl).click();
     }





}
export default Ass1;