const { defineConfig } = require("cypress");
//const Mochawesome = require("mochawesome");
//const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: '3e3ey4',
  defaultCommandTimeout: 120000,
  //retries : {
    //runMode: 1
  //},
  env:{
    url: "https://rahulshettyacademy.com"
  },

  e2e: {
    setupNodeEvents(on, config) {
      //on('file:preprocessor', cucumber())
    },
    //specPattern: 'cypress/integration/examples/BDD/*.feature'
    specPattern: 'cypress/integration/examples/*.js'
  },
});
