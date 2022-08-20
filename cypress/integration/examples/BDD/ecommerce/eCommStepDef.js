/// <reference types="Cypress" />
import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../../../support/pageObjects/HomePage'
const homePage = new HomePage()

/*
Add in package.json

  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
  },
*/

//Scenario 1
Given('I open an E-Commerce Application',function()
{
    cy.visit(Cypress.env("url")+ "/angularpractice/" )
})

When('I add items to a Cart',function() {
    //Navigate to Shop Tab
    homePage.getShopTab().click()

    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    })
})

And('I will validate Total Prices',function()
{
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
})

Then('Select Country and very Thank You',function()
{
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

//Scenario 2
Given('I will open the E-Commerce Application', function() {
    cy.visit(Cypress.env("url")+ "/angularpractice/" )
})

When('I will fill the form', function(dataTable)
{
      //Enter a name
      homePage.getEditBox().type(dataTable.rawTable[1][0])
      
      //Select Gender
      homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('I will validate the form',function(dataTable)
{
    //Check Min Length
    homePage.getEditBox().should('have.attr','minLength',2)
    
    //Validate Two Way Data Binding
    homePage.getTwoWayDataBinding().should('have.value',dataTable.rawTable[1][0])
     

    //Chech Enterprenuer Behavior
    homePage.getEnterprenuer().should('be.disabled')

})

And('Go to Shop Tab',function() {
    //Navigate to Shop Tab
    homePage.getShopTab().click()

})