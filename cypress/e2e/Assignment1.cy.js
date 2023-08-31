import Ass1 from "../PageObject/AssessmentC";

describe('Automation Assignment', ()=>{

    let info
    before(() =>{
    cy.fixture('assessment').then((value) =>{
    info = value })
})

    it('Verify XYZ Bank Customer Bank ', () =>{

        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/') //loading page
        .url().should('include','globalsqa.com') //verify login page
        
        .title().should('eq',info.expected) // 2.Confirm the Title of the page is XYZ Bank

        const Use = new Ass1(); //new object

        Use.customerLogin();  // 3.Click on Customer Login

        cy.wait(2000) // 2 sec wait

        .get('#userSelect').select('Harry Potter').should('have.value',2) // 4.Choose any Name from the Your Name drop down
        
        Use.submit(); // 5.Click on Login

        Use.loginName();  // 6.Write an assertion to confirm the Name selected in Step 4 is displayed after Welcome

        Use.currency(); // 7.Confirm the Currency is Dollar (Use Assertion)
        
        cy.wait(2000) // 2 sec wait

        Use.deposit(); // 8.Click on Deposit

        cy.wait(1000) //1 sec wait

        Use.depositOrWithdrawlAmount(info.amount); // 9.Enter the amount in Amount to be Deposited textbox

        Use.submit(); // 10.Click on Deposit

        cy
        .get("span[ng-show='message']")
        .should('have.text',info.successfullD) // 11.Confirm "Deposit Successful" is displayed

        .wait(2000) // 2 sec wait

        Use.transaction(); // 12.Click on Transactions

        cy.get("td[class='ng-binding']").eq(1).should('have.text',info.amount) // 13.Confirm the amount entered in Step 9 is displayed under Amount column

        .get("td[class='ng-binding']").last().should('contain','Credit') // 14.Confirm the Transaction Type is credit

        .wait(2000) // 2 sec wait

        Use.backBtn(); // 15.Click on Back button

        Use.withdrawl(); //16.Click on Withdrawl

        cy.wait(2000) // 2 sec wait

        Use.depositOrWithdrawlAmount(info.amount); // 17.Enter the same amount you deposited

        Use.submit(); // 18.Click on Withdraw

        cy
        .get("span[ng-show='message']")
        .should('have.text',info.successfullT) // 19.Confirm "Transaction Successful" is displayed

        .wait(2000) // 2 sec wait

        Use.transaction(); // 20.Click on Transactions

        cy.get("td[class='ng-binding']").last().should('contain','Debit') //21. Confirm there is one more row with Transaction Type is debit

        


    })



})