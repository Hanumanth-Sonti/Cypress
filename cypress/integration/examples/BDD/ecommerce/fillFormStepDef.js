/// <reference types="Cypress" />
import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../../../support/pageObjects/HomePage'
const homePage = new HomePage()

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