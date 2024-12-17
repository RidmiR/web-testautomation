const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

const url = "https://www.mediamarkt.nl/"

module.exports = defineConfig({ 
  e2e: { 
    setupNodeEvents(on, config) 
    { 
      on('file:preprocessor', cucumber()) 
  }, 
  specPattern: "cypress/e2e/features/*.feature", 
  baseUrl: url,
  pageLoadTimeout: 100000
}, 
});