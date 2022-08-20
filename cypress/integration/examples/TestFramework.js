import HomePage from "../../support/pageObjects/HomePage"
describe('Framework with Page Objects',function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
        cy.visit(Cypress.env("url")+'/angularpractice/')
    })

    it('My First Test Case',function(){
        const homePage = new HomePage()

        //Enter a name
        homePage.getEditBox().clear()
        homePage.getEditBox().type(this.data.name)
        homePage.getEditBox().should('have.attr','minLength',2)

        //Select Gender
        homePage.getGender().select(this.data.gender)

        //Validate
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
       

        //Chech behavior
        homePage.getEnterprenuer().should('be.disabled')

        //Navigate to Shop Tab
        homePage.getShopTab().click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })

        //Click Checkout button
        homePage.clickCheckOut().click()

        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list) => {
            const amount = $el.text()
            var result = amount.split(" ")
            //cy.log('Result : '+result)
            result = result[1].trim()
            result = parseFloat(result)
            cy.log('Result: '+result)
            sum = Number(sum) + Number(result)
        }).then(function(){
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element){
            const amount = element.text()
            var result = amount.split(" ")
            var total = result[1].trim()
            expect(Number(total)).to.equal(sum)
        })

    
        //Complete Checkout
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force:true})
        cy.get('input[value="Purchase"]').click()
        cy.get('.alert.alert-success').then(function(element){
            const alertMsg = element.text()
            expect(alertMsg.includes('Success')).to.be.true
        })
    })
})